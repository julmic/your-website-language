import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Euro, Home, Utensils, Phone } from "lucide-react";

// Import images
import curePanchakarma from "@/assets/cures/cure-panchakarma.jpg";
import cureAmrita from "@/assets/cures/cure-amrita.jpg";
import cureKarchan from "@/assets/cures/cure-karchan.jpg";
import cureLaghanaRasayana from "@/assets/cures/cure-laghana-rasayana.jpg";
import cureOjasKayakalpa from "@/assets/cures/cure-ojas-kayakalpa.jpg";
import curePersonnalisee from "@/assets/cures/cure-personnalisee.jpg";
import cureSamvahanaVata from "@/assets/cures/cure-samvahana-vata.jpg";
import curePrenatale from "@/assets/cures/cure-prenatale.jpg";
import curePostnatale from "@/assets/cures/cure-postnatale.jpg";
import cureJournee from "@/assets/cures/cure-journee.jpg";
import cureWeekEnd from "@/assets/cures/cure-week-end.jpg";

const cures = [
  {
    name: "Cure de Panchakarma",
    path: "/cures/panchakarma",
    description: "Purification profonde du corps et de l'esprit. Traite les troubles digestifs, rhumatismes, insomnies et fatigue.",
    pricePerDay: 240,
    durations: "7, 10 ou 14 jours",
    image: curePanchakarma,
    highlight: true,
  },
  {
    name: "Cure d'Amrita (Royale)",
    path: "/cures/amrita",
    description: "Cure de vitalité et bien-être royal. Un élixir de vie pour réduire les maux quotidiens.",
    pricePerDay: 240,
    durations: "Sur mesure",
    image: cureAmrita,
  },
  {
    name: "Cure Karchan d'Amaigrissement",
    path: "/cures/karchan",
    description: "Cure minceur pour retrouver son poids de forme, adopter une alimentation saine et se reconnecter à son corps.",
    pricePerDay: 230,
    durations: "Sur mesure",
    image: cureKarchan,
  },
  {
    name: "Cure Laghana Rasayana",
    path: "/cures/laghana-rasayana",
    description: "Cure anti-âge pour booster l'énergie vitale, régénérer les cellules et améliorer la circulation sanguine.",
    pricePerDay: 230,
    durations: "Sur mesure",
    image: cureLaghanaRasayana,
  },
  {
    name: "Cure d'Ojas Kayakalpa Chikitsa",
    path: "/cures/ojas-kayakalpa",
    description: "Cure de rajeunissement et bien-être. Élimine les toxines, régénère les cellules. Indiquée pour fatigue, dépression.",
    pricePerDay: 230,
    durations: "Sur mesure",
    image: cureOjasKayakalpa,
  },
  {
    name: "Cure Ayurvédique Personnalisée",
    path: "/cures/personnalisee",
    description: "Cure intensive sur mesure pour pathologies spécifiques : Parkinson, Charcot, sclérose en plaques, fibromyalgie.",
    pricePerDay: 240,
    durations: "1 à 2 semaines",
    image: curePersonnalisee,
  },
  {
    name: "Cure Samvahana Vata",
    path: "/cures/samvahana-vata",
    description: "Équilibre Vata, soulage la fatigue et les douleurs, favorise le sommeil et stimule le système nerveux.",
    pricePerDay: 230,
    durations: "Sur mesure",
    image: cureSamvahanaVata,
  },
  {
    name: "Cure Prénatale",
    path: "/cures/prenatale",
    description: "Cure spéciale pour femmes enceintes à partir de 3 mois de grossesse. Bien-être de la maman et du bébé.",
    pricePerDay: 230,
    durations: "Sur mesure",
    image: curePrenatale,
  },
  {
    name: "Cure Postnatale",
    path: "/cures/postnatale",
    description: "Retrouver la forme après l'accouchement : réduction des graisses, remodelage du corps, revitalisation.",
    pricePerDay: 230,
    durations: "7, 10 ou 14 jours",
    image: curePostnatale,
  },
  {
    name: "Cure d'une Journée",
    path: "/cures/journee",
    description: "5 types de cures intensives d'une journée : Cure des 5 sens, Rasayana, Samvahana Vata, Laghana, Amaigrissement.",
    pricePerDay: 220,
    durations: "1 jour",
    image: cureJournee,
  },
  {
    name: "Week-end Découverte",
    path: "/cures/week-end-decouverte",
    description: "Initiation aux soins ayurvédiques sur 2 jours. Idéal pour découvrir l'Ayurveda.",
    pricePerDay: 190,
    durations: "2 jours (380€)",
    image: cureWeekEnd,
    isWeekend: true,
  },
];

const Cures = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Cures Ayurvédiques
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez nos cures en résidentiel au cœur de l'Aquitaine. Une expérience 
              de détoxification et de régénération profonde dans un cadre paisible.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Jusqu'à 14 jours</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Home className="h-4 w-4 text-primary" />
                <span>Chambre individuelle</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Utensils className="h-4 w-4 text-primary" />
                <span>Repas inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Cures Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cures.map((cure, index) => (
                <Card 
                  key={index} 
                  className={`bg-card border-border hover:border-primary/30 transition-all hover:shadow-lg overflow-hidden group ${
                    cure.highlight ? 'ring-2 ring-primary/50' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={cure.image} 
                      alt={cure.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    {cure.highlight && (
                      <span className="absolute top-3 left-3 text-xs font-medium text-primary-foreground bg-primary px-2 py-1 rounded-full">
                        Cure phare
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-serif font-semibold text-foreground">{cure.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {cure.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {cure.durations}
                        </span>
                        <span className="font-semibold text-primary flex items-center gap-1">
                          <Euro className="h-4 w-4" />
                          {cure.pricePerDay}€/jour
                        </span>
                      </div>
                      <Button className="w-full" variant="outline" asChild>
                        <Link to={cure.path}>Découvrir cette cure</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Informations <span className="text-primary">Pratiques</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Ce qui est inclus</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Hébergement en chambre individuelle</li>
                    <li>✓ Tous les repas (cuisine ayurvédique)</li>
                    <li>✓ Soins et traitements quotidiens</li>
                    <li>✓ Consultations ayurvédiques</li>
                    <li>✓ Tisanes et chai à volonté</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Bon à savoir</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Les cures se déroulent en présentiel</li>
                    <li>• Durée maximale : 14 jours</li>
                    <li>• Régimes spéciaux : +40€/jour</li>
                    <li>• Acompte non remboursable si annulation 7 jours avant</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Besoin de Conseils ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Vous hésitez entre plusieurs cures ? Contactez-nous pour un échange 
              personnalisé et trouver la cure qui correspond à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0553414810" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  05 53 41 48 10
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cures;
