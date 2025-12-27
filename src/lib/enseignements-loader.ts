import { parseFrontmatter } from './markdown-parser';

export interface SyllableMeaning {
  sanskrit: string;
  meaning: string;
}

export interface SaptaLoka {
  name: string;
  description: string;
}

export interface JapaMethod {
  name: string;
  description: string;
}

export interface PracticeTime {
  name: string;
  time: string;
  description: string;
}

export interface PracticeCount {
  number: number;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EffectsSection {
  title: string;
  items: string[];
}

export interface GayatriMantraContent {
  title: string;
  slug: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  youtubeVideoId: string;
  youtubeVideoTitle: string;
  youtubeVideoCaption: string;
  
  whatIsGayatriTitle: string;
  whatIsGayatriText: string;
  etymologyTitle: string;
  etymologyText: string;
  
  versionsTitle: string;
  shortVersionTitle: string;
  shortVersionSanskrit: string;
  shortVersionTranslit: string;
  shortVersionTranslation: string;
  longVersionTitle: string;
  longVersionIntro: string;
  longVersionPart1: string;
  longVersionPart2: string;
  longVersionPart3: string;
  saptaLokas: SaptaLoka[];
  
  subtleBodyTitle: string;
  subtleBodyDescription: string;
  
  originTitle: string;
  originText: string;
  rishiTitle: string;
  rishiText: string;
  transmissionText: string;
  
  symbolsTitle: string;
  symbolsDescription: string;
  sriYantraTitle: string;
  sriYantraDescription: string;
  gayatriDeviTitle: string;
  gayatriDeviDescription: string;
  
  syllablesTitle: string;
  syllablesIntro: string;
  syllables: SyllableMeaning[];
  
  effectsTitle: string;
  effectsIntro: string;
  physiologicalEffects: EffectsSection;
  psychologicalEffects: EffectsSection;
  spiritualEffects: EffectsSection;
  
  practiceTitle: string;
  japaSection: {
    title: string;
    text: string;
    methods: JapaMethod[];
  };
  malaSection: {
    title: string;
    text: string;
    meanings: string[];
  };
  frequencySection: {
    title: string;
    text: string;
    counts: PracticeCount[];
  };
  timingSection: {
    title: string;
    text: string;
    times: PracticeTime[];
  };
  
  faq: FaqItem[];
  
  ctaTitle: string;
  ctaText: string;
  ctaPrimaryLink: string;
  ctaPrimaryText: string;
  ctaSecondaryLink: string;
  ctaSecondaryText: string;
}

// Import des fichiers Markdown des enseignements
const enseignementFiles = import.meta.glob('/content/enseignements/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
});

/**
 * Récupère le contenu du Gayatri Mantra
 */
export function getGayatriMantraContent(): GayatriMantraContent | undefined {
  for (const path in enseignementFiles) {
    if (path.includes('gayatri-mantra')) {
      const fileContent = enseignementFiles[path] as string;
      const { data } = parseFrontmatter(fileContent);
      return data as unknown as GayatriMantraContent;
    }
  }
  return undefined;
}

/**
 * Récupère un enseignement par son slug
 */
export function getEnseignementBySlug(slug: string): Record<string, unknown> | undefined {
  for (const path in enseignementFiles) {
    const fileContent = enseignementFiles[path] as string;
    const { data } = parseFrontmatter(fileContent);
    if (data.slug === slug) {
      return data as Record<string, unknown>;
    }
  }
  return undefined;
}
