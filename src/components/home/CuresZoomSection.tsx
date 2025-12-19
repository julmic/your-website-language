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
      className={`py-20 bg-card/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Nos Cures Ayurvédiques
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Offrez-vous une pause régénérante avec nos cures complètes. 
              Chaque programme est conçu pour répondre à vos besoins spécifiques : 
              détoxification, rajeunissement, gestion du stress ou rééquilibrage des doshas.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="mt-4">
              <Link to="/cures">
                Découvrir nos cures
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={cureImage}
                alt="Cure ayurvédique Ojas Kayakalpa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
