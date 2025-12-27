import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { CureTemplate } from "@/components/cures/CureTemplate";
import { getCureBySlug, getAllCures } from "@/lib/cures-loader";

// Imports statiques des images (obligatoire pour Vite en production)
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

// Map des images par slug
const imageMap: Record<string, string> = {
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

const CurePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Charger la cure depuis le CMS
  const cure = useMemo(() => {
    if (!slug) return null;
    try {
      return getCureBySlug(slug);
    } catch (error) {
      console.error('Erreur chargement cure CMS:', error);
      return null;
    }
  }, [slug]);

  // Si cure non trouvée, rediriger vers 404
  if (!cure) {
    return <Navigate to="/404" replace />;
  }

  // Utiliser l'image du map par slug ou celle du CMS
  const imageUrl = slug ? (imageMap[slug] || cure.image) : cure.image;

  return (
    <CureTemplate
      title={cure.title}
      subtitle={cure.subtitle || ''}
      description={cure.description}
      image={imageUrl}
      pricePerDay={cure.pricePerDay || 0}
      durations={cure.durations}
      treatments={cure.treatments}
      benefits={cure.benefits}
      includes={cure.includes}
      faq={cure.faq}
      testimonials={cure.testimonials}
      relatedCures={cure.relatedCures}
    />
  );
};

export default CurePage;

// Export pour pré-génération des routes si nécessaire
export const getAllCureSlugs = () => {
  try {
    return getAllCures().map(c => c.slug);
  } catch {
    return [];
  }
};
