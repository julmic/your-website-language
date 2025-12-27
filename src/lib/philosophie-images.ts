// ============================================
// Images de philosophie védique
// ============================================

// ----- Images Vastu Shastra -----
import vastuMandalaImg from "@/assets/philosophie/vastu-mandala.png";
import vastuDirectionsImg from "@/assets/philosophie/vastu-directions.png";
import vastuElementsImg from "@/assets/philosophie/vastu-elements.png";
import vastuTempleImg from "@/assets/philosophie/vastu-temple.png";
import vastuFloorplanImg from "@/assets/philosophie/vastu-floorplan.png";

// ----- Futurs thèmes (décommentez au fur et à mesure) -----
// import brahmanAtmanImg from "@/assets/philosophie/brahman-atman.png";
// import vedasImg from "@/assets/philosophie/vedas.png";
// import upanishadsImg from "@/assets/philosophie/upanishads.png";

// Mapping global des images par clé
export const philosophieImageMap: Record<string, string> = {
  // Vastu Shastra
  'vastu-mandala': vastuMandalaImg,
  'vastu-directions': vastuDirectionsImg,
  'vastu-elements': vastuElementsImg,
  'vastu-temple': vastuTempleImg,
  'vastu-floorplan': vastuFloorplanImg,
  // Autres thèmes à ajouter ici
};

// Images groupées par thème pour accès facile
export const vastuImages = {
  mandala: vastuMandalaImg,
  directions: vastuDirectionsImg,
  elements: vastuElementsImg,
  temple: vastuTempleImg,
  floorplan: vastuFloorplanImg,
};

// Futurs groupes d'images par thème
// export const brahmanAtmanImages = { ... };
// export const vedasImages = { ... };

/**
 * Résout l'image de philosophie par sa clé
 * @param key - La clé de l'image (ex: "vastu-mandala", "vedas-hero")
 * @returns L'asset statique correspondant ou undefined si non trouvé
 */
export const resolvePhilosophieImage = (key: string): string | undefined => {
  return philosophieImageMap[key];
};

/**
 * Résout l'image par chemin relatif depuis le CMS
 * @param path - Chemin relatif (ex: "/assets/philosophie/vastu-mandala.png")
 */
export const resolvePhilosophieImageByPath = (path: string): string | undefined => {
  const fileName = path.split('/').pop()?.replace(/\.[^/.]+$/, '');
  if (!fileName) return undefined;
  return philosophieImageMap[fileName];
};

// Exports individuels pour les composants
export {
  vastuMandalaImg,
  vastuDirectionsImg,
  vastuElementsImg,
  vastuTempleImg,
  vastuFloorplanImg,
};
