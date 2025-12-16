import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageOil from "@/assets/massages/massage-oil.jpg";

const Padavishesh = () => {
  return (
    <MassageTemplate
      title="Padavishesh"
      subtitle="Massage unique réalisé avec les pieds"
      description="Le PADAVISHESH est un massage unique réalisé avec l'utilisation d'huile chaude et effectué principalement avec les pieds du thérapeute. Grâce à des mouvements précis et contrôlés, ce massage offre une expérience unique et revitalisante."
      image={massageOil}
      details={[
        "Massage aux pieds du thérapeute",
        "Huile chaude pour détente profonde",
        "Sensation de chaleur réconfortante",
        "Mouvements précis et contrôlés",
        "Expérience unique et revitalisante"
      ]}
      forWhom={{
        physical: ["Tensions musculaires profondes", "Raideurs chroniques", "Corps fatigué"],
        mental: ["Stress intense", "Besoin de lâcher-prise total", "Surmenage"],
        wellness: ["Expérience unique", "Détente profonde", "Revitalisation complète"]
      }}
      contraindications={["Fragilité osseuse", "Problèmes de dos graves", "Grossesse", "Varices sévères"]}
      benefits={{
        physical: ["Détente musculaire profonde", "Soulagement des tensions", "Corps revitalisé"],
        mental: ["Relaxation intense", "Lâcher-prise total", "Esprit apaisé"],
        energetic: ["Circulation de l'énergie", "Déblocage des nœuds énergétiques"]
      }}
      studies={[
        {
          title: "Chavutti Thirumal (foot massage therapy): Traditional practices",
          source: "Journal of Bodywork and Movement Therapies",
          url: "https://www.bodyworkmovementtherapies.com/",
          year: "2018",
          highlight: "Cette technique traditionnelle permet une pression profonde et uniforme impossible avec les mains."
        }
      ]}
      faq={[
        { question: "N'est-ce pas trop intense ?", answer: "La pression est ajustée à votre tolérance. C'est ferme mais jamais douloureux." },
        { question: "Comment le thérapeute se maintient-il ?", answer: "À l'aide d'une barre de suspension qui lui permet de contrôler précisément la pression." }
      ]}
      testimonials={[
        { name: "Thomas B.", text: "Une expérience unique ! Mes tensions musculaires ont fondu comme neige au soleil." }
      ]}
      relatedMassages={[
        { name: "Vishesh", path: "/massages/vishesh", description: "Massage profond" },
        { name: "Abhyanga", path: "/massages/abhyanga", description: "Massage à l'huile chaude" }
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
    />
  );
};

export default Padavishesh;
