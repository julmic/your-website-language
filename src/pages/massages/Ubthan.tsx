import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageScrub from "@/assets/massages/massage-scrub.jpg";

const Ubthan = () => {
  return (
    <MassageTemplate
      title="Ubthan"
      subtitle="Gommage du corps naturel"
      description="L'UBTHAN est un gommage du corps qui permet d'exfolier en douceur et d'éliminer les impuretés de la peau. Sa formule naturelle à base d'ingrédients biologiques nourrit et hydrate la peau en profondeur, la laissant douce et éclatante."
      image={massageScrub}
      details={[
        "Exfoliation douce de la peau",
        "Élimination des impuretés",
        "Hydratation en profondeur",
        "Stimulation du renouvellement cellulaire",
        "Peau douce et éclatante"
      ]}
      forWhom={{
        physical: ["Peau sèche ou terne", "Imperfections cutanées", "Texture de peau irrégulière"],
        mental: ["Besoin de détente", "Moment de bien-être", "Reconnexion avec son corps"],
        wellness: ["Soin naturel", "Exfoliation douce", "Peau éclatante"]
      }}
      contraindications={["Peau très sensible", "Coups de soleil récents", "Allergies aux ingrédients", "Plaies ou irritations"]}
      benefits={{
        physical: ["Peau éclatante", "Texture améliorée", "Réduction des imperfections"],
        mental: ["Relaxation", "Bien-être sensoriel", "Moment de détente"],
        energetic: ["Purification énergétique", "Renouvellement"]
      }}
      studies={[{
        title: "Ingrédients naturels en cosmétique ayurvédique",
        source: "Journal of Traditional Medicine",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2017",
        highlight: "Les formules Ubthan traditionnelles utilisent des ingrédients naturels reconnus pour leurs propriétés nourrissantes."
      }]}
      faq={[
        { question: "Quels ingrédients composent l'Ubthan ?", answer: "Des farines de céréales, des herbes, des épices et des huiles naturelles." },
        { question: "Peut-on utiliser l'Ubthan sur le visage ?", answer: "Oui, avec une version plus douce spécialement formulée." }
      ]}
      testimonials={[
        { name: "Nathalie P.", text: "L'Ubthan a transformé ma peau. Elle est maintenant douce et lumineuse naturellement." }
      ]}
      relatedMassages={[
        { name: "Undgharshan", path: "/massages/undgharshan", description: "Traitement exfoliant aux épices" },
        { name: "Udvartana", path: "/massages/udvartana", description: "Massage aux poudres" }
      ]}
      prices={[]}
      cureOnly={true}
    />
  );
};

export default Ubthan;
