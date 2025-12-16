import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageOil from "@/assets/massages/massage-oil.jpg";

const PanchaMahaBhuta = () => {
  return (
    <MassageTemplate
      title="Pancha Maha Bhuta"
      subtitle="Massage pour rééquilibrer les 5 éléments primordiaux"
      description="Le PANCHA MAHA BHUTA est un massage visant à rééquilibrer les 5 éléments primordiaux qui constituent chaque être humain : la terre, l'eau, le feu, l'air et l'éther, permettant de maintenir une santé optimale."
      image={massageOil}
      details={[
        "Rééquilibrage des 5 éléments",
        "Terre, Eau, Feu, Air, Éther",
        "Harmonisation des doshas",
        "Équilibre Vata, Pitta, Kapha",
        "Compréhension holistique de l'Ayurveda"
      ]}
      forWhom={{
        physical: ["Déséquilibres des doshas", "Fatigue chronique", "Problèmes de santé récurrents"],
        mental: ["Déséquilibre émotionnel", "Manque d'ancrage", "Confusion mentale"],
        wellness: ["Recherche d'équilibre", "Approche holistique", "Connexion corps-esprit"]
      }}
      contraindications={["Fièvre", "Inflammations aiguës", "Maladies contagieuses"]}
      benefits={{
        physical: ["Équilibre physique", "Vitalité retrouvée", "Corps harmonisé"],
        mental: ["Clarté mentale", "Stabilité émotionnelle", "Paix intérieure"],
        energetic: ["Harmonie des 5 éléments", "Équilibre des tridoshas", "Circulation de prana"]
      }}
      studies={[{
        title: "Les 5 éléments dans la médecine ayurvédique",
        source: "Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2014",
        highlight: "L'équilibre des Pancha Mahabhuta est fondamental pour la santé selon l'Ayurveda."
      }]}
      faq={[
        { question: "Comment détermine-t-on mon déséquilibre ?", answer: "Par un diagnostic ayurvédique préalable analysant votre constitution et état actuel." },
        { question: "Ce massage est-il adapté à tout le monde ?", answer: "Oui, il est personnalisé selon votre constitution et vos besoins spécifiques." }
      ]}
      testimonials={[
        { name: "Christophe L.", text: "Ce massage m'a permis de retrouver un équilibre que je cherchais depuis longtemps." }
      ]}
      relatedMassages={[
        { name: "Abhyanga", path: "/massages/abhyanga", description: "Massage à l'huile chaude" },
        { name: "Marma Thérapie", path: "/massages/marma-therapie", description: "Travail sur les points vitaux" }
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default PanchaMahaBhuta;
