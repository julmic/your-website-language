import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";

const Elakizhi = () => {
  return (
    <MassageTemplate
      title="Elakizhi"
      subtitle="Traitement pour stimuler les nerfs et réduire la douleur"
      description="L'ELAKIZHI est un traitement qui stimule les nerfs et aide à réduire la douleur. Il est principalement utilisé pour soulager les symptômes du rhumatisme, de l'arthrite, de la paralysie, du sciatique et de la spondylose."
      image={massageHerbal}
      details={[
        "Stimulation des nerfs",
        "Soulagement du rhumatisme et de l'arthrite",
        "Traitement de la paralysie et du sciatique",
        "Pochons de plantes médicinales chauffés",
        "Amélioration de la circulation sanguine"
      ]}
      forWhom={{
        physical: ["Rhumatisme", "Arthrite", "Sciatique", "Spondylose"],
        mental: ["Tensions nerveuses", "Stress chronique", "Anxiété"],
        wellness: ["Soulagement des douleurs", "Amélioration de la mobilité", "Bien-être général"]
      }}
      contraindications={["Fièvre", "Infections cutanées", "Plaies ouvertes", "Inflammations aiguës"]}
      benefits={{
        physical: ["Réduction des douleurs", "Amélioration de la circulation", "Détente musculaire"],
        mental: ["Apaisement nerveux", "Réduction du stress", "Relaxation profonde"],
        energetic: ["Équilibre Vata", "Stimulation de l'énergie vitale"]
      }}
      studies={[
        {
          title: "Elakizhi (Patra Pinda Sweda) in the management of osteoarthritis",
          source: "International Journal of Ayurveda Research",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2876929/",
          year: "2010",
          highlight: "Efficacité prouvée dans la gestion de l'ostéoarthrite."
        }
      ]}
      faq={[
        { question: "Quelles plantes sont utilisées ?", answer: "Des feuilles médicinales comme le ricin, le tamarin et l'eranda, chauffées dans l'huile." },
        { question: "Est-ce adapté aux douleurs chroniques ?", answer: "Oui, c'est particulièrement efficace pour les douleurs articulaires chroniques." }
      ]}
      testimonials={[
        { name: "Jacques D.", text: "Mon sciatique est beaucoup moins douloureux depuis mes séances d'Elakizhi." }
      ]}
      relatedMassages={[
        { name: "Navarakiri", path: "/massages/navarakiri", description: "Tampons de riz aux herbes" },
        { name: "Kizhi", path: "/massages/kizhi", description: "Massage aux herbes et poudres" }
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
    />
  );
};

export default Elakizhi;
