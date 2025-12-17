import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/vishesh.webp";

const Vishesh = () => {
  return (
    <MassageTemplate
      title="Vishesh"
      subtitle="Massage ayurvédique profond pour les tensions musculaires"
      description="Le massage ayurvédique VISHESH est une technique plus profonde qui cible les tensions musculaires telles que les courbatures, les douleurs lombaires et cervicales, ainsi que les vertiges. Ce massage vise à soulager ces problèmes en utilisant des mouvements spécifiques et des pressions adaptées. Les courbatures et les douleurs lombaires peuvent être soulagées grâce à des pressions plus intenses sur les muscles, tandis que les douleurs cervicales peuvent être traitées en ciblant les muscles du cou et des épaules. De plus, les vertiges peuvent être atténués par des manipulations spécifiques visant à rétablir l'équilibre et la stabilité."
      details={[
        "Soulagement des courbatures",
        "Traitement des douleurs lombaires",
        "Apaisement des douleurs cervicales",
        "Réduction des vertiges",
        "Pressions adaptées et profondes",
        "Rétablissement de l'équilibre corporel"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
      image={massageImage}
      forWhom={{
        physical: ["Douleurs musculaires chroniques", "Courbatures fréquentes", "Douleurs lombaires", "Tensions cervicales", "Vertiges"],
        mental: ["Stress accumulé dans le corps", "Besoin de libération des tensions"],
        wellness: ["Sportifs", "Personnes travaillant en position assise prolongée"]
      }}
      contraindications={["Inflammation aiguë", "Fractures récentes", "Problèmes de peau", "Fièvre"]}
      benefits={{
        physical: ["Soulagement profond des tensions", "Amélioration de la mobilité", "Réduction des douleurs", "Meilleure circulation"],
        mental: ["Libération du stress corporel", "Sensation de légèreté", "Meilleur sommeil"],
        energetic: ["Déblocage des canaux énergétiques", "Rééquilibrage des doshas"]
      }}
      studies={[
        {
          title: "Deep tissue massage effects on musculoskeletal pain",
          source: "Journal of Clinical Rheumatology",
          year: "2014",
          url: "https://pubmed.ncbi.nlm.nih.gov/25364984/",
          highlight: "Réduction de 25% de la douleur musculosquelettique"
        }
      ]}
      faq={[
        {
          question: "Le Vishesh est-il douloureux ?",
          answer: "Le massage est plus intense que l'Abhyanga mais ne doit pas être douloureux. La pression est adaptée à votre tolérance."
        },
        {
          question: "Quelle est la différence avec l'Abhyanga ?",
          answer: "Le Vishesh utilise des pressions plus profondes et cible spécifiquement les tensions musculaires, tandis que l'Abhyanga est plus doux et relaxant."
        }
      ]}
      testimonials={[
        {
          name: "Thomas R.",
          text: "Après des années de douleurs lombaires, le Vishesh m'a apporté un soulagement incroyable.",
          rating: 5
        }
      ]}
      relatedMassages={[
        { name: "Abhyanga", path: "/services/abhyanga", description: "Massage traditionnel aux huiles" },
        { name: "Marma-Thérapie", path: "/services/marma-therapie", description: "Stimulation des points vitaux" }
      ]}
    />
  );
};

export default Vishesh;
