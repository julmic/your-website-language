import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, ArrowLeft, Calendar, Utensils, Star, CheckCircle, Moon, Sun } from "lucide-react";

const WeekEndDecouverte = () => {
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
              Week-end Découverte
            </h1>
            <p className="text-xl text-muted-foreground italic mb-8">
              Votre initiation aux soins ayurvédiques en 2 jours
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
                <span>2 jours / 1 nuit</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Euro className="h-5 w-5 text-primary" />
                <span className="font-semibold">380€ par personne</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Utensils className="h-5 w-5 text-primary" />
                <span>Pension complète</span>
              </div>
            </div>

            <Button size="lg" className="mt-4" asChild>
              <Link to="/contact">Réserver ce week-end</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6 text-center">
              L'Ayurveda à Portée de <span className="text-primary">Main</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Le Week-end Découverte est une cure ayurvédique d'initiation conçue pour ceux qui 
              souhaitent découvrir les bienfaits des soins traditionnels indiens. Un voyage de 
              bien-être et de relaxation sur deux jours, idéal pour une première expérience de l'Ayurveda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Avec <strong className="text-foreground">4 soins par jour</strong>, vous découvrirez les techniques 
              fondamentales de l'Ayurveda dans un environnement apaisant, au cœur de l'Aquitaine.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Le <span className="text-primary">Déroulé</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Day 1 */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Moon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Vendredi</h3>
                      <p className="text-sm text-muted-foreground">Arrivée à partir de 18h30</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Accueil et installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Présentation de l'Ayurveda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Dîner ayurvédique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Tisane et repos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Day 2 */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sun className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Samedi</h3>
                      <p className="text-sm text-muted-foreground">Journée complète de soins</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">4 soins ayurvédiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Petit-déjeuner, déjeuner, dîner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Chai et tisanes à volonté</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Temps de repos et détente</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Day 3 */}
              <Card className="bg-card border-border md:col-span-2 max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sun className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Dimanche</h3>
                      <p className="text-sm text-muted-foreground">Matinée de soins - Départ 18h</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">4 soins ayurvédiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Brunch ayurvédique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Conseils personnalisés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Départ à 18h00</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              <strong>Note :</strong> Le week-end peut être décalé en semaine selon vos disponibilités.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Ce Qui Est <span className="text-primary">Inclus</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "8 soins ayurvédiques (4 par jour)",
                "1 nuit en chambre individuelle",
                "Pension complète végétarienne",
                "Chai et tisanes à volonté",
                "Présentation de l'Ayurveda",
                "Conseils personnalisés",
                "Accès aux espaces de détente",
                "Documentation à emporter",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card/50 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
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
              Tarif
            </h2>
            <p className="text-5xl font-serif font-bold text-primary mb-2">380€</p>
            <p className="text-muted-foreground mb-8">par personne</p>
            <Button size="lg" asChild>
              <Link to="/contact">Réserver ce week-end</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Ils Ont Découvert l'<span className="text-primary">Ayurveda</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  « Je ne connaissais rien à l'Ayurveda. Ce week-end m'a ouvert un monde nouveau. Je reviens pour une cure complète ! »
                </p>
                <p className="text-primary font-medium">— Marion G.</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  « L'idée cadeau parfaite ! Ma compagne et moi avons adoré cette parenthèse de bien-être. »
                </p>
                <p className="text-primary font-medium">— Vincent A.</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  « Deux jours qui valent des semaines de vacances. La cuisine ayurvédique est délicieuse. »
                </p>
                <p className="text-primary font-medium">— Nadia K.</p>
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
                  <h3 className="font-semibold text-lg mb-2">Cure d'une Journée</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    5 programmes intensifs au choix
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">220€</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/cures/journee">Découvrir</Link>
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
              Prêt à Découvrir l'Ayurveda ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Réservez votre week-end découverte et laissez-vous guider dans l'univers 
              millénaire de l'Ayurveda. Un acompte est demandé à la réservation.
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

export default WeekEndDecouverte;
