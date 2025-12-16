import { MassageTemplate } from "@/components/massages/MassageTemplate";

const PrasavpurveTirumu = () => {
  return (
    <MassageTemplate
      title="Prasavpurve Tirumu"
      subtitle="Soins prénataux pour les femmes enceintes"
      description="Le PRASAVPURVE TIRUMU offre des soins prénataux spécialement conçus pour les femmes enceintes à partir de 3 mois, visant à prendre soin du bébé à venir ainsi que de sa maman. Nos soins prénataux comprennent des massages doux et apaisants, des conseils en nutrition adaptés à la grossesse, ainsi que des techniques de relaxation pour soulager les maux courants tels que les douleurs lombaires et les jambes lourdes. C'est une période si spéciale dans la vie d'une femme que ces soins de qualité favorisent le bien-être physique et émotionnel tant pour la maman que pour le bébé. Laissez-vous accompagner et envelopper tout au long de votre grossesse avec des soins prénataux exceptionnels."
      details={[
        "Soins adaptés dès 3 mois de grossesse",
        "Massages doux et apaisants",
        "Conseils en nutrition",
        "Soulagement des douleurs lombaires",
        "Réduction des jambes lourdes",
        "Bien-être physique et émotionnel"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
      studies={[
        {
          title: "Effects of prenatal massage on pregnancy outcomes",
          source: "Journal of Bodywork and Movement Therapies",
          url: "https://pubmed.ncbi.nlm.nih.gov/19027798/",
          year: "2008"
        },
        {
          title: "Prenatal massage therapy research: A systematic review",
          source: "Expert Review of Obstetrics & Gynecology",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2870995/",
          year: "2010"
        }
      ]}
    />
  );
};

export default PrasavpurveTirumu;
