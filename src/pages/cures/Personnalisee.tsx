import { CureTemplate } from "@/components/cures/CureTemplate";
import cureImage from "@/assets/cures/cure-generic.jpg";

const Personnalisee = () => {
  return (
    <CureTemplate
      title="Cure Ayurvédique Personnalisée"
      subtitle="Un programme sur mesure pour vos besoins spécifiques"
      description={`La Cure Ayurvédique Personnalisée est une cure intensive de 1 à 2 semaines conçue spécifiquement pour des pathologies complexes et chroniques.

Cette cure est particulièrement adaptée aux personnes souffrant de maladies de Parkinson, maladie de Charcot, sclérose en plaques, fibromyalgie, et autres conditions nécessitant une approche individualisée.

Le programme est entièrement construit autour de vos besoins après une consultation préliminaire approfondie et un bilan clinique ayurvédique complet. Une consultation finale avec recommandations de traitement conclut la cure.`}
      image={cureImage}
      pricePerDay={240}
      durations={[
        { days: 7, pricePerDay: 240, totalPrice: 1680 },
        { days: 10, pricePerDay: 240, totalPrice: 2400 },
        { days: 14, pricePerDay: 240, totalPrice: 3360 },
      ]}
      treatments={[
        { name: "Soins personnalisés", description: "Adaptés à votre pathologie" },
        { name: "Massages thérapeutiques", description: "Protocoles spécifiques" },
        { name: "Phytothérapie ciblée", description: "Plantes médicinales adaptées" },
        { name: "Alimentation thérapeutique", description: "Régime sur mesure" },
        { name: "Yoga thérapeutique", description: "Exercices adaptés" },
        { name: "Pranayama", description: "Techniques respiratoires" },
      ]}
      benefits={[
        "Approche 100% personnalisée",
        "Prise en charge globale de la pathologie",
        "Amélioration de la qualité de vie",
        "Réduction des symptômes",
        "Renforcement de l'organisme",
        "Accompagnement médical spécialisé",
        "Protocole adapté à votre rythme",
        "Suivi post-cure détaillé",
      ]}
      includes={[
        "Consultation préliminaire approfondie",
        "Bilan clinique ayurvédique complet",
        "Programme de soins 100% personnalisé",
        "Hébergement en chambre individuelle",
        "Repas thérapeutiques adaptés",
        "Phytothérapie sur mesure",
        "Consultation finale avec recommandations",
        "Dossier de suivi complet",
      ]}
      faq={[
        {
          question: "Comment se déroule la consultation préliminaire ?",
          answer: "Avant votre arrivée, nous organisons un entretien approfondi (en visio ou par téléphone) pour comprendre votre pathologie, vos traitements actuels et vos attentes. Cela nous permet de préparer un programme adapté.",
        },
        {
          question: "Cette cure remplace-t-elle mes traitements médicaux ?",
          answer: "Non, l'Ayurveda est complémentaire à la médecine conventionnelle. Nous travaillons en harmonie avec vos traitements actuels et restons en contact avec votre médecin si nécessaire.",
        },
        {
          question: "Quels résultats peut-on espérer ?",
          answer: "Les résultats varient selon les pathologies et les personnes. Beaucoup de nos patients rapportent une amélioration de leur confort de vie, une réduction de certains symptômes et un meilleur moral.",
        },
        {
          question: "Faut-il un dossier médical ?",
          answer: "Oui, nous vous demandons de nous transmettre vos derniers examens et la liste de vos traitements avant la cure pour adapter au mieux notre prise en charge.",
        },
      ]}
      testimonials={[
        {
          name: "Gérard P.",
          text: "Atteint de Parkinson depuis 5 ans, cette cure m'a apporté un soulagement que je n'espérais plus. Les tremblements ont diminué et je dors mieux.",
        },
        {
          name: "Marie-Claire S.",
          text: "Ma fibromyalgie me gâchait la vie. Après 14 jours de cure, les douleurs sont plus supportables et j'ai retrouvé espoir.",
        },
        {
          name: "Jacques B.",
          text: "L'approche personnalisée fait toute la différence. On sent que chaque soin est pensé spécifiquement pour nous.",
        },
      ]}
      relatedCures={[
        {
          name: "Cure de Panchakarma",
          path: "/cures/panchakarma",
          description: "Purification profonde",
          pricePerDay: 240,
        },
        {
          name: "Cure Ojas Kayakalpa",
          path: "/cures/ojas-kayakalpa",
          description: "Régénération cellulaire",
          pricePerDay: 230,
        },
        {
          name: "Cure Samvahana Vata",
          path: "/cures/samvahana-vata",
          description: "Équilibre nerveux",
          pricePerDay: 230,
        },
      ]}
    />
  );
};

export default Personnalisee;
