import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Shirotchampi = () => {
  return (
    <MassageTemplate
      title="Shirotchampi"
      subtitle="Massage crânien pour la relaxation et revitalisation"
      description="Le SHIROTCHAMPI a pour but la relaxation et la revitalisation de l'individu angoissé ou stressé. C'est une technique de massage qui se pratique sur des parties spécifiques du corps : la tête, les épaules et le cou. Ce massage s'effectue sur ces parties corporelles précises car, à ces endroits, l'être humain accumule les tensions quotidiennes. Le Shirotchampi offre une stimulation du cuir chevelu, améliore la mobilité des articulations grâce aux pressions légères exercées sur le cou et les épaules, soulage les tensions oculaires et musculaires, améliore la qualité du sommeil, favorise une bonne circulation sanguine, procure une relaxation profonde et augmente le niveau de concentration et de vigilance."
      details={[
        "Relaxation et revitalisation",
        "Massage de la tête, épaules et cou",
        "Stimulation du cuir chevelu",
        "Amélioration de la mobilité articulaire",
        "Meilleure qualité de sommeil",
        "Bonne circulation sanguine",
        "Augmentation de la concentration"
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
    />
  );
};

export default Shirotchampi;
