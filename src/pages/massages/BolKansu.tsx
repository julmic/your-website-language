import { MassageTemplate } from "@/components/massages/MassageTemplate";

const BolKansu = () => {
  return (
    <MassageTemplate
      title="Massage au Bol Kansu"
      subtitle="Technique traditionnelle indienne pour équilibrer les énergies"
      description="Le massage au Bol Kansu est une technique de massage traditionnelle indienne qui vise à équilibrer les énergies du corps. Il consiste à masser les pieds avec du ghee, un beurre clarifié, à l'aide d'un bol en bronze. Les mouvements circulaires et les frictions exercés sur les pieds stimulent les points réflexes, favorisant ainsi une détente profonde. Ce massage est réputé pour ses bienfaits sur la digestion, la qualité du sommeil et la circulation sanguine. Il permet également de libérer les tensions accumulées dans le corps et de réduire le stress. Le massage au Bol Kansu est une expérience apaisante et revitalisante, offrant un moment de relaxation et de reconnexion avec soi-même. Recommandé pour les personnes Vata et Pitta."
      details={[
        "Équilibrage des énergies du corps",
        "Massage des pieds au ghee et bol en bronze",
        "Stimulation des points réflexes",
        "Amélioration de la digestion",
        "Meilleure qualité du sommeil",
        "Réduction du stress",
        "Recommandé pour Vata et Pitta"
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default BolKansu;
