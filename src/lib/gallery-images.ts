// Images de galerie
import galerie01 from "@/assets/galerie/galerie-01.webp";
import galerie02 from "@/assets/galerie/galerie-02.webp";
import galerie03 from "@/assets/galerie/galerie-03.webp";
import galerie04 from "@/assets/galerie/galerie-04.webp";
import galerie05 from "@/assets/galerie/galerie-05.webp";
import galerie06 from "@/assets/galerie/galerie-06.webp";
import galerie07 from "@/assets/galerie/galerie-07.webp";
import galerie08 from "@/assets/galerie/galerie-08.webp";

// Images de massage (utilisées dans la galerie)
import massageOil from "@/assets/massages/massage-oil.jpg";
import massageHead from "@/assets/massages/massage-head.jpg";
import massageFace from "@/assets/massages/massage-face.jpg";
import massageFeet from "@/assets/massages/massage-feet.jpg";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";
import shirodhara from "@/assets/massages/shirodhara-new.jpeg";
import pizichilli from "@/assets/massages/pizichilli.jpeg";
import ubthan from "@/assets/massages/ubthan.jpeg";

// Mapping des chemins CMS vers les imports statiques
export const galleryImageMap: Record<string, string> = {
  "/src/assets/massages/massage-oil.jpg": massageOil,
  "/src/assets/massages/massage-head.jpg": massageHead,
  "/src/assets/massages/massage-face.jpg": massageFace,
  "/src/assets/massages/massage-feet.jpg": massageFeet,
  "/src/assets/massages/massage-herbal.jpg": massageHerbal,
  "/src/assets/massages/shirodhara-new.jpeg": shirodhara,
  "/src/assets/massages/pizichilli.jpeg": pizichilli,
  "/src/assets/massages/ubthan.jpeg": ubthan,
  "/src/assets/galerie/galerie-01.webp": galerie01,
  "/src/assets/galerie/galerie-02.webp": galerie02,
  "/src/assets/galerie/galerie-03.webp": galerie03,
  "/src/assets/galerie/galerie-04.webp": galerie04,
  "/src/assets/galerie/galerie-05.webp": galerie05,
  "/src/assets/galerie/galerie-06.webp": galerie06,
  "/src/assets/galerie/galerie-07.webp": galerie07,
  "/src/assets/galerie/galerie-08.webp": galerie08,
};

// Images par défaut avec les vrais textes alt de la galerie
export const defaultGalleryImages = [
  { src: galerie01, alt: "Façade du Centre Ayurvédique Arkadhya", className: "col-span-2 row-span-2" },
  { src: galerie02, alt: "Jardin et espace extérieur", className: "col-span-1 row-span-1" },
  { src: galerie03, alt: "Salle de soins principale", className: "col-span-1 row-span-1" },
  { src: galerie04, alt: "Espace détente et relaxation", className: "col-span-1 row-span-2" },
  { src: galerie05, alt: "Vue sur le parc arboré", className: "col-span-1 row-span-1" },
  { src: galerie06, alt: "Chambre d'hôtes paisible", className: "col-span-1 row-span-1" },
  { src: galerie07, alt: "Salle de massage traditionnelle", className: "col-span-1 row-span-1" },
  { src: galerie08, alt: "Décoration intérieure ayurvédique", className: "col-span-1 row-span-1" },
];

/**
 * Résout le chemin d'une image de galerie CMS vers son asset statique correspondant
 * @param imagePath - Le chemin de l'image (ex: "/src/assets/galerie/galerie-01.webp")
 * @returns L'asset statique correspondant ou le chemin original si non trouvé
 */
export const resolveGalleryImage = (imagePath: string): string => {
  return galleryImageMap[imagePath] || imagePath;
};
