import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Ubthan = () => {
  return (
    <MassageTemplate
      title="Ubthan"
      subtitle="Gommage du corps naturel"
      description="L'UBTHAN est un gommage du corps qui permet d'exfolier en douceur et d'éliminer les impuretés de la peau. Sa formule naturelle à base d'ingrédients biologiques nourrit et hydrate la peau en profondeur, la laissant douce et éclatante. Les grains exfoliants éliminent les cellules mortes et stimulent la circulation sanguine, favorisant ainsi le renouvellement cellulaire. Utilisé régulièrement, Ubthan améliore la texture de la peau et réduit l'apparence des imperfections telles que les cicatrices, les vergetures et les taches brunes. Son parfum subtil et apaisant procure également une sensation de bien-être et de relaxation pendant l'utilisation. Offrez à votre corps le soin qu'il mérite avec Ubthan, pour une peau resplendissante de santé et de beauté."
      details={[
        "Exfoliation douce de la peau",
        "Élimination des impuretés",
        "Hydratation en profondeur",
        "Stimulation du renouvellement cellulaire",
        "Réduction des imperfections cutanées",
        "Peau douce et éclatante"
      ]}
      prices={[]}
      cureOnly={true}
    />
  );
};

export default Ubthan;
