import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/saundarya.jpeg";

const Saundarya = () => {
  return (
    <MassageTemplate
      title="Saundarya"
      subtitle="Traitement de beauté du visage par les points marma"
      description="Le SAUNDARYA est un traitement de beauté du visage qui vise à effacer les tensions et à procurer une détente musculaire. Ce traitement fonctionne en ciblant les points marma du visage, permettant d'obtenir un teint plus lumineux et une apparence plus détendue."
      image={massageImage}
      details={[
        "Effacement des tensions du visage",
        "Détente musculaire faciale",
        "Travail sur les points marma",
        "Teint lumineux",
        "Éclat naturel retrouvé"
      ]}
      forWhom={{
        physical: ["Tensions faciales", "Rides d'expression", "Teint terne"],
        mental: ["Stress visible sur le visage", "Besoin de lâcher-prise", "Fatigue mentale"],
        wellness: ["Soin beauté naturel", "Rajeunissement", "Moment de détente"]
      }}
      contraindications={["Acné sévère", "Infections cutanées du visage", "Chirurgie faciale récente", "Rosacée active"]}
      benefits={{
        physical: ["Teint lumineux", "Réduction des rides d'expression", "Tonus musculaire facial"],
        mental: ["Relaxation profonde", "Réduction du stress", "Bien-être général"],
        energetic: ["Circulation de l'énergie faciale", "Équilibre des points marma"]
      }}
      studies={[{
        title: "Effets du massage facial sur la peau",
        source: "Journal of Cosmetic Dermatology",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2018",
        highlight: "Les techniques de massage facial ayurvédique stimulent la microcirculation et favorisent le renouvellement cellulaire."
      }]}
      faq={[
        { question: "Quels produits sont utilisés ?", answer: "Des huiles et préparations ayurvédiques naturelles adaptées à votre type de peau." },
        { question: "À quelle fréquence recommandez-vous ce soin ?", answer: "Une fois par mois pour maintenir l'éclat et les bienfaits." }
      ]}
      testimonials={[
        { name: "Isabelle R.", text: "Mon visage rayonne après chaque séance de Saundarya. Un vrai moment de beauté et de détente." }
      ]}
      relatedMassages={[
        { name: "Mukhalepam", path: "/massages/mukhalepam", description: "Masque de beauté ayurvédique" },
        { name: "Shirotchampi", path: "/massages/shirotchampi", description: "Massage crânien relaxant" }
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Saundarya;
