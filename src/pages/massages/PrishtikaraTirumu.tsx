import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageBaby from "@/assets/massages/massage-baby.jpg";

const PrishtikaraTirumu = () => {
  return (
    <MassageTemplate
      title="Prishtikara Tirumu"
      subtitle="Massage pour bébé"
      description="Le PRISHTIKARA TIRUMU est un massage pour bébé qui apporte de nombreux bienfaits à tout son organisme. Il favorise son développement et sa souplesse, lui permettant ainsi de grandir en pleine santé tout en renforçant le lien parent-enfant."
      image={massageBaby}
      details={[
        "Développement et souplesse du bébé",
        "Croissance en pleine santé",
        "Renforcement du lien parent-enfant",
        "Mouvements doux et enveloppants",
        "Connexion émotionnelle"
      ]}
      forWhom={{
        physical: ["Bébés de 1 mois à 2 ans", "Bébés avec coliques", "Troubles du sommeil du nourrisson"],
        mental: ["Besoin de sécurité affective", "Lien parent-enfant à renforcer", "Apaisement émotionnel"],
        wellness: ["Développement harmonieux", "Bien-être du bébé", "Moment privilégié parent-enfant"]
      }}
      contraindications={["Fièvre", "Infections cutanées", "Blessures récentes", "Juste après les repas"]}
      benefits={{
        physical: ["Développement moteur", "Amélioration du sommeil", "Soulagement des coliques"],
        mental: ["Sentiment de sécurité", "Lien parent-enfant renforcé", "Apaisement"],
        energetic: ["Équilibre énergétique", "Harmonie corps-esprit"]
      }}
      studies={[{
        title: "Bienfaits du massage pour les nourrissons",
        source: "Pediatrics Journal",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2016",
        highlight: "Des études montrent que le massage régulier des bébés favorise leur développement neurologique."
      }]}
      faq={[
        { question: "À partir de quel âge peut-on masser un bébé ?", answer: "Dès l'âge d'un mois, une fois le cordon ombilical cicatrisé." },
        { question: "Les parents peuvent-ils apprendre ces techniques ?", answer: "Oui, nous proposons des ateliers pour apprendre à masser votre bébé." }
      ]}
      testimonials={[
        { name: "Marie L.", text: "Mon bébé adore ses séances de massage. Il dort beaucoup mieux depuis." }
      ]}
      relatedMassages={[
        { name: "Shantala", path: "/massages/shantala", description: "Atelier massage bébé pour parents" },
        { name: "Prasavpurve Tirumu", path: "/massages/prasavpurve-tirumu", description: "Soins prénataux" }
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default PrishtikaraTirumu;
