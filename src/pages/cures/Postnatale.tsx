import { CureTemplate } from "@/components/cures/CureTemplate";
import cureImage from "@/assets/cures/cure-generic.jpg";

const Postnatale = () => {
  return (
    <CureTemplate
      title="Cure Postnatale"
      subtitle="Prasavottar - Retrouvez votre forme après l'accouchement"
      description={`La Cure Postnatale, appelée "Prasavottar" en sanskrit, est un traitement ayurvédique complet pour retrouver la forme après l'accouchement.

Cette cure se concentre sur la santé et la beauté de la jeune maman : réduction des graisses, remodelage du corps, revitalisation des canaux énergétiques. Elle comprend des massages relaxants, une rééducation périnéale douce et des soins amincissants.

Le programme est supervisé par un médecin ayurvédique et accompagné d'une alimentation végétarienne équilibrée pour favoriser l'allaitement si souhaité.`}
      image={cureImage}
      pricePerDay={230}
      durations={[
        { days: 7, pricePerDay: 230, totalPrice: 1610 },
        { days: 10, pricePerDay: 230, totalPrice: 2300 },
        { days: 14, pricePerDay: 230, totalPrice: 3220 },
      ]}
      treatments={[
        { name: "Sutika Abhyanga", description: "Massage postnatal complet" },
        { name: "Udvartana", description: "Massage drainant aux poudres" },
        { name: "Yoni Pichu", description: "Soins de récupération périnéale" },
        { name: "Kati Basti", description: "Soins du dos" },
        { name: "Udara", description: "Massage abdominal remodelant" },
        { name: "Swedana", description: "Sudation douce" },
        { name: "Pinda Sweda", description: "Pochons chauds tonifiants" },
      ]}
      benefits={[
        "Récupération physique accélérée",
        "Remodelage de la silhouette",
        "Réduction de la rétention d'eau",
        "Tonification des tissus",
        "Rééducation périnéale naturelle",
        "Boost d'énergie pour la jeune maman",
        "Équilibre hormonal",
        "Soutien à l'allaitement",
      ]}
      includes={[
        "Consultation postnatale ayurvédique",
        "Bilan récupération complète",
        "Soins quotidiens de remodelage",
        "Hébergement en chambre individuelle",
        "Repas adaptés (allaitement si besoin)",
        "Huiles postnatales spécifiques",
        "Programme d'exercices doux",
        "Guide post-cure personnalisé",
      ]}
      faq={[
        {
          question: "Combien de temps après l'accouchement puis-je faire cette cure ?",
          answer: "La cure est recommandée à partir de 6 semaines après l'accouchement (8 semaines après une césarienne). Elle est particulièrement efficace dans les 6 premiers mois.",
        },
        {
          question: "Puis-je venir avec mon bébé ?",
          answer: "Nous comprenons que la séparation peut être difficile. Contactez-nous pour discuter des options d'accompagnement selon l'âge de votre bébé.",
        },
        {
          question: "La cure est-elle compatible avec l'allaitement ?",
          answer: "Absolument. Les soins et l'alimentation sont adaptés pour soutenir l'allaitement. Certaines huiles et plantes favorisent même la lactation.",
        },
        {
          question: "Cette cure aide-t-elle contre le baby blues ?",
          answer: "Les soins apaisants et l'environnement bienveillant peuvent aider à traverser cette période sensible. Si vous souffrez de dépression post-partum, informez-nous pour adapter l'accompagnement.",
        },
      ]}
      testimonials={[
        {
          name: "Aurélie B.",
          text: "3 mois après mon accouchement, j'étais épuisée. Cette cure m'a permis de me retrouver, de récupérer physiquement et de prendre soin de moi enfin.",
        },
        {
          name: "Émilie K.",
          text: "L'Udvartana a fait des miracles sur ma peau et ma silhouette. Je me sens à nouveau bien dans mon corps de femme.",
        },
        {
          name: "Pauline G.",
          text: "Le personnel comprend parfaitement les besoins des jeunes mamans. J'ai pu allaiter sereinement tout en profitant des soins.",
        },
      ]}
      relatedCures={[
        {
          name: "Cure Prénatale",
          path: "/cures/prenatale",
          description: "Bien-être pendant la grossesse",
          pricePerDay: 230,
        },
        {
          name: "Cure Karchan",
          path: "/cures/karchan",
          description: "Cure minceur",
          pricePerDay: 230,
        },
        {
          name: "Cure Samvahana Vata",
          path: "/cures/samvahana-vata",
          description: "Calme et récupération",
          pricePerDay: 230,
        },
      ]}
    />
  );
};

export default Postnatale;
