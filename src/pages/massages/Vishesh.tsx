import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Vishesh = () => {
  return (
    <MassageTemplate
      title="Vishesh"
      subtitle="Massage ayurvédique profond pour les tensions musculaires"
      description="Le massage ayurvédique VISHESH est une technique plus profonde qui cible les tensions musculaires telles que les courbatures, les douleurs lombaires et cervicales, ainsi que les vertiges. Ce massage vise à soulager ces problèmes en utilisant des mouvements spécifiques et des pressions adaptées. Les courbatures et les douleurs lombaires peuvent être soulagées grâce à des pressions plus intenses sur les muscles, tandis que les douleurs cervicales peuvent être traitées en ciblant les muscles du cou et des épaules. De plus, les vertiges peuvent être atténués par des manipulations spécifiques visant à rétablir l'équilibre et la stabilité."
      details={[
        "Soulagement des courbatures",
        "Traitement des douleurs lombaires",
        "Apaisement des douleurs cervicales",
        "Réduction des vertiges",
        "Pressions adaptées et profondes",
        "Rétablissement de l'équilibre corporel"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Vishesh;
