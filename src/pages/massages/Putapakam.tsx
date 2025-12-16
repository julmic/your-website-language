import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageEyes from "@/assets/massages/massage-eyes.jpg";

const Putapakam = () => {
  return (
    <MassageTemplate
      title="Putapakam"
      subtitle="Traitement oculaire pour améliorer la santé des yeux"
      description="Le PUTAPAKAM est une méthode utilisée pour améliorer la santé des yeux en utilisant un liquide médicinal tiède. Ce processus est utilisé pour réduire l'opacité de la cornée et les cataractes, et pour favoriser la guérison des tissus oculaires."
      image={massageEyes}
      details={[
        "Amélioration de la santé oculaire",
        "Réduction de l'opacité de la cornée",
        "Traitement préventif des cataractes",
        "Guérison des tissus oculaires",
        "Nettoyage et lubrification des yeux"
      ]}
      forWhom={{
        physical: ["Fatigue oculaire", "Sécheresse oculaire", "Travail sur écran intensif"],
        mental: ["Tension oculaire due au stress", "Concentration difficile", "Fatigue mentale"],
        wellness: ["Prévention des problèmes de vue", "Maintien de la santé oculaire", "Détox oculaire"]
      }}
      contraindications={["Infections oculaires actives", "Chirurgie oculaire récente", "Glaucome non contrôlé", "Allergies aux préparations"]}
      benefits={{
        physical: ["Vision améliorée", "Yeux hydratés", "Réduction de la fatigue oculaire"],
        mental: ["Clarté visuelle", "Réduction du stress oculaire", "Concentration améliorée"],
        energetic: ["Équilibre du chakra du troisième œil", "Clarté de perception"]
      }}
      studies={[{
        title: "Pratiques ayurvédiques pour la santé oculaire",
        source: "Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2015",
        highlight: "Les traitements oculaires ayurvédiques comme le Putapakam sont pratiqués depuis des millénaires."
      }]}
      faq={[
        { question: "Est-ce douloureux ?", answer: "Non, le traitement est doux et procure une sensation apaisante pour les yeux." },
        { question: "Combien de séances sont recommandées ?", answer: "Une cure de 5 à 7 séances est généralement conseillée." }
      ]}
      testimonials={[
        { name: "Philippe G.", text: "Mes yeux sont beaucoup moins fatigués depuis que je fais régulièrement des séances de Putapakam." }
      ]}
      relatedMassages={[
        { name: "Shirodhara", path: "/massages/shirodhara", description: "Filet d'huile sur le front" },
        { name: "Shirotchampi", path: "/massages/shirotchampi", description: "Massage crânien relaxant" }
      ]}
      prices={[{ duration: "1h30", price: "90€" }]}
    />
  );
};

export default Putapakam;
