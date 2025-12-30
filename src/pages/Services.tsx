import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Stethoscope, Hand, Heart, GraduationCap, Clock, ArrowRight } from "lucide-react";
import { getServicesPage } from "@/lib/pages-loader";

// Images
import chikitsaImg from "@/assets/bilan/chikitsa.webp";
import bhutavidyaImg from "@/assets/bilan/bhutavidya.webp";
import cuisineImg from "@/assets/cuisine/dej-pitta.webp";
import massageImg from "@/assets/massages/shirotchampi.jpeg";
import cureImg from "@/assets/cures/cure-generic.jpg";
import prakritiImg from "@/assets/bilan/prakriti.avif";
import abhyangaImg from "@/assets/massages/abhyanga.webp";

const Services = () => {
  const pageData = getServicesPage();

  // Données des consultations
  const consultations = [
    {
      title: "Bilan de santé CHIKITSA",
      description: "Évaluation complète de votre santé selon l'Ayurveda : lecture du pouls, identification de votre constitution et plan personnalisé.",
      duration: "1h30",
      price: "70€",
      image: chikitsaImg,
      link: "/bilan-de-sante"
    },
    {
      title: "BHUTAVIDYA",
      description: "La psychologie selon l'Ayurveda. Identifiez vos schémas inconscients et transformez votre vie vers l'épanouissement.",
      duration: "1h30",
      price: "70€",
      image: bhutavidyaImg,
      link: "/bhutavidya"
    }
  ];

  // Données des formations
  const formations = [
    {
      title: "Atelier de Cuisine Ayurvédique",
      description: "Apprenez à cuisiner selon votre Dosha. Atelier pratique et immersif au cœur du centre.",
      price: "50€",
      image: cuisineImg,
      link: "/atelier-cuisine",
      hasPage: true
    },
    {
      title: "Formation Praticien Ayurvédique",
      description: "Formation complète de 6 mois pour devenir praticien en Ayurveda.",
      price: "Sur devis",
      image: prakritiImg,
      link: "/contact",
      hasPage: false
    },
    {
      title: "Formation Massage Ayurvédique",
      description: "Stage de 2 jours pour maîtriser les techniques du massage Abhyanga.",
      price: "Sur devis",
      image: abhyangaImg,
      link: "/contact",
      hasPage: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">{pageData.title}</h1>
            <p className="text-lg text-muted-foreground">{pageData.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <Accordion type="multiple" defaultValue={[]} className="space-y-4">
            
            {/* Section Massages */}
            <AccordionItem value="massages" className="border rounded-lg bg-secondary/20 px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Hand className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Massages Ayurvédiques</h2>
                    <p className="text-muted-foreground text-sm mt-0.5">Découvrez nos soins traditionnels</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link to="/massages">
                    <Card className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden group">
                      <div className="relative aspect-square overflow-hidden">
                        <img 
                          src={massageImg} 
                          alt="Massages Ayurvédiques"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-lg font-serif font-semibold text-white">Nos Massages</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-muted-foreground text-sm mb-3">
                          Des massages ancestraux aux huiles médicinales, adaptés à votre constitution.
                        </p>
                        <Button variant="ghost" size="sm" className="text-primary group-hover:underline w-full justify-center">
                          Découvrir nos massages <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section Consultations */}
            <AccordionItem value="consultations" className="border rounded-lg bg-secondary/20 px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Consultations Ayurvédiques</h2>
                    <p className="text-muted-foreground text-sm mt-0.5">Bilan personnalisé selon votre constitution</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {consultations.map((consultation) => (
                    <Link key={consultation.title} to={consultation.link}>
                      <Card className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                        <div className="relative aspect-square overflow-hidden">
                          <img 
                            src={consultation.image} 
                            alt={consultation.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                              {consultation.price}
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-lg font-serif font-semibold text-white">{consultation.title}</h3>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-muted-foreground text-sm mb-3">{consultation.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" /> {consultation.duration}
                            </span>
                            <Button variant="ghost" size="sm" className="text-primary group-hover:underline">
                              Découvrir <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section Cures */}
            <AccordionItem value="cures" className="border rounded-lg bg-secondary/20 px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Cures et Programmes</h2>
                    <p className="text-muted-foreground text-sm mt-0.5">Programmes intensifs de 1 à 14 jours</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link to="/cures">
                    <Card className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden group">
                      <div className="relative aspect-square overflow-hidden">
                        <img 
                          src={cureImg} 
                          alt="Cures Ayurvédiques"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-lg font-serif font-semibold text-white">Nos Cures</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-muted-foreground text-sm mb-3">
                          Des programmes intensifs pour une transformation profonde avec hébergement en chambre individuelle.
                        </p>
                        <Button variant="ghost" size="sm" className="text-primary group-hover:underline w-full justify-center">
                          Découvrir nos cures <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Section Formations */}
            <AccordionItem value="formations" className="border rounded-lg bg-secondary/20 px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Formations et Stages</h2>
                    <p className="text-muted-foreground text-sm mt-0.5">Apprenez les techniques ayurvédiques</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {formations.map((formation) => (
                    <Link key={formation.title} to={formation.link}>
                      <Card className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                        <div className="relative aspect-square overflow-hidden">
                          <img 
                            src={formation.image} 
                            alt={formation.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              formation.price === "Sur devis" 
                                ? "bg-secondary text-foreground" 
                                : "bg-primary text-primary-foreground"
                            }`}>
                              {formation.price}
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-base font-serif font-semibold text-white">{formation.title}</h3>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-muted-foreground text-sm mb-3">{formation.description}</p>
                          <Button variant="ghost" size="sm" className="text-primary group-hover:underline w-full justify-center">
                            {formation.hasPage ? "Découvrir" : "Nous contacter"} <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Besoin d'un conseil personnalisé ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nous sommes à votre écoute pour vous guider vers le soin ou la cure qui vous correspond.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
