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
    />
  );
};

export default Navarakiri;
