import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHomePage } from "@/lib/pages-loader";

// Utilitaire centralisé pour la résolution d'images de cures
import { resolveCureImage } from "@/lib/cure-images";

// Résolution de l'image de cure
const cureImage = resolveCureImage("ojas-kayakalpa");

export const CuresZoomSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const homeData = getHomePage();

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
              {homeData.curesZoomTitle}
            </h2>
            
            <p 
              className={`text-muted-foreground leading-relaxed opacity-0 ${
                isVisible ? "animate-fade-in-left" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {homeData.curesZoomDescription}
            </p>

            <ul className="space-y-3">
              {homeData.curesFeatures.map((feature, index) => (
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
              <Link to={homeData.curesZoomButtonLink}>
                {homeData.curesZoomButtonText}
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
