import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageOil from "@/assets/massages/massage-oil.jpg";

const Mardanam = () => {
  return (
    <MassageTemplate
      title="Mardanam"
      subtitle="Massage habillé au sol sans huile"
      description="Le massage habillé au sol sans application d'huile, connu sous le nom de MARDANAM, permet de détendre les muscles, d'améliorer la circulation sanguine et d'éliminer les tensions avec des étirements et pressions ciblées."
      image={massageOil}
      details={[
        "Massage sans huile, habillé",
        "Pratiqué au sol sur matelas",
        "Détente musculaire profonde",
        "Étirements et pressions ciblées",
        "Équilibre corps-esprit"
      ]}
      forWhom={{
        physical: ["Tensions musculaires", "Raideurs articulaires", "Manque de souplesse"],
        mental: ["Stress quotidien", "Mental agité", "Besoin de recentrage"],
        wellness: ["Préférence pour massage habillé", "Alternative aux massages à l'huile", "Détente globale"]
      }}
      contraindications={["Problèmes articulaires graves", "Ostéoporose sévère", "Blessures récentes", "Grossesse"]}
      benefits={{
        physical: ["Muscles détendus", "Meilleure souplesse", "Circulation améliorée"],
        mental: ["Esprit apaisé", "Réduction du stress", "Recentrage"],
        energetic: ["Équilibre corps-esprit", "Stimulation des points d'énergie"]
      }}
      studies={[
        {
          title: "Dry massage techniques in traditional medicine",
          source: "Journal of Bodywork and Movement Therapies",
          url: "https://www.bodyworkmovementtherapies.com/",
          year: "2017",
          highlight: "Les techniques de massage sans huile sont efficaces pour la détente musculaire."
        }
      ]}
      faq={[
        { question: "Dois-je me déshabiller ?", answer: "Non, vous restez habillé avec des vêtements confortables." },
        { question: "Est-ce similaire au massage thaï ?", answer: "Il y a des similitudes dans les étirements, mais les techniques sont propres à l'Ayurveda." }
      ]}
      testimonials={[
        { name: "Patrick N.", text: "Parfait pour moi qui n'aime pas l'huile. Je ressors complètement détendu." }
      ]}
      relatedMassages={[
        { name: "Vishesh", path: "/massages/vishesh", description: "Massage profond" },
        { name: "Marma Thérapie", path: "/massages/marma-therapie", description: "Travail sur les points marma" }
      ]}
      prices={[{ duration: "1h30", price: "70€" }]}
    />
  );
};

export default Mardanam;
