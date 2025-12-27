import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Euro, Home, Utensils, Phone } from "lucide-react";
import { getAllCures, CureData } from "@/lib/cures-loader";

// Import images for mapping
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
import cureGeneric from "@/assets/cures/cure-generic.jpg";

const imageMap: Record<string, string> = {
  "/uploads/cures/cure-panchakarma.jpg": curePanchakarma,
  "/uploads/cures/cure-amrita.jpg": cureAmrita,
  "/uploads/cures/cure-karchan.jpg": cureKarchan,
  "/uploads/cures/cure-laghana-rasayana.jpg": cureLaghanaRasayana,
  "/uploads/cures/cure-ojas-kayakalpa.jpg": cureOjasKayakalpa,
  "/uploads/cures/cure-personnalisee.jpg": curePersonnalisee,
  "/uploads/cures/cure-samvahana-vata.jpg": cureSamvahanaVata,
  "/uploads/cures/cure-prenatale.jpg": curePrenatale,
  "/uploads/cures/cure-postnatale.jpg": curePostnatale,
  "/uploads/cures/cure-journee.jpg": cureJournee,
  "/uploads/cures/cure-week-end.jpg": cureWeekEnd,
};

const getImage = (cure: CureData): string => {
  if (cure.image && imageMap[cure.image]) {
    return imageMap[cure.image];
  }
  return cureGeneric;
};

const cures = getAllCures();

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
                      src={getImage(cure)} 
                      alt={cure.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    {cure.highlight && (
                      <span className="absolute top-3 left-3 text-xs font-medium text-primary-foreground bg-primary px-2 py-1 rounded-full">
                        Cure phare
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-serif font-semibold text-foreground">{cure.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {cure.description.split('\n')[0]}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {cure.durationsText || 'Sur mesure'}
                        </span>
                        <span className="font-semibold text-primary flex items-center gap-1">
                          <Euro className="h-4 w-4" />
                          {cure.price}
                        </span>
                      </div>
                      <Button className="w-full" variant="outline" asChild>
                        <Link to={`/cures/${cure.slug}`}>Découvrir cette cure</Link>
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
