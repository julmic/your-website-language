import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Abhyanga = () => {
  return (
    <MassageTemplate
      title="Abhyanga"
      subtitle="Le massage ayurvédique aux huiles chaudes"
      description="L'ABHYANGA est un massage ayurvédique qui utilise des huiles chaudes pour détendre et apaiser tout le corps. C'est le premier massage que vous recevez lorsque vous n'avez jamais reçu de massage ayurvédique auparavant. Ce massage est conçu pour éliminer les toxines et les impuretés du corps, favorisant ainsi une sensation de bien-être et de détente profonde. Les huiles utilisées dans l'Abhyanga sont spécialement choisies pour leurs propriétés curatives et nourrissantes, permettant ainsi une profonde pénétration dans la peau et les tissus musculaires. Ce traitement aide à éliminer les tensions et le stress accumulés, améliorant ainsi la circulation sanguine et lymphatique. L'Abhyanga est une expérience qui procure une relaxation totale du corps et de l'esprit, laissant une sensation de légèreté et de revitalisation. Il existe 3 Abhyangas selon votre constitution (Vata, Pitta, Kapha)."
      details={[
        "Élimination des toxines et impuretés",
        "Relaxation profonde du corps et de l'esprit",
        "Amélioration de la circulation sanguine et lymphatique",
        "Pénétration profonde dans les tissus musculaires",
        "Réduction du stress et des tensions",
        "Adapté à votre constitution (Vata, Pitta, Kapha)"
      ]}
      prices={[
        { label: "Abhyanga Vata", duration: "1h30", price: "70€" },
        { label: "Abhyanga Pitta", duration: "1h30", price: "70€" },
        { label: "Abhyanga Kapha", duration: "1h30", price: "80€" }
      ]}
      studies={[
        {
          title: "Effect of Abhyanga (oil massage) on blood pressure and heart rate",
          source: "Journal of Ayurveda and Integrative Medicine",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3151377/",
          year: "2011"
        },
        {
          title: "Ayurvedic Abhyanga massage therapy and its effect on stress, anxiety and depression",
          source: "International Journal of Research in Ayurveda and Pharmacy",
          url: "https://www.ijrap.net/admin/php/uploads/1849_pdf.pdf",
          year: "2017"
        },
        {
          title: "Effects of Ayurvedic oil massage on muscle and joint pain",
          source: "Evidence-Based Complementary and Alternative Medicine",
          url: "https://www.hindawi.com/journals/ecam/",
          year: "2019"
        }
      ]}
    />
  );
};

export default Abhyanga;
