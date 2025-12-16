import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Saundarya = () => {
  return (
    <MassageTemplate
      title="Saundarya"
      subtitle="Traitement de beauté du visage par les points marma"
      description="Le SAUNDARYA est un traitement de beauté du visage qui vise à effacer les tensions et à procurer une détente musculaire. Ce traitement fonctionne en ciblant les points marma du visage, qui sont des points d'énergie spécifiques. En travaillant sur ces points, il est possible de libérer les tensions accumulées dans les muscles du visage, ce qui permet d'obtenir un teint plus lumineux et une apparence plus détendue. Saundarya est une méthode relaxante et efficace pour prendre soin de sa peau et retrouver un éclat naturel. Grâce à ce traitement, il est possible de retrouver une beauté intérieure qui se reflète à l'extérieur."
      details={[
        "Effacement des tensions du visage",
        "Détente musculaire faciale",
        "Travail sur les points marma",
        "Teint lumineux",
        "Apparence détendue",
        "Éclat naturel retrouvé"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Saundarya;
