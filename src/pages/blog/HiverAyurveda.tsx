import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronUp, Snowflake, Sun, Leaf, Heart, Brain, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import heroImage from '@/assets/blog/hiver-ayurveda-hero.webp';

const HiverAyurveda = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'comprendre-vata', title: 'Comprendre Vata' },
    { id: 'phases-hiver', title: 'Les 3 Phases de l\'Hiver' },
    { id: 'routine-anti-vata', title: 'Routine Anti-Vata' },
    { id: 'nutrition', title: 'Nutrition Ayurvédique' },
    { id: 'protocoles-urgence', title: 'Protocoles d\'Urgence' },
    { id: 'adaptation-dosha', title: 'Adaptation par Dosha' },
    { id: 'programme-90-jours', title: 'Programme 90 Jours' },
    { id: 'outils-pratiques', title: 'Outils Pratiques' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  return (
    <Layout>
      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-12">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Saisonnier
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Décembre 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20 min de lecture
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                Hiver & Ayurvéda : Votre Guide de Survie Naturelle
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                L'art ancestral de traverser la saison Vata en harmonie avec votre constitution
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Centre Arkadhya</p>
                  <p className="text-sm text-muted-foreground">Équipe rédactionnelle</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Hiver et Ayurvéda - Guide de survie naturelle" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Content with Sidebar */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[250px_1fr] gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="font-semibold text-foreground mb-4">Sommaire</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full py-1"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <div className="bg-card/50 border border-border rounded-xl p-6 mb-8">
                  <p className="text-lg italic text-center mb-4">
                    "Yat pinde tat bramhande" - Ce qui est dans l'individu est dans l'univers
                  </p>
                </div>

                <p className="text-muted-foreground">
                  Peau qui tiraille, articulations raides au réveil, moral en berne dès 17h, digestion capricieuse... 
                  Et si ces signaux n'étaient pas le fruit du hasard mais la sagesse millénaire de votre corps qui s'exprime ?
                </p>
                <p className="text-muted-foreground">
                  L'Ayurvéda nous enseigne une vérité fondamentale : nous ne sommes pas séparés de la Nature. 
                  Nous <strong>SOMMES</strong> la Nature. Et en hiver, c'est l'élément <strong>VATA</strong> (Air + Espace) 
                  qui gouverne notre équilibre.
                </p>
                <p className="text-muted-foreground">
                  Prêt(e) à transformer votre relation à l'hiver ? Embarquez pour ce voyage au cœur de la sagesse védique !
                </p>
              </section>

              {/* Chapitre 1: Comprendre Vata */}
              <section id="comprendre-vata" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Snowflake className="w-8 h-8 text-primary" />
                  Chapitre 1 : Comprendre Vata - Le Maître de l'Hiver
                </h2>

                <h3 className="text-xl font-semibold text-foreground mb-4">🌬️ Qu'est-ce que Vata ?</h3>
                <p className="text-muted-foreground mb-4">
                  Imaginez le vent d'hiver : mobile, froid, sec, léger, rugueux. C'est exactement l'énergie 
                  qui gouverne cette saison et influence votre corps de novembre à février.
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-4">Vata gouverne :</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                    <li className="flex items-center gap-2">✅ Le système nerveux (votre stress hivernal)</li>
                    <li className="flex items-center gap-2">✅ La circulation (mains/pieds froids)</li>
                    <li className="flex items-center gap-2">✅ Les articulations (raideurs matinales)</li>
                    <li className="flex items-center gap-2">✅ La peau (sécheresse, gerçures)</li>
                    <li className="flex items-center gap-2">✅ Le côlon (constipation, ballonnements)</li>
                    <li className="flex items-center gap-2">✅ L'esprit (anxiété, ruminations)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">🎯 Les Signaux d'Alarme Vata</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Physiques</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Peau sèche, craquelée, qui desquame</li>
                      <li>• Cheveux ternes, cassants</li>
                      <li>• Ongles striés, fragiles</li>
                      <li>• Articulations qui craquent</li>
                      <li>• Digestion irrégulière (constipation/ballonnements)</li>
                      <li>• Sommeil perturbé, réveil 3h-5h du matin</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">Émotionnels</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Anxiété sans raison apparente</li>
                      <li>• Hypersensibilité aux bruits, lumières</li>
                      <li>• Pensées qui tournent en boucle</li>
                      <li>• Sentiment d'instabilité, d'éparpillement</li>
                      <li>• Baisse de motivation, procrastination</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                  <p className="text-primary font-medium">
                    Si vous cochez 3 signaux ou plus, votre Vata crie à l'aide !
                  </p>
                </div>
              </section>

              {/* Chapitre 2: Les 3 Phases de l'Hiver */}
              <section id="phases-hiver" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Sun className="w-8 h-8 text-primary" />
                  Chapitre 2 : Les 3 Phases Énergétiques de l'Hiver
                </h2>

                <Tabs defaultValue="hemanta" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="hemanta">Hemanta</TabsTrigger>
                    <TabsTrigger value="shishira">Shishira</TabsTrigger>
                    <TabsTrigger value="transition">Transition</TabsTrigger>
                  </TabsList>

                  <TabsContent value="hemanta" className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">🍂 Phase 1 : Hemanta (Novembre-Décembre)</h3>
                    <p className="text-primary font-medium mb-4">"La Grande Préparation"</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Caractéristiques</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Agni (feu digestif) : <strong>FORT</strong></li>
                          <li>• Appétit : <strong>AUGMENTÉ</strong></li>
                          <li>• Énergie : Concentrée vers l'intérieur</li>
                          <li>• Mission : Constituer des réserves</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Nutrition Puissante</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Aliments plus caloriques (noix, graines, avocat)</li>
                          <li>• Ghee quotidien (1-2 cuillères à café)</li>
                          <li>• Plats mijotés, soupes consistantes</li>
                          <li>• Épices réchauffantes (cannelle, gingembre, cardamome)</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Routine Optimale</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Lever : 6h30-7h (lumière naturelle)</li>
                        <li>• Abhyanga quotidien (huile de sésame chaude)</li>
                        <li>• Exercice : Renforcement musculaire (30 min)</li>
                        <li>• Coucher : 22h maximum (récupération)</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="shishira" className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">❄️ Phase 2 : Shishira (Janvier-Février)</h3>
                    <p className="text-primary font-medium mb-4">"Le Grand Test"</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Caractéristiques</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Froid INTENSE + Sécheresse MAXIMALE</li>
                          <li>• Vata à son apogée</li>
                          <li>• Risque épuisement des réserves</li>
                          <li>• Mission : Maintenir l'équilibre</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Protection Renforcée</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Huiles médicinales (Mahanarayan, Kshirabala)</li>
                          <li>• Chyawanprash quotidien (immunité Gold)</li>
                          <li>• Tisanes réchauffantes constantes</li>
                          <li>• Vêtements en couches (cou, poignets, chevilles)</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Protocole de Secours</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Bain chaud aux huiles essentielles (2x/semaine)</li>
                        <li>• Massage des pieds avant coucher</li>
                        <li>• Méditation quotidienne (20 min minimum)</li>
                        <li>• Élimination stimulants (café, sucre, alcool)</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="transition" className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">🌱 Phase 3 : Transition Printemps (Mars)</h3>
                    <p className="text-primary font-medium mb-4">"La Renaissance"</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Caractéristiques</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Kapha commence à s'éveiller</li>
                          <li>• Accumulation toxines hivernales</li>
                          <li>• Préparation détox douce</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Actions Clés</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Alléger progressivement l'alimentation</li>
                          <li>• Augmenter l'activité physique</li>
                          <li>• Introduire des aliments amers et astringents</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Chapitre 3: Routine Anti-Vata */}
              <section id="routine-anti-vata" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  Chapitre 3 : Votre Routine Ayurvédique Anti-Vata
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="matin" className="bg-card/50 border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-lg font-semibold">
                      🌅 Matin : Le Rituel d'Ancrage (30 minutes)
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">6h30-7h00 : Réveil en douceur</h4>
                          <ol className="list-decimal list-inside space-y-1 text-sm">
                            <li>Gratitude (3 choses positives dans votre lit)</li>
                            <li>Gratte-langue (élimination toxines nocturnes)</li>
                            <li>Neti (irrigation nasale eau salée tiède)</li>
                            <li>Huile dans narines (Nasya - 2 gouttes/narine)</li>
                          </ol>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">7h00-7h30 : Abhyanga - Le Game Changer</h4>
                          <p className="text-sm mb-2">L'auto-massage quotidien qui révolutionne votre hiver !</p>
                          <div className="bg-background/50 rounded-lg p-4">
                            <h5 className="font-medium text-foreground mb-2">Technique Abhyanga Express :</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Huile de sésame tiédie</li>
                              <li>• Massage crâne : mouvements circulaires (2 min)</li>
                              <li>• Corps entier : mouvements longs sur membres, circulaires sur articulations (10 min)</li>
                              <li>• Pieds : massage appuyé plante + orteils (3 min)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="journee" className="bg-card/50 border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-lg font-semibold">
                      ☀️ Journée : Maintenir l'Équilibre
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="space-y-2 text-sm">
                        <li>• Pauses régulières toutes les 90 minutes</li>
                        <li>• Respirations profondes (Nadi Shodhana - respiration alternée)</li>
                        <li>• Boissons chaudes constamment (éviter le froid)</li>
                        <li>• Repas principal à midi (Agni au maximum)</li>
                        <li>• Marche digestive après le déjeuner (10-15 min)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="soir" className="bg-card/50 border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-lg font-semibold">
                      🌙 Soir : Le Rituel de Récupération
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="space-y-2 text-sm">
                        <li>• Dîner léger avant 19h30</li>
                        <li>• Pas d'écrans après 21h</li>
                        <li>• Lait d'or (golden milk) : lait chaud + curcuma + gingembre + miel</li>
                        <li>• Massage des pieds à l'huile de sésame</li>
                        <li>• Méditation ou lecture inspirante</li>
                        <li>• Coucher 22h-22h30 maximum</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Chapitre 4: Nutrition */}
              <section id="nutrition" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-primary" />
                  Chapitre 4 : Nutrition Ayurvédique d'Hiver
                </h2>

                <div className="space-y-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">🍳 Petit-déjeuner Idéal</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Option 1 : Porridge Ayurvédique</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Flocons d'avoine cuits au lait végétal</li>
                          <li>• Ghee (1 cuillère à café)</li>
                          <li>• Cannelle, cardamome, gingembre</li>
                          <li>• Fruits cuits (pomme, poire)</li>
                          <li>• Noix, amandes trempées</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Option 2 : Upma (semoule épicée)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Semoule de blé grillée</li>
                          <li>• Légumes de saison sautés</li>
                          <li>• Graines de moutarde, curcuma</li>
                          <li>• Ghee et noix de cajou</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">🍲 Déjeuner : Le Repas Principal</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li><strong>Base :</strong> Céréales complètes (riz basmati, quinoa, millet)</li>
                      <li><strong>Protéines :</strong> Légumineuses bien cuites (lentilles, pois chiches) ou poisson</li>
                      <li><strong>Légumes :</strong> Cuits, de saison (courges, carottes, betteraves, choux)</li>
                      <li><strong>Graisses :</strong> Ghee, huile de sésame</li>
                      <li><strong>Épices :</strong> Cumin, coriandre, gingembre, asa foetida</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">🥣 Dîner : Léger et Réconfortant</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Soupe de légumes épaisse aux épices</li>
                      <li>• Kitchari simplifié (riz + lentilles)</li>
                      <li>• Légumes vapeur avec sauce tahini</li>
                      <li>• À éviter : crudités, yaourt, fromage froid</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">🌿 Supplémentation Stratégique</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Immunité</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Chyawanprash (1 c.à.c/jour)</li>
                          <li>• Tulsi (basilic sacré)</li>
                          <li>• Ashwagandha</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Digestion</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Triphala (soir)</li>
                          <li>• Gingembre frais</li>
                          <li>• Hingvastak churna</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Système nerveux</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Brahmi</li>
                          <li>• Jatamansi</li>
                          <li>• Shankhpushpi</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Chapitre 5: Protocoles d'Urgence */}
              <section id="protocoles-urgence" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Chapitre 5 : Protocoles d'Urgence Vata
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">😰 Crise d'Anxiété</h3>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Respiration 4-7-8 (inspirer 4s, retenir 7s, expirer 8s)</li>
                      <li>Huile de sésame tiède sur le front et les tempes</li>
                      <li>Ancrage : pieds nus sur le sol, visualiser des racines</li>
                      <li>Tisane : camomille + ashwagandha</li>
                      <li>Mantra : "Je suis en sécurité, je suis ancré(e)"</li>
                    </ol>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">😴 Insomnie</h3>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Massage des pieds au ghee (10 min)</li>
                      <li>Lait chaud + muscade + cardamome</li>
                      <li>Huile de brahmi sur le crâne</li>
                      <li>Yoga Nidra guidé (20 min)</li>
                      <li>Chambre à 18°C, obscurité totale</li>
                    </ol>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">🤧 Baisse Immunité</h3>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Chyawanprash : doubler la dose (2 c.à.c)</li>
                      <li>Décoction : tulsi + gingembre + miel</li>
                      <li>Repos absolu (journée entière)</li>
                      <li>Bouillon d'os ou légumes épicé</li>
                      <li>Nasya à l'huile Anu Taila</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Chapitre 6: Adaptation par Dosha */}
              <section id="adaptation-dosha" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-primary" />
                  Chapitre 6 : Adaptation selon Votre Dosha
                </h2>

                <Tabs defaultValue="vata" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="vata">Vata</TabsTrigger>
                    <TabsTrigger value="pitta">Pitta</TabsTrigger>
                    <TabsTrigger value="kapha">Kapha</TabsTrigger>
                  </TabsList>

                  <TabsContent value="vata" className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Constitution Vata</h3>
                    <p className="text-muted-foreground mb-4">
                      Vous êtes le plus vulnérable en hiver. Suivez ce guide à la lettre !
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Priorités Absolues</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Abhyanga quotidien (non négociable)</li>
                          <li>• Repas chauds, réguliers, consistants</li>
                          <li>• Sommeil 22h-6h30 (8h minimum)</li>
                          <li>• Éviter tout excès de mouvement/voyage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Risques Spécifiques</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Anxiété et insomnie</li>
                          <li>• Constipation chronique</li>
                          <li>• Douleurs articulaires</li>
                          <li>• Épuisement nerveux</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pitta" className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Constitution Pitta</h3>
                    <p className="text-muted-foreground mb-4">
                      L'hiver vous convient plutôt bien, mais attention aux excès !
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Adaptations</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Modérer les épices très chaudes</li>
                          <li>• Maintenir activité physique régulière</li>
                          <li>• Huile de coco possible (plutôt que sésame)</li>
                          <li>• Ne pas sauter de repas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">À Surveiller</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Irritabilité par manque de lumière</li>
                          <li>• Tendance à trop manger (Agni fort)</li>
                          <li>• Frustration si confiné</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="kapha" className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Constitution Kapha</h3>
                    <p className="text-muted-foreground mb-4">
                      L'hiver peut aggraver votre tendance à la stagnation. Restez actif !
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Stratégies Clés</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Exercice quotidien (même 20 min)</li>
                          <li>• Épices réchauffantes et piquantes</li>
                          <li>• Éviter les excès de sucre et gras</li>
                          <li>• Lever tôt (6h maximum)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Risques à Éviter</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Léthargie, dépression hivernale</li>
                          <li>• Prise de poids</li>
                          <li>• Congestion respiratoire</li>
                          <li>• Attachement au confort excessif</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Chapitre 7: Programme 90 Jours */}
              <section id="programme-90-jours" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6">
                  Chapitre 7 : Programme de Transformation 90 Jours
                </h2>

                <div className="space-y-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">📅 Mois 1 : Fondations (Décembre)</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✅ Installer la routine matinale (gratte-langue, eau chaude)</li>
                      <li>✅ Abhyanga 3x/semaine minimum</li>
                      <li>✅ Éliminer un aliment Vata-aggravant (café, sucre blanc, ou crudités)</li>
                      <li>✅ Coucher avant 22h30</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">📅 Mois 2 : Approfondissement (Janvier)</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✅ Abhyanga quotidien</li>
                      <li>✅ Méditation 10 min/jour</li>
                      <li>✅ Introduire Chyawanprash et/ou Triphala</li>
                      <li>✅ Repas 100% chauds et cuits</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">📅 Mois 3 : Maîtrise (Février)</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✅ Routine complète automatisée</li>
                      <li>✅ Méditation 20 min/jour</li>
                      <li>✅ Préparer la transition printemps</li>
                      <li>✅ Bilan : comparer vos symptômes Vata avant/après</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Chapitre 8: Outils Pratiques */}
              <section id="outils-pratiques" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6">
                  Chapitre 8 : Outils & Ressources Pratiques
                </h2>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">🛒 Liste de Courses Ayurvédique d'Hiver</h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Épices Essentielles</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Gingembre (frais et poudre)</li>
                        <li>• Cannelle</li>
                        <li>• Cardamome</li>
                        <li>• Cumin</li>
                        <li>• Curcuma</li>
                        <li>• Asa foetida (hing)</li>
                        <li>• Muscade</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">Huiles</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Huile de sésame bio</li>
                        <li>• Ghee (beurre clarifié)</li>
                        <li>• Huile Mahanarayan</li>
                        <li>• Huile Anu Taila (nasya)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">Plantes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ashwagandha</li>
                        <li>• Brahmi</li>
                        <li>• Tulsi (basilic sacré)</li>
                        <li>• Shatavari</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">Compléments</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Chyawanprash</li>
                        <li>• Triphala</li>
                        <li>• Hingvastak churna</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="mb-12">
                <h2 className="text-3xl font-serif text-foreground mb-6">Conclusion : Votre Hiver Transformé</h2>
                
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    L'hiver n'est pas une épreuve à subir, mais une saison à embrasser. Avec les outils de l'Ayurvéda, 
                    vous pouvez transformer ces mois sombres en période de régénération profonde.
                  </p>
                  <p className="text-muted-foreground">
                    Rappelez-vous : chaque petit geste compte. Commencez par UN changement aujourd'hui. 
                    L'Abhyanga du matin ? Le gratte-langue ? Le coucher à 22h ? Choisissez et engagez-vous.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-lg font-medium text-foreground mb-4">
                    Besoin d'un accompagnement personnalisé pour votre hiver ?
                  </p>
                  <Link to="/bilan-de-sante">
                    <Button size="lg" className="mr-4">
                      Prendre rendez-vous
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t border-border pt-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Articles Connexes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/colon-irritable-ayurveda" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                    <h4 className="font-medium text-foreground mb-2">Syndrome du Côlon Irritable</h4>
                    <p className="text-sm text-muted-foreground">Comprendre et traiter Grahani selon l'Ayurvéda</p>
                  </Link>
                  <Link to="/blog/incompatibilites-alimentaires-ayurveda" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                    <h4 className="font-medium text-foreground mb-2">Incompatibilités Alimentaires</h4>
                    <p className="text-sm text-muted-foreground">Virodha Ahara : quand nos assiettes nous empoisonnent</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
          aria-label="Retour en haut"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </Layout>
  );
};

export default HiverAyurveda;
