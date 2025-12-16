import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Navarakiri = () => {
  return (
    <MassageTemplate
      title="Navarakiri"
      subtitle="Massage aux tampons de riz pour soulager les douleurs rhumatismales"
      description="Le NAVARAKIRI est une technique de massage ayurvédique qui utilise des tampons de riz aux plantes pour soulager les douleurs rhumatismales. Les tampons de riz sont chauffés et imprégnés d'un mélange d'herbes médicinales, puis appliqués sur les zones douloureuses du corps. La chaleur et les propriétés curatives des plantes aident à réduire l'inflammation, à détendre les muscles et à soulager les articulations douloureuses. Le NAVARAKIRI est une méthode naturelle et douce pour traiter les problèmes rhumatismaux, offrant un soulagement durable et un bien-être global."
      details={[
        "Soulagement des douleurs rhumatismales",
        "Tampons de riz chauffés aux herbes médicinales",
        "Réduction de l'inflammation",
        "Détente musculaire profonde",
        "Soulagement des articulations douloureuses",
        "Méthode naturelle et douce"
      ]}
      prices={[{ duration: "1h30", price: "90€" }]}
      studies={[
        {
          title: "Navarakizhi (Shashtika Shali Pinda Sweda) in neurological disorders",
          source: "Journal of Ayurveda and Integrative Medicine",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3296342/",
          year: "2012"
        },
        {
          title: "Clinical efficacy of Navarakizhi in osteoarthritis",
          source: "AYU - An International Quarterly Journal of Research in Ayurveda",
          url: "https://www.ayujournal.org/article.asp?issn=0974-8520",
          year: "2014"
        }
      ]}
    />
  );
};

export default Navarakiri;
