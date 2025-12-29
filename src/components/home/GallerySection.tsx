import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getFeaturedGalleryImages } from "@/lib/collections-loader";
import { getHomePage } from "@/lib/pages-loader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Utilitaire centralisé pour la résolution d'images de galerie
import { resolveGalleryImage, defaultGalleryImages } from "@/lib/gallery-images";

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
  
  // Utiliser les images CMS si disponibles, sinon fallback (9 images maintenant)
  const images = cmsImages.length >= 9 
    ? cmsImages.slice(0, 9).map((img, index) => ({
        src: resolveGalleryImage(img.src),
        alt: img.alt,
        className: index === 0 ? "col-span-2 row-span-2" : 
                   index === 3 ? "col-span-1 row-span-2" : 
                   index === 8 ? "col-span-2 row-span-1" :
                   getSizeClass(img.size),
      }))
    : defaultGalleryImages;

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
          
          {/* CTA intégré dans la grille */}
          <Link
            to="/centre-ayurvedique-arkadhya-en-images"
            className={`col-span-2 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex flex-col items-center justify-center p-6 group hover:from-primary/30 hover:to-primary/10 transition-all duration-500 opacity-0 ${
              isVisible ? "animate-scale-fade-in" : ""
            }`}
            style={{ animationDelay: `${0.1 + images.length * 0.08}s` }}
          >
            <span className="text-lg font-serif font-semibold mb-2 text-foreground">Découvrir notre univers</span>
            <span className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Voir toute la galerie
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
