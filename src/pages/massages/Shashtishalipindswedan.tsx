import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";

const Shashtishalipindswedan = () => {
  return (
    <MassageTemplate
      title="Shashtishalipindswedan"
      subtitle="Massage indien aux pochons de riz et lait"
      description="Le SHASHTISHALIPINDSWEDAN est un massage indien recommandé pour soulager les articulations et améliorer la beauté de la peau. Ce massage utilise des pochons de riz trempés dans du lait appliqués sur tout le corps."
      image={massageHerbal}
      details={[
        "Soulagement des articulations",
        "Amélioration de la beauté de la peau",
        "Pochons de riz trempés dans le lait",
        "Détente musculaire",
        "Hydratation profonde de la peau"
      ]}
      forWhom={{
        physical: ["Douleurs articulaires", "Peau sèche", "Raideurs musculaires"],
        mental: ["Besoin de réconfort", "Stress accumulé", "Fatigue chronique"],
        wellness: ["Soin nourrissant", "Rajeunissement", "Détente profonde"]
      }}
      contraindications={["Intolérance au lactose (contact cutané)", "Fièvre", "Infections cutanées", "Diabète non contrôlé"]}
      benefits={{
        physical: ["Articulations soulagées", "Peau hydratée", "Muscles détendus"],
        mental: ["Relaxation profonde", "Bien-être général", "Apaisement"],
        energetic: ["Équilibre Vata", "Nourriture des tissus profonds"]
      }}
      studies={[{
        title: "Efficacité des pochons de riz en Ayurveda",
        source: "Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2014",
        highlight: "Ce traitement traditionnel combine les bienfaits nutritifs du riz et du lait pour nourrir les tissus en profondeur."
      }]}
      faq={[
        { question: "Pourquoi utilise-t-on du riz et du lait ?", answer: "Le riz Shastika cuit dans le lait a des propriétés nourrissantes exceptionnelles." },
        { question: "Ce soin est-il salissant ?", answer: "Non, les pochons sont bien contenus et la séance se termine par un nettoyage doux." }
      ]}
      testimonials={[
        { name: "François B.", text: "Un soin extraordinaire pour mes articulations. Je me sens rajeuni après chaque séance." }
      ]}
      relatedMassages={[
        { name: "Navarakiri", path: "/massages/navarakiri", description: "Massage aux tampons de riz" },
        { name: "Pinda Sweda", path: "/massages/pinda-sweda", description: "Massage aux pochons d'herbes" }
      ]}
      prices={[{ duration: "1h30", price: "90€" }]}
    />
  );
};

export default Shashtishalipindswedan;
