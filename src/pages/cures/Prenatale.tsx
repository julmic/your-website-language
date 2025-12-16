import { CureTemplate } from "@/components/cures/CureTemplate";
import cureImage from "@/assets/cures/cure-generic.jpg";

const Prenatale = () => {
  return (
    <CureTemplate
      title="Cure Prénatale"
      subtitle="Prasavpurvé Tirumu - Bien-être de la maman et du bébé"
      description={`La Cure Prénatale, appelée "Prasavpurvé Tirumu" en sanskrit, est une cure spécialement conçue pour les femmes enceintes à partir du 3ème mois de grossesse.

Cette cure douce et enveloppante vise à assurer le bien-être de la future maman et du bébé à naître. Elle prépare le corps à l'accouchement tout en créant un lien profond avec l'enfant à venir.

Les soins sont adaptés à chaque trimestre de la grossesse et respectent toutes les précautions nécessaires pour une grossesse sereine.`}
      image={cureImage}
      pricePerDay={230}
      treatments={[
        { name: "Garbhini Abhyanga", description: "Massage prénatal à l'huile" },
        { name: "Yoni Pichu", description: "Soins préparant le périnée" },
        { name: "Bala Taila", description: "Application d'huiles fortifiantes" },
        { name: "Garbha Sanskar", description: "Méditation maman-bébé" },
        { name: "Pranayama doux", description: "Respiration adaptée" },
        { name: "Yoga prénatal", description: "Postures sécurisées" },
      ]}
      benefits={[
        "Réduction des tensions musculaires",
        "Amélioration de la circulation",
        "Soulagement des douleurs dorsales",
        "Préparation à l'accouchement",
        "Connexion avec le bébé",
        "Meilleur sommeil",
        "Réduction du stress",
        "Équilibre émotionnel",
      ]}
      includes={[
        "Consultation prénatale ayurvédique",
        "Soins adaptés au trimestre",
        "Hébergement confortable",
        "Repas adaptés à la grossesse",
        "Huiles prénatales bio",
        "Cours de yoga prénatal",
        "Séances de méditation",
        "Guide de préparation à l'accouchement",
      ]}
      faq={[
        {
          question: "À partir de quand puis-je faire cette cure ?",
          answer: "La cure est recommandée à partir du 3ème mois de grossesse (après le premier trimestre). Elle peut être adaptée jusqu'au 8ème mois selon votre état de santé.",
        },
        {
          question: "Les soins sont-ils sans danger pour le bébé ?",
          answer: "Absolument. Tous nos soins prénataux sont spécifiquement conçus pour la grossesse. Nous n'utilisons que des huiles et techniques autorisées, et évitons les zones et pressions contre-indiquées.",
        },
        {
          question: "Puis-je venir avec mon conjoint ?",
          answer: "Oui, votre conjoint peut vous accompagner. Des soins de détente lui seront proposés et il pourra participer à certaines séances de préparation ensemble.",
        },
        {
          question: "Faut-il un accord de mon médecin/sage-femme ?",
          answer: "Nous recommandons d'en informer votre suivi médical. Nous pouvons vous fournir un descriptif des soins à montrer à votre médecin si besoin.",
        },
      ]}
      testimonials={[
        {
          name: "Sophie M.",
          text: "Ma grossesse était difficile jusqu'à cette cure au 5ème mois. Les massages prénataux m'ont soulagée de mes douleurs de dos et j'ai créé un lien magique avec mon bébé.",
        },
        {
          name: "Julie L.",
          text: "Une parenthèse de douceur pendant ma grossesse. Les thérapeutes sont d'une bienveillance incroyable et les soins parfaitement adaptés.",
        },
        {
          name: "Camille R.",
          text: "Mon conjoint m'a accompagnée et nous avons vécu cette expérience ensemble. Un souvenir précieux avant l'arrivée de notre bébé.",
        },
      ]}
      relatedCures={[
        {
          name: "Cure Postnatale",
          path: "/cures/postnatale",
          description: "Récupération après accouchement",
          pricePerDay: 230,
        },
        {
          name: "Cure Samvahana Vata",
          path: "/cures/samvahana-vata",
          description: "Calme et sérénité",
          pricePerDay: 230,
        },
        {
          name: "Cure d'Amrita (Royale)",
          path: "/cures/amrita",
          description: "Vitalité et bien-être",
          pricePerDay: 240,
        },
      ]}
    />
  );
};

export default Prenatale;
