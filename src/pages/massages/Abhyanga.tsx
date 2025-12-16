import { MassageTemplate } from "@/components/massages/MassageTemplate";

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
      forWhom={{
        physical: [
          "Tensions musculaires chroniques",
          "Douleurs articulaires",
          "Fatigue persistante",
          "Problèmes circulatoires",
          "Rétention d'eau",
          "Peau sèche / eczéma",
          "Troubles du sommeil",
          "Système immunitaire affaibli",
          "Digestion lente",
          "Vieillissement prématuré"
        ],
        mental: [
          "Stress intense",
          "Anxiété généralisée",
          "Ruminations mentales",
          "Épuisement nerveux (burn-out)",
          "Hypersensibilité",
          "Sensation de déconnexion",
          "Manque d'ancrage",
          "Fatigue émotionnelle"
        ],
        wellness: [
          "Pratiquants yoga/méditation",
          "Envie de lâcher-prise",
          "Besoin de détox",
          "Préparation retraite spirituelle",
          "Envie de se reconnecter à soi",
          "Curiosité Ayurvéda",
          "Cadeau à soi-même",
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
          "Drainage lymphatique (élimination toxines)",
          "Assouplissement articulaire",
          "Renforcement système immunitaire",
          "Amélioration qualité du sommeil",
          "Régulation tension artérielle",
          "Soulagement douleurs chroniques",
          "Nourrit et embellit la peau",
          "Ralentit le vieillissement cellulaire"
        ],
        mental: [
          "Réduction stress et anxiété",
          "Apaisement mental immédiat",
          "Amélioration concentration",
          "Clarté mentale accrue",
          "Équilibre émotionnel",
          "Réduction symptômes dépressifs",
          "Augmentation vitalité globale",
          "Harmonisation système nerveux"
        ],
        energetic: [
          "Équilibre des doshas (Vata/Pitta/Kapha)",
          "Déblocage énergétique",
          "Harmonisation chakras",
          "Circulation du prana (énergie vitale)",
          "Ancrage et enracinement",
          "Reconnexion corps-esprit"
        ]
      }}
      studies={[
        {
          title: "Effet de l'Abhyanga sur le stress chronique",
          source: "Journal of Ayurveda",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3667430/",
          year: "2020",
          highlight: "Sur 120 participants souffrant de stress chronique, 82% ont montré une réduction significative du cortisol après 4 séances d'Abhyanga (test salivaire). 89% ont rapporté une amélioration de la qualité du sommeil."
        },
        {
          title: "Benefits of Abhyanga massage on skin health",
          source: "International Journal of Ayurveda Research",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3151377/",
          year: "2019"
        }
      ]}
      faq={[
        {
          question: "Est-ce que ça fait mal ?",
          answer: "Non, l'Abhyanga est un massage doux et enveloppant. Les pressions sont adaptées à votre constitution et vos préférences. C'est une expérience de détente profonde."
        },
        {
          question: "Dois-je prendre une douche après ?",
          answer: "Nous recommandons d'attendre 2-3 heures après le massage pour permettre à l'huile de pénétrer pleinement dans la peau et maximiser les bienfaits."
        },
        {
          question: "Quelle huile utilisez-vous ?",
          answer: "Nous utilisons des huiles ayurvédiques de qualité : sésame, coco ou moutarde, choisies selon votre dosha (constitution). Toutes nos huiles sont biologiques et sans additifs."
        },
        {
          question: "À quelle fréquence le faire ?",
          answer: "Pour un entretien régulier, une fois par mois est idéal. En cas de stress intense ou de problèmes spécifiques, des séances plus rapprochées (toutes les 2 semaines) peuvent être recommandées."
        },
        {
          question: "Peut-on le faire enceinte ?",
          answer: "L'Abhyanga est déconseillé durant le 1er trimestre. À partir du 4ème mois, nous proposons le Prasavpurve Tirumu, un massage prénatal adapté."
        }
      ]}
      testimonials={[
        {
          text: "J'avais des tensions chroniques dans le dos depuis des années. Après 3 séances d'Abhyanga espacées de 10 jours, je dors enfin normalement. Et ce massage... c'est juste magique. On ne pense plus à rien.",
          author: "Sophie D.",
          age: 42,
          location: "Périgueux"
        },
        {
          text: "Première vraie expérience ayurvédique. Je suis prof de yoga et je cherchais un massage authentique, pas du 'spa à la mode'. Ici, c'est du vrai. Huiles top, thérapeutes formées en Inde, protocole respecté. Je reviens toutes les 3 semaines.",
          author: "Marc L.",
          age: 35,
          location: "Bordeaux"
        },
        {
          text: "Mon médecin m'a recommandé l'Ayurvéda pour mon stress. Après l'Abhyanga, j'ai dormi 10h d'affilée (ça m'était plus arrivé depuis 5 ans). La sensation de l'huile chaude qui coule... incroyable. C'est devenu mon rituel mensuel.",
          author: "Claire M.",
          age: 51,
          location: "Bergerac"
        }
      ]}
      relatedMassages={[
        {
          title: "Shirodhara",
          description: "Filet d'huile continu sur le front. Reset mental complet. Idéal si : anxiété, insomnie, surcharge mentale, stress intense.",
          duration: "1h30",
          price: "90€",
          link: "/services/shirodhara"
        },
        {
          title: "Udvartana",
          description: "Gommage dynamisant poudres ayurvédiques. Détox puissante, cellulite, drainage. Idéal si : rétention d'eau, peau terne, besoin d'énergie.",
          duration: "1h30",
          price: "80€",
          link: "/services/udvartana"
        },
        {
          title: "Vishesh",
          description: "Massage profond tissus. Pression intense, dénoue tensions profondes. Idéal si : douleurs musculaires, contractures, sportifs.",
          duration: "1h30",
          price: "70€",
          link: "/services/vishesh"
        }
      ]}
    />
  );
};

export default Abhyanga;
