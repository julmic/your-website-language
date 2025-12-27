import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { MassageTemplate } from "@/components/massages/MassageTemplate";
import { getMassageBySlug } from "@/lib/massages-loader";

// Utilitaire centralisé pour la résolution d'images de massages
import { massageImageMap } from "@/lib/massage-images";

const MassagePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Charger le massage depuis le CMS
  const massage = useMemo(() => {
    if (!slug) return null;
    try {
      return getMassageBySlug(slug);
    } catch (error) {
      console.error('Erreur chargement massage CMS:', error);
      return null;
    }
  }, [slug]);

  if (!massage) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-serif mb-4">Massage non trouvé</h1>
          <p className="text-muted-foreground mb-6">
            Désolé, ce massage n'existe pas ou n'est plus disponible.
          </p>
          <Link to="/services" className="text-primary hover:underline">
            Retour aux services
          </Link>
        </div>
      </Layout>
    );
  }

  // Résoudre l'image via le map centralisé
  const resolvedImage = massageImageMap[massage.slug] || massage.image;

  return (
    <MassageTemplate 
      title={massage.title}
      subtitle={massage.subtitle}
      description={massage.description}
      details={massage.details}
      prices={massage.prices}
      cureOnly={massage.cureOnly}
      image={resolvedImage}
      forWhom={massage.forWhom}
      contraindications={massage.contraindications}
      benefits={massage.benefits}
      studies={massage.studies}
      faq={massage.faq}
      testimonials={massage.testimonials}
      relatedMassages={massage.relatedMassages}
    />
  );
};

export default MassagePage;
