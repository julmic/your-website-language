import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import patrickImage from "@/assets/about/patrick-villette.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHomePage } from "@/lib/pages-loader";

export const AboutPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const homeData = getHomePage();

  // Parse markdown bold syntax in paragraphs
  const renderParagraph = (text: string) => {
    // Replace **text** with <strong>text</strong>
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
    );
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-card/50 overflow-hidden"
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with slide-in-left and rotation */}
          <div 
            className={`relative opacity-0 ${isVisible ? "animate-fade-in-left" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={patrickImage}
                alt="Patrick Villette - Fondateur d'Arkadhya"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative elements with pulse animation */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          </div>

          {/* Content with staggered fade-in-right */}
          <div className="space-y-6">
            <h2 
              className={`text-3xl md:text-4xl font-serif font-semibold opacity-0 ${
                isVisible ? "animate-fade-in-right" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {homeData.aboutPreviewTitle}
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {homeData.aboutPreviewParagraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`opacity-0 ${isVisible ? "animate-fade-in-right" : ""}`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {renderParagraph(paragraph)}
                </p>
              ))}
            </div>

            <Button 
              asChild 
              className={`mt-4 opacity-0 hover:scale-105 transition-transform ${
                isVisible ? "animate-scale-fade-in" : ""
              }`}
              style={{ animationDelay: `${0.3 + homeData.aboutPreviewParagraphs.length * 0.1}s` }}
            >
              <Link to="/a-propos">
                {homeData.aboutPreviewButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
