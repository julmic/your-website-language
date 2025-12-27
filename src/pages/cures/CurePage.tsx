import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { CureTemplate } from "@/components/cures/CureTemplate";
import { getCureBySlug, getAllCures } from "@/lib/cures-loader";

// Map des images importées statiquement
const imageMap: Record<string, string> = {
  '/uploads/cures/cure-panchakarma.jpg': '/src/assets/cures/cure-panchakarma.jpg',
  '/uploads/cures/cure-amrita.jpg': '/src/assets/cures/cure-amrita.jpg',
  '/uploads/cures/cure-karchan.jpg': '/src/assets/cures/cure-karchan.jpg',
  '/uploads/cures/cure-laghana-rasayana.jpg': '/src/assets/cures/cure-laghana-rasayana.jpg',
  '/uploads/cures/cure-ojas-kayakalpa.jpg': '/src/assets/cures/cure-ojas-kayakalpa.jpg',
  '/uploads/cures/cure-personnalisee.jpg': '/src/assets/cures/cure-personnalisee.jpg',
  '/uploads/cures/cure-samvahana-vata.jpg': '/src/assets/cures/cure-samvahana-vata.jpg',
  '/uploads/cures/cure-prenatale.jpg': '/src/assets/cures/cure-prenatale.jpg',
  '/uploads/cures/cure-postnatale.jpg': '/src/assets/cures/cure-postnatale.jpg',
  '/uploads/cures/cure-journee.jpg': '/src/assets/cures/cure-journee.jpg',
  '/uploads/cures/cure-week-end.jpg': '/src/assets/cures/cure-week-end.jpg',
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

  // Utiliser l'image du map ou celle du CMS
  const imageUrl = cure.image ? (imageMap[cure.image] || cure.image) : undefined;

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
