import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Elakizhi = () => {
  return (
    <MassageTemplate
      title="Elakizhi"
      subtitle="Traitement pour stimuler les nerfs et réduire la douleur"
      description="L'ELAKIZHI est un traitement qui stimule les nerfs et aide à réduire la douleur. Il est principalement utilisé pour soulager les symptômes du rhumatisme, de l'arthrite, de la paralysie, du sciatique, de la spondylose et des désordres nerveux. Ce soin consiste en une séance au cours de laquelle des pochons remplis de plantes médicinales sont chauffés et appliqués sur différentes parties du corps. La chaleur et les propriétés bénéfiques des plantes aident à détendre les muscles, à améliorer la circulation sanguine et à soulager les tensions. L'Elakizhi est une méthode naturelle et traditionnelle qui peut apporter un soulagement significatif aux personnes souffrant de douleurs chroniques et de troubles nerveux."
      details={[
        "Stimulation des nerfs",
        "Soulagement du rhumatisme et de l'arthrite",
        "Traitement de la paralysie et du sciatique",
        "Pochons de plantes médicinales chauffés",
        "Amélioration de la circulation sanguine",
        "Méthode traditionnelle et naturelle"
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
      studies={[
        {
          title: "Elakizhi (Patra Pinda Sweda) in the management of osteoarthritis",
          source: "International Journal of Ayurveda Research",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2876929/",
          year: "2010"
        },
        {
          title: "Effect of Patra Pinda Sweda on rheumatoid arthritis",
          source: "Ancient Science of Life",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3336309/",
          year: "2011"
        }
      ]}
    />
  );
};

export default Elakizhi;
