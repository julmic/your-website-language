import matter from 'gray-matter';

// Types pour les données de philosophie
export interface PhilosophieSection {
  order: number;
  title: string;
  icon: string;
  description: string;
}

export interface PhilosophieArticle {
  title: string;
  slug: string;
  sectionId: number;
  order: number;
  available: boolean;
  href: string;
  subsection?: string;
  content?: string;
}

export interface PhilosophieSectionWithArticles extends PhilosophieSection {
  articles: PhilosophieArticle[];
}

// Import de tous les fichiers Markdown des sections
const sectionFiles = import.meta.glob('@content/philosophie/sections/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
});

// Import de tous les fichiers Markdown des articles
const articleFiles = import.meta.glob('@content/philosophie/articles/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
});

/**
 * Parse un fichier Markdown et retourne le frontmatter et le contenu
 */
function parseMarkdown(content: string): { data: Record<string, unknown>; content: string } {
  const { data, content: body } = matter(content);
  return { data, content: body };
}

/**
 * Récupère toutes les sections de philosophie
 */
export function getAllPhilosophieSections(): PhilosophieSection[] {
  const sections: PhilosophieSection[] = [];

  for (const path in sectionFiles) {
    const fileContent = sectionFiles[path] as string;
    const { data } = parseMarkdown(fileContent);
    
    sections.push({
      order: data.order as number,
      title: data.title as string,
      icon: data.icon as string,
      description: data.description as string,
    });
  }

  // Trier par ordre
  return sections.sort((a, b) => a.order - b.order);
}

/**
 * Récupère tous les articles de philosophie
 */
export function getAllPhilosophieArticles(): PhilosophieArticle[] {
  const articles: PhilosophieArticle[] = [];

  for (const path in articleFiles) {
    const fileContent = articleFiles[path] as string;
    const { data, content } = parseMarkdown(fileContent);
    
    articles.push({
      title: data.title as string,
      slug: data.slug as string,
      sectionId: data.sectionId as number,
      order: data.order as number,
      available: data.available as boolean,
      href: (data.href as string) || '',
      subsection: data.subsection as string | undefined,
      content: content.trim() || undefined,
    });
  }

  // Trier par sectionId puis par ordre
  return articles.sort((a, b) => {
    if (a.sectionId !== b.sectionId) {
      return a.sectionId - b.sectionId;
    }
    return a.order - b.order;
  });
}

/**
 * Récupère les articles d'une section spécifique
 */
export function getArticlesBySection(sectionId: number): PhilosophieArticle[] {
  return getAllPhilosophieArticles().filter(article => article.sectionId === sectionId);
}

/**
 * Récupère un article par son slug
 */
export function getPhilosophieArticleBySlug(slug: string): PhilosophieArticle | undefined {
  return getAllPhilosophieArticles().find(article => article.slug === slug);
}

/**
 * Récupère toutes les sections avec leurs articles
 */
export function getSectionsWithArticles(): PhilosophieSectionWithArticles[] {
  const sections = getAllPhilosophieSections();
  const articles = getAllPhilosophieArticles();

  return sections.map(section => ({
    ...section,
    articles: articles.filter(article => article.sectionId === section.order),
  }));
}

/**
 * Compte les articles disponibles et le total
 */
export function getPhilosophieStats(): { available: number; total: number } {
  const articles = getAllPhilosophieArticles();
  return {
    available: articles.filter(a => a.available).length,
    total: articles.length,
  };
}

/**
 * Mapping des icônes string vers les composants Lucide
 */
export function getIconName(iconString: string): string {
  const iconMap: Record<string, string> = {
    'book-open': 'BookOpen',
    'sparkles': 'Sparkles',
    'sun': 'Sun',
    'heart': 'Heart',
    'compass': 'Compass',
    'flame': 'Flame',
    'brain': 'Brain',
    'flower': 'Flower2',
    'music': 'Music',
    'globe': 'Globe',
  };
  return iconMap[iconString] || 'BookOpen';
}
