import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { MassageTemplate } from "@/components/massages/MassageTemplate";
import { getMassageBySlug, getAllMassages } from "@/lib/massages-loader";

// Imports statiques des images (obligatoire pour Vite en production)
import abhyangaImg from '@/assets/massages/abhyanga.webp';
import shirodharaImg from '@/assets/massages/shirodhara-new.jpeg';
import visheshImg from '@/assets/massages/vishesh-new.png';
import udvartanaImg from '@/assets/massages/udvartana.jpeg';
import bolKansuImg from '@/assets/massages/bol-kansu.webp';
import elakizhiImg from '@/assets/massages/elakizhi.webp';
import kizhiImg from '@/assets/massages/kizhi.webp';
import mardanamImg from '@/assets/massages/mardanam.webp';
import marmaTherapieImg from '@/assets/massages/marma-therapie.png';
import mukhalepamlImg from '@/assets/massages/mukhalepam.png';
import navarakiriImg from '@/assets/massages/navarakiri.png';
import padabhyangaImg from '@/assets/massages/padabhyanga.png';
import padavisheshImg from '@/assets/massages/padavishesh.png';
import panchaMahaBhutaImg from '@/assets/massages/pancha-maha-bhuta.webp';
import pindaSvedaImg from '@/assets/massages/pinda-sveda.png';
import pizichilliImg from '@/assets/massages/pizichilli.jpeg';
import prasavpurveTirumuImg from '@/assets/massages/prasavpurve-tirumu.jpeg';
import prishtikaraTirumuImg from '@/assets/massages/prishtikara-tirumu.png';
import putapakamImg from '@/assets/massages/putapakam.jpeg';
import saundaryaImg from '@/assets/massages/saundarya.jpeg';
import shantalaImg from '@/assets/massages/shantala.jpg';
import shashtishalipindsvedanImg from '@/assets/massages/shashtishalipindswedan.png';
import shiroAbhyangaImg from '@/assets/massages/shiroabhyanga.jpeg';
import shirotchampiImg from '@/assets/massages/shirotchampi.jpeg';
import snehapanamImg from '@/assets/massages/snehapanam.jpeg';
import svedanaImg from '@/assets/massages/svedana.png';
import thalapothichilImg from '@/assets/massages/thalapothichil.png';
import ubthanImg from '@/assets/massages/ubthan.jpeg';
import undgharshanImg from '@/assets/massages/undgharshan.png';

// Map des images importées statiquement
const imageMap: Record<string, string> = {
  'abhyanga': abhyangaImg,
  'shirodhara': shirodharaImg,
  'vishesh': visheshImg,
  'udvartana': udvartanaImg,
  'bol-kansu': bolKansuImg,
  'elakizhi': elakizhiImg,
  'kizhi': kizhiImg,
  'mardanam': mardanamImg,
  'marma-therapie': marmaTherapieImg,
  'mukhalepam': mukhalepamlImg,
  'navarakiri': navarakiriImg,
  'padabhyanga': padabhyangaImg,
  'padavishesh': padavisheshImg,
  'pancha-maha-bhuta': panchaMahaBhutaImg,
  'pinda-sweda': pindaSvedaImg,
  'pizichilli': pizichilliImg,
  'prasavpurve-tirumu': prasavpurveTirumuImg,
  'prishtikara-tirumu': prishtikaraTirumuImg,
  'putapakam': putapakamImg,
  'saundarya': saundaryaImg,
  'shantala': shantalaImg,
  'shashtishalipindswedan': shashtishalipindsvedanImg,
  'shiro-abhyanga': shiroAbhyangaImg,
  'shirotchampi': shirotchampiImg,
  'snehapanam': snehapanamImg,
  'svedana': svedanaImg,
  'thalapothichil': thalapothichilImg,
  'ubthan': ubthanImg,
  'undgharshan': undgharshanImg,
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
