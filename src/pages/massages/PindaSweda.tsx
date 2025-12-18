import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, Heart, Flame, Sparkles, AlertTriangle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import pindaSvedaImage from "@/assets/massages/pinda-sveda.png";

const PindaSweda = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary mb-4 text-sm uppercase tracking-wider">🌿 Le soin aux pochons d'herbes</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Pinda Sweda
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              La chaleur des herbes médicinales<br />
              pénètre vos tissus en profondeur.
            </p>
            <p className="text-muted-foreground">
              Massage aux tampons chauds • Détente musculaire intense
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>1h</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                <span className="font-semibold">75€</span>
              </div>
            </div>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/contact">Réserver ce soin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que le Pinda Sweda */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">Qu'est-ce que le Pinda Sweda ?</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Pinda Sweda</strong> combine <em>« pinda »</em> (boule, tampon) et <em>« sweda »</em> (sudation). 
                    Ce soin utilise des <strong className="text-foreground">pochons de tissu remplis d'herbes médicinales</strong>, 
                    chauffés à l'huile et appliqués sur le corps en mouvements rythmés.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Les <strong className="text-foreground">herbes libèrent leurs principes actifs</strong> sous l'effet de la chaleur, 
                    pénétrant profondément dans les tissus pour <strong className="text-foreground">soulager les douleurs</strong>, 
                    <strong className="text-foreground">détendre les muscles</strong> et <strong className="text-foreground">éliminer les toxines</strong>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    C'est le soin idéal pour les personnes souffrant de <strong className="text-foreground">tensions musculaires chroniques</strong>, 
                    de <strong className="text-foreground">raideurs articulaires</strong> ou cherchant une <strong className="text-foreground">détente profonde</strong>.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={pindaSvedaImage} 
                  alt="Pinda Sweda - Massage aux pochons d'herbes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui rend le Pinda Sweda unique */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Ce qui rend le Pinda Sweda unique</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Pochons aux herbes ayurvédiques</h3>
                      <p className="text-muted-foreground text-sm">
                        Mélange personnalisé d'herbes médicinales : <strong className="text-foreground">ashwagandha</strong>, 
                        <strong className="text-foreground"> gingembre</strong>, <strong className="text-foreground">curcuma</strong>, 
                        <strong className="text-foreground"> feuilles de neem</strong> selon vos besoins.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Chaleur thérapeutique</h3>
                      <p className="text-muted-foreground text-sm">
                        Les pochons sont chauffés dans de <strong className="text-foreground">l'huile médicinale</strong>. 
                        La chaleur ouvre les pores et permet aux <strong className="text-foreground">principes actifs</strong> de pénétrer en profondeur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">💆</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Mouvements spécifiques</h3>
                      <p className="text-muted-foreground text-sm">
                        Tamponnements, pressions, glissades : chaque geste est <strong className="text-foreground">adapté à la zone traitée</strong>. 
                        Les articulations, muscles et points marma sont travaillés en profondeur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">♻️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Effet sudation</h3>
                      <p className="text-muted-foreground text-sm">
                        La chaleur induit une <strong className="text-foreground">légère transpiration</strong> qui aide à 
                        <strong className="text-foreground"> éliminer les toxines</strong> (ama) par les pores de la peau.
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
              <Clock className="inline h-4 w-4 mr-1" /> Durée totale : 1 heure
            </p>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                    Préparation des pochons (hors séance)
                  </h3>
                  <p className="text-muted-foreground">
                    Les herbes sont sélectionnées selon votre constitution et vos besoins spécifiques. 
                    Les pochons sont préparés frais et chauffés dans l'huile de sésame médicinale.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                    Application d'huile (10 min)
                  </h3>
                  <p className="text-muted-foreground">
                    Un massage léger à l'huile chaude prépare votre peau à recevoir le soin. 
                    Les tissus commencent à se détendre et les pores s'ouvrent.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                    Massage aux pochons (40 min)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Les pochons chauds sont appliqués sur tout le corps en mouvements rythmés. 
                    Chaque zone est travaillée méthodiquement : dos, épaules, bras, jambes, pieds.
                  </p>
                  <p className="text-primary text-sm">
                    💡 La chaleur pénétrante des herbes procure une sensation de bien-être intense et immédiat.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">4</span>
                    Repos & intégration (10 min)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Temps de repos sous une couverture chaude</li>
                    <li>• L'huile et les herbes continuent d'agir</li>
                    <li>• Conseils post-soin personnalisés</li>
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
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Les bienfaits du Pinda Sweda</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Douleurs & tensions</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Soulagement douleurs musculaires</li>
                    <li>• Réduction des raideurs articulaires</li>
                    <li>• Apaisement des douleurs dorsales</li>
                    <li>• Détente des contractures</li>
                    <li>• Soulagement de l'arthrite</li>
                    <li>• Récupération sportive</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Flame className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Détox & circulation</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Élimination des toxines</li>
                    <li>• Amélioration circulation sanguine</li>
                    <li>• Drainage lymphatique</li>
                    <li>• Réduction de la rétention d'eau</li>
                    <li>• Purification des tissus</li>
                    <li>• Stimulation métabolique</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Bien-être général</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Relaxation profonde</li>
                    <li>• Amélioration du sommeil</li>
                    <li>• Réduction du stress</li>
                    <li>• Revitalisation globale</li>
                    <li>• Peau plus souple et nourrie</li>
                    <li>• Sensation de légèreté</li>
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
              <li>• Fièvre ou état inflammatoire aigu</li>
              <li>• Problèmes cutanés (eczéma actif, psoriasis en poussée)</li>
              <li>• Varices importantes ou phlébite</li>
              <li>• Grossesse</li>
              <li>• Hypertension non contrôlée</li>
              <li>• Allergie aux herbes utilisées</li>
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
                <AccordionTrigger className="text-left">Est-ce que les pochons sont très chauds ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  La température est soigneusement contrôlée pour être agréablement chaude sans brûler. 
                  Nous testons toujours la chaleur avant application et ajustons selon votre sensibilité.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Vais-je beaucoup transpirer ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Une légère sudation est normale et bénéfique pour éliminer les toxines. 
                  Ce n'est pas un hammam : la transpiration reste modérée et confortable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Ce massage est-il adapté aux sportifs ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolument ! Le Pinda Sweda est excellent pour la récupération musculaire, 
                  le soulagement des courbatures et la prévention des blessures. Idéal après un effort intense.
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
            Prêt à libérer vos tensions ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Laissez la chaleur des herbes ayurvédiques soulager vos douleurs.
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

export default PindaSweda;
