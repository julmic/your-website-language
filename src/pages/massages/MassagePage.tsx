import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { MassageTemplate } from "@/components/massages/MassageTemplate";
import { getMassageBySlug, getAllMassages, MassageData } from "@/lib/massages-loader";

// Map des images importées statiquement (les imports dynamiques ne fonctionnent pas avec Vite)
const imageMap: Record<string, string> = {
  'abhyanga': '/src/assets/massages/abhyanga.webp',
  'shirodhara': '/src/assets/massages/shirodhara-new.jpeg',
  'vishesh': '/src/assets/massages/vishesh-new.png',
  'udvartana': '/src/assets/massages/udvartana.jpeg',
  'bol-kansu': '/src/assets/massages/bol-kansu.webp',
  'elakizhi': '/src/assets/massages/elakizhi.webp',
  'kizhi': '/src/assets/massages/kizhi.webp',
  'mardanam': '/src/assets/massages/mardanam.webp',
  'marma-therapie': '/src/assets/massages/marma-therapie.png',
  'mukhalepam': '/src/assets/massages/mukhalepam.png',
  'navarakiri': '/src/assets/massages/navarakiri.png',
  'padabhyanga': '/src/assets/massages/padabhyanga.png',
  'padavishesh': '/src/assets/massages/padavishesh.png',
  'pancha-maha-bhuta': '/src/assets/massages/pancha-maha-bhuta.webp',
  'pinda-sweda': '/src/assets/massages/pinda-sveda.png',
  'pizichilli': '/src/assets/massages/pizichilli.jpeg',
  'prasavpurve-tirumu': '/src/assets/massages/prasavpurve-tirumu.jpeg',
  'prishtikara-tirumu': '/src/assets/massages/prishtikara-tirumu.png',
  'putapakam': '/src/assets/massages/putapakam.jpeg',
  'saundarya': '/src/assets/massages/saundarya.jpeg',
  'shantala': '/src/assets/massages/shantala.jpg',
  'shashtishalipindswedan': '/src/assets/massages/shashtishalipindswedan.png',
  'shiro-abhyanga': '/src/assets/massages/shiroabhyanga.jpeg',
  'shirotchampi': '/src/assets/massages/shirotchampi.jpeg',
  'snehapanam': '/src/assets/massages/snehapanam.jpeg',
  'svedana': '/src/assets/massages/svedana.png',
  'thalapothichil': '/src/assets/massages/thalapothichil.png',
  'ubthan': '/src/assets/massages/ubthan.jpeg',
  'undgharshan': '/src/assets/massages/undgharshan.png',
};

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

  // Si massage non trouvé, rediriger vers 404
  if (!massage) {
    return <Navigate to="/404" replace />;
  }

  // Utiliser l'image du map ou celle du CMS
  const imageUrl = imageMap[massage.slug] || massage.image;

  return (
    <MassageTemplate
      title={massage.title}
      subtitle={massage.subtitle}
      description={massage.description}
      details={massage.details}
      prices={massage.prices.map(p => ({
        label: p.label,
        duration: p.duration,
        price: p.price,
      }))}
      cureOnly={massage.cureOnly}
      image={imageUrl}
      forWhom={massage.forWhom}
      contraindications={massage.contraindications}
      benefits={massage.benefits}
      studies={massage.studies}
      faq={massage.faq}
      testimonials={massage.testimonials?.map(t => ({
        name: t.name,
        text: t.text,
        rating: t.rating,
      }))}
      relatedMassages={massage.relatedMassages}
    />
  );
};

export default MassagePage;

// Export pour pré-génération des routes si nécessaire
export const getAllMassageSlugs = () => {
  try {
    return getAllMassages().map(m => m.slug);
  } catch {
    return [];
  }
};
