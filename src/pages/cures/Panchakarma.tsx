import { CureTemplate } from "@/components/cures/CureTemplate";
import cureImage from "@/assets/cures/cure-generic.jpg";

const Panchakarma = () => {
  return (
    <CureTemplate
      title="Cure de Panchakarma"
      subtitle="Purification profonde du corps et de l'esprit"
      description={`Le Panchakarma est le traitement ayurvédique de purification et de détoxification le plus complet et le plus profond. C'est une série de soins, massages, bains de vapeur et régime alimentaire adaptés à votre constitution (Vata-Pitta-Kapha).

Cette cure vise à maintenir la santé, régénérer le corps et traiter diverses problématiques : troubles digestifs, rhumatismes, insomnies, fatigue chronique, et bien plus encore.

Le Panchakarma repose sur cinq thérapies principales :
• Vamana (émèse thérapeutique)
• Virechana (purge thérapeutique)
• Basti (lavements médicinaux)
• Nasya (administration nasale)
• Rakta Mokshana (purification du sang)`}
      image={cureImage}
      pricePerDay={240}
      durations={[
        { days: 7, pricePerDay: 240, totalPrice: 1680 },
        { days: 10, pricePerDay: 240, totalPrice: 2400 },
        { days: 14, pricePerDay: 240, totalPrice: 3360 },
      ]}
      treatments={[
        { name: "Abhyanga", description: "Massage à l'huile chaude" },
        { name: "Swedana", description: "Bain de vapeur aux herbes" },
        { name: "Shirodhara", description: "Filet d'huile sur le front" },
        { name: "Basti", description: "Lavements médicinaux" },
        { name: "Nasya", description: "Soins nasaux" },
        { name: "Virechana", description: "Purge thérapeutique" },
      ]}
      benefits={[
        "Élimination profonde des toxines (Ama)",
        "Rééquilibrage des trois doshas",
        "Amélioration de la digestion et du métabolisme",
        "Renforcement du système immunitaire",
        "Réduction du stress et de l'anxiété",
        "Régénération des tissus corporels",
        "Amélioration de la qualité du sommeil",
        "Augmentation de l'énergie vitale",
      ]}
      includes={[
        "Consultation ayurvédique initiale",
        "Bilan de votre constitution (Prakriti/Vikriti)",
        "Tous les soins et traitements quotidiens",
        "Hébergement en chambre individuelle",
        "Repas ayurvédiques végétariens personnalisés",
        "Tisanes et chai à volonté",
        "Consultation de suivi en fin de cure",
        "Recommandations personnalisées post-cure",
      ]}
      faq={[
        {
          question: "Quelle est la durée idéale pour une cure Panchakarma ?",
          answer: "La durée dépend de vos objectifs et de votre état de santé. Une cure de 7 jours est idéale pour une première expérience ou un entretien régulier. Les cures de 10 à 14 jours permettent une détoxification plus profonde et sont recommandées pour des problématiques spécifiques.",
        },
        {
          question: "Y a-t-il des contre-indications ?",
          answer: "Le Panchakarma est déconseillé pendant la grossesse, en cas de maladie aiguë, de fièvre, ou d'extrême faiblesse. Une consultation préalable permet d'évaluer si cette cure vous convient.",
        },
        {
          question: "Comment me préparer avant la cure ?",
          answer: "Nous vous envoyons un guide de préparation après votre réservation. En général, il est conseillé de réduire progressivement la consommation de viande, café et alcool quelques jours avant.",
        },
        {
          question: "Puis-je continuer à travailler pendant la cure ?",
          answer: "Non, la cure Panchakarma nécessite un repos complet. Elle se déroule en résidentiel dans notre centre en Aquitaine, dans un environnement propice à la détente et à la guérison.",
        },
      ]}
      testimonials={[
        {
          name: "Marie L.",
          text: "Une expérience transformatrice. Après 10 jours de Panchakarma, je me sens régénérée comme jamais. L'équipe est bienveillante et professionnelle.",
        },
        {
          name: "Philippe D.",
          text: "Je souffrais de problèmes digestifs depuis des années. Cette cure m'a littéralement changé la vie. Je recommande à 100%.",
        },
        {
          name: "Isabelle M.",
          text: "Un havre de paix où le temps s'arrête. Les soins sont exceptionnels et la cuisine ayurvédique délicieuse.",
        },
      ]}
      relatedCures={[
        {
          name: "Cure d'Amrita (Royale)",
          path: "/cures/amrita",
          description: "Cure de vitalité et bien-être complet",
          pricePerDay: 240,
        },
        {
          name: "Cure Laghana Rasayana",
          path: "/cures/laghana-rasayana",
          description: "Cure anti-âge et vitalité",
          pricePerDay: 230,
        },
        {
          name: "Cure Samvahana Vata",
          path: "/cures/samvahana-vata",
          description: "Équilibre Vata et sérénité",
          pricePerDay: 230,
        },
      ]}
    />
  );
};

export default Panchakarma;
