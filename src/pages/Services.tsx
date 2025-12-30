import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, Hand, Heart, GraduationCap, Clock, Euro, ArrowRight, ChefHat, BookOpen } from "lucide-react";
import { getServicesPage } from "@/lib/pages-loader";

// Images
import doshaImg from "@/assets/bilan/dosha.avif";
import prakritiImg from "@/assets/bilan/prakriti.avif";
import cuisineImg from "@/assets/cuisine/kitcheri.webp";
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
      image: doshaImg,
      link: "/bilan-de-sante"
    },
    {
      title: "BHUTAVIDYA",
      description: "La psychologie selon l'Ayurveda. Identifiez vos schémas inconscients et transformez votre vie vers l'épanouissement.",
      duration: "1h30",
      price: "70€",
      image: prakritiImg,
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
        <div className="container px-4 space-y-16">
          
          {/* Section Massages */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Hand className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">Massages Ayurvédiques</h2>
                <p className="text-muted-foreground mt-1">Découvrez nos soins traditionnels</p>
              </div>
            </div>
            <Card className="bg-secondary/30 border-border overflow-hidden">
              <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={abhyangaImg} 
                    alt="Massages Ayurvédiques"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-muted-foreground mb-4">
                    Des massages ancestraux aux huiles médicinales, adaptés à votre constitution. 
                    Abhyanga, Shirodhara, Udvartana et bien d'autres soins pour rétablir l'équilibre de vos doshas.
                  </p>
                  <Button asChild>
                    <Link to="/massages" className="inline-flex items-center gap-2">
                      Découvrir nos massages <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section Consultations */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">Consultations Ayurvédiques</h2>
                <p className="text-muted-foreground mt-1">Bilan personnalisé selon votre constitution</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {consultations.map((consultation) => (
                <Link key={consultation.title} to={consultation.link}>
                  <Card className="bg-secondary/30 border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                    <div className="relative aspect-[16/10] overflow-hidden">
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
                        <h3 className="text-xl font-serif font-semibold text-white">{consultation.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-muted-foreground text-sm mb-4">{consultation.description}</p>
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
          </div>

          {/* Section Cures */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">Cures et Programmes</h2>
                <p className="text-muted-foreground mt-1">Programmes intensifs de 1 à 14 jours</p>
              </div>
            </div>
            <Card className="bg-secondary/30 border-border overflow-hidden">
              <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={doshaImg} 
                    alt="Cures Ayurvédiques"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-muted-foreground mb-4">
                    Des programmes intensifs pour une transformation profonde. Détoxification, régénération, 
                    perte de poids selon les protocoles ayurvédiques traditionnels avec hébergement en chambre individuelle.
                  </p>
                  <Button asChild>
                    <Link to="/cures" className="inline-flex items-center gap-2">
                      Découvrir nos cures <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section Formations */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">Formations et Stages</h2>
                <p className="text-muted-foreground mt-1">Apprenez les techniques ayurvédiques</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {formations.map((formation) => (
                <Link key={formation.title} to={formation.link}>
                  <Card className="bg-secondary/30 border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                    <div className="relative aspect-[16/10] overflow-hidden">
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
                        <h3 className="text-lg font-serif font-semibold text-white">{formation.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-muted-foreground text-sm mb-4">{formation.description}</p>
                      <Button variant="ghost" size="sm" className="text-primary group-hover:underline w-full justify-center">
                        {formation.hasPage ? "Découvrir" : "Nous contacter"} <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

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
