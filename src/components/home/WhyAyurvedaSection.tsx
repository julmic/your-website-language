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
      className={`py-20 bg-card/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Pourquoi choisir l'Ayurveda ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une science millénaire pour une santé globale et durable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
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
