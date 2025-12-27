// Imports statiques des images de cures (obligatoire pour Vite en production)
import curePanchakarmaImg from '@/assets/cures/cure-panchakarma.jpg';
import cureAmritaImg from '@/assets/cures/cure-amrita.jpg';
import cureKarchanImg from '@/assets/cures/cure-karchan.jpg';
import cureLaghanaRasayanaImg from '@/assets/cures/cure-laghana-rasayana.jpg';
import cureOjasKayakalpaImg from '@/assets/cures/cure-ojas-kayakalpa.jpg';
import curePersonnaliseeImg from '@/assets/cures/cure-personnalisee.jpg';
import cureSamvahanaVataImg from '@/assets/cures/cure-samvahana-vata.jpg';
import curePrenatalImg from '@/assets/cures/cure-prenatale.jpg';
import curePostnataleImg from '@/assets/cures/cure-postnatale.jpg';
import cureJourneeImg from '@/assets/cures/cure-journee.jpg';
import cureWeekEndImg from '@/assets/cures/cure-week-end.jpg';
import cureGenericImg from '@/assets/cures/cure-generic.jpg';

// Map par slug
const imageMapBySlug: Record<string, string> = {
  'panchakarma': curePanchakarmaImg,
  'amrita': cureAmritaImg,
  'karchan': cureKarchanImg,
  'laghana-rasayana': cureLaghanaRasayanaImg,
  'ojas-kayakalpa': cureOjasKayakalpaImg,
  'personnalisee': curePersonnaliseeImg,
  'samvahana-vata': cureSamvahanaVataImg,
  'prenatale': curePrenatalImg,
  'postnatale': curePostnataleImg,
  'journee': cureJourneeImg,
  'week-end-decouverte': cureWeekEndImg,
};

// Map par chemin /uploads/... (pour compatibilité avec frontmatter CMS)
const imageMapByUploadPath: Record<string, string> = {
  '/uploads/cures/cure-panchakarma.jpg': curePanchakarmaImg,
  '/uploads/cures/cure-amrita.jpg': cureAmritaImg,
  '/uploads/cures/cure-karchan.jpg': cureKarchanImg,
  '/uploads/cures/cure-laghana-rasayana.jpg': cureLaghanaRasayanaImg,
  '/uploads/cures/cure-ojas-kayakalpa.jpg': cureOjasKayakalpaImg,
  '/uploads/cures/cure-personnalisee.jpg': curePersonnaliseeImg,
  '/uploads/cures/cure-samvahana-vata.jpg': cureSamvahanaVataImg,
  '/uploads/cures/cure-prenatale.jpg': curePrenatalImg,
  '/uploads/cures/cure-postnatale.jpg': curePostnataleImg,
  '/uploads/cures/cure-journee.jpg': cureJourneeImg,
  '/uploads/cures/cure-week-end.jpg': cureWeekEndImg,
};

/**
 * Résout l'image d'une cure de manière fiable
 * 1. Tente par slug
 * 2. Sinon tente par chemin /uploads/...
 * 3. Sinon retourne l'image générique
 */
export function resolveCureImage(slug?: string, imagePath?: string): string {
  // 1. Par slug
  if (slug && imageMapBySlug[slug]) {
    return imageMapBySlug[slug];
  }
  
  // 2. Par chemin upload
  if (imagePath && imageMapByUploadPath[imagePath]) {
    return imageMapByUploadPath[imagePath];
  }
  
  // 3. Fallback générique
  return cureGenericImg;
}

// Export pour usage externe si besoin
export { cureGenericImg };
