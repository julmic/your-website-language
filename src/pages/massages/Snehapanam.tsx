import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageOil from "@/assets/massages/massage-oil.jpg";

const Snehapanam = () => {
  return (
    <MassageTemplate
      title="Snehapanam"
      subtitle="Procédé d'oléation interne thérapeutique"
      description="Le SNEHAPANAM est un procédé d'oléation extrêmement bénéfique dans de nombreux cas, tels que l'asthme allergique, le psoriasis, l'eczéma, les problèmes d'immunité, l'acidité excessive, l'ulcère peptique, les troubles digestifs et diverses affections mentales."
      image={massageOil}
      details={[
        "Traitement de l'asthme allergique",
        "Soulagement du psoriasis et de l'eczéma",
        "Renforcement de l'immunité",
        "Réduction de l'acidité et ulcères",
        "Amélioration des troubles digestifs"
      ]}
      forWhom={{
        physical: ["Maladies de peau", "Troubles digestifs chroniques", "Système immunitaire affaibli"],
        mental: ["Affections mentales", "Instabilité émotionnelle", "Anxiété chronique"],
        wellness: ["Préparation au Panchakarma", "Détox profonde", "Régénération globale"]
      }}
      contraindications={["Grossesse", "Fièvre aiguë", "Indigestion sévère", "Maladies cardiaques graves"]}
      benefits={{
        physical: ["Amélioration de la digestion", "Renforcement immunitaire", "Peau saine"],
        mental: ["Stabilité émotionnelle", "Clarté mentale", "Réduction de l'anxiété"],
        energetic: ["Équilibre des doshas", "Purification des canaux énergétiques"]
      }}
      studies={[{
        title: "Principes de l'oléation interne en Ayurveda",
        source: "Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2014",
        highlight: "Le Snehapanam est une étape préparatoire essentielle du Panchakarma, validée par des millénaires de pratique."
      }]}
      faq={[
        { question: "Comment se déroule une séance ?", answer: "Vous consommez progressivement des quantités croissantes de ghee médicinal sur plusieurs jours." },
        { question: "Faut-il suivre un régime particulier ?", answer: "Oui, un régime léger et spécifique est recommandé pendant et après le traitement." }
      ]}
      testimonials={[
        { name: "Marc L.", text: "Le Snehapanam a transformé ma digestion et ma peau. Une expérience purifiante profonde." }
      ]}
      relatedMassages={[
        { name: "Svedana", path: "/massages/svedana", description: "Sauna aux plantes médicinales" },
        { name: "Abhyanga", path: "/massages/abhyanga", description: "Massage à l'huile chaude" }
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Snehapanam;
