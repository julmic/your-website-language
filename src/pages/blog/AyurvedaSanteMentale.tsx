import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ChevronUp, AlertTriangle, Phone, Brain, Heart, Leaf, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState, useEffect } from "react";

const AyurvedaSanteMentale = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
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

  const toggleCheckItem = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tableOfContents = [
    { id: "introduction", label: "Introduction" },
    { id: "psychiatrie-vs-ayurveda", label: "Psychiatrie vs Ayurvéda" },
    { id: "profil-vata", label: "Profil Vata" },
    { id: "profil-pitta", label: "Profil Pitta" },
    { id: "profil-kapha", label: "Profil Kapha" },
    { id: "protocole-progressif", label: "Protocole en 4 phases" },
    { id: "recettes", label: "Recettes thérapeutiques" },
    { id: "urgences", label: "Urgences psychiatriques" },
    { id: "checklist", label: "Checklist pratique" },
  ];

  const checklistItems = [
    { key: "routine", label: "Établir une routine quotidienne (Dinacharya)" },
    { key: "alimentation", label: "Adapter l'alimentation à son dosha" },
    { key: "sommeil", label: "Respecter les heures de sommeil (22h-6h)" },
    { key: "exercice", label: "Pratiquer un exercice physique adapté" },
    { key: "meditation", label: "Méditer 15-20 minutes par jour" },
    { key: "pranayama", label: "Pratiquer le Pranayama quotidiennement" },
    { key: "massage", label: "Auto-massage à l'huile (Abhyanga)" },
    { key: "plantes", label: "Intégrer les plantes adaptogènes" },
    { key: "nature", label: "Passer du temps dans la nature" },
    { key: "ecrans", label: "Limiter les écrans le soir" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/20 to-background">
        <div className="container px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 rounded-full text-primary">
                <Brain className="h-3 w-3" />
                Santé Mentale
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                17 Décembre 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                25 min de lecture
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              L'Ayurvéda pour une Santé Mentale Optimale
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Comment la médecine ancestrale indienne soigne anxiété, dépression et burn-out 
              sans médicaments chimiques. Découvrez les protocoles holistiques validés par la science moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Sommaire
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full py-1"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="flex-1 max-w-3xl prose prose-invert prose-green">
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dans un monde où le stress, l'anxiété et la dépression touchent des millions de personnes, 
                  l'Ayurvéda offre une approche holistique et naturelle pour restaurer l'équilibre mental. 
                  Contrairement à la psychiatrie moderne qui se concentre souvent sur les symptômes, 
                  cette science millénaire traite la personne dans sa globalité : corps, esprit et âme.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cet article explore en profondeur comment l'Ayurvéda aborde les troubles mentaux, 
                  propose des protocoles personnalisés selon votre constitution (dosha), 
                  et offre des solutions concrètes pour retrouver la sérénité intérieure.
                </p>
              </section>

              {/* Psychiatrie vs Ayurvéda */}
              <section id="psychiatrie-vs-ayurveda" className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                  Psychiatrie occidentale vs Approche ayurvédique
                </h2>
                
                <div className="overflow-x-auto">
                  <Table className="mb-6">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Aspect</TableHead>
                        <TableHead className="w-1/3">Psychiatrie occidentale</TableHead>
                        <TableHead className="w-1/3">Ayurvéda</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Approche</TableCell>
                        <TableCell>Traitement des symptômes</TableCell>
                        <TableCell>Traitement de la cause racine</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Méthode</TableCell>
                        <TableCell>Médicaments chimiques</TableCell>
                        <TableCell>Plantes, alimentation, mode de vie</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Vision du patient</TableCell>
                        <TableCell>Diagnostic standardisé (DSM-5)</TableCell>
                        <TableCell>Constitution unique (Prakriti)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Durée traitement</TableCell>
                        <TableCell>Souvent à vie</TableCell>
                        <TableCell>Jusqu'au rééquilibrage</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Effets secondaires</TableCell>
                        <TableCell>Fréquents et nombreux</TableCell>
                        <TableCell>Rares si protocole adapté</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Corps-esprit</TableCell>
                        <TableCell>Traités séparément</TableCell>
                        <TableCell>Interconnectés</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  L'Ayurvéda considère que la santé mentale est intimement liée à l'équilibre des trois doshas 
                  (Vata, Pitta, Kapha), à la qualité d'Agni (feu digestif), et à l'accumulation d'Ama (toxines). 
                  Un déséquilibre dans l'un de ces domaines peut se manifester par des troubles psychologiques.
                </p>
              </section>

              {/* Profil Vata */}
              <section id="profil-vata" className="mb-12">
                <Card className="border-blue-500/30 bg-blue-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-400">
                      <div className="p-2 rounded-full bg-blue-500/20">
                        <Leaf className="h-5 w-5" />
                      </div>
                      Profil Vata – L'Anxieux
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Symptômes caractéristiques</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          Anxiété généralisée, pensées en boucle
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          Insomnie, sommeil léger et agité
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          Peurs irrationnelles, phobies
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          Agitation mentale, difficulté à se concentrer
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          Tremblements, palpitations d'origine nerveuse
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Protocole de rééquilibrage</h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-blue-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-blue-300">Alimentation</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Repas chauds, onctueux, nourrissants</li>
                            <li>• Éviter le cru, froid, sec</li>
                            <li>• Ghee, huile de sésame</li>
                            <li>• Épices réchauffantes (gingembre, cannelle)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-blue-300">Mode de vie</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Routine régulière stricte</li>
                            <li>• Coucher avant 22h</li>
                            <li>• Abhyanga quotidien à l'huile de sésame</li>
                            <li>• Yoga doux, éviter les exercices intenses</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-blue-300">Plantes recommandées</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Ashwagandha (adaptogène)</li>
                            <li>• Brahmi (clarté mentale)</li>
                            <li>• Jatamansi (calmant naturel)</li>
                            <li>• Vacha (ancrage)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-blue-300">Pratiques</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Pranayama : Nadi Shodhana</li>
                            <li>• Méditation guidée</li>
                            <li>• Shirodhara (huile sur le front)</li>
                            <li>• Basti (lavement médicinal)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Profil Pitta */}
              <section id="profil-pitta" className="mb-12">
                <Card className="border-orange-500/30 bg-orange-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-400">
                      <div className="p-2 rounded-full bg-orange-500/20">
                        <Heart className="h-5 w-5" />
                      </div>
                      Profil Pitta – L'Irritable
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Symptômes caractéristiques</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          Colère, irritabilité, impatience
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          Perfectionnisme excessif, burn-out
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          Jalousie, esprit critique
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          Troubles du sommeil (réveil entre 2h-4h)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          Inflammations, acidité gastrique
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Protocole de rééquilibrage</h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-orange-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-orange-300">Alimentation</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Aliments rafraîchissants</li>
                            <li>• Éviter épicé, acide, fermenté</li>
                            <li>• Ghee, huile de coco</li>
                            <li>• Fruits doux (melon, raisin)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-orange-300">Mode de vie</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Éviter la compétition</li>
                            <li>• Promenades au clair de lune</li>
                            <li>• Contact avec l'eau (natation)</li>
                            <li>• Éviter le soleil de midi</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-orange-300">Plantes recommandées</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Brahmi (refroidissant mental)</li>
                            <li>• Shatavari (nourrissant)</li>
                            <li>• Amalaki (rafraîchissant)</li>
                            <li>• Rose (calmant émotionnel)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-orange-300">Pratiques</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Pranayama : Shitali (refroidissant)</li>
                            <li>• Méditation de compassion</li>
                            <li>• Massage à l'huile de coco</li>
                            <li>• Virechana (purge douce)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Profil Kapha */}
              <section id="profil-kapha" className="mb-12">
                <Card className="border-green-500/30 bg-green-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-400">
                      <div className="p-2 rounded-full bg-green-500/20">
                        <Brain className="h-5 w-5" />
                      </div>
                      Profil Kapha – Le Dépressif
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Symptômes caractéristiques</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          Dépression, mélancolie, apathie
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          Attachement excessif, possessivité
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          Léthargie, excès de sommeil
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          Prise de poids, rétention d'eau</li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          Résistance au changement, stagnation
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Protocole de rééquilibrage</h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-green-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-green-300">Alimentation</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Repas légers, chauds, épicés</li>
                            <li>• Éviter sucre, produits laitiers, friture</li>
                            <li>• Miel (seul sucrant autorisé)</li>
                            <li>• Épices stimulantes (poivre, gingembre)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-green-300">Mode de vie</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Lever tôt (avant 6h)</li>
                            <li>• Exercice vigoureux quotidien</li>
                            <li>• Éviter les siestes</li>
                            <li>• Nouvelles activités, voyages</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-green-300">Plantes recommandées</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Trikatu (stimulant digestif)</li>
                            <li>• Guggulu (détoxifiant)</li>
                            <li>• Vacha (éveil mental)</li>
                            <li>• Punarnava (drainant)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-900/20 rounded-lg">
                          <h5 className="font-medium mb-2 text-green-300">Pratiques</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Pranayama : Kapalabhati (dynamisant)</li>
                            <li>• Massage Udvartana (poudres)</li>
                            <li>• Nasya (huile nasale)</li>
                            <li>• Vamana (émétique thérapeutique)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Protocole progressif */}
              <section id="protocole-progressif" className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                  Protocole progressif en 4 phases
                </h2>

                <div className="space-y-6">
                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
                        Phase de préparation (Purvakarma) – Semaine 1-2
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Consultation ayurvédique pour déterminer Prakriti et Vikriti</li>
                        <li>• Mise en place d'une routine quotidienne (Dinacharya)</li>
                        <li>• Début de l'alimentation adaptée au dosha</li>
                        <li>• Introduction du Pranayama de base</li>
                        <li>• Réduction progressive des stimulants (café, alcool, écrans)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
                        Phase de purification (Panchakarma) – Semaine 3-5
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Snehana (oléation interne et externe)</li>
                        <li>• Svedana (sudation thérapeutique)</li>
                        <li>• Procédure de purification adaptée au dosha dominant</li>
                        <li>• Shirodhara pour calmer le système nerveux</li>
                        <li>• Repos et alimentation légère</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
                        Phase de reconstruction (Rasayana) – Semaine 6-10
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Introduction des plantes adaptogènes</li>
                        <li>• Régime alimentaire reconstituant</li>
                        <li>• Yoga thérapeutique adapté</li>
                        <li>• Méditation quotidienne</li>
                        <li>• Soins corporels régénérants</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">4</span>
                        Phase de maintien (Swasthavritta) – À vie
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Maintien de la routine quotidienne</li>
                        <li>• Adaptation saisonnière (Ritucharya)</li>
                        <li>• Consultations de suivi trimestrielles</li>
                        <li>• Panchakarma préventif annuel</li>
                        <li>• Pratique spirituelle régulière</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Recettes thérapeutiques */}
              <section id="recettes" className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                  Recettes thérapeutiques
                </h2>

                <div className="space-y-6">
                  {/* Recette 1 */}
                  <Card className="border-blue-500/30 bg-blue-950/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-400">
                        🍵 Lait doré apaisant (Vata)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Ingrédients</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 250 ml de lait entier (ou lait d'amande)</li>
                          <li>• 1 c. à café de curcuma en poudre</li>
                          <li>• 1/2 c. à café de gingembre frais râpé</li>
                          <li>• 1 pincée de poivre noir</li>
                          <li>• 1 c. à café de ghee</li>
                          <li>• 1/2 c. à café d'ashwagandha en poudre</li>
                          <li>• Miel ou sucre de coco (au goût)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Préparation</h5>
                        <p className="text-sm text-muted-foreground">
                          Chauffer le lait à feu doux. Ajouter le curcuma, gingembre, poivre et ghee. 
                          Remuer pendant 5 minutes sans faire bouillir. Retirer du feu, ajouter l'ashwagandha 
                          et sucrer légèrement. Boire chaud 30 minutes avant le coucher.
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        Bienfaits : Calme le système nerveux, favorise un sommeil profond, réduit l'anxiété.
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recette 2 */}
                  <Card className="border-orange-500/30 bg-orange-950/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-400">
                        🥤 Smoothie rafraîchissant (Pitta)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Ingrédients</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 1 tasse de melon mûr</li>
                          <li>• 1/2 concombre pelé</li>
                          <li>• 1 c. à soupe de feuilles de menthe</li>
                          <li>• 1 c. à café d'eau de rose</li>
                          <li>• 200 ml de lait de coco</li>
                          <li>• 1/2 c. à café de shatavari</li>
                          <li>• Quelques glaçons</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Préparation</h5>
                        <p className="text-sm text-muted-foreground">
                          Mixer tous les ingrédients jusqu'à obtenir une consistance lisse. 
                          Servir immédiatement. Idéal en milieu de matinée ou après-midi.
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        Bienfaits : Refroidit le feu interne, calme l'irritabilité, apaise les émotions intenses.
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recette 3 */}
                  <Card className="border-green-500/30 bg-green-950/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-400">
                        ☕ Tisane stimulante (Kapha)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Ingrédients</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 500 ml d'eau chaude</li>
                          <li>• 1 c. à café de gingembre frais râpé</li>
                          <li>• 1/2 c. à café de poivre noir concassé</li>
                          <li>• 3 clous de girofle</li>
                          <li>• 1 bâton de cannelle</li>
                          <li>• 1/2 c. à café de tulsi (basilic sacré)</li>
                          <li>• Miel cru (1 c. à soupe)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-foreground">Préparation</h5>
                        <p className="text-sm text-muted-foreground">
                          Porter l'eau à ébullition avec toutes les épices sauf le tulsi. 
                          Laisser infuser 10 minutes à couvert. Filtrer, ajouter le tulsi et le miel 
                          (quand la tisane est tiède). Boire le matin à jeun.
                        </p>
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        Bienfaits : Stimule le métabolisme, combat la léthargie, élève l'humeur naturellement.
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Urgences psychiatriques */}
              <section id="urgences" className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                  Urgences psychiatriques
                </h2>

                <Card className="border-red-500/50 bg-red-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-400">
                      <AlertTriangle className="h-5 w-5" />
                      Avertissement important
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      L'Ayurvéda est une approche complémentaire précieuse pour la santé mentale, mais elle ne 
                      remplace pas une prise en charge psychiatrique d'urgence dans les situations suivantes :
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">⚠️</span>
                        Idées suicidaires ou d'automutilation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">⚠️</span>
                        Épisodes psychotiques (hallucinations, délires)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">⚠️</span>
                        Crises maniaques sévères
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">⚠️</span>
                        Sevrage de substances (alcool, benzodiazépines)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">⚠️</span>
                        Catatonie ou mutisme soudain
                      </li>
                    </ul>

                    <div className="flex items-center gap-4 p-4 bg-red-900/30 rounded-lg mt-4">
                      <Phone className="h-8 w-8 text-red-400 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">En cas d'urgence, contactez immédiatement :</p>
                        <p className="text-muted-foreground">SAMU : 15 | SOS Amitié : 09 72 39 40 50</p>
                        <p className="text-muted-foreground">Numéro national de prévention du suicide : 3114</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Checklist */}
              <section id="checklist" className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                  Checklist pratique quotidienne
                </h2>

                <Card className="border-primary/30">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6">
                      Cochez les éléments que vous intégrez déjà dans votre routine. 
                      L'objectif est d'atteindre progressivement 8/10 pratiques régulières.
                    </p>
                    <div className="space-y-3">
                      {checklistItems.map((item) => (
                        <label 
                          key={item.key}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                        >
                          <button
                            onClick={() => toggleCheckItem(item.key)}
                            className={`flex items-center justify-center w-6 h-6 rounded border-2 transition-colors ${
                              checkedItems[item.key] 
                                ? "bg-primary border-primary text-primary-foreground" 
                                : "border-muted-foreground"
                            }`}
                          >
                            {checkedItems[item.key] && <CheckCircle2 className="h-4 w-4" />}
                          </button>
                          <span className={`${checkedItems[item.key] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-center">
                        Pratiques cochées : <span className="font-bold text-primary">
                          {Object.values(checkedItems).filter(Boolean).length}
                        </span> / {checklistItems.length}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'Ayurvéda offre une voie profonde et durable vers la guérison mentale. En comprenant 
                  votre constitution unique et en appliquant les principes adaptés à votre dosha, 
                  vous pouvez transformer votre relation avec le stress, l'anxiété et la dépression.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  N'oubliez pas que ce chemin demande patience et constance. Les résultats ne sont pas 
                  immédiats comme avec les médicaments chimiques, mais ils sont profonds et durables. 
                  Commencez par de petits changements et observez comment votre corps et votre esprit répondent.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/bilan-de-sante">
                      Prendre RDV pour un bilan
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/bhutavidya">
                      Découvrir la consultation Bhutavidya
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Related Articles */}
              <section className="border-t border-border pt-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                  Articles connexes
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link 
                    to="/blog/gerer-stress-ayurveda"
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground mb-1">Gérer le stress avec l'Ayurvéda</h4>
                    <p className="text-sm text-muted-foreground">Techniques de respiration et herbes calmantes</p>
                  </Link>
                  <Link 
                    to="/blog/routine-matinale-dinacharya"
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground mb-1">Dinacharya : la routine matinale</h4>
                    <p className="text-sm text-muted-foreground">Pratiques pour commencer la journée sereinement</p>
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Retour en haut"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </Layout>
  );
};

export default AyurvedaSanteMentale;