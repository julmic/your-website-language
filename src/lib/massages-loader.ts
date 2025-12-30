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

// ===== NORMALIZATION HELPERS =====

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string');
  }
  if (typeof value === 'string') {
    return [value];
  }
  return [];
}

function normalizeForWhom(raw: unknown): MassageForWhom | undefined {
  if (!raw) return undefined;
  
  // Si c'est une liste simple, la mettre dans wellness
  if (Array.isArray(raw)) {
    return {
      physical: [],
      mental: [],
      wellness: toStringArray(raw),
    };
  }
  
  // Si c'est un objet avec les bonnes clés
  if (typeof raw === 'object' && raw !== null) {
    const obj = raw as Record<string, unknown>;
    return {
      physical: toStringArray(obj.physical),
      mental: toStringArray(obj.mental),
      wellness: toStringArray(obj.wellness),
    };
  }
  
  return undefined;
}

function normalizeBenefits(raw: unknown): MassageBenefits | undefined {
  if (!raw) return undefined;
  
  // Si c'est une liste simple, la mettre dans physical
  if (Array.isArray(raw)) {
    return {
      physical: toStringArray(raw),
      mental: [],
      energetic: [],
    };
  }
  
  // Si c'est un objet avec les bonnes clés
  if (typeof raw === 'object' && raw !== null) {
    const obj = raw as Record<string, unknown>;
    return {
      physical: toStringArray(obj.physical),
      mental: toStringArray(obj.mental),
      energetic: toStringArray(obj.energetic),
    };
  }
  
  return undefined;
}

function normalizeTestimonials(raw: unknown): MassageTestimonial[] {
  if (!Array.isArray(raw)) return [];
  
  return raw
    .filter((item): item is Record<string, unknown> => typeof item === 'object' && item !== null)
    .map((item) => ({
      name: (item.name as string) || (item.author as string) || 'Anonyme',
      text: (item.text as string) || '',
      rating: typeof item.rating === 'number' ? item.rating : undefined,
    }))
    .filter((t) => t.text);
}

function normalizeRelatedMassages(raw: unknown, allMassagesIndex: Map<string, { title: string; subtitle: string }>): MassageRelated[] {
  if (!Array.isArray(raw)) return [];
  
  return raw
    .map((item): MassageRelated | null => {
      // Si c'est une string (slug)
      if (typeof item === 'string') {
        const massageInfo = allMassagesIndex.get(item);
        return {
          name: massageInfo?.title || item,
          path: `/services/${item}`,
          description: massageInfo?.subtitle || '',
        };
      }
      
      // Si c'est un objet
      if (typeof item === 'object' && item !== null) {
        const obj = item as Record<string, unknown>;
        return {
          name: (obj.name as string) || '',
          path: (obj.path as string) || '',
          description: (obj.description as string) || '',
        };
      }
      
      return null;
    })
    .filter((item): item is MassageRelated => item !== null && !!item.name);
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
  // Premier passage: construire l'index slug -> info basique
  const massagesIndex = new Map<string, { title: string; subtitle: string }>();
  const rawDataList: { path: string; data: Record<string, unknown> }[] = [];
  
  for (const path in massageFiles) {
    const fileContent = massageFiles[path] as string;
    const { data } = parseFrontmatter(fileContent);
    const slug = data.slug as string;
    
    massagesIndex.set(slug, {
      title: (data.title as string) || slug,
      subtitle: (data.subtitle as string) || '',
    });
    
    rawDataList.push({ path, data });
  }
  
  // Second passage: construire les objets MassageData avec normalisation
  const massages: MassageData[] = rawDataList.map(({ data }) => ({
    slug: data.slug as string,
    title: data.title as string,
    subtitle: (data.subtitle as string) || '',
    description: (data.description as string) || '',
    image: data.image as string | undefined,
    details: toStringArray(data.details),
    prices: (data.prices as MassagePriceOption[]) || [],
    cureOnly: (data.cureOnly as boolean) || false,
    forWhom: normalizeForWhom(data.forWhom),
    contraindications: toStringArray(data.contraindications),
    benefits: normalizeBenefits(data.benefits),
    studies: (data.studies as MassageStudy[]) || [],
    faq: (data.faq as MassageFAQ[]) || [],
    testimonials: normalizeTestimonials(data.testimonials),
    relatedMassages: normalizeRelatedMassages(data.relatedMassages, massagesIndex),
  }));

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
