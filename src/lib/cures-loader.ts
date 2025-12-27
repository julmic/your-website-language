import { parseFrontmatter } from './markdown-parser';

// Types for cure data
export interface CureDurationOption {
  days: number;
  pricePerDay: number;
  totalPrice: number;
}

export interface CureTreatment {
  name: string;
  description?: string;
}

export interface CureFAQ {
  question: string;
  answer: string;
}

export interface CureTestimonial {
  name: string;
  text: string;
}

export interface CureRelated {
  name: string;
  path: string;
  description: string;
  pricePerDay: number;
}

export interface DayProgram {
  name: string;
  icon: string;
  description: string;
  benefits: string[];
}

export interface ScheduleDay {
  day: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface CureData {
  // Basic info
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  
  // Pricing
  price: string;
  pricePerDay?: number;
  totalPrice?: number;
  durations?: CureDurationOption[];
  durationsText?: string;
  
  // Flags
  highlight?: boolean;
  isWeekend?: boolean;
  isJournee?: boolean;
  
  // Content
  treatments?: CureTreatment[];
  benefits?: string[];
  includes?: string[];
  faq?: CureFAQ[];
  testimonials?: CureTestimonial[];
  relatedCures?: CureRelated[];
  
  // Special for Journée
  dayPrograms?: DayProgram[];
  
  // Special for Week-end
  schedule?: ScheduleDay[];
  
  // Full markdown content
  content?: string;
}

// Import all cure markdown files
const cureFiles = import.meta.glob('/content/cures/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default' 
});

/**
 * Parse a cure markdown file and return structured data
 */
function parseCureFile(rawContent: string): CureData | null {
  try {
    const { data, content } = parseFrontmatter(rawContent);
    
    return {
      id: (data.id as string) || (data.slug as string),
      slug: data.slug as string,
      title: data.title as string,
      subtitle: data.subtitle as string | undefined,
      description: (data.description as string) || '',
      image: data.image as string | undefined,
      price: (data.price as string) || '',
      pricePerDay: data.pricePerDay as number | undefined,
      totalPrice: data.totalPrice as number | undefined,
      durations: data.durations as CureDurationOption[] | undefined,
      durationsText: data.durationsText as string | undefined,
      highlight: (data.highlight as boolean) || false,
      isWeekend: (data.isWeekend as boolean) || false,
      isJournee: (data.isJournee as boolean) || false,
      treatments: data.treatments as CureTreatment[] | undefined,
      benefits: data.benefits as string[] | undefined,
      includes: data.includes as string[] | undefined,
      faq: data.faq as CureFAQ[] | undefined,
      testimonials: data.testimonials as CureTestimonial[] | undefined,
      relatedCures: data.relatedCures as CureRelated[] | undefined,
      dayPrograms: data.dayPrograms as DayProgram[] | undefined,
      schedule: data.schedule as ScheduleDay[] | undefined,
      content: content.trim(),
    };
  } catch (error) {
    console.error('Error parsing cure file:', error);
    return null;
  }
}

/**
 * Get all cures sorted by display order
 */
export function getAllCures(): CureData[] {
  const cures: CureData[] = [];
  
  for (const [path, rawContent] of Object.entries(cureFiles)) {
    const cure = parseCureFile(rawContent as string);
    if (cure) {
      cures.push(cure);
    }
  }
  
  // Sort by a logical order (highlight first, then alphabetically)
  return cures.sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return a.title.localeCompare(b.title, 'fr');
  });
}

/**
 * Get a cure by its slug
 */
export function getCureBySlug(slug: string): CureData | null {
  for (const [path, rawContent] of Object.entries(cureFiles)) {
    const cure = parseCureFile(rawContent as string);
    if (cure && cure.slug === slug) {
      return cure;
    }
  }
  return null;
}

/**
 * Get a cure by its ID
 */
export function getCureById(id: string): CureData | null {
  for (const [path, rawContent] of Object.entries(cureFiles)) {
    const cure = parseCureFile(rawContent as string);
    if (cure && cure.id === id) {
      return cure;
    }
  }
  return null;
}

/**
 * Get highlighted cures for homepage
 */
export function getHighlightedCures(): CureData[] {
  return getAllCures().filter(cure => cure.highlight);
}

/**
 * Get cures statistics
 */
export function getCuresStats() {
  const cures = getAllCures();
  return {
    total: cures.length,
    highlighted: cures.filter(c => c.highlight).length,
  };
}
