import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageFeet from "@/assets/massages/massage-feet.jpg";

const Padabhyanga = () => {
  return (
    <MassageTemplate
      title="Padabhyanga"
      subtitle="Réflexologie plantaire et palmaire ayurvédique"
      description="Le PADABHYANGA traite les déséquilibres légers, tels que l'insomnie et l'hyperactivité mentale. Ce traitement favorise une meilleure circulation sanguine et aide à rétablir les déséquilibres dans le corps avec un bol en alliage et du ghee."
      image={massageFeet}
      details={[
        "Traitement de l'insomnie",
        "Réduction de l'hyperactivité mentale",
        "Amélioration de la circulation sanguine",
        "Utilisation d'un bol en alliage et de ghee",
        "Relaxation profonde du corps"
      ]}
      forWhom={{
        physical: ["Problèmes de circulation", "Pieds fatigués", "Jambes lourdes"],
        mental: ["Insomnie", "Hyperactivité mentale", "Stress chronique"],
        wellness: ["Relaxation profonde", "Rééquilibrage énergétique", "Bien-être général"]
      }}
      contraindications={["Plaies aux pieds", "Infections cutanées", "Fièvre", "Grossesse (premier trimestre)"]}
      benefits={{
        physical: ["Amélioration de la circulation", "Pieds détendus", "Réduction des tensions"],
        mental: ["Meilleur sommeil", "Calme mental", "Réduction du stress"],
        energetic: ["Élimination de l'excès de feu", "Équilibre des organes", "Harmonie globale"]
      }}
      studies={[{
        title: "Effets du massage des pieds sur le sommeil",
        source: "Journal of Clinical Nursing",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2016",
        highlight: "Le massage des pieds améliore significativement la qualité du sommeil."
      }]}
      faq={[
        { question: "Pourquoi utilise-t-on un bol en bronze ?", answer: "L'alliage de métaux a des propriétés thérapeutiques qui aident à équilibrer les doshas." },
        { question: "Ce massage peut-il aider contre l'insomnie ?", answer: "Oui, c'est l'un des meilleurs traitements ayurvédiques pour améliorer le sommeil." }
      ]}
      testimonials={[
        { name: "Anne-Marie F.", text: "Je dors tellement mieux depuis mes séances de Padabhyanga. Un vrai bonheur !" }
      ]}
      relatedMassages={[
        { name: "Bol Kansu", path: "/massages/bol-kansu", description: "Massage au bol en bronze" },
        { name: "Abhyanga", path: "/massages/abhyanga", description: "Massage complet à l'huile" }
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default Padabhyanga;
