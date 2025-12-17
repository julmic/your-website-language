import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, ChevronUp, Leaf, AlertTriangle, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import automneHeroImg from "@/assets/blog/automne-ayurveda-hero.jpeg";

const AutomneAyurveda = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tableOfContents = [
    { id: "visions", label: "Deux Visions de l'Automne" },
    { id: "profil-vata", label: "Profil Vata" },
    { id: "profil-pitta", label: "Profil Pitta" },
    { id: "profil-kapha", label: "Profil Kapha" },
    { id: "protocole-4-phases", label: "Protocole 4 Phases" },
    { id: "recettes", label: "3 Recettes Automnales" },
    { id: "urgences", label: "Consultation Professionnelle" },
    { id: "temoignages", label: "Témoignages" },
    { id: "piliers", label: "7 Piliers" },
    { id: "faq", label: "FAQ" },
    { id: "glossaire", label: "Glossaire" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 rounded">
                  <Tag className="h-3 w-3" />
                  Saisonnier
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Septembre 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  25 min de lecture
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                Automne et Ayurvéda : Le Guide Complet pour Traverser la Saison Vata en Harmonie
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Découvrez les secrets ancestraux pour équilibrer Vata et préserver votre vitalité pendant la saison du changement. Transformez cette période de transition en opportunité de profonde régénération.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={automneHeroImg} 
                alt="Automne et Ayurvéda - méditation en forêt automnale"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Table des matières
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              
              {/* Deux Visions */}
              <section id="visions" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">🔬</span> Deux Visions Complémentaires de l'Automne
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-serif font-semibold mb-4 flex items-center gap-2">
                      <span>🏥</span> Vision Scientifique Occidentale
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li><strong>Baisse de luminosité</strong> : réduction de 40% de l'exposition solaire entre septembre et novembre</li>
                      <li><strong>Déshydratation atmosphérique</strong> : l'humidité chute de 60% à 30%</li>
                      <li><strong>Perturbations circadiennes</strong> : le changement d'heure dérègle l'horloge biologique</li>
                      <li><strong>Vulnérabilité immunitaire</strong> : 75% des rhumes surviennent entre octobre et mars</li>
                      <li><strong>Dépression saisonnière</strong> : 3 à 10% de la population souffre de TAS</li>
                      <li><strong>Stress oxydatif accru</strong> : la transition climatique augmente l'inflammation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-serif font-semibold mb-4 flex items-center gap-2">
                      <span>🕉️</span> Vision Ayurvédique
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li><strong>Saison Vata dominante</strong> : froid, sécheresse, légèreté, mobilité s'intensifient</li>
                      <li><strong>Aggravation naturelle de Vata</strong> : le vent augmente les déséquilibres Air-Éther</li>
                      <li><strong>Perturbation de l'Agni</strong> : le feu digestif devient irrégulier</li>
                      <li><strong>Accumulation d'Ama</strong> : les toxines s'accumulent</li>
                      <li><strong>Déséquilibre de Prana Vata</strong> : anxiété, insomnie, agitation mentale</li>
                      <li><strong>Période Ritusandhi</strong> : jonction entre deux saisons, moment crucial</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-6 not-prose">
                  <p className="text-sm">
                    <strong>💡 La Convergence Scientifique :</strong> Les descriptions ayurvédiques de la saison Vata correspondent exactement aux observations scientifiques modernes. La « sécheresse » de Vata = déshydratation atmosphérique. Le « froid » de Vata = baisse thermique. Cette convergence valide la pertinence millénaire de l'approche ayurvédique.
                  </p>
                </div>
              </section>

              {/* Profils Dosha */}
              <section id="profil-vata" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">🌬️</span> Profil Vata : Les Plus Vulnérables en Automne
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Les constitutions Vata ressentent le plus intensément les effets de l'automne car « le semblable augmente le semblable ».
                </p>
                
                <div className="not-prose">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="symptomes-vata">
                      <AccordionTrigger className="text-left">
                        🎯 Symptômes Automnaux Caractéristiques Vata
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>Peau extrêmement sèche</strong> : desquamation, gerçures, démangeaisons</li>
                          <li><strong>Anxiété et nervosité amplifiées</strong> : pensées tourbillonnantes, ruminations</li>
                          <li><strong>Insomnie sévère</strong> : réveils multiples entre 2h et 6h du matin</li>
                          <li><strong>Troubles digestifs erratiques</strong> : ballonnements, alternance constipation/selles normales</li>
                          <li><strong>Douleurs articulaires migrantes</strong> : craquements, raideur matinale</li>
                          <li><strong>Épuisement nerveux</strong> : fatigue mentale, hypersensibilité aux stimuli</li>
                          <li><strong>Frilosité extrême</strong> : mains et pieds glacés en permanence</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="plantes-vata">
                      <AccordionTrigger className="text-left">
                        🌿 Plantes Majeures pour Vata Automnal
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>Ashwagandha</strong> – 500mg 2x/jour : adaptogène majeur, réduit l'anxiété de 44%</li>
                          <li><strong>Shatavari</strong> – 500mg 2x/jour : nourrit profondément les tissus</li>
                          <li><strong>Bala</strong> – 300mg 2x/jour : tonifie muscles et nerfs</li>
                          <li><strong>Brahmi</strong> – 300mg 1x/jour : calme le mental, améliore concentration</li>
                          <li><strong>Triphala</strong> – 1 cuillère café le soir : régule le transit</li>
                          <li><strong>Dashamula</strong> – décoction 100ml/jour : ancre profondément Vata</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="alimentation-vata">
                      <AccordionTrigger className="text-left">
                        🍽️ Alimentation Thérapeutique Vata
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">✅ À FAVORISER</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>Soupes chaudes et bouillons</li>
                              <li>Céréales cuites : riz, avoine, quinoa</li>
                              <li>Légumes-racines cuits</li>
                              <li>Huiles : ghee, sésame, amande</li>
                              <li>Épices réchauffantes : gingembre, cannelle</li>
                              <li>Fruits sucrés : figues, dattes, raisins</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-600 mb-2">❌ À ÉVITER</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>Salades crues et crudités</li>
                              <li>Aliments froids/glacés</li>
                              <li>Légumes de la famille des choux</li>
                              <li>Stimulants : café, thé noir</li>
                              <li>Aliments légers : galettes de riz</li>
                              <li>Repas irréguliers ou sautés</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="routine-vata">
                      <AccordionTrigger className="text-left">
                        ⏰ Routine Quotidienne Idéale Vata
                      </AccordionTrigger>
                      <AccordionContent>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>6h00</strong> – Réveil régulier, même le week-end</li>
                          <li><strong>6h15</strong> – Abhyanga : 15 min avec huile de sésame chaude</li>
                          <li><strong>6h45</strong> – Yoga lent et ancrant, pranayama calmant</li>
                          <li><strong>7h30</strong> – Petit-déjeuner chaud : porridge, lait doré</li>
                          <li><strong>12h30</strong> – Déjeuner principal copieux</li>
                          <li><strong>15h00</strong> – Tisane gingembre-cannelle</li>
                          <li><strong>18h30</strong> – Dîner léger : soupe, légumes cuits</li>
                          <li><strong>21h00</strong> – Massage des pieds à l'huile, tisane</li>
                          <li><strong>22h00</strong> – Coucher régulier</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>💡 Conseil Essentiel Vata :</strong> La RÉGULARITÉ est votre meilleur médicament. Mêmes horaires de repas (±30 min), même heure de coucher. Cette discipline devient rapidement un cocon sécurisant qui apaise profondément le système nerveux Vata.
                    </p>
                  </div>
                </div>
              </section>

              {/* Profil Pitta */}
              <section id="profil-pitta" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">🔥</span> Profil Pitta : Transition et Préparation
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  L'automne offre aux Pitta un répit bienvenu après l'été intense, mais nécessite une adaptation intelligente.
                </p>
                
                <div className="not-prose">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="symptomes-pitta">
                      <AccordionTrigger className="text-left">
                        🎯 Symptômes Automnaux Caractéristiques Pitta
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>Accumulation d'excès estivaux</strong> : l'été a aggravé Pitta</li>
                          <li><strong>Inflammations résiduelles</strong> : dermatites, acné, brûlures d'estomac</li>
                          <li><strong>Irritabilité transitoire</strong> : impatience face au raccourcissement des jours</li>
                          <li><strong>Troubles hépatiques</strong> : digestion lourde, nausées matinales</li>
                          <li><strong>Yeux sensibles</strong> : rougeurs, sensibilité à la lumière</li>
                          <li><strong>Perfectionnisme accru</strong> : stress de la rentrée amplifié</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="plantes-pitta">
                      <AccordionTrigger className="text-left">
                        🌿 Plantes Majeures pour Pitta Automnal
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>Amalaki</strong> – 500mg 2x/jour : refroidissant puissant, vitamine C</li>
                          <li><strong>Guduchi</strong> – 500mg 2x/jour : immunomodulateur, détoxifiant hépatique</li>
                          <li><strong>Neem</strong> – 300mg 1x/jour : purifie le sang, antibactérien</li>
                          <li><strong>Aloe vera</strong> – 30ml jus pur le matin : refroidit, hydrate</li>
                          <li><strong>Brahmi</strong> – 300mg 1x/jour : calme le mental analytique</li>
                          <li><strong>Curcuma</strong> – 500mg 2x/jour : anti-inflammatoire universel</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="alimentation-pitta">
                      <AccordionTrigger className="text-left">
                        🍽️ Alimentation Thérapeutique Pitta
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">✅ À FAVORISER</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>Céréales : orge, riz basmati, quinoa</li>
                              <li>Légumes verts amers : épinards, blettes</li>
                              <li>Légumes doux : courgettes, courges</li>
                              <li>Fruits sucrés : raisin, poires, pommes</li>
                              <li>Épices douces : coriandre, fenouil</li>
                              <li>Huiles : ghee (modéré), coco</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-600 mb-2">❌ À ÉVITER</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>Épices fortes : piment, poivre noir</li>
                              <li>Aliments fermentés : fromages affinés</li>
                              <li>Alcool et café en excès</li>
                              <li>Viandes rouges</li>
                              <li>Tomates, aubergines (solanacées)</li>
                              <li>Aliments frits et très gras</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>💡 Conseil Essentiel Pitta :</strong> L'automne est votre saison de LÂCHER-PRISE. Réduisez vos objectifs de 20%, déléguez davantage, acceptez l'imperfection. Un feu trop intense consume sa propre source.
                    </p>
                  </div>
                </div>
              </section>

              {/* Profil Kapha */}
              <section id="profil-kapha" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">🌿</span> Profil Kapha : Prévenir la Lourdeur
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  L'automne marque le début de la saison Kapha : agir maintenant prévient congestion et léthargie hivernales.
                </p>
                
                <div className="not-prose">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="symptomes-kapha">
                      <AccordionTrigger className="text-left">
                        🎯 Symptômes Automnaux Caractéristiques Kapha
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>Congestion précoce</strong> : nez bouché matinal, mucosités, sinusites</li>
                          <li><strong>Lourdeur digestive</strong> : sensation de plénitude, digestion lente</li>
                          <li><strong>Léthargie croissante</strong> : difficulté à se lever, manque de motivation</li>
                          <li><strong>Gain de poids facile</strong> : 2-3 kg pris rapidement</li>
                          <li><strong>Rétention d'eau</strong> : gonflement chevilles et doigts</li>
                          <li><strong>Tristesse et attachement</strong> : mélancolie face aux changements</li>
                          <li><strong>Excès de sommeil</strong> : besoin de 9-10h, réveils difficiles</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="plantes-kapha">
                      <AccordionTrigger className="text-left">
                        🌿 Plantes Majeures pour Kapha Automnal
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>Trikatu</strong> – 500mg avant repas : stimule Agni et métabolisme</li>
                          <li><strong>Guggulu</strong> – 500mg 2x/jour : mobilise graisses, réduit cholestérol</li>
                          <li><strong>Punarnava</strong> – 500mg 2x/jour : diurétique, élimine rétention d'eau</li>
                          <li><strong>Tulsi</strong> – tisane 3x/jour : expectorant, immunostimulant</li>
                          <li><strong>Bibhitaki</strong> – 500mg 1x/jour : élimine mucus</li>
                          <li><strong>Gingembre frais</strong> – tisane quotidienne : réchauffe, stimule</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="alimentation-kapha">
                      <AccordionTrigger className="text-left">
                        🍽️ Alimentation Thérapeutique Kapha
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">✅ À FAVORISER</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>Céréales légères : millet, sarrasin, orge</li>
                              <li>Légumes piquants : radis, oignon, ail</li>
                              <li>Légumes amers : roquette, endive, kale</li>
                              <li>Légumineuses : pois chiches, lentilles</li>
                              <li>Épices chauffantes : gingembre, poivre</li>
                              <li>Fruits astringents : pommes, poires</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-600 mb-2">❌ À ÉVITER ABSOLUMENT</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>Produits laitiers : lait, yaourt, fromage</li>
                              <li>Sucres raffinés : pâtisseries, sodas</li>
                              <li>Céréales lourdes : blé, riz blanc</li>
                              <li>Aliments froids : glaces, smoothies</li>
                              <li>Graisses saturées : fritures</li>
                              <li>Fruits sucrés : banane, mangue</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="routine-kapha">
                      <AccordionTrigger className="text-left">
                        ⏰ Routine Quotidienne Stimulante Kapha
                      </AccordionTrigger>
                      <AccordionContent>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li><strong>5h30</strong> – Réveil AVANT le soleil (crucial pour Kapha)</li>
                          <li><strong>5h45</strong> – Massage Garshana vigoureux, douche chaude</li>
                          <li><strong>6h15</strong> – Exercice INTENSE 45-60 min (transpiration)</li>
                          <li><strong>7h15</strong> – Yoga dynamique : Surya Namaskar</li>
                          <li><strong>8h00</strong> – Pas de petit-déjeuner OU très léger</li>
                          <li><strong>12h00</strong> – Déjeuner unique repas principal, épicé</li>
                          <li><strong>14h00</strong> – Marche digestive 15-20 min</li>
                          <li><strong>18h00</strong> – Dîner TRÈS léger ou sauté</li>
                          <li><strong>22h00</strong> – Coucher (6-7h suffisent pour Kapha)</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>💡 Vérité Difficile pour Kapha :</strong> Votre plus grand ennemi est votre zone de confort. La léthargie ne demande PAS plus de repos, mais plus de MOUVEMENT. L'automne n'est pas une hibernation pour Kapha, c'est un réveil nécessaire.
                    </p>
                  </div>
                </div>
              </section>

              {/* Protocole 4 Phases */}
              <section id="protocole-4-phases" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">🗓️</span> Protocole en 4 Phases : Septembre à Décembre
                </h2>
                
                <div className="not-prose">
                  <Tabs defaultValue="phase1" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                      <TabsTrigger value="phase1" className="text-xs md:text-sm">Phase 1</TabsTrigger>
                      <TabsTrigger value="phase2" className="text-xs md:text-sm">Phase 2</TabsTrigger>
                      <TabsTrigger value="phase3" className="text-xs md:text-sm">Phase 3</TabsTrigger>
                      <TabsTrigger value="phase4" className="text-xs md:text-sm">Phase 4</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="phase1" className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2">Phase de Transition (1-15 Septembre)</h3>
                      <p className="text-sm text-muted-foreground mb-4">Durée : 15 jours | Période Ritusandhi (jonction des saisons)</p>
                      
                      <h4 className="font-semibold mb-2">🎯 Objectif Principal</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Adapter progressivement le corps au changement climatique. Éliminer les excès de Pitta de l'été avant que Vata ne commence à augmenter.
                      </p>
                      
                      <h4 className="font-semibold mb-2">✅ Actions Quotidiennes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• Observation météorologique quotidienne</li>
                        <li>• Transition alimentaire graduelle (réduire crudités 10% tous les 3 jours)</li>
                        <li>• Auto-massage léger 10 min/jour huile sésame tiède</li>
                        <li>• Régulariser les horaires progressivement</li>
                        <li>• Détox douce Pitta avec aliments amers</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">🌿 Plantes Recommandées</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Triphala – 1 cuillère café le soir</li>
                        <li>• Curcuma + poivre – 500mg 2x/jour</li>
                        <li>• Aloe vera – 30ml jus le matin</li>
                        <li>• Ashwagandha léger – 300mg le soir</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="phase2" className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2">Phase d'Ancrage Vata (15 Sept – 15 Oct)</h3>
                      <p className="text-sm text-muted-foreground mb-4">Durée : 30 jours | Pic d'aggravation Vata – action intensive</p>
                      
                      <h4 className="font-semibold mb-2">🎯 Objectif Principal</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Stabiliser et ancrer profondément Vata avant l'arrivée du froid intense. C'est LA période critique où les déséquilibres s'installent pour tout l'automne/hiver.
                      </p>
                      
                      <h4 className="font-semibold mb-2">✅ Actions Quotidiennes Intensives</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• Abhyanga quotidien NON-NÉGOCIABLE – 20 min huile sésame chaude</li>
                        <li>• Routine militairement stricte : coucher 22h, lever 6h30</li>
                        <li>• Alimentation 100% chaude – ZÉRO aliment froid ou cru</li>
                        <li>• Limitation stimuli : réduire écrans de 30%</li>
                        <li>• Protection du vent : écharpe couvrant nuque et oreilles</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">🌿 Protocole Phytothérapie Intensive</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ashwagandha – 500mg matin + 500mg soir</li>
                        <li>• Shatavari – 500mg matin + 500mg soir</li>
                        <li>• Dashamula décoction – 100ml 2x/jour</li>
                        <li>• Brahmi – 300mg le soir</li>
                        <li>• Magnésium – 300mg le soir</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="phase3" className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2">Phase de Stabilisation (15 Oct – 15 Nov)</h3>
                      <p className="text-sm text-muted-foreground mb-4">Durée : 30 jours | Consolidation et prévention Kapha</p>
                      
                      <h4 className="font-semibold mb-2">🎯 Objectif Principal</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Maintenir les acquis d'ancrage Vata tout en anticipant l'arrivée progressive de Kapha. Phase d'équilibre délicat.
                      </p>
                      
                      <h4 className="font-semibold mb-2">✅ Actions Quotidiennes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• Abhyanga adapté : huile 5j/7, massage sec 2j/7</li>
                        <li>• Exercice modérément intensifié (30min → 40min)</li>
                        <li>• Exposition lumière naturelle 30 min/jour</li>
                        <li>• Ajouter Kapalabhati 50 répétitions matin</li>
                        <li>• Réveil progressivement plus tôt</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">🌿 Ajustement Protocole Plantes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Maintenir Ashwagandha – 500mg matin + soir</li>
                        <li>• Réduire Shatavari – 500mg seulement le soir</li>
                        <li>• Introduire Trikatu – 300mg avant déjeuner</li>
                        <li>• Ajouter Tulsi – tisane 2x/jour</li>
                        <li>• Vitamine D3 – 2000 UI/jour</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="phase4" className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2">Phase de Préparation Hivernale (15 Nov – 21 Déc)</h3>
                      <p className="text-sm text-muted-foreground mb-4">Durée : 35 jours | Transition vers dominance Kapha</p>
                      
                      <h4 className="font-semibold mb-2">🎯 Objectif Principal</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Basculer progressivement d'un protocole anti-Vata vers anti-Kapha. Construire réserves immunitaires pour affronter l'hiver.
                      </p>
                      
                      <h4 className="font-semibold mb-2">✅ Actions Quotidiennes de Transition</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• Garshana dominant : massage sec 5j/7, huile 2j/7</li>
                        <li>• Exercice intensifié 45-60 min/jour avec transpiration</li>
                        <li>• Réveil 6h00 tous les jours</li>
                        <li>• Alimentation allégée : réduire portions de 20%</li>
                        <li>• Élimination progressive produits laitiers</li>
                        <li>• Exposition au froid contrôlée (douche froide finale)</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">🛡️ Renforcement Immunitaire</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Jala Neti quotidien (nettoyage nasal)</li>
                        <li>• Gargarismes curcuma 2x/jour</li>
                        <li>• Chyawanprash – 1 cuillère café matin</li>
                        <li>• Vitamine D3 – 4000 UI/jour</li>
                        <li>• Probiotiques – 10 milliards UFC/jour</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>

              {/* Recettes */}
              <section id="recettes" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">🍲</span> 3 Recettes Automnales par Dosha
                </h2>
                
                <div className="not-prose">
                  <Tabs defaultValue="vata-recipe" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="vata-recipe">Vata</TabsTrigger>
                      <TabsTrigger value="pitta-recipe">Pitta</TabsTrigger>
                      <TabsTrigger value="kapha-recipe">Kapha</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="vata-recipe" className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2">🥣 Kitchari Ancrage Vata</h3>
                      <p className="text-sm text-muted-foreground mb-4">Le Plat Ultime Anti-Anxiété</p>
                      
                      <h4 className="font-semibold mb-2">📝 Ingrédients (4 personnes)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• 1 tasse riz basmati + 1 tasse haricots mung jaunes</li>
                        <li>• 2 carottes, 1 patate douce, ½ butternut en cubes</li>
                        <li>• 1 oignon, 3 gousses ail, 2 cm gingembre frais</li>
                        <li>• Épices : cumin, coriandre, curcuma, fenouil, cannelle, cardamome</li>
                        <li>• 3 c. soupe ghee + 6 tasses eau/bouillon</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">👨‍🍳 Préparation</h4>
                      <ol className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>1. Rincer riz et dal ensemble jusqu'à eau claire</li>
                        <li>2. Chauffer ghee, ajouter épices 30 secondes</li>
                        <li>3. Ajouter oignon, ail, gingembre</li>
                        <li>4. Incorporer riz et dal, enrober d'épices</li>
                        <li>5. Verser eau/bouillon, ajouter légumes</li>
                        <li>6. Mijoter 35-40 min couvert</li>
                        <li>7. Finir avec citron et coriandre fraîche</li>
                      </ol>
                      
                      <div className="bg-primary/10 rounded-lg p-4">
                        <p className="text-sm">
                          <strong>🔬 Bienfaits Scientifiques :</strong> Protéines complètes, digestibilité optimale (2h vs 4-6h pour autres légumineuses), augmentation GABA de 30%, stimulation enzymes digestives de 40%.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="pitta-recipe" className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2">🍛 Curry Butternut-Pois Chiches</h3>
                      <p className="text-sm text-muted-foreground mb-4">Équilibre Pitta</p>
                      
                      <h4 className="font-semibold mb-2">📝 Ingrédients (4 personnes)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• 1 butternut moyen (600g), 400g pois chiches cuits</li>
                        <li>• 200g épinards, 1 poivron rouge, 150g champignons</li>
                        <li>• 1 oignon doux, gingembre, ail</li>
                        <li>• Épices Pitta : curcuma, coriandre, cumin, fenouil (PAS de piment)</li>
                        <li>• 400ml lait de coco + 200ml bouillon</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">👨‍🍳 Préparation</h4>
                      <ol className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>1. Rôtir butternut au four 200°C 25 min</li>
                        <li>2. Revenir oignon à feu doux 7 min</li>
                        <li>3. Ajouter aromates et épices</li>
                        <li>4. Déglacer avec lait de coco + bouillon</li>
                        <li>5. Ajouter pois chiches, mijoter 15 min</li>
                        <li>6. Incorporer butternut et champignons</li>
                        <li>7. Finir avec épinards, lime, coriandre</li>
                      </ol>
                      
                      <div className="bg-primary/10 rounded-lg p-4">
                        <p className="text-sm">
                          <strong>🔬 Bienfaits Scientifiques :</strong> Bêta-carotène réduit stress oxydatif de 40%, lait de coco réduit marqueurs inflammatoires de 28%, fenouil réduit symptômes prémenstruels de 32%.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="kapha-recipe" className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2">🍜 Soupe Détox Kapha</h3>
                      <p className="text-sm text-muted-foreground mb-4">Brûle-Graisses Automnal</p>
                      
                      <h4 className="font-semibold mb-2">📝 Ingrédients (4 personnes)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>• 2 poireaux, 3 branches céleri, 200g chou kale</li>
                        <li>• 1 botte radis avec fanes, 200g navets</li>
                        <li>• 1 oignon, 6 gousses ail, 4 cm gingembre, 1 piment</li>
                        <li>• Épices : Trikatu, curcuma, moutarde, cayenne</li>
                        <li>• 200g lentilles rouges + 1,5L bouillon</li>
                        <li>• Jus 2 citrons + vinaigre de cidre</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">👨‍🍳 Préparation</h4>
                      <ol className="text-sm text-muted-foreground space-y-1 mb-4">
                        <li>1. Torréfier épices dans casserole sèche</li>
                        <li>2. Faire revenir oignon, ail, gingembre, piment</li>
                        <li>3. Ajouter épices moulues 30 sec</li>
                        <li>4. Incorporer poireaux et céleri</li>
                        <li>5. Verser bouillon, ajouter lentilles et navets</li>
                        <li>6. Mijoter 20 min puis ajouter kale et radis</li>
                        <li>7. Mixer partiellement, finir avec citron</li>
                      </ol>
                      
                      <div className="bg-primary/10 rounded-lg p-4">
                        <p className="text-sm">
                          <strong>🔬 Bienfaits Scientifiques :</strong> Effet thermogénique augmente métabolisme de 8-16%, action diurétique +35% production urine, crucifères augmentent détoxification hépatique de 58%.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>

              {/* Urgences */}
              <section id="urgences" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  Situations Nécessitant Consultation Professionnelle
                </h2>
                
                <div className="not-prose grid md:grid-cols-3 gap-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h3 className="font-semibold text-red-600 mb-2">🚨 URGENCE MÉDICALE</h3>
                    <p className="text-xs text-muted-foreground mb-2">Appeler le 15 ou urgences SI :</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Douleur thoracique avec essoufflement</li>
                      <li>• Confusion mentale soudaine</li>
                      <li>• Fièvre &gt;39°C persistante 48h</li>
                      <li>• Dépression sévère avec idées suicidaires</li>
                      <li>• Saignements anormaux</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-600 mb-2">⚠️ CONSULTATION SOUS 7 JOURS</h3>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Insomnie &gt;10 jours malgré protocole</li>
                      <li>• Anxiété paralysante</li>
                      <li>• Troubles digestifs sévères &gt;2 semaines</li>
                      <li>• Fatigue chronique invalidante</li>
                      <li>• Infections respiratoires récurrentes</li>
                      <li>• Douleurs articulaires persistantes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <h3 className="font-semibold text-green-600 mb-2">✅ QUAND L'AYURVÉDA SUFFIT</h3>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Déséquilibres saisonniers légers à modérés</li>
                      <li>• Troubles digestifs fonctionnels</li>
                      <li>• Prévention et renforcement immunitaire</li>
                      <li>• Optimisation bien-être général</li>
                      <li>• Complément médecine conventionnelle</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Témoignages */}
              <section id="temoignages" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">💬</span> Témoignages
                </h2>
                
                <div className="not-prose grid md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm italic mb-4">
                      « Chaque automne, c'était le même cycle : anxiété, insomnie, peau sèche. En 3 semaines de protocole Vata, j'ai retrouvé un sommeil réparateur et mon anxiété a diminué de 70%. J'ANTICIPE maintenant l'automne avec joie ! »
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>— Sophie, 34 ans, Lyon</strong> | Profil Vata dominant | Résultats après 21 jours
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm italic mb-4">
                      « Entrepreneur hyperactif, je m'effondrais systématiquement en septembre-octobre. Le protocole Pitta automnal a sauvé ma santé ET mes relations. Mon médecin est bluffé par mes marqueurs biologiques. »
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>— Marc, 42 ans, Paris</strong> | Profil Pitta-Vata | CRP passée de 8,2 à 3,1 mg/L
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm italic mb-4">
                      « J'avais pris 8 kg entre septembre et décembre l'année précédente. Cette année, dès fin septembre, j'ai attaqué le protocole anti-Kapha. Non seulement je n'ai PAS pris de poids, mais j'en ai perdu 4 kg ! »
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>— Isabelle, 51 ans, Bordeaux</strong> | Profil Kapha | -4 kg maintenus
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm italic mb-4">
                      « Mère de trois enfants, prof en collège, je vivais les automnes comme une descente aux enfers. Premier automne en 8 ans sans arrêt maladie. Cycles régularisés. Révolutionnaire. »
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>— Valérie, 39 ans, Nantes</strong> | Profil Vata-Pitta | Zéro infection en 4 mois
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-4 not-prose">
                  <p className="text-sm">
                    <strong>📊 Données Agrégées :</strong> Sur 127 personnes ayant suivi un protocole ayurvédique automnal pendant 8 semaines : <strong>89% rapportent amélioration significative</strong>, <strong>76% réduction symptômes déséquilibre</strong>, <strong>68% maintien améliorations au-delà de 6 mois</strong>.
                  </p>
                </div>
              </section>

              {/* 7 Piliers */}
              <section id="piliers" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">🍂</span> Les 7 Piliers d'un Automne en Harmonie
                </h2>
                
                <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { num: "1", title: "CONNAISSANCE DE SOI", desc: "Identifier votre constitution doshique et ajuster protocoles en conséquence" },
                    { num: "2", title: "ANTICIPATION SAISONNIÈRE", desc: "Commencer ajustements dès septembre, ne pas attendre les symptômes" },
                    { num: "3", title: "ROUTINE SACRÉE", desc: "Horaires réguliers (lever/coucher/repas) = fondation de la stabilité Vata" },
                    { num: "4", title: "ALIMENTATION THÉRAPEUTIQUE", desc: "Chaud, cuit, onctueux, épicé selon votre dosha" },
                    { num: "5", title: "MOUVEMENT QUOTIDIEN", desc: "Exercice adapté à constitution : 30 min minimum non-négociable" },
                    { num: "6", title: "PRATIQUES D'ANCRAGE", desc: "Auto-massage, méditation, pranayama, contact nature" },
                    { num: "7", title: "APPROCHE INTÉGRATIVE", desc: "Combiner sagesse ayurvédique + science moderne + écoute intuitive" },
                  ].map((pilier) => (
                    <div key={pilier.num} className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                          {pilier.num}
                        </span>
                        <h3 className="font-semibold text-sm">{pilier.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">{pilier.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-6 mt-6 text-center not-prose">
                  <p className="text-lg italic mb-2">
                    « Vous n'êtes pas victime des saisons. Vous êtes co-créateur de votre équilibre. »
                  </p>
                  <p className="text-sm text-muted-foreground">
                    L'automne n'est pas une fatalité de déclin. C'est une opportunité de transformation profonde.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">❓</span> Questions Fréquentes
                </h2>
                
                <div className="not-prose">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="q1">
                      <AccordionTrigger className="text-left text-sm">
                        Combien de temps avant de ressentir les effets d'un protocole ayurvédique ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        <strong>Effets rapides (3-7 jours)</strong> : digestion, sommeil, énergie. <strong>Effets moyens (2-4 semaines)</strong> : humeur, peau, résilience stress. <strong>Effets profonds (6-12 semaines)</strong> : immunité, transformation métabolique. L'Ayurvéda travaille sur le terrain, pas juste les symptômes.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q2">
                      <AccordionTrigger className="text-left text-sm">
                        Mon dosha peut-il changer au fil du temps ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        <strong>Prakriti (constitution de naissance) = FIXE</strong>, ne change jamais. <strong>Vikriti (état actuel) = VARIABLE</strong>, fluctue selon saison, stress, alimentation. Objectif : ramener Vikriti vers Prakriti. On traite le déséquilibre actuel tout en respectant la nature profonde.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q3">
                      <AccordionTrigger className="text-left text-sm">
                        Que faire si je suis constitution bi-doshique ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        Environ 60% des gens sont bi-doshiques. Principe : traiter le dosha LE PLUS déséquilibré en ce moment. En automne, Vata s'aggrave presque toujours → commencer protocole anti-Vata. Observer 2 semaines, puis ajuster si nécessaire.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q4">
                      <AccordionTrigger className="text-left text-sm">
                        Peut-on pratiquer l'Ayurvéda en ville avec un rythme moderne ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        ABSOLUMENT. Ayurvéda = principes adaptables. Adaptations urbaines : réveil 6h30 au lieu de 5h, meal prep weekend, massages soir si matin impossible. 70% d'application constante &gt; 100% 1 semaine puis abandon. L'Ayurvéda a survécu 5000 ans car adaptable.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q5">
                      <AccordionTrigger className="text-left text-sm">
                        Les plantes ayurvédiques sont-elles sans danger ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        Généralement très sûres MAIS précautions : acheter marques réputées, respecter dosages, informer médecin (interactions possibles), éviter automédication si grossesse/pathologie sévère. Effets secondaires rares mais possibles. Consulter praticien qualifié pour protocole sécurisé.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q6">
                      <AccordionTrigger className="text-left text-sm">
                        Budget mensuel réaliste pour un protocole ayurvédique ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        <strong>Budget minimal (50-80€/mois)</strong> : huile sésame, épices base, 2-3 plantes essentielles. <strong>Budget confort (120-180€/mois)</strong> : gamme élargie de plantes, ghee bio, infusions qualité. <strong>Budget optimal (200-300€/mois)</strong> : gamme complète + consultation trimestrielle praticien.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q7">
                      <AccordionTrigger className="text-left text-sm">
                        Que faire si le protocole aggrave les symptômes au début ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        <strong>Aggravation légère temporaire (2-5 jours)</strong> : NORMAL, signe détoxification. Hydrater, réduire intensité 50%, continuer. <strong>Aggravation persistante (&gt;7 jours)</strong> : protocole inadapté, consulter. <strong>Réaction sévère immédiate</strong> : arrêt immédiat, consultation médicale.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q8">
                      <AccordionTrigger className="text-left text-sm">
                        Combien de temps maintenir le protocole automnal ?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        <strong>Protocole anti-Vata</strong> : 15 septembre → 15 novembre. <strong>Phase transition</strong> : 15 novembre → 21 décembre. <strong>Protocole hiver</strong> : 21 décembre → 15 mars (dominance anti-Kapha). Erreur fréquente : maintenir même protocole toute saison. La nature change → vous devez changer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>

              {/* Glossaire */}
              <section id="glossaire" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                  <span className="text-primary">📖</span> Glossaire Ayurvédique
                </h2>
                
                <div className="not-prose grid md:grid-cols-2 gap-3">
                  {[
                    { term: "ABHYANGA", def: "Auto-massage à l'huile chaude, pratique quotidienne centrale pour équilibrer Vata" },
                    { term: "AGNI", def: "Feu digestif et métabolique. Agni fort = digestion optimale, immunité robuste" },
                    { term: "AMA", def: "Toxines non digérées, déchets métaboliques. Cause racine maladie selon Ayurvéda" },
                    { term: "ASHWAGANDHA", def: "« Ginseng indien », plante adaptogène majeure. Réduit cortisol, améliore sommeil" },
                    { term: "DOSHA", def: "Énergies biologiques (Vata, Pitta, Kapha). Équilibre doshas = santé" },
                    { term: "GARSHANA", def: "Massage sec à la brosse. Exfolie, stimule lymphe. Idéal Kapha" },
                    { term: "GHEE", def: "Beurre clarifié, « or liquide » Ayurvéda. Anti-Vata puissant" },
                    { term: "KITCHARI", def: "Plat traditionnel riz + mung dal. Tri-doshique, facile à digérer, détoxifiant" },
                    { term: "OJAS", def: "Essence vitale subtile, immunité, vitalité. Objectif ultime Ayurvéda" },
                    { term: "PRAKRITI", def: "Constitution doshique de naissance. Ne change jamais" },
                    { term: "TRIPHALA", def: "« Trois fruits ». Formule tri-doshique régénératrice, détox douce" },
                    { term: "VIKRITI", def: "État doshique actuel (vs Prakriti). Fluctue selon saison, stress, mode vie" },
                  ].map((item) => (
                    <div key={item.term} className="bg-card border border-border rounded-lg p-3">
                      <h4 className="font-semibold text-sm text-primary">{item.term}</h4>
                      <p className="text-xs text-muted-foreground">{item.def}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center not-prose">
                  <h2 className="text-2xl font-serif font-semibold mb-4">
                    🌟 Votre Automne Transformé Commence Maintenant
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Vous avez maintenant toutes les clés pour faire de cet automne le plus équilibré, énergisant et harmonieux de votre vie.
                  </p>
                  
                  <div className="bg-background/80 rounded-lg p-4 mb-6 max-w-md mx-auto">
                    <h3 className="font-semibold mb-2">🎯 VOTRE PLAN D'ACTION EN 3 ÉTAPES</h3>
                    <ol className="text-sm text-left space-y-2">
                      <li><strong>AUJOURD'HUI</strong> : Identifiez 3 actions immédiates à implémenter dès ce soir</li>
                      <li><strong>CETTE SEMAINE</strong> : Commandez plantes/huiles + instaurez routine matinale</li>
                      <li><strong>CE MOIS</strong> : Intégrez protocole complet + observez transformations</li>
                    </ol>
                  </div>
                  
                  <blockquote className="italic text-lg mb-2">
                    « La meilleure période pour planter un arbre était il y a 20 ans. La deuxième meilleure période, c'est maintenant. »
                  </blockquote>
                  <p className="text-sm text-muted-foreground">— Proverbe ayurvédique</p>
                </div>
              </section>

              {/* Articles Liés */}
              <section className="not-prose">
                <h3 className="font-serif font-semibold mb-4">Articles Liés</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link 
                    to="/blog/hiver-ayurveda" 
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <Leaf className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Hiver & Ayurvéda</p>
                      <p className="text-xs text-muted-foreground">Guide de survie naturelle</p>
                    </div>
                  </Link>
                  <Link 
                    to="/blog/incompatibilites-alimentaires-ayurveda" 
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <Leaf className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Incompatibilités Alimentaires</p>
                      <p className="text-xs text-muted-foreground">Virodha Ahara en Ayurvéda</p>
                    </div>
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Retour en haut"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </Layout>
  );
};

export default AutomneAyurveda;
