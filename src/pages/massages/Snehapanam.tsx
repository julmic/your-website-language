import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Snehapanam = () => {
  return (
    <MassageTemplate
      title="Snehapanam"
      subtitle="Procédé d'oléation interne thérapeutique"
      description="Le SNEHAPANAM est un procédé d'oléation extrêmement bénéfique dans de nombreux cas, tels que l'asthme allergique, le psoriasis, l'eczéma, les problèmes d'immunité, l'acidité excessive, l'ulcère peptique, les troubles digestifs et diverses affections mentales. En utilisant des huiles spéciales et des massages doux, cette pratique permet de nourrir et de renforcer le corps de l'intérieur, favorisant ainsi la guérison naturelle et le rétablissement de la santé globale."
      details={[
        "Traitement de l'asthme allergique",
        "Soulagement du psoriasis et de l'eczéma",
        "Renforcement de l'immunité",
        "Réduction de l'acidité et ulcères",
        "Amélioration des troubles digestifs",
        "Soutien aux affections mentales"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Snehapanam;
