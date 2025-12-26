// Loader pour les collections CMS : équipe, témoignages, galerie

export interface TeamMember {
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
  contact?: string;
  order: number;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  date?: string;
  featured: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  size: 'normal' | 'wide' | 'tall';
  category: string;
  featured: boolean;
  order: number;
}

// Import des fichiers markdown
const teamFiles = import.meta.glob('@content/collections/team/*.md', { eager: true, query: '?raw', import: 'default' });
const testimonialFiles = import.meta.glob('@content/collections/testimonials/*.md', { eager: true, query: '?raw', import: 'default' });
const galleryFiles = import.meta.glob('@content/collections/gallery/*.md', { eager: true, query: '?raw', import: 'default' });

function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content };
  
  const frontmatter = match[1];
  const body = match[2];
  const data: Record<string, any> = {};
  
  let currentKey = '';
  let currentValue: any = '';
  let inMultiline = false;
  
  frontmatter.split('\n').forEach(line => {
    if (inMultiline) {
      if (line.match(/^[a-zA-Z_]+:/)) {
        data[currentKey] = currentValue.trim();
        inMultiline = false;
      } else {
        currentValue += '\n' + line;
        return;
      }
    }
    
    const keyMatch = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();
      
      if (value.startsWith('|') || value.startsWith('>')) {
        inMultiline = true;
        currentValue = '';
      } else if (value === 'true') {
        data[currentKey] = true;
      } else if (value === 'false') {
        data[currentKey] = false;
      } else if (!isNaN(Number(value)) && value !== '') {
        data[currentKey] = Number(value);
      } else {
        data[currentKey] = value.replace(/^["']|["']$/g, '');
      }
    }
  });
  
  if (inMultiline) {
    data[currentKey] = currentValue.trim();
  }
  
  return { data, content: body };
}

export function getAllTeamMembers(): TeamMember[] {
  const members: TeamMember[] = [];
  
  for (const [path, content] of Object.entries(teamFiles)) {
    const { data } = parseFrontmatter(content as string);
    members.push({
      name: data.name || '',
      title: data.title || '',
      role: data.role || '',
      image: data.image || '',
      bio: data.bio || '',
      contact: data.contact || '',
      order: data.order || 0,
    });
  }
  
  return members.sort((a, b) => a.order - b.order);
}

export function getAllTestimonials(): Testimonial[] {
  const testimonials: Testimonial[] = [];
  
  for (const [path, content] of Object.entries(testimonialFiles)) {
    const { data } = parseFrontmatter(content as string);
    testimonials.push({
      name: data.name || '',
      location: data.location || '',
      text: data.text || '',
      rating: data.rating || 5,
      date: data.date || '',
      featured: data.featured || false,
    });
  }
  
  return testimonials;
}

export function getFeaturedTestimonials(): Testimonial[] {
  return getAllTestimonials().filter(t => t.featured);
}

export function getAllGalleryImages(): GalleryImage[] {
  const images: GalleryImage[] = [];
  
  for (const [path, content] of Object.entries(galleryFiles)) {
    const { data } = parseFrontmatter(content as string);
    images.push({
      src: data.src || '',
      alt: data.alt || '',
      size: data.size || 'normal',
      category: data.category || 'general',
      featured: data.featured || false,
      order: data.order || 0,
    });
  }
  
  return images.sort((a, b) => a.order - b.order);
}

export function getFeaturedGalleryImages(): GalleryImage[] {
  return getAllGalleryImages().filter(img => img.featured);
}

export function getGalleryByCategory(category: string): GalleryImage[] {
  return getAllGalleryImages().filter(img => img.category === category);
}
