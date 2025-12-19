import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageImage from "@/assets/massages/undgharshan.png";

const Undgharshan = () => {
  return (
    <MassageTemplate
      title="Undgharshan"
      subtitle="Traitement exfoliant aux épices pour rajeunir la peau"
      description="L'UNDGARSHAN est une technique utilisée pour rajeunir la peau en éliminant les cellules mortes et en stimulant la circulation sanguine. Ce traitement exfoliant utilise une préparation à base d'épices, de lait et de sel appliquée en mouvements circulaires."
      image={massageImage}
      details={[
        "Rajeunissement de la peau",
        "Élimination des cellules mortes",
        "Stimulation de la circulation sanguine",
        "Préparation aux épices, lait et sel",
        "Peau douce et revitalisée"
      ]}
      forWhom={{
        physical: ["Peau terne", "Cellules mortes accumulées", "Circulation sanguine faible"],
        mental: ["Besoin de renouveau", "Envie de prendre soin de soi", "Fatigue générale"],
        wellness: ["Exfoliation naturelle", "Préparation à d'autres soins", "Rajeunissement cutané"]
      }}
      contraindications={["Peau très sensible ou irritée", "Coups de soleil", "Eczéma ou psoriasis actif", "Plaies ouvertes"]}
      benefits={{
        physical: ["Peau douce et lisse", "Élimination des toxines", "Amélioration de la texture cutanée"],
        mental: ["Sensation de fraîcheur", "Bien-être général", "Relaxation"],
        energetic: ["Stimulation de la circulation énergétique", "Renouvellement cellulaire"]
      }}
      studies={[{
        title: "Bienfaits de l'exfoliation naturelle",
        source: "International Journal of Ayurveda",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2016",
        highlight: "L'exfoliation naturelle aux épices ayurvédiques stimule le renouvellement cellulaire."
      }]}
      faq={[
        { question: "Ce soin convient-il aux peaux sensibles ?", answer: "Le mélange peut être adapté pour les peaux plus sensibles." },
        { question: "À quelle fréquence puis-je faire ce soin ?", answer: "Une à deux fois par mois est généralement recommandé." }
      ]}
      testimonials={[
        { name: "Caroline D.", text: "Ma peau n'a jamais été aussi douce. L'Undgharshan est devenu mon soin préféré." }
      ]}
      relatedMassages={[
        { name: "Ubthan", path: "/massages/ubthan", description: "Gommage naturel du corps" },
        { name: "Udvartana", path: "/massages/udvartana", description: "Massage aux poudres" }
      ]}
      prices={[]}
      cureOnly={true}
    />
  );
};

export default Undgharshan;
