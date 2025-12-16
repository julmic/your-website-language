import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Undgharshan = () => {
  return (
    <MassageTemplate
      title="Undgharshan"
      subtitle="Traitement exfoliant aux épices pour rajeunir la peau"
      description="L'UNDGARSHAN est une technique utilisée pour rajeunir la peau en éliminant les cellules mortes et en stimulant la circulation sanguine. Ce traitement exfoliant pour le corps utilise une préparation à base d'épices, de lait et de sel. Pendant le processus, la préparation est appliquée sur tout le corps, en effectuant de légers mouvements circulaires pour améliorer l'absorption des ingrédients nourrissants. L'undgharshan laisse la peau douce, lisse et revitalisée, tout en offrant une sensation de détente et de bien-être. C'est un moyen naturel et efficace de prendre soin de sa peau en lui redonnant éclat et vitalité."
      details={[
        "Rajeunissement de la peau",
        "Élimination des cellules mortes",
        "Stimulation de la circulation sanguine",
        "Préparation aux épices, lait et sel",
        "Peau douce, lisse et revitalisée",
        "Sensation de détente et bien-être"
      ]}
      prices={[]}
      cureOnly={true}
    />
  );
};

export default Undgharshan;
