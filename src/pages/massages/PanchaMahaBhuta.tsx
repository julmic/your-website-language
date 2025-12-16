import { MassageTemplate } from "@/components/massages/MassageTemplate";

const PanchaMahaBhuta = () => {
  return (
    <MassageTemplate
      title="Pancha Maha Bhuta"
      subtitle="Massage pour rééquilibrer les 5 éléments primordiaux"
      description="Le PANCHA MAHA BHUTA est un massage visant à rééquilibrer les 5 éléments primordiaux qui constituent chaque être humain. Lorsque nous parlons d'Ayurveda, nous pensons aux doshas. Cependant, afin de réellement comprendre les effets et les processus qui se cachent derrière les doshas (bioénergies), il est important de parler des Pancha Mahabhuta : les 5 éléments primordiaux. En effet, non seulement nos doshas, mais aussi les tissus de notre corps tels que nos os et nos muscles, ainsi que tout ce qui existe, sont construits à partir de ces 5 Mahabhuta. Il s'agit de la terre, de l'eau, du feu, de l'air et de l'éther. Chacun de ces éléments joue un rôle essentiel dans l'équilibre et le fonctionnement de notre corps et de notre esprit. Ainsi, en comprenant et en équilibrant ces éléments, nous pouvons maintenir une santé optimale et rééquilibrer Vata, Pitta, Kapha (les tridoshas)."
      details={[
        "Rééquilibrage des 5 éléments",
        "Terre, Eau, Feu, Air, Éther",
        "Harmonisation des doshas",
        "Équilibre Vata, Pitta, Kapha",
        "Santé optimale du corps et esprit",
        "Compréhension holistique de l'Ayurveda"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default PanchaMahaBhuta;
