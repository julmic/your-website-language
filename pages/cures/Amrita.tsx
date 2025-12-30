import { CureTemplate } from "@/components/cures/CureTemplate";
import cureImage from "@/assets/cures/cure-amrita.jpg";
import { getCureById } from "@/data/cures";

const cureData = getCureById("amrita")!;

const Amrita = () => {
  return (
    <CureTemplate
      title="Cure d'Amrita (Royale)"
      subtitle="L'élixir de vie pour une vitalité royale"
      description={`La Cure d'Amrita, également appelée Cure Royale, est une expérience de bien-être et de vitalité exceptionnelle. "Amrita" signifie "nectar d'immortalité" en sanskrit.

Cette cure luxueuse combine les soins ayurvédiques les plus raffinés pour réduire les maux quotidiens et apporter un véritable élixir de vie à votre corps et votre esprit.

Elle comprend une série de traitements royaux : consultations personnalisées, bains de bouche à l'huile, applications chaudes locales, pizichilli, swedana, shirodhara, abhyanga, udvartana, ghritadhara, padabhyanga, kansu, upanahasweda, udara et massage sonore.`}
      image={cureImage}
      pricePerDay={cureData.pricePerDay!}
      treatments={[
        { name: "Pizichilli", description: "Bain d'huile tiède en continu" },
        { name: "Shirodhara", description: "Filet d'huile sur le front" },
        { name: "Abhyanga", description: "Massage corps complet à l'huile" },
        { name: "Udvartana", description: "Massage aux poudres d'herbes" },
        { name: "Ghritadhara", description: "Application de ghee médicinal" },
        { name: "Padabhyanga", description: "Massage des pieds" },
        { name: "Kansu", description: "Massage au bol Kansu" },
        { name: "Swedana", description: "Bain de vapeur aux herbes" },
        { name: "Massage sonore", description: "Thérapie par les sons" },
      ]}
      benefits={[
        "Regain de vitalité et d'énergie",
        "Réduction des douleurs et tensions",
        "Amélioration de la qualité du sommeil",
        "Rajeunissement de la peau",
        "Équilibre émotionnel profond",
        "Renforcement du système immunitaire",
        "Clarté mentale et concentration",
        "Sensation de légèreté et bien-être",
      ]}
      includes={[
        "Consultation ayurvédique complète",
        "Bains de bouche à l'huile quotidiens",
        "Applications chaudes locales",
        "Tous les soins royaux quotidiens",
        "Hébergement en chambre individuelle",
        "Repas ayurvédiques personnalisés",
        "Tisanes et chai à volonté",
        "Suivi personnalisé",
      ]}
      faq={[
        {
          question: "Pourquoi s'appelle-t-elle Cure Royale ?",
          answer: "Cette cure était traditionnellement réservée aux rois et maharajas en Inde. Elle combine les soins les plus luxueux et efficaces de l'Ayurveda pour une régénération complète.",
        },
        {
          question: "Quelle est la durée recommandée ?",
          answer: "La durée est personnalisée selon vos besoins. Un minimum de 5 à 7 jours est recommandé pour ressentir pleinement les bienfaits de cette cure d'exception.",
        },
        {
          question: "Cette cure convient-elle aux débutants ?",
          answer: "Absolument ! C'est même une excellente introduction à l'Ayurveda grâce à sa variété de soins qui vous permettront de découvrir différentes techniques.",
        },
      ]}
      testimonials={[
        {
          name: "Catherine B.",
          text: "Une cure digne des plus grands palaces. Je me suis sentie comme une reine pendant 7 jours. Résultat : une peau lumineuse et un moral au top.",
        },
        {
          name: "François M.",
          text: "Le Pizichilli est une expérience inoubliable. Cette cure m'a apporté une détente que je n'avais jamais connue auparavant.",
        },
        {
          name: "Anne-Sophie L.",
          text: "Chaque soin est un voyage sensoriel. L'équipe est aux petits soins et l'environnement est magnifique.",
        },
      ]}
      relatedCures={[
        {
          name: "Cure de Panchakarma",
          path: "/cures/panchakarma",
          description: "Purification profonde du corps",
          pricePerDay: 240,
        },
        {
          name: "Cure Ojas Kayakalpa",
          path: "/cures/ojas-kayakalpa",
          description: "Rajeunissement et bien-être",
          pricePerDay: 230,
        },
        {
          name: "Cure Laghana Rasayana",
          path: "/cures/laghana-rasayana",
          description: "Anti-âge et vitalité",
          pricePerDay: 230,
        },
      ]}
    />
  );
};

export default Amrita;
