// Images de massages
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

// Mapping des images de massages par slug
export const massageImageMap: Record<string, string> = {
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

/**
 * Résout l'image d'un massage par son slug
 * @param slug - Le slug du massage (ex: "abhyanga", "shirodhara")
 * @returns L'asset statique correspondant ou undefined si non trouvé
 */
export const resolveMassageImage = (slug: string): string | undefined => {
  return massageImageMap[slug];
};

// Exports individuels pour les composants qui ont besoin d'images spécifiques
export {
  abhyangaImg,
  shirodharaImg,
  marmaTherapieImg,
};
