import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Mukhalepam = () => {
  return (
    <MassageTemplate
      title="Mukhalepam"
      subtitle="Traitement de beauté du visage"
      description="Le MUKHALEPAM est un traitement qui permet de réduire les rides et les points noirs, d'améliorer la texture de la peau et de donner un éclat spécial au visage. Cette poudre est une préparation spéciale qui agit en profondeur pour nourrir la peau en lui apportant les nutriments essentiels dont elle a besoin. Grâce à ses propriétés revitalisantes, le Mukhalepam aide à restaurer l'élasticité de la peau, à combattre les signes de l'âge et à rendre le teint plus uniforme. En utilisant régulièrement ce traitement, vous pouvez retrouver une peau plus jeune, plus lumineuse et plus éclatante de santé."
      details={[
        "Réduction des rides",
        "Élimination des points noirs",
        "Amélioration de la texture de la peau",
        "Éclat du visage",
        "Restauration de l'élasticité",
        "Teint uniforme et lumineux"
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default Mukhalepam;
