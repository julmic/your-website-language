// Images de bilan de santé
import prakritiImg from "@/assets/bilan/prakriti.avif";
import doshaImg from "@/assets/bilan/dosha.avif";

// Mapping des images de bilan par clé
export const bilanImageMap: Record<string, string> = {
  'prakriti': prakritiImg,
  'dosha': doshaImg,
};

// Mapping des chemins CMS vers les imports statiques
const bilanImagePathMap: Record<string, string> = {
  '/src/assets/bilan/prakriti.avif': prakritiImg,
  '/src/assets/bilan/dosha.avif': doshaImg,
};

/**
 * Résout l'image de bilan par sa clé
 * @param key - La clé de l'image (ex: "prakriti", "dosha")
 * @returns L'asset statique correspondant ou undefined si non trouvé
 */
export const resolveBilanImage = (key: string): string | undefined => {
  return bilanImageMap[key];
};

/**
 * Résout l'image de bilan par son chemin CMS
 * @param imagePath - Le chemin de l'image (ex: "/src/assets/bilan/dosha.avif")
 * @returns L'asset statique correspondant ou le chemin original si non trouvé
 */
export const resolveBilanImageByPath = (imagePath: string): string => {
  return bilanImagePathMap[imagePath] || imagePath;
};

// Exports individuels pour les composants qui ont besoin d'images spécifiques
export {
  prakritiImg,
  doshaImg,
};
