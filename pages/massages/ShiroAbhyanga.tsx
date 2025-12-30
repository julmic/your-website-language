import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/shiroabhyanga.jpeg";

const ShiroAbhyanga = () => {
  return (
    <MassageTemplate
      title="Shiro Abhyanga"
      subtitle="Massage de la tête et du cou pour maux de tête et tensions"
      description="Le SHIROABHYANGA est un massage de la tête et du cou, technique bien-être traditionnelle qui vise à rééquilibrer les maux de tête, les tensions, les migraines et les sinusites. En combinant des mouvements doux et des pressions ciblées, ce massage favorise la détente et la circulation sanguine dans cette zone souvent sollicitée. Pour compléter cette expérience relaxante, une inhalation aux plantes ayurvédiques est proposée. Ces plantes, aux propriétés apaisantes et purifiantes, permettent de libérer les sinus et de décongestionner les voies respiratoires. Cette combinaison harmonieuse de massage et d'inhalation offre un véritable moment de détente profonde, permettant de relâcher les tensions accumulées et de retrouver un équilibre intérieur."
      details={[
        "Massage du cuir chevelu",
        "Travail sur les tensions du cou",
        "Massage des épaules",
        "Inhalation aux plantes ayurvédiques",
        "Stimulation des points marma de la tête"
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
      image={massageImage}
      forWhom={{
        physical: ["Maux de tête fréquents", "Migraines", "Sinusites", "Tensions cervicales", "Fatigue oculaire"],
        mental: ["Stress mental", "Surmenage intellectuel", "Difficultés de concentration", "Anxiété"],
        wellness: ["Travail sur écran prolongé", "Étudiants en période d'examens"]
      }}
      contraindications={["Fièvre", "Infection ORL active", "Plaies sur le cuir chevelu", "Migraine en phase aiguë"]}
      benefits={{
        physical: ["Soulagement des maux de tête", "Décongestion des sinus", "Amélioration de la circulation cérébrale", "Détente des tensions cervicales"],
        mental: ["Réduction du stress mental", "Clarté d'esprit", "Amélioration de la concentration", "Meilleur sommeil"],
        energetic: ["Équilibrage de l'énergie de la tête", "Apaisement de Vata"]
      }}
      studies={[
        {
          title: "Efficacy of Indian head massage in stress reduction",
          source: "Complementary Therapies in Clinical Practice",
          year: "2016",
          url: "https://pubmed.ncbi.nlm.nih.gov/27157962/",
          highlight: "Réduction significative des niveaux de stress et amélioration de l'humeur"
        }
      ]}
      faq={[
        {
          question: "Ce massage aide-t-il contre les migraines ?",
          answer: "Oui, le Shiro Abhyanga est particulièrement efficace pour réduire la fréquence et l'intensité des migraines grâce à la détente des tensions et l'amélioration de la circulation."
        },
        {
          question: "Dois-je me laver les cheveux avant ?",
          answer: "Non, venez avec des cheveux naturels. L'huile appliquée pendant le soin nourrira votre cuir chevelu."
        }
      ]}
      testimonials={[
        {
          name: "Claire B.",
          text: "Je souffrais de migraines hebdomadaires. Depuis que je fais des séances régulières, elles ont quasiment disparu !",
          rating: 5
        }
      ]}
      relatedMassages={[
        { name: "Shirodhara", path: "/services/shirodhara", description: "Filet d'huile sur le front" },
        { name: "Shirotchampi", path: "/services/shirotchampi", description: "Massage crânien relaxant" }
      ]}
    />
  );
};

export default ShiroAbhyanga;
