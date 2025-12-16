import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Abhyanga = () => {
  return (
    <MassageTemplate
      title="Abhyanga"
      subtitle="Le massage ayurvédique aux huiles chaudes"
      description="L'ABHYANGA est un massage ayurvédique qui utilise des huiles chaudes pour détendre et apaiser tout le corps. C'est le premier massage que vous recevez lorsque vous n'avez jamais reçu de massage ayurvédique auparavant. Ce massage est conçu pour éliminer les toxines et les impuretés du corps, favorisant ainsi une sensation de bien-être et de détente profonde. Les huiles utilisées dans l'Abhyanga sont spécialement choisies pour leurs propriétés curatives et nourrissantes, permettant ainsi une profonde pénétration dans la peau et les tissus musculaires. Ce traitement aide à éliminer les tensions et le stress accumulés, améliorant ainsi la circulation sanguine et lymphatique. L'Abhyanga est une expérience qui procure une relaxation totale du corps et de l'esprit, laissant une sensation de légèreté et de revitalisation. Il existe 3 Abhyangas selon votre constitution (Vata, Pitta, Kapha)."
      details={[
        "Élimination des toxines et impuretés",
        "Détente profonde corps et esprit",
        "Huiles curatives et nourrissantes",
        "Amélioration circulation sanguine et lymphatique",
        "Soulagement du stress accumulé",
        "Sensation de légèreté et revitalisation"
      ]}
      prices={[
        { label: "Abhyanga Vata", duration: "1h30", price: "70€" },
        { label: "Abhyanga Pitta", duration: "1h30", price: "70€" },
        { label: "Abhyanga Kapha", duration: "1h30", price: "80€" }
      ]}
    />
  );
};

export default Abhyanga;
