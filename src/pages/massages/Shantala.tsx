import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/shantala.jpg";

const Shantala = () => {
  return (
    <MassageTemplate
      title="Shantala"
      subtitle="Atelier massage bébé pour les parents"
      description="Le SHANTALA est un atelier individuel qui offre aux parents l'opportunité d'apprendre ou de perfectionner l'art du massage pour leur bébé, de l'âge d'un mois à deux ans, créant ainsi un lien affectif fort."
      image={massageImage}
      details={[
        "Atelier pour bébés de 1 mois à 2 ans",
        "Apprentissage des techniques de massage",
        "Création d'un lien affectif fort",
        "Mouvements doux et sécurisés",
        "Amélioration du sommeil du bébé"
      ]}
      forWhom={{
        physical: ["Parents de bébés de 1 mois à 2 ans", "Bébés avec troubles du sommeil", "Bébés avec coliques"],
        mental: ["Parents souhaitant renforcer le lien", "Besoin de communication non-verbale", "Partage d'un moment privilégié"],
        wellness: ["Développement du bébé", "Bien-être familial", "Apprentissage de techniques"]
      }}
      contraindications={["Bébé fiévreux", "Juste après les repas", "Bébé agité ou malade"]}
      benefits={{
        physical: ["Développement moteur du bébé", "Meilleur sommeil", "Soulagement des coliques"],
        mental: ["Lien parent-enfant renforcé", "Communication améliorée", "Confiance parentale"],
        energetic: ["Harmonie familiale", "Équilibre énergétique du bébé"]
      }}
      studies={[{
        title: "Impact du massage sur le développement du nourrisson",
        source: "Pediatrics Journal",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2015",
        highlight: "Le massage régulier favorise le développement neurologique et renforce l'attachement."
      }]}
      faq={[
        { question: "Que dois-je apporter à l'atelier ?", answer: "Votre bébé, une couverture et des vêtements confortables pour vous deux." },
        { question: "Combien de séances pour maîtriser les techniques ?", answer: "Généralement 2-3 séances suffisent pour être autonome." }
      ]}
      testimonials={[
        { name: "Sophie T.", text: "Grâce à cet atelier, je masse mon bébé chaque soir. Notre relation est encore plus forte." }
      ]}
      relatedMassages={[
        { name: "Prishtikara Tirumu", path: "/massages/prishtikara-tirumu", description: "Massage pour bébé" },
        { name: "Prasavpurve Tirumu", path: "/massages/prasavpurve-tirumu", description: "Soins prénataux" }
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Shantala;
