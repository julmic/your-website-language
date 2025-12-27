import { parseFrontmatter } from './markdown-parser';

export interface LegalPage {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  content: string;
}

// Import the markdown files
const cgvMd = import.meta.glob('/content/pages/cgv.md', { eager: true, query: '?raw', import: 'default' });
const mentionsLegalesMd = import.meta.glob('/content/pages/mentions-legales.md', { eager: true, query: '?raw', import: 'default' });
const politiqueConfidentialiteMd = import.meta.glob('/content/pages/politique-confidentialite.md', { eager: true, query: '?raw', import: 'default' });

function parseLegalPage(rawContent: string): LegalPage {
  const { data, content } = parseFrontmatter(rawContent);
  
  return {
    title: (data.title as string) || '',
    metaDescription: (data.metaDescription as string) || '',
    canonicalUrl: (data.canonicalUrl as string) || '',
    content: content || '',
  };
}

export function getCGV(): LegalPage {
  const rawContent = Object.values(cgvMd)[0] as string;
  return parseLegalPage(rawContent);
}

export function getMentionsLegales(): LegalPage {
  const rawContent = Object.values(mentionsLegalesMd)[0] as string;
  return parseLegalPage(rawContent);
}

export function getPolitiqueConfidentialite(): LegalPage {
  const rawContent = Object.values(politiqueConfidentialiteMd)[0] as string;
  return parseLegalPage(rawContent);
}
