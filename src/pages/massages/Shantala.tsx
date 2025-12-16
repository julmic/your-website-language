import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Shantala = () => {
  return (
    <MassageTemplate
      title="Shantala"
      subtitle="Atelier massage bébé pour les parents"
      description="Le SHANTALA est un atelier individuel qui offre aux parents l'opportunité d'apprendre ou de perfectionner l'art du massage pour leur bébé, de l'âge d'un mois à deux ans. Cet atelier permet aux parents de se familiariser avec les techniques de massage spécifiques, adaptées aux tout-petits, afin de créer un lien affectif fort avec leur enfant. Grâce à ces séances, les parents peuvent apprendre à masser leur bébé de manière sécurisée et bienveillante, en utilisant des mouvements doux et apaisants. Le Shantala encourage également le développement physique et émotionnel du bébé, favorise son sommeil et apaise les éventuels maux de ventre. Cet atelier individuel est une expérience enrichissante pour les parents, qui peuvent ainsi renforcer leur lien avec leur enfant tout en développant leurs compétences en matière de massage pour bébé."
      details={[
        "Atelier pour bébés de 1 mois à 2 ans",
        "Apprentissage des techniques de massage",
        "Création d'un lien affectif fort",
        "Mouvements doux et sécurisés",
        "Développement physique et émotionnel",
        "Amélioration du sommeil du bébé"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Shantala;
