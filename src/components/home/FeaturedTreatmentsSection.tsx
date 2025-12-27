import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import abhyangaImage from "@/assets/massages/abhyanga.webp";
import shirodharaImage from "@/assets/massages/shirodhara-new.jpeg";
import marmaImage from "@/assets/massages/marma-therapie.png";
import prakritiImage from "@/assets/bilan/prakriti.avif";
import doshaImage from "@/assets/bilan/dosha.avif";
import panchakarmaImage from "@/assets/cures/cure-panchakarma.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHomePage } from "@/lib/pages-loader";

// Image mapping for CMS imageKey values
const imageMap: Record<string, string> = {
  abhyanga: abhyangaImage,
  shirodhara: shirodharaImage,
  marma: marmaImage,
  prakriti: prakritiImage,
  dosha: doshaImage,
  panchakarma: panchakarmaImage,
};

export const FeaturedTreatmentsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const homeData = getHomePage();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 overflow-hidden"
    >
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-serif font-semibold mb-4 opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            {homeData.featuredTitle}
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {homeData.featuredSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeData.featuredTreatments.map((treatment, index) => (
            <Link
              key={index}
              to={treatment.link}
              className={`group block rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 opacity-0 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imageMap[treatment.imageKey] || abhyangaImage}
                  alt={treatment.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold mb-2 flex items-center justify-between transition-colors duration-300 group-hover:text-primary">
                  {treatment.name}
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
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
