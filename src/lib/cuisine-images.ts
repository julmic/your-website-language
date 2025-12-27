// Images de cuisine ayurvédique
import kitcheriImg from "@/assets/cuisine/kitcheri.webp";

// Images petit-déjeuner par dosha
import pdVataImg from "@/assets/cuisine/pdvata.webp";
import pdPittaImg from "@/assets/cuisine/pdpitta.webp";
import pdKaphaImg from "@/assets/cuisine/pdkapha.webp";

// Images déjeuner par dosha
import dejVataImg from "@/assets/cuisine/dej-vata.webp";
import dejPittaImg from "@/assets/cuisine/dej-pitta.webp";
import dejKaphaImg from "@/assets/cuisine/dej-kapha.webp";

// Images dîner par dosha
import dinnerVataImg from "@/assets/cuisine/dinner-vata.webp";
import dinnerPittaImg from "@/assets/cuisine/dinner-pitta.webp";
import dinnerKaphaImg from "@/assets/cuisine/dinner-kapha.webp";

// Mapping des images de cuisine par clé
export const cuisineImageMap: Record<string, string> = {
  'kitcheri': kitcheriImg,
  'pd-vata': pdVataImg,
  'pd-pitta': pdPittaImg,
  'pd-kapha': pdKaphaImg,
  'dej-vata': dejVataImg,
  'dej-pitta': dejPittaImg,
  'dej-kapha': dejKaphaImg,
  'dinner-vata': dinnerVataImg,
  'dinner-pitta': dinnerPittaImg,
  'dinner-kapha': dinnerKaphaImg,
};

// Images groupées par dosha pour faciliter l'usage
export const cuisineByDosha = {
  vata: {
    breakfast: pdVataImg,
    lunch: dejVataImg,
    dinner: dinnerVataImg,
  },
  pitta: {
    breakfast: pdPittaImg,
    lunch: dejPittaImg,
    dinner: dinnerPittaImg,
  },
  kapha: {
    breakfast: pdKaphaImg,
    lunch: dejKaphaImg,
    dinner: dinnerKaphaImg,
  },
};

/**
 * Résout l'image de cuisine par sa clé
 * @param key - La clé de l'image (ex: "kitcheri", "pd-vata")
 * @returns L'asset statique correspondant ou undefined si non trouvé
 */
export const resolveCuisineImage = (key: string): string | undefined => {
  return cuisineImageMap[key];
};

// Exports individuels pour les composants qui ont besoin d'images spécifiques
export {
  kitcheriImg,
  pdVataImg,
  pdPittaImg,
  pdKaphaImg,
  dejVataImg,
  dejPittaImg,
  dejKaphaImg,
  dinnerVataImg,
  dinnerPittaImg,
  dinnerKaphaImg,
};
