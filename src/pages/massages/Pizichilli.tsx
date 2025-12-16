import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Pizichilli = () => {
  return (
    <MassageTemplate
      title="Pizichilli"
      subtitle="Soin royal d'oléation pour régénérer les tissus"
      description="Le PIZICHILLI est un soin royal d'oléation visant à régénérer les tissus. Ce traitement consiste en un massage douche utilisant 10 litres d'huile. Grâce à ses propriétés nourrissantes et relaxantes, il apporte un bien-être profond, offre une sensation de douceur intense permettant de se détendre et de se ressourcer. En enveloppant le corps dans une huile chaude, le Pizichilli détend les muscles et apaise l'esprit. Il favorise également une meilleure circulation sanguine, aidant ainsi à éliminer les toxines et à revitaliser les tissus. Ce massage douche est une expérience luxueuse et apaisante, idéale pour retrouver un équilibre intérieur et une sensation de plénitude."
      details={[
        "Régénération des tissus",
        "Massage douche avec 10 litres d'huile",
        "Bien-être profond et douceur intense",
        "Détente musculaire",
        "Apaisement de l'esprit",
        "Amélioration de la circulation sanguine",
        "Élimination des toxines",
        "Expérience luxueuse et revitalisante"
      ]}
      prices={[{ duration: "2h", price: "120€" }]}
      studies={[
        {
          title: "Pizhichil (Kayaseka) - A Panchakarma procedure for neurological disorders",
          source: "International Journal of Ayurvedic Medicine",
          url: "https://ijam.co.in/",
          year: "2018"
        },
        {
          title: "Role of Pizhichil in the management of musculoskeletal disorders",
          source: "Journal of Ayurveda and Holistic Medicine",
          url: "https://www.jahm.in/",
          year: "2016"
        }
      ]}
    />
  );
};

export default Pizichilli;
