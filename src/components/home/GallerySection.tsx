import massageOil from "@/assets/massages/massage-oil.jpg";
import massageHead from "@/assets/massages/massage-head.jpg";
import massageFace from "@/assets/massages/massage-face.jpg";
import massageFeet from "@/assets/massages/massage-feet.jpg";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";
import shirodhara from "@/assets/massages/shirodhara-new.jpeg";
import pizichilli from "@/assets/massages/pizichilli.jpeg";
import ubthan from "@/assets/massages/ubthan.jpeg";

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
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Notre univers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plongez dans l'atmosphère apaisante de notre centre ayurvédique
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
