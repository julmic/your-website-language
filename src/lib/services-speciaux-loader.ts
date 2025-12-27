import { parseFrontmatter } from './markdown-parser';

// Import all services-speciaux markdown files
const serviceFiles = import.meta.glob('@content/services-speciaux/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default' 
});

export interface ServiceSpecial {
  slug: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  duration?: string;
  price?: string;
  heroImage?: string;
  secondaryImage?: string;
  description?: string;
  introduction?: string;
  // Bilan de santé specific
  aspectTitle?: string;
  aspectItems?: string[];
  steps?: Array<{ title: string; description: string; icon: string }>;
  followUpText?: string;
  followUpNote?: string;
  // Bhutavidya specific
  philosophyQuote?: string;
  philosophySubtext?: string;
  philosophyText?: string;
  programSteps?: Array<{ title: string; description: string; icon: string }>;
  techniques?: Array<{ title: string; description: string }>;
  firstSessionTitle?: string;
  firstSessionText?: string;
  followUpTitle?: string;
  sessionInfo?: string;
  // Atelier cuisine specific
  upcomingDates?: Array<{ date: string; time: string; level: string; theme: string }>;
  whyAyurvedicCooking?: {
    intro: string;
    benefits: Array<{ title: string; description: string; icon: string }>;
  };
  programIntro?: string;
  programItems?: Array<{ text: string; icon: string }>;
  schedule?: Array<{ time: string; emoji: string; title: string; description: string }>;
  menusVata?: { petitDejeuner: { items: string[] }; repasMidday: { items: string[] }; repasSoir: { items: string[] } };
  menusPitta?: { petitDejeuner: { items: string[] }; repasMidday: { items: string[] }; repasSoir: { items: string[] } };
  menusKapha?: { petitDejeuner: { items: string[] }; repasMidday: { items: string[] }; repasSoir: { items: string[] } };
  kitcheriRecipe?: {
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
  };
  // Consultations specific
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  heroTag?: string;
  heroTitle?: string;
  heroDescription?: string;
  whatIsTitle?: string;
  whatIsContent?: string;
  sessionSteps?: Array<{ number: string; title: string; description: string }>;
  consultationTypes?: Array<{ title: string; description: string; link: string; duration: string; icon: string }>;
  benefits?: Array<{ title: string; description: string; icon: string }>;
  targetAudience?: string[];
  // Common
  faq?: Array<{ question: string; answer: string }>;
  ctaTitle?: string;
  ctaText?: string;
  ctaPrimaryLink?: string;
  ctaPrimaryText?: string;
  ctaSecondaryLink?: string;
  ctaSecondaryText?: string;
  content?: string;
}

export function getAllServicesSpeciaux(): ServiceSpecial[] {
  const services: ServiceSpecial[] = [];
  
  for (const path in serviceFiles) {
    const fileContent = serviceFiles[path] as string;
    const { data, content } = parseFrontmatter(fileContent);
    
    services.push({
      slug: data.slug,
      ...data,
      content
    } as ServiceSpecial);
  }
  
  return services;
}

export function getServiceBySlug(slug: string): ServiceSpecial | null {
  const services = getAllServicesSpeciaux();
  return services.find(s => s.slug === slug) || null;
}
