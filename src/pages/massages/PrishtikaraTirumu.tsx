import { MassageTemplate } from "@/components/massages/MassageTemplate";

const PrishtikaraTirumu = () => {
  return (
    <MassageTemplate
      title="Prishtikara Tirumu"
      subtitle="Massage pour bébé"
      description="Le PRISHTIKARA TIRUMU est un massage pour bébé qui apporte de nombreux bienfaits à tout son organisme. Il favorise son développement et sa souplesse, lui permettant ainsi de grandir en pleine santé. Ce massage privilégie également une relation harmonieuse entre le bébé et son environnement, en commençant par ses parents. Grâce à des mouvements doux et enveloppants, le Prishtikara Tirumu permet au bébé de se détendre et de se sentir en sécurité. Cela favorise le lien parent-enfant en renforçant la communication et la connexion émotionnelle. Le Prishtikara Tirumu est une pratique qui apporte de nombreux bienfaits à la fois physiques et émotionnels, et permet au bébé de s'épanouir dans un environnement aimant et serein."
      details={[
        "Développement et souplesse du bébé",
        "Croissance en pleine santé",
        "Renforcement du lien parent-enfant",
        "Mouvements doux et enveloppants",
        "Détente et sentiment de sécurité",
        "Connexion émotionnelle"
      ]}
      prices={[{ duration: "1h", price: "70€" }]}
    />
  );
};

export default PrishtikaraTirumu;
