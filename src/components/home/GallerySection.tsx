import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getFeaturedGalleryImages } from "@/lib/collections-loader";
import { getHomePage } from "@/lib/pages-loader";

// Import des images pour le mapping
import massageOil from "@/assets/massages/massage-oil.jpg";
import massageHead from "@/assets/massages/massage-head.jpg";
import massageFace from "@/assets/massages/massage-face.jpg";
import massageFeet from "@/assets/massages/massage-feet.jpg";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";
import shirodhara from "@/assets/massages/shirodhara-new.jpeg";
import pizichilli from "@/assets/massages/pizichilli.jpeg";
import ubthan from "@/assets/massages/ubthan.jpeg";
import galerie01 from "@/assets/galerie/galerie-01.webp";
import galerie02 from "@/assets/galerie/galerie-02.webp";
import galerie03 from "@/assets/galerie/galerie-03.webp";
import galerie04 from "@/assets/galerie/galerie-04.webp";
import galerie05 from "@/assets/galerie/galerie-05.webp";
import galerie06 from "@/assets/galerie/galerie-06.webp";
import galerie07 from "@/assets/galerie/galerie-07.webp";
import galerie08 from "@/assets/galerie/galerie-08.webp";

// Mapping des chemins vers les imports
const imageMap: Record<string, string> = {
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

// Images de fallback (affichage initial)
const defaultImages = [
  { src: massageOil, alt: "Huiles ayurvédiques", className: "col-span-2 row-span-2" },
  { src: massageHead, alt: "Massage crânien", className: "col-span-1 row-span-1" },
  { src: massageFace, alt: "Soin du visage", className: "col-span-1 row-span-1" },
  { src: shirodhara, alt: "Shirodhara", className: "col-span-1 row-span-2" },
  { src: massageFeet, alt: "Massage des pieds", className: "col-span-1 row-span-1" },
  { src: massageHerbal, alt: "Soins aux herbes", className: "col-span-1 row-span-1" },
  { src: pizichilli, alt: "Pizichilli", className: "col-span-1 row-span-1" },
  { src: ubthan, alt: "Ubthan", className: "col-span-1 row-span-1" },
];

const getSizeClass = (size: string): string => {
  switch (size) {
    case "wide": return "col-span-2 row-span-1";
    case "tall": return "col-span-1 row-span-2";
    default: return "col-span-1 row-span-1";
  }
};

export const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const homePage = getHomePage();
  
  // Charger les images depuis le CMS
  const cmsImages = getFeaturedGalleryImages();
  
  // Utiliser les images CMS si disponibles, sinon fallback
  const images = cmsImages.length >= 8 
    ? cmsImages.slice(0, 8).map((img, index) => ({
        src: imageMap[img.src] || img.src,
        alt: img.alt,
        className: index === 0 ? "col-span-2 row-span-2" : 
                   index === 3 ? "col-span-1 row-span-2" : 
                   getSizeClass(img.size),
      }))
    : defaultImages;

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 overflow-hidden"
    >
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-serif font-semibold mb-4 opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            {homePage.galleryTitle}
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {homePage.gallerySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer opacity-0 ${
                image.className
              } ${isVisible ? "animate-scale-fade-in" : ""}`}
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              {/* Image label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-medium text-foreground">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
