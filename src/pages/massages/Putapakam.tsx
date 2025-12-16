import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Putapakam = () => {
  return (
    <MassageTemplate
      title="Putapakam"
      subtitle="Traitement oculaire pour améliorer la santé des yeux"
      description="Le PUTAPAKAM est une méthode utilisée pour améliorer la santé des yeux en utilisant un liquide médicinal tiède. Ce liquide, créé à l'aide de la technique du Putapaka Vidhi, est laissé en repos dans les yeux. Ce processus est utilisé pour réduire l'opacité de la cornée et les cataractes, et dans certains cas, pour favoriser la guérison des tissus oculaires. Les effets du Putapakam sont nombreux : il aide à éliminer les obstructions dans les canaux oculaires, stimule la circulation sanguine et accélère la production de cellules. De plus, il nettoie les yeux des débris et des cellules mortes de la peau. Grâce à ce procédé, les yeux retrouvent un pH normal, sont nourris et lubrifiés."
      details={[
        "Amélioration de la santé oculaire",
        "Réduction de l'opacité de la cornée",
        "Traitement préventif des cataractes",
        "Guérison des tissus oculaires",
        "Élimination des obstructions oculaires",
        "Nettoyage et lubrification des yeux"
      ]}
      prices={[{ duration: "1h30", price: "90€" }]}
    />
  );
};

export default Putapakam;
