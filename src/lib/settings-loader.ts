import { parseFrontmatter } from './markdown-parser';

export interface GeneralSettings {
  siteName: string;
  siteDescription: string;
  phone: string;
  email: string;
  address: string;
}

export interface SocialSettings {
  facebook: string;
  instagram: string;
  youtube: string;
}

// Import the markdown files
const generalMd = import.meta.glob('/content/settings/general.md', { eager: true, query: '?raw', import: 'default' });
const socialMd = import.meta.glob('/content/settings/social.md', { eager: true, query: '?raw', import: 'default' });

export function getGeneralSettings(): GeneralSettings {
  const content = Object.values(generalMd)[0] as string;
  const { data } = parseFrontmatter(content);
  
  return {
    siteName: (data.siteName as string) || 'Arkadhya',
    siteDescription: (data.siteDescription as string) || '',
    phone: (data.phone as string) || '',
    email: (data.email as string) || '',
    address: (data.address as string) || '',
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
