import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "familiariser", title: "Se Familiariser" },
  { id: "nature-ame", title: "La Nature de l'Âme" },
  { id: "processus", title: "Le Processus de la Mort" },
  { id: "corps-subtils", title: "Les Corps Subtils" },
  { id: "mort-consciente", title: "La Mort Consciente" },
  { id: "plans-conscience", title: "Les Plans Post-Mortem" },
  { id: "processus-technique", title: "Processus Technique" },
  { id: "trois-germes", title: "Les Trois Germes" },
  { id: "samskaras", title: "Les Saṃskāras" },
  { id: "accompagnement", title: "L'Accompagnement" },
];

const MortAyurveda = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/philosophie-vedique">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la Philosophie Védique
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            La Mort selon l'Ayurvéda : <span className="text-primary">Une Vision Holistique du Passage de l'Âme</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explorez la vision védique de la transition ultime, où la mort devient une porte vers de nouveaux états de conscience.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className="text-sm px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Chapter 1 */}
          <section id="introduction">
            <h2 className="text-2xl font-serif text-foreground mb-6">Introduction : Comprendre la Peur de la Mort</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les réponses aux questions contemporaines montrent que la peur de la mort est majoritairement liée à la douleur physique, à la solitude et à la séparation avec les proches. Ce qui domine dans les représentations actuelles est l'attitude archaïque d'horreur de la mort et le désir de notre société d'en supprimer l'apparence et même l'idée.
              </p>
              <p>
                Mourir seul parmi les appareils destinés à protéger la vie, mourir seul entouré de vivants auxquels on ne peut pas dire son angoisse de la séparation, et qui vous tapotent les joues d'un air jovial en vous trouvant une meilleure mine, alors qu'on sent la vie qui file par tous nos sens, c'est ce qui est souvent imposé aux humains.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "De même qu'une personne abandonne des vêtements usés pour en revêtir de nouveaux, l'âme incarnée abandonne les corps usés pour entrer dans d'autres corps nouveaux."
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">- Bhagavad-Gītā</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Chapter 2 */}
          <section id="familiariser">
            <h2 className="text-2xl font-serif text-foreground mb-6">Se Familiariser avec l'Idée de la Mort</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Il y a une prise de conscience que l'on n'est pas tout puissant, mais au contraire mortel. Paradoxalement, apprivoiser l'idée de sa mort décuple l'envie et la joie de vivre chaque moment du présent.
              </p>
              <p>
                Cette acceptation de la mortalité, appelée <strong className="text-foreground">"maraṇa-smaraṇa"</strong> dans les traditions védiques, permet de développer un détachement sain (vairāgya) et une appréciation plus profonde de chaque instant.
              </p>
              <p>
                Le corps physique se décompose graduellement après la mort, ce qui justifie qu'on l'inhume ou l'incinère. La crémation du corps qui se développe aujourd'hui est une décision à bien réfléchir et à ne pas réduire à une question pratique, de manque de place ou d'écologie.
              </p>
              <p>
                Dans la tradition védique, la <strong className="text-foreground">crémation (anteyeṣṭi)</strong> est préférée car elle facilite la libération complète de l'âme de son attachement au corps physique et aide à la purification des éléments (pañca-mahābhūta).
              </p>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="nature-ame">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Nature de l'Âme selon l'Ayurvéda</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'âme, siégeant dans le cœur, est le principe vital, le principe d'autodétermination, le noyau central de l'énergie positive par laquelle tous les atomes du corps sont maintenus en place et sont subordonnés à la « volonté de vivre » de l'âme.
              </p>
              <p>
                Cette âme individuelle (<strong className="text-foreground">jīvātmā</strong>) est de la même essence que l'Âme Suprême (Paramātmā) mais reste distincte dans son expérience incarnée.
              </p>
              <p>Elle possède trois qualités fondamentales :</p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">Sat</h4>
                    <p className="text-sm">Existence éternelle</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">Cit</h4>
                    <p className="text-sm">Conscience pure</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-foreground">Ānanda</h4>
                    <p className="text-sm">Félicité spirituelle</p>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-6">
                La mort est donc, littéralement, le retrait du cœur et de la tête de ces deux courants d'énergie, ce qui produit la perte complète de la conscience du corps et sa désintégration. Ce processus suit un ordre cosmique précis gouverné par les lois du karma et du temps (kāla), qui déterminent le moment exact de la séparation.
              </p>
            </div>
          </section>

          {/* Chapter 4 */}
          <section id="processus">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le Processus de la Mort Humaine</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Quand l'âme estime que le temps de l'incarnation est terminé, elle décide de se retirer, cela provoque la mort du corps physique. Le moment de la libération de l'âme de son véhicule physique est fixé par la loi karmique.
              </p>
              <p>Ce moment est déterminé par trois facteurs principaux :</p>
              <ul className="space-y-2 mt-4">
                <li>Le <strong className="text-foreground">prārabdha-karma</strong> (karma destiné à être vécu dans cette vie)</li>
                <li>Le libre arbitre de l'âme</li>
                <li>L'intervention divine (daiva)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Les Trois Types de Mort</h3>
              <p>
                Sous le premier aspect, la mort est la fin naturelle d'un cycle, sous le second aspect, elle peut être causée par l'abus des facultés du corps physique, la mauvaise application de l'énergie de vie ou l'action délibérée de l'humain lui-même.
              </p>
              <p>L'Ayurvéda reconnaît ainsi trois types de mort :</p>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Kāla-mṛtyu</h4>
                    <p className="text-sm text-muted-foreground">
                      Mort naturelle au terme de la durée de vie, liée à l'épuisement de l'Āyus.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Akāla-mṛtyu</h4>
                    <p className="text-sm text-muted-foreground">
                      Mort prématurée due à des facteurs externes ou des déséquilibres.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Icchā-mṛtyu</h4>
                    <p className="text-sm text-muted-foreground">
                      Mort volontaire des grands yogis, maîtres de leur propre passage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 5 */}
          <section id="corps-subtils">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Corps Subtils et la Transition</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Du point de vue de l'âme, le fait de venir s'incarner, c'est-à-dire de naître dans un corps physique dense revêtu d'un corps émotionnel et d'un corps mental, constitue un emprisonnement temporaire.
              </p>
              <p>Ces trois corps suivent des processus de dissolution distincts au moment de la mort :</p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Sthūla-śarīra</strong> - Le corps physique grossier</li>
                <li><strong className="text-foreground">Sūkṣma-śarīra</strong> - Le corps subtil (mental, émotionnel)</li>
                <li><strong className="text-foreground">Kāraṇa-śarīra</strong> - Le corps causal (semences karmiques)</li>
              </ul>
              <p className="mt-4">
                Sous l'action de soins donnés au corps physique, de l'acharnement thérapeutique, le pouvoir du corps physique prend le dessus sur la volonté de l'âme et l'empêche de se désincarner. Cette résistance artificielle peut créer un déséquilibre dans le processus naturel de mort et prolonger inutilement la souffrance de l'âme emprisonnée.
              </p>
            </div>
          </section>

          {/* Chapter 6 */}
          <section id="mort-consciente">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Mort Consciente : L'Idéal Spirituel</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                La mort est en fait une histoire de conscience. Tant que notre conscience est identifiée à la forme humaine, la mort gardera à nos yeux toutes nos anciennes peurs (la souffrance, qu'est-ce que je laisse derrière moi, mes biens matériels, ai-je une descendance, où je vais, je n'existerai plus, va-t-on m'oublier...).
              </p>
              <p>
                Les grands maîtres spirituels cultivent la pratique du <strong className="text-foreground">"icchā-mṛtyu"</strong> - la capacité de quitter consciemment le corps au moment choisi. Cette maîtrise s'acquiert par la méditation profonde (samādhi), la connaissance de soi (ātma-jñāna) et le détachement des identifications corporelles.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    Dès que nous nous reconnaîtrons comme âmes et que nous serons capables de centrer notre conscience sur n'importe quel plan à volonté, nous ne connaîtrons plus la mort.
                  </p>
                </CardContent>
              </Card>
              <p>
                Cette réalisation, appelée <strong className="text-foreground">"jīvan-mukti"</strong> (libération vivante), permet à l'âme de transcender la peur de la mort et de reconnaître sa nature éternelle.
              </p>
            </div>
          </section>

          {/* Chapter 7 */}
          <section id="plans-conscience">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Plans de Conscience Post-Mortem</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Le plan émotionnel ou plan astral renferme des égrégores de chaque émotion, désir et sentiment qui ont été nourris par l'humanité depuis la nuit des temps.
              </p>
              <p>Ces plans correspondent aux différents lokas (mondes) décrits dans les Purāṇas :</p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Bhūrloka</strong> - Plan physique</li>
                <li><strong className="text-foreground">Bhuvarloka</strong> - Plan vital</li>
                <li><strong className="text-foreground">Svarloka</strong> - Plan mental</li>
                <li>Et les plans supérieurs jusqu'au <strong className="text-foreground">Satyaloka</strong></li>
              </ul>
              <p className="mt-4">
                Après avoir quitté le corps qu'elle animait, l'âme redevient une énergie purement spirituelle et s'harmonise dans l'invisible avec le plan de conscience correspondant au degré d'évolution qu'elle a atteint à l'issue de sa vie terrestre.
              </p>
              <p>
                Cette harmonisation suit les lois du <strong className="text-foreground">"bhāva-samādhi"</strong> - l'âme rejoint automatiquement les vibrations qui correspondent à son état de conscience développé durant sa vie.
              </p>
            </div>
          </section>

          {/* Chapter 8 */}
          <section id="processus-technique">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le Processus Technique de la Mort</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                D'un point de vue technique, la mort se produit lorsque le fil de conscience reliant l'âme au cerveau et le fil de vie reliant l'âme au cœur se retirent.
              </p>
              <p>Ce processus implique la dissolution progressive des éléments :</p>
              <ul className="space-y-2 mt-4">
                <li>L'élément <strong className="text-foreground">terre</strong> se dissout dans l'eau</li>
                <li>L'<strong className="text-foreground">eau</strong> dans le feu</li>
                <li>Le <strong className="text-foreground">feu</strong> dans l'air</li>
                <li>L'<strong className="text-foreground">air</strong> dans l'éther</li>
                <li>Et finalement l'<strong className="text-foreground">éther</strong> dans la conscience pure</li>
              </ul>
              <p className="mt-4">
                On sait que les nadis sont la contrepartie éthérique du système nerveux tout entier. Ces 72 000 canaux énergétiques, avec les trois principaux - <strong className="text-foreground">iḍā, piṅgalā et suṣumnā</strong> - jouent un rôle crucial dans le processus de sortie de l'âme.
              </p>
              <p>
                La sortie peut se faire par différents orifices selon le niveau spirituel : les yogis sortent par le <strong className="text-foreground">brahmarandhra</strong> (sommet du crâne), d'autres par différents chakras.
              </p>
            </div>
          </section>

          {/* Chapter 9 */}
          <section id="trois-germes">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Trois Germes du Futur</h2>
            <div className="prose prose-lg text-muted-foreground">
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Le Processus de Révélation (Chit-Darśana)</h3>
              <p>
                L'âme (Jīvātman) présente à la conscience individuelle un panorama complet des vies antérieures. Cette révélation dure une fraction de seconde mais contient l'essence de multiples existences. L'être conscient opère une sélection instinctive parmi ces expériences.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Détail des Trois Germes :</h3>
              
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Germe n°1 - Sthāna-Bīja (Germe de Position)</h4>
                    <p className="text-sm text-primary mb-2">Correspond au Sañcita Karma</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Détermine :</strong> Famille, lieu de naissance, conditions matérielles, environnement social<br/>
                      <strong>Influence :</strong> Constitution physique (Prakriti), hérédité, ressources disponibles<br/>
                      <strong>Mécanisme :</strong> Attraction magnétique vers des parents aux vibrations compatibles
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Germe n°2 - Śakti-Bīja (Germe de Pouvoir)</h4>
                    <p className="text-sm text-primary mb-2">Correspond au Prārabdha Karma</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Détermine :</strong> Capacités innées, talents, structure énergétique, équilibre des doshas<br/>
                      <strong>Influence :</strong> Potentiel intellectuel, dons artistiques, force vitale (Ojas)<br/>
                      <strong>Mécanisme :</strong> Activation des saṃskāras spécifiques selon les expériences choisies
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Germe n°3 - Bandhu-Bīja (Germe de Relation)</h4>
                    <p className="text-sm text-primary mb-2">Correspond à l'Āgāmi Karma</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Détermine :</strong> Cercle relationnel, âmes-sœurs, ennemis karmiques, maître spirituel<br/>
                      <strong>Influence :</strong> Qualité des attachements, leçons affectives à apprendre<br/>
                      <strong>Mécanisme :</strong> Résonance avec les âmes ayant des dettes mutuelles
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 10 */}
          <section id="samskaras">
            <h2 className="text-2xl font-serif text-foreground mb-6">Formation des Saṃskāras : Le Processus d'Imprégnation</h2>
            <div className="prose prose-lg text-muted-foreground">
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Mécanisme de Formation :</h3>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-foreground">Phase 1 - Saṃkalpa (Intention initiale)</h4>
                  <p className="text-sm text-muted-foreground">
                    Au moment de la sélection des trois germes, l'âme formule une intention profonde (saṃkalpa) qui devient le plan directeur de l'incarnation. Cette intention cristallise en <strong className="text-foreground">bīja-mantra</strong> - des vibrations semences qui s'impriment dans le corps subtil (Liṅga-śarīra).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">Phase 2 - Vāsanā-Nirmāṇa (Création des tendances)</h4>
                  <p className="text-sm text-muted-foreground">
                    Les expériences sélectionnées se transforment en <strong className="text-foreground">vāsanās</strong> (parfums psychiques) qui imprègnent les différentes couches de la conscience :
                  </p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li><strong>Ānandamaya-kośa</strong> reçoit les impressions spirituelles</li>
                    <li><strong>Vijñānamaya-kośa</strong> intègre les impressions intellectuelles</li>
                    <li><strong>Manomaya-kośa</strong> absorbe les impressions émotionnelles</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground">Phase 3 - Saṃskāra-Sthāpana (Établissement des impressions)</h4>
                  <p className="text-sm text-muted-foreground">
                    Les vāsanās se solidifient en saṃskāras permanents qui s'inscrivent dans la structure énergétique.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-8">Les Trois Catégories de Saṃskāras Formés :</h3>
              
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Janma-Saṃskāras (Impressions de Naissance)</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Formation :</strong> Le germe n°1 active des mémoires d'environnements similaires<br/>
                      <strong>Inscription :</strong> Dans les marmas (points vitaux) et la structure osseuse<br/>
                      <strong>Manifestation :</strong> Attraction vers certains lieux, goûts alimentaires innés, réactions instinctives<br/>
                      <strong>Exemple :</strong> Enfant né en France mais attiré naturellement par la culture japonaise (mémoire d'incarnation précédente)
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Śakti-Saṃskāras (Impressions de Capacité)</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Formation :</strong> Le germe n°2 réveille des talents acquis dans d'autres vies<br/>
                      <strong>Inscription :</strong> Dans le système nerveux et les nādīs (canaux énergétiques)<br/>
                      <strong>Manifestation :</strong> Facilités précoces, génie dans certains domaines, dons spontanés<br/>
                      <strong>Exemple :</strong> Enfant prodige en musique qui "se souvient" de techniques jamais apprises
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Ṛṇa-Saṃskāras (Impressions de Dette Karmique)</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Formation :</strong> Le germe n°3 établit des liens magnétiques avec certaines âmes<br/>
                      <strong>Inscription :</strong> Dans le hṛdaya (cœur spirituel) et le système circulatoire<br/>
                      <strong>Manifestation :</strong> Reconnaissance immédiate, amour/aversion inexpliqués, sentiment de "déjà vécu"<br/>
                      <strong>Exemple :</strong> Amour instantané ou répulsion immédiate envers certaines personnes
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-8">Processus d'Activation Graduelle :</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Enfance (0-7 ans) :</strong> Activation des Janma-saṃskāras - Les impressions environnementales se manifestent</li>
                <li><strong className="text-foreground">Adolescence (7-21 ans) :</strong> Éveil des Śakti-saṃskāras - Les talents se révèlent spontanément</li>
                <li><strong className="text-foreground">Âge adulte (21+ ans) :</strong> Déploiement des Ṛṇa-saṃskāras - Les relations karmiques principales se présentent</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-8">Purification des Saṃskāras - Techniques Ayurvédiques :</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Panchakarma</strong> - Purification physique des impressions toxiques</li>
                <li><strong className="text-foreground">Prāṇāyāma</strong> - Nettoyage énergétique des canaux subtils</li>
                <li><strong className="text-foreground">Mantra-japa</strong> - Transformation des vibrations mentales</li>
                <li><strong className="text-foreground">Dhyāna</strong> - Dissolution des attachements karmiques</li>
              </ul>
              <p className="mt-4">
                Cette compréhension permet au thérapeute ayurvédique d'identifier les saṃskāras limitants et d'accompagner leur transformation pour libérer le potentiel authentique de l'individu.
              </p>
            </div>
          </section>

          {/* Chapter 11 */}
          <section id="accompagnement">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Accompagnement et la Préparation</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'Ayurvéda enseigne l'importance du <strong className="text-foreground">"sat-saṅga"</strong> (compagnie spirituelle) et de la récitation de mantras divins durant les derniers moments.
              </p>
              <p>
                Le mantra <strong className="text-foreground">"Oṃ namo nārāyaṇāya"</strong> ou le mahā-mantra Hare Krishna sont particulièrement recommandés pour purifier la conscience au moment du départ.
              </p>
              <p>
                Les étapes du deuil se mûrissent et se préparent bien avant d'être en situation de derniers moments de vie. L'accompagnement spirituel inclut la lecture des textes sacrés, particulièrement le <strong className="text-foreground">Garuḍa Purāṇa</strong> qui décrit en détail le voyage post-mortem de l'âme et les rites appropriés pour faciliter sa transition.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    En cultivant une compréhension védique de la mort comme simple transition, nous pouvons transformer notre approche de la fin de vie en une opportunité de croissance spirituelle et de réalisation de notre nature éternelle.
                  </p>
                </CardContent>
              </Card>
              <p className="text-center text-muted-foreground italic">
                Pour approfondir cette compréhension, le centre ayurvédique Arkadhya propose des séminaires sur cette approche face à la mort et pour répondre aux questions existentielles profondes et importantes dans la vie d'un être humain.
              </p>
            </div>
          </section>

          {/* Navigation - Retour à la philosophie */}
          <div className="flex justify-center pt-8 pb-4">
            <Button variant="ghost" asChild>
              <Link to="/philosophie-vedique">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour à la Philosophie Védique
              </Link>
            </Button>
          </div>

          {/* Navigation entre articles */}
          <div className="flex justify-between items-center pt-4 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie/involution-evolution" onClick={() => window.scrollTo(0, 0)}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Article précédent
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie/voie-hisvara" onClick={() => window.scrollTo(0, 0)}>
                Article suivant
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MortAyurveda;