import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/massage-oil.jpg";

const Abhyanga = () => {
  return (
    <MassageTemplate
      title="Abhyanga"
      subtitle="Massage ayurvédique aux huiles chaudes"
      description="L'ABHYANGA est un massage ayurvédique qui utilise des huiles chaudes pour détendre et apaiser tout le corps. C'est le premier massage que vous recevez lorsque vous n'avez jamais reçu de massage ayurvédique auparavant. Ce massage est conçu pour éliminer les toxines et les impuretés du corps, favorisant ainsi une sensation de bien-être et de détente profonde. Les huiles utilisées dans l'Abhyanga sont spécialement choisies pour leurs propriétés curatives et nourrissantes, permettant ainsi une profonde pénétration dans la peau et les tissus musculaires. Ce traitement aide à éliminer les tensions et le stress accumulés, améliorant ainsi la circulation sanguine et lymphatique. L'Abhyanga est une expérience qui procure une relaxation totale du corps et de l'esprit, laissant une sensation de légèreté et de revitalisation. Il existe 3 Abhyangas selon votre constitution (Vata, Pitta, Kapha)."
      details={[
        "Élimination des toxines",
        "Détente profonde",
        "Amélioration de la circulation",
        "Nourriture de la peau",
        "Réduction du stress",
        "Revitalisation du corps"
      ]}
      prices={[
        { label: "Abhyanga Vata et Pitta", duration: "1h30", price: "70€" },
        { label: "Abhyanga Kapha", duration: "1h30", price: "80€" }
      ]}
      image={massageImage}
      forWhom={{
        physical: [
          "Tensions musculaires chroniques",
          "Douleurs articulaires",
          "Fatigue persistante",
          "Problèmes circulatoires",
          "Peau sèche / eczéma",
          "Troubles du sommeil"
        ],
        mental: [
          "Stress intense",
          "Anxiété généralisée",
          "Épuisement nerveux (burn-out)",
          "Fatigue émotionnelle"
        ],
        wellness: [
          "Pratiquants yoga/méditation",
          "Envie de lâcher-prise",
          "Besoin de détox",
          "Rituel bien-être mensuel"
        ]
      }}
      contraindications={[
        "Fièvre / infection aiguë",
        "Inflammation cutanée sévère",
        "Grossesse 1er trimestre",
        "Cancer en traitement actif",
        "Troubles cardiaques sévères"
      ]}
      benefits={{
        physical: [
          "Détente musculaire profonde",
          "Amélioration circulation sanguine",
          "Drainage lymphatique",
          "Renforcement système immunitaire",
          "Amélioration qualité du sommeil"
        ],
        mental: [
          "Réduction stress et anxiété",
          "Apaisement mental immédiat",
          "Amélioration concentration",
          "Équilibre émotionnel"
        ],
        energetic: [
          "Équilibre des doshas",
          "Déblocage énergétique",
          "Circulation du prana",
          "Reconnexion corps-esprit"
        ]
      }}
      studies={[
        {
          title: "Effet de l'Abhyanga sur le stress chronique",
          source: "Journal of Ayurveda",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3667430/",
          year: "2020",
          highlight: "82% des participants ont montré une réduction significative du cortisol après 4 séances d'Abhyanga."
        }
      ]}
      faq={[
        {
          question: "Est-ce que ça fait mal ?",
          answer: "Non, l'Abhyanga est un massage doux et enveloppant. Les pressions sont adaptées à votre constitution."
        },
        {
          question: "Dois-je prendre une douche après ?",
          answer: "Nous recommandons d'attendre 2-3 heures pour permettre à l'huile de pénétrer."
        },
        {
          question: "À quelle fréquence le faire ?",
          answer: "Une fois par mois est idéal pour un entretien régulier."
        }
      ]}
      testimonials={[
        {
          name: "Sophie D.",
          text: "Après 3 séances d'Abhyanga, je dors enfin normalement. C'est juste magique."
        },
        {
          name: "Marc L.",
          text: "Du vrai ayurvéda authentique. Je reviens toutes les 3 semaines."
        }
      ]}
      relatedMassages={[
        { name: "Shirodhara", path: "/services/shirodhara", description: "Filet d'huile sur le front pour relaxation profonde" },
        { name: "Udvartana", path: "/services/udvartana", description: "Massage tonifiant aux poudres" },
        { name: "Vishesh", path: "/services/vishesh", description: "Massage profond pour tensions musculaires" }
      ]}
    />
  );
};

export default Abhyanga;
