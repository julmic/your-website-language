import { MassageTemplate } from "@/components/massages/MassageTemplate";
import massageHead from "@/assets/massages/massage-head.jpg";

const Shirotchampi = () => {
  return (
    <MassageTemplate
      title="Shirotchampi"
      subtitle="Massage crânien pour la relaxation et revitalisation"
      description="Le SHIROTCHAMPI a pour but la relaxation et la revitalisation de l'individu angoissé ou stressé. C'est une technique de massage pratiquée sur la tête, les épaules et le cou où l'être humain accumule les tensions quotidiennes."
      image={massageHead}
      details={[
        "Relaxation et revitalisation",
        "Massage de la tête, épaules et cou",
        "Stimulation du cuir chevelu",
        "Meilleure qualité de sommeil",
        "Augmentation de la concentration"
      ]}
      forWhom={{
        physical: ["Tensions cervicales", "Maux de tête fréquents", "Raideurs des épaules"],
        mental: ["Stress et angoisse", "Difficultés de concentration", "Fatigue mentale"],
        wellness: ["Relaxation ciblée", "Revitalisation", "Amélioration du sommeil"]
      }}
      contraindications={["Blessures au crâne", "Infections du cuir chevelu", "Migraines aiguës", "Hypertension non contrôlée"]}
      benefits={{
        physical: ["Cuir chevelu stimulé", "Tensions du cou soulagées", "Circulation améliorée"],
        mental: ["Relaxation profonde", "Concentration améliorée", "Sommeil de qualité"],
        energetic: ["Équilibre du chakra couronne", "Circulation de l'énergie vers la tête"]
      }}
      studies={[{
        title: "Effets du massage crânien sur le stress",
        source: "Journal of Alternative Medicine",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/",
        year: "2016",
        highlight: "Le massage crânien réduit significativement les niveaux de cortisol."
      }]}
      faq={[
        { question: "Utilise-t-on de l'huile ?", answer: "Oui, une huile chaude adaptée est appliquée sur le cuir chevelu." },
        { question: "Ce massage aide-t-il contre les migraines ?", answer: "Il peut aider en prévention, mais évitez-le pendant une crise de migraine." }
      ]}
      testimonials={[
        { name: "Valérie C.", text: "Le Shirotchampi est devenu mon rituel anti-stress. Mes maux de tête ont presque disparu." }
      ]}
      relatedMassages={[
        { name: "Shirodhara", path: "/massages/shirodhara", description: "Filet d'huile sur le front" },
        { name: "Shiro Abhyanga", path: "/massages/shiro-abhyanga", description: "Massage complet de la tête" }
      ]}
      prices={[{ duration: "1h30", price: "80€" }]}
    />
  );
};

export default Shirotchampi;
