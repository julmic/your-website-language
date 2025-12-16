import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Svedana = () => {
  return (
    <MassageTemplate
      title="Svedana"
      subtitle="Sauna traditionnel aux plantes"
      description="La SVEDANA est une technique de sauna traditionnelle où l'on prend un bain de chaleur aux plantes. Ce processus consiste à s'allonger dans une petite cabine en bois spécialement conçue, où des herbes médicinales sont mélangées à de la vapeur d'eau chaude. Les plantes, telles que l'eucalyptus, la menthe poivrée ou le romarin, libèrent leurs huiles essentielles dans l'air, créant ainsi une atmosphère relaxante. Les bienfaits de la Svedana sont nombreux, allant de la détente musculaire à l'amélioration de la circulation sanguine. Cette pratique ancestrale permet également de purifier le corps en éliminant les toxines et de stimuler le système immunitaire. Que ce soit pour soulager le stress ou simplement se détendre, la Svedana offre une expérience apaisante et revigorante pour le corps et l'esprit."
      details={[
        "Bain de chaleur aux plantes médicinales",
        "Détente musculaire profonde",
        "Amélioration de la circulation sanguine",
        "Purification et élimination des toxines",
        "Stimulation du système immunitaire",
        "Relaxation et soulagement du stress"
      ]}
      prices={[{ duration: "1h", price: "25€" }]}
    />
  );
};

export default Svedana;
