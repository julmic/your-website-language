import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Leaf, Moon, Zap, Scale, Shield, LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHomePage } from "@/lib/pages-loader";

// Icon mapping for CMS icon values
const iconMap: Record<string, LucideIcon> = {
  Brain,
  Leaf,
  Moon,
  Zap,
  Scale,
  Shield,
};

export const WhyAyurvedaSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const homeData = getHomePage();

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
            {homeData.whyAyurvedaTitle}
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {homeData.whyAyurvedaSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {homeData.whyBenefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || Shield;
            return (
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
                  <IconComponent className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div 
          className={`text-center opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.8s" }}
        >
          <Button asChild size="lg" className="hover:scale-105 transition-transform">
            <Link to={homeData.whyAyurvedaButtonLink}>
              {homeData.whyAyurvedaButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
