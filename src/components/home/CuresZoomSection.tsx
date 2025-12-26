import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import cureImage from "@/assets/cures/cure-ojas-kayakalpa.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  "Programmes de 3 à 21 jours",
  "Détoxification et régénération",
  "Hébergement possible sur place",
  "Suivi personnalisé par nos praticiens"
];

export const CuresZoomSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-card/30 overflow-hidden"
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - slide from left */}
          <div className="space-y-6">
            <h2 
              className={`text-3xl md:text-4xl font-serif font-semibold opacity-0 ${
                isVisible ? "animate-fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Nos Cures Ayurvédiques
            </h2>
            
            <p 
              className={`text-muted-foreground leading-relaxed opacity-0 ${
                isVisible ? "animate-fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Offrez-vous une pause régénérante avec nos cures complètes. 
              Chaque programme est conçu pour répondre à vos besoins spécifiques : 
              détoxification, rajeunissement, gestion du stress ou rééquilibrage des doshas.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-3 opacity-0 ${
                    isVisible ? "animate-fade-in-left" : ""
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:bg-primary/30">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              asChild 
              size="lg" 
              className={`mt-4 opacity-0 hover:scale-105 transition-transform ${
                isVisible ? "animate-slide-up-spring" : ""
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              <Link to="/cures">
                Découvrir nos cures
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image - slide from right with scale */}
          <div 
            className={`relative opacity-0 ${isVisible ? "animate-fade-in-right" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={cureImage}
                alt="Cure ayurvédique Ojas Kayakalpa"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative pulsing circles */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
