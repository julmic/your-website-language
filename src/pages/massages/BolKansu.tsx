import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageFeet from "@/assets/massages/massage-feet.jpg";

const BolKansu = () => {
  return (
    <MassageTemplate
      title="Massage au Bol Kansu"
      subtitle="Technique traditionnelle indienne pour équilibrer les énergies"
      description="Le massage au Bol Kansu est une technique traditionnelle indienne qui vise à équilibrer les énergies du corps. Il consiste à masser les pieds avec du ghee à l'aide d'un bol en bronze, stimulant les points réflexes."
      image={massageFeet}
      details={[
        "Équilibrage des énergies du corps",
        "Massage des pieds au ghee et bol en bronze",
        "Stimulation des points réflexes",
        "Amélioration de la digestion",
        "Recommandé pour Vata et Pitta"
      ]}
      forWhom={{
        physical: ["Problèmes digestifs", "Troubles du sommeil", "Mauvaise circulation"],
        mental: ["Excès de feu mental", "Colère, irritabilité", "Stress et agitation"],
        wellness: ["Équilibre Vata-Pitta", "Relaxation profonde", "Reconnexion avec soi"]
      }}
      contraindications={["Plaies aux pieds", "Infections cutanées", "Allergies au ghee"]}
      benefits={{
        physical: ["Meilleure digestion", "Sommeil amélioré", "Pieds détendus"],
        mental: ["Calme mental", "Réduction de la colère", "Apaisement émotionnel"],
        energetic: ["Élimination de l'excès de feu", "Équilibre des doshas"]
      }}
      studies={[{
        title: "Effets du massage des pieds au ghee",
        source: "Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2016",
        highlight: "Le bol en alliage de métaux a des propriétés thérapeutiques reconnues en Ayurveda."
      }]}
      faq={[
        { question: "Pourquoi un bol en bronze ?", answer: "L'alliage de cuivre, zinc et étain a des propriétés qui équilibrent les énergies." },
        { question: "Qu'est-ce que le ghee ?", answer: "Du beurre clarifié, utilisé pour ses propriétés nourrissantes et apaisantes." }
      ]}
      testimonials={[
        { name: "Sylvie M.", text: "Ce massage m'aide énormément à mieux dormir et à calmer mon esprit agité." }
      ]}
      relatedMassages={[
        { name: "Padabhyanga", path: "/massages/padabhyanga", description: "Réflexologie plantaire ayurvédique" },
        { name: "Abhyanga", path: "/massages/abhyanga", description: "Massage complet à l'huile" }
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default BolKansu;
