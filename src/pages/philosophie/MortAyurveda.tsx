import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Comprendre la Peur de la Mort" },
  { id: "familiariser", title: "Se Familiariser avec la Mort" },
  { id: "nature-ame", title: "La Nature de l'Âme" },
  { id: "processus", title: "Le Processus de la Mort" },
  { id: "corps-subtils", title: "Les Corps Subtils" },
  { id: "mort-consciente", title: "La Mort Consciente" },
  { id: "plans-conscience", title: "Les Plans Post-Mortem" },
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
            La Mort selon l'Ayurvéda : <span className="text-primary">Une Vision Holistique</span>
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
                La peur de la mort est majoritairement liée à la douleur physique, à la solitude et à la séparation 
                avec les proches. Ce qui domine dans les représentations actuelles est l'attitude archaïque d'horreur 
                de la mort et le désir de notre société d'en supprimer l'apparence et même l'idée.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "De même qu'une personne abandonne des vêtements usés pour en revêtir de nouveaux, 
                    l'âme incarnée abandonne les corps usés pour entrer dans d'autres corps nouveaux."
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
                Paradoxalement, apprivoiser l'idée de sa mort décuple l'envie et la joie de vivre chaque moment du présent. 
                Cette acceptation de la mortalité, appelée <strong className="text-foreground">"maraṇa-smaraṇa"</strong> dans 
                les traditions védiques, permet de développer un détachement sain (vairāgya) et une appréciation plus profonde 
                de chaque instant.
              </p>
              <p>
                La <strong className="text-foreground">crémation</strong> (anteyeṣṭi) est préférée dans la tradition védique 
                car elle facilite la libération complète de l'âme de son attachement au corps physique et aide à la purification 
                des éléments (pañca-mahābhūta).
              </p>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="nature-ame">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Nature de l'Âme selon l'Ayurvéda</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'âme, siégeant dans le cœur, est le principe vital, le noyau central de l'énergie positive par laquelle 
                tous les atomes du corps sont maintenus en place. Cette âme individuelle (<strong className="text-foreground">jīvātmā</strong>) 
                est de la même essence que l'Âme Suprême (Paramātmā) mais reste distincte dans son expérience incarnée.
              </p>
              <p>
                Elle possède trois qualités fondamentales :
              </p>
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
            </div>
          </section>

          {/* Chapter 4 */}
          <section id="processus">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le Processus de la Mort Humaine</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Quand l'âme estime que le temps de l'incarnation est terminé, elle décide de se retirer, 
                cela provoque la mort du corps physique. Le moment est déterminé par trois facteurs :
              </p>
              <ul className="space-y-2 mt-4">
                <li>Le <strong className="text-foreground">prārabdha-karma</strong> (karma destiné à être vécu dans cette vie)</li>
                <li>Le libre arbitre de l'âme</li>
                <li>L'intervention divine (daiva)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Les Trois Types de Mort</h3>
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
                La mort est le retrait progressif de l'âme de ses différentes enveloppes :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Sthūla-śarīra</strong> - Le corps physique grossier</li>
                <li><strong className="text-foreground">Sūkṣma-śarīra</strong> - Le corps subtil (mental, émotionnel)</li>
                <li><strong className="text-foreground">Kāraṇa-śarīra</strong> - Le corps causal (semences karmiques)</li>
              </ul>
              <p className="mt-4">
                Le corps subtil, composé des 17 éléments (5 prāṇas, 5 organes de perception, 5 organes d'action, 
                manas et buddhi), accompagne l'âme dans son voyage post-mortem et vers sa prochaine incarnation.
              </p>
            </div>
          </section>

          {/* Chapter 6 */}
          <section id="mort-consciente">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Mort Consciente : L'Idéal Spirituel</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'idéal védique est la <strong className="text-foreground">mort consciente</strong>, où l'individu 
                reste pleinement présent durant la transition. Les grands maîtres spirituels choisissent 
                consciemment leur moment de départ, pratiquant le <strong className="text-foreground">mahāsamādhi</strong>.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "La pensée sur laquelle on se concentre au moment de la mort détermine la direction 
                    que prendra l'âme dans son voyage suivant."
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">- Bhagavad-Gītā 8.6</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Chapter 7 */}
          <section id="plans-conscience">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Plans de Conscience Post-Mortem</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Après la mort, l'âme traverse différents plans de conscience selon son évolution spirituelle :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Bhūr-loka</strong> - Plan terrestre (attachements non résolus)</li>
                <li><strong className="text-foreground">Bhuvar-loka</strong> - Plan intermédiaire (purification)</li>
                <li><strong className="text-foreground">Svar-loka</strong> - Plans célestes (récompense des mérites)</li>
                <li><strong className="text-foreground">Brahma-loka</strong> - Plan de la libération finale</li>
              </ul>
            </div>
          </section>

          {/* Chapter 8 */}
          <section id="samskaras">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Trois Germes du Futur : Les Saṃskāras</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les <strong className="text-foreground">Saṃskāras</strong> sont les impressions subtiles 
                qui accompagnent l'âme d'une vie à l'autre. Ils se forment par :
              </p>
              <ul className="space-y-2 mt-4">
                <li>Les actions répétées (karma)</li>
                <li>Les pensées habituelles (vāsanā)</li>
                <li>Les émotions intenses non résolues</li>
              </ul>
              <p className="mt-4">
                La purification des Saṃskāras est possible par :
              </p>
              <ul className="space-y-2 mt-4">
                <li>La pratique spirituelle régulière (sādhana)</li>
                <li>Le service désintéressé (sevā)</li>
                <li>La grâce du Guru</li>
                <li>Les rituels de purification</li>
              </ul>
            </div>
          </section>

          {/* Chapter 9 */}
          <section id="accompagnement">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Accompagnement et la Préparation</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'Ayurvéda et les traditions védiques offrent des pratiques pour préparer 
                et accompagner la transition :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Mantras</strong> - Récitation de mantras sacrés pour élever la conscience</li>
                <li><strong className="text-foreground">Rituels</strong> - Cérémonies pour faciliter le passage</li>
                <li><strong className="text-foreground">Présence</strong> - Accompagnement bienveillant par les proches</li>
                <li><strong className="text-foreground">Prières</strong> - Invocations pour guider l'âme</li>
              </ul>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    "La mort n'est pas la fin, mais une transformation. L'âme continue son voyage éternel 
                    vers la réalisation de sa nature divine."
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie/involution-evolution">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Article précédent
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie/voie-hisvara">
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
