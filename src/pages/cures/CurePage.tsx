import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { CureTemplate } from "@/components/cures/CureTemplate";
import { getCureBySlug, getAllCures } from "@/lib/cures-loader";
import { resolveCureImage } from "@/lib/cure-images";

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

  // Résoudre l'image via le helper centralisé
  const imageUrl = resolveCureImage(slug, cure.image);

  // Nettoyer les "\n" littéraux dans la description
  const cleanDescription = cure.description?.replace(/\\n/g, '\n') || '';

  return (
    <CureTemplate
      title={cure.title}
      subtitle={cure.subtitle || ''}
      description={cleanDescription}
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
