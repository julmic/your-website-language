import { MassageTemplate } from "@/components/massages/MassageTemplate";

const Mardanam = () => {
  return (
    <MassageTemplate
      title="Mardanam"
      subtitle="Massage habillé au sol sans huile"
      description="Le massage habillé au sol sans application d'huile, connu sous le nom de MARDANAM, permet de détendre les muscles, d'améliorer la circulation sanguine et d'éliminer les tensions accumulées dans le corps. Ce type de massage se déroule sur un matelas posé au sol, où le receveur reste habillé tout au long de la séance. Les praticiens utilisent des techniques spécifiques telles que les étirements, les pressions et les mouvements fluides pour stimuler les points d'énergie du corps. Ce massage offre une expérience relaxante et apaisante, favorisant un équilibre harmonieux entre le corps et l'esprit. Si vous recherchez une détente profonde et une reconnexion avec vous-même, le massage habillé au sol sans application d'huile est une excellente option."
      details={[
        "Massage sans huile, habillé",
        "Pratiqué au sol sur matelas",
        "Détente musculaire profonde",
        "Amélioration de la circulation sanguine",
        "Étirements et pressions ciblées",
        "Équilibre corps-esprit"
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Mardanam;
