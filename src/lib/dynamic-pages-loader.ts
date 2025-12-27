/**
 * Dynamic Pages Loader
 * Loads and parses dynamic pages created via CMS from content/pages-dynamiques/
 */

import { parseFrontmatter } from './markdown-parser';

export interface DynamicPageSection {
  type: 'text' | 'image-text' | 'cta' | 'list' | 'gallery';
  title?: string;
  content?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  buttonText?: string;
  buttonLink?: string;
  items?: string[];
  images?: string[];
}

export interface DynamicPage {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  heroImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  sections: DynamicPageSection[];
  content: string;
}

// Import all dynamic page markdown files
const dynamicPagesModules = import.meta.glob('/content/pages-dynamiques/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
});

/**
 * Parse a single dynamic page from raw markdown content
 */
function parseDynamicPage(rawContent: string, filename: string): DynamicPage {
  const { data: frontmatter, content } = parseFrontmatter(rawContent);
  
  // Extract slug from filename if not in frontmatter
  const slugFromFilename = filename.replace('/content/pages-dynamiques/', '').replace('.md', '');
  
  return {
    slug: (frontmatter.slug as string) || slugFromFilename,
    title: (frontmatter.title as string) || 'Sans titre',
    metaTitle: frontmatter.metaTitle as string | undefined,
    metaDescription: frontmatter.metaDescription as string | undefined,
    heroImage: frontmatter.heroImage as string | undefined,
    heroTitle: frontmatter.heroTitle as string | undefined,
    heroSubtitle: frontmatter.heroSubtitle as string | undefined,
    sections: Array.isArray(frontmatter.sections) ? frontmatter.sections as DynamicPageSection[] : [],
    content: content
  };
}

/**
 * Get all dynamic pages
 */
export function getAllDynamicPages(): DynamicPage[] {
  const pages: DynamicPage[] = [];
  
  for (const [path, rawContent] of Object.entries(dynamicPagesModules)) {
    if (typeof rawContent === 'string') {
      try {
        const page = parseDynamicPage(rawContent, path);
        pages.push(page);
      } catch (error) {
        console.error(`Error parsing dynamic page ${path}:`, error);
      }
    }
  }
  
  return pages;
}

/**
 * Get a single dynamic page by slug
 */
export function getDynamicPageBySlug(slug: string): DynamicPage | undefined {
  const allPages = getAllDynamicPages();
  return allPages.find(page => page.slug === slug);
}

/**
 * Check if a dynamic page exists
 */
export function dynamicPageExists(slug: string): boolean {
  return getDynamicPageBySlug(slug) !== undefined;
}
