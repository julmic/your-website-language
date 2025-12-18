import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/thalapothichil.png";

const Thalapothichil = () => {
  return (
    <MassageTemplate
      title="Thalapothichil"
      subtitle="Cataplasme d'herbes médicinales pour la tête"
      description="Le THALAPOTHICHIL est un traitement efficace pour divers problèmes de santé tels que l'effort, l'inquiétude, la sinusite, le mal de tête chronique, les troubles du sommeil et la perte de cheveux. Cette méthode traditionnelle utilise des herbes médicinales spécifiques qui sont appliquées en cataplasmes sur la tête du patient."
      image={massageImage}
      details={[
        "Soulagement du stress et de l'inquiétude",
        "Traitement de la sinusite",
        "Réduction des maux de tête chroniques",
        "Amélioration des troubles du sommeil",
        "Prévention de la perte de cheveux"
      ]}
      forWhom={{
        physical: ["Maux de tête chroniques", "Sinusite", "Perte de cheveux"],
        mental: ["Stress et anxiété", "Troubles du sommeil", "Surmenage mental"],
        wellness: ["Recherche de clarté mentale", "Besoin d'apaisement", "Équilibre énergétique"]
      }}
      contraindications={["Plaies sur le cuir chevelu", "Infections cutanées", "Fièvre", "Allergies aux herbes"]}
      benefits={{
        physical: ["Soulagement des maux de tête", "Amélioration du sommeil", "Santé capillaire"],
        mental: ["Réduction du stress", "Apaisement de l'esprit", "Clarté mentale"],
        energetic: ["Équilibre du chakra couronne", "Circulation de l'énergie vitale"]
      }}
      studies={[{
        title: "Efficacité du Thalapothichil dans les céphalées",
        source: "Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2015",
        highlight: "Le Thalapothichil est recommandé dans les textes ayurvédiques classiques pour les troubles neurologiques et psychologiques."
      }]}
      faq={[
        { question: "Combien de temps dure le cataplasme ?", answer: "Le cataplasme reste environ 45 minutes pour permettre aux herbes d'agir." },
        { question: "Quelles herbes sont utilisées ?", answer: "Un mélange personnalisé d'herbes ayurvédiques comme l'amalaki, le brahmi et le neem." }
      ]}
      testimonials={[
        { name: "Sophie M.", text: "Mes migraines ont considérablement diminué après quelques séances de Thalapothichil." }
      ]}
      relatedMassages={[
        { name: "Shirodhara", path: "/massages/shirodhara", description: "Filet d'huile sur le front" },
        { name: "Shirotchampi", path: "/massages/shirotchampi", description: "Massage crânien relaxant" }
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default Thalapothichil;
