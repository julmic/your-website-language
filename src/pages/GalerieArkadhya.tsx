import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getAllGalleryImages } from "@/lib/collections-loader";

// Import all gallery images
import galerie01 from "@/assets/galerie/galerie-01.webp";
import galerie02 from "@/assets/galerie/galerie-02.webp";
import galerie03 from "@/assets/galerie/galerie-03.webp";
import galerie04 from "@/assets/galerie/galerie-04.webp";
import galerie05 from "@/assets/galerie/galerie-05.webp";
import galerie06 from "@/assets/galerie/galerie-06.webp";
import galerie07 from "@/assets/galerie/galerie-07.webp";
import galerie08 from "@/assets/galerie/galerie-08.webp";
import galerie09 from "@/assets/galerie/galerie-09.webp";
import galerie10 from "@/assets/galerie/galerie-10.webp";
import galerie11 from "@/assets/galerie/galerie-11.webp";
import galerie12 from "@/assets/galerie/galerie-12.webp";
import galerie13 from "@/assets/galerie/galerie-13.webp";
import galerie14 from "@/assets/galerie/galerie-14.webp";
import galerie15 from "@/assets/galerie/galerie-15.webp";
import galerie16 from "@/assets/galerie/galerie-16.webp";
import galerie17 from "@/assets/galerie/galerie-17.webp";
import galerie18 from "@/assets/galerie/galerie-18.webp";
import galerie19 from "@/assets/galerie/galerie-19.webp";
import galerie20 from "@/assets/galerie/galerie-20.webp";
import galerie21 from "@/assets/galerie/galerie-21.webp";
import galerie22 from "@/assets/galerie/galerie-22.webp";
import galerie23 from "@/assets/galerie/galerie-23.webp";
import galerie24 from "@/assets/galerie/galerie-24.webp";
import galerie25 from "@/assets/galerie/galerie-25.webp";
import galerie26 from "@/assets/galerie/galerie-26.webp";
import galerie27 from "@/assets/galerie/galerie-27.webp";
import galerie28 from "@/assets/galerie/galerie-28.webp";
import galerie29 from "@/assets/galerie/galerie-29.webp";
import galerie30 from "@/assets/galerie/galerie-30.webp";
import galerie31 from "@/assets/galerie/galerie-31.webp";
import galerie32 from "@/assets/galerie/galerie-32.webp";

// Mapping des chemins vers les imports
const imageMap: Record<string, string> = {
  "/src/assets/galerie/galerie-01.webp": galerie01,
  "/src/assets/galerie/galerie-02.webp": galerie02,
  "/src/assets/galerie/galerie-03.webp": galerie03,
  "/src/assets/galerie/galerie-04.webp": galerie04,
  "/src/assets/galerie/galerie-05.webp": galerie05,
  "/src/assets/galerie/galerie-06.webp": galerie06,
  "/src/assets/galerie/galerie-07.webp": galerie07,
  "/src/assets/galerie/galerie-08.webp": galerie08,
  "/src/assets/galerie/galerie-09.webp": galerie09,
  "/src/assets/galerie/galerie-10.webp": galerie10,
  "/src/assets/galerie/galerie-11.webp": galerie11,
  "/src/assets/galerie/galerie-12.webp": galerie12,
  "/src/assets/galerie/galerie-13.webp": galerie13,
  "/src/assets/galerie/galerie-14.webp": galerie14,
  "/src/assets/galerie/galerie-15.webp": galerie15,
  "/src/assets/galerie/galerie-16.webp": galerie16,
  "/src/assets/galerie/galerie-17.webp": galerie17,
  "/src/assets/galerie/galerie-18.webp": galerie18,
  "/src/assets/galerie/galerie-19.webp": galerie19,
  "/src/assets/galerie/galerie-20.webp": galerie20,
  "/src/assets/galerie/galerie-21.webp": galerie21,
  "/src/assets/galerie/galerie-22.webp": galerie22,
  "/src/assets/galerie/galerie-23.webp": galerie23,
  "/src/assets/galerie/galerie-24.webp": galerie24,
  "/src/assets/galerie/galerie-25.webp": galerie25,
  "/src/assets/galerie/galerie-26.webp": galerie26,
  "/src/assets/galerie/galerie-27.webp": galerie27,
  "/src/assets/galerie/galerie-28.webp": galerie28,
  "/src/assets/galerie/galerie-29.webp": galerie29,
  "/src/assets/galerie/galerie-30.webp": galerie30,
  "/src/assets/galerie/galerie-31.webp": galerie31,
  "/src/assets/galerie/galerie-32.webp": galerie32,
};

// Fallback images
const defaultGalleryImages = [
  { src: galerie01, alt: "Facade du centre Arkadhya", size: "tall" as const },
  { src: galerie02, alt: "Jardin et terrasse du centre", size: "normal" as const },
  { src: galerie03, alt: "Salle de soins avec huiles", size: "normal" as const },
  { src: galerie04, alt: "Espace détente et relaxation", size: "wide" as const },
  { src: galerie05, alt: "Vue sur le parc arboré", size: "normal" as const },
  { src: galerie06, alt: "Chambre d'hôtes paisible", size: "tall" as const },
  { src: galerie07, alt: "Salle de massage traditionnelle", size: "normal" as const },
  { src: galerie08, alt: "Décoration intérieure ayurvédique", size: "normal" as const },
  { src: galerie09, alt: "Bassin et fontaine du jardin", size: "wide" as const },
  { src: galerie10, alt: "Espace cuisine ayurvédique", size: "normal" as const },
  { src: galerie11, alt: "Vue sur la campagne environnante", size: "tall" as const },
  { src: galerie12, alt: "Potager bio du centre", size: "normal" as const },
  { src: galerie13, alt: "Salle de yoga et méditation", size: "normal" as const },
  { src: galerie14, alt: "Coucher de soleil sur le domaine", size: "wide" as const },
  { src: galerie15, alt: "Espace bien-être intérieur", size: "normal" as const },
  { src: galerie16, alt: "Allée fleurie du jardin", size: "tall" as const },
  { src: galerie17, alt: "Préparation des soins ayurvédiques", size: "normal" as const },
  { src: galerie18, alt: "Vue panoramique sur la nature", size: "normal" as const },
  { src: galerie19, alt: "Terrasse extérieure ombragée", size: "wide" as const },
  { src: galerie20, alt: "Vue panoramique sur la campagne", size: "normal" as const },
  { src: galerie21, alt: "Salle de soins ayurvédiques", size: "tall" as const },
  { src: galerie22, alt: "Pot Shirodhara en cuivre", size: "normal" as const },
  { src: galerie23, alt: "Statue Nataraja - Shiva dansant", size: "normal" as const },
  { src: galerie24, alt: "Salle de massage lumineuse", size: "wide" as const },
  { src: galerie25, alt: "Terrasse avec vue sur la campagne", size: "normal" as const },
  { src: galerie26, alt: "Roses du jardin", size: "tall" as const },
  { src: galerie27, alt: "Ustensiles en cuivre traditionnels", size: "normal" as const },
  { src: galerie28, alt: "Bâtiment en pierre et jardin", size: "normal" as const },
  { src: galerie29, alt: "Jardin potager et cabane", size: "wide" as const },
  { src: galerie30, alt: "Statue Nataraja complète", size: "normal" as const },
  { src: galerie31, alt: "Soin Shirodhara en cours", size: "tall" as const },
  { src: galerie32, alt: "Soin visage ayurvédique", size: "normal" as const },
];

const getSizeClasses = (size: "tall" | "wide" | "normal") => {
  switch (size) {
    case "tall":
      return "row-span-2";
    case "wide":
      return "col-span-2";
    default:
      return "";
  }
};

const GalerieArkadhya = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ threshold: 0.05 });

  // Charger les images depuis le CMS
  const cmsImages = getAllGalleryImages();
  
  // Utiliser les images CMS si disponibles, sinon fallback
  const galleryImages = cmsImages.length > 0
    ? cmsImages.map(img => ({
        src: imageMap[img.src] || img.src,
        alt: img.alt,
        size: img.size,
      }))
    : defaultGalleryImages;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <Layout>
      <Helmet>
        <title>Galerie Photos | Centre Ayurvédique Arkadhya</title>
        <meta
          name="description"
          content="Découvrez le Centre Ayurvédique Arkadhya en images : un cadre bucolique dédié au bien-être et à l'harmonie corps-esprit."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Camera className="h-4 w-4" />
              <span className="text-sm font-medium">Notre univers en images</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Le Centre Arkadhya en Images
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Plongez dans l'atmosphère unique de notre centre ayurvédique
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Text Section */}
      <section
        ref={introRef}
        className={`py-16 md:py-20 bg-muted/30 transition-all duration-700 ${
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              Un cadre bucolique pour vous accueillir
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Vous venez d'arriver au centre ayurvédique Arkadhya. 
                Laissez la magie de l'instant opérer... 
                Flânez dans ce moment de renouveau que la vie vous offre... 
                Respirez le parfum des roses, du jasmin...
              </p>
              <p>
                Pour celles et ceux qui viennent depuis plusieurs années, 
                reconnectez-vous à ce refuge de beauté et de bien-être, 
                en ce lieu qui vous accueille... Ressourcez-vous... 
                Dites oui à votre partie de vie...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        ref={quoteRef}
        className={`py-12 md:py-16 bg-background transition-all duration-700 delay-100 ${
          quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif">
                "
              </div>
              <blockquote className="pt-8">
                <p className="text-xl md:text-2xl italic text-muted-foreground font-serif">
                  Où est la pensée, l'énergie est.
                </p>
                <footer className="mt-4">
                  <cite className="text-lg text-primary font-medium not-italic">
                    — Kaviradja
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section
        ref={galleryRef}
        className={`py-16 md:py-24 bg-background transition-all duration-700 delay-200 ${
          galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${getSizeClasses(image.size)}`}
                onClick={() => openLightbox(index)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm font-medium drop-shadow-lg">
                    Voir en grand
                  </span>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/60 rounded-tr-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Venez vivre l'expérience Arkadhya
            </h2>
            <p className="text-muted-foreground mb-8">
              Réservez votre cure ou votre séjour dans notre centre ayurvédique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/cures">Découvrir nos cures</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95"
          onKeyDown={handleKeyDown}
        >
          <div className="relative flex items-center justify-center w-full h-full min-h-[60vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Image */}
            {selectedImage !== null && (
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[85vh] object-contain"
              />
            )}

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image Counter */}
            {selectedImage !== null && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default GalerieArkadhya;
