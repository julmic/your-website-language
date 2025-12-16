import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Euro, Heart, Leaf, Activity, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import prakritiImage from "@/assets/bilan/prakriti.avif";
import doshaImage from "@/assets/bilan/dosha.avif";

const BilanDeSante = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                Bilan de santé <span className="text-primary">CHIKITSA</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Un outil complet pour évaluer votre santé globale selon les principes de l'Ayurveda
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">1h30</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Euro className="w-5 h-5 text-primary" />
                  <span className="text-foreground">70€</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={doshaImage} 
                alt="Les trois doshas - Vata, Pitta, Kapha" 
                className="rounded-2xl shadow-2xl shadow-primary/20 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img 
                src={prakritiImage} 
                alt="Prakriti - Constitution ayurvédique" 
                className="rounded-2xl shadow-xl shadow-primary/10 w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Chikitsa est un outil complet qui permet d'évaluer la santé globale. Il prend en compte 
                  l'évaluation du pouls (Vikriti et Prakriti), les habitudes alimentaires et l'activité physique.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Cette consultation peut être <strong className="text-foreground">préventive</strong> ou <strong className="text-foreground">curative</strong>. 
                  Elle permet d'identifier les déséquilibres dans les énergies vitales (doshas) et les tissus (dhatus).
                </p>
                <p className="text-lg leading-relaxed">
                  Le processus comprend l'examen du pouls, l'examen physique du corps et de la langue, 
                  ainsi que des questions sur vos routines de vie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aspects de la consultation */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-foreground mb-12">
            Aspect de la consultation
          </h2>
          <div className="max-w-xl mx-auto">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Aspects diététiques (Kayachikitsa)</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rééquilibrage alimentaire personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Routines de vie (sommeil, horaires des repas, hygiène)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Traitement des douleurs physiques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Déroulement de la séance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-foreground mb-12">
            Déroulement de la séance
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Activity,
                title: "Lecture du pouls",
                description: "Évaluation de Vikriti (état actuel) et Prakriti (constitution de naissance)"
              },
              {
                icon: Users,
                title: "Examen physique",
                description: "Observation du corps et de la langue pour identifier les déséquilibres"
              },
              {
                icon: Leaf,
                title: "Discussion",
                description: "Questions sur vos routines de vie, alimentation et habitudes"
              },
              {
                icon: Heart,
                title: "Plan personnalisé",
                description: "Propositions de régime, phytothérapie et soins complémentaires"
              }
            ].map((step, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 text-center group hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suivi */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Suivi personnalisé
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Après la consultation, vous recevrez un bilan de santé global et un plan de traitement personnalisé 
              qui peut inclure des thérapies manuelles ou un travail émotionnel selon vos besoins.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="text-foreground font-medium">
                Les consultations se font <strong>en présentiel</strong> afin de permettre la lecture du pouls 
                et un bilan de santé ayurvédique complet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-6">
              Prêt à découvrir votre constitution ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Réservez votre bilan de santé CHIKITSA et commencez votre voyage vers l'équilibre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/services">Voir tous les services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BilanDeSante;
