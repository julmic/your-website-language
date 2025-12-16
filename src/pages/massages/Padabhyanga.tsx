import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Padabhyanga = () => {
  return (
    <MassageTemplate
      title="Padabhyanga"
      subtitle="Réflexologie plantaire et palmaire ayurvédique"
      description="Le PADABHYANGA, également connu sous le nom de réflexologie plantaire et palmaire, traite les déséquilibres légers, tels que l'insomnie et l'hyperactivité mentale. Il se concentre sur les mains et les pieds. Ce traitement favorise une meilleure circulation sanguine et aide à rétablir les déséquilibres dans le corps, en accélérant ainsi le processus de guérison. Le massage se fait en utilisant un bol spécial en alliage et du ghee, une sorte de beurre clarifié. Cette technique permet d'éliminer l'excès d'élément feu dans le corps et procure une relaxation profonde de tout le corps. En libérant les blocages dans les organes, le PADABHYANGA aide à restaurer l'harmonie et la vitalité."
      details={[
        "Traitement de l'insomnie",
        "Réduction de l'hyperactivité mentale",
        "Amélioration de la circulation sanguine",
        "Utilisation d'un bol en alliage et de ghee",
        "Élimination de l'excès d'élément feu",
        "Relaxation profonde du corps",
        "Restauration de l'harmonie et vitalité"
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default Padabhyanga;
