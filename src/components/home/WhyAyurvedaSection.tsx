import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Leaf, Moon, Zap, Scale, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Brain,
    title: "Gestion du stress",
    description: "Réduction de l'anxiété et apaisement du mental"
  },
  {
    icon: Leaf,
    title: "Troubles digestifs",
    description: "Amélioration du métabolisme et de l'assimilation"
  },
  {
    icon: Moon,
    title: "Sommeil réparateur",
    description: "Retrouvez un sommeil profond et régénérant"
  },
  {
    icon: Zap,
    title: "Énergie vitale",
    description: "Revitalisez votre corps et votre esprit"
  },
  {
    icon: Scale,
    title: "Équilibre des doshas",
    description: "Harmonisation de Vata, Pitta et Kapha"
  },
  {
    icon: Shield,
    title: "Prévention",
    description: "Renforcement du système immunitaire"
  }
];

export const WhyAyurvedaSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-card/30 overflow-hidden"
    >
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-serif font-semibold mb-4 opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            Pourquoi choisir l'Ayurveda ?
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Une science millénaire pour une santé globale et durable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 opacity-0 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <div 
                className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 opacity-0 ${
                  isVisible ? "animate-scale-fade-in" : ""
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <benefit.icon className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          className={`text-center opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.8s" }}
        >
          <Button asChild size="lg" className="hover:scale-105 transition-transform">
            <Link to="/philosophie-vedique">
              Découvrir l'Ayurveda
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
