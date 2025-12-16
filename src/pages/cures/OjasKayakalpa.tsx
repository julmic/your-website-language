import { CureTemplate } from "@/components/cures/CureTemplate";
import cureImage from "@/assets/cures/cure-ojas-kayakalpa.jpg";

const OjasKayakalpa = () => {
  return (
    <CureTemplate
      title="Cure d'Ojas Kayakalpa Chikitsa"
      subtitle="Rajeunissement et renaissance intérieure"
      description={`La Cure d'Ojas Kayakalpa Chikitsa est une cure de rajeunissement et de bien-être profond destinée à restaurer le bien-être, la joie et la sérénité.

"Ojas" représente l'essence vitale, la force de vie qui nous anime. "Kayakalpa" signifie "transformation du corps". Cette cure vise à éliminer les toxines accumulées, régénérer les cellules et améliorer la circulation sanguine et l'énergie vitale.

Elle est particulièrement indiquée pour la fatigue chronique, la dépression et le diabète. Le programme comprend consultations, bains de bouche, applications chaudes, massages à l'huile et au riz au lait, swedana, shirodhara, nasya avec soins des oreilles, udara, kansu ou padabhyanga, massage crânien et massage sonore.`}
      image={cureImage}
      pricePerDay={230}
      treatments={[
        { name: "Shirodhara", description: "Filet d'huile sur le front" },
        { name: "Massage à l'huile", description: "Abhyanga nourrissant" },
        { name: "Massage au riz au lait", description: "Navarakizhi régénérant" },
        { name: "Swedana", description: "Bain de vapeur" },
        { name: "Nasya", description: "Soins nasaux et auriculaires" },
        { name: "Udara", description: "Massage abdominal" },
        { name: "Kansu/Padabhyanga", description: "Réflexologie plantaire" },
        { name: "Massage crânien", description: "Détente profonde" },
        { name: "Massage sonore", description: "Thérapie vibratoire" },
      ]}
      benefits={[
        "Restauration de l'Ojas (énergie vitale)",
        "Régénération cellulaire profonde",
        "Amélioration de l'humeur",
        "Réduction de la fatigue chronique",
        "Équilibre glycémique",
        "Renforcement immunitaire",
        "Clarté mentale et émotionnelle",
        "Sentiment de renaissance",
      ]}
      includes={[
        "Consultation ayurvédique approfondie",
        "Bilan Ojas personnalisé",
        "Soins quotidiens de rajeunissement",
        "Hébergement en chambre individuelle",
        "Repas revitalisants adaptés",
        "Compléments ayurvédiques",
        "Tisanes et chai à volonté",
        "Programme de suivi post-cure",
      ]}
      faq={[
        {
          question: "Cette cure aide-t-elle vraiment contre la dépression ?",
          answer: "La cure agit sur le système nerveux et l'équilibre hormonal, ce qui peut significativement améliorer l'humeur. Elle est complémentaire à un suivi médical, pas un substitut.",
        },
        {
          question: "Comment cette cure aide-t-elle les diabétiques ?",
          answer: "Les soins et l'alimentation ayurvédique peuvent aider à équilibrer le métabolisme et la glycémie. Un suivi médical reste indispensable en parallèle.",
        },
        {
          question: "Qu'est-ce que l'Ojas exactement ?",
          answer: "L'Ojas est le concept ayurvédique de l'essence vitale - l'énergie subtile qui maintient la vie, l'immunité et le bien-être. Quand l'Ojas est fort, on rayonne de santé.",
        },
      ]}
      testimonials={[
        {
          name: "Béatrice H.",
          text: "Après un burn-out, cette cure m'a littéralement remise sur pied. Le Shirodhara quotidien a été une révélation pour mon mental épuisé.",
        },
        {
          name: "Laurent D.",
          text: "Diabétique de type 2, j'ai vu ma glycémie se stabiliser pendant la cure. L'approche holistique m'a permis de mieux comprendre mon corps.",
        },
        {
          name: "Monique V.",
          text: "Je suis venue fatiguée et triste, je repars légère et joyeuse. Cette cure porte bien son nom de renaissance.",
        },
      ]}
      relatedCures={[
        {
          name: "Cure Laghana Rasayana",
          path: "/cures/laghana-rasayana",
          description: "Anti-âge et vitalité",
          pricePerDay: 230,
        },
        {
          name: "Cure Samvahana Vata",
          path: "/cures/samvahana-vata",
          description: "Équilibre nerveux",
          pricePerDay: 230,
        },
        {
          name: "Cure d'Amrita (Royale)",
          path: "/cures/amrita",
          description: "Vitalité royale",
          pricePerDay: 240,
        },
      ]}
    />
  );
};

export default OjasKayakalpa;
