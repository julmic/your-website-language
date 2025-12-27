/**
 * Browser-compatible frontmatter parser
 * Replaces gray-matter which requires Node.js Buffer API
 */

export interface ParsedMarkdown {
  data: Record<string, unknown>;
  content: string;
}

/**
 * Get the indentation level of a line
 */
function getIndent(line: string): number {
  const match = line.match(/^(\s*)/);
  return match ? match[1].length : 0;
}

/**
 * Check if value is a block scalar indicator (| or >)
 */
function isBlockScalarIndicator(value: string): boolean {
  const trimmed = value.trim();
  return /^[|>][-+]?$/.test(trimmed);
}

/**
 * Parse block scalar content (| for literal, > for folded)
 */
function parseBlockScalar(lines: string[], startIdx: number, baseIndent: number, indicator: string): { value: string; endIdx: number } {
  const isFolded = indicator.startsWith('>');
  const resultLines: string[] = [];
  let i = startIdx;
  let blockIndent = -1;

  while (i < lines.length) {
    const line = lines[i];
    const lineIndent = getIndent(line);
    const trimmed = line.trim();

    // First non-empty line determines block indent
    if (blockIndent === -1 && trimmed) {
      blockIndent = lineIndent;
      if (blockIndent <= baseIndent) {
        // No content for this block
        break;
      }
    }

    // Empty line within block
    if (!trimmed) {
      if (blockIndent !== -1) {
        resultLines.push('');
      }
      i++;
      continue;
    }

    // Line is less indented than block - end of block
    if (blockIndent !== -1 && lineIndent < blockIndent) {
      break;
    }

    // Line at or beyond block indent - part of content
    if (blockIndent !== -1 && lineIndent >= blockIndent) {
      // Remove the block indent prefix
      const content = line.slice(blockIndent);
      resultLines.push(content);
      i++;
    } else if (blockIndent === -1) {
      i++;
    } else {
      break;
    }
  }

  // Trim trailing empty lines
  while (resultLines.length > 0 && resultLines[resultLines.length - 1] === '') {
    resultLines.pop();
  }

  let result: string;
  if (isFolded) {
    // Folded style: replace single newlines with spaces, preserve double newlines as paragraphs
    result = resultLines.join('\n').replace(/([^\n])\n([^\n])/g, '$1 $2');
  } else {
    // Literal style: preserve all newlines
    result = resultLines.join('\n');
  }

  return { value: result, endIdx: i };
}

/**
 * Parse inline YAML flow style object: { key: "value", key2: "value2" }
 */
function parseInlineObject(value: string): Record<string, unknown> | null {
  const trimmed = value.trim();
  if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) {
    return null;
  }
  
  const inner = trimmed.slice(1, -1).trim();
  if (!inner) return {};
  
  const obj: Record<string, unknown> = {};
  
  // Parse key-value pairs, handling quoted strings with commas
  let current = '';
  let inQuotes = false;
  let quoteChar = '';
  const pairs: string[] = [];
  
  for (let i = 0; i < inner.length; i++) {
    const char = inner[i];
    
    if (!inQuotes && (char === '"' || char === "'")) {
      inQuotes = true;
      quoteChar = char;
      current += char;
    } else if (inQuotes && char === quoteChar) {
      inQuotes = false;
      quoteChar = '';
      current += char;
    } else if (!inQuotes && char === ',') {
      pairs.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    pairs.push(current.trim());
  }
  
  // Parse each pair
  for (const pair of pairs) {
    const colonIdx = pair.indexOf(':');
    if (colonIdx > 0) {
      const key = pair.slice(0, colonIdx).trim();
      let val = pair.slice(colonIdx + 1).trim();
      
      // Remove quotes from value
      if ((val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      
      obj[key] = parseValue(val);
    }
  }
  
  return obj;
}

/**
 * Parse YAML value with type detection
 */
function parseValue(value: string): unknown {
  const trimmed = value.trim();
  
  if (!trimmed) return '';
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed === 'null' || trimmed === '~') return null;
  if (/^-?\d+$/.test(trimmed)) return parseInt(trimmed, 10);
  if (/^-?\d+\.\d+$/.test(trimmed)) return parseFloat(trimmed);
  
  // Check for inline object
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
    const obj = parseInlineObject(trimmed);
    if (obj) return obj;
  }
  
  // Remove quotes
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  
  return trimmed;
}

/**
 * Parse YAML recursively
 */
function parseYAMLLines(lines: string[], startIdx: number, baseIndent: number): { value: unknown; endIdx: number } {
  if (startIdx >= lines.length) {
    return { value: null, endIdx: startIdx };
  }

  const firstLine = lines[startIdx];
  const firstTrimmed = firstLine.trim();

  // Check if it's an array start
  if (firstTrimmed.startsWith('- ')) {
    const arr: unknown[] = [];
    let i = startIdx;

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();
      const indent = getIndent(line);

      // Empty line - skip
      if (!trimmed) {
        i++;
        continue;
      }

      // Back to parent level or less
      if (indent < baseIndent) {
        break;
      }

      // Not an array item at expected indent
      if (indent === baseIndent && !trimmed.startsWith('- ')) {
        break;
      }

      // Process array item
      if (trimmed.startsWith('- ')) {
        const itemContent = trimmed.slice(2).trim();
        
        // Check for inline flow-style object: - { key: "value", ... }
        if (itemContent.startsWith('{') && itemContent.endsWith('}')) {
          const inlineObj = parseInlineObject(itemContent);
          if (inlineObj) {
            arr.push(inlineObj);
            i++;
            continue;
          }
        }
        
        // Check for inline object: "- key: value"
        const colonIdx = itemContent.indexOf(':');
        if (colonIdx > 0 && !itemContent.startsWith('"') && !itemContent.startsWith("'")) {
          // It's an object - collect all properties
          const obj: Record<string, unknown> = {};
          const key = itemContent.slice(0, colonIdx).trim();
          const val = itemContent.slice(colonIdx + 1).trim();
          
          if (val) {
            obj[key] = parseValue(val);
          } else {
            // Value might be on next lines (nested)
            const nextIdx = i + 1;
            if (nextIdx < lines.length) {
              const nextLine = lines[nextIdx];
              const nextIndent = getIndent(nextLine);
              if (nextIndent > indent + 2) {
                const { value: nestedVal, endIdx } = parseYAMLLines(lines, nextIdx, nextIndent);
                obj[key] = nestedVal;
                i = endIdx;
              }
            }
          }
          
          // Look for more properties of this object
          i++;
          const objItemIndent = indent + 2; // Properties are indented 2 more than the dash
          
          while (i < lines.length) {
            const propLine = lines[i];
            const propTrimmed = propLine.trim();
            const propIndent = getIndent(propLine);
            
            if (!propTrimmed) {
              i++;
              continue;
            }
            
            // Back to array level or parent
            if (propIndent <= indent) {
              break;
            }
            
            // Property at object level
            if (propIndent >= objItemIndent) {
              const propColonIdx = propTrimmed.indexOf(':');
              if (propColonIdx > 0) {
                const propKey = propTrimmed.slice(0, propColonIdx).trim();
                const propVal = propTrimmed.slice(propColonIdx + 1).trim();
                
                if (propVal) {
                  obj[propKey] = parseValue(propVal);
                  i++;
                } else {
                  // Nested value on next lines
                  const nextIdx = i + 1;
                  if (nextIdx < lines.length) {
                    const nextLine = lines[nextIdx];
                    const nextIndent = getIndent(nextLine);
                    if (nextIndent > propIndent) {
                      const { value: nestedVal, endIdx } = parseYAMLLines(lines, nextIdx, nextIndent);
                      obj[propKey] = nestedVal;
                      i = endIdx;
                    } else {
                      obj[propKey] = null;
                      i++;
                    }
                  } else {
                    obj[propKey] = null;
                    i++;
                  }
                }
              } else {
                i++;
              }
            } else {
              break;
            }
          }
          
          arr.push(obj);
        } else {
          // Simple string value
          arr.push(parseValue(itemContent));
          i++;
        }
      } else {
        i++;
      }
    }
    
    return { value: arr, endIdx: i };
  }

  // It's an object
  const obj: Record<string, unknown> = {};
  let i = startIdx;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    const indent = getIndent(line);

    if (!trimmed) {
      i++;
      continue;
    }

    if (indent < baseIndent) {
      break;
    }

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx > 0) {
      const key = trimmed.slice(0, colonIdx).trim();
      const val = trimmed.slice(colonIdx + 1).trim();

      if (val) {
        obj[key] = parseValue(val);
        i++;
      } else {
        // Value on next lines
        const nextIdx = i + 1;
        if (nextIdx < lines.length) {
          const nextLine = lines[nextIdx];
          const nextTrimmed = nextLine.trim();
          const nextIndent = getIndent(nextLine);
          
          if (nextIndent > indent && nextTrimmed) {
            const { value: nestedVal, endIdx } = parseYAMLLines(lines, nextIdx, nextIndent);
            obj[key] = nestedVal;
            i = endIdx;
          } else {
            obj[key] = null;
            i++;
          }
        } else {
          obj[key] = null;
          i++;
        }
      }
    } else {
      i++;
    }
  }

  return { value: obj, endIdx: i };
}

/**
 * Parse frontmatter from markdown content
 * Compatible with browser environments (no Buffer dependency)
 */
export function parseFrontmatter(content: string): ParsedMarkdown {
  const frontmatterRegex = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatterStr = match[1];
  const body = match[2];
  
  const lines = frontmatterStr.split('\n');
  const data: Record<string, unknown> = {};
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    
    if (!trimmed) {
      i++;
      continue;
    }
    
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx <= 0) {
      i++;
      continue;
    }
    
    const key = trimmed.slice(0, colonIdx).trim();
    const val = trimmed.slice(colonIdx + 1).trim();
    const currentIndent = getIndent(line);
    
    // Check for block scalar indicator (| or >)
    if (isBlockScalarIndicator(val)) {
      const { value: blockValue, endIdx } = parseBlockScalar(lines, i + 1, currentIndent, val);
      data[key] = blockValue;
      i = endIdx;
    } else if (val) {
      data[key] = parseValue(val);
      i++;
    } else {
      // Complex value on next lines
      const nextIdx = i + 1;
      if (nextIdx < lines.length) {
        const nextLine = lines[nextIdx];
        const nextTrimmed = nextLine.trim();
        const nextIndent = getIndent(nextLine);
        
        if (nextTrimmed && nextIndent > 0) {
          const { value: nestedVal, endIdx } = parseYAMLLines(lines, nextIdx, nextIndent);
          data[key] = nestedVal;
          i = endIdx;
        } else {
          data[key] = null;
          i++;
        }
      } else {
        data[key] = null;
        i++;
      }
    }
  }
  
  return { data, content: body };
}

/**
 * Alias for backward compatibility
 */
export function parseMarkdown(content: string): { data: Record<string, unknown>; content: string } {
  const result = parseFrontmatter(content);
  return { data: result.data, content: result.content };
}
