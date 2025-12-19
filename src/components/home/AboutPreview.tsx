import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import patrickImage from "@/assets/about/patrick-villette.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-card/50 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={patrickImage}
                alt="Patrick Villette - Fondateur d'Arkadhya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Qui sommes-nous ?
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Le centre Arkadhya perpétue l'enseignement authentique de l'Ayurveda, 
                la science de la vie issue de la tradition védique millénaire de l'Inde.
              </p>
              <p>
                Notre approche holistique intègre les soins corporels, la nutrition, 
                la phytothérapie et les pratiques spirituelles pour restaurer l'équilibre 
                naturel de chaque individu.
              </p>
              <p>
                Certifiés par la World Ayurveda Foundation et l'État Indien, nous proposons 
                également des spécialités rares comme la <strong className="text-foreground">Bhutavidya</strong> (psychiatrie ayurvédique) 
                et la <strong className="text-foreground">Marma Thérapie</strong> (points vitaux énergétiques).
              </p>
            </div>

            <Button asChild className="mt-4">
              <Link to="/a-propos">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
