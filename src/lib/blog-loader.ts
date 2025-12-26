// Blog content loader for CMS-managed articles
// This module provides functions to load and filter blog articles from Markdown files

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  author?: string;
  featured?: boolean;
  hasCustomComponent?: boolean;
  content?: string;
}

// Static import of all blog markdown files
// In a production build with SSG, these would be loaded at build time
const blogModules = import.meta.glob('@content/blog/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
});

// Parse frontmatter from markdown content
function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const frontmatterStr = match[1];
  const body = match[2];
  
  const frontmatter: Record<string, any> = {};
  const lines = frontmatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse booleans
      if (value === 'true') {
        frontmatter[key] = true;
      } else if (value === 'false') {
        frontmatter[key] = false;
      } else {
        frontmatter[key] = value;
      }
    }
  }
  
  return { frontmatter, body };
}

// Convert markdown file content to BlogArticle
function parseMarkdownFile(filePath: string, content: string): BlogArticle | null {
  try {
    const { frontmatter, body } = parseFrontmatter(content);
    
    if (!frontmatter.title || !frontmatter.slug) {
      console.warn(`Invalid blog article: ${filePath}`);
      return null;
    }
    
    return {
      slug: frontmatter.slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt || '',
      date: frontmatter.date || '',
      category: frontmatter.category || 'Non classé',
      readTime: frontmatter.readTime || '5 min',
      image: frontmatter.image || undefined,
      author: frontmatter.author || 'Patrick Villette',
      featured: frontmatter.featured === true,
      hasCustomComponent: frontmatter.hasCustomComponent === true,
      content: body.trim(),
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

// Load all blog articles
export function getAllBlogArticles(): BlogArticle[] {
  const articles: BlogArticle[] = [];
  
  for (const [path, content] of Object.entries(blogModules)) {
    const article = parseMarkdownFile(path, content as string);
    if (article) {
      articles.push(article);
    }
  }
  
  // Sort by date (newest first)
  return articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

// Get latest N articles
export function getLatestBlogArticles(count: number = 3): BlogArticle[] {
  return getAllBlogArticles().slice(0, count);
}

// Get article by slug
export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return getAllBlogArticles().find(article => article.slug === slug);
}

// Get articles by category
export function getBlogArticlesByCategory(category: string): BlogArticle[] {
  const articles = getAllBlogArticles();
  if (category === 'Tous') return articles;
  return articles.filter(article => article.category === category);
}

// Get all unique categories
export function getBlogCategories(): string[] {
  const articles = getAllBlogArticles();
  const categories = new Set(articles.map(a => a.category));
  return ['Tous', ...Array.from(categories).sort()];
}

// Format date for display
export function formatBlogDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateStr; // Return original if parsing fails
  }
}
