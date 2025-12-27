// Images statiques du blog
import doshasHero from "@/assets/blog/doshas-hero.webp";
import automneHero from "@/assets/blog/automne-ayurveda-hero.jpeg";
import hiverHero from "@/assets/blog/hiver-ayurveda-hero.webp";
import colonHero from "@/assets/blog/colon-irritable-hero.webp";
import osteoporoseHero from "@/assets/blog/osteoporose-hero.webp";
import santeMentaleHero from "@/assets/blog/sante-mentale-hero.png";
import sommeilHero from "@/assets/blog/sommeil-ayurveda-hero.png";
import incompatibilitesHero from "@/assets/blog/incompatibilites-alimentaires-hero.webp";

// Map des images CMS vers assets statiques
const blogImageMap: Record<string, string> = {
  "/uploads/blog/doshas-hero.webp": doshasHero,
  "/uploads/blog/automne-ayurveda-hero.jpeg": automneHero,
  "/uploads/blog/hiver-ayurveda-hero.webp": hiverHero,
  "/uploads/blog/colon-irritable-hero.webp": colonHero,
  "/uploads/blog/osteoporose-hero.webp": osteoporoseHero,
  "/uploads/blog/sante-mentale-hero.png": santeMentaleHero,
  "/uploads/blog/sommeil-ayurveda-hero.png": sommeilHero,
  "/uploads/blog/incompatibilites-alimentaires-hero.webp": incompatibilitesHero,
};

/**
 * Résout le chemin d'une image de blog CMS vers son asset statique correspondant
 * @param imagePath - Le chemin de l'image (ex: "/uploads/blog/doshas-hero.webp")
 * @returns L'asset statique correspondant ou le chemin original si non trouvé
 */
export const resolveBlogImage = (imagePath?: string): string | undefined => {
  if (!imagePath) return undefined;
  return blogImageMap[imagePath] || imagePath;
};

export default blogImageMap;
