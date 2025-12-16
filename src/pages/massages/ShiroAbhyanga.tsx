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

const ShiroAbhyanga = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary mb-4 text-sm uppercase tracking-wider">💆 Le massage crânien traditionnel</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Shiro Abhyanga
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              Vos mains sur ma tête,<br />
              et toutes les pensées s'envolent.
            </p>
            <p className="text-muted-foreground">
              Massage de la tête, du cou et des épaules • Sérénité immédiate
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>30min</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                <span className="font-semibold">40€</span>
              </div>
            </div>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/contact">Réserver ce soin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le Shiro Abhyanga */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">Qu'est-ce que le Shiro Abhyanga ?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Shiro Abhyanga</strong> signifie littéralement <em>« massage à l'huile de la tête »</em>. 
                Ce soin concentré cible le <strong className="text-foreground">cuir chevelu</strong>, le <strong className="text-foreground">visage</strong>, 
                le <strong className="text-foreground">cou</strong> et les <strong className="text-foreground">épaules</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dans la tradition ayurvédique, la tête est considérée comme le <strong className="text-foreground">siège de tous les sens</strong> 
                et le <strong className="text-foreground">centre de contrôle du corps</strong>. Ce massage libère les tensions accumulées 
                et <strong className="text-foreground">apaise instantanément le système nerveux</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                C'est le soin parfait pour une <strong className="text-foreground">pause express</strong> dans une journée chargée, 
                ou en complément d'un autre massage pour une relaxation totale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui rend le Shiro Abhyanga unique */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Ce qui rend le Shiro Abhyanga unique</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Zone stratégique</h3>
                      <p className="text-muted-foreground text-sm">
                        La tête concentre de <strong className="text-foreground">nombreux points marma</strong> (points vitaux). 
                        Leur stimulation a un effet <strong className="text-foreground">immédiat sur tout l'organisme</strong>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">💧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Huile nourrissante</h3>
                      <p className="text-muted-foreground text-sm">
                        L'huile de <strong className="text-foreground">sésame</strong> ou de <strong className="text-foreground">coco</strong> 
                        nourrit le cuir chevelu, <strong className="text-foreground">fortifie les cheveux</strong> et apaise le mental.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Effet rapide</h3>
                      <p className="text-muted-foreground text-sm">
                        En seulement <strong className="text-foreground">30 minutes</strong>, vous ressentirez une 
                        <strong className="text-foreground"> détente profonde</strong>. Idéal pour les emplois du temps chargés.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🪑</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Position assise possible</h3>
                      <p className="text-muted-foreground text-sm">
                        Peut se pratiquer <strong className="text-foreground">assis sur une chaise</strong>, 
                        ce qui le rend accessible partout, même en entreprise.
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
              <Clock className="inline h-4 w-4 mr-1" /> Durée totale : 30 minutes
            </p>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                    Épaules et nuque (8 min)
                  </h3>
                  <p className="text-muted-foreground">
                    Le massage commence par les zones de tension principales : épaules, trapèzes et nuque. 
                    Des pressions et pétrissages soulagent les contractures.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                    Cuir chevelu (15 min)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    L'huile chaude est appliquée sur le crâne. Des mouvements circulaires, des pressions 
                    et des frictions stimulent la circulation et détendent profondément.
                  </p>
                  <p className="text-primary text-sm">
                    💡 C'est souvent le moment où les pensées cessent et où le calme s'installe.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                    Visage et tempes (7 min)
                  </h3>
                  <p className="text-muted-foreground">
                    Des mouvements doux sur le front, les tempes et le contour des yeux libèrent 
                    les tensions faciales et apaisent les maux de tête.
                  </p>
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
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Les bienfaits du Shiro Abhyanga</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Mental & émotions</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Réduction immédiate du stress</li>
                    <li>• Apaisement de l'anxiété</li>
                    <li>• Clarté mentale</li>
                    <li>• Amélioration de la concentration</li>
                    <li>• Soulagement des maux de tête</li>
                    <li>• Meilleur sommeil</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Corps</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Détente des tensions cervicales</li>
                    <li>• Soulagement des épaules</li>
                    <li>• Amélioration circulation sanguine</li>
                    <li>• Réduction des tensions faciales</li>
                    <li>• Soulagement migraines</li>
                    <li>• Détente musculaire profonde</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Cheveux & cuir chevelu</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Nutrition du cuir chevelu</li>
                    <li>• Renforcement des cheveux</li>
                    <li>• Brillance et vitalité</li>
                    <li>• Stimulation de la pousse</li>
                    <li>• Réduction des pellicules</li>
                    <li>• Prévention de la chute</li>
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
              <li>• Plaies ou lésions sur le cuir chevelu</li>
              <li>• Migraine en phase aiguë</li>
              <li>• Infection ORL active</li>
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
                <AccordionTrigger className="text-left">Dois-je me laver les cheveux avant ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Non, venez avec des cheveux naturels (non coiffés avec des produits). 
                  L'huile sera appliquée pendant le soin. Prévoyez de faire un shampoing après.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Puis-je faire ce massage pendant ma pause déjeuner ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolument ! C'est même idéal. 30 minutes suffisent pour une détente complète. 
                  Vous repartirez ressourcé pour l'après-midi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Est-ce adapté aux personnes stressées ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  C'est LE massage anti-stress par excellence. En ciblant la tête et les épaules, 
                  il agit directement sur les zones où le stress s'accumule. Effet garanti !
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
            Accordez-vous une pause bien-être
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            30 minutes pour libérer toutes vos tensions et retrouver la sérénité.
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

export default ShiroAbhyanga;
