import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ChevronUp, Moon, Wind, Flame, Droplets } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/blog/sommeil-ayurveda-hero.png";

const SommeilAyurveda = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "comprendre-sommeil", title: "Comprendre le Sommeil" },
    { id: "types-insomnie", title: "3 Types d'Insomnie" },
    { id: "solutions", title: "10 Solutions Naturelles" },
    { id: "routine-soir", title: "Routine du Soir" },
    { id: "environnement", title: "Environnement Optimal" },
    { id: "protocole-sos", title: "Protocole SOS" },
    { id: "faq", title: "FAQ" },
    { id: "programme-21-jours", title: "Programme 21 Jours" },
  ];

  return (
    <Layout>
      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Sommeil
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Insomnie & Troubles du Sommeil
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Les Solutions Naturelles de l'Ayurvéda pour Retrouver un Sommeil Réparateur
            </p>
            
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15 décembre 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>18 min de lecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Table des matières</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm py-1 px-3 rounded transition-colors ${
                        activeSection === item.id
                          ? "bg-primary/20 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                  <p className="text-xl text-foreground mb-4">
                    <Moon className="inline w-6 h-6 text-primary mr-2" />
                    <strong>1 Français sur 3</strong> souffre de troubles du sommeil.
                  </p>
                  <p className="text-muted-foreground">
                    Découvrez comment l'Ayurvéda peut vous aider, naturellement.
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Vous tournez dans votre lit pendant des heures, incapable de trouver le sommeil ?
                    Vous vous réveillez à 3h du matin avec un mental qui s'emballe ?
                    Vous dormez 8h mais vous réveillez épuisé(e) ?
                  </p>
                  <p>
                    🌿 Vous n'êtes pas seul(e). Et surtout, <strong>il existe des solutions naturelles</strong>.
                  </p>
                  <p>
                    L'Ayurvéda, médecine millénaire indienne, considère le <strong>sommeil comme l'un des 3 piliers de la santé</strong> (avec l'alimentation et la gestion de l'énergie vitale).
                    Contrairement aux somnifères qui masquent le problème, l'approche ayurvédique <strong>identifie la cause racine</strong> de vos troubles du sommeil et propose des <strong>solutions personnalisées</strong> selon votre constitution.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                    <span className="text-3xl mb-2 block">🔍</span>
                    <p className="font-medium text-foreground">3 types d'insomnie selon l'Ayurvéda</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                    <span className="text-3xl mb-2 block">🧘‍♀️</span>
                    <p className="font-medium text-foreground">10 solutions naturelles efficaces</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                    <span className="text-3xl mb-2 block">🌙</span>
                    <p className="font-medium text-foreground">Une routine du soir complète</p>
                  </div>
                </div>
              </section>

              {/* Comprendre le Sommeil */}
              <section id="comprendre-sommeil" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  🌙 Comprendre le Sommeil selon l'Ayurvéda
                </h2>

                <h3 className="text-2xl font-semibold text-foreground mb-4">Les 3 Piliers de la Santé</h3>
                <p className="text-muted-foreground mb-6">
                  En Ayurvéda, la santé repose sur 3 piliers fondamentaux appelés <strong>« Trayopasthamba »</strong> :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-foreground mb-2">🍽️ AHARA</h4>
                    <p className="text-sm text-foreground font-medium mb-1">Alimentation</p>
                    <p className="text-sm text-muted-foreground">Nourriture adaptée à votre constitution, digestion optimale, horaires réguliers</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-foreground mb-2">😴 NIDRA</h4>
                    <p className="text-sm text-foreground font-medium mb-1">Sommeil</p>
                    <p className="text-sm text-muted-foreground">Sommeil profond et réparateur, aligné avec les cycles naturels</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-foreground mb-2">💫 BRAHMACHARYA</h4>
                    <p className="text-sm text-foreground font-medium mb-1">Énergie vitale</p>
                    <p className="text-sm text-muted-foreground">Gestion consciente de l'énergie sexuelle et créative</p>
                  </div>
                </div>

                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-8">
                  <p className="text-foreground">
                    💡 Si l'un de ces 3 piliers est déséquilibré, <strong>toute votre santé en pâtit</strong>.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">⏰ Les Cycles Naturels du Sommeil</h3>
                <p className="text-muted-foreground mb-6">
                  L'Ayurvéda découpe la journée en <strong>6 périodes de 4 heures</strong>, chacune dominée par un dosha :
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left text-foreground">🕐 Horaire</th>
                        <th className="border border-border p-3 text-left text-foreground">🌊 Dosha</th>
                        <th className="border border-border p-3 text-left text-foreground">💫 Effets</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="border border-border p-3 font-medium">6h – 10h</td>
                        <td className="border border-border p-3"><span className="text-blue-400">Kapha</span> - Lourdeur</td>
                        <td className="border border-border p-3">Réveil difficile si vous dormez trop tard, inertie</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">10h – 14h</td>
                        <td className="border border-border p-3"><span className="text-red-400">Pitta</span> - Chaleur</td>
                        <td className="border border-border p-3">Pic de digestion, énergie mentale maximale</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">14h – 18h</td>
                        <td className="border border-border p-3"><span className="text-purple-400">Vata</span> - Mouvement</td>
                        <td className="border border-border p-3">Énergie créative, agitation possible</td>
                      </tr>
                      <tr className="bg-primary/10">
                        <td className="border border-border p-3 font-medium">18h – 22h</td>
                        <td className="border border-border p-3"><span className="text-blue-400">Kapha</span> - Apaisement</td>
                        <td className="border border-border p-3"><strong>⭐ MEILLEUR MOMENT POUR SE COUCHER</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">22h – 2h</td>
                        <td className="border border-border p-3"><span className="text-red-400">Pitta</span> - Détox</td>
                        <td className="border border-border p-3">Régénération du foie, métabolisme cellulaire</td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="border border-border p-3 font-medium">2h – 6h</td>
                        <td className="border border-border p-3"><span className="text-purple-400">Vata</span> - Éveil</td>
                        <td className="border border-border p-3">Réveil naturel, méditation profonde</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-5">
                  <p className="text-foreground">
                    🎯 <strong>RÈGLE D'OR :</strong> Se coucher <strong>avant 22h</strong> permet de profiter de la phase Kapha apaisante et d'être endormi avant la montée d'énergie Pitta (22h-2h) qui peut causer l'insomnie.
                  </p>
                </div>
              </section>

              {/* Types d'Insomnie */}
              <section id="types-insomnie" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  🔍 Les 3 Types d'Insomnie selon les Doshas
                </h2>
                <p className="text-muted-foreground mb-8">
                  Votre type d'insomnie révèle <strong>quel dosha est déséquilibré</strong>. Identifiez le vôtre pour appliquer les bonnes solutions :
                </p>

                <Tabs defaultValue="vata" className="mb-8">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="vata" className="flex items-center gap-2">
                      <Wind className="w-4 h-4" /> Vata
                    </TabsTrigger>
                    <TabsTrigger value="pitta" className="flex items-center gap-2">
                      <Flame className="w-4 h-4" /> Pitta
                    </TabsTrigger>
                    <TabsTrigger value="kapha" className="flex items-center gap-2">
                      <Droplets className="w-4 h-4" /> Kapha
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="vata">
                    <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">💨 Insomnie VATA (Nerveuse)</h3>
                      <p className="text-muted-foreground mb-4">Difficulté à s'endormir, mental qui tourne en boucle, anxiété nocturne</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">🚨 Symptômes</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Réveil entre 2h-6h du matin</li>
                            <li>• Pensées qui s'emballent au coucher</li>
                            <li>• Anxiété, inquiétude chronique</li>
                            <li>• Sommeil léger, réveils multiples</li>
                            <li>• Rêves nombreux et agités</li>
                            <li>• Besoin de bouger dans le lit</li>
                            <li>• Sensation de froid nocturne</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">🔥 Causes</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Stress, surmenage mental</li>
                            <li>• Horaires irréguliers</li>
                            <li>• Excès d'écrans le soir</li>
                            <li>• Alimentation froide/sèche</li>
                            <li>• Voyages fréquents</li>
                            <li>• Changements de vie importants</li>
                            <li>• Surstimulation sensorielle</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pitta">
                    <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">🔥 Insomnie PITTA (Métabolique)</h3>
                      <p className="text-muted-foreground mb-4">Réveil entre 22h-2h, chaleur excessive, mental critique et analytique</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">🚨 Symptômes</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Réveil entre 22h-2h (phase Pitta)</li>
                            <li>• Sensation de chaleur/transpiration</li>
                            <li>• Soif nocturne intense</li>
                            <li>• Faim la nuit</li>
                            <li>• Colère, irritabilité au réveil</li>
                            <li>• Rêves violents ou compétitifs</li>
                            <li>• Besoin de fraîcheur</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">🔥 Causes</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Repas épicés/acides le soir</li>
                            <li>• Travail mental intense</li>
                            <li>• Compétitivité excessive</li>
                            <li>• Frustration, colère refoulée</li>
                            <li>• Excès de caféine/alcool</li>
                            <li>• Exposition au soleil/chaleur</li>
                            <li>• Pression professionnelle</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="kapha">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">💧 Hypersomnie KAPHA (Lourdeur)</h3>
                      <p className="text-muted-foreground mb-4">Sommeil excessif mais non réparateur, léthargie, difficulté à se lever</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">🚨 Symptômes</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Besoin de +9h de sommeil</li>
                            <li>• Réveil difficile malgré longues nuits</li>
                            <li>• Fatigue persistante en journée</li>
                            <li>• Envie de siestes prolongées</li>
                            <li>• Rêves peu nombreux/oubliés</li>
                            <li>• Sommeil lourd, inertie matinale</li>
                            <li>• Congestion/mucus au réveil</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">🔥 Causes</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Alimentation lourde/grasse</li>
                            <li>• Manque d'exercice physique</li>
                            <li>• Dépression, mélancolie</li>
                            <li>• Excès de sucres/produits laitiers</li>
                            <li>• Sédentarité</li>
                            <li>• Temps froid/humide prolongé</li>
                            <li>• Manque de stimulation mentale</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Test rapide */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">🎯 TEST RAPIDE : Quel est votre type d'insomnie ?</h4>
                  <p className="text-muted-foreground mb-4">Cochez les affirmations qui vous correspondent :</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <label className="flex items-start gap-2 text-muted-foreground">
                      <input type="checkbox" className="mt-1 accent-purple-500" />
                      <span>Mon mental tourne en boucle le soir <span className="text-purple-400">(VATA)</span></span>
                    </label>
                    <label className="flex items-start gap-2 text-muted-foreground">
                      <input type="checkbox" className="mt-1 accent-purple-500" />
                      <span>Je me réveille entre 2h-6h avec anxiété <span className="text-purple-400">(VATA)</span></span>
                    </label>
                    <label className="flex items-start gap-2 text-muted-foreground">
                      <input type="checkbox" className="mt-1 accent-red-500" />
                      <span>J'ai chaud la nuit et transpire <span className="text-red-400">(PITTA)</span></span>
                    </label>
                    <label className="flex items-start gap-2 text-muted-foreground">
                      <input type="checkbox" className="mt-1 accent-red-500" />
                      <span>Je me réveille entre 22h-2h affamé ou irritable <span className="text-red-400">(PITTA)</span></span>
                    </label>
                    <label className="flex items-start gap-2 text-muted-foreground">
                      <input type="checkbox" className="mt-1 accent-blue-500" />
                      <span>Je dors 9h+ mais suis fatigué au réveil <span className="text-blue-400">(KAPHA)</span></span>
                    </label>
                    <label className="flex items-start gap-2 text-muted-foreground">
                      <input type="checkbox" className="mt-1 accent-blue-500" />
                      <span>J'ai du mal à me lever même après longue nuit <span className="text-blue-400">(KAPHA)</span></span>
                    </label>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>✅ Majorité <span className="text-purple-400">VATA</span> → Solutions anti-Vata</p>
                    <p>✅ Majorité <span className="text-red-400">PITTA</span> → Solutions anti-Pitta</p>
                    <p>✅ Majorité <span className="text-blue-400">KAPHA</span> → Solutions anti-Kapha</p>
                  </div>
                </div>
              </section>

              {/* Solutions */}
              <section id="solutions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  🌿 10 Solutions Naturelles Ayurvédiques
                </h2>
                <p className="text-muted-foreground mb-8">
                  Voici les 10 remèdes ayurvédiques les plus efficaces, <strong>classés par dosha</strong>. Appliquez ceux qui correspondent à votre type d'insomnie :
                </p>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="abhyanga" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">1️⃣ Abhyanga du Soir (Massage à l'Huile Chaude)</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> VATA principalement (aussi Pitta avec huile de coco)</p>
                      <p className="font-medium text-foreground mb-2">Comment :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Chauffez 50ml d'<strong>huile de sésame</strong> (Vata) ou <strong>huile de coco</strong> (Pitta)</li>
                        <li>Massez tout le corps avec mouvements lents et circulaires</li>
                        <li>Insistez sur : plante des pieds, cuir chevelu, bas du dos</li>
                        <li>Laissez pénétrer 20-30 min avant douche tiède</li>
                        <li><strong>Timing :</strong> 1-2h avant le coucher</li>
                      </ul>
                      <p className="text-sm bg-primary/10 p-3 rounded-lg">
                        ✨ <strong>Pourquoi ça marche :</strong> L'huile chaude apaise le système nerveux (Vata), ancre l'énergie, et prépare le corps au repos profond.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="golden-milk" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">2️⃣ Golden Milk (Lait d'Or au Curcuma)</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> VATA & PITTA</p>
                      <p className="font-medium text-foreground mb-2">📝 Recette :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>250ml de lait végétal (amande/avoine/coco)</li>
                        <li>1 c.à.c de curcuma en poudre</li>
                        <li>1/4 c.à.c de gingembre en poudre</li>
                        <li>1 pincée de poivre noir (active curcumine)</li>
                        <li>1/2 c.à.c de ghee (beurre clarifié)</li>
                        <li>1 c.à.c de miel (ajouté quand tiède, pas chaud)</li>
                        <li><strong>Option Pitta :</strong> Ajouter 1/4 c.à.c de cardamome</li>
                      </ul>
                      <p className="mb-3"><strong>⏰ Quand :</strong> 30-45 min avant le coucher</p>
                      <p className="text-sm bg-primary/10 p-3 rounded-lg">
                        ✨ <strong>Pourquoi ça marche :</strong> Le curcuma réduit l'inflammation, le lait chaud apaise Vata, le ghee nourrit les tissus nerveux.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shirodhara" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">3️⃣ Shirodhara (Filet d'Huile sur le Front)</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> VATA & PITTA (insomnie nerveuse/métabolique)</p>
                      <p className="mb-3">
                        💆‍♀️ Un filet continu d'huile médicinale tiède coulant sur le 3ème œil pendant 30-60 minutes.
                      </p>
                      <p className="font-medium text-foreground mb-2">✨ Bienfaits :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Calme instantané du mental (stop ruminations)</li>
                        <li>Régulation du système nerveux</li>
                        <li>Diminution anxiété/stress chronique</li>
                        <li>Amélioration qualité du sommeil dès la 1ère séance</li>
                        <li>Effet cumulatif sur 3-7 séances</li>
                      </ul>
                      <p className="text-sm">📍 <strong>Où faire :</strong> Centre de massages ayurvédiques certifié</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="padabhyanga" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">4️⃣ Padabhyanga (Massage des Pieds au Ghee)</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> TOUS LES DOSHAS (technique universelle)</p>
                      <p className="font-medium text-foreground mb-2">Comment :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Faites fondre 1 c.à.s de <strong>ghee</strong></li>
                        <li>Massez la plante des pieds avec mouvements circulaires pendant 5-10 min</li>
                        <li>Insistez sur le centre du pied (point Marma « cœur »)</li>
                        <li>Enfilez des chaussettes en coton pour la nuit</li>
                      </ul>
                      <p className="text-sm bg-primary/10 p-3 rounded-lg">
                        ⭐ <strong>Astuce :</strong> C'est LA technique la plus rapide (10 min) avec le meilleur rapport efficacité/temps !
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pranayama" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">5️⃣ Pranayama : Respiration Lunaire</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> PITTA & VATA (refroidit le système nerveux)</p>
                      <p className="font-medium text-foreground mb-2">🧘‍♀️ Technique (Chandra Bhedana) :</p>
                      <ol className="list-decimal pl-5 space-y-1 mb-3">
                        <li>Assis confortablement, colonne droite</li>
                        <li>Bouchez la narine DROITE avec le pouce droit</li>
                        <li>Inspirez lentement par la narine GAUCHE (4 temps)</li>
                        <li>Bouchez les 2 narines, retenez (4 temps)</li>
                        <li>Expirez par la narine DROITE (6 temps)</li>
                        <li>Répétez 10-15 cycles</li>
                      </ol>
                      <p className="text-sm bg-primary/10 p-3 rounded-lg">
                        ✨ La narine gauche active le système parasympathique (repos/digestion) et refroidit le mental surchauffé.
                      </p>
                      <p className="text-sm mt-2">⚠️ <strong>Contre-indication :</strong> Congestion nasale sévère, dépression</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="ashwagandha" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">6️⃣ Ashwagandha (Plante Adaptogène)</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> VATA & PITTA (stress chronique, insomnie nerveuse)</p>
                      <p className="mb-3">
                        🌿 Plante adaptogène #1 en Ayurvéda. Signifie littéralement <em>« qui donne la force du cheval »</em>.
                      </p>
                      <p className="font-medium text-foreground mb-2">💊 Posologie :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li><strong>Dose :</strong> 300-500mg d'extrait standardisé</li>
                        <li><strong>Quand :</strong> Le soir avec du lait chaud + miel</li>
                        <li><strong>Durée :</strong> Cure de 3-6 mois minimum</li>
                      </ul>
                      <p className="font-medium text-foreground mb-2">✨ Bienfaits prouvés :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>↓ Cortisol (hormone du stress) de 27%</li>
                        <li>↑ Qualité du sommeil de 72%</li>
                        <li>↓ Anxiété/dépression</li>
                      </ul>
                      <p className="text-sm">⚠️ <strong>Contre-indications :</strong> Grossesse, hyperthyroïdie, maladies auto-immunes</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="brahmi" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">7️⃣ Brahmi (Plante pour le Cerveau)</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> VATA & PITTA (mental agité, pensées en boucle)</p>
                      <p className="mb-3">
                        🌿 Brahmi (Bacopa monnieri) est LA plante ayurvédique pour la santé mentale et la clarté d'esprit.
                      </p>
                      <p className="font-medium text-foreground mb-2">💊 Posologie :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li><strong>Dose :</strong> 300mg d'extrait ou 1 c.à.c de poudre</li>
                        <li><strong>Quand :</strong> Matin + soir (avec ghee pour mieux absorber)</li>
                        <li><strong>Durée :</strong> Minimum 8-12 semaines</li>
                      </ul>
                      <p className="text-sm bg-primary/10 p-3 rounded-lg">
                        💡 <strong>Combo gagnant :</strong> Ashwagandha (soir) + Brahmi (matin+soir) = synergie puissante
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="aromatherapie" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">8️⃣ Aromathérapie Ayurvédique</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> TOUS LES DOSHAS (huiles essentielles adaptées)</p>
                      <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="border border-border p-2 text-left">Dosha</th>
                              <th className="border border-border p-2 text-left">Huiles</th>
                              <th className="border border-border p-2 text-left">Effet</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-border p-2 text-purple-400">VATA</td>
                              <td className="border border-border p-2">Lavande, Camomille, Bois de santal, Vétiver</td>
                              <td className="border border-border p-2">Ancrage, chaleur, apaisement</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2 text-red-400">PITTA</td>
                              <td className="border border-border p-2">Rose, Menthe poivrée, Ylang-ylang, Jasmin</td>
                              <td className="border border-border p-2">Rafraîchissement, apaisement mental</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2 text-blue-400">KAPHA</td>
                              <td className="border border-border p-2">Eucalyptus, Romarin, Citron, Gingembre</td>
                              <td className="border border-border p-2">Stimulation, clarté, légèreté</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="font-medium text-foreground mb-2">🛏️ Utilisation :</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Diffuseur :</strong> 30 min avant le coucher dans la chambre</li>
                        <li><strong>Oreiller :</strong> 2-3 gouttes sur un mouchoir sous l'oreiller</li>
                        <li><strong>Bain :</strong> 5-7 gouttes diluées dans du sel d'Epsom</li>
                        <li><strong>Massage :</strong> 5 gouttes dans 20ml d'huile de sésame</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="yoga-nidra" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">9️⃣ Yoga Nidra (Sommeil Yogique)</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> TOUS LES DOSHAS (technique universelle puissante)</p>
                      <p className="mb-3">
                        🧘‍♀️ Une méditation guidée en position allongée qui induit un état entre veille et sommeil. 
                        <strong> 45 min de Yoga Nidra = 3h de sommeil profond</strong> en terme de récupération.
                      </p>
                      <p className="font-medium text-foreground mb-2">📱 Comment pratiquer :</p>
                      <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Allongez-vous confortablement sur le dos</li>
                        <li>Utilisez une application/vidéo guidée (YouTube, Insight Timer)</li>
                        <li>Durée : 20-45 minutes</li>
                        <li>Timing : 30 min avant coucher OU si réveil nocturne</li>
                      </ul>
                      <p className="text-sm bg-primary/10 p-3 rounded-lg">
                        🎧 <strong>Recommandation :</strong> Cherchez « Yoga Nidra sommeil » sur YouTube – choisissez une voix qui vous apaise
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="diner" className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">🔟 Dîner Léger et Timing Optimal</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p className="mb-3"><strong>🎯 Pour :</strong> TOUS LES DOSHAS (principe fondamental)</p>
                      <p className="mb-4 text-foreground font-medium">
                        ⏰ Règle d'Or : Dîner <strong>3h minimum avant le coucher</strong> (idéalement 18h-19h).
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium text-foreground mb-2">🍽️ À FAVORISER le soir :</p>
                          <ul className="list-none space-y-1 text-sm">
                            <li>✅ Soupes chaudes, légumes cuits à la vapeur</li>
                            <li>✅ Riz basmati, quinoa (petite portion)</li>
                            <li>✅ Dal (lentilles) épicé modérément</li>
                            <li>✅ Ghee (facilite digestion)</li>
                            <li>✅ Tisanes digestives (fenouil, cumin)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">🚫 À ÉVITER le soir :</p>
                          <ul className="list-none space-y-1 text-sm">
                            <li>❌ Viandes rouges (digestion lourde)</li>
                            <li>❌ Fromages fermentés</li>
                            <li>❌ Aliments frits, gras</li>
                            <li>❌ Crudités (difficiles le soir)</li>
                            <li>❌ Café, thé, chocolat, alcool</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Routine du Soir */}
              <section id="routine-soir" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  🌙 Routine du Soir Ayurvédique Complète
                </h2>
                <p className="text-muted-foreground mb-8">
                  Voici un protocole complet pour <strong>transformer vos soirées</strong> et préparer un sommeil profond :
                </p>

                <Tabs defaultValue="ideale" className="mb-8">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="ideale">✨ Version Idéale (90 min)</TabsTrigger>
                    <TabsTrigger value="express">⚡ Version Express (30 min)</TabsTrigger>
                  </TabsList>

                  <TabsContent value="ideale">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <p className="text-muted-foreground mb-4">Pour ceux qui peuvent s'offrir du temps et veulent des résultats optimaux</p>
                      <div className="space-y-3">
                        {[
                          { time: "18h00", activity: "Dîner léger", detail: "Soupe + légumes cuits + petite portion de céréales" },
                          { time: "19h30", activity: "Marche digestive", detail: "15-20 min à l'extérieur, rythme tranquille" },
                          { time: "20h00", activity: "Abhyanga (massage)", detail: "Corps complet à l'huile de sésame chaude (20 min)" },
                          { time: "20h30", activity: "Douche/bain tiède", detail: "Eau tiède (pas chaude), savon doux, 10 min max" },
                          { time: "20h45", activity: "Golden Milk", detail: "Préparer et boire lentement, en conscience" },
                          { time: "21h00", activity: "Pranayama", detail: "Respiration lunaire (10-15 cycles)" },
                          { time: "21h15", activity: "Yoga Nidra", detail: "20-30 min guidé (application ou YouTube)" },
                          { time: "21h45", activity: "Padabhyanga", detail: "Massage pieds au ghee, chaussettes coton" },
                          { time: "22h00", activity: "🛏️ COUCHER", detail: "Chambre fraîche (18-20°C), obscurité totale" },
                        ].map((item, idx) => (
                          <div key={idx} className={`flex gap-4 p-3 rounded-lg ${idx === 8 ? 'bg-primary/20' : 'bg-muted/30'}`}>
                            <span className="font-mono text-sm text-primary font-medium w-16">{item.time}</span>
                            <div>
                              <span className="font-medium text-foreground">{item.activity}</span>
                              <p className="text-sm text-muted-foreground">{item.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="express">
                    <div className="bg-card border border-border rounded-xl p-6">
                      <p className="text-muted-foreground mb-4">Pour les soirs chargés – version minimale mais efficace</p>
                      <div className="space-y-3">
                        {[
                          { time: "21h30", activity: "Golden Milk", detail: "Préparation rapide (5 min)" },
                          { time: "21h35", activity: "Pranayama", detail: "Respiration lunaire (5 cycles rapides)" },
                          { time: "21h40", activity: "Padabhyanga", detail: "Massage pieds au ghee (10 min)" },
                          { time: "21h50", activity: "Diffusion huiles", detail: "Lavande ou bois de santal dans chambre" },
                          { time: "22h00", activity: "🛏️ COUCHER", detail: "Yoga Nidra audio si besoin (au lit)" },
                        ].map((item, idx) => (
                          <div key={idx} className={`flex gap-4 p-3 rounded-lg ${idx === 4 ? 'bg-primary/20' : 'bg-muted/30'}`}>
                            <span className="font-mono text-sm text-primary font-medium w-16">{item.time}</span>
                            <div>
                              <span className="font-medium text-foreground">{item.activity}</span>
                              <p className="text-sm text-muted-foreground">{item.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Environnement */}
              <section id="environnement" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  🛏️ Optimiser l'Environnement de Sommeil
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3">🌡️ Température</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li><strong>Idéal :</strong> 18-20°C</li>
                      <li>Trop chaud → aggrave Pitta</li>
                      <li>Trop froid → aggrave Vata</li>
                      <li>Aérer 10 min avant coucher</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3">🌑 Obscurité</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>Rideaux occultants essentiels</li>
                      <li>Zéro LED (réveil, chargeurs…)</li>
                      <li>Scotch noir sur LED persistantes</li>
                      <li>Lumière rouge si veilleuse nécessaire</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3">🔇 Silence</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>Bouchons d'oreilles si bruits</li>
                      <li>Bruit blanc/sons nature OK</li>
                      <li>Éviter TV/radio en fond</li>
                      <li>Mode avion smartphone</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3">📱 Hygiène Numérique</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>❌ <strong>STOP écrans 2h avant coucher</strong></li>
                      <li>✅ Lunettes anti-lumière bleue si impossible</li>
                      <li>✅ Charger téléphone HORS de la chambre</li>
                      <li>✅ Réveil analogique (pas smartphone)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Protocole SOS */}
              <section id="protocole-sos" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  🚨 Protocole SOS : Réveil Nocturne
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vous vous réveillez à 3h du matin, impossible de vous rendormir ? Voici quoi faire selon l'heure :
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">🔥 Réveil entre 22h-2h (Phase Pitta)</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Cause probable :</strong> Foie surchargé, chaleur excessive, digestion difficile
                    </p>
                    <p className="font-medium text-foreground mb-2">✅ À FAIRE IMMÉDIATEMENT :</p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li><strong>Boire eau fraîche</strong> avec jus de citron (1/2 citron)</li>
                      <li><strong>Respiration Sitali :</strong> langue en U, inspirer par bouche, expirer par nez (10-15 cycles)</li>
                      <li><strong>Compresse fraîche</strong> sur le front/nuque</li>
                      <li><strong>Position :</strong> Couché sur côté DROIT (apaise Pitta)</li>
                      <li><strong>Visualisation :</strong> Imaginez un lac de montagne, eau fraîche et claire</li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">💨 Réveil entre 2h-6h (Phase Vata)</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Cause probable :</strong> Anxiété, mental agité, peur, froid, sécheresse
                    </p>
                    <p className="font-medium text-foreground mb-2">✅ À FAIRE IMMÉDIATEMENT :</p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li><strong>Boire lait chaud</strong> avec cardamome + miel</li>
                      <li><strong>Auto-massage rapide :</strong> Pieds, mains, tempes avec huile de sésame</li>
                      <li><strong>Respiration 4-7-8 :</strong> Inspirer (4), retenir (7), expirer (8) - 5-8 cycles</li>
                      <li><strong>Couverture lestée</strong> ou supplémentaire (poids apaise Vata)</li>
                      <li><strong>Position :</strong> Couché sur côté GAUCHE (ancrage)</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">⚠️ RÈGLE UNIVERSELLE</h4>
                  <p className="text-muted-foreground mb-3">Si après 20 minutes vous ne vous rendormez pas :</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>❌ <strong>NE PAS</strong> rester au lit à ruminer</li>
                    <li>✅ Se lever, aller dans autre pièce</li>
                    <li>✅ Lumière tamisée (rouge si possible)</li>
                    <li>✅ Activité calme : lecture spirituelle, coloriage, méditation assise</li>
                    <li>✅ Retourner au lit dès premiers signes de fatigue</li>
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">❓ Questions Fréquentes</h2>
                
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="faq-1" className="border border-border rounded-lg px-4">
                    <AccordionTrigger>Combien de temps avant de voir des résultats ?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p><strong>Court terme (1-2 semaines) :</strong> Amélioration de l'endormissement avec routine du soir et plantes.</p>
                      <p><strong>Moyen terme (4-8 semaines) :</strong> Sommeil plus profond et réparateur avec Ashwagandha/Brahmi.</p>
                      <p><strong>Long terme (3+ mois) :</strong> Transformation durable du sommeil avec approche complète.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2" className="border border-border rounded-lg px-4">
                    <AccordionTrigger>Puis-je arrêter mes somnifères ?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p><strong>JAMAIS d'arrêt brutal !</strong> Les somnifères créent une dépendance physique. Travaillez avec votre médecin pour un sevrage progressif en parallèle des solutions ayurvédiques. Comptez 3-6 mois minimum pour un sevrage sécurisé.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3" className="border border-border rounded-lg px-4">
                    <AccordionTrigger>Ces solutions conviennent-elles aux enfants / femmes enceintes ?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p><strong>Enfants :</strong> Oui pour massage, routine du soir, environnement. Non pour plantes sans avis pédiatrique.</p>
                      <p><strong>Femmes enceintes :</strong> Oui pour massage doux, Golden Milk (sans curcuma au 1er trimestre), routine. Non pour Ashwagandha et certaines huiles essentielles. Consultez votre sage-femme.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4" className="border border-border rounded-lg px-4">
                    <AccordionTrigger>Quel budget prévoir ?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p><strong>Budget minimal :</strong> Routine du soir + huile de sésame + ghee = ~20€/mois</p>
                      <p><strong>Budget moyen :</strong> + Ashwagandha + huiles essentielles = ~50€/mois</p>
                      <p><strong>Budget complet :</strong> + Séances Shirodhara + consultation ayurvédique = ~150-200€/mois initial</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5" className="border border-border rounded-lg px-4">
                    <AccordionTrigger>Je travaille de nuit, ces conseils s'appliquent-ils ?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <p>Le travail de nuit va contre les rythmes naturels, mais vous pouvez adapter : créez une « fausse nuit » avec obscurité totale, appliquez la routine avant votre sommeil diurne, priorisez Vata (souvent déséquilibré chez les travailleurs de nuit), et consultez un praticien ayurvédique pour protocole personnalisé.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Programme 21 jours */}
              <section id="programme-21-jours" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  📅 Plan d'Action : 21 Jours pour Transformer Votre Sommeil
                </h2>
                <p className="text-muted-foreground mb-8">
                  Programme progressif pour intégrer les habitudes en douceur :
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">📆 Semaine 1 : Les Fondations</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>☐ Jour 1-3 : Établir heure de coucher fixe (avant 22h)</li>
                      <li>☐ Jour 4-5 : Ajouter Padabhyanga (massage pieds) chaque soir</li>
                      <li>☐ Jour 6-7 : Intégrer Golden Milk 30 min avant coucher</li>
                      <li>☐ Toute la semaine : Stop écrans 1h avant coucher</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">📆 Semaine 2 : L'Approfondissement</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>☐ Jour 8-10 : Commencer Ashwagandha ou Brahmi</li>
                      <li>☐ Jour 11-12 : Ajouter Pranayama (5-10 cycles)</li>
                      <li>☐ Jour 13-14 : Premier Yoga Nidra guidé (20 min)</li>
                      <li>☐ Toute la semaine : Dîner léger 3h avant coucher</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-3">📆 Semaine 3 : La Maîtrise</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>☐ Jour 15-17 : Abhyanga complet 2-3 fois/semaine</li>
                      <li>☐ Jour 18-19 : Optimiser environnement (température, obscurité)</li>
                      <li>☐ Jour 20-21 : Routine complète automatique</li>
                      <li>☐ Évaluation : Noter amélioration qualité sommeil</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-16">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">🌟 Prêt(e) à Transformer Votre Sommeil ?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    L'Ayurvéda offre une approche holistique et personnalisée pour retrouver un sommeil réparateur. 
                    Commencez petit, soyez patient, et observez les transformations dans votre vie.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Prendre rendez-vous pour une consultation
                  </Link>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t border-border pt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Articles connexes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/ayurveda-sante-mentale" className="group">
                    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        L'Ayurvéda pour une Santé Mentale Optimale
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Découvrez comment l'Ayurvéda peut vous aider à gérer le stress, l'anxiété et la dépression.
                      </p>
                    </div>
                  </Link>
                  <Link to="/blog/hiver-ayurveda" className="group">
                    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Hiver & Ayurvéda : Guide de Survie Naturelle
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Votre guide complet pour traverser l'hiver selon les principes ayurvédiques.
                      </p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
            aria-label="Retour en haut"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </article>
    </Layout>
  );
};

export default SommeilAyurveda;
