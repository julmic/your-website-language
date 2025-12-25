import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Quote, Lightbulb, Eye } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "brahman", title: "Brahman" },
  { id: "atman", title: "Atman" },
  { id: "identite", title: "Identité" },
  { id: "mahavakyas", title: "Mahavakyas" },
  { id: "voies", title: "Voies" },
  { id: "realisation", title: "Réalisation" },
  { id: "contemplation", title: "Contemplation" },
];

const BrahmanAtman = () => {
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
            Philosophie Védique : <span className="text-primary">Brahman et Atman</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            L'exploration approfondie des concepts fondamentaux de l'Absolu et de l'Âme dans la tradition spirituelle indienne
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
          <section id="introduction">
            <h2 className="text-2xl font-serif text-foreground mb-6">Brahman et Atman : L'Essence de l'Existence</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                La philosophie védique, particulièrement telle qu'exprimée dans les Upanishads, explore les concepts 
                profonds de Brahman (l'Absolu) et Atman (l'Âme individuelle). Ces deux notions centrales sont au cœur 
                de la compréhension spirituelle de l'hindouisme et représentent la quête ultime de l'unité et de la 
                connaissance de soi.
              </p>
              <p>
                Dans la tradition védique, Brahman est considéré comme la réalité ultime, infinie, éternelle et immuable 
                qui sous-tend toute existence. Il transcende toutes les limitations et dualités du monde manifesté. 
                Atman, quant à lui, représente l'âme immortelle et éternelle qui réside au cœur de chaque être. 
                L'identité fondamentale entre ces deux concepts est exprimée par la formule "Tat Tvam Asi" - "Toi et Cela êtes un".
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-foreground italic">
                      "Tat Tvam Asi" - "Toi et Cela êtes un" : L'une des grandes déclarations des Upanishads qui exprime 
                      l'identité fondamentale entre l'Atman individuel et le Brahman universel.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <p>
                Cette exploration des concepts de Brahman et Atman nous conduit à une compréhension profonde de la nature 
                de la réalité, de la conscience et de l'existence humaine. Elle nous invite à transcender les limitations 
                de l'ego et à réaliser notre véritable nature divine.
              </p>
            </div>
          </section>

          {/* Brahman Section */}
          <section id="brahman" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">Brahman : L'Absolu Inconditionné</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">La Réalité Suprême</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Nature de Brahman</h4>
                      <p className="text-muted-foreground text-sm">
                        Brahman est la réalité ultime, infinie, éternelle et immuable qui sous-tend toute existence. 
                        Il transcende toutes les limitations et dualités du monde manifesté. Brahman n'est ni masculin 
                        ni féminin, ni personnel ni impersonnel dans le sens ordinaire de ces termes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Attributs de Brahman</h4>
                      <p className="text-muted-foreground text-sm">
                        Brahman est décrit comme Sat (être), Chit (conscience) et Ananda (béatitude). 
                        Ces trois aspects constituent l'essence même de la réalité absolue.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Manifestation et Immanence</h4>
                      <p className="text-muted-foreground text-sm">
                        Bien que transcendant, Brahman est aussi immanent dans toute création. 
                        Il est à la fois le créateur, la création et ce vers quoi tout retourne.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-primary">
                    <BookOpen className="mr-2 w-5 h-5" /> Textes Fondamentaux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Brihadaranyaka Upanishad</h4>
                    <p className="text-muted-foreground text-sm">
                      "Brahman était seul au commencement. Il pensa : 'Que deviendrais-je si j'étais seul ?' 
                      Il se multiplica lui-même."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Taittiriya Upanishad</h4>
                    <p className="text-muted-foreground text-sm">
                      "De lui-même, il se craignait. En vérité, il n'y avait rien d'autre que lui."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mandukya Upanishad</h4>
                    <p className="text-muted-foreground text-sm">
                      "Il n'y a pas de connaissance de l'objet, ni de connaissance subjective. C'est l'inconnaissable."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Les Différentes Perspectives sur Brahman</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Brahman avec Attributs (Saguna Brahman)</h4>
                    <p className="text-muted-foreground text-sm">
                      Dans cette perspective, Brahman est conçu avec des qualités et des attributs. 
                      Il est personnifié sous diverses formes divines comme Vishnu, Shiva ou Devi, 
                      facilitant la relation spirituelle par la dévotion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Brahman sans Attributs (Nirguna Brahman)</h4>
                    <p className="text-muted-foreground text-sm">
                      Dans cette perspective, Brahman est conçu comme absolument sans attributs, 
                      au-delà de toute qualification ou limitation. Il est pur être, pure conscience, 
                      pure béatitude.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Atman Section */}
          <section id="atman">
            <h2 className="text-2xl font-serif text-foreground mb-6">Atman : L'Âme Individuelle</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-primary">
                    <Lightbulb className="mr-2 w-5 h-5" /> États de Conscience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Jagrat (État de Veille)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état ordinaire de conscience où nous percevons le monde extérieur à travers nos sens et notre intellect.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Swapna (Rêve)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état où la conscience se tourne vers l'intérieur et crée son propre monde d'expériences mentales.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Sushupti (Sommeil Profond)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état de paix et d'unité où l'ego et les désirs sont temporairement suspendus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Turiya (Quatrième État)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état transcendant qui révèle l'unité de l'Atman avec le Brahman.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">L'Essence de l'Être</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Nature de l'Atman</h4>
                      <p className="text-muted-foreground text-sm">
                        L'Atman est l'âme immortelle et éternelle qui réside au cœur de chaque être. 
                        Il est distinct du corps physique, des émotions et de l'intellect.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Relation avec Brahman</h4>
                      <p className="text-muted-foreground text-sm">
                        L'Atman individuel est en essence identique au Brahman universel. 
                        Cette identité est exprimée dans les grandes déclarations des Upanishads.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">L'Atman comme Témoin</h4>
                      <p className="text-muted-foreground text-sm">
                        L'Atman est le témoin éternel de toutes les expériences, 
                        la conscience fondamentale qui rend possible toute perception.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Identité Section */}
          <section id="identite" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Identité Brahman-Atman</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Le cœur de l'enseignement upanishadique réside dans la doctrine de l'identité entre Brahman et Atman. 
                Cette vérité centrale affirme que l'âme individuelle et la réalité absolue ne sont pas deux entités 
                séparées mais une seule et même réalité vue sous différentes perspectives.
              </p>
              <p>
                L'illusion de la séparation est produite par Maya (le pouvoir créatif de l'absolu) et Avidya (l'ignorance 
                individuelle). Maya projette le monde phénoménal comme une réalité apparente, tandis qu'Avidya empêche 
                l'individu de reconnaître sa véritable nature.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-foreground italic mb-2">
                        "Ayam ātmā brahma" - "Cet Atman est Brahman"
                      </p>
                      <p className="text-muted-foreground text-sm">
                        — Mandukya Upanishad
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mahavakyas */}
          <section id="mahavakyas">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Quatre Mahavakyas</h2>
            <p className="text-muted-foreground mb-6">
              Les quatre grandes déclarations (Mahavakyas) des Upanishads expriment la vérité de l'identité Brahman-Atman :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Prajnanam Brahma</h4>
                  <p className="text-sm text-muted-foreground mb-2">"La conscience est Brahman"</p>
                  <p className="text-xs text-primary">Aitareya Upanishad</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Aham Brahmasmi</h4>
                  <p className="text-sm text-muted-foreground mb-2">"Je suis Brahman"</p>
                  <p className="text-xs text-primary">Brihadaranyaka Upanishad</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Tat Tvam Asi</h4>
                  <p className="text-sm text-muted-foreground mb-2">"Tu es Cela"</p>
                  <p className="text-xs text-primary">Chandogya Upanishad</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Ayam Atma Brahma</h4>
                  <p className="text-sm text-muted-foreground mb-2">"Cet Atman est Brahman"</p>
                  <p className="text-xs text-primary">Mandukya Upanishad</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Voies */}
          <section id="voies" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">Voies vers la Réalisation</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">Jnana Yoga</h3>
                  <p className="text-muted-foreground text-sm">
                    La voie de la connaissance utilise l'enquête philosophique et la méditation 
                    pour réaliser directement l'identité entre Atman et Brahman.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">Bhakti Yoga</h3>
                  <p className="text-muted-foreground text-sm">
                    La voie de la dévotion approche Brahman comme divinité personnelle, 
                    développant un amour intense qui dissout l'ego et révèle l'unité.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">Raja Yoga</h3>
                  <p className="text-muted-foreground text-sm">
                    La voie de la méditation utilise des techniques de concentration 
                    pour calmer l'esprit et révéler la conscience pure de l'Atman.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Réalisation */}
          <section id="realisation">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le But : Moksha</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                La réalisation de l'identité Brahman-Atman est le but suprême de la vie spirituelle dans la tradition 
                védique. Cette réalisation, appelée Moksha ou libération, représente la fin de toute souffrance 
                et l'établissement permanent dans la paix et la béatitude de l'Absolu.
              </p>
              <p>
                Le sage libéré (Jivanmukta) continue à vivre dans le monde mais n'est plus lié par ses actions 
                ou ses expériences. Il perçoit l'unité de toute existence et agit spontanément pour le bien-être 
                de tous les êtres.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Eye className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">L'état de libération</h4>
                      <p className="text-muted-foreground text-sm">
                        Dans cet état, l'individu réalise que sa véritable nature n'est pas limitée par le corps 
                        ou l'esprit mais est identique à la conscience infinie et éternelle qui sous-tend 
                        toute existence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contemplation */}
          <section id="contemplation" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">Exercices de Contemplation</h2>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">1. Neti Neti (Ni ceci, ni cela)</h4>
                    <p className="text-muted-foreground text-sm">
                      Pratiquez le discernement en reconnaissant que vous n'êtes ni le corps, ni les émotions, 
                      ni les pensées, mais le témoin éternel de toutes ces manifestations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. Méditation sur "Qui suis-je ?"</h4>
                    <p className="text-muted-foreground text-sm">
                      Posez-vous la question fondamentale et suivez la trace de la conscience qui pose cette question. 
                      Cette pratique, enseignée par Ramana Maharshi, conduit directement à la réalisation de l'Atman.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. Contemplation des Mahavakyas</h4>
                    <p className="text-muted-foreground text-sm">
                      Méditez régulièrement sur les grandes déclarations des Upanishads, laissant leur signification 
                      profonde imprégner votre conscience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <div className="flex justify-center pt-8">
            <Button asChild>
              <Link to="/philosophie-vedique">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la Philosophie Védique
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrahmanAtman;
