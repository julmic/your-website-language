import { parseFrontmatter } from './markdown-parser';

// Types pour les données de massages
export interface MassagePriceOption {
  label?: string;
  duration: string;
  price: string;
}

export interface MassageStudy {
  title: string;
  source: string;
  url: string;
  year?: string;
  highlight?: string;
}

export interface MassageFAQ {
  question: string;
  answer: string;
}

export interface MassageTestimonial {
  name: string;
  text: string;
  rating?: number;
}

export interface MassageBenefits {
  physical: string[];
  mental: string[];
  energetic: string[];
}

export interface MassageForWhom {
  physical: string[];
  mental: string[];
  wellness: string[];
}

export interface MassageRelated {
  name: string;
  path: string;
  description: string;
}

export interface MassageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  details: string[];
  prices: MassagePriceOption[];
  cureOnly?: boolean;
  forWhom?: MassageForWhom;
  contraindications?: string[];
  benefits?: MassageBenefits;
  studies?: MassageStudy[];
  faq?: MassageFAQ[];
  testimonials?: MassageTestimonial[];
  relatedMassages?: MassageRelated[];
}

// Import de tous les fichiers Markdown des massages
const massageFiles = import.meta.glob('@content/massages/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
});

/**
 * Récupère tous les massages
 */
export function getAllMassages(): MassageData[] {
  const massages: MassageData[] = [];

  for (const path in massageFiles) {
    const fileContent = massageFiles[path] as string;
    const { data } = parseFrontmatter(fileContent);
    
    massages.push({
      slug: data.slug as string,
      title: data.title as string,
      subtitle: (data.subtitle as string) || '',
      description: (data.description as string) || '',
      image: data.image as string | undefined,
      details: (data.details as string[]) || [],
      prices: (data.prices as MassagePriceOption[]) || [],
      cureOnly: (data.cureOnly as boolean) || false,
      forWhom: data.forWhom as MassageForWhom | undefined,
      contraindications: data.contraindications as string[] | undefined,
      benefits: data.benefits as MassageBenefits | undefined,
      studies: data.studies as MassageStudy[] | undefined,
      faq: data.faq as MassageFAQ[] | undefined,
      testimonials: data.testimonials as MassageTestimonial[] | undefined,
      relatedMassages: data.relatedMassages as MassageRelated[] | undefined,
    });
  }

  // Trier par titre
  return massages.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
}

/**
 * Récupère un massage par son slug
 */
export function getMassageBySlug(slug: string): MassageData | undefined {
  return getAllMassages().find(massage => massage.slug === slug);
}

/**
 * Récupère les massages avec tarifs (non réservés aux cures)
 */
export function getBookableMassages(): MassageData[] {
  return getAllMassages().filter(massage => !massage.cureOnly && massage.prices.length > 0);
}

/**
 * Récupère les massages réservés aux cures
 */
export function getCureOnlyMassages(): MassageData[] {
  return getAllMassages().filter(massage => massage.cureOnly);
}

/**
 * Compte les massages
 */
export function getMassagesStats(): { total: number; bookable: number; cureOnly: number } {
  const massages = getAllMassages();
  return {
    total: massages.length,
    bookable: massages.filter(m => !m.cureOnly).length,
    cureOnly: massages.filter(m => m.cureOnly).length,
  };
}
