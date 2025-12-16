import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";

const chapters = [
  { id: "concepts", title: "Concepts Fondamentaux" },
  { id: "cycles", title: "Les Cycles Cosmiques" },
  { id: "shakti", title: "La Shakti et les Chakras" },
  { id: "ames", title: "Âmes en Involution et Évolution" },
  { id: "rayons", title: "Rayons et Initiations" },
  { id: "guru", title: "Le Guru-Tattva" },
  { id: "margas", title: "Les Margas (Voies)" },
  { id: "conclusion", title: "Conclusion" },
];

const InvolutionEvolution = () => {
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
            Involution et <span className="text-primary">Évolution</span> selon les Vedas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprenez les cycles cosmiques de la création et l'évolution de la conscience à travers les âges.
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

          {/* Mantra */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">OM NAMO NARAYANA</p>
              <p className="text-sm text-muted-foreground italic">
                S'incliner et rendre hommage au cœur des eaux cosmiques de la création
              </p>
            </CardContent>
          </Card>

          {/* Chapter 1 */}
          <section id="concepts">
            <h2 className="text-2xl font-serif text-foreground mb-6">Concepts Fondamentaux</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'<strong className="text-foreground">involution</strong> et l'<strong className="text-foreground">évolution</strong> de l'âme 
                sont deux processus intimement liés dans la spiritualité védique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Involution (Avaroha)</h3>
              <p>
                L'involution se réfère à la descente de l'âme (Jiva) dans le monde matériel (Prakriti), 
                où elle s'incarne dans un corps physique pour expérimenter et apprendre. C'est un mouvement 
                vers la densité et la limitation, où l'âme se confronte à des défis et des leçons nécessaires à sa croissance.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Évolution (Aroha)</h3>
              <p>
                L'évolution consiste en l'ascension de l'âme vers des états de conscience supérieurs. 
                Au fil des expériences vécues, l'âme se libère progressivement de l'illusion de la séparation (Maya) 
                et se reconnecte à sa véritable nature divine.
              </p>
              
              <p className="mt-4">
                Les Upanishads enseignent que cette évolution passe par la compréhension progressive des cinq 
                <strong className="text-foreground"> koshas</strong> (enveloppes) : Annamaya, Pranamaya, Manomaya, 
                Vijnanamaya et Anandamaya.
              </p>
            </div>
          </section>

          {/* Chapter 2 */}
          <section id="cycles">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Cycles Cosmiques et l'Évolution Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Selon les Puranas, le processus d'involution et d'évolution s'inscrit dans les grands cycles 
                cosmiques des <strong className="text-foreground">Kalpas</strong> (jours de Brahma) et des 
                <strong className="text-foreground"> Yugas</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Satya Yuga</h4>
                    <p className="text-sm">L'âge d'or - Dharma à 100%</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Treta Yuga</h4>
                    <p className="text-sm">L'âge d'argent - Dharma à 75%</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Dvapara Yuga</h4>
                    <p className="text-sm">L'âge de bronze - Dharma à 50%</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Kali Yuga</h4>
                    <p className="text-sm">L'âge de fer - Dharma à 25%</p>
                  </CardContent>
                </Card>
              </div>
              
              <p className="mt-6">
                Nous traversons actuellement le <strong className="text-foreground">Kali Yuga</strong>, 
                âge de l'obscurité spirituelle où l'évolution consciente demande des efforts particuliers, 
                notamment le <strong className="text-foreground">Nama-Japa</strong> (répétition du nom divin) 
                et le <strong className="text-foreground">Bhakti-Yoga</strong> (voie de la dévotion).
              </p>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="shakti">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Shakti et les Niveaux de Conscience</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les Tantras et les Agamas décrivent l'évolution comme l'éveil progressif de 
                <strong className="text-foreground"> Kundalini Shakti</strong> à travers les sept Chakras :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Muladhara</strong> - Survie et ancrage</li>
                <li><strong className="text-foreground">Svadhisthana</strong> - Créativité et émotions</li>
                <li><strong className="text-foreground">Manipura</strong> - Pouvoir personnel</li>
                <li><strong className="text-foreground">Anahata</strong> - Amour inconditionnel</li>
                <li><strong className="text-foreground">Vishuddha</strong> - Expression authentique</li>
                <li><strong className="text-foreground">Ajna</strong> - Intuition et vision intérieure</li>
                <li><strong className="text-foreground">Sahasrara</strong> - Union divine</li>
              </ul>
              <p className="mt-4">
                Cette montée de l'énergie divine représente le retour conscient de Shakti vers Shiva, 
                symbolisant l'union de la conscience individuelle avec la Conscience universelle.
              </p>
            </div>
          </section>

          {/* Chapter 4 */}
          <section id="ames">
            <h2 className="text-2xl font-serif text-foreground mb-6">Âmes en Involution et en Évolution</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                La tradition védique décrit différents stades d'évolution de l'âme :
              </p>
              
              <div className="space-y-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">1. Âmes en Tamas (inertie)</h4>
                    <p className="text-sm text-muted-foreground">
                      Conscience en sommeil, dominée par l'inertie spirituelle.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">2. Âmes en Rajas (activité)</h4>
                    <p className="text-sm text-muted-foreground">
                      Dominées par les désirs et l'action passionnée.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">3. Âmes en Sattva (pureté)</h4>
                    <p className="text-sm text-muted-foreground">
                      En quête de vérité, développant la sagesse et la compassion.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">4. Âmes libérées (Muktas)</h4>
                    <p className="text-sm text-muted-foreground">
                      Ayant transcendé les trois gunas, réalisé leur nature divine.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 5 */}
          <section id="rayons">
            <h2 className="text-2xl font-serif text-foreground mb-6">Rayons et Initiations selon la Tradition Védique</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les <strong className="text-foreground">Saptarishi-Mandalas</strong> (Sept Rayons Cosmiques) 
                représentent différentes qualités divines à travers lesquelles les âmes évoluent :
              </p>
              <ul className="space-y-2 mt-4">
                <li>Rayon de la Volonté et du Pouvoir</li>
                <li>Rayon de l'Amour-Sagesse</li>
                <li>Rayon de l'Intelligence Active</li>
                <li>Rayon de l'Harmonie par le Conflit</li>
                <li>Rayon de la Connaissance Concrète</li>
                <li>Rayon de la Dévotion et de l'Idéalisme</li>
                <li>Rayon de l'Ordre Cérémoniel</li>
              </ul>
            </div>
          </section>

          {/* Chapter 6 */}
          <section id="guru">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Importance du Guru-Tattva et du Satsang</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Le <strong className="text-foreground">Guru-Shishya Parampara</strong> (lignée maître-disciple) 
                est essentiel dans l'évolution spirituelle. Le Guru n'est pas simplement un enseignant, 
                mais un canal de la grâce divine qui accélère l'évolution du disciple.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    "Le Guru est Brahma, Vishnu et Shiva. Le Guru est le Brahman suprême lui-même. 
                    Je m'incline devant ce Guru."
                  </p>
                  <p className="text-sm text-center mt-2 text-muted-foreground">- Guru Stotram</p>
                </CardContent>
              </Card>
              <p>
                Le <strong className="text-foreground">Satsang</strong> (association avec la vérité) 
                amplifie l'évolution par la résonance collective des consciences en quête.
              </p>
            </div>
          </section>

          {/* Chapter 7 */}
          <section id="margas">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Margas (Voies) selon les Yugas</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les voies spirituelles varient selon les Yugas :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Satya Yuga</strong> - Dhyana Yoga (méditation profonde)</li>
                <li><strong className="text-foreground">Treta Yuga</strong> - Yajna (rituels sacrificiels)</li>
                <li><strong className="text-foreground">Dvapara Yuga</strong> - Archana (adoration des formes divines)</li>
                <li><strong className="text-foreground">Kali Yuga</strong> - Nama Sankirtana (chant collectif du nom divin)</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">Conclusion : Le Dharma Éternel de l'Évolution Collective</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'évolution de l'âme n'est pas un voyage solitaire. Nous sommes tous interconnectés 
                dans le grand tissu de la conscience cosmique. Chaque pas que nous faisons vers la lumière 
                élève l'humanité entière.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    "L'évolution de l'âme est un voyage de retour à la lumière, à l'amour inconditionnel 
                    et à la réalisation de son plein potentiel spirituel."
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie/ayurveda-elevation-spirituelle">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Article précédent
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie/mort-ayurveda">
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

export default InvolutionEvolution;
