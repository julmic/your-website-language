import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import abhyangaImage from "@/assets/massages/abhyanga.webp";
import shirodharaImage from "@/assets/massages/shirodhara-new.jpeg";
import marmaImage from "@/assets/massages/marma-therapie.png";
import prakritiImage from "@/assets/bilan/prakriti.avif";
import doshaImage from "@/assets/bilan/dosha.avif";
import panchakarmaImage from "@/assets/cures/cure-panchakarma.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const treatments = [
  {
    name: "Abhyanga",
    description: "Massage traditionnel à l'huile chaude pour harmoniser le corps",
    image: abhyangaImage,
    link: "/massages/abhyanga"
  },
  {
    name: "Shirodhara",
    description: "Flux d'huile tiède sur le front pour apaiser le mental",
    image: shirodharaImage,
    link: "/massages/shirodhara"
  },
  {
    name: "Marma Thérapie",
    description: "Stimulation des points vitaux énergétiques du corps",
    image: marmaImage,
    link: "/massages/marma-therapie"
  },
  {
    name: "Bilan Ayurvédique",
    description: "Déterminez votre constitution et vos déséquilibres",
    image: prakritiImage,
    link: "/bilan-de-sante"
  },
  {
    name: "Bhutavidya",
    description: "Psychiatrie ayurvédique pour l'équilibre émotionnel",
    image: doshaImage,
    link: "/bhutavidya"
  },
  {
    name: "Panchakarma",
    description: "Cure de détoxification profonde en 5 actions",
    image: panchakarmaImage,
    link: "/cures/panchakarma"
  }
];

export const FeaturedTreatmentsSection = () => {
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
            Nos soins phares
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les traitements ayurvédiques les plus demandés
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <Link
              key={index}
              to={treatment.link}
              className="group block rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold mb-2 flex items-center justify-between">
                  {treatment.name}
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {treatment.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
