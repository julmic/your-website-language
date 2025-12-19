import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import abhyangaImage from "@/assets/massages/abhyanga.webp";
import panchakarmaImage from "@/assets/cures/cure-panchakarma.jpg";
import kitcheriImage from "@/assets/cuisine/kitcheri.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const doors = [
  {
    title: "Consultations & Soins",
    description: "Bilan ayurvédique, massages traditionnels et thérapies personnalisées",
    image: abhyangaImage,
    link: "/services",
    cta: "Voir les soins"
  },
  {
    title: "Cures Ayurvédiques",
    description: "Programmes de détoxification et régénération sur mesure",
    image: panchakarmaImage,
    link: "/cures",
    cta: "Découvrir les cures"
  },
  {
    title: "Formations & Ateliers",
    description: "Initiez-vous à l'Ayurveda : cuisine, massages et philosophie",
    image: kitcheriImage,
    link: "/atelier-cuisine",
    cta: "Voir les formations"
  }
];

export const ThreeDoorsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Nos services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos différentes approches pour vous accompagner vers l'équilibre
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {doors.map((door, index) => (
            <Link
              key={index}
              to={door.link}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={door.image}
                alt={door.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground">
                  {door.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {door.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-fit border-primary/50 hover:bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {door.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
