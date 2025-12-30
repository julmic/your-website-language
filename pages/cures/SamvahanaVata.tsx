import { CureTemplate } from "@/components/cures/CureTemplate";
import cureImage from "@/assets/cures/cure-samvahana-vata.jpg";
import { getCureById } from "@/data/cures";

const cureData = getCureById("samvahana-vata")!;

const SamvahanaVata = () => {
  return (
    <CureTemplate
      title="Cure Samvahana Vata"
      subtitle="Retrouvez calme et sérénité"
      description={`La Cure Samvahana Vata est une cure de bien-être physique et mental spécialement conçue pour équilibrer Vata, le dosha de l'air et du mouvement.

Cette cure est idéale pour soulager la fatigue, les douleurs générales, favoriser le sommeil et stimuler les systèmes nerveux et immunitaire. Elle harmonise les trois doshas et apaise particulièrement l'insomnie, les inquiétudes, le stress et la fatigue mentale.

"Samvahana" signifie "massage doux et apaisant" - c'est l'essence même de cette cure qui privilégie les soins enveloppants et réconfortants.`}
      image={cureImage}
      pricePerDay={cureData.pricePerDay!}
      treatments={[
        { name: "Abhyanga Vata", description: "Massage à l'huile chaude apaisante" },
        { name: "Shirodhara", description: "Filet d'huile relaxant" },
        { name: "Karna Purana", description: "Soins des oreilles à l'huile" },
        { name: "Padabhyanga", description: "Massage des pieds apaisant" },
        { name: "Swedana doux", description: "Sudation légère" },
        { name: "Nasya", description: "Soins nasaux calmants" },
        { name: "Basti", description: "Soins locaux apaisants" },
      ]}
      benefits={[
        "Équilibre du dosha Vata",
        "Amélioration profonde du sommeil",
        "Réduction du stress et de l'anxiété",
        "Soulagement des douleurs articulaires",
        "Calme mental et émotionnel",
        "Stimulation du système nerveux",
        "Renforcement immunitaire",
        "Ancrage et stabilité",
      ]}
      includes={[
        "Consultation ayurvédique Vata",
        "Bilan des déséquilibres",
        "Soins apaisants quotidiens",
        "Hébergement en chambre individuelle",
        "Repas équilibrants Vata",
        "Huiles médicinales spéciales",
        "Tisanes calmantes",
        "Conseils lifestyle anti-Vata",
      ]}
      faq={[
        {
          question: "Comment savoir si j'ai un déséquilibre Vata ?",
          answer: "Les signes typiques incluent : insomnie, anxiété, agitation, peau sèche, constipation, douleurs articulaires, frilosité, pensées dispersées. Une consultation permet de confirmer le diagnostic.",
        },
        {
          question: "Cette cure peut-elle aider mon insomnie ?",
          answer: "Absolument. Le Shirodhara et les massages à l'huile chaude sont particulièrement efficaces pour calmer le système nerveux et restaurer un sommeil naturel et réparateur.",
        },
        {
          question: "Quelle est la meilleure période pour cette cure ?",
          answer: "L'automne et le début de l'hiver sont les saisons Vata par excellence. C'est donc le moment idéal, mais cette cure est bénéfique toute l'année si vous présentez un déséquilibre Vata.",
        },
      ]}
      testimonials={[
        {
          name: "Élise F.",
          text: "Mes insomnies duraient depuis 3 ans. Dès la première nuit de cure, j'ai dormi comme un bébé. Le Shirodhara est magique.",
        },
        {
          name: "Bernard C.",
          text: "Anxieux de nature, cette cure m'a appris à me poser. Les massages à l'huile chaude sont d'un réconfort incroyable.",
        },
        {
          name: "Françoise D.",
          text: "Je ne connaissais pas l'Ayurveda. Cette cure Vata correspondait exactement à ce dont mon corps avait besoin. Révélateur !",
        },
      ]}
      relatedCures={[
        {
          name: "Cure Ojas Kayakalpa",
          path: "/cures/ojas-kayakalpa",
          description: "Régénération et bien-être",
          pricePerDay: 230,
        },
        {
          name: "Cure de Panchakarma",
          path: "/cures/panchakarma",
          description: "Détoxification profonde",
          pricePerDay: 240,
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

export default SamvahanaVata;
