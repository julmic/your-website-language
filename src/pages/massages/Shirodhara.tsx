import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, Heart, Brain, Sparkles, AlertTriangle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Shirodhara = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary mb-4 text-sm uppercase tracking-wider">🧘 Le soin royal du mental</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Shirodhara
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              Un filet d'huile chaude sur le front,<br />
              et le temps s'arrête.
            </p>
            <p className="text-muted-foreground">
              Le traitement ayurvédique de l'esprit • Paix profonde
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>45min</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                <span className="font-semibold">65€</span>
              </div>
            </div>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/contact">Réserver ce soin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le Shirodhara */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">Qu'est-ce que le Shirodhara ?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Shirodhara</strong> vient du sanskrit <em>« shiro »</em> (tête) et <em>« dhara »</em> (flux). 
                Ce soin consiste en un <strong className="text-foreground">filet continu d'huile tiède</strong> versé sur le front, 
                précisément sur le <strong className="text-foreground">troisième œil</strong> (Ajna chakra).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Considéré comme le <strong className="text-foreground">« roi des soins ayurvédiques »</strong> pour le mental, 
                le Shirodhara induit un état de <strong className="text-foreground">relaxation profonde</strong> comparable à la méditation avancée.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ce soin agit directement sur le <strong className="text-foreground">système nerveux central</strong>, 
                calmant l'hyperactivité mentale et rétablissant l'équilibre des doshas, particulièrement <strong className="text-foreground">Vata</strong> et <strong className="text-foreground">Pitta</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui rend le Shirodhara unique */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Ce qui rend le Shirodhara unique</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Stimulation du troisième œil</h3>
                      <p className="text-muted-foreground text-sm">
                        L'huile coule sur le point <strong className="text-foreground">Ajna</strong>, centre de l'intuition et de la clarté mentale. 
                        Cette stimulation douce <strong className="text-foreground">apaise instantanément</strong> le mental agité.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🌊</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Flux continu hypnotique</h3>
                      <p className="text-muted-foreground text-sm">
                        Le mouvement oscillant de l'huile crée un <strong className="text-foreground">effet hypnotique</strong>. 
                        Votre cerveau entre en <strong className="text-foreground">ondes alpha/theta</strong>, état de méditation profonde.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Huiles médicinales</h3>
                      <p className="text-muted-foreground text-sm">
                        Selon votre constitution, nous utilisons de l'huile de <strong className="text-foreground">sésame</strong>, 
                        de <strong className="text-foreground">coco</strong> ou des <strong className="text-foreground">décoctions d'herbes</strong> spécifiques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">⏱️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Température parfaite</h3>
                      <p className="text-muted-foreground text-sm">
                        L'huile est maintenue à <strong className="text-foreground">température corporelle constante</strong>. 
                        Ni trop chaud, ni trop froid : <strong className="text-foreground">l'équilibre parfait</strong> pour une absorption optimale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulé de la séance */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-center">Le déroulé de votre séance</h2>
            <p className="text-center text-muted-foreground mb-10">
              <Clock className="inline h-4 w-4 mr-1" /> Durée totale : 45 minutes
            </p>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                    Préparation (5 min)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Installation confortable sur la table de soin</li>
                    <li>• Protection des cheveux avec une bande</li>
                    <li>• Bref massage du cuir chevelu pour préparer</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                    Le Shirodhara (30 min)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    L'huile tiède coule en un filet régulier sur votre front, oscillant doucement d'une tempe à l'autre. 
                    Vous fermez les yeux et vous laissez porter par la sensation enveloppante.
                  </p>
                  <p className="text-primary text-sm">
                    💡 La plupart des personnes atteignent un état de relaxation profonde dès les premières minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                    Repos & intégration (10 min)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Temps de repos silencieux</li>
                    <li>• Retour progressif à l'état de veille</li>
                    <li>• Conseils pour prolonger les bienfaits</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bienfaits */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Les bienfaits du Shirodhara</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Bienfaits mentaux</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Réduction du stress et de l'anxiété</li>
                    <li>• Amélioration du sommeil</li>
                    <li>• Clarté mentale accrue</li>
                    <li>• Soulagement des migraines</li>
                    <li>• Apaisement des pensées obsessionnelles</li>
                    <li>• Amélioration de la concentration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Bienfaits physiques</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Régulation du système nerveux</li>
                    <li>• Diminution de la tension artérielle</li>
                    <li>• Soulagement des tensions cervicales</li>
                    <li>• Amélioration de la santé des cheveux</li>
                    <li>• Nourriture du cuir chevelu</li>
                    <li>• Détente musculaire faciale</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Bienfaits spirituels</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Éveil de l'intuition</li>
                    <li>• État méditatif profond</li>
                    <li>• Connexion intérieure renforcée</li>
                    <li>• Équilibrage énergétique</li>
                    <li>• Sensation de paix durable</li>
                    <li>• Expansion de la conscience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contre-indications */}
      <section className="py-16 bg-destructive/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h2 className="text-2xl font-serif font-semibold">Contre-indications</h2>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Fièvre ou infection en cours</li>
              <li>• Plaies ou lésions sur le front</li>
              <li>• Épilepsie non contrôlée</li>
              <li>• Grossesse (premier trimestre)</li>
              <li>• Intoxication alcoolique ou médicamenteuse</li>
              <li>• Allergie aux huiles utilisées</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-serif font-semibold">Questions fréquentes</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">L'huile va-t-elle abîmer mes cheveux ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Au contraire ! L'huile nourrit profondément le cuir chevelu et les cheveux. 
                  Prévoyez simplement de faire un shampoing le soir même ou le lendemain.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Puis-je m'endormir pendant le soin ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Beaucoup de personnes entrent dans un état entre veille et sommeil. 
                  C'est parfaitement normal et même recherché : c'est l'état theta, propice à la régénération profonde.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Combien de séances sont recommandées ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Pour un effet durable sur le stress ou l'insomnie, une cure de 3 à 7 séances rapprochées est idéale. 
                  En entretien, une séance mensuelle maintient les bienfaits.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Prêt à apaiser votre mental ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Offrez-vous ce voyage intérieur vers la paix et la clarté.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link to="/contact">Réserver maintenant</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Voir tous les soins</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shirodhara;
