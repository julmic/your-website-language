import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, Leaf, Heart, Brain, Sparkles, AlertTriangle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Abhyanga = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary mb-4 text-sm uppercase tracking-wider">🌿 Le soin signature de l'Ayurvéda</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Abhyanga
            </h1>
            <p className="text-xl text-muted-foreground italic mb-4">
              Quand l'huile chaude caresse votre peau,<br />
              chaque cellule se souvient qu'elle est vivante.
            </p>
            <p className="text-muted-foreground">
              Le massage ayurvédique complet • Tradition millénaire
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>1h30</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                <span className="font-semibold">70€</span>
              </div>
            </div>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/contact">Réserver ce soin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que l'Abhyanga */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">Qu'est-ce que l'Abhyanga ?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Abhyanga</strong> signifie littéralement <em>« massage à l'huile »</em> en sanskrit. 
                Mais réduire ce soin millénaire à un simple massage serait comme appeler l'océan « de l'eau salée ».
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                C'est <strong className="text-foreground">le massage de référence</strong> de l'Ayurvéda, pratiqué depuis <strong className="text-foreground">plus de 5000 ans</strong> en Inde. 
                Un massage pour harmoniser l'ensemble de votre corps.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Huile chaude</strong> médicinalisée, des <strong className="text-foreground">mouvements longs et enveloppants</strong>, 
                une <strong className="text-foreground">rythmique hypnotique</strong>… L'Abhyanga ne détend pas seulement vos muscles : 
                il <strong className="text-foreground">réinitialise votre système nerveux</strong> et <strong className="text-foreground">nourrit vos tissus en profondeur</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Charaka */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-semibold mb-8">Un rituel sacré et quotidien</h2>
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-8">
                <p className="text-sm text-primary mb-4">📜 Ce que dit Charaka</p>
                <blockquote className="text-lg italic text-foreground mb-4">
                  « Celui qui se masse quotidiennement à l'huile ne connaît ni fatigue excessive, ni blessure, ni vieillissement prématuré. 
                  Son corps devient fort, ses yeux brillants, sa peau lumineuse. »
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  Charaka Samhita, Sutrasthana 5:81-82<br />
                  <span className="text-xs">Texte médical ayurvédique (IIe siècle av. J.-C.)</span>
                </p>
              </CardContent>
            </Card>
            <p className="text-muted-foreground mt-6 text-sm">
              En Inde, l'Abhyanga est pratiqué <strong className="text-foreground">avant le lever du soleil</strong>, suivi d'un bain de vapeur (Swedana) et d'un bain. 
              C'est le rituel quotidien recommandé pour <strong className="text-foreground">équilibrer Vata</strong>, le dosha le plus fragile.
            </p>
          </div>
        </div>
      </section>

      {/* Ce qui rend l'Abhyanga irremplaçable */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Ce qui rend l'Abhyanga irremplaçable</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🤲</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Massage synchronisé</h3>
                      <p className="text-muted-foreground text-sm">
                        Deux thérapeutes, <strong className="text-foreground">quatre mains</strong> en parfaite coordination. 
                        Votre cerveau ne peut pas « suivre » → il <strong className="text-foreground">lâche prise instantanément</strong>.
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
                      <h3 className="font-semibold mb-2">Oléation profonde</h3>
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-foreground">1,5 litre d'huile chaude</strong> pénètre jusqu'aux tissus profonds. 
                        L'huile ne glisse pas : elle <strong className="text-foreground">nourrit, lubrifie, régénère</strong>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Stimulation marma</h3>
                      <p className="text-muted-foreground text-sm">
                        107 points marma activés selon un <strong className="text-foreground">protocole précis</strong>. 
                        Déblocage énergétique, relance circulation, harmonisation doshas.
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
                      <h3 className="font-semibold mb-2">Détox lymphatique</h3>
                      <p className="text-muted-foreground text-sm">
                        Mouvements centripètes qui <strong className="text-foreground">drainent les toxines</strong> (ama) vers les émonctoires. 
                        Effet détox immédiat.
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
              <Clock className="inline h-4 w-4 mr-1" /> Durée totale : 1h30
            </p>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                    Accueil & préparation
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Consultation ayurvédique</strong> : détermination de votre constitution (Vata/Pitta/Kapha)</li>
                    <li>• <strong className="text-foreground">Choix de l'huile</strong> : sésame, coco, moutarde selon votre dosha</li>
                    <li>• <strong className="text-foreground">Installation</strong> : table chauffante, ambiance tamisée, musique méditative</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                    Le massage
                  </h3>
                  <p className="text-muted-foreground italic mb-4">« Le moment où tout bascule. »</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Phase 1 :</p>
                      <p className="text-muted-foreground text-sm">
                        Vous êtes allongé sur le ventre. L'huile chaude coule en filet continu sur votre colonne. 
                        Les mains glissent en mouvements longs : du sacrum vers la nuque, des épaules vers les doigts, des fesses vers les orteils.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Phase 2 :</p>
                      <p className="text-muted-foreground text-sm">
                        Vous vous retournez. Massage du crâne (shirotchampi), du visage, du cou, du thorax, des bras, du ventre, des jambes. 
                        Chaque zone est travaillée symétriquement par le thérapeute.
                      </p>
                    </div>
                  </div>
                  <p className="text-primary text-sm mt-4">
                    💡 À ce stade, vous ne savez plus qui vous masse ni où. Votre mental abandonne. Vous êtes en état theta (ondes cérébrales de méditation profonde).
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                    Temps de repos & conseils
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">10 min de repos</strong> : vous restez allongé, enveloppé dans une serviette chaude</li>
                    <li>• <strong className="text-foreground">Recommandations post-soin</strong> : hydratation, alimentation, activités à éviter</li>
                    <li>• <strong className="text-foreground">Option Swedana</strong> : si souhaité, bain de vapeur aux plantes</li>
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
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Les bienfaits de l'Abhyanga</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Bienfaits physiques</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Détente musculaire profonde</li>
                    <li>• Amélioration circulation sanguine</li>
                    <li>• Drainage lymphatique</li>
                    <li>• Assouplissement articulaire</li>
                    <li>• Renforcement système immunitaire</li>
                    <li>• Amélioration qualité du sommeil</li>
                    <li>• Soulagement douleurs chroniques</li>
                    <li>• Nourrit et embellit la peau</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Bienfaits mentaux</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Réduction stress et anxiété</li>
                    <li>• Clarté mentale accrue</li>
                    <li>• Amélioration concentration</li>
                    <li>• Stabilisation émotionnelle</li>
                    <li>• Sensation de calme profond</li>
                    <li>• Meilleure gestion des émotions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">Bienfaits énergétiques</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Équilibrage des doshas</li>
                    <li>• Activation des points marma</li>
                    <li>• Circulation du prana (énergie vitale)</li>
                    <li>• Ancrage et centrage</li>
                    <li>• Harmonisation corps-esprit</li>
                    <li>• Revitalisation globale</li>
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
            <p className="text-muted-foreground mb-4">
              L'Abhyanga est un soin doux, mais certaines conditions nécessitent une attention particulière :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Fièvre ou infection aiguë</li>
                <li>• Inflammation cutanée active</li>
                <li>• Grossesse (1er trimestre)</li>
                <li>• Digestion en cours (attendre 2h après repas)</li>
              </ul>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Thrombose veineuse</li>
                <li>• Cancer en phase active</li>
                <li>• Maladies cardiaques graves</li>
                <li>• Menstruations (selon préférence)</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              En cas de doute, consultez votre médecin avant de réserver.
            </p>
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
                <AccordionTrigger className="text-left">Dois-je me déshabiller complètement ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Vous gardez un sous-vêtement jetable fourni. Seules les zones massées sont découvertes progressivement. 
                  Votre intimité est préservée à tout moment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">L'huile tache-t-elle les vêtements ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nous recommandons de porter des vêtements sombres et confortables. 
                  L'huile peut laisser des traces, mais elle est lavable. Une serviette vous sera fournie pour le retour.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Combien de temps dure l'effet ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  L'effet relaxant immédiat dure 24 à 48h. Les bienfaits profonds (amélioration sommeil, réduction stress) 
                  s'installent avec la régularité : un massage par mois est idéal pour maintenir l'équilibre.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Puis-je conduire après la séance ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui, mais prévoyez 15-20 minutes de repos après le soin. Certaines personnes ressentent une légère somnolence. 
                  Évitez les activités intenses juste après.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left">Comment choisir entre Abhyanga et les autres massages ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  L'Abhyanga est le massage « complet » et polyvalent, idéal pour une première découverte. 
                  Le Shirodhara cible le mental (stress, insomnie). Le Pinda Sweda est parfait pour les douleurs musculaires. 
                  Nous vous conseillerons lors de votre réservation.
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
            Prêt à vivre l'expérience Abhyanga ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Offrez à votre corps et votre esprit ce rituel millénaire de régénération.
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

export default Abhyanga;
