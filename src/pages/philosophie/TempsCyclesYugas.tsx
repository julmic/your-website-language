import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Sun, Moon, Flame, Sparkles, BookOpen, Eye, Star, Infinity, ArrowRight, ChevronRight, AlertTriangle, Heart, Compass, Lightbulb, Users, Target, Zap, RefreshCw, Shield, Crown, Feather, Timer } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "temps-cosmique", title: "I. Temps Cosmique" },
  { id: "architecture", title: "II. Architecture" },
  { id: "quatre-yugas", title: "III. Les 4 Yugas" },
  { id: "interpretation", title: "IV. Interprétation" },
  { id: "durees-debats", title: "V. Durées & Débats" },
  { id: "position-actuelle", title: "VI. Où en sommes-nous ?" },
  { id: "pratiques", title: "VII. Pratiques" },
  { id: "moksha", title: "VIII. Mokṣa" },
  { id: "conclusion", title: "Conclusion" },
];

const TempsCyclesYugas = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Le Temps, les Cycles et les Yugas | Philosophie Védique | Arkadhya</title>
        <meta name="description" content="Traité complet sur la conception védique du Temps cosmique : Kāla, les quatre Yugas, Kali Yuga, cycles cosmiques et libération spirituelle." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/philosophie-vedique">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la Philosophie Védique
            </Link>
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground">
                Le Temps, les Cycles <span className="text-primary">et les Yugas</span>
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Traité sur la conception védique du Temps cosmique
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Lecture estimée : 60-90 minutes — Un voyage à travers les cycles éternels de l'univers
          </p>
        </div>
      </section>

      {/* Table of Contents - Sticky */}
      <section className="py-4 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors whitespace-nowrap text-foreground"
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Introduction */}
          <section id="introduction">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  Introduction — La Vision Védique du Temps
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Pour la conscience moderne occidentale, le <strong className="text-foreground">temps</strong> est une ligne droite, 
                    une flèche filant du passé vers le futur, mesurant le progrès ou le déclin, marquant la naissance et la mort 
                    sans retour. Cette vision linéaire, héritée du rationalisme grec et du monothéisme abrahamique, 
                    façonne notre rapport au monde : nous vivons dans l'urgence, mesurant tout à l'aune de l'éphémère.
                  </p>
                  <p>
                    La tradition védique propose une <strong className="text-foreground">cosmovision radicalement différente</strong>. 
                    Le temps n'y est pas une ligne, mais un <em>cercle</em> — ou plutôt une spirale, car les cycles ne se 
                    répètent jamais à l'identique. Le temps n'est pas non plus une abstraction extérieure : il est 
                    <strong className="text-foreground"> Kāla</strong>, une force vivante, une manifestation du Divin, aussi réel 
                    que l'espace ou la matière.
                  </p>
                  
                  <Card className="bg-secondary/30 border-secondary my-6">
                    <CardContent className="p-6">
                      <p className="text-lg font-medium text-foreground italic">
                        "Kālo jagad-bhakṣakaḥ, kālasya bhakṣako hariḥ"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        « Le Temps dévore le monde, mais le Seigneur dévore le Temps. »
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">— Sagesse populaire védantique</p>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Objectifs de ce traité</h3>
                  <p>
                    Ce traité vise à transmettre une compréhension profonde, pas seulement intellectuelle mais 
                    <strong className="text-foreground"> transformatrice</strong>, de la nature du temps selon les Vedas. 
                    Nous explorerons :
                  </p>
                  <ul className="space-y-2 my-4">
                    <li>• <strong className="text-foreground">La nature mystique du Temps</strong> (Kāla) comme force cosmique</li>
                    <li>• <strong className="text-foreground">L'architecture monumentale</strong> des cycles (Kalpas, Manvantaras, Yugas)</li>
                    <li>• <strong className="text-foreground">Les quatre âges cosmiques</strong> (Satya, Tretā, Dvāpara, Kali) en détail</li>
                    <li>• <strong className="text-foreground">Notre position actuelle</strong> dans le cycle et ses implications</li>
                    <li>• <strong className="text-foreground">Les pratiques spirituelles adaptées</strong> à notre époque</li>
                    <li>• <strong className="text-foreground">La voie au-delà du temps</strong> : Mokṣa et libération</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section I - Le Temps Cosmique */}
          <section id="temps-cosmique">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Sun className="w-6 h-6 text-amber-500" />
              I. Le Temps Cosmique : Nature, Fonction, Symbolique
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Kāla : Le Temps comme Principe Vivant</h3>
              <p>
                Le mot sanskrit <strong className="text-foreground">Kāla</strong> (काल) dérive de la racine <em>kal</em> 
                qui signifie « compter », « impeller », « conduire vers ». Mais Kāla n'est pas un simple compteur : 
                c'est une <strong className="text-foreground">puissance divine</strong>, une forme de l'Absolu qui orchestre 
                le déploiement de l'univers.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "kālo'smi loka-kṣaya-kṛt pravṛddho<br/>
                    lokān samāhartum iha pravṛttaḥ"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Je suis le Temps, le destructeur des mondes, pleinement manifesté,<br/>
                    engagé ici à rassembler les mondes [vers leur dissolution]. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Bhagavad Gītā 11.32</p>
                </CardContent>
              </Card>

              <p>
                Cette parole de Kṛṣṇa révèle le Temps non comme une abstraction mais comme une 
                <strong className="text-foreground"> épiphanie du Divin lui-même</strong>. Kāla est simultanément :
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-500" />
                      Manifestation de Śiva
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      En tant que <strong>Mahākāla</strong> (le Grand Temps), Śiva détruit les mondes à la fin de chaque cycle, 
                      non par cruauté mais par compassion cosmique — car toute forme doit retourner à sa source pour renaître purifiée.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Star className="w-5 h-5 text-blue-500" />
                      Manifestation de Viṣṇu
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      En tant que <strong>Kālātman</strong> (l'Âme du Temps), Viṣṇu préserve l'ordre cosmique à travers le temps, 
                      s'incarnant périodiquement en Avatars pour rétablir le Dharma.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Trois Fonctions du Temps</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Fonction</th>
                      <th className="p-3 text-left text-foreground">Description</th>
                      <th className="p-3 text-left text-foreground">Signification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Irréversibilité</td>
                      <td className="p-3">Le temps ne peut être remonté</td>
                      <td className="p-3">Enseigne le non-attachement, la valeur de l'instant</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Impartialité</td>
                      <td className="p-3">Il touche tous les êtres également</td>
                      <td className="p-3">Égalité cosmique : rois et mendiants vieillissent ensemble</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Révélation</td>
                      <td className="p-3">Il dévoile la vraie nature de toute chose</td>
                      <td className="p-3">Le temps est un maître spirituel patient</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Le Temps dans les Upanishads</h3>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "kālaḥ pacati bhūtāni kālaḥ saṃharate prajāḥ"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Le Temps cuit [fait mûrir] tous les êtres, le Temps rassemble les créatures. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Śvetāśvatara Upaniṣad</p>
                </CardContent>
              </Card>

              <p>
                Le verbe « cuire » (<em>pacati</em>) est révélateur : le Temps est comme un feu qui transforme 
                l'expérience brute en sagesse mûrie. La vie n'est pas une succession d'événements mais une 
                <strong className="text-foreground"> alchimie lente</strong> où l'âme se raffine.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Le Temps en Āyurveda</h3>
              <p>
                L'Āyurveda, « science de la vie », intègre profondément la conscience des cycles temporels. 
                La santé dépend de l'<strong className="text-foreground">alignement</strong> avec les rythmes naturels :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Cycle</th>
                      <th className="p-3 text-left text-foreground">Phases</th>
                      <th className="p-3 text-left text-foreground">Doṣa dominant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Quotidien (Dinacharya)</td>
                      <td className="p-3">6h-10h, 10h-14h, 14h-18h, 18h-22h, 22h-2h, 2h-6h</td>
                      <td className="p-3">Kapha → Pitta → Vāta (cycle x2)</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Lunaire</td>
                      <td className="p-3">Nouvelle lune → Pleine lune → Nouvelle lune</td>
                      <td className="p-3">Influe sur Ojas, Tejas, Prāṇa</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Saisonnier (Ṛtucharya)</td>
                      <td className="p-3">6 saisons de 2 mois</td>
                      <td className="p-3">Accumulation → Aggravation → Pacification</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Vie (Vayaḥ)</td>
                      <td className="p-3">Enfance → Âge adulte → Vieillesse</td>
                      <td className="p-3">Kapha → Pitta → Vāta</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Contemplation
                  </h4>
                  <p className="text-muted-foreground italic">
                    Observez votre propre rapport au temps. Le vivez-vous comme un ennemi qui vous vole la jeunesse, 
                    ou comme un maître qui vous guide vers la maturité ? Pouvez-vous sentir le temps « cuire » 
                    vos expériences en sagesse ?
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section II - Architecture du Temps */}
          <section id="architecture">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Compass className="w-6 h-6 text-indigo-500" />
              II. L'Architecture du Temps : Kalpas, Manvantaras, Yugas
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                La cosmologie védique déploie une architecture temporelle d'une 
                <strong className="text-foreground"> monumentalité vertigineuse</strong>, où les chiffres défient 
                l'imagination humaine. Loin d'être arbitraires, ces nombres possèdent une cohérence mathématique 
                et symbolique profonde.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Jours et Nuits de Brahma</h3>
              <p>
                L'entité créatrice <strong className="text-foreground">Brahma</strong> (à ne pas confondre avec Brahman, 
                l'Absolu impersonnel) vit selon un rythme cosmique :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Unité</th>
                      <th className="p-3 text-left text-foreground">Durée</th>
                      <th className="p-3 text-left text-foreground">Équivalent humain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">1 Kalpa (Jour de Brahma)</td>
                      <td className="p-3">4,32 milliards d'années</td>
                      <td className="p-3">≈ âge de la Terre</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">1 Nuit de Brahma</td>
                      <td className="p-3">4,32 milliards d'années</td>
                      <td className="p-3">Dissolution partielle (Naimittika Pralaya)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">1 Année de Brahma</td>
                      <td className="p-3">3,11 × 10¹² années</td>
                      <td className="p-3">360 jours + 360 nuits</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Vie de Brahma</td>
                      <td className="p-3">311,04 × 10¹² années</td>
                      <td className="p-3">100 années de Brahma</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Structure d'un Kalpa</h3>
              <p>Chaque Kalpa (jour de Brahma) contient :</p>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">14 Manvantaras</strong> (ères de Manu, le législateur cosmique)</li>
                <li>• Chaque Manvantara ≈ 306,72 millions d'années</li>
                <li>• Chaque Manvantara contient <strong className="text-foreground">71 Mahāyugas</strong></li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Le Mahāyuga : Cycle des Quatre Âges</h3>
              <p>
                Le <strong className="text-foreground">Mahāyuga</strong> (« Grand Âge ») est l'unité fondamentale 
                des cycles de civilisation. Il dure <strong className="text-foreground">4 320 000 années</strong> 
                et se divise en quatre Yugas selon la proportion 4:3:2:1 :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Yuga</th>
                      <th className="p-3 text-left text-foreground">Proportion</th>
                      <th className="p-3 text-left text-foreground">Durée (années)</th>
                      <th className="p-3 text-left text-foreground">Dharma</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Satya (Kṛta)</td>
                      <td className="p-3">4</td>
                      <td className="p-3">1 728 000</td>
                      <td className="p-3">4 pieds (100%)</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Tretā</td>
                      <td className="p-3">3</td>
                      <td className="p-3">1 296 000</td>
                      <td className="p-3">3 pieds (75%)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Dvāpara</td>
                      <td className="p-3">2</td>
                      <td className="p-3">864 000</td>
                      <td className="p-3">2 pieds (50%)</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Kali</td>
                      <td className="p-3">1</td>
                      <td className="p-3">432 000</td>
                      <td className="p-3">1 pied (25%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-amber-500/10 border-amber-500/30 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Pourquoi 432 000 ?
                  </h4>
                  <p className="text-muted-foreground">
                    Le nombre 432 000 n'est pas arbitraire. Il est lié aux cycles astronomiques observables 
                    (précession des équinoxes, cycles lunaires) et possède des correspondances avec d'autres 
                    traditions : les 432 000 syllabes du Ṛg Veda, les 432 000 années du cycle babylonien, etc. 
                    Le nombre 108 (108 × 4000 = 432 000) est sacré dans l'hindouisme et le bouddhisme.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Quatre Types de Pralaya (Dissolution)</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">1. Nitya Pralaya</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dissolution continue : le cycle de mort et naissance de chaque être, à chaque instant.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">2. Naimittika Pralaya</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dissolution occasionnelle : à la fin de chaque Kalpa, les trois mondes inférieurs sont résorbés.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">3. Prākṛtika Pralaya</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dissolution naturelle : à la fin de la vie de Brahma, toute la Prakṛti retourne à l'état non-manifesté.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">4. Ātyantika Pralaya</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Dissolution ultime : la libération individuelle (Mokṣa), où l'âme transcende définitivement le cycle.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Ce qui fut sera, ce qui sera fut déjà.<br/>
                    Le temps est un serpent qui se mord la queue,<br/>
                    mais au centre du cercle, l'Éternel regarde. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Méditation védantique</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section III - Les Quatre Yugas */}
          <section id="quatre-yugas">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-emerald-500" />
              III. Les Quatre Yugas : Âges du Monde
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                Les quatre Yugas décrivent une <strong className="text-foreground">dégradation progressive</strong> 
                de la conscience collective et des conditions de vie — non par fatalisme pessimiste, mais pour 
                que le chercheur comprenne les défis spécifiques de son époque et adapte sa pratique.
              </p>

              <Accordion type="multiple" className="space-y-4 my-6">
                {/* Satya Yuga */}
                <AccordionItem value="satya" className="bg-white/5 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Satya Yuga (Kṛta Yuga)</h4>
                        <p className="text-sm text-muted-foreground">L'Âge de Vérité — 1 728 000 ans</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Dharma</p>
                            <p className="font-semibold text-foreground">4 pieds (100%)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Couleur</p>
                            <p className="font-semibold text-foreground">Blanc (Śukla)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Longévité</p>
                            <p className="font-semibold text-foreground">100 000 ans</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Voie principale</p>
                            <p className="font-semibold text-foreground">Dhyāna (Méditation)</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h5 className="font-semibold text-foreground mt-4">Caractéristiques :</h5>
                      <ul className="space-y-1">
                        <li>• <strong className="text-foreground">Vérité parfaite</strong> : nul ne ment, la pensée égale la parole égale l'action</li>
                        <li>• <strong className="text-foreground">Pas de maladie, pas de mort prématurée</strong></li>
                        <li>• <strong className="text-foreground">Pas de classes sociales rigides</strong> : tous sont naturellement vertueux</li>
                        <li>• <strong className="text-foreground">Communication directe avec le Divin</strong></li>
                        <li>• La nature donne abondamment sans effort</li>
                      </ul>
                      
                      <h5 className="font-semibold text-foreground mt-4">Avatars de cette ère :</h5>
                      <p>Matsya (Poisson), Kurma (Tortue), Varāha (Sanglier), Narasiṃha (Homme-Lion)</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Tretā Yuga */}
                <AccordionItem value="treta" className="bg-red-500/5 border border-red-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Flame className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Tretā Yuga</h4>
                        <p className="text-sm text-muted-foreground">L'Âge des Trois Feux — 1 296 000 ans</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Dharma</p>
                            <p className="font-semibold text-foreground">3 pieds (75%)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Couleur</p>
                            <p className="font-semibold text-foreground">Rouge (Rakta)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Longévité</p>
                            <p className="font-semibold text-foreground">10 000 ans</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Voie principale</p>
                            <p className="font-semibold text-foreground">Yajña (Rituel)</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h5 className="font-semibold text-foreground mt-4">Caractéristiques :</h5>
                      <ul className="space-y-1">
                        <li>• <strong className="text-foreground">Apparition des rituels</strong> : l'accès direct au Divin s'estompe</li>
                        <li>• <strong className="text-foreground">Naissance des classes sociales</strong> (varṇas) fonctionnelles</li>
                        <li>• Premiers conflits et guerres, mais pour des causes justes</li>
                        <li>• La vertu demande un <strong className="text-foreground">effort conscient</strong></li>
                        <li>• Agriculture et premiers royaumes</li>
                      </ul>
                      
                      <h5 className="font-semibold text-foreground mt-4">Avatars de cette ère :</h5>
                      <p>Vāmana (le Nain), Paraśurāma, Rāma (le Rāmāyaṇa se déroule en Tretā)</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Dvāpara Yuga */}
                <AccordionItem value="dvapara" className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Dvāpara Yuga</h4>
                        <p className="text-sm text-muted-foreground">L'Âge du Doute — 864 000 ans</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Dharma</p>
                            <p className="font-semibold text-foreground">2 pieds (50%)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Couleur</p>
                            <p className="font-semibold text-foreground">Jaune (Pīta)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Longévité</p>
                            <p className="font-semibold text-foreground">1 000 ans</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Voie principale</p>
                            <p className="font-semibold text-foreground">Arcana (Adoration)</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h5 className="font-semibold text-foreground mt-4">Caractéristiques :</h5>
                      <ul className="space-y-1">
                        <li>• <strong className="text-foreground">Dualité prononcée</strong> : bien/mal clairement distingués mais en conflit</li>
                        <li>• <strong className="text-foreground">Compilation des Vedas</strong> par Vyāsa (car la mémoire humaine décline)</li>
                        <li>• Grandes épopées : le Mahābhārata se déroule à la fin du Dvāpara</li>
                        <li>• Floraison des temples et de l'adoration formelle</li>
                        <li>• <strong className="text-foreground">Kṛṣṇa descend</strong> à la charnière Dvāpara-Kali</li>
                      </ul>
                      
                      <h5 className="font-semibold text-foreground mt-4">Avatar de cette ère :</h5>
                      <p>Kṛṣṇa (également Vyāsa, parfois considéré comme une incarnation)</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Kali Yuga */}
                <AccordionItem value="kali" className="bg-violet-500/5 border border-violet-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-violet-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Kali Yuga</h4>
                        <p className="text-sm text-muted-foreground">L'Âge de Discorde — 432 000 ans</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Dharma</p>
                            <p className="font-semibold text-foreground">1 pied (25%)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Couleur</p>
                            <p className="font-semibold text-foreground">Noir (Kṛṣṇa)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Longévité</p>
                            <p className="font-semibold text-foreground">100 ans (max)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3 text-center">
                            <p className="text-xs text-muted-foreground">Voie principale</p>
                            <p className="font-semibold text-foreground">Nāma (Nom divin)</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h5 className="font-semibold text-foreground mt-4">Caractéristiques :</h5>
                      <ul className="space-y-1">
                        <li>• <strong className="text-foreground">Matérialisme dominant</strong> : richesse = valeur de l'individu</li>
                        <li>• <strong className="text-foreground">Inversion des valeurs</strong> : les menteurs prospèrent, les honnêtes souffrent</li>
                        <li>• Déclin des traditions, de la famille, du respect des aînés</li>
                        <li>• Maladies, pollutions, famines, guerres pour des causes injustes</li>
                        <li>• <strong className="text-foreground">Mais aussi</strong> : grâce intensifiée, libération rapide possible</li>
                      </ul>
                      
                      <Card className="bg-emerald-500/10 border-emerald-500/30 mt-4">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground flex items-center gap-2">
                            <Heart className="w-4 h-4 text-emerald-500" />
                            Le Paradoxe du Kali Yuga
                          </h5>
                          <p className="text-sm mt-2">
                            C'est l'âge le plus sombre mais aussi celui où la libération est la plus <strong className="text-foreground">accessible</strong>. 
                            Le simple fait de prononcer le Nom divin avec sincérité équivaut à des années de méditation en Satya Yuga.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <h5 className="font-semibold text-foreground mt-4">Avatar à venir :</h5>
                      <p>Kalki, qui apparaîtra à la fin du Kali Yuga pour inaugurer un nouveau Satya Yuga</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "kaler doṣa-nidhe rājann asti hy eko mahān guṇaḥ<br/>
                    kīrtanād eva kṛṣṇasya mukta-saṅgaḥ paraṁ vrajet"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Bien que l'âge de Kali soit un océan de défauts, il possède une grande qualité :<br/>
                    Par le simple chant du nom de Kṛṣṇa, on peut atteindre la libération suprême. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Śrīmad Bhāgavatam 12.3.51</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section IV - Yugas comme clés d'interprétation */}
          <section id="interpretation">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-cyan-500" />
              IV. Les Yugas comme Clés d'Interprétation
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                Au-delà de leur dimension cosmologique, les Yugas offrent une <strong className="text-foreground">grille de lecture</strong> 
                pour comprendre les cycles plus courts — civilisationnels, culturels, individuels.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Micro-cycles civilisationnels</h3>
              <p>
                Toute civilisation, religion ou mouvement traverse ses propres quatre âges :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Phase</th>
                      <th className="p-3 text-left text-foreground">Correspondance</th>
                      <th className="p-3 text-left text-foreground">Caractéristiques</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Naissance</td>
                      <td className="p-3">Satya</td>
                      <td className="p-3">Pureté originelle, inspiration prophétique, ferveur des fondateurs</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Expansion</td>
                      <td className="p-3">Tretā</td>
                      <td className="p-3">Codification, rituels, premières institutions</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Apogée</td>
                      <td className="p-3">Dvāpara</td>
                      <td className="p-3">Pouvoir temporel, débats intellectuels, schismes</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Déclin</td>
                      <td className="p-3">Kali</td>
                      <td className="p-3">Formalisme, corruption, renouveau par des réformateurs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Exemples historiques</h3>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="bouddhisme" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">Le Bouddhisme</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="space-y-1">
                      <li>• <strong>Satya</strong> : Bouddha et ses disciples directs (Ve siècle av. J.-C.)</li>
                      <li>• <strong>Tretā</strong> : Conciles, compilation du Tripiṭaka</li>
                      <li>• <strong>Dvāpara</strong> : Expansion (Aśoka), débats Theravāda/Mahāyāna</li>
                      <li>• <strong>Kali</strong> : Déclin en Inde, mais renouveau en Asie et Occident</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="christianisme" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">Le Christianisme</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="space-y-1">
                      <li>• <strong>Satya</strong> : Jésus et les apôtres</li>
                      <li>• <strong>Tretā</strong> : Pères de l'Église, conciles, liturgies</li>
                      <li>• <strong>Dvāpara</strong> : Pouvoir papal, croisades, Inquisition</li>
                      <li>• <strong>Kali</strong> : Schismes, sécularisation, mais aussi renouveau mystique</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Superposition des cycles</h3>
              <p>
                Le monde moderne présente une <strong className="text-foreground">superposition complexe</strong> : 
                nous sommes dans le Kali Yuga cosmique, mais certaines traditions vivent leur phase « Satya » 
                (renaissance) tandis que d'autres achèvent leur « Kali » (déclin).
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Contemplation
                  </h4>
                  <p className="text-muted-foreground italic">
                    Dans quels domaines de votre vie êtes-vous en « Satya » (naissance, pureté) ? 
                    Dans quels domaines êtes-vous en « Kali » (fin de cycle, besoin de renouveau) ?
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section V - Durées et Débats */}
          <section id="durees-debats">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Timer className="w-6 h-6 text-rose-500" />
              V. Durées Traditionnelles et Débats
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                La question des durées exactes des Yugas fait l'objet de <strong className="text-foreground">débats millénaires</strong>. 
                Plusieurs interprétations coexistent, chacune avec sa logique interne.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Position classique (Purāṇas)</h3>
              <p>
                Les durées traditionnelles (1 728 000, 1 296 000, 864 000, 432 000 années) sont calculées en 
                « années divines », où <strong className="text-foreground">1 année divine = 360 années humaines</strong>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Théorie de Sri Yukteswar</h3>
              <p>
                Dans <em>The Holy Science</em> (1894), <strong className="text-foreground">Swami Sri Yukteswar</strong>, 
                le guru de Paramahansa Yogananda, propose une interprétation radicalement différente :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Yuga</th>
                      <th className="p-3 text-left text-foreground">Durée (Sri Yukteswar)</th>
                      <th className="p-3 text-left text-foreground">Période actuelle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Kali (descendant)</td>
                      <td className="p-3">1 200 ans</td>
                      <td className="p-3">3102 av. J.-C. → 499 apr. J.-C.</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Kali (ascendant)</td>
                      <td className="p-3">1 200 ans</td>
                      <td className="p-3">499 → 1699 apr. J.-C.</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Dvāpara (ascendant)</td>
                      <td className="p-3">2 400 ans</td>
                      <td className="p-3">1699 → 4099 apr. J.-C.</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Tretā (ascendant)</td>
                      <td className="p-3">3 600 ans</td>
                      <td className="p-3">4099 → 7699 apr. J.-C.</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Satya</td>
                      <td className="p-3">4 800 ans</td>
                      <td className="p-3">Point culminant</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-amber-500/10 border-amber-500/30 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Selon Sri Yukteswar
                  </h4>
                  <p className="text-muted-foreground">
                    Nous serions actuellement en <strong className="text-foreground">Dvāpara Yuga ascendant</strong> 
                    (depuis 1699), expliquant l'explosion des découvertes scientifiques et le réveil spirituel mondial. 
                    Le cycle total dure 24 000 ans, lié à la précession des équinoxes.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Réconciliation des visions</h3>
              <p>
                Plutôt que de choisir une théorie contre l'autre, on peut considérer :
              </p>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Cycles multiples imbriqués</strong> : macro-cycles (millions d'années) et micro-cycles (milliers d'années) coexistent</li>
                <li>• <strong className="text-foreground">Lecture symbolique</strong> : les nombres sont des archétypes, pas des comptages littéraux</li>
                <li>• <strong className="text-foreground">Relativité du temps</strong> : le temps vécu dépend de l'état de conscience</li>
              </ul>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Position de sagesse
                  </h4>
                  <p className="text-muted-foreground">
                    La question « Où en sommes-nous exactement ? » importe moins que : 
                    « <strong className="text-foreground">Comment dois-je vivre maintenant ?</strong> » 
                    Les textes insistent : adapter sa pratique à l'époque présente, sans attendre un âge meilleur.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section VI - Position actuelle */}
          <section id="position-actuelle">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Compass className="w-6 h-6 text-teal-500" />
              VI. Où en sommes-nous ?
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Position classique : Kali Yuga depuis 3102 av. J.-C.</h3>
              <p>
                Selon les calculs traditionnels, le Kali Yuga a commencé le <strong className="text-foreground">18 février 3102 av. J.-C.</strong>, 
                correspondant au départ de Kṛṣṇa de ce monde après la guerre du Mahābhārata.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "prāyeṇālpāyuṣaḥ sabhya kalāv asmin yuge janāḥ<br/>
                    mandāḥ sumanda-matayo manda-bhāgyā hy upadrutāḥ"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Dans cet âge de Kali, les gens ont généralement une vie courte,<br/>
                    sont lents [spirituellement], d'intelligence médiocre, malchanceux et toujours troublés. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Śrīmad Bhāgavatam 1.1.10</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Signes du Kali Yuga (Purāṇas)</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-foreground mb-2">Société</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Richesse = mesure de la vertu</li>
                      <li>• Menteurs aux postes de pouvoir</li>
                      <li>• Effondrement de la famille</li>
                      <li>• Irrespect des aînés et des sages</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-foreground mb-2">Nature</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Saisons déréglées</li>
                      <li>• Famines et épidémies</li>
                      <li>• Pollution des éléments</li>
                      <li>• Animaux et plantes dégénérés</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-foreground mb-2">Spiritualité</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Rituels vidés de sens</li>
                      <li>• Faux gurus prospérant</li>
                      <li>• Atheïsme dominant</li>
                      <li>• Mais : accès facile à la libération</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-foreground mb-2">Individu</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Longévité réduite (100 ans max)</li>
                      <li>• Corps affaiblis</li>
                      <li>• Mémoire et concentration faibles</li>
                      <li>• Mais : sincérité suffisante pour le salut</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Phases du Kali Yuga</h3>
              <p>
                Le Kali Yuga de 432 000 ans se divise traditionnellement en phases :
              </p>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Phase 1 (premiers 10 000 ans)</strong> : Déclin progressif, mais présence de saints et d'enseignements purs</li>
                <li>• <strong className="text-foreground">Phase 2</strong> : Obscurcissement croissant, guerres majeures</li>
                <li>• <strong className="text-foreground">Phase 3 (finale)</strong> : Ténèbres maximales, apparition de Kalki, retour au Satya Yuga</li>
              </ul>
              <p>
                <strong className="text-foreground">Bonne nouvelle</strong> : nous ne sommes qu'à environ 5 100 ans 
                du début, donc encore dans la première phase, la plus « douce » du Kali Yuga.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Thèse du Dvāpara Ascendant</h3>
              <p>Si l'on suit Sri Yukteswar :</p>
              <ul className="space-y-2 my-4">
                <li>• Nous avons quitté le Kali Yuga en 1699</li>
                <li>• L'essor de la science, de la démocratie, des droits humains reflète la conscience Dvāpara</li>
                <li>• Le réveil spirituel mondial (yoga, méditation, végétarisme) confirme l'ascension</li>
              </ul>

              <Card className="bg-amber-500/10 border-amber-500/30 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    Synthèse possible
                  </h4>
                  <p className="text-muted-foreground">
                    Nous vivons peut-être un <strong className="text-foreground">double cycle</strong> : 
                    Kali Yuga cosmique (macro) + Dvāpara Yuga civilisationnel (micro). 
                    Les défis du Kali sont réels, mais des fenêtres d'éveil s'ouvrent périodiquement.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Kalki : l'Avatar Final</h3>
              <p>
                À la fin du Kali Yuga, <strong className="text-foreground">Kalki</strong> apparaîtra — cavalier blanc 
                brandissant l'épée de la discrimination, pour purifier le monde et inaugurer un nouveau Satya Yuga.
              </p>
              <p>
                <em>Interprétation ésotérique</em> : Kalki représente aussi l'éveil de la <strong className="text-foreground">conscience discriminante</strong> 
                (viveka) en chaque individu, qui tranche les illusions et libère l'âme.
              </p>
            </div>
          </section>

          {/* Section VII - Pratiques */}
          <section id="pratiques">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-500" />
              VII. Implications Spirituelles et Pratiques
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Cinq Kleśas Intensifiés</h3>
              <p>
                Dans le Kali Yuga, les cinq afflictions mentales (kleśas) du Yoga Sūtra sont exacerbées :
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Kleśa</th>
                      <th className="p-3 text-left text-foreground">Traduction</th>
                      <th className="p-3 text-left text-foreground">Manifestation Kali Yuga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Avidyā</td>
                      <td className="p-3">Ignorance</td>
                      <td className="p-3">Matérialisme, scientisme réducteur</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Asmitā</td>
                      <td className="p-3">Ego</td>
                      <td className="p-3">Individualisme extrême, narcissisme</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Rāga</td>
                      <td className="p-3">Attachement</td>
                      <td className="p-3">Consommation effrénée, addictions</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Dveṣa</td>
                      <td className="p-3">Aversion</td>
                      <td className="p-3">Polarisation, haine tribale</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Abhiniveśa</td>
                      <td className="p-3">Peur de la mort</td>
                      <td className="p-3">Négation de la mort, transhumanisme</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Forces Compensatoires</h3>
              <p>
                Mais le Kali Yuga offre aussi des <strong className="text-foreground">grâces spécifiques</strong> :
              </p>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Grâce accélérée</strong> : un petit effort sincère produit de grands résultats</li>
                <li>• <strong className="text-foreground">Accessibilité</strong> : les enseignements autrefois secrets sont disponibles à tous</li>
                <li>• <strong className="text-foreground">Simplification</strong> : la voie du Nom (Nāma Yoga) suffit</li>
                <li>• <strong className="text-foreground">Communauté</strong> : le Satsaṅga (compagnie des sages) est particulièrement puissant</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pratiques Recommandées pour notre Époque</h3>
              
              <Accordion type="multiple" className="space-y-4 my-6">
                <AccordionItem value="nama" className="bg-card/50 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">1</span>
                      <span className="font-semibold text-foreground">Nāma-saṅkīrtana (Chant du Nom divin)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    <p>
                      La pratique reine du Kali Yuga. Chanter les noms de Dieu (Hare Kṛṣṇa, Oṁ Namaḥ Śivāya, 
                      Rām Rām, etc.) purifie le mental et connecte directement au Divin.
                    </p>
                    <p className="mt-2"><strong className="text-foreground">Pratique</strong> : 108 répétitions quotidiennes avec un mālā, ou chant spontané.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="smarana" className="bg-card/50 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">2</span>
                      <span className="font-semibold text-foreground">Smaraṇa (Souvenir constant)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    <p>
                      Garder la pensée du Divin à l'arrière-plan de toutes les activités. 
                      Transformer chaque acte en offrande.
                    </p>
                    <p className="mt-2"><strong className="text-foreground">Pratique</strong> : Avant chaque action, pensez « Pour Toi » ou « Oṁ ».</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sravana" className="bg-card/50 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">3</span>
                      <span className="font-semibold text-foreground">Śravaṇa (Écoute des enseignements)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    <p>
                      Écouter ou lire les textes sacrés et les paroles des sages. 
                      La simple écoute attentive purifie et éveille.
                    </p>
                    <p className="mt-2"><strong className="text-foreground">Pratique</strong> : 15 minutes quotidiennes de lecture sacrée (Gītā, Upaniṣads, etc.).</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="seva" className="bg-card/50 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">4</span>
                      <span className="font-semibold text-foreground">Sevā (Service désintéressé)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    <p>
                      Le Karma Yoga : servir sans attente de fruit. Dans un âge d'égoïsme, 
                      le service est révolutionnaire.
                    </p>
                    <p className="mt-2"><strong className="text-foreground">Pratique</strong> : Un acte de service anonyme par jour.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="satsanga" className="bg-card/50 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">5</span>
                      <span className="font-semibold text-foreground">Satsaṅga (Compagnie des sages)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    <p>
                      S'entourer de personnes spirituellement orientées. L'atmosphère collective 
                      élève ou abaisse la conscience.
                    </p>
                    <p className="mt-2"><strong className="text-foreground">Pratique</strong> : Rejoindre un groupe de méditation, un ashram, une sangha.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="simplification" className="bg-card/50 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">6</span>
                      <span className="font-semibold text-foreground">Simplification volontaire</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    <p>
                      Réduire les besoins matériels pour libérer l'énergie et le temps pour la pratique. 
                      L'aparigraha (non-possessivité) comme antidote au consumérisme.
                    </p>
                    <p className="mt-2"><strong className="text-foreground">Pratique</strong> : Identifier une possession ou habitude superflue à abandonner chaque mois.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="viveka" className="bg-card/50 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">7</span>
                      <span className="font-semibold text-foreground">Viveka (Discernement)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    <p>
                      Cultiver la capacité à distinguer le réel de l'illusoire, l'essentiel de l'accessoire. 
                      Dans un âge de confusion, le discernement est survie spirituelle.
                    </p>
                    <p className="mt-2"><strong className="text-foreground">Pratique</strong> : Chaque soir, contempler : « Qu'ai-je fait aujourd'hui qui m'a rapproché du Réel ? Éloigné ? »</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Vivre selon les Cycles</h3>
              <p>
                L'alignement avec les rythmes naturels contrebalance le chaos du Kali Yuga :
              </p>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Dinacharya</strong> : routine quotidienne alignée sur les cycles solaires</li>
                <li>• <strong className="text-foreground">Cycles lunaires</strong> : intensifier la pratique à la pleine et nouvelle lune</li>
                <li>• <strong className="text-foreground">Ṛtucharya</strong> : adapter l'alimentation et la pratique aux saisons</li>
                <li>• <strong className="text-foreground">Āśramas</strong> : honorer les phases de la vie (étudiant, maître de maison, retraité, renonçant)</li>
              </ul>
            </div>
          </section>

          {/* Section VIII - Mokṣa */}
          <section id="moksha">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Infinity className="w-6 h-6 text-violet-500" />
              VIII. Au-delà du Temps : Mokṣa
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Saṁsāra : La Roue du Devenir</h3>
              <p>
                Les Yugas décrivent le temps <em>à l'intérieur</em> du Saṁsāra — le cycle des naissances et des morts. 
                Mais l'enseignement ultime des Vedas pointe <strong className="text-foreground">au-delà</strong> : 
                vers <strong className="text-foreground">Mokṣa</strong>, la libération du temps lui-même.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "na jāyate mriyate vā kadācin<br/>
                    nāyaṁ bhūtvā bhavitā vā na bhūyaḥ<br/>
                    ajo nityaḥ śāśvato 'yaṁ purāṇo<br/>
                    na hanyate hanyamāne śarīre"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « L'âme ne naît jamais et ne meurt jamais.<br/>
                    Elle n'a pas commencé à être et ne cessera pas d'être.<br/>
                    Non-née, éternelle, permanente, primordiale,<br/>
                    elle n'est pas tuée quand le corps est tué. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Bhagavad Gītā 2.20</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Puruṣa et Prakṛti</h3>
              <p>
                Le <strong className="text-foreground">Sāṁkhya</strong> distingue :
              </p>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Prakṛti</strong> : la nature, le temps, les Yugas — tout ce qui change</li>
                <li>• <strong className="text-foreground">Puruṣa</strong> : la conscience pure, témoin immuable, au-delà du temps</li>
              </ul>
              <p>
                Mokṣa est la <strong className="text-foreground">dis-identification</strong> d'avec Prakṛti 
                et la reconnaissance de notre nature de Puruṣa — éternelle, libre, lumineuse.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Sākṣin : Le Témoin</h3>
              <p>
                La clé pratique est de cultiver la <strong className="text-foreground">conscience témoin</strong> (Sākṣin) :
              </p>
              <ul className="space-y-2 my-4">
                <li>• Observer les pensées sans s'identifier à elles</li>
                <li>• Observer le temps passer sans s'y accrocher</li>
                <li>• Observer les Yugas de l'humanité depuis la perspective de l'Éternel</li>
              </ul>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Méditation du Témoin
                  </h4>
                  <p className="text-muted-foreground italic">
                    Asseyez-vous en silence. Observez vos pensées comme des nuages passant dans le ciel. 
                    Vous n'êtes pas les nuages — vous êtes le ciel lui-même : vaste, immuable, toujours présent. 
                    Les Yugas sont des nuages cosmiques ; vous êtes l'espace dans lequel ils apparaissent et disparaissent.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advaita Vedānta : L'Éternité au Cœur du Changement</h3>
              <p>
                L'Advaita (non-dualité) enseigne que le temps lui-même est une <strong className="text-foreground">projection</strong> 
                de la conscience. En réalité, il n'y a que <strong className="text-foreground">Brahman</strong> — 
                l'Être-Conscience-Béatitude (Sat-Cit-Ānanda), sans commencement ni fin.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "brahma satyaṁ jagan mithyā jīvo brahmaiva nāparaḥ"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Brahman seul est réel, le monde est apparence,<br/>
                    l'âme individuelle n'est autre que Brahman. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Śaṅkarācārya</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Jīvanmukti : Libéré Vivant</h3>
              <p>
                Le <strong className="text-foreground">Jīvanmukta</strong> est celui qui, tout en vivant dans le temps, 
                n'est plus <em>de</em> le temps. Il agit, rit, pleure peut-être — mais depuis un centre inébranlable 
                qui ne naît ni ne meurt.
              </p>
              <p>
                C'est la <strong className="text-foreground">Līlā</strong> divine : jouer le jeu cosmique 
                tout en sachant qu'on est l'acteur éternel derrière tous les masques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Bhagavad Gītā : Synthèse Ultime</h3>
              <p>
                La Gītā enseigne à <strong className="text-foreground">agir dans le temps tout en étant établi dans l'Éternel</strong>. 
                Arjuna doit combattre (action dans le temps), mais en offrant tout à Kṛṣṇa (conscience de l'Éternel).
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "yogasthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya<br/>
                    siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Établi dans le yoga, accomplis tes actions en abandonnant l'attachement, ô Dhanañjaya,<br/>
                    égal dans le succès et l'échec — cette équanimité est appelée yoga. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Bhagavad Gītā 2.48</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/20 border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-amber-500" />
                  Conclusion — Le Temps comme Maître
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Le temps n'est pas notre ennemi. Correctement compris, il est notre 
                    <strong className="text-foreground"> plus grand allié spirituel</strong>. 
                    Il nous enseigne l'impermanence, nous pousse vers l'essentiel, nous offre le rythme 
                    par lequel l'âme peut danser vers la libération.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Ce que les Yugas nous enseignent :</h3>
                  <ul className="space-y-2">
                    <li>• <strong className="text-foreground">Impermanence</strong> : tout passe, les âges d'or comme les âges sombres</li>
                    <li>• <strong className="text-foreground">Patience cosmique</strong> : le Dharma finit toujours par triompher</li>
                    <li>• <strong className="text-foreground">Humilité</strong> : nous sommes des vagues dans un océan éternel</li>
                    <li>• <strong className="text-foreground">Urgence</strong> : cette vie humaine est précieuse, ne la gaspillons pas</li>
                    <li>• <strong className="text-foreground">Espoir</strong> : même dans le Kali Yuga, la libération est possible</li>
                  </ul>

                  <Card className="bg-primary/10 border-primary/30 my-8">
                    <CardContent className="p-6 text-center">
                      <p className="text-xl font-serif text-foreground italic mb-4">
                        "asato mā sad gamaya<br/>
                        tamaso mā jyotir gamaya<br/>
                        mṛtyor mā amṛtaṁ gamaya"
                      </p>
                      <p className="text-muted-foreground">
                        « Du non-être, conduis-moi vers l'Être.<br/>
                        Des ténèbres, conduis-moi vers la Lumière.<br/>
                        De la mort, conduis-moi vers l'Immortalité. »
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Bṛhadāraṇyaka Upaniṣad 1.3.28</p>
                    </CardContent>
                  </Card>

                  <p className="text-center text-foreground font-medium">
                    Quel que soit le Yuga cosmique, chaque instant est un portail vers l'Éternel 
                    pour qui sait regarder.
                  </p>

                  <div className="text-center mt-8">
                    <p className="text-primary font-serif text-xl">
                      oṁ śāntiḥ śāntiḥ śāntiḥ
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Oṁ, Paix, Paix, Paix
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Epilogue */}
          <section className="pt-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Épilogue : Pour aller plus loin
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Sources traditionnelles</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Śrīmad Bhāgavatam (Skandha 12)</li>
                      <li>• Viṣṇu Purāṇa</li>
                      <li>• Bhagavad Gītā (chapitres 2, 4, 11)</li>
                      <li>• Yoga Vāsiṣṭha</li>
                      <li>• Mahābhārata (Śānti Parva)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Études modernes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <em>The Holy Science</em> — Sri Yukteswar</li>
                      <li>• <em>The Yugas</em> — Joseph Selbie & David Steinmetz</li>
                      <li>• <em>Le Temps et l'Éternité</em> — Ananda K. Coomaraswamy</li>
                    </ul>
                  </div>
                </div>

                <Card className="bg-secondary/30 border-secondary mt-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Méditation quotidienne suggérée</h4>
                    <p className="text-sm text-muted-foreground">
                      Chaque matin, avant de commencer la journée, prenez 5 minutes pour contempler : 
                      « Je suis conscience éternelle, témoin du temps. Ce jour est un don pour me rapprocher de ma vraie nature. »
                    </p>
                  </CardContent>
                </Card>

                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link to="/contact">
                      Approfondir avec un accompagnement personnalisé
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="ghost" asChild>
              <Link to="/philosophie-vedique">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la Philosophie Védique
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/philosophie/purusha-prakriti">
                Purusha et Prakriti
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TempsCyclesYugas;
