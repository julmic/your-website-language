import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Heart, Flower2, Moon, Sun, Flame, Droplets, Wind, Star, BookOpen, Users, Baby, Crown, Shield, Brain, Eye, Music, Feather } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "mystere-cosmique", title: "I. Mystère Cosmique" },
  { id: "feminin-cosmique", title: "II. Féminin Cosmique" },
  { id: "deesses", title: "III. Les Déesses" },
  { id: "femmes-vediques", title: "IV. Femmes Védiques" },
  { id: "ayurveda-esoterique", title: "V. Ayurveda Ésotérique" },
  { id: "corps-temple", title: "VI. Corps Temple" },
  { id: "initiations", title: "VII. Initiations" },
  { id: "alchimie-relationnelle", title: "VIII. Alchimie" },
  { id: "maternite", title: "IX. Maternité" },
  { id: "transgenerationnel", title: "X. Transgénérationnel" },
  { id: "pouvoir", title: "XI. Pouvoir" },
  { id: "sexualite-sacree", title: "XII. Sexualité Sacrée" },
  { id: "femme-sage", title: "XIII. Femme Sage" },
  { id: "conclusion", title: "Conclusion" },
];

const SagesseFeminine = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Sagesse Féminine dans les Vedas | Arkadhya Ayurveda</title>
        <meta name="description" content="Guide ésotérique et ayurvédique pour la transformation de la femme moderne. Déesses, cycles lunaires, maternité sacrée, tantra et sagesse ancestrale." />
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
              <Flower2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground">
                Sagesse Féminine <span className="text-primary">dans les Vedas</span>
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Guide Ésotérique & Ayurvédique pour la Transformation de la Femme Moderne
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Lecture estimée : 45-60 minutes — Un voyage initiatique en 13 étapes
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
                  Introduction
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Ce traité n'est pas un simple manuel. C'est une <strong className="text-foreground">carte initiatique</strong> pour 
                    reconnecter chaque femme à sa nature divine, à travers les enseignements millénaires des Vedas, 
                    de l'Ayurveda et du Tantra.
                  </p>
                  <p>
                    À une époque où le féminin a été réprimé, objectifié ou banalisé, ce guide propose une 
                    <strong className="text-foreground"> réappropriation sacrée</strong> du corps, du cycle, de la sexualité 
                    et de la spiritualité féminine.
                  </p>
                  <Card className="bg-secondary/30 border-secondary my-6">
                    <CardContent className="p-6">
                      <p className="text-lg font-medium text-foreground italic">
                        "Yatra nāryastu pūjyante ramante tatra devatāḥ"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        « Là où les femmes sont honorées, les dieux se réjouissent. »
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">— Manusmṛti III.56</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section I - Le Mystère Cosmique */}
          <section id="mystere-cosmique">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-pink-500" />
              I. La Femme comme Mystère Cosmique
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Ādi-Śakti : La Puissance Primordiale</h3>
              <p>
                Avant toute forme, avant tout nom, existe <strong className="text-foreground">Ādi-Śakti</strong> — 
                la Puissance Primordiale. Elle est l'énergie indifférenciée qui contient en germe tous les univers. 
                Les Vedas la décrivent comme <em>« celle qui était avant le commencement »</em>.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Au commencement était la Śakti, immobile et pourtant vibrant de potentialité infinie. 
                    D'elle émana le Son, et du Son, le Cosmos. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Devī Upaniṣad</p>
                </CardContent>
              </Card>

              <p>
                Cette énergie primordiale n'est pas extérieure à la femme — elle <em>est</em> la femme dans son 
                essence la plus profonde. Chaque femme est un <strong className="text-foreground">hologramme vivant</strong> de la Déesse, 
                portant en elle les mêmes pouvoirs de création, préservation et transformation.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Le Féminin Éternel : Lumière, Son, Matrice</h3>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Sun className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Prakāśa (Lumière)</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      La conscience illuminatrice qui révèle toute chose
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Music className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Nāda (Son)</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      La vibration créatrice, le Oṁ primordial
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Yoni (Matrice)</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      L'espace sacré d'où tout naît et où tout retourne
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Femme comme Portail</h3>
              <p>
                Le corps féminin est un <strong className="text-foreground">tīrtha</strong> — un lieu de passage sacré. 
                Par sa capacité à donner la vie, à nourrir, à transformer, la femme incarne le mystère même de l'existence. 
                Elle est le portail entre :
              </p>
              <ul className="space-y-2 my-4">
                <li>• Le <strong className="text-foreground">visible et l'invisible</strong></li>
                <li>• Le <strong className="text-foreground">manifesté et le non-manifesté</strong></li>
                <li>• La <strong className="text-foreground">vie et la mort</strong></li>
                <li>• Le <strong className="text-foreground">cosmos et l'individu</strong></li>
              </ul>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Contemplation
                  </h4>
                  <p className="text-muted-foreground italic">
                    Asseyez-vous en silence. Placez vos mains sur votre ventre. Respirez profondément et sentez 
                    cet espace comme une porte vers l'infini. Vous n'êtes pas seulement un corps — vous êtes un 
                    univers en miniature, une expression unique de la Śakti cosmique.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section II - Le Féminin Cosmique */}
          <section id="feminin-cosmique">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Moon className="w-6 h-6 text-violet-500" />
              II. Le Féminin Cosmique dans la Cosmologie Védique
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Śakti précédant la Forme</h3>
              <p>
                Dans la cosmologie védique, <strong className="text-foreground">Śakti précède Śiva</strong>. 
                Avant que la conscience masculine ne puisse se manifester, l'énergie féminine doit d'abord 
                créer l'espace pour cette manifestation.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Śiva sans Śakti est Śava (un cadavre). »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Enseignement tantrique traditionnel</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Trois Grandes Śaktis</h3>
              <p>
                La Śakti primordiale se différencie en trois puissances fondamentales qui gouvernent 
                toute l'existence :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Śakti</th>
                      <th className="p-3 text-left text-foreground">Signification</th>
                      <th className="p-3 text-left text-foreground">Fonction</th>
                      <th className="p-3 text-left text-foreground">Manifestation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Icchā-Śakti</td>
                      <td className="p-3">Puissance de Volonté</td>
                      <td className="p-3">Initier, désirer, impulser</td>
                      <td className="p-3">Durga / Kālī</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Jñāna-Śakti</td>
                      <td className="p-3">Puissance de Connaissance</td>
                      <td className="p-3">Illuminer, discerner, révéler</td>
                      <td className="p-3">Sarasvatī</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Kriyā-Śakti</td>
                      <td className="p-3">Puissance d'Action</td>
                      <td className="p-3">Manifester, créer, nourrir</td>
                      <td className="p-3">Lakṣmī</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Correspondances Microcosme/Macrocosme</h3>
              <p>
                La femme incarne ces trois Śaktis dans son être :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Macrocosme</th>
                      <th className="p-3 text-left text-foreground">Microcosme (Femme)</th>
                      <th className="p-3 text-left text-foreground">Expression</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3">Soleil (Sūrya)</td>
                      <td className="p-3">Cœur (Hṛdaya)</td>
                      <td className="p-3">Rayonnement, amour inconditionnel</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">Lune (Candra)</td>
                      <td className="p-3">Utérus (Garbhāśaya)</td>
                      <td className="p-3">Cycles, fertilité, intuition</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Feu (Agni)</td>
                      <td className="p-3">Nombril (Nābhi)</td>
                      <td className="p-3">Transformation, digestion, volonté</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">Océan (Samudra)</td>
                      <td className="p-3">Yoni</td>
                      <td className="p-3">Création, source de vie</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Akasha (Éther)</td>
                      <td className="p-3">Ajna (3ème œil)</td>
                      <td className="p-3">Vision, intuition, guidance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section III - Les Déesses */}
          <section id="deesses">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Crown className="w-6 h-6 text-amber-500" />
              III. Les Déesses — Portails Énergétiques et Initiations
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Les déesses védiques ne sont pas de simples figures mythologiques. Elles sont des 
                <strong className="text-foreground"> archétypes vivants</strong>, des portes d'accès vers des qualités 
                spécifiques de la Śakti que chaque femme peut éveiller en elle.
              </p>

              <Accordion type="multiple" className="space-y-4 my-6">
                {/* Durga */}
                <AccordionItem value="durga" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Durga — La Protectrice</h3>
                        <p className="text-sm text-muted-foreground">L'inaccessible, celle qui repousse le mal</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Durga</strong> est la forme protectrice de la Śakti. 
                        Son nom signifie « l'inaccessible » ou « celle qu'on ne peut vaincre ». Elle monte un lion 
                        et porte des armes données par tous les dieux — car elle seule peut vaincre les démons 
                        qu'ils ne peuvent affronter.
                      </p>
                      
                      <h4 className="font-semibold text-foreground">Les 9 formes de Durga (Navadurgā)</h4>
                      <ol className="space-y-1 text-sm">
                        <li>1. <strong>Śailaputrī</strong> — Fille de la montagne</li>
                        <li>2. <strong>Brahmacāriṇī</strong> — L'ascète dévouée</li>
                        <li>3. <strong>Candraghaṇṭā</strong> — Celle à la cloche lunaire</li>
                        <li>4. <strong>Kūṣmāṇḍā</strong> — Créatrice de l'univers</li>
                        <li>5. <strong>Skandamātā</strong> — Mère de Skanda</li>
                        <li>6. <strong>Kātyāyanī</strong> — La guerrière</li>
                        <li>7. <strong>Kālarātrī</strong> — La nuit noire</li>
                        <li>8. <strong>Mahāgaurī</strong> — La pure</li>
                        <li>9. <strong>Siddhidātrī</strong> — Celle qui accorde les pouvoirs</li>
                      </ol>

                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Mantra</h5>
                          <p className="font-medium text-foreground">Oṁ Duṁ Durgāyai Namaḥ</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Récitez 108 fois pour invoquer la protection et le courage.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary/30 border-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Pratique de connexion</h5>
                          <p className="text-sm text-muted-foreground">
                            Quand vous vous sentez menacée, opprimée ou dans le doute, visualisez Durga 
                            montant son lion. Sentez sa force entrer en vous. Affirmez : 
                            <em>« Je suis protégée. Je suis puissante. Rien ne peut m'atteindre. »</em>
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Lakshmi */}
                <AccordionItem value="lakshmi" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Lakṣmī — L'Abondance</h3>
                        <p className="text-sm text-muted-foreground">La beauté, la prospérité, la grâce</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Lakṣmī</strong> est la déesse de la prospérité sous 
                        toutes ses formes — matérielle, spirituelle, relationnelle. Elle émerge de l'océan de lait 
                        lors du barattage cosmique, portant le lotus de la pureté et versant l'or de l'abondance.
                      </p>

                      <h4 className="font-semibold text-foreground">Les 8 formes de Lakṣmī (Aṣṭa-Lakṣmī)</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div><strong>Ādi-Lakṣmī</strong> — Lakṣmī primordiale</div>
                        <div><strong>Dhana-Lakṣmī</strong> — Richesse matérielle</div>
                        <div><strong>Dhānya-Lakṣmī</strong> — Abondance agricole</div>
                        <div><strong>Gaja-Lakṣmī</strong> — Pouvoir royal</div>
                        <div><strong>Santāna-Lakṣmī</strong> — Progéniture</div>
                        <div><strong>Vīra-Lakṣmī</strong> — Courage</div>
                        <div><strong>Vijaya-Lakṣmī</strong> — Victoire</div>
                        <div><strong>Vidyā-Lakṣmī</strong> — Connaissance</div>
                      </div>

                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Mantra d'abondance</h5>
                          <p className="font-medium text-foreground">Oṁ Śrīṁ Mahālakṣmyai Namaḥ</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Récitez les vendredis au lever du soleil, face à l'est, avec une lampe ghee allumée.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary/30 border-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Protocole d'abondance (40 jours)</h5>
                          <ol className="text-sm text-muted-foreground space-y-1">
                            <li>1. Chaque matin, offrez une fleur fraîche à l'image de Lakṣmī</li>
                            <li>2. Récitez le mantra 108 fois</li>
                            <li>3. Notez 3 gratitudes liées à l'abondance déjà présente</li>
                            <li>4. Visualisez l'or liquide coulant dans votre vie</li>
                          </ol>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Sarasvati */}
                <AccordionItem value="sarasvati" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Sarasvatī — La Connaissance</h3>
                        <p className="text-sm text-muted-foreground">Sagesse, arts, parole sacrée</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Sarasvatī</strong> est la déesse de la connaissance, 
                        de la musique, des arts et de la parole sacrée (Vāc). Vêtue de blanc, assise sur un cygne 
                        ou un lotus, elle tient la vīṇā (instrument de musique), un livre, un mālā et un pot d'eau sacrée.
                      </p>

                      <h4 className="font-semibold text-foreground">Ses aspects</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Vāgīśvarī</strong> — Maîtresse de la parole</li>
                        <li>• <strong>Bhāratī</strong> — L'éloquence</li>
                        <li>• <strong>Śāradā</strong> — Celle de l'automne (clarté)</li>
                        <li>• <strong>Vāṇī</strong> — La voix divine</li>
                      </ul>

                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Mantra de sagesse</h5>
                          <p className="font-medium text-foreground">Oṁ Aiṁ Sarasvatyai Namaḥ</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Récitez avant toute étude, création artistique ou prise de parole importante.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary/30 border-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Pratique créative</h5>
                          <p className="text-sm text-muted-foreground">
                            Chaque jour, consacrez 20 minutes à une activité créative sans but — écriture libre, 
                            dessin, chant, danse. Laissez Sarasvatī s'exprimer à travers vous sans jugement.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Kali */}
                <AccordionItem value="kali" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Flame className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Kālī — La Transformation</h3>
                        <p className="text-sm text-muted-foreground">Dissolution, renaissance, libération</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Kālī</strong> est la forme la plus radicale de la Śakti. 
                        Noire comme la nuit primordiale, elle danse sur le corps de Śiva, portant une guirlande 
                        de crânes et une jupe de bras coupés — symboles des egos qu'elle a libérés.
                      </p>

                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-6">
                          <p className="text-lg font-medium text-foreground italic">
                            « Kālī n'est pas la mort — elle est la mort de la mort. 
                            Elle détruit l'illusion pour révéler l'Éternel. »
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">— Tradition tantrique</p>
                        </CardContent>
                      </Card>

                      <h4 className="font-semibold text-foreground">Ce que Kālī dissout</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Les <strong>attachements</strong> qui nous emprisonnent</li>
                        <li>• Les <strong>illusions</strong> sur nous-mêmes</li>
                        <li>• Les <strong>peurs</strong> qui paralysent</li>
                        <li>• Le <strong>temps</strong> lui-même (elle est Kāla, le temps)</li>
                      </ul>

                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Mantra de libération</h5>
                          <p className="font-medium text-foreground">Oṁ Krīṁ Kālikāyai Namaḥ</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Invoquez Kālī dans les moments de crise, de deuil, ou quand vous devez 
                            lâcher ce qui ne vous sert plus.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-secondary/30 border-secondary">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Rituel de dissolution</h5>
                          <p className="text-sm text-muted-foreground">
                            À la nouvelle lune, écrivez sur un papier ce que vous souhaitez libérer. 
                            Brûlez-le en récitant le mantra de Kālī. Visualisez ces énergies retournant 
                            à la Source pour être transmutées.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Tableau synoptique des déesses */}
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Tableau Synoptique des 4 Déesses</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Déesse</th>
                      <th className="p-3 text-left text-foreground">Couleur</th>
                      <th className="p-3 text-left text-foreground">Plante</th>
                      <th className="p-3 text-left text-foreground">Bīja Mantra</th>
                      <th className="p-3 text-left text-foreground">Moment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Durga</td>
                      <td className="p-3">Rouge</td>
                      <td className="p-3">Hibiscus</td>
                      <td className="p-3">DUṀ</td>
                      <td className="p-3">Navaratri, lune croissante</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Lakṣmī</td>
                      <td className="p-3">Or/Rose</td>
                      <td className="p-3">Lotus</td>
                      <td className="p-3">ŚRĪṀ</td>
                      <td className="p-3">Vendredi, pleine lune</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Sarasvatī</td>
                      <td className="p-3">Blanc</td>
                      <td className="p-3">Lotus blanc</td>
                      <td className="p-3">AIṀ</td>
                      <td className="p-3">Vasant Panchami, matin</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Kālī</td>
                      <td className="p-3">Noir/Bleu</td>
                      <td className="p-3">Jasmin noir</td>
                      <td className="p-3">KRĪṀ</td>
                      <td className="p-3">Nouvelle lune, minuit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section IV - Les Femmes Védiques */}
          <section id="femmes-vediques">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Feather className="w-6 h-6 text-amber-500" />
              IV. Les Femmes Védiques comme Archétypes Initiatiques
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Les <strong className="text-foreground">Ṛṣikā-s</strong> étaient des femmes sages de l'Inde ancienne 
                qui ont composé des hymnes des Vedas. Contrairement à l'image patriarcale imposée plus tard, 
                l'époque védique reconnaissait pleinement l'autorité spirituelle des femmes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 10 Grandes Ṛṣikā-s</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Ṛṣikā</th>
                      <th className="p-3 text-left text-foreground">Domaine</th>
                      <th className="p-3 text-left text-foreground">Enseignement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Lopāmudrā</td>
                      <td className="p-3">Union sacrée</td>
                      <td className="p-3">L'amour comme voie spirituelle</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Ghoṣā</td>
                      <td className="p-3">Guérison</td>
                      <td className="p-3">La beauté au-delà du corps</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Apālā</td>
                      <td className="p-3">Transformation</td>
                      <td className="p-3">Transmuter la souffrance</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Viśvavārā</td>
                      <td className="p-3">Feu sacré</td>
                      <td className="p-3">Le rituel comme communion</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Maitreyī</td>
                      <td className="p-3">Philosophie</td>
                      <td className="p-3">L'immortalité de l'âme</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Gārgī</td>
                      <td className="p-3">Débat</td>
                      <td className="p-3">Questionner jusqu'à l'Absolu</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Vāc</td>
                      <td className="p-3">Parole</td>
                      <td className="p-3">Le pouvoir créateur du verbe</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Śacī</td>
                      <td className="p-3">Pouvoir</td>
                      <td className="p-3">L'énergie (Śakti) en action</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Sūryā</td>
                      <td className="p-3">Mariage sacré</td>
                      <td className="p-3">L'union cosmique</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Rātrī</td>
                      <td className="p-3">Nuit</td>
                      <td className="p-3">La sagesse de l'obscurité</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Lopamudra en détail */}
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Lopāmudrā : L'Initiatrice de l'Amour Sacré</h4>
                  <p className="text-muted-foreground mb-4">
                    Épouse du sage Agastya, Lopāmudrā était une princesse qui accepta une vie ascétique mais 
                    enseigna à son mari que <strong className="text-foreground">le renoncement total nie la moitié de l'existence</strong>. 
                    Elle composa un hymne (Rig Veda I.179) célébrant l'union sacrée comme voie spirituelle.
                  </p>
                  <Card className="bg-secondary/30 border-secondary">
                    <CardContent className="p-4">
                      <p className="italic text-foreground">
                        « Nous avons traversé de nombreuses aurores... 
                        Les femmes ne doivent pas être sans hommes, les hommes sans femmes. »
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Rig Veda I.179.1</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Rituel de reconquête */}
              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-primary" />
                    Rituel de Reconquête du Féminin Sauvage
                  </h4>
                  <ol className="space-y-3 text-muted-foreground">
                    <li><strong className="text-foreground">1. Préparation</strong> — Choisissez un lieu naturel ou créez un espace sacré</li>
                    <li><strong className="text-foreground">2. Invocation</strong> — Appelez les Ṛṣikā-s : « Ô vous qui avez parlé avec les dieux... »</li>
                    <li><strong className="text-foreground">3. Déclaration</strong> — Proclamez à voix haute : « Je réclame mon héritage de femme sage »</li>
                    <li><strong className="text-foreground">4. Écoute</strong> — Restez en silence et recevez leurs messages</li>
                    <li><strong className="text-foreground">5. Scellement</strong> — Offrez de l'eau et des fleurs à la terre</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section V - Ayurveda Ésotérique */}
          <section id="ayurveda-esoterique">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-500" />
              V. Ayurveda Ésotérique — Anatomie Subtile du Féminin
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 5 Prāṇas (Vāyus)</h3>
              <p>
                Le corps féminin est animé par 5 formes de <strong className="text-foreground">Prāṇa</strong> (énergie vitale), 
                chacune gouvernant une fonction spécifique :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Vāyu</th>
                      <th className="p-3 text-left text-foreground">Siège</th>
                      <th className="p-3 text-left text-foreground">Fonction</th>
                      <th className="p-3 text-left text-foreground">Rôle féminin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Prāṇa</td>
                      <td className="p-3">Cœur, poitrine</td>
                      <td className="p-3">Respiration, réception</td>
                      <td className="p-3">Nourrir, allaiter, aimer</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Apāna</td>
                      <td className="p-3">Bassin, yoni</td>
                      <td className="p-3">Élimination, expulsion</td>
                      <td className="p-3">Menstruation, accouchement</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Samāna</td>
                      <td className="p-3">Nombril</td>
                      <td className="p-3">Digestion, assimilation</td>
                      <td className="p-3">Transformer, intégrer</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Udāna</td>
                      <td className="p-3">Gorge</td>
                      <td className="p-3">Expression, élévation</td>
                      <td className="p-3">Parole sacrée, chant</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Vyāna</td>
                      <td className="p-3">Tout le corps</td>
                      <td className="p-3">Circulation, distribution</td>
                      <td className="p-3">Rayonnement, aura</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Ojas : L'Essence Vitale Féminine</h3>
              <p>
                <strong className="text-foreground">Ojas</strong> est l'essence la plus raffinée du corps — 
                le « miel » produit par la parfaite digestion de tous les tissus (dhātus). 
                Chez la femme, Ojas est intimement lié au cycle menstruel, à la fertilité et au rayonnement.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Para Ojas</h4>
                    <p className="text-xs text-muted-foreground mb-2">Ojas suprême (8 gouttes)</p>
                    <p className="text-sm">
                      Siège dans le cœur. Maintient la vie elle-même. Sa perte = mort.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Apara Ojas</h4>
                    <p className="text-xs text-muted-foreground mb-2">Ojas secondaire (½ añjali)</p>
                    <p className="text-sm">
                      Circule dans le corps. Soutient l'immunité, la vitalité, la fertilité.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Śukra/Ārtava Ojas</h4>
                    <p className="text-xs text-muted-foreground mb-2">Ojas reproductif</p>
                    <p className="text-sm">
                      Lié aux tissus reproducteurs. Source du pouvoir créateur.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 4 Phases Lunaires du Cycle</h3>
              <p>
                Le cycle menstruel reflète les phases de la lune et les archétypes féminins :
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Phase</th>
                      <th className="p-3 text-left text-foreground">Jours</th>
                      <th className="p-3 text-left text-foreground">Lune</th>
                      <th className="p-3 text-left text-foreground">Archétype</th>
                      <th className="p-3 text-left text-foreground">Énergie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Menstruation</td>
                      <td className="p-3">1-5</td>
                      <td className="p-3">Nouvelle lune</td>
                      <td className="p-3">La Sage / Sorcière</td>
                      <td className="p-3">Introspection, vision</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Folliculaire</td>
                      <td className="p-3">6-12</td>
                      <td className="p-3">Croissante</td>
                      <td className="p-3">La Vierge / Jeune Fille</td>
                      <td className="p-3">Renouveau, dynamisme</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Ovulation</td>
                      <td className="p-3">13-18</td>
                      <td className="p-3">Pleine lune</td>
                      <td className="p-3">La Mère</td>
                      <td className="p-3">Rayonnement, fertilité</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Lutéale</td>
                      <td className="p-3">19-28</td>
                      <td className="p-3">Décroissante</td>
                      <td className="p-3">L'Enchanteresse / Kālī</td>
                      <td className="p-3">Dissolution, vérité</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 5 Niveaux de la Yoni Sacrée</h3>
              <p>
                La tradition tantrique reconnaît 5 dimensions de la Yoni :
              </p>
              <ol className="space-y-3 my-4">
                <li><strong className="text-foreground">1. Sthūla Yoni</strong> — Le niveau physique (anatomie)</li>
                <li><strong className="text-foreground">2. Prāṇa Yoni</strong> — Le niveau énergétique (sensations, plaisir)</li>
                <li><strong className="text-foreground">3. Manas Yoni</strong> — Le niveau mental (croyances, émotions stockées)</li>
                <li><strong className="text-foreground">4. Vijñāna Yoni</strong> — Le niveau intuitif (sagesse ancestrale)</li>
                <li><strong className="text-foreground">5. Ānanda Yoni</strong> — Le niveau de béatitude (porte vers l'infini)</li>
              </ol>
            </div>
          </section>

          {/* Section VI - Le Corps Temple */}
          <section id="corps-temple">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-green-500" />
              VI. Le Corps Féminin comme Temple Alchimique
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Les <strong className="text-foreground">Pañca Mahābhūtas</strong> (5 Grands Éléments) composent 
                le corps féminin et offrent des clés de transformation alchimique.
              </p>

              <Accordion type="multiple" className="space-y-4 my-6">
                {/* Terre */}
                <AccordionItem value="terre" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-2xl">🜃</span>
                      <div>
                        <h3 className="font-semibold text-foreground">Pṛthivī — La Terre</h3>
                        <p className="text-sm text-muted-foreground">Stabilité, ancrage, structure</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-3">
                      <p><strong className="text-foreground">Siège :</strong> Os, muscles, tissus solides</p>
                      <p><strong className="text-foreground">Qualités :</strong> Lourd, stable, dense, lent</p>
                      <p><strong className="text-foreground">Équilibre :</strong> Sentiment d'ancrage, sécurité, patience</p>
                      <p><strong className="text-foreground">Déséquilibre :</strong> Rigidité, accumulation, stagnation, peur du changement</p>
                      <Card className="bg-secondary/30 border-secondary mt-4">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Pratique</h5>
                          <p className="text-sm text-muted-foreground">
                            Marchez pieds nus sur la terre. Jardinez. Mangez des aliments racines. 
                            Méditez assis(e) sur le sol en visualisant des racines descendant de votre bassin.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Eau */}
                <AccordionItem value="eau" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Droplets className="w-6 h-6 text-blue-500" />
                      <div>
                        <h3 className="font-semibold text-foreground">Jala — L'Eau</h3>
                        <p className="text-sm text-muted-foreground">Fluidité, émotions, fertilité</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-3">
                      <p><strong className="text-foreground">Siège :</strong> Sang, lymphe, sécrétions, liquide amniotique</p>
                      <p><strong className="text-foreground">Qualités :</strong> Fluide, frais, doux, onctueux</p>
                      <p><strong className="text-foreground">Équilibre :</strong> Fluidité émotionnelle, fertilité, adaptabilité</p>
                      <p><strong className="text-foreground">Déséquilibre :</strong> Rétention, œdèmes, attachement excessif, dépression</p>
                      <Card className="bg-secondary/30 border-secondary mt-4">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Pratique</h5>
                          <p className="text-sm text-muted-foreground">
                            Buvez de l'eau consacrée (posée au soleil avec une intention). Prenez des bains rituels. 
                            Dansez comme une vague. Pleurez sans retenue quand c'est nécessaire.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Feu */}
                <AccordionItem value="feu" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Flame className="w-6 h-6 text-red-500" />
                      <div>
                        <h3 className="font-semibold text-foreground">Tejas — Le Feu</h3>
                        <p className="text-sm text-muted-foreground">Transformation, digestion, vision</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-3">
                      <p><strong className="text-foreground">Siège :</strong> Feu digestif (Agni), yeux, métabolisme</p>
                      <p><strong className="text-foreground">Qualités :</strong> Chaud, léger, sec, pénétrant</p>
                      <p><strong className="text-foreground">Équilibre :</strong> Bonne digestion, clarté mentale, charisme</p>
                      <p><strong className="text-foreground">Déséquilibre :</strong> Colère, inflammation, critique excessive, burn-out</p>
                      <Card className="bg-secondary/30 border-secondary mt-4">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Pratique</h5>
                          <p className="text-sm text-muted-foreground">
                            Allumez une bougie et méditez sur la flamme. Pratiquez Agni Sāra (barattage abdominal). 
                            Exposez-vous au soleil du matin. Cuisinez avec intention.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Air */}
                <AccordionItem value="air" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Wind className="w-6 h-6 text-sky-500" />
                      <div>
                        <h3 className="font-semibold text-foreground">Vāyu — L'Air</h3>
                        <p className="text-sm text-muted-foreground">Mouvement, communication, légèreté</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-3">
                      <p><strong className="text-foreground">Siège :</strong> Respiration, système nerveux, toucher</p>
                      <p><strong className="text-foreground">Qualités :</strong> Léger, mobile, froid, sec, subtil</p>
                      <p><strong className="text-foreground">Équilibre :</strong> Créativité, enthousiasme, spontanéité</p>
                      <p><strong className="text-foreground">Déséquilibre :</strong> Anxiété, dispersion, insomnie, peau sèche</p>
                      <Card className="bg-secondary/30 border-secondary mt-4">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Pratique</h5>
                          <p className="text-sm text-muted-foreground">
                            Pratiquez Prāṇāyāma (Nādī Śodhana). Chantez des mantras. Sortez quand il y a du vent. 
                            Brossez votre corps à sec (Garshana).
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Éther */}
                <AccordionItem value="ether" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <Star className="w-6 h-6 text-violet-500" />
                      <div>
                        <h3 className="font-semibold text-foreground">Ākāśa — L'Éther</h3>
                        <p className="text-sm text-muted-foreground">Espace, conscience, expansion</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-3">
                      <p><strong className="text-foreground">Siège :</strong> Tous les espaces du corps, oreilles, cœur spirituel</p>
                      <p><strong className="text-foreground">Qualités :</strong> Subtil, léger, omniprésent, silencieux</p>
                      <p><strong className="text-foreground">Équilibre :</strong> Ouverture, réceptivité, connexion spirituelle</p>
                      <p><strong className="text-foreground">Déséquilibre :</strong> Sentiment de vide, déconnexion, confusion</p>
                      <Card className="bg-secondary/30 border-secondary mt-4">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-foreground mb-2">Pratique</h5>
                          <p className="text-sm text-muted-foreground">
                            Méditez dans le silence total. Regardez le ciel. Pratiquez le jeûne occasionnel. 
                            Créez de l'espace dans votre environnement et votre agenda.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Synthèse alchimique */}
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Synthèse Alchimique</h3>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-muted text-foreground border-border">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold">Nigredo</h4>
                    <p className="text-xs text-muted-foreground mb-2">L'Œuvre au Noir</p>
                    <p className="text-sm text-muted-foreground">
                      Dissolution des structures anciennes. Descente dans l'ombre. 
                      Associé à la phase menstruelle.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card text-foreground border-border">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold">Albedo</h4>
                    <p className="text-xs text-muted-foreground mb-2">L'Œuvre au Blanc</p>
                    <p className="text-sm text-muted-foreground">
                      Purification, clarification. Renaissance de la conscience. 
                      Phase folliculaire.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/20 text-foreground border-primary/30">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold">Rubedo</h4>
                    <p className="text-xs text-muted-foreground mb-2">L'Œuvre au Rouge</p>
                    <p className="text-sm text-muted-foreground">
                      Accomplissement, union des opposés. Rayonnement. 
                      Phase ovulatoire.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section VII - Initiations et Pratiques */}
          <section id="initiations">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Sun className="w-6 h-6 text-primary" />
              VII. Initiations et Pratiques pour la Transformation
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Dinacharya — La Routine Quotidienne Sacrée</h3>
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium text-foreground">Brahma Muhūrta (4h-6h)</span>
                      <span>Éveil, méditation, mantra</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium text-foreground">Lever du soleil</span>
                      <span>Salutation, gratitude, intentions</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium text-foreground">Matin</span>
                      <span>Abhyanga (auto-massage), bain</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium text-foreground">Midi</span>
                      <span>Repas principal (Agni fort)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium text-foreground">Après-midi</span>
                      <span>Activités créatives, travail</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <span className="font-medium text-foreground">Crépuscule</span>
                      <span>Sandhyā (rituel du passage)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Nuit (avant 22h)</span>
                      <span>Repas léger, lecture sacrée, sommeil</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Méditations Essentielles</h3>
              
              {/* Yoni Jyoti Dhyana */}
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Yoni Jyoti Dhyāna — Méditation de la Lumière du Lotus</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Asseyez-vous confortablement, mains sur le ventre</li>
                    <li>2. Visualisez un lotus rouge dans votre bassin</li>
                    <li>3. Au centre, une flamme dorée brille</li>
                    <li>4. À chaque inspiration, la flamme grandit</li>
                    <li>5. À chaque expiration, elle illumine tout votre corps</li>
                    <li>6. Restez 15-20 minutes dans cette lumière</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Hridaya Kamala */}
              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Hṛdaya Kamala Dhyāna — Méditation du Lotus du Cœur</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Placez votre main droite sur le cœur</li>
                    <li>2. Visualisez un lotus à 12 pétales dans votre poitrine</li>
                    <li>3. Chaque pétale porte une qualité divine (amour, compassion, joie...)</li>
                    <li>4. Au centre, votre essence immortelle brille</li>
                    <li>5. Respirez depuis ce lotus</li>
                    <li>6. Sentez-vous connectée à toutes les femmes</li>
                  </ol>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Prāṇāyāmas Adaptés au Féminin</h3>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Chandra Bhedana — Respiration Lunaire</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Active l'énergie lunaire (Iḍā), calme le système nerveux, nourrit Ojas.
                  </p>
                  <ol className="space-y-1 text-sm text-muted-foreground">
                    <li>1. Bouchez la narine droite</li>
                    <li>2. Inspirez par la narine gauche (4 temps)</li>
                    <li>3. Retenez (4 temps)</li>
                    <li>4. Expirez par la narine droite (8 temps)</li>
                    <li>5. Répétez 12-24 cycles</li>
                  </ol>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Contre-indications : Dépression profonde, phase menstruelle abondante
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Abhyanga — L'Auto-Massage Rituel</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Dosha</th>
                      <th className="p-3 text-left text-foreground">Huile recommandée</th>
                      <th className="p-3 text-left text-foreground">Température</th>
                      <th className="p-3 text-left text-foreground">Mouvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Vata</td>
                      <td className="p-3">Sésame, amande</td>
                      <td className="p-3">Bien chaude</td>
                      <td className="p-3">Lent, enveloppant</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Pitta</td>
                      <td className="p-3">Coco, tournesol</td>
                      <td className="p-3">Tiède ou fraîche</td>
                      <td className="p-3">Modéré, apaisant</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Kapha</td>
                      <td className="p-3">Moutarde, calamus</td>
                      <td className="p-3">Chaude</td>
                      <td className="p-3">Vigoureux, stimulant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section VIII - Alchimie Relationnelle */}
          <section id="alchimie-relationnelle">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              VIII. Alchimie Relationnelle : Śiva-Śakti dans le Couple
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Śiva est la conscience, Śakti est le pouvoir de cette conscience. 
                    Ensemble, ils créent, maintiennent et dissolvent l'univers. 
                    Le couple humain est un reflet de cette danse cosmique. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Tantrāloka</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Relation comme Yoga</h3>
              <p>
                Dans la vision tantrique, la relation amoureuse n'est pas une distraction du chemin spirituel — 
                elle <em>est</em> le chemin. Chaque interaction devient une opportunité de transcendance, 
                chaque conflit une invitation à dissoudre l'ego.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pratique du Darśan</h3>
              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Le Regard Sacré (Darśan)</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Asseyez-vous face à face, genoux se touchant</li>
                    <li>2. Regardez-vous dans les yeux pendant 3-5 minutes en silence</li>
                    <li>3. Laissez tomber tous les masques et rôles</li>
                    <li>4. Voyez le divin en l'autre</li>
                    <li>5. Terminez par une inclination mutuelle (Namaste)</li>
                  </ol>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Nyāsa du Partenaire — Consécration du Corps</h3>
              <p>
                Le <strong className="text-foreground">Nyāsa</strong> est un rituel tantrique de consécration 
                où l'on touche différentes parties du corps en récitant des mantras. Pratiqué avec un partenaire, 
                il transforme le corps en temple.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Les 8 Points du Nyāsa</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div><strong>1. Pieds</strong> — "Oṁ Pādābhyāṁ Namaḥ" (Je salue le fondement)</div>
                    <div><strong>2. Genoux</strong> — "Oṁ Jānubhyāṁ Namaḥ" (Je salue la stabilité)</div>
                    <div><strong>3. Cuisses</strong> — "Oṁ Ūrubhyāṁ Namaḥ" (Je salue la force)</div>
                    <div><strong>4. Yoni/Lingam</strong> — "Oṁ Guhyāya Namaḥ" (Je salue le secret)</div>
                    <div><strong>5. Nombril</strong> — "Oṁ Nābhaye Namaḥ" (Je salue le centre)</div>
                    <div><strong>6. Cœur</strong> — "Oṁ Hṛdayāya Namaḥ" (Je salue l'amour)</div>
                    <div><strong>7. Gorge</strong> — "Oṁ Kaṇṭhāya Namaḥ" (Je salue l'expression)</div>
                    <div><strong>8. Troisième œil</strong> — "Oṁ Bhrūmadhyāya Namaḥ" (Je salue la vision)</div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 3 Niveaux de la Sexualité Tantrique</h3>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Paśu (Animal)</h4>
                    <p className="text-xs text-muted-foreground mb-2">Sexualité instinctive</p>
                    <p className="text-sm text-muted-foreground">
                      Dominée par le désir physique. Recherche du plaisir personnel. 
                      Nécessaire mais limitée.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Vīra (Héros)</h4>
                    <p className="text-xs text-muted-foreground mb-2">Sexualité consciente</p>
                    <p className="text-sm text-muted-foreground">
                      L'énergie est canalisée. L'intention spirituelle est présente. 
                      Le plaisir devient offrande.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Divya (Divin)</h4>
                    <p className="text-xs text-muted-foreground mb-2">Sexualité transcendante</p>
                    <p className="text-sm text-muted-foreground">
                      L'union devient méditation. Les partenaires deviennent Śiva et Śakti. 
                      La dualité se dissout.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Sororité Sacrée : Les Cercles de Femmes</h3>
              <p>
                Au-delà de la relation de couple, la <strong className="text-foreground">sororité</strong> est 
                essentielle à la guérison féminine. Les cercles de femmes recréent l'espace sacré où les 
                anciennes transmettaient leur sagesse.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Structure d'un Cercle de Femmes</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">1. Ouverture</strong> — Allumer une bougie, invocation des ancêtres féminines</li>
                    <li><strong className="text-foreground">2. Tour de parole</strong> — Chaque femme partage sans être interrompue</li>
                    <li><strong className="text-foreground">3. Pratique</strong> — Méditation, chant, danse, rituel selon le thème</li>
                    <li><strong className="text-foreground">4. Transmission</strong> — Une aînée partage un enseignement</li>
                    <li><strong className="text-foreground">5. Clôture</strong> — Gratitude, bénédiction mutuelle</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section IX - Maternité Sacrée */}
          <section id="maternite">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Baby className="w-6 h-6 text-primary" />
              IX. Maternité Sacrée et Choix Conscient
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Conception Consciente</h3>
              <p>
                Dans la tradition védique, la conception n'est pas un accident biologique mais un 
                <strong className="text-foreground"> acte rituel d'invitation</strong> à une âme.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Rituel de l'Appel de l'Âme (Garbhādhāna)</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. <strong>Purification</strong> — 3-6 mois de préparation : alimentation pure, méditation, prāṇāyāma</li>
                    <li>2. <strong>Choix du moment</strong> — Lune croissante, jour auspicieux selon le Jyotiṣ</li>
                    <li>3. <strong>Création de l'espace</strong> — Chambre purifiée, fleurs, encens, images sacrées</li>
                    <li>4. <strong>Invocation</strong> — Prière commune pour inviter l'âme désirée</li>
                    <li>5. <strong>Union sacrée</strong> — Avec conscience et intention spirituelle</li>
                    <li>6. <strong>Repos</strong> — La femme reste allongée, méditant sur l'accueil</li>
                  </ol>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Grossesse comme Sādhana</h3>
              <p>
                Les <strong className="text-foreground">9 mois de grossesse</strong> correspondent à 9 initiations 
                pour la mère et l'enfant :
              </p>

              <Accordion type="single" collapsible className="space-y-3 my-6">
                <AccordionItem value="trimestre1" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">1er Trimestre : Fondation (Mois 1-3)</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-2">
                    <p><strong>Mois 1</strong> — L'âme choisit le corps. Méditation sur l'accueil.</p>
                    <p><strong>Mois 2</strong> — Les tissus se forment. Alimentation Sattvique essentielle.</p>
                    <p><strong>Mois 3</strong> — Le cœur bat. Connexion par le son (chants, mantras).</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="trimestre2" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">2e Trimestre : Croissance (Mois 4-6)</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-2">
                    <p><strong>Mois 4</strong> — Le bébé bouge. Dialogue intérieur commence.</p>
                    <p><strong>Mois 5</strong> — Rituel de Sīmantōnnāyana (bénédiction védique).</p>
                    <p><strong>Mois 6</strong> — Le bébé entend. Récitation de textes sacrés (Gāyatrī).</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="trimestre3" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">3e Trimestre : Préparation (Mois 7-9)</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-2">
                    <p><strong>Mois 7</strong> — Le bébé rêve. Visualisations positives essentielles.</p>
                    <p><strong>Mois 8</strong> — Préparation au passage. Méditation sur l'ouverture.</p>
                    <p><strong>Mois 9</strong> — L'âme complète son entrée. Acceptation du mystère.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">L'Accouchement comme Voyage Chamanique</h3>
              <p>
                L'accouchement est décrit dans les textes comme un voyage entre les mondes, 
                où la mère traverse trois phases initiatiques :
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-muted border-border">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">1. Descente</h4>
                    <p className="text-xs text-muted-foreground mb-2">Travail actif</p>
                    <p className="text-sm text-muted-foreground">
                      Lâcher-prise du contrôle. S'abandonner aux forces de la vie.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-secondary">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">2. Mort/Renaissance</h4>
                    <p className="text-xs text-muted-foreground mb-2">Transition</p>
                    <p className="text-sm text-muted-foreground">
                      La femme "meurt" comme non-mère et "renaît" comme mère.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">3. Remontée</h4>
                    <p className="text-xs text-muted-foreground mb-2">Naissance</p>
                    <p className="text-sm text-muted-foreground">
                      L'enfant émerge. La mère revient transformée.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 40 Jours Sacrés (Sūtikā)</h3>
              <p>
                Après l'accouchement, la tradition prescrit 40 jours de repos total pour la mère, 
                appelés <strong className="text-foreground">Sūtikā Kāla</strong> :
              </p>
              <ul className="space-y-2 my-4">
                <li>• <strong>Repos complet</strong> — La mère reste allongée le plus possible</li>
                <li>• <strong>Nourriture spéciale</strong> — Ghee, épices réchauffantes, soupes nourrissantes</li>
                <li>• <strong>Massages quotidiens</strong> — Abhyanga pour mère et bébé</li>
                <li>• <strong>Isolation relative</strong> — Protection des énergies extérieures</li>
                <li>• <strong>Soutien féminin</strong> — Entourée par les femmes de la famille</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Le Choix Conscient de la Non-Maternité</h3>
              <p>
                La tradition védique reconnaît que toutes les femmes ne sont pas appelées à la maternité physique. 
                Il existe d'autres formes de <strong className="text-foreground">création et de transmission</strong> :
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Brahmacāriṇī</h4>
                    <p className="text-sm text-muted-foreground">
                      Celle qui choisit l'ascèse, consacrant son énergie créatrice à la réalisation spirituelle.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Guru Mātā</h4>
                    <p className="text-sm text-muted-foreground">
                      Celle qui "enfante" des disciples, transmettant la sagesse plutôt que des gènes.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Kālī Sādhinī</h4>
                    <p className="text-sm text-muted-foreground">
                      Celle qui embrasse la dissolution plutôt que la création, servant la transformation collective.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Śilpinī</h4>
                    <p className="text-sm text-muted-foreground">
                      L'artiste qui donne naissance à des œuvres, canalisant Sarasvatī.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Ménopause comme Libération</h3>
              <p>
                Loin d'être une "perte", la ménopause est célébrée comme une 
                <strong className="text-foreground"> libération</strong> — le sang autrefois perdu est désormais 
                retenu, transformé en <strong className="text-foreground">Ojas spirituel</strong>.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Quand le sang cesse de couler vers l'extérieur, il commence à nourrir le feu intérieur. 
                    La femme devient une torche vivante de sagesse. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Tradition tantrique</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section X - Guérison Transgénérationnelle */}
          <section id="transgenerationnel">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              X. Sagesse Ancestrale et Guérison Transgénérationnelle
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                Les traumatismes non guéris des générations précédentes se transmettent — 
                non seulement psychologiquement, mais aussi <strong className="text-foreground">épigénétiquement</strong>. 
                La science moderne confirme ce que les sages savaient : nous portons les blessures de nos ancêtres.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Cartographie Matrilinéaire</h3>
              <p>
                Avant de guérir, il faut <strong className="text-foreground">identifier les patterns</strong> qui se répètent 
                dans la lignée maternelle :
              </p>
              <ul className="space-y-2 my-4">
                <li>• Quelles souffrances se répètent ? (Abandons, violences, maladies)</li>
                <li>• Quels dons se transmettent ? (Intuition, créativité, guérison)</li>
                <li>• Quels secrets ont été tus ?</li>
                <li>• Quelles femmes ont été "sacrifiées" ?</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 4 Rituels de Guérison</h3>

              <Accordion type="multiple" className="space-y-4 my-6">
                {/* Rituel 1 */}
                <AccordionItem value="rituel1" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">1. Pitṛ Tarpaṇa — Offrandes aux Ancêtres</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>Version féminine de l'offrande traditionnelle aux ancêtres :</p>
                    <ol className="space-y-2">
                      <li>1. Préparez de l'eau avec du sésame, du riz et des fleurs</li>
                      <li>2. Face au sud, invoquez vos ancêtres féminines par leur nom</li>
                      <li>3. Versez l'eau en disant : « Que vous soyez nourries et apaisées »</li>
                      <li>4. Offrez un repas symbolique (lait, miel, riz)</li>
                      <li>5. Demandez leur bénédiction et leur pardon</li>
                    </ol>
                    <p className="italic">Pratiquez aux nouvelles lunes et aux anniversaires de décès.</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Rituel 2 */}
                <AccordionItem value="rituel2" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">2. Dialogue Conscient avec une Ancêtre</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>Méditation guidée pour communiquer avec une ancêtre spécifique :</p>
                    <ol className="space-y-2">
                      <li>1. Créez un espace sacré avec une photo ou un objet de l'ancêtre</li>
                      <li>2. Entrez en méditation profonde</li>
                      <li>3. Visualisez-la devant vous, dans sa forme la plus lumineuse</li>
                      <li>4. Posez-lui des questions, écoutez ses réponses</li>
                      <li>5. Offrez-lui pardon et gratitude</li>
                      <li>6. Recevez sa bénédiction</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                {/* Rituel 3 */}
                <AccordionItem value="rituel3" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">3. Transmutation par le Feu (Agni Karma)</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>Rituel de libération des karma ancestraux :</p>
                    <ol className="space-y-2">
                      <li>1. Écrivez sur des papiers les traumatismes identifiés dans votre lignée</li>
                      <li>2. Allumez un feu sacré (ou utilisez une bougie)</li>
                      <li>3. Récitez : « Par ce feu, je libère ce qui n'est pas à moi de porter »</li>
                      <li>4. Brûlez chaque papier consciemment</li>
                      <li>5. Visualisez la fumée emportant ces fardeaux vers la lumière</li>
                      <li>6. Terminez par une prière de gratitude</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                {/* Rituel 4 */}
                <AccordionItem value="rituel4" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">4. Réparation Matrilinéaire</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>Pratiques concrètes avec votre mère et/ou vos filles :</p>
                    <ul className="space-y-2">
                      <li>• <strong>Écrire des lettres</strong> à votre mère (envoyées ou non)</li>
                      <li>• <strong>Partager des histoires</strong> de la lignée avec vos filles</li>
                      <li>• <strong>Créer un autel</strong> des femmes de votre famille</li>
                      <li>• <strong>Rituel de pardon</strong> entre générations</li>
                      <li>• <strong>Transmission des dons</strong> — enseignez ce que vous avez reçu</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 5 Archétypes Guérisseurs</h3>
              <p>
                Ces archétypes féminins, souvent réprimés, portent des clés de guérison :
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                <Card className="bg-muted border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Sorcière</h4>
                    <p className="text-xs text-muted-foreground mb-2">Pouvoir marginalisé</p>
                    <p className="text-sm text-muted-foreground">
                      La femme de pouvoir qui a été persécutée. Réclamez sa sagesse des plantes, 
                      de la lune, des mystères.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-secondary">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Vierge Sauvage</h4>
                    <p className="text-xs text-muted-foreground mb-2">Autonomie perdue</p>
                    <p className="text-sm text-muted-foreground">
                      La femme appartenant à elle-même. Retrouvez l'indépendance 
                      que le patriarcat a volée.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-secondary">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Mère Sombre</h4>
                    <p className="text-xs text-muted-foreground mb-2">Rage refoulée</p>
                    <p className="text-sm text-muted-foreground">
                      La mère dont la colère a été interdite. Honorez sa rage juste 
                      contre l'injustice.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Prostituée Sacrée</h4>
                    <p className="text-xs text-muted-foreground mb-2">Sexualité volée</p>
                    <p className="text-sm text-muted-foreground">
                      La prêtresse dont le corps était temple. Réclamez le droit 
                      au plaisir sans honte.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">L'Ancienne</h4>
                    <p className="text-xs text-muted-foreground mb-2">Sagesse ignorée</p>
                    <p className="text-sm text-muted-foreground">
                      La femme âgée dont la voix a été tue. Honorez les vieilles femmes 
                      et leurs enseignements.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Devenir Ancêtre Consciente</h3>
              <p>
                Nous ne sommes pas seulement les descendantes de nos ancêtres — nous sommes les 
                <strong className="text-foreground"> ancêtres des générations futures</strong>. 
                Que leur transmettrons-nous ?
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Pratiques pour les Générations Futures</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Écrivez</strong> votre histoire, vos leçons, votre sagesse</li>
                    <li>• <strong>Guérissez</strong> ce que vous pouvez pour ne pas le transmettre</li>
                    <li>• <strong>Bénissez</strong> quotidiennement les générations futures</li>
                    <li>• <strong>Vivez</strong> de façon à ce que vos arrière-petites-filles soient fières</li>
                    <li>• <strong>Plantez</strong> des arbres qu'elles verront grandir</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section XI - Femme et Pouvoir */}
          <section id="pouvoir">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Crown className="w-6 h-6 text-primary" />
              XI. Femme et Pouvoir : Réappropriation du Leadership
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Ya devi sarva bhutesu shakti rupena samsthita — 
                    À la Déesse qui réside en tous les êtres sous la forme du pouvoir... »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Devī Māhātmya</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Le Tabou du Pouvoir Féminin</h3>
              <p>
                Le patriarcat a convaincu les femmes que le pouvoir était masculin, dangereux, ou corrupteur. 
                Pourtant, les Vedas enseignent que <strong className="text-foreground">le pouvoir EST féminin</strong> — 
                Śakti, l'énergie de toute action.
              </p>

              <h4 className="font-semibold text-foreground mt-6 mb-3">Les 3 Sources du Pouvoir Féminin</h4>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Flame className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Icchā-Śakti</h4>
                    <p className="text-sm text-muted-foreground">
                      Pouvoir de la volonté. Savoir ce que vous voulez et oser le demander.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Jñāna-Śakti</h4>
                    <p className="text-sm text-muted-foreground">
                      Pouvoir de la connaissance. Votre intuition et votre sagesse sont valides.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Kriyā-Śakti</h4>
                    <p className="text-sm text-muted-foreground">
                      Pouvoir d'action. Manifester dans le monde ce que vous portez en vous.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 7 Sphères du Pouvoir Féminin</h3>

              <Accordion type="multiple" className="space-y-4 my-6">
                {/* Sphère 1 */}
                <AccordionItem value="sphere1" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">1. Sva-Sāmarthya — Pouvoir sur Soi-même</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>La maîtrise de soi est le fondement de tout leadership.</p>
                    <h5 className="font-semibold text-foreground">Les 5 Engagements</h5>
                    <ul className="space-y-1">
                      <li>• Je connais mes valeurs et je les honore</li>
                      <li>• Je pose des limites claires</li>
                      <li>• Je prends soin de mon corps comme d'un temple</li>
                      <li>• Je cultive ma vie intérieure quotidiennement</li>
                      <li>• Je suis responsable de mes émotions et de mes actions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Sphère 2 */}
                <AccordionItem value="sphere2" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">2. Vāc-Śakti — Pouvoir de la Voix</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>La parole est création. Réclamez votre voix.</p>
                    <h5 className="font-semibold text-foreground">Pratiques</h5>
                    <ul className="space-y-1">
                      <li>• Chantez le Oṁ chaque matin — vibrez votre présence</li>
                      <li>• Pratiquez Satya (vérité) — dites ce que vous pensez</li>
                      <li>• Osez parler en public — votre message mérite d'être entendu</li>
                      <li>• Écrivez — mettez vos pensées en forme</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Sphère 3 */}
                <AccordionItem value="sphere3" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">3. Artha-Śakti — Pouvoir Économique</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>L'indépendance financière est une forme de liberté spirituelle.</p>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-foreground mb-2">Rituel de Lakṣmī pour la Prospérité</h5>
                        <ol className="space-y-1">
                          <li>1. Chaque vendredi, allumez une lampe ghee</li>
                          <li>2. Récitez : Oṁ Śrīṁ Mahālakṣmyai Namaḥ (108x)</li>
                          <li>3. Visualisez l'or coulant vers vous</li>
                          <li>4. Notez une action concrète à prendre</li>
                        </ol>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                {/* Sphère 4 */}
                <AccordionItem value="sphere4" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">4. Rāja-Śakti — Pouvoir Politique/Social</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>Influencer les structures qui gouvernent la vie collective.</p>
                    <ul className="space-y-1">
                      <li>• Engagez-vous dans votre communauté</li>
                      <li>• Soutenez les autres femmes en position de leadership</li>
                      <li>• Votez, manifestez, signez des pétitions</li>
                      <li>• Créez des cercles de pouvoir féminin</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Sphère 5 */}
                <AccordionItem value="sphere5" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">5. Vidyā-Śakti — Pouvoir Intellectuel/Créatif</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>La connaissance et la créativité comme formes de pouvoir.</p>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-foreground mb-2">Rituel de Sarasvatī</h5>
                        <p>Avant toute étude ou création :</p>
                        <ol className="space-y-1">
                          <li>1. Allumez une bougie blanche</li>
                          <li>2. Récitez : Oṁ Aiṁ Sarasvatyai Namaḥ</li>
                          <li>3. Demandez l'inspiration et la clarté</li>
                        </ol>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                {/* Sphère 6 */}
                <AccordionItem value="sphere6" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">6. Siddhi-Śakti — Pouvoir Spirituel/Mystique</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>Les pouvoirs subtils qui émergent de la pratique spirituelle.</p>
                    <h5 className="font-semibold text-foreground">Les 8 Siddhis (Aṣṭa-Siddhi)</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div><strong>Aṇimā</strong> — Se faire infiniment petit</div>
                      <div><strong>Mahimā</strong> — S'agrandir</div>
                      <div><strong>Laghimā</strong> — Légèreté</div>
                      <div><strong>Garimā</strong> — Poids</div>
                      <div><strong>Prāpti</strong> — Obtenir tout</div>
                      <div><strong>Prākāmya</strong> — Réaliser les désirs</div>
                      <div><strong>Īśitva</strong> — Suprématie</div>
                      <div><strong>Vaśitva</strong> — Maîtrise</div>
                    </div>
                    <p className="italic">Ces pouvoirs émergent naturellement de Tapas (discipline spirituelle intense).</p>
                  </AccordionContent>
                </AccordionItem>

                {/* Sphère 7 */}
                <AccordionItem value="sphere7" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">7. Guru-Śakti — Pouvoir d'Initier et Enseigner</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm space-y-3">
                    <p>Le pouvoir suprême : transmettre ce que vous avez reçu.</p>
                    <ul className="space-y-1">
                      <li>• Mentorez d'autres femmes</li>
                      <li>• Partagez votre sagesse sans fausse modestie</li>
                      <li>• Créez des espaces d'apprentissage</li>
                      <li>• Acceptez le rôle d'aînée quand il vient à vous</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Rituel d'Empowerment
                  </h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. <strong>Inventaire de puissance</strong> — Listez les 7 sphères et évaluez votre niveau dans chacune</li>
                    <li>2. <strong>Choisissez une sphère</strong> à développer ce mois-ci</li>
                    <li>3. <strong>Déclaration publique</strong> — Affirmez votre intention devant des témoins</li>
                    <li>4. <strong>Action quotidienne</strong> — Un pas chaque jour vers cet objectif</li>
                    <li>5. <strong>Célébration</strong> — Honorez chaque victoire, même petite</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section XII - Sexualité Sacrée */}
          <section id="sexualite-sacree">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Flame className="w-6 h-6 text-primary" />
              XII. Femme et Sexualité Sacrée : Tantra Appliqué
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Ce par quoi les gens ordinaires tombent, c'est par cela même que le yogi s'élève. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Kulārṇava Tantra</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Répression Millénaire</h3>
              <p>
                La sexualité féminine a été systématiquement réprimée à travers trois stratégies :
              </p>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Diabolisation</strong> — La femme sexuée comme tentatrice, sorcière, pécheresse</li>
                <li>• <strong className="text-foreground">Objectification</strong> — Le corps féminin réduit à un objet de désir masculin</li>
                <li>• <strong className="text-foreground">Contrôle reproductif</strong> — Sexualité légitime uniquement pour la procréation</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 6 Principes Fondamentaux du Tantra</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">1. Le corps est sacré</h4>
                    <p className="text-sm text-muted-foreground">
                      Non pas obstacle à transcender, mais véhicule de la réalisation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">2. Le plaisir est divin</h4>
                    <p className="text-sm text-muted-foreground">
                      L'extase sexuelle est une porte vers l'extase spirituelle.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">3. L'énergie est neutre</h4>
                    <p className="text-sm text-muted-foreground">
                      C'est l'intention qui détermine si l'énergie élève ou abaisse.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">4. Le féminin est premier</h4>
                    <p className="text-sm text-muted-foreground">
                      Śakti précède et anime Śiva. La femme est le guide.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">5. L'union est cosmique</h4>
                    <p className="text-sm text-muted-foreground">
                      Chaque union sexuelle consciente recrée l'union de Śiva et Śakti.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">6. La conscience transforme</h4>
                    <p className="text-sm text-muted-foreground">
                      La même énergie qui crée des enfants peut créer l'éveil.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 3 Portes Orgasmiques</h3>
              <p>
                La tradition tantrique reconnaît trois niveaux d'orgasme, correspondant aux trois granthis (nœuds) :
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Granthi</th>
                      <th className="p-3 text-left text-foreground">Zone</th>
                      <th className="p-3 text-left text-foreground">Type d'Orgasme</th>
                      <th className="p-3 text-left text-foreground">Expérience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Brahmā Granthi</td>
                      <td className="p-3">Bassin (Clitoris)</td>
                      <td className="p-3">Orgasme génital</td>
                      <td className="p-3">Décharge physique, pics localisés</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Viṣṇu Granthi</td>
                      <td className="p-3">Cœur (Point G)</td>
                      <td className="p-3">Orgasme cardiaque</td>
                      <td className="p-3">Vagues émotionnelles, amour profond</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Rudra Granthi</td>
                      <td className="p-3">Tête (Point A)</td>
                      <td className="p-3">Orgasme spirituel</td>
                      <td className="p-3">Dissolution du moi, extase cosmique</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pratiques de Purification</h3>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Yoni Steam (Vapeur Vaginale)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pratique ancestrale de nettoyage et d'harmonisation :
                  </p>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Préparez une infusion d'herbes (rose, calendula, lavande, camomille)</li>
                    <li>2. Versez dans un récipient large</li>
                    <li>3. Asseyez-vous au-dessus, drapée d'une couverture</li>
                    <li>4. Restez 20-30 minutes en méditation</li>
                    <li>5. Visualisez le nettoyage de toutes les mémoires</li>
                  </ol>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Contre-indications : Grossesse, menstruation, infection active
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Mantra HRĪṀ pour la Yoni</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Le bīja mantra HRĪṀ est le mantra de la Śakti par excellence :
                  </p>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Asseyez-vous confortablement</li>
                    <li>2. Placez votre attention sur le yoni</li>
                    <li>3. Récitez HRĪṀ en sentant la vibration dans le bassin</li>
                    <li>4. Visualisez une lumière dorée s'épanouissant</li>
                    <li>5. Continuez 10-20 minutes</li>
                  </ol>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Guérison des Traumatismes Sexuels</h3>
              <p>
                Le Tantra offre des outils puissants pour guérir les blessures sexuelles :
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Les 5 Principes de Guérison</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">1. Souveraineté</strong> — Vous êtes la seule autorité sur votre corps</li>
                    <li><strong className="text-foreground">2. Rythme</strong> — Guérir prend le temps qu'il faut</li>
                    <li><strong className="text-foreground">3. Soutien</strong> — Entourez-vous de personnes sûres</li>
                    <li><strong className="text-foreground">4. Ressourcement</strong> — Créez des expériences positives</li>
                    <li><strong className="text-foreground">5. Intégration</strong> — Le but n'est pas d'oublier mais de transformer</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section XIII - La Femme Sage */}
          <section id="femme-sage">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Crown className="w-6 h-6 text-primary" />
              XIII. La Femme Sage — Vieillir en Conscience
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Avec l'âge, le corps peut s'affaiblir, 
                    mais l'âme qui a cultivé la sagesse ne cesse de briller plus fort. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Tradition védique</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 3 Couronnes de la Femme</h3>
              <p>
                Chaque femme traverse trois grandes phases, chacune étant une couronne :
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">Kanyā</h4>
                    <p className="text-xs text-muted-foreground mb-2">La Vierge (0-28 ans)</p>
                    <p className="text-sm text-muted-foreground">
                      Appartenir à soi-même. Explorer. Apprendre. Rêver.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">Mātṛkā</h4>
                    <p className="text-xs text-muted-foreground mb-2">La Mère (28-56 ans)</p>
                    <p className="text-sm text-muted-foreground">
                      Créer. Nourrir. Protéger. Donner.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">Vidyā</h4>
                    <p className="text-xs text-muted-foreground mb-2">La Sage (56+ ans)</p>
                    <p className="text-sm text-muted-foreground">
                      Transmettre. Guider. Bénir. Rayonner.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La Ménopause comme Initiation</h3>
              <p>
                La ménopause n'est pas une perte — c'est une <strong className="text-foreground">transmutation</strong>. 
                Le sang qui coulait vers l'extérieur est désormais retenu et transformé en 
                <strong className="text-foreground"> Ojas spirituel</strong>.
              </p>

              <h4 className="font-semibold text-foreground mt-6 mb-3">Les 3 Feux de la Ménopause</h4>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Feu Physique</strong> — Les bouffées de chaleur sont Agni qui purifie</li>
                <li>• <strong className="text-foreground">Feu Émotionnel</strong> — L'irritabilité brûle les patterns obsolètes</li>
                <li>• <strong className="text-foreground">Feu Spirituel</strong> — L'énergie sexuelle monte vers les chakras supérieurs</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 5 Rôles de la Femme Sage</h3>

              <Accordion type="multiple" className="space-y-4 my-6">
                <AccordionItem value="role1" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">1. Gardienne de la Mémoire</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm">
                    <p>Porter et transmettre l'histoire de la lignée, les traditions, les recettes, les chants.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="role2" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">2. Conseillère</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm">
                    <p>Offrir guidance et perspective aux plus jeunes, sans imposer ni contrôler.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="role3" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">3. Guérisseuse</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm">
                    <p>Utiliser la sagesse accumulée pour apaiser, guérir, réconcilier.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="role4" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">4. Visionnaire</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm">
                    <p>Voir au-delà du visible, avoir accès à des visions et des intuitions profondes.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="role5" className="bg-secondary/20 border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="font-semibold">5. Préparatrice des Passages</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm">
                    <p>Accompagner les naissances, les mariages, les morts. Tenir l'espace des transitions.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Préparer sa Propre Mort</h3>
              <p>
                La femme sage se prépare consciemment au grand passage :
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Les 5 Préparations</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">1. Testament spirituel</strong> — Écrire les leçons à transmettre</li>
                    <li><strong className="text-foreground">2. Réconciliation</strong> — Régler les conflits, demander et offrir le pardon</li>
                    <li><strong className="text-foreground">3. Distribution</strong> — Donner ce qui peut l'être de son vivant</li>
                    <li><strong className="text-foreground">4. Instructions</strong> — Clarifier ses souhaits pour la fin de vie</li>
                    <li><strong className="text-foreground">5. Méditation sur la mort</strong> — Maraṇa Smaraṇa quotidienne</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Rituel de Passage à la Sagesse</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    À réaliser autour du 56e anniversaire ou après la ménopause :
                  </p>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Rassemblez les femmes de votre vie</li>
                    <li>2. Partagez votre histoire, vos épreuves, vos victoires</li>
                    <li>3. Recevez la bénédiction des autres femmes</li>
                    <li>4. Déclarez votre entrée dans la phase de sagesse</li>
                    <li>5. Engagez-vous à servir les générations futures</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion - Le Retour de la Déesse */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              Conclusion : Le Retour de la Déesse — Manifeste
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground leading-relaxed">
                    Nous avons parcouru un chemin immense — depuis les origines cosmiques de la Śakti 
                    jusqu'à votre propre pratique quotidienne, depuis les hymnes des Ṛṣikā-s 
                    jusqu'au testament spirituel de la femme sage.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mt-4">
                    Ce n'était pas seulement de l'information — c'était une <strong>initiation</strong>.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Le Diagnostic du Présent</h3>
              <p>
                Notre époque traverse une <strong className="text-foreground">crise du féminin</strong>. 
                La Terre-Mère est pillée, les femmes sont violées, les déesses oubliées. 
                Le masculin toxique domine, le féminin sacré est réprimé.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 10 Antidotes Féminins</h3>
              <div className="grid md:grid-cols-2 gap-3 my-6">
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>1.</strong> Réhabiliter le corps comme temple</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>2.</strong> Honorer les cycles (menstruels, lunaires, saisonniers)</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>3.</strong> Cultiver l'intuition comme forme de connaissance</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>4.</strong> Pratiquer la sororité active</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>5.</strong> Réclamer le pouvoir sans s'excuser</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>6.</strong> Guérir les lignées blessées</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>7.</strong> Célébrer la sexualité sacrée</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>8.</strong> Protéger la Terre comme notre corps</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>9.</strong> Transmettre la sagesse aux générations futures</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-border">
                  <CardContent className="p-3">
                    <p className="text-sm text-foreground"><strong>10.</strong> Incarner la Déesse au quotidien</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les 7 Vertus de la Guerrière Spirituelle</h3>
              <div className="grid md:grid-cols-4 gap-3 my-6">
                <Card className="bg-card/50 border-primary/20 text-center">
                  <CardContent className="p-4">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">Courage</h4>
                    <p className="text-xs text-muted-foreground">Affronter la peur</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 text-center">
                  <CardContent className="p-4">
                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">Compassion</h4>
                    <p className="text-xs text-muted-foreground">Force avec douceur</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 text-center">
                  <CardContent className="p-4">
                    <Eye className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">Discernement</h4>
                    <p className="text-xs text-muted-foreground">Voir le vrai</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 text-center">
                  <CardContent className="p-4">
                    <Flame className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">Persévérance</h4>
                    <p className="text-xs text-muted-foreground">Ne jamais abandonner</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 text-center">
                  <CardContent className="p-4">
                    <Flower2 className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">Authenticité</h4>
                    <p className="text-xs text-muted-foreground">Être vraie</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 text-center">
                  <CardContent className="p-4">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">Service</h4>
                    <p className="text-xs text-muted-foreground">Au-delà de soi</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 text-center">
                  <CardContent className="p-4">
                    <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">Joie</h4>
                    <p className="text-xs text-muted-foreground">Célébrer la vie</p>
                  </CardContent>
                </Card>
              </div>

              {/* Le Serment de la Shakti */}
              <Card className="bg-primary/10 border-primary/30 my-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-foreground text-center mb-6">
                    Le Serment de la Śakti
                  </h3>
                  <div className="space-y-4 text-center">
                    <p className="text-foreground font-medium">Je jure solennellement :</p>
                    <ol className="space-y-3 text-foreground text-left max-w-2xl mx-auto">
                      <li><strong>1.</strong> D'honorer mon corps comme le temple de la Déesse</li>
                      <li><strong>2.</strong> De cultiver ma connexion au sacré chaque jour</li>
                      <li><strong>3.</strong> De parler ma vérité même quand ma voix tremble</li>
                      <li><strong>4.</strong> De soutenir mes sœurs dans leurs combats et leurs triomphes</li>
                      <li><strong>5.</strong> De guérir ce que je peux pour ne pas le transmettre</li>
                      <li><strong>6.</strong> De protéger ceux qui ne peuvent pas se protéger eux-mêmes</li>
                      <li><strong>7.</strong> De célébrer la beauté même dans la souffrance</li>
                      <li><strong>8.</strong> De transmettre la sagesse aux générations qui viennent</li>
                      <li><strong>9.</strong> De servir le retour du féminin sacré dans le monde</li>
                      <li><strong>10.</strong> De me souvenir que je suis Śakti elle-même</li>
                    </ol>
                    <p className="text-foreground font-medium italic mt-6">
                      Oṁ Śakti, Oṁ Śakti, Oṁ Śakti Svāhā
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Bénédiction finale */}
              <Card className="bg-primary/5 border-primary/20 my-8">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-serif text-foreground mb-4">Bénédiction Finale</h3>
                  <p className="text-lg text-foreground italic leading-relaxed">
                    Que vous soyez bénie par Durga dans vos combats,<br />
                    par Lakṣmī dans votre abondance,<br />
                    par Sarasvatī dans votre sagesse,<br />
                    par Kālī dans vos transformations.
                  </p>
                  <p className="text-lg text-foreground italic leading-relaxed mt-4">
                    Que le feu de la Śakti brûle en vous,<br />
                    que les eaux de la grâce vous portent,<br />
                    que la terre de vos ancêtres vous soutienne,<br />
                    que l'air de la liberté vous inspire,<br />
                    que l'éther de la conscience vous illumine.
                  </p>
                  <p className="text-2xl text-primary font-serif mt-6">
                    Oṁ Śrī Mahādevyai Namaḥ
                  </p>
                </CardContent>
              </Card>

              <div className="text-center my-12">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    <Heart className="w-5 h-5 mr-2" />
                    Nous contacter
                  </Link>
                </Button>
              </div>

              {/* Navigation */}
              <div className="flex justify-center pt-8">
                <Button variant="outline" asChild>
                  <Link to="/philosophie-vedique">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour à la Philosophie Védique
                  </Link>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default SagesseFeminine;