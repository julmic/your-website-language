import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Thalapothichil = () => {
  return (
    <MassageTemplate
      title="Thalapothichil"
      subtitle="Cataplasme d'herbes médicinales pour la tête"
      description="Le THALAPOTHICHIL est un traitement efficace pour divers problèmes de santé tels que l'effort, l'inquiétude, la sinusite, le mal de tête chronique, les troubles du sommeil et la perte de cheveux. Cette méthode traditionnelle utilise des herbes médicinales spécifiques qui sont appliquées en cataplasmes sur la tête du patient. Le mélange d'herbes est soigneusement sélectionné pour apaiser et guérir les symptômes associés à ces affections."
      details={[
        "Soulagement du stress et de l'inquiétude",
        "Traitement de la sinusite",
        "Réduction des maux de tête chroniques",
        "Amélioration des troubles du sommeil",
        "Prévention de la perte de cheveux",
        "Cataplasme d'herbes médicinales"
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default Thalapothichil;
