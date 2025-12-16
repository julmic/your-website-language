import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Padavishesh = () => {
  return (
    <MassageTemplate
      title="Padavishesh"
      subtitle="Massage unique réalisé avec les pieds"
      description="Le PADAVISHESH est un massage unique réalisé avec l'utilisation d'huile chaude, ce qui permet de détendre les muscles en profondeur et d'apporter une sensation de chaleur réconfortante. Ce qui rend ce massage vraiment spécial, est qu'il est effectué principalement avec les pieds du thérapeute. Grâce à des mouvements précis et contrôlés, le thérapeute utilise ses pieds pour appliquer une pression adaptée sur les muscles, offrant ainsi une expérience unique et revitalisante. Que vous cherchiez à soulager les tensions musculaires ou à vous offrir un moment de détente profonde, le Padavishesh est un choix idéal pour vous permettre de vous ressourcer et de revitaliser votre corps dans son ensemble."
      details={[
        "Massage aux pieds du thérapeute",
        "Huile chaude pour détente profonde",
        "Sensation de chaleur réconfortante",
        "Mouvements précis et contrôlés",
        "Soulagement des tensions musculaires",
        "Expérience unique et revitalisante"
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
      studies={[
        {
          title: "Chavutti Thirumal (foot massage therapy): Traditional practices",
          source: "Journal of Bodywork and Movement Therapies",
          url: "https://www.bodyworkmovementtherapies.com/",
          year: "2018"
        },
        {
          title: "Effectiveness of deep tissue foot pressure massage",
          source: "International Journal of Therapeutic Massage and Bodywork",
          url: "https://www.ncbi.nlm.nih.gov/pmc/journals/1175/",
          year: "2017"
        }
      ]}
    />
  );
};

export default Padavishesh;
