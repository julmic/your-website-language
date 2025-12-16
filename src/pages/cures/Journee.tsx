import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, ArrowLeft, Utensils, Star, Sparkles, Heart, Brain, Zap, Scale } from "lucide-react";

const dayPrograms = [
  {
    name: "La Cure des 5 Sens",
    icon: Sparkles,
    description: "Une journée de bien-être, de relaxation et de bonheur absolu. Éveillez vos cinq sens à travers des soins sensoriels uniques.",
    benefits: ["Éveil sensoriel", "Relaxation profonde", "Moment de bonheur"],
  },
  {
    name: "Cure Rasayana (Régénération)",
    icon: Heart,
    description: "Une journée pour régénérer votre corps et améliorer votre métabolisme. Soins anti-âge et revitalisants.",
    benefits: ["Régénération cellulaire", "Boost du métabolisme", "Effet anti-âge"],
  },
  {
    name: "Cure Samvahana Vata",
    icon: Brain,
    description: "Une journée pour calmer le mental et retrouver la sérénité. Idéale pour les personnes stressées ou anxieuses.",
    benefits: ["Calme mental", "Réduction du stress", "Meilleur sommeil"],
  },
  {
    name: "Cure Laghana",
    icon: Zap,
    description: "Une journée pour retrouver vitalité et tonus. Libérez la fatigue et le stress accumulés.",
    benefits: ["Regain d'énergie", "Libération du stress", "Vitalité retrouvée"],
  },
  {
    name: "Cure d'Amaigrissement (Karcham)",
    icon: Scale,
    description: "Une journée pour rompre avec le stress et initier votre chemin vers le bien-être et la minceur.",
    benefits: ["Drainage", "Détox express", "Nouveau départ"],
  },
];

const Journee = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/cures" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux cures
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Cures d'une Journée
            </h1>
            <p className="text-xl text-muted-foreground italic mb-8">
              5 programmes intensifs pour une transformation express
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
                <span>1 journée complète</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Euro className="h-5 w-5 text-primary" />
                <span className="font-semibold">220€</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Utensils className="h-5 w-5 text-primary" />
                <span>Repas + Chai inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Chaque Cure d'une Journée <span className="text-primary">Comprend</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">4</div>
                  <p className="text-muted-foreground">Soins ayurvédiques</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <p className="text-muted-foreground">Repas ayurvédique</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <p className="text-muted-foreground">Chai à volonté</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Choisissez Votre <span className="text-primary">Programme</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayPrograms.map((program, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <program.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{program.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {program.description}
                    </p>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-primary flex items-center gap-2">
                          <Star className="h-3 w-3 fill-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Tarif Unique
            </h2>
            <p className="text-5xl font-serif font-bold text-primary mb-4">220€</p>
            <p className="text-muted-foreground mb-8">
              Peu importe le programme choisi
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Réserver ma journée</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Ce Qu'en Disent Nos <span className="text-primary">Visiteurs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  « La Cure des 5 Sens est une parenthèse magique. En une journée, j'ai déconnecté comme jamais. »
                </p>
                <p className="text-primary font-medium">— Claire P.</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  « Parfait pour découvrir l'Ayurveda sans engagement long. J'ai adoré la cure Laghana ! »
                </p>
                <p className="text-primary font-medium">— Thomas R.</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  « Je me suis offert cette journée pour mon anniversaire. Le meilleur cadeau que je me sois fait ! »
                </p>
                <p className="text-primary font-medium">— Sandrine M.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Envie d'Aller Plus Loin ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Week-end Découverte</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    2 jours d'initiation aux soins ayurvédiques
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">380€</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/cures/week-end-decouverte">Découvrir</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Cure de Panchakarma</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    7 à 14 jours de purification profonde
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">240€/jour</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/cures/panchakarma">Découvrir</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Offrez-vous une Journée de Bien-être
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour réserver votre cure d'une journée ou pour des conseils sur le programme le plus adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Réserver maintenant</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0553414810">📞 05 53 41 48 10</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Journee;
