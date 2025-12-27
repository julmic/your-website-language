import { parseFrontmatter } from './markdown-parser';

// =====================================================
// HOME PAGE INTERFACES
// =====================================================

export interface ThreeDoor {
  title: string;
  description: string;
  link: string;
  cta: string;
  imageKey: string;
}

export interface WhyBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturedTreatment {
  name: string;
  description: string;
  link: string;
  imageKey: string;
}

export interface HomePage {
  heroTitle: string;
  heroSubtitle: string;
  whyTitle: string;
  whyDescription: string;
  // About Preview
  aboutPreviewTitle: string;
  aboutPreviewParagraphs: string[];
  aboutPreviewButtonText: string;
  // Three Doors (Services)
  servicesTitle: string;
  servicesSubtitle: string;
  threeDoors: ThreeDoor[];
  // Why Ayurveda
  whyAyurvedaTitle: string;
  whyAyurvedaSubtitle: string;
  whyBenefits: WhyBenefit[];
  whyAyurvedaButtonText: string;
  whyAyurvedaButtonLink: string;
  // Featured Treatments
  featuredTitle: string;
  featuredSubtitle: string;
  featuredTreatments: FeaturedTreatment[];
  // Cures Zoom
  curesZoomTitle: string;
  curesZoomDescription: string;
  curesFeatures: string[];
  curesZoomButtonText: string;
  curesZoomButtonLink: string;
  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactButtonText: string;
  // Newsletter
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterConsent: string;
  content: string;
}

// =====================================================
// ABOUT PAGE INTERFACES
// =====================================================

export interface AboutValue {
  icon: string;
  title: string;
  description: string;
}

export interface AboutQualification {
  title: string;
  description: string;
}

export interface AboutPage {
  title: string;
  intro: string;
  // Mission
  missionTagline: string;
  missionTitle: string;
  missionSubtitle: string;
  missionText1: string;
  missionText2: string;
  missionImage: string;
  missionImageCaption: string;
  // Philosophy
  philosophyTagline: string;
  philosophyTitle: string;
  philosophyText: string;
  // History
  historyTitle: string;
  historySubtitle: string;
  historyText1: string;
  historyText2: string;
  historyText3: string;
  historyImage: string;
  // Values
  valuesTitle: string;
  valuesSubtitle: string;
  values: AboutValue[];
  // Team
  teamTitle: string;
  teamSubtitle: string;
  // Qualifications
  qualificationsTitle: string;
  qualificationsSubtitle: string;
  qualifications: AboutQualification[];
  // CTA
  ctaTitle: string;
  ctaText: string;
  content: string;
}

// =====================================================
// CONTACT PAGE INTERFACE
// =====================================================

export interface ContactPage {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  content: string;
}

// =====================================================
// SERVICES PAGE INTERFACES
// =====================================================

export interface ConsultationItem {
  name: string;
  duration: string;
  price: string;
}

export interface FormationItem {
  name: string;
  duration: string;
  price: string;
}

export interface ServicesPage {
  title: string;
  subtitle: string;
  // Consultations
  consultationsTitle: string;
  consultationsSubtitle: string;
  consultationsDescription: string;
  consultations: ConsultationItem[];
  // Cures
  curesTitle: string;
  curesSubtitle: string;
  curesDescription: string;
  // Formations
  formationsTitle: string;
  formationsSubtitle: string;
  formationsDescription: string;
  formations: FormationItem[];
  content: string;
}

// =====================================================
// MARKDOWN FILE IMPORTS
// =====================================================

const homeMd = import.meta.glob('/content/pages/home.md', { eager: true, query: '?raw', import: 'default' });
const aboutMd = import.meta.glob('/content/pages/about.md', { eager: true, query: '?raw', import: 'default' });
const contactMd = import.meta.glob('/content/pages/contact.md', { eager: true, query: '?raw', import: 'default' });
const servicesMd = import.meta.glob('/content/pages/services.md', { eager: true, query: '?raw', import: 'default' });

// =====================================================
// HOME PAGE LOADER
// =====================================================

export function getHomePage(): HomePage {
  const content = Object.values(homeMd)[0] as string;
  const { data, content: body } = parseFrontmatter(content);
  
  // Parse three doors array
  const threeDoorsRaw = data.threeDoors as Array<{ title: string; description: string; link: string; cta: string; imageKey: string }> || [];
  const threeDoors: ThreeDoor[] = threeDoorsRaw.map(d => ({
    title: d.title || '',
    description: d.description || '',
    link: d.link || '',
    cta: d.cta || '',
    imageKey: d.imageKey || '',
  }));

  // Parse why benefits array
  const whyBenefitsRaw = data.whyBenefits as Array<{ icon: string; title: string; description: string }> || [];
  const whyBenefits: WhyBenefit[] = whyBenefitsRaw.map(b => ({
    icon: b.icon || 'Shield',
    title: b.title || '',
    description: b.description || '',
  }));

  // Parse featured treatments array
  const featuredTreatmentsRaw = data.featuredTreatments as Array<{ name: string; description: string; link: string; imageKey: string }> || [];
  const featuredTreatments: FeaturedTreatment[] = featuredTreatmentsRaw.map(t => ({
    name: t.name || '',
    description: t.description || '',
    link: t.link || '',
    imageKey: t.imageKey || '',
  }));

  // Parse cures features array
  const curesFeatures = (data.curesFeatures as string[]) || [];

  // Parse about preview paragraphs array
  const aboutPreviewParagraphs = (data.aboutPreviewParagraphs as string[]) || [];

  return {
    heroTitle: (data.heroTitle as string) || "L'Art Ancestral de l'Ayurvéda",
    heroSubtitle: (data.heroSubtitle as string) || '',
    whyTitle: (data.whyTitle as string) || "Pourquoi l'Ayurvéda ?",
    whyDescription: (data.whyDescription as string) || '',
    // About Preview
    aboutPreviewTitle: (data.aboutPreviewTitle as string) || 'Qui sommes-nous ?',
    aboutPreviewParagraphs,
    aboutPreviewButtonText: (data.aboutPreviewButtonText as string) || 'En savoir plus',
    // Three Doors (Services)
    servicesTitle: (data.servicesTitle as string) || 'Nos services',
    servicesSubtitle: (data.servicesSubtitle as string) || '',
    threeDoors,
    // Why Ayurveda
    whyAyurvedaTitle: (data.whyAyurvedaTitle as string) || "Pourquoi choisir l'Ayurveda ?",
    whyAyurvedaSubtitle: (data.whyAyurvedaSubtitle as string) || '',
    whyBenefits,
    whyAyurvedaButtonText: (data.whyAyurvedaButtonText as string) || "Découvrir l'Ayurveda",
    whyAyurvedaButtonLink: (data.whyAyurvedaButtonLink as string) || '/philosophie-vedique',
    // Featured Treatments
    featuredTitle: (data.featuredTitle as string) || 'Nos soins phares',
    featuredSubtitle: (data.featuredSubtitle as string) || '',
    featuredTreatments,
    // Cures Zoom
    curesZoomTitle: (data.curesZoomTitle as string) || 'Nos Cures Ayurvédiques',
    curesZoomDescription: (data.curesZoomDescription as string) || '',
    curesFeatures,
    curesZoomButtonText: (data.curesZoomButtonText as string) || 'Découvrir nos cures',
    curesZoomButtonLink: (data.curesZoomButtonLink as string) || '/cures',
    // Contact
    contactTitle: (data.contactTitle as string) || 'Nous trouver',
    contactSubtitle: (data.contactSubtitle as string) || '',
    contactButtonText: (data.contactButtonText as string) || 'Nous contacter',
    // Newsletter
    newsletterTitle: (data.newsletterTitle as string) || 'Restez informé',
    newsletterDescription: (data.newsletterDescription as string) || '',
    newsletterButtonText: (data.newsletterButtonText as string) || "S'inscrire",
    newsletterConsent: (data.newsletterConsent as string) || '',
    content: body,
  };
}

// =====================================================
// ABOUT PAGE LOADER
// =====================================================

export function getAboutPage(): AboutPage {
  const content = Object.values(aboutMd)[0] as string;
  const { data, content: body } = parseFrontmatter(content);
  
  // Parse values array
  const valuesRaw = data.values as Array<{ icon: string; title: string; description: string }> || [];
  const values: AboutValue[] = valuesRaw.map(v => ({
    icon: v.icon || 'Shield',
    title: v.title || '',
    description: v.description || '',
  }));

  // Parse qualifications array
  const qualificationsRaw = data.qualifications as Array<{ title: string; description: string }> || [];
  const qualifications: AboutQualification[] = qualificationsRaw.map(q => ({
    title: q.title || '',
    description: q.description || '',
  }));

  return {
    title: (data.title as string) || "À propos d'Arkadhya",
    intro: (data.intro as string) || '',
    // Mission
    missionTagline: (data.missionTagline as string) || 'Pourquoi Choisir Arkadhya',
    missionTitle: (data.missionTitle as string) || 'Notre Mission',
    missionSubtitle: (data.missionSubtitle as string) || '',
    missionText1: (data.missionText1 as string) || '',
    missionText2: (data.missionText2 as string) || '',
    missionImage: (data.missionImage as string) || '',
    missionImageCaption: (data.missionImageCaption as string) || '',
    // Philosophy
    philosophyTagline: (data.philosophyTagline as string) || 'Notre Philosophie',
    philosophyTitle: (data.philosophyTitle as string) || "L'Ayurvéda, une voie vers l'équilibre",
    philosophyText: (data.philosophyText as string) || '',
    // History
    historyTitle: (data.historyTitle as string) || 'Notre Histoire',
    historySubtitle: (data.historySubtitle as string) || '',
    historyText1: (data.historyText1 as string) || '',
    historyText2: (data.historyText2 as string) || '',
    historyText3: (data.historyText3 as string) || '',
    historyImage: (data.historyImage as string) || '',
    // Values
    valuesTitle: (data.valuesTitle as string) || 'Nos Valeurs',
    valuesSubtitle: (data.valuesSubtitle as string) || '',
    values,
    // Team
    teamTitle: (data.teamTitle as string) || 'Notre Équipe',
    teamSubtitle: (data.teamSubtitle as string) || '',
    // Qualifications
    qualificationsTitle: (data.qualificationsTitle as string) || 'Qualifications et Titres en Ayurvéda',
    qualificationsSubtitle: (data.qualificationsSubtitle as string) || '',
    qualifications,
    // CTA
    ctaTitle: (data.ctaTitle as string) || 'Prêt à commencer votre voyage vers l\'équilibre ?',
    ctaText: (data.ctaText as string) || '',
    content: body,
  };
}

// =====================================================
// SERVICES PAGE LOADER
// =====================================================

export function getServicesPage(): ServicesPage {
  const content = Object.values(servicesMd)[0] as string;
  const { data, content: body } = parseFrontmatter(content);

  // Parse consultations array
  const consultationsRaw = data.consultations as Array<{ name: string; duration: string; price: string }> || [];
  const consultations: ConsultationItem[] = consultationsRaw.map(c => ({
    name: c.name || '',
    duration: c.duration || '',
    price: c.price || '',
  }));

  // Parse formations array
  const formationsRaw = data.formations as Array<{ name: string; duration: string; price: string }> || [];
  const formations: FormationItem[] = formationsRaw.map(f => ({
    name: f.name || '',
    duration: f.duration || '',
    price: f.price || '',
  }));

  return {
    title: (data.title as string) || 'Nos Services',
    subtitle: (data.subtitle as string) || '',
    // Consultations
    consultationsTitle: (data.consultationsTitle as string) || 'Consultations Ayurvédiques',
    consultationsSubtitle: (data.consultationsSubtitle as string) || '',
    consultationsDescription: (data.consultationsDescription as string) || '',
    consultations,
    // Cures
    curesTitle: (data.curesTitle as string) || 'Cures & Programmes',
    curesSubtitle: (data.curesSubtitle as string) || '',
    curesDescription: (data.curesDescription as string) || '',
    // Formations
    formationsTitle: (data.formationsTitle as string) || 'Formations & Stages',
    formationsSubtitle: (data.formationsSubtitle as string) || '',
    formationsDescription: (data.formationsDescription as string) || '',
    formations,
    content: body,
  };
}

// =====================================================
// CONTACT PAGE LOADER
// =====================================================

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
