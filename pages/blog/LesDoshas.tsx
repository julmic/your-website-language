import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, Tag, ChevronUp, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DoshaQuiz } from "@/components/blog/DoshaQuiz";
import heroImage from "@/assets/blog/doshas-hero.webp";

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "quest-ce-quun-dosha", title: "Qu'est-ce qu'un Dosha ?" },
  { id: "vata", title: "Vata : L'Énergie du Mouvement" },
  { id: "pitta", title: "Pitta : L'Énergie de la Transformation" },
  { id: "kapha", title: "Kapha : L'Énergie de la Structure" },
  { id: "combinaisons", title: "Les Combinaisons de Doshas" },
  { id: "prakriti-vikriti", title: "Prakriti vs Vikriti" },
  { id: "quiz", title: "Quiz : Découvrez votre Dosha" },
  { id: "conclusion", title: "Points Clés à Retenir" },
];

const LesDoshas = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 bg-primary/20 text-primary rounded-full">
                    <Tag className="h-3 w-3" />
                    Guides Débutants
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                    <Clock className="h-3 w-3" />
                    12 min de lecture
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                  Les 3 Doshas de l'Ayurvéda
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Le guide complet pour comprendre <strong className="text-foreground">Vata, Pitta et Kapha</strong>
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Patrick Villette</p>
                      <p className="text-xs">Vaidya, Expert Ayurvédique</p>
                    </div>
                  </div>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Décembre 2024
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img 
                    src={heroImage} 
                    alt="Les doshas en Ayurvéda - Vata, Pitta, Kapha" 
                    className="w-full h-full object-contain bg-white p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">
              {/* Sidebar - Table of Contents */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Sommaire</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Article Content */}
              <article className="prose prose-lg dark:prose-invert max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">🌿</span> Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vous avez entendu parler des doshas mais vous ne savez pas exactement ce que c'est ? Vous êtes au bon endroit ! Dans ce guide complet, vous allez découvrir en profondeur les <strong className="text-foreground">3 doshas de l'Ayurvéda</strong> (Vata, Pitta, Kapha) et comprendre pourquoi ils sont la clé de votre bien-être.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Que vous soyez stressé, fatigué, ou simplement curieux de mieux vous connaître, ce guide vous aidera à identifier votre constitution unique et à adapter votre mode de vie en conséquence.
                  </p>
                </section>

                {/* Qu'est-ce qu'un Dosha */}
                <section id="quest-ce-quun-dosha" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">🔍</span> Qu'est-ce qu'un Dosha ?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    En Ayurvéda, les doshas sont <strong className="text-foreground">trois forces bioénergétiques fondamentales</strong> qui régissent toutes les fonctions de votre corps et de votre esprit. Le mot « dosha » vient du sanskrit et signifie littéralement « ce qui change » ou « ce qui peut causer des problèmes ».
                  </p>
                  
                  <div className="bg-secondary/30 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-4">Les 5 éléments de la nature (Panchamahabhuta)</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-2xl mb-2 block">🌬️</span>
                        <h4 className="font-medium text-foreground">Éther (Akasha)</h4>
                        <p className="text-sm text-muted-foreground">L'espace, la légèreté</p>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-2xl mb-2 block">💨</span>
                        <h4 className="font-medium text-foreground">Air (Vayu)</h4>
                        <p className="text-sm text-muted-foreground">Le mouvement, la mobilité</p>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-2xl mb-2 block">🔥</span>
                        <h4 className="font-medium text-foreground">Feu (Agni)</h4>
                        <p className="text-sm text-muted-foreground">La transformation, la chaleur</p>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-2xl mb-2 block">💧</span>
                        <h4 className="font-medium text-foreground">Eau (Jala)</h4>
                        <p className="text-sm text-muted-foreground">La fluidité, la cohésion</p>
                      </div>
                      <div className="text-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-2xl mb-2 block">🪨</span>
                        <h4 className="font-medium text-foreground">Terre (Prithvi)</h4>
                        <p className="text-sm text-muted-foreground">La structure, la solidité</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                    <h4 className="font-semibold text-foreground mb-2">💡 Point Important</h4>
                    <p className="text-muted-foreground">
                      Chaque personne possède les trois doshas, mais dans des proportions différentes. Cette combinaison unique détermine votre <strong className="text-foreground">Prakriti</strong> (constitution de naissance) et influence votre apparence physique, votre digestion, votre énergie, vos émotions et votre façon de réagir au stress.
                    </p>
                  </div>
                </section>

                {/* Les 3 Doshas en Détail */}
                <section id="vata" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">🌀</span> Les 3 Doshas Expliqués en Détail
                  </h2>

                  <Tabs defaultValue="vata" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="vata" className="gap-2">💨 Vata</TabsTrigger>
                      <TabsTrigger value="pitta" className="gap-2">🔥 Pitta</TabsTrigger>
                      <TabsTrigger value="kapha" className="gap-2">🌊 Kapha</TabsTrigger>
                    </TabsList>

                    {/* VATA */}
                    <TabsContent value="vata">
                      <div className="bg-gradient-to-br from-cyan-500/10 to-sky-500/10 rounded-2xl p-6 md:p-8 border border-cyan-500/20">
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                          🌬️ VATA : L'Énergie du Mouvement
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">📘 Composition</h4>
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Vata</strong> est composé des éléments <strong className="text-foreground">Air + Éther (espace)</strong>. C'est le dosha du mouvement, de la légèreté et du changement.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">🎯 Fonctions dans le corps</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>La respiration et la circulation de l'air</li>
                            <li>Les battements du cœur et la circulation sanguine</li>
                            <li>L'influx nerveux et la communication cellulaire</li>
                            <li>Le mouvement des muscles et des articulations</li>
                            <li>L'élimination (urine, selles, transpiration)</li>
                            <li>La créativité et l'enthousiasme mental</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-card/50 rounded-xl p-5 border border-border">
                            <h4 className="font-semibold text-foreground mb-3">👤 Caractéristiques Physiques</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Morphologie mince et élancée</li>
                              <li>• Ossature fine et légère</li>
                              <li>• Peau sèche, fine, froide au toucher</li>
                              <li>• Cheveux secs, fins, parfois crépus</li>
                              <li>• Veines et tendons apparents</li>
                              <li>• Mains et pieds souvent froids</li>
                              <li>• Digestion irrégulière (ballonnements, gaz)</li>
                              <li>• Tendance à la constipation</li>
                            </ul>
                          </div>
                          <div className="bg-card/50 rounded-xl p-5 border border-border">
                            <h4 className="font-semibold text-foreground mb-3">🧠 Traits de Personnalité</h4>
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-green-500 mb-1">Quand Vata est équilibré :</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>✨ Créatif, imaginatif, plein d'idées</li>
                                  <li>✨ Esprit vif, apprend rapidement</li>
                                  <li>✨ Enthousiaste et sociable</li>
                                  <li>✨ Adaptable et flexible</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-amber-500 mb-1">Quand Vata est déséquilibré :</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>⚠️ Anxiété, inquiétude, peur</li>
                                  <li>⚠️ Mental agité, pensées en boucle</li>
                                  <li>⚠️ Insomnie ou sommeil léger</li>
                                  <li>⚠️ Fatigue nerveuse, épuisement</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
                          <h4 className="font-semibold text-foreground mb-3">🍽️ Conseils pour Équilibrer Vata</h4>
                          <p className="text-sm text-muted-foreground mb-3"><strong>Principe clé :</strong> Apporter stabilité, chaleur et douceur</p>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>🍲 Privilégier les aliments chauds, cuits, onctueux (soupes, ragoûts)</li>
                            <li>🥑 Ajouter des bonnes graisses (ghee, huile de sésame, avocat)</li>
                            <li>🧘‍♀️ Établir une routine quotidienne stable</li>
                            <li>🛌 Se coucher tôt (avant 22h)</li>
                            <li>💆‍♀️ Pratiquer des auto-massages à l'huile tiède</li>
                            <li>☕ Éviter les stimulants (café, thé fort, alcool)</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    {/* PITTA */}
                    <TabsContent value="pitta" id="pitta">
                      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 md:p-8 border border-orange-500/20">
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                          🔥 PITTA : L'Énergie de la Transformation
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">📘 Composition</h4>
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Pitta</strong> est composé des éléments <strong className="text-foreground">Feu + Eau</strong>. C'est le dosha de la transformation, de la digestion et du métabolisme.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">🎯 Fonctions dans le corps</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>La digestion des aliments (feu digestif = Agni)</li>
                            <li>Le métabolisme cellulaire</li>
                            <li>La régulation de la température corporelle</li>
                            <li>La vision et la perception</li>
                            <li>L'intelligence et la compréhension</li>
                            <li>Le courage et la détermination</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-card/50 rounded-xl p-5 border border-border">
                            <h4 className="font-semibold text-foreground mb-3">👤 Caractéristiques Physiques</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Morphologie moyenne, athlétique</li>
                              <li>• Musculature développée</li>
                              <li>• Peau chaude, douce, sujette aux rougeurs</li>
                              <li>• Cheveux fins, tendance aux cheveux blancs précoces</li>
                              <li>• Transpiration abondante</li>
                              <li>• Appétit fort et régulier</li>
                              <li>• Digestion puissante</li>
                              <li>• Intolérance à la chaleur</li>
                            </ul>
                          </div>
                          <div className="bg-card/50 rounded-xl p-5 border border-border">
                            <h4 className="font-semibold text-foreground mb-3">🧠 Traits de Personnalité</h4>
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-green-500 mb-1">Quand Pitta est équilibré :</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>✨ Intelligent, organisé, structuré</li>
                                  <li>✨ Excellent orateur et leader naturel</li>
                                  <li>✨ Confiant et déterminé</li>
                                  <li>✨ Courageux et audacieux</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-amber-500 mb-1">Quand Pitta est déséquilibré :</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>⚠️ Colère, irritabilité, impatience</li>
                                  <li>⚠️ Critique envers soi-même et les autres</li>
                                  <li>⚠️ Perfectionnisme excessif</li>
                                  <li>⚠️ Burn-out par surmenage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
                          <h4 className="font-semibold text-foreground mb-3">🍽️ Conseils pour Équilibrer Pitta</h4>
                          <p className="text-sm text-muted-foreground mb-3"><strong>Principe clé :</strong> Apporter fraîcheur, douceur et modération</p>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>🥗 Privilégier les aliments frais, crus ou tièdes</li>
                            <li>🥒 Favoriser les saveurs douces, amères et astringentes</li>
                            <li>🌿 Ajouter des herbes rafraîchissantes (coriandre, menthe, fenouil)</li>
                            <li>❄️ Éviter les aliments épicés, acides, frits et salés</li>
                            <li>🧘‍♀️ Pratiquer le yoga doux, la natation</li>
                            <li>🏞️ Passer du temps dans la nature, près de l'eau</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    {/* KAPHA */}
                    <TabsContent value="kapha" id="kapha">
                      <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 md:p-8 border border-emerald-500/20">
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                          🌍 KAPHA : L'Énergie de la Structure
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">📘 Composition</h4>
                          <p className="text-muted-foreground">
                            <strong className="text-foreground">Kapha</strong> est composé des éléments <strong className="text-foreground">Terre + Eau</strong>. C'est le dosha de la stabilité, de la cohésion et de la structure.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">🎯 Fonctions dans le corps</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>La formation des tissus (muscles, graisse, os)</li>
                            <li>La lubrification des articulations</li>
                            <li>L'hydratation de la peau</li>
                            <li>L'immunité et la résistance aux maladies</li>
                            <li>La stabilité émotionnelle</li>
                            <li>La mémoire à long terme</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-card/50 rounded-xl p-5 border border-border">
                            <h4 className="font-semibold text-foreground mb-3">👤 Caractéristiques Physiques</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Morphologie robuste, solide</li>
                              <li>• Ossature large et lourde</li>
                              <li>• Peau épaisse, douce, hydratée</li>
                              <li>• Cheveux épais, brillants, ondulés</li>
                              <li>• Yeux grands et expressifs</li>
                              <li>• Prise de poids facile</li>
                              <li>• Digestion lente</li>
                              <li>• Sommeil profond et long</li>
                            </ul>
                          </div>
                          <div className="bg-card/50 rounded-xl p-5 border border-border">
                            <h4 className="font-semibold text-foreground mb-3">🧠 Traits de Personnalité</h4>
                            <div className="space-y-3">
                              <div>
                                <p className="text-sm font-medium text-green-500 mb-1">Quand Kapha est équilibré :</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>✨ Calme, patient et stable</li>
                                  <li>✨ Bienveillant et aimant</li>
                                  <li>✨ Loyal et fiable</li>
                                  <li>✨ Mémoire excellente</li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-amber-500 mb-1">Quand Kapha est déséquilibré :</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  <li>⚠️ Léthargie, paresse</li>
                                  <li>⚠️ Attachement excessif, possessivité</li>
                                  <li>⚠️ Dépression, tristesse</li>
                                  <li>⚠️ Congestion, rétention d'eau</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
                          <h4 className="font-semibold text-foreground mb-3">🍽️ Conseils pour Équilibrer Kapha</h4>
                          <p className="text-sm text-muted-foreground mb-3"><strong>Principe clé :</strong> Apporter légèreté, stimulation et mouvement</p>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>🌶️ Privilégier les aliments chauds, légers, épicés</li>
                            <li>🥦 Favoriser les légumes verts amers et astringents</li>
                            <li>🫚 Ajouter des épices stimulantes (gingembre, poivre, curcuma)</li>
                            <li>🏃‍♀️ Faire de l'exercice vigoureux quotidiennement</li>
                            <li>☀️ Se lever tôt (avant 6h)</li>
                            <li>❌ Éviter les siestes et l'excès de sommeil</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </section>

                {/* Combinaisons de Doshas */}
                <section id="combinaisons" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">⚖️</span> Les Combinaisons de Doshas
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    La plupart des gens ne sont pas dominés par un seul dosha, mais par une <strong className="text-foreground">combinaison de deux (bi-doshique)</strong> ou parfois des trois (tri-doshique).
                  </p>

                  <div className="bg-secondary/30 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-foreground mb-4">Les 7 Types de Constitution</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      <div className="bg-card p-3 rounded-lg border border-border text-center">
                        <span className="text-sm font-medium">1. Vata pur</span>
                        <p className="text-xs text-muted-foreground">(rare)</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border text-center">
                        <span className="text-sm font-medium">2. Pitta pur</span>
                        <p className="text-xs text-muted-foreground">(rare)</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border text-center">
                        <span className="text-sm font-medium">3. Kapha pur</span>
                        <p className="text-xs text-muted-foreground">(rare)</p>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border text-center">
                        <span className="text-sm font-medium">4. Vata-Pitta</span>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border text-center">
                        <span className="text-sm font-medium">5. Vata-Kapha</span>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border text-center">
                        <span className="text-sm font-medium">6. Pitta-Kapha</span>
                      </div>
                      <div className="bg-card p-3 rounded-lg border border-border text-center sm:col-span-2 md:col-span-1">
                        <span className="text-sm font-medium">7. Vata-Pitta-Kapha</span>
                        <p className="text-xs text-muted-foreground">(tri-doshique, très rare)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                    <h4 className="font-semibold text-foreground mb-2">💡 Exemple Vata-Pitta</h4>
                    <p className="text-muted-foreground">
                      Une personne Vata-Pitta aura la créativité et l'enthousiasme de Vata, combinés à l'intelligence et la détermination de Pitta. Elle devra veiller à ne pas tomber dans l'épuisement nerveux (Vata) ou le burn-out (Pitta).
                    </p>
                  </div>
                </section>

                {/* Prakriti vs Vikriti */}
                <section id="prakriti-vikriti" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">🔄</span> Prakriti vs Vikriti
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Il est essentiel de comprendre la différence entre ces deux concepts fondamentaux :
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        🧬 PRAKRITI
                      </h3>
                      <p className="text-lg font-medium text-foreground mb-3">Votre constitution de naissance</p>
                      <p className="text-muted-foreground">
                        C'est votre nature originelle, déterminée au moment de la conception. Elle ne change jamais durant votre vie. C'est votre « état idéal » d'équilibre.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/20">
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        ⚠️ VIKRITI
                      </h3>
                      <p className="text-lg font-medium text-foreground mb-3">Votre état actuel de déséquilibre</p>
                      <p className="text-muted-foreground">
                        C'est la manifestation de vos doshas aujourd'hui, influencée par votre alimentation, votre stress, la saison, etc. C'est ce que vous devez rééquilibrer.
                      </p>
                    </div>
                  </div>

                  <div className="bg-secondary/30 border border-border p-6 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-3">📌 Exemple Concret</h4>
                    <p className="text-muted-foreground">
                      Marie est de constitution <strong className="text-foreground">Kapha-Pitta</strong> (Prakriti). Mais suite à une période de stress intense au travail, elle développe de l'anxiété, de l'insomnie et des problèmes digestifs. Son <strong className="text-foreground">Vata s'est aggravé</strong> (Vikriti). Pour retrouver l'équilibre, elle devra calmer Vata (routine, chaleur, ancrage) tout en respectant sa nature Kapha-Pitta.
                    </p>
                  </div>
                </section>

                {/* Quiz Section */}
                <section id="quiz" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">🧪</span> Quiz : Découvrez Votre Constitution Ayurvédique
                  </h2>
                  <DoshaQuiz />
                </section>

                {/* Points Clés */}
                <section id="conclusion" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">✨</span> Points Clés à Retenir
                  </h2>
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✅</span>
                        <span className="text-muted-foreground">Les doshas sont les 3 énergies vitales qui régissent votre corps et votre esprit</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✅</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Vata</strong> = Air + Éther (Mouvement, Créativité, Anxiété)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✅</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Pitta</strong> = Feu + Eau (Transformation, Intelligence, Colère)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✅</span>
                        <span className="text-muted-foreground"><strong className="text-foreground">Kapha</strong> = Terre + Eau (Structure, Stabilité, Léthargie)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✅</span>
                        <span className="text-muted-foreground">Chaque personne a une combinaison unique de doshas (Prakriti)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✅</span>
                        <span className="text-muted-foreground">Les déséquilibres (Vikriti) peuvent être corrigés par l'alimentation, le mode de vie et les soins ayurvédiques</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">✅</span>
                        <span className="text-muted-foreground">Connaître votre dosha dominant vous permet de personnaliser votre routine pour une santé optimale</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Related Articles */}
                <section className="mb-12">
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                    Articles Similaires
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link 
                      to="/blog/colon-irritable-ayurveda" 
                      className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                    >
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        Le Syndrome du Côlon Irritable et l'Ayurvéda
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Comprendre et apaiser Grahani Dosha avec la sagesse millénaire de l'Ayurvéda.
                      </p>
                    </Link>
                    <Link 
                      to="/blog/osteoporose-ayurveda" 
                      className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all"
                    >
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        Ostéoporose et Ayurvéda
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Reconstruire ses os naturellement avec les protocoles ayurvédiques.
                      </p>
                    </Link>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Retour en haut"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </Layout>
  );
};

export default LesDoshas;
