import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/cddVa78X5t24FrPQ/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-background/50 backdrop-blur-[1px]" />
      
      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Médecine traditionnelle indienne</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight">
            Découvrez l'art ancestral
            <span className="block text-gradient mt-2">de l'Ayurvéda</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Retrouvez l'équilibre et l'harmonie entre le corps et l'esprit grâce aux soins ayurvédiques personnalisés du centre Arkadhya en Aquitaine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="text-base">
              <Link to="/services">
                Découvrir nos soins
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link to="/contact">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
};
