import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/massage-oil.jpg";

const MarmaTherapie = () => {
  return (
    <MassageTemplate
      title="Marma-Thérapie"
      subtitle="Régulation des énergies par les points vitaux"
      description="La MARMA-THERAPIE a pour but de réguler les énergies et de dissoudre certains blocages nerveux, tels que l'angoisse. Ce traitement est une technique qui consiste à stimuler les points marmas, des points clés subtils selon l'ayurvéda. Lors de la séance, des huiles sont utilisées pour renforcer les effets bénéfiques de la thérapie. La marma-thérapie offre ainsi une approche holistique pour améliorer la santé et le bien-être en équilibrant les énergies vitales du corps."
      details={[
        "Stimulation des 107 points marma",
        "Application d'huiles thérapeutiques",
        "Dissolution des blocages énergétiques",
        "Régulation du système nerveux"
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
      image={massageImage}
      forWhom={{
        physical: ["Douleurs chroniques", "Tensions nerveuses", "Problèmes de sommeil"],
        mental: ["Angoisses", "Stress chronique", "Blocages émotionnels", "Anxiété"],
        wellness: ["Recherche d'équilibre énergétique", "Développement personnel"]
      }}
      contraindications={["Grossesse", "Problèmes cardiaques graves", "Cancer actif", "Fièvre"]}
      benefits={{
        physical: ["Soulagement des douleurs", "Amélioration de la circulation", "Renforcement du système immunitaire"],
        mental: ["Libération des angoisses", "Équilibre émotionnel", "Clarté mentale"],
        energetic: ["Déblocage des canaux énergétiques", "Harmonisation du prana", "Équilibrage des chakras"]
      }}
      studies={[
        {
          title: "Marma therapy in pain management",
          source: "Ancient Science of Life",
          year: "2017",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5566829/",
          highlight: "Efficacité démontrée dans la gestion de la douleur chronique"
        }
      ]}
      faq={[
        {
          question: "Qu'est-ce qu'un point marma ?",
          answer: "Les points marma sont des zones vitales où se concentrent l'énergie, les vaisseaux sanguins et les nerfs."
        },
        {
          question: "Combien de séances sont recommandées ?",
          answer: "Pour des blocages profonds, une série de 3-5 séances espacées d'une semaine est recommandée."
        }
      ]}
      testimonials={[
        {
          name: "Anne-Marie P.",
          text: "Après des années d'angoisse, la marma-thérapie m'a permis de retrouver une sérénité."
        }
      ]}
      relatedMassages={[
        { name: "Abhyanga", path: "/services/abhyanga", description: "Massage aux huiles chaudes" },
        { name: "Shirodhara", path: "/services/shirodhara", description: "Relaxation profonde" }
      ]}
    />
  );
};

export default MarmaTherapie;
