import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

// Masonry layout sizes: "tall", "wide", "normal"
const galleryImages = [
  { src: galerie01, alt: "Centre Arkadhya - Vue 1", size: "tall" as const },
  { src: galerie02, alt: "Centre Arkadhya - Vue 2", size: "normal" as const },
  { src: galerie03, alt: "Centre Arkadhya - Vue 3", size: "wide" as const },
  { src: galerie04, alt: "Centre Arkadhya - Vue 4", size: "normal" as const },
  { src: galerie05, alt: "Centre Arkadhya - Vue 5", size: "tall" as const },
  { src: galerie06, alt: "Centre Arkadhya - Vue 6", size: "normal" as const },
  { src: galerie07, alt: "Centre Arkadhya - Vue 7", size: "normal" as const },
  { src: galerie08, alt: "Centre Arkadhya - Vue 8", size: "wide" as const },
  { src: galerie09, alt: "Centre Arkadhya - Vue 9", size: "normal" as const },
  { src: galerie10, alt: "Centre Arkadhya - Vue 10", size: "tall" as const },
  { src: galerie11, alt: "Centre Arkadhya - Vue 11", size: "normal" as const },
  { src: galerie12, alt: "Centre Arkadhya - Vue 12", size: "normal" as const },
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
