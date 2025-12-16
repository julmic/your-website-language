import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";

const Svedana = () => {
  return (
    <MassageTemplate
      title="Svedana"
      subtitle="Sauna traditionnel aux plantes"
      description="La SVEDANA est une technique de sauna traditionnelle où l'on prend un bain de chaleur aux plantes. Les herbes médicinales libèrent leurs huiles essentielles dans l'air, créant une atmosphère relaxante et purifiante."
      image={massageHerbal}
      details={[
        "Bain de chaleur aux plantes médicinales",
        "Détente musculaire profonde",
        "Amélioration de la circulation sanguine",
        "Purification et élimination des toxines",
        "Relaxation et soulagement du stress"
      ]}
      forWhom={{
        physical: ["Raideurs musculaires", "Problèmes de circulation", "Toxines accumulées"],
        mental: ["Stress", "Tensions nerveuses", "Besoin de détente"],
        wellness: ["Purification du corps", "Relaxation profonde", "Préparation à d'autres soins"]
      }}
      contraindications={["Maladies cardiaques", "Hypertension non contrôlée", "Grossesse", "Fièvre"]}
      benefits={{
        physical: ["Détente musculaire", "Élimination des toxines", "Amélioration de la circulation"],
        mental: ["Relaxation profonde", "Réduction du stress", "Clarté mentale"],
        energetic: ["Ouverture des canaux énergétiques", "Purification des nadis"]
      }}
      studies={[{
        title: "Bienfaits de la sudation thérapeutique",
        source: "Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2015",
        highlight: "La sudation thérapeutique aide à éliminer les toxines et améliore la circulation."
      }]}
      faq={[
        { question: "Combien de temps dure la séance ?", answer: "Environ 15-20 minutes dans la cabine de sudation." },
        { question: "Puis-je faire ce soin seul ?", answer: "Il est souvent combiné avec un massage comme l'Abhyanga pour des résultats optimaux." }
      ]}
      testimonials={[
        { name: "Laurent G.", text: "La Svedana après un massage est une expérience de purification incroyable." }
      ]}
      relatedMassages={[
        { name: "Abhyanga", path: "/massages/abhyanga", description: "Massage à l'huile chaude" },
        { name: "Snehapanam", path: "/massages/snehapanam", description: "Oléation interne" }
      ]}
      prices={[{ duration: "1h", price: "25€" }]}
    />
  );
};

export default Svedana;
