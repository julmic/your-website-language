import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Shashtishalipindswedan = () => {
  return (
    <MassageTemplate
      title="Shashtishalipindswedan"
      subtitle="Massage indien aux pochons de riz et lait"
      description="Le SHASHTISHALIPINDSWEDAN est un massage indien recommandé pour soulager les articulations et améliorer la beauté de la peau. Ce massage utilise des pochons de riz trempés dans du lait. Ces pochons de riz chauds sont appliqués sur tout le corps, ce qui permet de détendre les muscles et d'améliorer la circulation sanguine. Le lait contenu dans les pochons hydrate la peau en profondeur, lui donnant un aspect plus lumineux et éclatant. Ce massage relaxant est idéal pour les personnes souffrant de douleurs articulaires, ainsi que pour celles qui souhaitent améliorer l'apparence de leur peau. Profitez de cette technique traditionnelle indienne pour un moment de détente et de bien-être."
      details={[
        "Soulagement des articulations",
        "Amélioration de la beauté de la peau",
        "Pochons de riz trempés dans le lait",
        "Détente musculaire",
        "Amélioration de la circulation sanguine",
        "Hydratation profonde de la peau"
      ]}
      prices={[{ duration: "1h30", price: "90€" }]}
    />
  );
};

export default Shashtishalipindswedan;
