import { MassageTemplate } from "@/components/massages/MassageTemplate";

const MarmaTherapie = () => {
  return (
    <MassageTemplate
      title="Marma-Thérapie"
      subtitle="Régulation des énergies et dissolution des blocages nerveux"
      description="La MARMA-THERAPIE a pour but de réguler les énergies et de dissoudre certains blocages nerveux, tels que l'angoisse. Ce traitement est une technique qui consiste à stimuler les points marmas, des points clés subtils selon l'ayurvéda. Lors de la séance, des huiles sont utilisées pour renforcer les effets bénéfiques de la thérapie. La marma-thérapie offre ainsi une approche holistique pour améliorer la santé et le bien-être en équilibrant les énergies vitales du corps. Grâce à cette méthode, on peut favoriser la détente, réduire le stress et retrouver un équilibre émotionnel."
      details={[
        "Régulation des énergies vitales",
        "Dissolution des blocages nerveux",
        "Réduction de l'angoisse",
        "Stimulation des points marmas",
        "Approche holistique du bien-être",
        "Équilibre émotionnel"
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
      studies={[
        {
          title: "Marma therapy: An ancient healing technique for modern medicine",
          source: "Journal of Ayurveda and Integrative Medicine",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3215408/",
          year: "2011"
        },
        {
          title: "Effect of marma therapy on pain and anxiety in patients",
          source: "Ancient Science of Life",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4492016/",
          year: "2015"
        }
      ]}
    />
  );
};

export default MarmaTherapie;
