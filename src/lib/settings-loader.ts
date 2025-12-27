import { parseFrontmatter } from './markdown-parser';

export interface GeneralSettings {
  siteName: string;
  siteDescription: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  logo: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

export interface SocialSettings {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  description: string;
}

export interface NavigationMenu {
  label: string;
  href?: string;
  items: NavigationItem[];
}

export interface NavigationSettings {
  ctaButtonText: string;
  ctaButtonLink: string;
  menuItems: NavigationMenu[];
  footerNavigationLinks: FooterLink[];
  footerServicesLinks: FooterLink[];
}

export interface FooterLink {
  label: string;
  href: string;
}

// Import the markdown files
const generalMd = import.meta.glob('/content/settings/general.md', { eager: true, query: '?raw', import: 'default' });
const socialMd = import.meta.glob('/content/settings/social.md', { eager: true, query: '?raw', import: 'default' });
const navigationMd = import.meta.glob('/content/settings/navigation.md', { eager: true, query: '?raw', import: 'default' });

export function getGeneralSettings(): GeneralSettings {
  const content = Object.values(generalMd)[0] as string;
  const { data } = parseFrontmatter(content);
  
  return {
    siteName: (data.siteName as string) || 'Arkadhya',
    siteDescription: (data.siteDescription as string) || '',
    phone: (data.phone as string) || '',
    email: (data.email as string) || '',
    address: (data.address as string) || '',
    hours: (data.hours as string) || '',
    logo: (data.logo as string) || '',
    seoTitle: (data.seoTitle as string) || '',
    seoDescription: (data.seoDescription as string) || '',
    seoKeywords: (data.seoKeywords as string) || '',
  };
}

export function getSocialSettings(): SocialSettings {
  const content = Object.values(socialMd)[0] as string;
  const { data } = parseFrontmatter(content);
  
  return {
    facebook: (data.facebook as string) || '',
    instagram: (data.instagram as string) || '',
    youtube: (data.youtube as string) || '',
  };
}

export function getNavigationSettings(): NavigationSettings {
  const content = Object.values(navigationMd)[0] as string;
  const { data } = parseFrontmatter(content);
  
  const menuItems = (data.menuItems as any[] || []).map(menu => ({
    label: menu.label || '',
    href: menu.href || '',
    items: Array.isArray(menu.items) ? menu.items.map((item: any) => ({
      href: item.href || '',
      label: item.label || '',
      description: item.description || '',
    })) : [],
  }));

  const footerNavigationLinks = (data.footerNavigationLinks as any[] || []).map((link: any) => ({
    label: link.label || '',
    href: link.href || '',
  }));

  const footerServicesLinks = (data.footerServicesLinks as any[] || []).map((link: any) => ({
    label: link.label || '',
    href: link.href || '',
  }));
  
  return {
    ctaButtonText: (data.ctaButtonText as string) || 'Prendre RDV',
    ctaButtonLink: (data.ctaButtonLink as string) || '/contact',
    menuItems,
    footerNavigationLinks,
    footerServicesLinks,
  };
}
