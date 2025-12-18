import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/mukhalepam.png";

const Mukhalepam = () => {
  return (
    <MassageTemplate
      title="Mukhalepam"
      subtitle="Traitement de beauté du visage"
      description="Le MUKHALEPAM est un traitement qui permet de réduire les rides et les points noirs, d'améliorer la texture de la peau et de donner un éclat spécial au visage. Cette poudre spéciale nourrit la peau en profondeur."
      image={massageImage}
      details={[
        "Réduction des rides",
        "Élimination des points noirs",
        "Amélioration de la texture de la peau",
        "Éclat du visage",
        "Teint uniforme et lumineux"
      ]}
      forWhom={{
        physical: ["Rides et ridules", "Points noirs", "Texture de peau irrégulière"],
        mental: ["Besoin de prendre soin de soi", "Confiance en soi à améliorer", "Moment de détente"],
        wellness: ["Éclat du visage", "Rajeunissement naturel", "Soin beauté ayurvédique"]
      }}
      contraindications={["Acné sévère", "Infections cutanées", "Allergies aux ingrédients", "Rosacée active"]}
      benefits={{
        physical: ["Réduction des rides", "Peau plus lisse", "Teint lumineux"],
        mental: ["Confiance retrouvée", "Relaxation", "Bien-être"],
        energetic: ["Équilibre des énergies faciales", "Rayonnement naturel"]
      }}
      studies={[{
        title: "Effets des masques ayurvédiques sur la peau",
        source: "Journal of Cosmetic Dermatology",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2017",
        highlight: "Les ingrédients naturels des masques ayurvédiques favorisent le renouvellement cellulaire."
      }]}
      faq={[
        { question: "Quels ingrédients sont utilisés ?", answer: "Des poudres d'herbes, de l'aloe vera, du miel et des huiles essentielles adaptées." },
        { question: "Combien de temps dure le masque ?", answer: "Le masque reste posé environ 20-30 minutes pour une absorption optimale." }
      ]}
      testimonials={[
        { name: "Catherine S.", text: "Mon teint est visiblement plus lumineux après chaque séance de Mukhalepam." }
      ]}
      relatedMassages={[
        { name: "Saundarya", path: "/massages/saundarya", description: "Soin beauté aux points marma" },
        { name: "Shirotchampi", path: "/massages/shirotchampi", description: "Massage crânien relaxant" }
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default Mukhalepam;
