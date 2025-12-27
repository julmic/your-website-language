import { parseFrontmatter } from './markdown-parser';

export interface HomePage {
  heroTitle: string;
  heroSubtitle: string;
  whyTitle: string;
  whyDescription: string;
  content: string;
}

export interface AboutPage {
  title: string;
  intro: string;
  content: string;
}

export interface ContactPage {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  content: string;
}

// Import the markdown files
const homeMd = import.meta.glob('/content/pages/home.md', { eager: true, query: '?raw', import: 'default' });
const aboutMd = import.meta.glob('/content/pages/about.md', { eager: true, query: '?raw', import: 'default' });
const contactMd = import.meta.glob('/content/pages/contact.md', { eager: true, query: '?raw', import: 'default' });

export function getHomePage(): HomePage {
  const content = Object.values(homeMd)[0] as string;
  const { data, content: body } = parseFrontmatter(content);
  
  return {
    heroTitle: (data.heroTitle as string) || "L'Art Ancestral de l'Ayurvéda",
    heroSubtitle: (data.heroSubtitle as string) || '',
    whyTitle: (data.whyTitle as string) || "Pourquoi l'Ayurvéda ?",
    whyDescription: (data.whyDescription as string) || '',
    content: body,
  };
}

export function getAboutPage(): AboutPage {
  const content = Object.values(aboutMd)[0] as string;
  const { data, content: body } = parseFrontmatter(content);
  
  return {
    title: (data.title as string) || "À propos d'Arkadhya",
    intro: (data.intro as string) || '',
    content: body,
  };
}

export function getContactPage(): ContactPage {
  const content = Object.values(contactMd)[0] as string;
  const { data, content: body } = parseFrontmatter(content);
  
  return {
    title: (data.title as string) || 'Contactez-nous',
    address: (data.address as string) || '',
    phone: (data.phone as string) || '',
    email: (data.email as string) || '',
    hours: (data.hours as string) || '',
    content: body,
  };
}
