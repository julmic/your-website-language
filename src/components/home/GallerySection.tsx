import massageOil from "@/assets/massages/massage-oil.jpg";
import massageHead from "@/assets/massages/massage-head.jpg";
import massageFace from "@/assets/massages/massage-face.jpg";
import massageFeet from "@/assets/massages/massage-feet.jpg";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";
import shirodhara from "@/assets/massages/shirodhara-new.jpeg";
import pizichilli from "@/assets/massages/pizichilli.jpeg";
import ubthan from "@/assets/massages/ubthan.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  { src: massageOil, alt: "Huiles ayurvédiques", className: "col-span-2 row-span-2" },
  { src: massageHead, alt: "Massage crânien", className: "col-span-1 row-span-1" },
  { src: massageFace, alt: "Soin du visage", className: "col-span-1 row-span-1" },
  { src: shirodhara, alt: "Shirodhara", className: "col-span-1 row-span-2" },
  { src: massageFeet, alt: "Massage des pieds", className: "col-span-1 row-span-1" },
  { src: massageHerbal, alt: "Soins aux herbes", className: "col-span-1 row-span-1" },
  { src: pizichilli, alt: "Pizichilli", className: "col-span-1 row-span-1" },
  { src: ubthan, alt: "Ubthan", className: "col-span-1 row-span-1" },
];

export const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
            Notre univers
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Plongez dans l'atmosphère apaisante de notre centre ayurvédique
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer opacity-0 ${
                image.className
              } ${isVisible ? "animate-scale-fade-in" : ""}`}
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              {/* Image label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sm font-medium text-foreground">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
