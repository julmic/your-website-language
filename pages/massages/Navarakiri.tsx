import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/navarakiri.png";

const Navarakiri = () => {
  return (
    <MassageTemplate
      title="Navarakiri"
      subtitle="Massage aux tampons de riz pour soulager les douleurs rhumatismales"
      description="Le NAVARAKIRI est une technique de massage ayurvédique qui utilise des tampons de riz aux plantes pour soulager les douleurs rhumatismales. Les tampons de riz sont chauffés et imprégnés d'un mélange d'herbes médicinales."
      image={massageImage}
      details={[
        "Soulagement des douleurs rhumatismales",
        "Tampons de riz chauffés aux herbes médicinales",
        "Réduction de l'inflammation",
        "Détente musculaire profonde",
        "Méthode naturelle et douce"
      ]}
      forWhom={{
        physical: ["Douleurs rhumatismales", "Inflammation articulaire", "Raideurs musculaires"],
        mental: ["Stress chronique", "Tensions nerveuses", "Fatigue mentale"],
        wellness: ["Soulagement naturel", "Détente profonde", "Bien-être global"]
      }}
      contraindications={["Fièvre", "Infections cutanées", "Inflammations aiguës", "Plaies ouvertes"]}
      benefits={{
        physical: ["Soulagement des douleurs", "Réduction de l'inflammation", "Détente musculaire"],
        mental: ["Relaxation profonde", "Apaisement nerveux", "Bien-être général"],
        energetic: ["Équilibre Vata", "Circulation de l'énergie vitale"]
      }}
      studies={[
        {
          title: "Navarakizhi (Shashtika Shali Pinda Sweda) in neurological disorders",
          source: "Journal of Ayurveda and Integrative Medicine",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3296342/",
          year: "2012",
          highlight: "Efficacité démontrée dans les troubles neurologiques et rhumatismaux."
        }
      ]}
      faq={[
        { question: "Comment sont préparés les tampons ?", answer: "Le riz Navara est cuit dans du lait et des décoctions d'herbes, puis enveloppé dans des tissus." },
        { question: "Combien de séances sont recommandées ?", answer: "Une cure de 7 à 14 jours pour des résultats optimaux." }
      ]}
      testimonials={[
        { name: "Pierre M.", text: "Mes douleurs articulaires ont considérablement diminué après ma cure de Navarakiri." }
      ]}
      relatedMassages={[
        { name: "Shashtishalipindswedan", path: "/massages/shashtishalipindswedan", description: "Pochons de riz au lait" },
        { name: "Elakizhi", path: "/massages/elakizhi", description: "Pochons de feuilles médicinales" }
      ]}
      prices={[{ duration: "1h30", price: "90€" }]}
    />
  );
};

export default Navarakiri;
