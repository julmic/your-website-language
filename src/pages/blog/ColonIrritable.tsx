import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ChevronUp, Wind, Flame, Droplets, Sparkles, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import colonHeroImg from "@/assets/blog/colon-irritable-hero.webp";

const ColonIrritable = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const tableOfContents = [
    { id: "comprendre", label: "Comprendre le SCI" },
    { id: "agni", label: "Le rôle d'Agni" },
    { id: "doshas", label: "Les 3 Doshas et le SCI" },
    { id: "profils", label: "Les 4 Profils Grahani" },
    { id: "protocole", label: "Protocole en 3 Phases" },
    { id: "recettes", label: "Recettes Thérapeutiques" },
    { id: "crises", label: "Gestion de Crise" },
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
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 rounded-full text-primary">
                  🌿 Digestion
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  17 Décembre 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  20 min de lecture
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                🌿 Le Syndrome du Côlon Irritable et l'Ayurvéda
              </h1>
              <h2 className="text-xl text-primary mb-4">
                Apaiser « Grahani Dosha », le Ventre qui Pleure
              </h2>
              
              <p className="text-muted-foreground mb-6">
                <strong>Comprendre, identifier et apaiser naturellement</strong> votre côlon irritable avec la sagesse millénaire de l'Ayurvéda.
                Découvrez votre profil Grahani et le protocole thérapeutique personnalisé qui vous correspond.
              </p>

              <div className="flex gap-4">
                <Button onClick={() => scrollToSection("profils")}>
                  🧪 Découvrir les Profils
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("comprendre")}>
                  📖 En savoir plus
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={colonHeroImg} 
                alt="Côlon Irritable et Ayurvéda" 
                className="rounded-xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
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
            <article className="flex-1 max-w-4xl">
              
              {/* Section: Comprendre le SCI */}
              <section id="comprendre" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  🌱 Comprendre le SCI selon l'Ayurvéda
                </h2>

                <Card className="border-primary/30 mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">📖 Qu'est-ce que Grahani ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      En Ayurvéda, <strong>Grahani</strong> désigne la partie du système digestif située entre l'estomac et l'intestin grêle. 
                      C'est le siège d'<strong>Agni</strong> (le feu digestif), responsable de la transformation des aliments en nutriments 
                      et de l'élimination des déchets.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Lorsque <strong>Agni est affaibli</strong>, Grahani ne peut plus « retenir » (Graha = attraper) correctement les aliments digérés. 
                      Cela entraîne une <strong>mauvaise absorption</strong>, la formation de <strong>toxines (Ama)</strong>, et des symptômes typiques du SCI :
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>❌ Alternance diarrhée/constipation</li>
                      <li>❌ Ballonnements et gaz</li>
                      <li>❌ Douleurs abdominales</li>
                      <li>❌ Fatigue chronique</li>
                      <li>❌ Inflammation intestinale</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Agni */}
              <section id="agni" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                  🔥 Le rôle d'Agni (Feu Digestif)
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  <strong>Agni</strong> est considéré comme le pilier de la santé en Ayurvéda. Un Agni équilibré garantit une digestion optimale, 
                  une élimination régulière et une immunité forte.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  <strong>Quand Agni est perturbé, 4 états sont possibles :</strong>
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card className="border-orange-500/30 bg-orange-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-orange-400 flex items-center gap-2">
                        <Flame className="h-5 w-5" />
                        Tikshna Agni
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Digestion trop rapide, selles brûlantes, acidité (Pitta ↑)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-500/30 bg-blue-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-blue-400 flex items-center gap-2">
                        🧊 Manda Agni
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Digestion lourde, constipation, mucus (Kapha ↑)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-500/30 bg-purple-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-purple-400 flex items-center gap-2">
                        🌀 Vishama Agni
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Digestion imprévisible, gaz, alternance (Vata ↑)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/30 bg-green-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-green-400 flex items-center gap-2">
                        ✅ Sama Agni
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Digestion optimale, régularité, vitalité
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section: Doshas */}
              <section id="doshas" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                  🌀 Les 3 Doshas et le SCI
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Le SCI se manifeste différemment selon le <strong>Dosha en déséquilibre</strong> :
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-blue-500/30 bg-blue-950/10">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                        <Wind className="h-6 w-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-lg text-blue-400">VATA</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm font-medium text-foreground mb-2">Erratique</p>
                      <p className="text-sm text-muted-foreground">
                        Douleurs migrantes, gaz, selles alternées, anxiété
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-500/30 bg-orange-950/10">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-2">
                        <Flame className="h-6 w-6 text-orange-400" />
                      </div>
                      <CardTitle className="text-lg text-orange-400">PITTA</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm font-medium text-foreground mb-2">Brûlant</p>
                      <p className="text-sm text-muted-foreground">
                        Diarrhées acides, brûlures, inflammation, irritabilité
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/30 bg-green-950/10">
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                        <Droplets className="h-6 w-6 text-green-400" />
                      </div>
                      <CardTitle className="text-lg text-green-400">KAPHA</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm font-medium text-foreground mb-2">Lourd</p>
                      <p className="text-sm text-muted-foreground">
                        Constipation, mucus, lourdeur, léthargie
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section: Profils */}
              <section id="profils" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                  🌈 Les 4 Profils de Grahani Dosha
                </h2>
                <p className="text-muted-foreground mb-8">
                  Découvrez les caractéristiques de chaque profil et leurs approches thérapeutiques spécifiques.
                </p>

                <Tabs defaultValue="vata" className="w-full">
                  <TabsList className="grid grid-cols-4 w-full mb-6">
                    <TabsTrigger value="vata" className="text-xs sm:text-sm">VATA</TabsTrigger>
                    <TabsTrigger value="pitta" className="text-xs sm:text-sm">PITTA</TabsTrigger>
                    <TabsTrigger value="kapha" className="text-xs sm:text-sm">KAPHA</TabsTrigger>
                    <TabsTrigger value="mixte" className="text-xs sm:text-sm">MIXTE</TabsTrigger>
                  </TabsList>

                  {/* Profil Vata */}
                  <TabsContent value="vata">
                    <Card className="border-blue-500/30 bg-blue-950/10">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-400 flex items-center gap-2">
                          <Wind className="h-6 w-6" />
                          🌬️ VATAJA GRAHANI – Le Profil Erratique
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-muted-foreground">
                          <p className="mb-2">
                            <strong>Sarah, 29 ans, cadre commerciale :</strong>
                          </p>
                          <p>
                            « Mon côlon réagit à tout : stress au boulot = crampes immédiates. Mes symptômes changent constamment : 
                            un jour constipée, le lendemain diarrhée explosive. J'ai l'impression que mon ventre vit sa propre vie, 
                            totalement déconnecté de ma tête. Les spasmes me réveillent la nuit. »
                          </p>
                        </blockquote>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🔍 Caractéristiques :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Alternance constipation/diarrhée</li>
                            <li>• Gaz, ballonnements, borborygmes</li>
                            <li>• Douleurs migrantes, crampes légères</li>
                            <li>• Selles sèches, dures ou fragmentées</li>
                            <li>• Anxiété, insomnie, agitation mentale</li>
                            <li>• Peau sèche, frilosité</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-blue-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-blue-300">🌱 Causes :</h5>
                          <p className="text-sm text-muted-foreground">
                            Stress chronique, rythmes irréguliers, excès d'aliments froids/secs/crus, voyages fréquents
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🍃 Plantes clés :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>✅ <strong>Ashwagandha</strong> : Calme le système nerveux</li>
                            <li>✅ <strong>Shatavari</strong> : Hydrate et lubrifie</li>
                            <li>✅ <strong>Triphala</strong> : Régule le transit</li>
                            <li>✅ <strong>Gingembre</strong> : Stimule Agni sans assécher</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-green-900/20 rounded-lg">
                            <h5 className="font-semibold mb-2 text-green-400">✅ Alimentation</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Chaud, cuit, onctueux, légèrement épicé</li>
                              <li>• Soupes, kitchari, ghee, huiles de sésame</li>
                              <li>• Repas réguliers, ambiance calme</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-red-900/20 rounded-lg">
                            <h5 className="font-semibold mb-2 text-red-400">❌ À éviter</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Cru, froid, sec</li>
                              <li>• Stimulants (café, thé noir)</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-3 bg-blue-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-blue-300">🧘 Routine :</h5>
                          <p className="text-sm text-muted-foreground">
                            Méditation, yoga doux (Yin, Nidra), massages à l'huile chaude (Abhyanga), couchers réguliers
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Profil Pitta */}
                  <TabsContent value="pitta">
                    <Card className="border-orange-500/30 bg-orange-950/10">
                      <CardHeader>
                        <CardTitle className="text-xl text-orange-400 flex items-center gap-2">
                          <Flame className="h-6 w-6" />
                          🔥 PITTAJA GRAHANI – Le Profil Inflammatoire
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-muted-foreground">
                          <p className="mb-2">
                            <strong>Marc, 45 ans, chef de projet :</strong>
                          </p>
                          <p>
                            « Dès que je mange épicé ou que je suis en colère, c'est la crise : diarrhées brûlantes, douleurs aigües 
                            comme un feu dans le ventre. Je me sens irritable, j'ai tout le temps chaud. Le stress me donne des aigreurs 
                            et des envies pressantes après les repas. »
                          </p>
                        </blockquote>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🔍 Caractéristiques :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Diarrhées fréquentes, liquides, brûlantes</li>
                            <li>• Selles jaunes/verdâtres, odeur forte</li>
                            <li>• Acidité, brûlures d'estomac, soif excessive</li>
                            <li>• Inflammation intestinale, sensation de chaleur</li>
                            <li>• Irritabilité, impatience, perfectionnisme</li>
                            <li>• Peau sensible, rougeurs, sueurs nocturnes</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-orange-300">🌱 Causes :</h5>
                          <p className="text-sm text-muted-foreground">
                            Alimentation épicée/acide/frite, alcool, surmenage, colère refoulée, exposition à la chaleur
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🍃 Plantes clés :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>✅ <strong>Aloe vera</strong> : Apaise l'inflammation</li>
                            <li>✅ <strong>Coriandre</strong> : Rafraîchit le système digestif</li>
                            <li>✅ <strong>Réglisse (Yashtimadhu)</strong> : Protège la muqueuse</li>
                            <li>✅ <strong>Curcuma</strong> : Anti-inflammatoire puissant</li>
                            <li>✅ <strong>Neem</strong> : Purifie le sang</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-green-900/20 rounded-lg">
                            <h5 className="font-semibold mb-2 text-green-400">✅ Alimentation</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Frais, doux, amer, astringent</li>
                              <li>• Légumes verts, concombre, lait végétal, ghee</li>
                              <li>• Éviter de sauter des repas</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-red-900/20 rounded-lg">
                            <h5 className="font-semibold mb-2 text-red-400">❌ À éviter</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Épices fortes, friture, alcool</li>
                              <li>• Tomates, agrumes</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-orange-300">🧘 Routine :</h5>
                          <p className="text-sm text-muted-foreground">
                            Méditation de pleine conscience, yoga rafraîchissant (Shitali pranayama), éviter le soleil de midi, loisirs créatifs
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Profil Kapha */}
                  <TabsContent value="kapha">
                    <Card className="border-green-500/30 bg-green-950/10">
                      <CardHeader>
                        <CardTitle className="text-xl text-green-400 flex items-center gap-2">
                          <Droplets className="h-6 w-6" />
                          💧 KAPHAJA GRAHANI – Le Profil Congestif
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <blockquote className="border-l-4 border-green-500 pl-4 italic text-muted-foreground">
                          <p className="mb-2">
                            <strong>Chloé, 36 ans, enseignante :</strong>
                          </p>
                          <p>
                            « Ma constipation est chronique, avec une sensation de lourdeur constante dans le bas-ventre. 
                            Mes selles sont souvent collantes, avec du mucus. Je me sens léthargique, j'ai du mal à me lever le matin. 
                            J'ai l'impression que rien ne bouge, mon ventre est comme engourdi. »
                          </p>
                        </blockquote>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🔍 Caractéristiques :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Constipation chronique, selles épaisses/collantes</li>
                            <li>• Lourdeur abdominale persistante</li>
                            <li>• Mucus dans les selles ou la gorge</li>
                            <li>• Digestion lente, somnolence après les repas</li>
                            <li>• Prise de poids, rétention d'eau</li>
                            <li>• Apathie, résistance au changement, dépression légère</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-green-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-green-300">🌱 Causes :</h5>
                          <p className="text-sm text-muted-foreground">
                            Excès de produits laitiers/sucrés/gras, sédentarité, repas tardifs, siestes post-prandiales
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🍃 Plantes clés :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>✅ <strong>Trikatu</strong> : Stimule puissamment Agni</li>
                            <li>✅ <strong>Guggulu</strong> : Favorise l'élimination</li>
                            <li>✅ <strong>Punarnava</strong> : Draine les excès d'eau</li>
                            <li>✅ <strong>Tulsi (Basilic sacré)</strong> : Active le métabolisme</li>
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-green-900/20 rounded-lg">
                            <h5 className="font-semibold mb-2 text-green-400">✅ Alimentation</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Léger, sec, chaud, épicé</li>
                              <li>• Légumes verts amers, céréales anciennes</li>
                              <li>• Jeûne intermittent léger</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-red-900/20 rounded-lg">
                            <h5 className="font-semibold mb-2 text-red-400">❌ À éviter</h5>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Produits laitiers, sucre, blé</li>
                              <li>• Aliments lourds/froids</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-3 bg-green-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-green-300">🧘 Routine :</h5>
                          <p className="text-sm text-muted-foreground">
                            Exercice vigoureux (cardio, Vinyasa yoga), réveil tôt, brossage à sec, éviter les siestes
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Profil Mixte */}
                  <TabsContent value="mixte">
                    <Card className="border-purple-500/30 bg-purple-950/10">
                      <CardHeader>
                        <CardTitle className="text-xl text-purple-400 flex items-center gap-2">
                          <Sparkles className="h-6 w-6" />
                          🌈 SANNIPATAJA GRAHANI – Le Profil Mixte
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-muted-foreground">
                          <p className="mb-2">
                            <strong>David, 50 ans, artisan :</strong>
                          </p>
                          <p>
                            « Mes symptômes sont un mélange bizarre. Parfois je suis super constipé et ballonné, comme Kapha, 
                            mais dès que je suis stressé, j'ai des crampes et des gaz erratiques comme Vata. Et si je force un peu trop 
                            sur le café, des brûlures apparaissent. C'est difficile de savoir quoi faire ! »
                          </p>
                        </blockquote>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🔍 Caractéristiques :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Symptômes mixtes et changeants</li>
                            <li>• Association de plusieurs déséquilibres</li>
                            <li>• Cas les plus complexes et chroniques</li>
                            <li>• Réponse imprévisible aux traitements standards</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-purple-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-purple-300">🌱 Causes :</h5>
                          <p className="text-sm text-muted-foreground">
                            Accumulation de plusieurs facteurs aggravants, négligence prolongée, stress multi-factoriel
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">🍃 Approche :</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>✅ Nécessite un suivi personnalisé par un praticien</li>
                            <li>✅ Traitement par phases (pacifier le dosha dominant d'abord)</li>
                            <li>✅ Formules multi-plantes adaptées (Hingvastaka, Chitrakadi Vati)</li>
                            <li>✅ Ajustements réguliers selon l'évolution</li>
                          </ul>
                        </div>

                        <div className="p-3 bg-purple-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-purple-300">🍽️ Alimentation :</h5>
                          <p className="text-sm text-muted-foreground">
                            Kitchari thérapeutique, mono-diètes temporaires, réintroduction progressive des aliments
                          </p>
                        </div>

                        <div className="p-3 bg-purple-900/20 rounded-lg">
                          <h5 className="font-semibold mb-2 text-purple-300">🧘 Routine :</h5>
                          <p className="text-sm text-muted-foreground">
                            Pratiques douces et régulières, éviter les extrêmes, prioriser le repos et la régularité
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Section: Protocole */}
              <section id="protocole" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                  🌿 Protocole Thérapeutique en 3 Phases
                </h2>
                <p className="text-muted-foreground mb-8">
                  L'Ayurvéda propose une approche progressive pour restaurer durablement la santé digestive.
                </p>

                <div className="space-y-6">
                  {/* Phase 1 */}
                  <Card className="border-orange-500/30">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 font-bold">1</span>
                        <div>
                          <CardTitle>PHASE 1 : Deepana-Pachana (Raviver Agni)</CardTitle>
                          <p className="text-sm text-muted-foreground">Durée : 1-2 semaines</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        <strong>Objectif :</strong> Relancer le feu digestif affaibli et brûler Ama (toxines)
                      </p>
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2 text-foreground">Actions :</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Tisanes digestives (gingembre, cumin, fenouil)</li>
                          <li>• Épices : Trikatu, Hingvastaka churna</li>
                          <li>• Alimentation très légère</li>
                          <li>• Jeûne partiel si besoin</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-red-900/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>⚠️ Aliments à ÉVITER absolument (Ama générateurs) :</strong><br />
                          Aliments transformés, froids, lourds, gras, non compatibles (ex: fruits avec repas)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 2 */}
                  <Card className="border-blue-500/30">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold">2</span>
                        <div>
                          <CardTitle>PHASE 2 : Shodhana (Détoxification)</CardTitle>
                          <p className="text-sm text-muted-foreground">Durée : 1-4 semaines</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        <strong>Objectif :</strong> Éliminer Ama et les doshas en excès
                      </p>
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2 text-foreground">Actions :</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Cure de Triphala</li>
                          <li>• Mono-diète au kitchari</li>
                          <li>• Bains de vapeur (Swedana)</li>
                          <li>• Basti (lavements thérapeutiques) si approprié</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-green-900/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>✅ Aliments TRÈS favorables :</strong><br />
                          Riz basmati, avoine, quinoa, lentilles jaunes/rouges, courgette, carotte, patate douce, ghee
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 3 */}
                  <Card className="border-green-500/30">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 text-green-400 font-bold">3</span>
                        <div>
                          <CardTitle>PHASE 3 : Shamana-Rasayana (Régénération)</CardTitle>
                          <p className="text-sm text-muted-foreground">Durée : 2-6 mois</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        <strong>Objectif :</strong> Rééquilibrer les doshas et régénérer les tissus
                      </p>
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2 text-foreground">Actions :</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Plantes adaptogènes (Ashwagandha, Shatavari)</li>
                          <li>• Alimentation nourrissante adaptée au dosha</li>
                          <li>• Routine quotidienne stable (Dinacharya)</li>
                          <li>• Pratiques yogiques et méditatives</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <p className="text-sm text-primary">
                          <strong>🔑 Clé du succès :</strong> La persévérance, l'écoute de son corps et l'ajustement constant sont essentiels pour un apaisement durable.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section: Recettes */}
              <section id="recettes" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                  🍲 Recettes Thérapeutiques
                </h2>
                <p className="text-muted-foreground mb-8">
                  Des préparations ayurvédiques simples et efficaces pour soutenir votre apaisement.
                </p>

                <div className="space-y-6">
                  {/* Kitchari */}
                  <Card className="border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-xl">🍚 Kitchari Thérapeutique (Tridoshique)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">🥘 Ingrédients :</h5>
                        <ul className="text-sm text-muted-foreground grid md:grid-cols-2 gap-1">
                          <li>• ½ tasse de riz basmati</li>
                          <li>• ½ tasse de haricots mungo (moong dal)</li>
                          <li>• 1 c. à soupe de ghee</li>
                          <li>• 1 c. à café de cumin</li>
                          <li>• 1 c. à café de coriandre moulue</li>
                          <li>• ½ c. à café de curcuma</li>
                          <li>• 1 pincée d'hing (asafoetida)</li>
                          <li>• Légumes cuits (courgette, carotte, épinards)</li>
                          <li>• Sel gemme</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">👨‍🍳 Préparation :</h5>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Rincer riz et dal jusqu'à eau claire</li>
                          <li>2. Faire chauffer le ghee, ajouter cumin et hing</li>
                          <li>3. Ajouter épices, puis riz et dal</li>
                          <li>4. Couvrir d'eau (4 tasses), porter à ébullition</li>
                          <li>5. Réduire, couvrir, cuire 25-30 min</li>
                          <li>6. Ajouter légumes 10 min avant la fin</li>
                        </ol>
                      </div>

                      <div className="p-3 bg-green-900/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>💚 Bénéfices :</strong> Facile à digérer, détoxifiant, équilibrant pour les 3 doshas, nourrissant sans alourdir
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tisane CCF */}
                  <Card className="border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-xl">☕ Tisane CCF (Cumin-Coriandre-Fenouil)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">🥘 Ingrédients :</h5>
                        <ul className="text-sm text-muted-foreground">
                          <li>• 1 c. à café de graines de cumin</li>
                          <li>• 1 c. à café de graines de coriandre</li>
                          <li>• 1 c. à café de graines de fenouil</li>
                          <li>• 1 litre d'eau</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">👨‍🍳 Préparation :</h5>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Porter l'eau à ébullition</li>
                          <li>2. Ajouter les graines</li>
                          <li>3. Laisser mijoter 5-10 minutes</li>
                          <li>4. Filtrer et boire tiède tout au long de la journée</li>
                        </ol>
                      </div>

                      <div className="p-3 bg-green-900/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>💚 Bénéfices :</strong> Stimule Agni, réduit les gaz et ballonnements, favorise l'élimination des toxines, apaise les 3 doshas
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Takra */}
                  <Card className="border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-xl">🥛 Takra (Babeurre Médicinal)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">🥘 Ingrédients :</h5>
                        <ul className="text-sm text-muted-foreground">
                          <li>• ¼ tasse de yaourt nature (bio, entier)</li>
                          <li>• ¾ tasse d'eau tiède</li>
                          <li>• 1 pincée de cumin moulu</li>
                          <li>• 1 pincée de sel gemme</li>
                          <li>• Quelques feuilles de coriandre fraîche</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2 text-foreground">👨‍🍳 Préparation :</h5>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Fouetter le yaourt avec l'eau</li>
                          <li>2. Ajouter épices et herbes</li>
                          <li>3. Boire à température ambiante avec le repas de midi</li>
                        </ol>
                      </div>

                      <div className="p-3 bg-green-900/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>💚 Bénéfices :</strong> Réensemence le microbiote, améliore l'absorption, particulièrement recommandé pour Grahani
                        </p>
                      </div>

                      <div className="p-3 bg-orange-900/20 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>⚠️ Note :</strong> Éviter en cas de Kapha élevé ou congestion
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section: Crises */}
              <section id="crises" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                  🚨 Gestion de Crise
                </h2>
                <p className="text-muted-foreground mb-8">
                  Protocoles d'urgence pour apaiser rapidement les symptômes aigus.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Diarrhée */}
                  <Card className="border-orange-500/30 bg-orange-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-orange-400">🔥 Crise de diarrhée aiguë</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <h5 className="font-semibold mb-1 text-foreground text-sm">Action immédiate :</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Jeûne hydrique (eau de riz, tisane de fenouil)</li>
                          <li>• 1 c. à café de psyllium dans de l'eau tiède</li>
                          <li>• Compresse chaude sur le ventre</li>
                          <li>• Position allongée, jambes repliées</li>
                        </ul>
                      </div>
                      <div className="p-2 bg-green-900/20 rounded text-sm text-muted-foreground">
                        <strong>Reprise alimentaire :</strong> Riz blanc cuit + eau de cuisson salée, banane écrasée, compote de pomme
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ballonnements */}
                  <Card className="border-blue-500/30 bg-blue-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-blue-400">🌀 Crise de ballonnements/gaz</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <h5 className="font-semibold mb-1 text-foreground text-sm">Action immédiate :</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Tisane de gingembre frais + miel</li>
                          <li>• Massage abdominal sens horaire avec huile de ricin</li>
                          <li>• Posture Pawanmuktasana (libération des vents)</li>
                          <li>• Marche lente 10-15 minutes</li>
                        </ul>
                      </div>
                      <div className="p-2 bg-red-900/20 rounded text-sm text-muted-foreground">
                        <strong>À éviter :</strong> Rester allongé immédiatement après les repas, aliments fermentescibles
                      </div>
                    </CardContent>
                  </Card>

                  {/* Constipation */}
                  <Card className="border-green-500/30 bg-green-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-green-400">❄️ Constipation sévère</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <h5 className="font-semibold mb-1 text-foreground text-sm">Action immédiate :</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 1 verre d'eau tiède + jus de citron à jeun</li>
                          <li>• 1 c. à soupe d'huile de ricin avant le coucher</li>
                          <li>• Triphala (2 gélules) le soir</li>
                          <li>• Consommer pruneaux trempés + figues</li>
                        </ul>
                      </div>
                      <div className="p-2 bg-green-900/20 rounded text-sm text-muted-foreground">
                        <strong>Pratique :</strong> Malasana (posture de la guirlande), respiration abdominale profonde
                      </div>
                    </CardContent>
                  </Card>

                  {/* Brûlures */}
                  <Card className="border-red-500/30 bg-red-950/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-red-400">🔥 Brûlures/acidité</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <h5 className="font-semibold mb-1 text-foreground text-sm">Action immédiate :</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 1 c. à soupe de gel d'aloe vera pur</li>
                          <li>• Lait végétal (coco/amande) froid</li>
                          <li>• Eau de coco</li>
                          <li>• Respiration rafraîchissante (Shitali)</li>
                        </ul>
                      </div>
                      <div className="p-2 bg-red-900/20 rounded text-sm text-muted-foreground">
                        <strong>À éviter absolument :</strong> Café, alcool, tomates, agrumes, chocolat, épices fortes
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* CTA */}
              <section className="mb-12">
                <Card className="border-primary bg-primary/10">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground text-center">
                      🌿 Prêt(e) à apaiser votre côlon naturellement ?
                    </h2>
                    <p className="text-center text-muted-foreground mb-6">
                      Bénéficiez d'un accompagnement personnalisé en Ayurvéda et découvrez les soins adaptés à votre profil unique.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg">
                        <Link to="/bilan-de-sante">
                          Prendre RDV pour un bilan
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/contact">
                          ✉️ Me Contacter
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Related Articles */}
              <section className="border-t border-border pt-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                  Articles connexes
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link 
                    to="/blog/ayurveda-sante-mentale"
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground mb-1">L'Ayurvéda pour une Santé Mentale Optimale</h4>
                    <p className="text-sm text-muted-foreground">Anxiété, dépression et burn-out traités naturellement</p>
                  </Link>
                  <Link 
                    to="/blog/alimentation-ayurvedique-hiver"
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground mb-1">Alimentation ayurvédique en hiver</h4>
                    <p className="text-sm text-muted-foreground">Adapter son alimentation selon les principes ayurvédiques</p>
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

export default ColonIrritable;