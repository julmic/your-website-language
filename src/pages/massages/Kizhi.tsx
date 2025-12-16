import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Kizhi = () => {
  return (
    <MassageTemplate
      title="Kizhi"
      subtitle="Massage ayurvédique pour l'arthrite et l'ostéoporose"
      description="Le KIZHI est un massage ayurvédique traditionnel efficace pour soulager l'arthrite, l'ostéoporose, les maladies de la peau et le cholestérol. Ce traitement utilise des herbes et des poudres appliquées sur tout le corps pendant 45 minutes chaque jour, pendant une période de 7 à 14 jours. Les herbes et les poudres utilisées dans le massage KIZHI ont des propriétés médicinales qui pénètrent profondément dans les tissus du corps, aidant ainsi à réduire l'inflammation, à renforcer les os, à améliorer l'état de la peau et à réguler les niveaux de cholestérol. Ce massage quotidien pendant une période prolongée permet d'obtenir des résultats durables et une amélioration significative de la santé générale."
      details={[
        "Soulagement de l'arthrite",
        "Traitement de l'ostéoporose",
        "Amélioration des maladies de la peau",
        "Régulation du cholestérol",
        "Réduction de l'inflammation",
        "Renforcement osseux"
      ]}
      prices={[]}
      cureOnly={true}
      studies={[
        {
          title: "Kizhi (Pottali) therapy in Ayurveda: A review",
          source: "International Journal of Ayurveda Research",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2876928/",
          year: "2010"
        },
        {
          title: "Clinical study of Kizhi in osteoarthritis management",
          source: "Journal of Ayurveda and Integrative Medicine",
          url: "https://www.jaim.in/",
          year: "2014"
        }
      ]}
    />
  );
};

export default Kizhi;
