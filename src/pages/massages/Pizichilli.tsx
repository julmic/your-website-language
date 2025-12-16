import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/massage-oil.jpg";

const Pizichilli = () => {
  return (
    <MassageTemplate
      title="Pizichilli"
      subtitle="Soin royal d'oléation pour régénérer les tissus"
      description="Le PIZICHILLI est un soin royal d'oléation visant à régénérer les tissus. Ce traitement consiste en un massage douche utilisant 10 litres d'huile. Grâce à ses propriétés nourrissantes et relaxantes, il apporte un bien-être profond, offre une sensation de douceur intense permettant de se détendre et de se ressourcer."
      details={[
        "Utilisation de 10 litres d'huile chaude",
        "Massage douche intégral",
        "Régénération profonde des tissus",
        "Expérience royale et luxueuse"
      ]}
      prices={[{ duration: "2h", price: "120€" }]}
      image={massageImage}
      forWhom={{
        physical: ["Peau très sèche", "Fatigue profonde", "Dégénérescence tissulaire", "Raideurs articulaires"],
        mental: ["Épuisement mental", "Besoin de régénération profonde"],
        wellness: ["Recherche d'une expérience premium", "Constitution Vata dominante"]
      }}
      contraindications={["Fièvre", "Obésité", "Problèmes cardiaques", "Grossesse"]}
      benefits={{
        physical: ["Régénération des tissus", "Hydratation profonde", "Amélioration de la circulation", "Lubrification des articulations"],
        mental: ["Relaxation profonde", "Apaisement de l'esprit", "Sensation de plénitude"],
        energetic: ["Pacification de Vata", "Nourrissement des tissus subtils"]
      }}
      studies={[
        {
          title: "Pizhichil therapy in degenerative conditions",
          source: "International Journal of Ayurveda Research",
          year: "2010",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2876932/",
          highlight: "Amélioration significative dans les conditions dégénératives"
        }
      ]}
      faq={[
        {
          question: "Pourquoi utilise-t-on autant d'huile ?",
          answer: "Les 10 litres d'huile permettent un enveloppement total assurant une régénération profonde des tissus."
        }
      ]}
      testimonials={[
        {
          name: "François L.",
          text: "Une expérience extraordinaire. Je me suis senti renaître après cette séance."
        }
      ]}
      relatedMassages={[
        { name: "Abhyanga", path: "/services/abhyanga", description: "Massage aux huiles" },
        { name: "Shirodhara", path: "/services/shirodhara", description: "Relaxation profonde" }
      ]}
    />
  );
};

export default Pizichilli;
