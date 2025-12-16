import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

const chapters = [
  { id: "architecture", title: "L'Architecture Subtile de l'Être" },
  { id: "feu-sacre", title: "Le Feu Sacré : Fondement de la Conscience" },
  { id: "quete", title: "La Quête Spirituelle" },
  { id: "sattvavajaya", title: "Sattvavajaya : La Maîtrise de l'Esprit" },
  { id: "trilogie", title: "La Trilogie Thérapeutique selon Charaka" },
  { id: "huit-branches", title: "Les Huit Branches de l'Ayurvéda" },
  { id: "vaidya", title: "Le Vaidya comme Brahmin" },
  { id: "conclusion", title: "Conclusion" },
];

const AyurvedaElevationSpirituelle = () => {
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
            L'Ayurvéda : Une Voie d'<span className="text-primary">Élévation Spirituelle</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Découvrez comment la médecine traditionnelle indienne transcende la simple guérison physique pour devenir un chemin complet de réalisation de soi.
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
          
          {/* Introduction */}
          <section className="prose prose-lg text-muted-foreground">
            <p>
              L'Ayurvéda, littéralement "science de la vie", est bien plus qu'un simple système médical. 
              C'est une voie complète d'évolution spirituelle qui reconnaît l'interconnexion profonde entre 
              le corps, l'esprit et l'âme. Cette approche holistique offre non seulement des outils de guérison, 
              mais aussi un chemin vers la réalisation du Soi.
            </p>
          </section>

          {/* Chapter 1 */}
          <section id="architecture">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Architecture Subtile de l'Être</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Selon l'Ayurvéda, l'être humain est composé de plusieurs corps ou enveloppes (koshas) qui s'interpénètrent :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Annamaya Kosha</strong> - Le corps physique, nourri par la nourriture</li>
                <li><strong className="text-foreground">Pranamaya Kosha</strong> - Le corps énergétique, siège du prana</li>
                <li><strong className="text-foreground">Manomaya Kosha</strong> - Le corps mental, siège des pensées et émotions</li>
                <li><strong className="text-foreground">Vijnanamaya Kosha</strong> - Le corps de sagesse, siège de l'intellect supérieur</li>
                <li><strong className="text-foreground">Anandamaya Kosha</strong> - Le corps de béatitude, le plus proche de l'Atman</li>
              </ul>
              <p className="mt-4">
                La santé véritable implique l'harmonisation de toutes ces dimensions, pas seulement du corps physique.
              </p>
            </div>
          </section>

          {/* Chapter 2 */}
          <section id="feu-sacre">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le Feu Sacré : Fondement de la Conscience</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Agni</strong>, le feu digestif, est considéré comme la manifestation 
                de la conscience divine dans le corps. Il ne transforme pas seulement la nourriture physique, 
                mais aussi les impressions mentales et les expériences spirituelles.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "Quand Agni est équilibré, la conscience s'éveille naturellement. 
                    Le feu digestif est le pont entre le monde matériel et le monde spirituel."
                  </p>
                </CardContent>
              </Card>
              <p>
                Les différents types d'Agni - Jatharagni (digestif), Bhutagni (élémentaire) et Dhatvagni (tissulaire) - 
                travaillent ensemble pour maintenir non seulement la santé physique mais aussi la clarté mentale 
                et l'éveil spirituel.
              </p>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="quete">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Quête Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'Ayurvéda reconnaît quatre buts de l'existence humaine (<strong className="text-foreground">Purusharthas</strong>) :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Dharma</h4>
                    <p className="text-sm">La vie juste et éthique</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Artha</h4>
                    <p className="text-sm">La prospérité matérielle légitime</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Kama</h4>
                    <p className="text-sm">Les plaisirs et désirs légitimes</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Moksha</h4>
                    <p className="text-sm">La libération spirituelle finale</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 4 */}
          <section id="sattvavajaya">
            <h2 className="text-2xl font-serif text-foreground mb-6">Sattvavajaya : La Maîtrise de l'Esprit</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Sattvavajaya</strong> est la thérapie psycho-spirituelle de l'Ayurvéda. 
                Elle vise à contrôler l'esprit et à le libérer des attachements néfastes. Cette approche comprend :
              </p>
              <ul className="space-y-2 mt-4">
                <li>La méditation (Dhyana) pour calmer les fluctuations mentales</li>
                <li>Le contrôle des sens (Indriya Nigraha)</li>
                <li>Le développement de la discrimination (Viveka)</li>
                <li>Le détachement progressif (Vairagya)</li>
                <li>L'étude des textes sacrés (Svadhyaya)</li>
              </ul>
            </div>
          </section>

          {/* Chapter 5 */}
          <section id="trilogie">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Trilogie Thérapeutique selon Charaka</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Le sage Charaka décrit trois approches thérapeutiques complémentaires :
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Daiva Vyapashraya - La Dimension Transcendante</h3>
              <p>
                Cette approche utilise les mantras, les rituels, les pèlerinages et les pratiques dévotionnelles 
                pour harmoniser les influences subtiles et karmiques sur la santé.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Yukti Vyapashraya - La Voie Rationnelle</h3>
              <p>
                C'est l'approche logique et scientifique qui utilise l'alimentation, les herbes, 
                les thérapies physiques et les routines quotidiennes (Dinacharya).
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Sattvavajaya - La Maîtrise Mentale</h3>
              <p>
                Les pratiques psycho-spirituelles pour purifier l'esprit et développer Sattva (la qualité de pureté).
              </p>
            </div>
          </section>

          {/* Chapter 6 */}
          <section id="huit-branches">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Huit Branches de l'Ayurvéda et leur Dimension Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Chacune des huit branches (Ashtanga Ayurveda) possède une dimension spirituelle :
              </p>
              <ol className="space-y-3 mt-4">
                <li><strong className="text-foreground">Kaya Chikitsa</strong> - Médecine interne : purification du corps-temple</li>
                <li><strong className="text-foreground">Bala Chikitsa</strong> - Pédiatrie : protection des âmes nouvellement incarnées</li>
                <li><strong className="text-foreground">Graha Chikitsa</strong> - Psychiatrie/Démonologie : libération des influences négatives</li>
                <li><strong className="text-foreground">Urdhvanga Chikitsa</strong> - ORL/Ophtalmologie : ouverture des portes de perception</li>
                <li><strong className="text-foreground">Shalya Tantra</strong> - Chirurgie : intervention sur le karma physique</li>
                <li><strong className="text-foreground">Damshtra Chikitsa</strong> - Toxicologie : protection contre les poisons physiques et subtils</li>
                <li><strong className="text-foreground">Jara Chikitsa</strong> - Gériatrie/Rajeunissement : préparation consciente au passage</li>
                <li><strong className="text-foreground">Vajikarana</strong> - Virilité/Fertilité : transmission consciente de la vie</li>
              </ol>
            </div>
          </section>

          {/* Chapter 7 */}
          <section id="vaidya">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le Vaidya comme Brahmin : Médecin-Prêtre Védique</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Traditionnellement, le <strong className="text-foreground">Vaidya</strong> (médecin ayurvédique) 
                était considéré comme un Brahmin, c'est-à-dire quelqu'un qui a réalisé Brahman (la réalité ultime). 
                Son rôle dépassait la simple prescription de remèdes :
              </p>
              <ul className="space-y-2 mt-4">
                <li>Guide spirituel autant que soignant</li>
                <li>Médiateur entre le patient et les forces cosmiques</li>
                <li>Gardien des traditions sacrées de guérison</li>
                <li>Exemple vivant d'une vie dharmique</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">Conclusion : L'Ayurvéda comme Moksha-Shastra</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'Ayurvéda est véritablement un <strong className="text-foreground">Moksha-Shastra</strong>, 
                une science de la libération. En prenant soin du corps et de l'esprit selon ses principes, 
                nous créons les conditions optimales pour l'éveil spirituel.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    "La santé n'est pas seulement l'absence de maladie, mais un état d'équilibre parfait 
                    entre le corps, l'esprit et l'âme, permettant la réalisation de notre nature divine."
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie-vedique">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie/involution-evolution">
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

export default AyurvedaElevationSpirituelle;
