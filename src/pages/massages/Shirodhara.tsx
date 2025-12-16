import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/massage-shirodhara.jpg";

const Shirodhara = () => {
  return (
    <MassageTemplate
      title="Shirodhara"
      subtitle="Relaxation profonde par filet d'huile sur le front"
      description="Le SIRODHARA est une méthode de relaxation profonde qui apporte de nombreux bienfaits pour le corps et l'esprit. Cette technique consiste à verser un liquide sur le front de manière continue. Selon le type de liquide utilisé : le Thailadhara utilise de l'huile traitée, le Thakradhara utilise du babeurre traité, et le Ksheeradhara utilise du lait traité."
      details={[
        "Filet continu d'huile chaude sur le front",
        "Trois variantes selon le liquide utilisé",
        "Stimulation du troisième œil",
        "Relaxation du système nerveux"
      ]}
      prices={[{ duration: "1h30", price: "90€" }]}
      image={massageImage}
      forWhom={{
        physical: ["Maux de tête chroniques", "Troubles du sommeil", "Hypertension", "Problèmes de peau"],
        mental: ["Stress sévère", "Anxiété", "Dépression légère", "Épuisement mental"],
        wellness: ["Méditation approfondie", "Recherche de paix intérieure"]
      }}
      contraindications={["Grossesse", "Fièvre", "Plaies sur le front", "Rhume sévère"]}
      benefits={{
        physical: ["Amélioration du sommeil", "Réduction des maux de tête", "Régulation de la tension"],
        mental: ["Réduction profonde du stress", "Apaisement de l'anxiété", "Clarté mentale", "État méditatif"],
        energetic: ["Activation du chakra Ajna", "Pacification de Vata et Pitta"]
      }}
      studies={[
        {
          title: "Shirodhara in anxiety and depression",
          source: "Journal of Ayurveda and Integrative Medicine",
          year: "2013",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3667430/",
          highlight: "Réduction de 25% des symptômes d'anxiété après une série de traitements"
        }
      ]}
      faq={[
        {
          question: "Quelle est la sensation pendant le Shirodhara ?",
          answer: "Une sensation de profonde relaxation, presque hypnotique. Certains s'endorment, d'autres entrent dans un état méditatif."
        },
        {
          question: "Quelle variante me convient le mieux ?",
          answer: "Le Thailadhara (huile) est le plus courant. Le Thakradhara (babeurre) est idéal pour les problèmes de peau."
        }
      ]}
      testimonials={[
        {
          name: "Philippe B.",
          text: "Une expérience transcendante. Je n'ai jamais ressenti une telle paix intérieure."
        }
      ]}
      relatedMassages={[
        { name: "Shiro Abhyanga", path: "/services/shiro-abhyanga", description: "Massage de la tête" },
        { name: "Thalapothichil", path: "/services/thalapothichil", description: "Cataplasme d'herbes" }
      ]}
    />
  );
};

export default Shirodhara;
