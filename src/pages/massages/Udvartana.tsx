import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Udvartana = () => {
  return (
    <MassageTemplate
      title="Udvartana"
      subtitle="Massage ayurvédique à base de farine de pois chiche"
      description="L'UDVARTANA est un massage ayurvédique du corps à base de farine de pois chiche. Ce massage est spécialement recommandé pour les personnes ayant des problèmes de poids, car il permet de nettoyer la peau en profondeur. La farine de pois chiche utilisée lors du massage aide à éliminer les impuretés et les toxines accumulées dans le corps, favorisant ainsi la perte de poids. L'udvartana est également bénéfique pour tonifier la peau et améliorer sa texture. Pendant la séance, le masseur applique la farine de pois chiche sur tout le corps, puis effectue des mouvements spécifiques pour stimuler la circulation sanguine et lymphatique, contribuant ainsi à une meilleure élimination des graisses."
      details={[
        "Nettoyage en profondeur de la peau",
        "Élimination des impuretés et toxines",
        "Aide à la perte de poids",
        "Tonification de la peau",
        "Amélioration de la texture cutanée",
        "Stimulation de la circulation sanguine et lymphatique"
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
    />
  );
};

export default Udvartana;
