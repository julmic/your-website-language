import { parseFrontmatter } from './markdown-parser';

export interface LegalPage {
  title: string;
  slug: string;
  linkText: string;
  order: number;
  showInFooter: boolean;
  metaDescription: string;
  canonicalUrl: string;
  content: string;
}

// Import all markdown files from content/legal/
const legalPages = import.meta.glob('/content/legal/*.md', { eager: true, query: '?raw', import: 'default' });

function parseLegalPage(rawContent: string): LegalPage {
  const { data, content } = parseFrontmatter(rawContent);
  
  return {
    title: (data.title as string) || '',
    slug: (data.slug as string) || '',
    linkText: (data.linkText as string) || (data.title as string) || '',
    order: (data.order as number) || 999,
    showInFooter: (data.showInFooter as boolean) ?? true,
    metaDescription: (data.metaDescription as string) || '',
    canonicalUrl: (data.canonicalUrl as string) || '',
    content: content || '',
  };
}

export function getAllLegalPages(): LegalPage[] {
  const pages = Object.values(legalPages).map((rawContent) => 
    parseLegalPage(rawContent as string)
  );
  
  // Sort by order
  return pages.sort((a, b) => a.order - b.order);
}

export function getLegalPageBySlug(slug: string): LegalPage | undefined {
  const allPages = getAllLegalPages();
  return allPages.find(page => page.slug === slug);
}

export function getFooterLegalPages(): LegalPage[] {
  return getAllLegalPages().filter(page => page.showInFooter);
}
