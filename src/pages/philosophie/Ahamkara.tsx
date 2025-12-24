import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const chapters = [
  { id: "preface", title: "Préface" },
  { id: "preambule", title: "Préambule" },
  { id: "origine", title: "Origine Sacrée" },
  { id: "anatomie", title: "Anatomie Spirituelle" },
  { id: "poisons", title: "Les 5 Poisons" },
  { id: "retournement", title: "Le Retournement" },
  { id: "voies", title: "Les Voies" },
  { id: "transformations", title: "Transformations" },
  { id: "vie-apres", title: "Après la Dissolution" },
];

const Ahamkara = () => {
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
            Traité Spirituel sur <span className="text-primary">Ahaṃkāra</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            De l'illusion du "je" à la Réalisation du Soi — Une exploration profonde de l'ego selon la tradition védique
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

          {/* Préface */}
          <section id="preface">
            <h2 className="text-2xl font-serif text-foreground mb-6">Préface</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Oubliez tout ce que vous avez appris. Commencez par le simple fait que vous êtes.
                    Évitez toute pensée, restez avec cela, et ne laissez pas l'idée d'être quelqu'un
                    intervenir. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Nisargadatta Maharaj</p>
                </CardContent>
              </Card>

              <p>
                Cette parole du maître non-duel Nisargadatta Maharaj résume avec une clarté désarmante l'essence du
                chemin spirituel proposé par la tradition védique. Elle pointe directement vers ce que les textes
                sacrés appellent <strong className="text-foreground">Ahaṃkāra</strong> — le sens du « je » qui se
                cristallise comme identité séparée — et vers la voie de sa dissolution.
              </p>

              <p>
                Ce traité est né d'une urgence spirituelle : celle de rendre accessible, dans un langage contemporain
                mais fidèle, les enseignements profonds sur l'ego tels qu'ils apparaissent dans les Upanishads, le
                Vedānta, le Yoga, le Sāṃkhya et l'Ayurveda.
              </p>

              <p>
                Nous vivons dans une époque où le mot « ego » est galvaudé — tantôt caricaturé en psychologie populaire,
                tantôt confondu avec un simple excès de confiance en soi. Pourtant, l'Ahaṃkāra védique désigne quelque
                chose de bien plus subtil et plus universel : le voile premier, la contraction initiale qui fait de
                l'Être infini un individu limité. C'est cette illusion — ni mauvaise ni bonne en soi — que le chercheur
                est invité à traverser.
              </p>

              <p>
                Ce texte se veut à la fois didactique et contemplatif. Chaque section est conçue pour être lue lentement,
                comme un support de méditation. Des <strong className="text-foreground">citations des grands sages</strong>,
                des <strong className="text-foreground">exercices pratiques</strong>, et des <strong className="text-foreground">réflexions
                personnelles</strong> accompagnent les explications pour ancrer la théorie dans l'expérience directe.
              </p>

              <p>
                Ce traité s'adresse à tous ceux qui ressentent l'appel de la liberté intérieure : à ceux qui ont touché,
                ne serait-ce qu'un instant, la paix d'exister sans être « quelqu'un » ; à ceux qui cherchent une
                compréhension claire de ce qui les maintient prisonniers de leurs propres pensées.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <p className="text-foreground italic">
                    Puisse ce traité être un miroir où vous reconnaîtrez, non pas un nouvel enseignement, mais ce que
                    vous avez toujours su — ce que vous êtes, avant même de vous être cru quelqu'un.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Préambule */}
          <section id="preambule">
            <h2 className="text-2xl font-serif text-foreground mb-6">I. Préambule — Le Conditionnement Primordial</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'apparition du « je » dans l'expérience humaine</h3>
              <p>
                Dès l'aube de la conscience individuelle, un mystère fondamental s'installe en chaque être humain : le
                sentiment d'être « quelqu'un ». Ce n'est pas une acquisition progressive, ni un apprentissage délibéré.
                C'est plutôt un voile invisible qui descend sur la conscience pure, transformant l'infini en point de
                vue, l'Être en individu.
              </p>

              <p>
                Les Upanishads nomment cela <strong className="text-foreground">Ahaṃkāra</strong> — littéralement
                « le fait de faire (kāra) le je (aham) ». Ce n'est pas l'ego au sens psychologique moderne, limité à
                l'orgueil ou à l'arrogance. C'est quelque chose de bien plus fondamental : <strong className="text-foreground">le
                principe même par lequel la conscience se contracte en un centre subjectif distinct</strong>.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Ahaṃkāra n'est pas une erreur à corriger ; c'est une illusion à traverser. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Tradition védique</p>
                </CardContent>
              </Card>

              <p>
                Dès les premières semaines de vie, bien avant que le langage ne structure notre monde, une différenciation
                s'opère silencieusement : « ceci est moi », « ceci n'est pas moi ». Cette distinction n'est pas fausse
                en soi — elle est une fonction naturelle de la manifestation — mais elle devient la racine de toute
                souffrance lorsqu'elle est prise pour la réalité ultime.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Pourquoi ce sentiment d'exister séparément est à la fois naturel et limitant</h3>
              <p>
                Il est essentiel de comprendre que l'Ahaṃkāra n'est pas un accident, ni une faute originelle. Dans la
                cosmologie védique, il fait partie intégrante du déploiement de Prakriti (la Nature) à partir de Brahman
                (l'Absolu). Sans lui, aucune expérience ne serait possible.
              </p>

              <p>
                L'univers entier est un jeu de polarités : sujet et objet, connaisseur et connu, voyant et vu. L'Ahaṃkāra
                crée le point focal nécessaire pour qu'une expérience puisse avoir lieu. En ce sens, il est une grâce —
                un moyen pour l'Un de se connaître à travers les multiples.
              </p>

              <p>
                Mais voici le piège : <strong className="text-foreground">ce qui était un outil devient une prison</strong>.
                Le point focal temporaire se prend pour une entité permanente. Le rôle joué dans le drame cosmique
                (līlā) devient une identité figée. Ce qui était un sentiment fugitif (« je suis ») devient une croyance
                (« je suis ceci, je ne suis pas cela »).
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Le "je" pensé n'est pas le "je" réel. Le "je" réel est la conscience silencieuse qui observe
                    même la pensée "je". »
                  </p>
                  <p className="text-sm text-muted-foreground">— Ramana Maharshi</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'appel à l'éveil : reconnaître l'illusion sans la fuir</h3>
              <p>
                La voie spirituelle ne consiste pas à détruire l'ego — entreprise aussi vaine que de vouloir tuer une
                ombre. Elle invite plutôt à le voir clairement, à le reconnaître comme une construction mentale sans
                substance propre. C'est ce que la tradition appelle <strong className="text-foreground">Viveka</strong>,
                le discernement — la capacité de distinguer le réel (Sat) de l'irréel (Asat).
              </p>

              <p>
                Lorsque le sage Ramana Maharshi demandait : « Qui suis-je ? » (Ko'ham ?), il ne cherchait pas une réponse
                conceptuelle. Il pointait vers une enquête directe, une plongée au cœur du « je » pour découvrir ce
                qu'il est réellement — ou plutôt, ce qu'il n'est pas.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">🧘 Exercice préliminaire : L'enquête du matin</h4>
                  <p className="text-muted-foreground mb-4">
                    Chaque matin, avant que les pensées n'envahissent l'espace mental, restez quelques instants dans le
                    lit, les yeux fermés, et observez :
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Où est le « je » avant la première pensée ?</li>
                    <li>• Y a-t-il un « je » dans le simple fait d'exister, de percevoir le silence ?</li>
                    <li>• Notez la différence entre être et penser à être quelqu'un.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Origine Sacrée */}
          <section id="origine">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. L'Origine Sacrée du Terme Ahaṃkāra</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Étymologie sanskrite et signification profonde</h3>
              <p>
                Le mot <strong className="text-foreground">Ahaṃkāra</strong> est composé de deux termes sanskrits :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Aham (अहम्)</strong> — « Je », la conscience subjective de soi</li>
                <li><strong className="text-foreground">Kāra (कार)</strong> — « Faire », « produire », « créer »</li>
              </ul>

              <p>
                Ensemble, ils signifient littéralement : <strong className="text-foreground">« ce qui produit le je »</strong>
                ou « le faiseur du je ». Ce n'est pas le « je » lui-même, mais la fonction qui génère et maintient le
                sentiment d'être une entité distincte.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Ahaṃkāra est le peintre invisible qui dessine les contours du moi sur la toile infinie de la
                    Conscience. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Enseignement védique</p>
                </CardContent>
              </Card>

              <p>
                Dans les Upanishads et le Sāṃkhya, Ahaṃkāra est considéré comme l'un des 25 Tattvas (principes de
                réalité), situé immédiatement après <strong className="text-foreground">Buddhi</strong> (l'intellect
                cosmique ou discernement) et avant le mental (<strong className="text-foreground">Manas</strong>)
                et les organes sensoriels.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Distinction fondamentale : Ahaṃkāra védique vs. « Ego » occidental</h3>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Aspect</th>
                      <th className="p-3 text-left text-foreground">Ahaṃkāra (Védique)</th>
                      <th className="p-3 text-left text-foreground">Ego (Occidental)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Nature</td>
                      <td className="p-3">Principe cosmique neutre</td>
                      <td className="p-3">Souvent négatif (orgueil, narcissisme)</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Origine</td>
                      <td className="p-3">Émanation de Prakriti/Buddhi</td>
                      <td className="p-3">Construction psychologique</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Fonction</td>
                      <td className="p-3">Crée le sentiment de « je »</td>
                      <td className="p-3">Défense, adaptation, identité</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Approche spirituelle</td>
                      <td className="p-3">Transcender par la connaissance</td>
                      <td className="p-3">Intégrer, renforcer ou dépasser</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">But ultime</td>
                      <td className="p-3">Moksha (libération)</td>
                      <td className="p-3">Équilibre psychique, maturité</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Trois Ahaṃkāras selon les Gunas</h3>
              <p>
                Le Sāṃkhya distingue trois modalités d'Ahaṃkāra, correspondant à la prédominance de chacun des trois
                Gunas (qualités fondamentales de la nature) :
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Ahaṃkāra Sāttvika</h4>
                    <p className="text-xs text-primary mb-2">Clarté, pureté</p>
                    <p className="text-sm">
                      Dominé par Sattva. Produit le Manas et les organes sensoriels subtils. Le « je » tourné vers la
                      lumière intérieure, le discernement.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Ahaṃkāra Rājasika</h4>
                    <p className="text-xs text-primary mb-2">Activité, désir</p>
                    <p className="text-sm">
                      Dominé par Rajas. Active et dynamise les deux autres. Le « je » ambitieux, créatif, en quête de
                      réalisation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Ahaṃkāra Tāmasika</h4>
                    <p className="text-xs text-primary mb-2">Inertie, obscurité</p>
                    <p className="text-sm">
                      Dominé par Tamas. Produit les éléments grossiers (Tanmātras). Le « je » lourd, confus, attaché à
                      la matière.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Méditation guidée : Le nom qui n'est pas moi</h3>
              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Asseyez-vous confortablement. Fermez les yeux. Respirez profondément.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Maintenant, pensez à votre nom. Voyez-le écrit mentalement. Répétez-le en silence.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Puis demandez-vous : <em className="text-foreground">« Ce nom est-il moi ? Ou est-ce un label que
                    j'ai reçu à la naissance et auquel j'ai appris à répondre ? »</em>
                  </p>
                  <p className="text-muted-foreground">
                    Observez : même sans ce nom, vous êtes. L'être pur précède le nom. Le nom est une couche ajoutée —
                    une première brique de l'Ahaṃkāra.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Anatomie Spirituelle */}
          <section id="anatomie">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. L'Anatomie Spirituelle de l'Ego</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Ahaṃkāra dans le système des 25 Tattvas</h3>
              <p>
                Le système du <strong className="text-foreground">Sāṃkhya</strong>, l'une des six écoles philosophiques
                classiques (Darshanas) de l'Inde, offre une cartographie précise de la réalité manifestée. Selon cette
                tradition, tout l'univers phénoménal émane de deux réalités ultimes :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Purusha</strong> — la Conscience pure, le Témoin silencieux, l'Être immuable</li>
                <li><strong className="text-foreground">Prakriti</strong> — la Nature primordiale, le potentiel de toute manifestation</li>
              </ul>

              <p>
                À partir de leur « rencontre », 24 principes (Tattvas) se déploient, formant l'architecture subtile de
                l'existence. Voici la position d'Ahaṃkāra dans cette hiérarchie :
              </p>

              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Niveau</th>
                      <th className="p-3 text-left text-foreground">Tattva</th>
                      <th className="p-3 text-left text-foreground">Fonction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3">1</td>
                      <td className="p-3 font-medium text-foreground">Prakriti</td>
                      <td className="p-3">Matrice cosmique non manifestée</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">2</td>
                      <td className="p-3 font-medium text-foreground">Mahat / Buddhi</td>
                      <td className="p-3">Intelligence cosmique, discernement pur</td>
                    </tr>
                    <tr className="border-t border-border bg-primary/10">
                      <td className="p-3">3</td>
                      <td className="p-3 font-medium text-primary">Ahaṃkāra</td>
                      <td className="p-3 text-foreground">Le principe d'individuation — fait apparaître le « je »</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">4</td>
                      <td className="p-3 font-medium text-foreground">Manas</td>
                      <td className="p-3">Mental, interface entre sens et intellect</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">5-9</td>
                      <td className="p-3 font-medium text-foreground">Jñānendriyas</td>
                      <td className="p-3">5 organes de perception (ouïe, toucher, vue, goût, odorat)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">10-14</td>
                      <td className="p-3 font-medium text-foreground">Karmendriyas</td>
                      <td className="p-3">5 organes d'action (parole, mains, pieds, élimination, reproduction)</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">15-19</td>
                      <td className="p-3 font-medium text-foreground">Tanmātras</td>
                      <td className="p-3">5 essences subtiles (son, toucher, forme, saveur, odeur)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">20-24</td>
                      <td className="p-3 font-medium text-foreground">Mahābhūtas</td>
                      <td className="p-3">5 éléments grossiers (éther, air, feu, eau, terre)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground mt-2">
                Purusha (le 25e Tattva) est le Témoin — il n'appartient pas à Prakriti mais en est le spectateur silencieux.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Position stratégique d'Ahaṃkāra</h3>
              <p>
                Ce qui rend Ahaṃkāra si crucial, c'est sa position charnière : il est le <strong className="text-foreground">premier
                point de subjectivité personnelle</strong> dans l'ordre de la manifestation.
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Avant lui</strong> — Buddhi (l'intellect cosmique) est encore impersonnelle, universelle</li>
                <li><strong className="text-foreground">Après lui</strong> — tout devient « mon » mental, « mes » sens, « mon » corps</li>
              </ul>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Ahaṃkāra est la porte entre l'universel et l'individuel. Il transforme la conscience en
                    expérience personnelle, le Tout en "moi". »
                  </p>
                  <p className="text-sm text-muted-foreground">— Enseignement Sāṃkhya</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Cinq Kośas : Les Gaines de l'Âme</h3>
              <p>
                La Taittirīya Upanishad propose une autre carte de l'être humain, à travers les cinq Kośas (gaines ou
                enveloppes) qui recouvrent l'Ātman. Chacune de ces couches est un terrain d'action pour Ahaṃkāra :
              </p>

              <div className="space-y-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">1. Annamaya Kośa — La gaine de nourriture</h4>
                    <p className="text-sm mt-2">
                      Le corps physique, constitué des éléments grossiers. L'Ahaṃkāra dit : <em className="text-primary">« Je suis ce corps »</em>.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">2. Prāṇamaya Kośa — La gaine vitale</h4>
                    <p className="text-sm mt-2">
                      Le souffle vital, l'énergie qui anime. L'Ahaṃkāra dit : <em className="text-primary">« Je suis cette énergie »</em>.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">3. Manomaya Kośa — La gaine mentale</h4>
                    <p className="text-sm mt-2">
                      Le mental, les émotions, les pensées. L'Ahaṃkāra dit : <em className="text-primary">« Je suis mes pensées, mes émotions »</em>.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">4. Vijñānamaya Kośa — La gaine d'intelligence</h4>
                    <p className="text-sm mt-2">
                      L'intellect discernant, la sagesse. L'Ahaṃkāra dit : <em className="text-primary">« Je suis celui qui sait, qui comprend »</em>.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">5. Ānandamaya Kośa — La gaine de béatitude</h4>
                    <p className="text-sm mt-2">
                      Le voile le plus subtil, proche de l'Ātman. L'Ahaṃkāra dit : <em className="text-primary">« Je suis dans la paix, je suis presque libre »</em> — mais même là, il y a encore un « je ».
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Les cinq Kośas sont comme les pelures d'un oignon. On les enlève une à une, cherchant le cœur.
                    À la fin, on découvre qu'il n'y a pas de cœur matériel — seulement l'espace vide, lumineux, qui
                    contenait tout. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Métaphore védantique</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Exercice : L'observation des couches</h3>
              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Assis en silence, parcourez mentalement les cinq Kośas :
                  </p>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Sentez votre corps physique — « Est-ce moi ? »</li>
                    <li>Sentez votre respiration — « Est-ce moi ? »</li>
                    <li>Observez vos pensées — « Est-ce moi ? »</li>
                    <li>Remarquez la compréhension — « Est-ce moi ? »</li>
                    <li>Touchez la paix intérieure — « Est-ce moi ? »</li>
                  </ol>
                  <p className="text-muted-foreground mt-4">
                    À chaque niveau, posez la question : <em className="text-foreground">« Qui observe cela ? »</em>.
                    Vous découvrirez que chaque couche est observée par quelque chose de plus profond.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Les 5 Poisons */}
          <section id="poisons">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Les Cinq Poisons de l'Ahaṃkāra</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                L'Ahaṃkāra ne se contente pas d'exister en silence. Il se protège, se nourrit, se renforce à travers
                cinq afflictions fondamentales que les textes védiques nomment parfois les <strong className="text-foreground">Pañca
                Kleśas</strong> ou les cinq poisons de l'âme. Ces afflictions ne sont pas des péchés au sens moral,
                mais des <strong className="text-foreground">contractions de la conscience</strong> qui maintiennent
                l'illusion de la séparation.
              </p>

              <Accordion type="multiple" className="mt-6">
                <AccordionItem value="kama" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">1</span>
                      <span className="font-semibold text-foreground">Kāma — Le Désir Insatiable</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Kāma</strong> est le désir, la soif qui pousse l'ego à
                        chercher le bonheur dans les objets extérieurs. Ce n'est pas le désir naturel et sain de se
                        nourrir ou de se reproduire — c'est l'obsession, l'attachement, la croyance que « je serai
                        complet quand j'obtiendrai ceci ».
                      </p>
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <p className="italic text-foreground">
                            « Le désir naît de la contemplation des objets sensoriels. Du désir naît la colère ; de la
                            colère naît la confusion ; de la confusion, la perte de mémoire ; de la perte de mémoire,
                            la destruction de l'intelligence ; et de la destruction de l'intelligence, l'homme périt. »
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">— Bhagavad Gītā II.62-63</p>
                        </CardContent>
                      </Card>
                      <h4 className="font-semibold text-foreground mt-4">Comment Kāma renforce l'ego :</h4>
                      <ul className="space-y-1">
                        <li>• Crée le sentiment de manque : « Je suis incomplet sans cet objet/personne/situation »</li>
                        <li>• Projette le bonheur dans le futur : « Je serai heureux quand... »</li>
                        <li>• Génère une dépendance aux plaisirs sensoriels</li>
                      </ul>
                      <h4 className="font-semibold text-foreground mt-4">Antidote védique :</h4>
                      <p>
                        <strong className="text-foreground">Vairāgya</strong> (détachement) — non pas la répression du
                        désir, mais la compréhension que le bonheur recherché dans les objets est déjà présent en soi.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="krodha" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">2</span>
                      <span className="font-semibold text-foreground">Krodha — La Colère</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Krodha</strong> est la colère — la réaction violente de l'ego
                        lorsque ses désirs sont frustrés ou son image menacée. Elle n'est pas une émotion primaire, mais
                        la <strong className="text-foreground">conséquence directe du désir contrarié</strong>.
                      </p>
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <p className="italic text-foreground">
                            « La colère est l'enfant du désir déçu. Elle est le cri de l'ego qui refuse d'accepter ce
                            qui est. »
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">— Enseignement védantique</p>
                        </CardContent>
                      </Card>
                      <h4 className="font-semibold text-foreground mt-4">Comment Krodha renforce l'ego :</h4>
                      <ul className="space-y-1">
                        <li>• Crée une opposition « moi contre l'autre/le monde »</li>
                        <li>• Projette la cause de la souffrance à l'extérieur</li>
                        <li>• Génère un sentiment de pouvoir illusoire</li>
                      </ul>
                      <h4 className="font-semibold text-foreground mt-4">Antidote védique :</h4>
                      <p>
                        <strong className="text-foreground">Kṣamā</strong> (pardon) et <strong className="text-foreground">Śānti</strong>
                        (paix) — l'acceptation de ce qui est, la reconnaissance que la colère brûle celui qui la porte.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lobha" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">3</span>
                      <span className="font-semibold text-foreground">Lobha — L'Avidité</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Lobha</strong> est l'avidité — le désir de posséder toujours
                        plus, la peur de perdre ce qu'on a, l'incapacité de se satisfaire du présent. C'est Kāma qui
                        s'intensifie et se cristallise en attachement aux possessions.
                      </p>
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <p className="italic text-foreground">
                            « Le sage satisfait de lui-même est plus riche que le roi insatisfait de son royaume. »
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">— Proverbe védique</p>
                        </CardContent>
                      </Card>
                      <h4 className="font-semibold text-foreground mt-4">Comment Lobha renforce l'ego :</h4>
                      <ul className="space-y-1">
                        <li>• Identifie le « je » à ses possessions : « Je suis ce que j'ai »</li>
                        <li>• Crée une anxiété permanente de perte</li>
                        <li>• Rend aveugle à la richesse déjà présente</li>
                      </ul>
                      <h4 className="font-semibold text-foreground mt-4">Antidote védique :</h4>
                      <p>
                        <strong className="text-foreground">Dāna</strong> (générosité) — le don désintéressé, qui inverse
                        le flux de l'énergie et révèle que l'on possède assez pour donner.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="moha" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">4</span>
                      <span className="font-semibold text-foreground">Moha — L'Illusion (Attachement Aveugle)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Moha</strong> est l'illusion — l'attachement aveugle aux
                        relations, aux situations, aux croyances. C'est le voile qui empêche de voir la réalité telle
                        qu'elle est, qui confond le transitoire avec l'éternel, le relatif avec l'absolu.
                      </p>
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <p className="italic text-foreground">
                            « Celui qui voit l'éternel dans le transitoire et le transitoire dans l'éternel vit dans
                            l'illusion. Celui qui distingue clairement les deux atteint la paix. »
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">— Enseignement upanishadique</p>
                        </CardContent>
                      </Card>
                      <h4 className="font-semibold text-foreground mt-4">Comment Moha renforce l'ego :</h4>
                      <ul className="space-y-1">
                        <li>• Crée des liens d'attachement qui deviennent des chaînes</li>
                        <li>• Confond amour (Prema) et attachement (Rāga)</li>
                        <li>• Empêche le discernement entre le réel et l'irréel</li>
                      </ul>
                      <h4 className="font-semibold text-foreground mt-4">Antidote védique :</h4>
                      <p>
                        <strong className="text-foreground">Viveka</strong> (discernement) — la capacité de distinguer
                        le Sat (réel) de l'Asat (irréel), le Nitya (éternel) de l'Anitya (transitoire).
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mada" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">5</span>
                      <span className="font-semibold text-foreground">Māda — L'Orgueil</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-foreground">Māda</strong> est l'orgueil — le sentiment de supériorité,
                        l'ivresse du pouvoir, de la beauté, de la connaissance ou du statut. C'est l'Ahaṃkāra qui
                        s'hypertrophie, qui se gonfle jusqu'à se croire le centre de l'univers.
                      </p>
                      <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <p className="italic text-foreground">
                            « L'orgueil précède la chute, car il aveugle l'ego à ses propres limites et le coupe de la
                            grâce divine. »
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">— Sagesse védique</p>
                        </CardContent>
                      </Card>
                      <h4 className="font-semibold text-foreground mt-4">Comment Māda renforce l'ego :</h4>
                      <ul className="space-y-1">
                        <li>• Isole l'individu dans une tour d'ivoire</li>
                        <li>• Empêche l'apprentissage et la remise en question</li>
                        <li>• Crée une dépendance au regard d'autrui</li>
                      </ul>
                      <h4 className="font-semibold text-foreground mt-4">Antidote védique :</h4>
                      <p>
                        <strong className="text-foreground">Namratā</strong> (humilité) — non pas se rabaisser, mais
                        reconnaître que tout talent, toute qualité vient de la Source et retourne à Elle.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">La Roue des Poisons</h3>
              <p>
                Ces cinq poisons ne sont pas isolés — ils forment un système dynamique où chacun nourrit les autres :
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <div className="space-y-2 text-center">
                    <p className="text-foreground font-medium">Kāma (désir) → frustré → Krodha (colère)</p>
                    <ChevronRight className="w-4 h-4 mx-auto text-primary rotate-90" />
                    <p className="text-foreground font-medium">Krodha → intensifié → Lobha (avidité)</p>
                    <ChevronRight className="w-4 h-4 mx-auto text-primary rotate-90" />
                    <p className="text-foreground font-medium">Lobha → aveuglé par → Moha (illusion)</p>
                    <ChevronRight className="w-4 h-4 mx-auto text-primary rotate-90" />
                    <p className="text-foreground font-medium">Moha → gonflé en → Māda (orgueil)</p>
                    <ChevronRight className="w-4 h-4 mx-auto text-primary rotate-90" />
                    <p className="text-foreground font-medium">Māda → génère de nouveaux → Kāma (désirs)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">🧘 Exercice : Identification du poison dominant</h4>
                  <p className="text-muted-foreground mb-4">
                    Pendant une semaine, observez vos réactions automatiques :
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Quand vous êtes frustré, quel poison se manifeste en premier ?</li>
                    <li>• Quand vous êtes en conflit, lequel prend le dessus ?</li>
                    <li>• Le soir, notez le poison qui a dominé votre journée.</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Cette observation sans jugement est le premier pas vers la dissolution. On ne peut dissoudre que ce
                    que l'on voit clairement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Le Grand Retournement */}
          <section id="retournement">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Le Grand Retournement : Reconnaître le Spectateur</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Tout le chemin spirituel peut se résumer en un seul mouvement : <strong className="text-foreground">retourner
                l'attention vers sa source</strong>. L'Ahaṃkāra, habitué à projeter la conscience vers l'extérieur, est
                invité à se regarder lui-même — et dans ce regard, à se dissoudre.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'Enquête du « Qui suis-je ? » (Ātma-Vicāra)</h3>
              <p>
                La méthode la plus directe pour ce retournement est l'<strong className="text-foreground">Ātma-Vicāra</strong>
                (enquête sur le Soi), popularisée au XXe siècle par Bhagavan Sri Ramana Maharshi.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « L'enquête "Qui suis-je ?" est le feu qui consume toutes les pensées. Quand le "je"-pensée disparaît,
                    seul le "je"-réel demeure — silencieux, lumineux, éternel. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Ramana Maharshi</p>
                </CardContent>
              </Card>

              <h4 className="font-semibold text-foreground mt-4">La méthode en pratique :</h4>
              <ol className="space-y-2 mt-4 list-decimal list-inside">
                <li><strong className="text-foreground">Observez la pensée « je »</strong> — Chaque pensée contient implicitement un « je » qui pense</li>
                <li><strong className="text-foreground">Demandez : « À qui cette pensée apparaît-elle ? »</strong> — La réponse sera « à moi »</li>
                <li><strong className="text-foreground">Demandez : « Qui suis-je ? »</strong> — Ne cherchez pas une réponse conceptuelle</li>
                <li><strong className="text-foreground">Suivez le « je » jusqu'à sa source</strong> — Le mental devient silencieux</li>
                <li><strong className="text-foreground">Demeurez dans ce silence</strong> — C'est le Soi, toujours présent</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Sākṣī Bhāva : Cultiver la Conscience Témoin</h3>
              <p>
                <strong className="text-foreground">Sākṣī</strong> signifie « témoin » — celui qui voit sans être impliqué.
                <strong className="text-foreground">Bhāva</strong> signifie « attitude, disposition, sentiment ». Ensemble,
                ils désignent <strong className="text-foreground">l'art de cultiver la position du témoin silencieux</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">L'observé</h4>
                    <p className="text-sm mt-2">Pensées, émotions, sensations, perceptions — tout ce qui change</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Le Sākṣī (Témoin)</h4>
                    <p className="text-sm mt-2">La conscience silencieuse qui perçoit — immuable, non-affectée</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Le Sākṣī est comme l'écran de cinéma : les images de joie et de douleur passent, mais l'écran
                    reste inaltéré. Soyez l'écran, pas le film. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Enseignement védantique</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Pièges sur le Chemin</h3>
              
              <Accordion type="multiple" className="mt-6">
                <AccordionItem value="piege1" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-foreground">Piège 1 : L'ego spirituel</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p>
                      L'Ahaṃkāra peut se réapproprier le chemin spirituel lui-même : « Je suis très avancé », « J'ai
                      compris », « Les autres ne voient pas ce que je vois ». C'est l'ego déguisé en chercheur spirituel.
                    </p>
                    <p className="mt-2 text-foreground">
                      <strong>Antidote :</strong> L'humilité et la vigilance constante. « Qui est celui qui se croit avancé ? »
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="piege2" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-foreground">Piège 2 : La dissociation</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p>
                      Confondre le détachement sain avec l'évitement émotionnel. Certains utilisent la posture du « témoin »
                      pour fuir leurs émotions non résolues, créant une froideur spirituelle.
                    </p>
                    <p className="mt-2 text-foreground">
                      <strong>Antidote :</strong> Le vrai Sākṣī inclut tout — il n'exclut rien de son champ de conscience.
                      Il embrasse les émotions sans s'y identifier.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="piege3" className="border border-border rounded-lg mb-4 px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-foreground">Piège 3 : Le témoin conceptuel</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p>
                      Créer un « témoin » mental, une nouvelle identité subtile : « Je suis celui qui observe ». C'est
                      encore l'Ahaṃkāra qui crée une nouvelle couche.
                    </p>
                    <p className="mt-2 text-foreground">
                      <strong>Antidote :</strong> Demander : « Qui est celui qui prétend observer ? » Le vrai Sākṣī
                      n'est pas un « quelqu'un » — c'est la conscience nue, sans forme.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">🧘 Méditation guidée : Le retournement</h4>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>Asseyez-vous confortablement, les yeux fermés.</li>
                    <li>Laissez les pensées aller et venir, sans les suivre.</li>
                    <li>Remarquez qu'il y a quelque chose qui perçoit ces pensées.</li>
                    <li>Demandez doucement : « Qui perçoit ? »</li>
                    <li>Ne cherchez pas une réponse — restez dans la question.</li>
                    <li>L'attention, habituée à se diriger vers les objets, se retourne vers elle-même.</li>
                    <li>Demeurez dans cet espace de conscience pure, sans contenu.</li>
                  </ol>
                  <p className="text-foreground mt-4 italic">
                    C'est ici, dans ce retournement silencieux, que l'Ahaṃkāra commence à se dissoudre — non pas par
                    effort, mais par reconnaissance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Les Voies de la Dissolution */}
          <section id="voies">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Les Voies de la Dissolution</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                La tradition védique, dans sa sagesse inclusive, reconnaît que tous les êtres n'ont pas le même
                tempérament spirituel. C'est pourquoi elle propose plusieurs voies (<strong className="text-foreground">Margas</strong>
                ou <strong className="text-foreground">Yogas</strong>) pour dissoudre l'Ahaṃkāra. Ces voies ne
                s'excluent pas — elles se complètent et s'entrelacent selon les besoins du chercheur.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Jñāna Yoga — La Voie de la Connaissance</h3>
              <p>
                <strong className="text-foreground">Jñāna</strong> signifie « connaissance » — non pas l'accumulation
                d'informations, mais la <strong className="text-foreground">connaissance directe de la Réalité</strong>.
                C'est la voie du discernement (Viveka), de l'enquête (Vicāra), de la contemplation des grandes vérités
                upanishadiques.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Le Jñāni ne nie pas l'ego — il voit à travers. Comme le mirage dans le désert, l'ego apparaît
                    mais n'existe pas réellement. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Tradition Advaita</p>
                </CardContent>
              </Card>

              <h4 className="font-semibold text-foreground mt-4">Les quatre Mahāvākyas (Grandes Paroles) :</h4>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Prajñānam Brahma</p>
                    <p className="text-sm text-primary">« La Conscience est Brahman »</p>
                    <p className="text-sm mt-2">Ce que vous appelez « conscience » n'est pas différent de l'Absolu.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Ayam Ātmā Brahma</p>
                    <p className="text-sm text-primary">« Ce Soi est Brahman »</p>
                    <p className="text-sm mt-2">Votre Soi véritable (Ātman) est identique à la Réalité ultime.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Tat Tvam Asi</p>
                    <p className="text-sm text-primary">« Tu es Cela »</p>
                    <p className="text-sm mt-2">Ce que vous cherchez (Brahman), vous l'êtes déjà.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Aham Brahmāsmi</p>
                    <p className="text-sm text-primary">« Je suis Brahman »</p>
                    <p className="text-sm mt-2">Le « je » véritable est l'Absolu — pas l'ego limité.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Bhakti Yoga — La Voie de la Dévotion</h3>
              <p>
                <strong className="text-foreground">Bhakti</strong> est l'amour dévotionnel — le cœur qui se tourne
                vers le Divin avec une intensité totale. Dans cette voie, l'Ahaṃkāra est dissous non par l'analyse,
                mais par <strong className="text-foreground">l'oubli de soi dans l'amour</strong>.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Le sel dissous dans l'océan ne peut plus se distinguer de l'eau. Ainsi le bhakta, dissous dans
                    l'amour divin, perd toute trace de son ego. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Tradition de Bhakti</p>
                </CardContent>
              </Card>

              <h4 className="font-semibold text-foreground mt-4">Les neuf formes de Bhakti (Navadha Bhakti) :</h4>
              <div className="grid md:grid-cols-3 gap-3 mt-4">
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">1. Śravana</p>
                  <p className="text-xs text-muted-foreground">Écouter les gloires divines</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">2. Kīrtana</p>
                  <p className="text-xs text-muted-foreground">Chanter les louanges</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">3. Smarana</p>
                  <p className="text-xs text-muted-foreground">Se souvenir constamment</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">4. Pāda-sevana</p>
                  <p className="text-xs text-muted-foreground">Servir les pieds du Seigneur</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">5. Arcana</p>
                  <p className="text-xs text-muted-foreground">Adoration rituelle</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">6. Vandana</p>
                  <p className="text-xs text-muted-foreground">Prosternation</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">7. Dāsya</p>
                  <p className="text-xs text-muted-foreground">Servitude dévotionnelle</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">8. Sakhya</p>
                  <p className="text-xs text-muted-foreground">Amitié divine</p>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="font-medium text-foreground text-sm">9. Ātma-nivedana</p>
                  <p className="text-xs text-muted-foreground">Abandon total de soi</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Karma Yoga — La Voie de l'Action Désintéressée</h3>
              <p>
                <strong className="text-foreground">Karma Yoga</strong> est l'art d'agir sans attachement aux fruits
                de l'action. L'ego se nourrit de l'appropriation : « C'est moi qui ai fait cela », « Je mérite cette
                récompense ». Le Karma Yogi agit pleinement, mais offre les résultats au Divin.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Karmaṇy evādhikāras te mā phaleṣu kadācana »
                  </p>
                  <p className="text-muted-foreground mt-2">
                    « Tu as droit à l'action, jamais à ses fruits. Ne sois pas mû par les fruits de l'action, mais ne
                    sois pas non plus attaché à l'inaction. »
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Bhagavad Gītā II.47</p>
                </CardContent>
              </Card>

              <h4 className="font-semibold text-foreground mt-4">Les trois attitudes du Karma Yogi :</h4>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Nishkāma Karma</p>
                    <p className="text-sm mt-1">Action sans désir personnel — agir parce que c'est juste, non pour obtenir quelque chose.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Īśvara Arpaṇa</p>
                    <p className="text-sm mt-1">Offrande à Dieu — chaque action est un acte de dévotion, offert au Divin.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Prasāda Buddhi</p>
                    <p className="text-sm mt-1">Attitude de gratitude — accepter les résultats comme une grâce, qu'ils soient favorables ou non.</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">🧘 Exercice quotidien : L'action offerte</h4>
                  <p className="text-muted-foreground mb-4">
                    Choisissez une action quotidienne ordinaire (préparer le thé, marcher, travailler).
                  </p>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Avant de commencer, dites intérieurement : « Cette action est offerte au Divin. »</li>
                    <li>Pendant l'action, restez pleinement présent, sans penser au résultat.</li>
                    <li>Une fois terminée, lâchez mentalement : « Le résultat appartient au Tout. »</li>
                  </ol>
                  <p className="text-foreground mt-4 italic">
                    Avec le temps, cette attitude s'étend à toutes les actions — et l'Ahaṃkāra, privé de son
                    appropriation, s'affaiblit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Transformations et Révélations */}
          <section id="transformations">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Transformations et Révélations</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                À mesure que le chercheur progresse, des signes subtils apparaissent — non pas comme des trophées à
                collectionner, mais comme des confirmations naturelles du chemin parcouru. L'Ahaṃkāra ne disparaît
                pas en un instant ; il se dissout <strong className="text-foreground">couche après couche</strong>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Sept Couches de l'Identification</h3>
              <p>
                Comme les pelures d'un oignon, l'Ahaṃkāra se révèle en couches successives, de la plus grossière à la
                plus subtile :
              </p>

              <div className="space-y-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">1</span>
                      <div>
                        <p className="font-semibold text-foreground">Identification au corps</p>
                        <p className="text-sm">« Je suis ce corps, ce visage, cet âge »</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">2</span>
                      <div>
                        <p className="font-semibold text-foreground">Identification aux sensations</p>
                        <p className="text-sm">« Je suis celui qui ressent la douleur, le plaisir »</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">3</span>
                      <div>
                        <p className="font-semibold text-foreground">Identification aux émotions</p>
                        <p className="text-sm">« Je suis triste, je suis heureux, je suis en colère »</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">4</span>
                      <div>
                        <p className="font-semibold text-foreground">Identification aux pensées</p>
                        <p className="text-sm">« Je suis le penseur, mes idées sont moi »</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">5</span>
                      <div>
                        <p className="font-semibold text-foreground">Identification aux rôles</p>
                        <p className="text-sm">« Je suis parent, professionnel, ami, citoyen »</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">6</span>
                      <div>
                        <p className="font-semibold text-foreground">Identification à l'histoire personnelle</p>
                        <p className="text-sm">« Je suis mon passé, mon récit, mes blessures »</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">7</span>
                      <div>
                        <p className="font-semibold text-foreground">Identification au « je suis »</p>
                        <p className="text-sm">« Je suis quelqu'un, je suis un chercheur spirituel »</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Même la dernière identification — "je suis" — doit être transcendée. Quand le "je suis" se
                    dissout dans "Cela est", l'Ahaṃkāra disparaît sans laisser de trace. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Nisargadatta Maharaj</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Signes de la Dissolution Progressive</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-green-500/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">✓ Réactivité diminuée</h4>
                    <p className="text-sm">Les événements provoquent moins de réactions automatiques. L'espace entre stimulus et réponse s'élargit.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">✓ Paix sans raison</h4>
                    <p className="text-sm">Un sentiment de contentement apparaît, non lié aux circonstances extérieures.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">✓ Présence accrue</h4>
                    <p className="text-sm">Le mental est moins dans le passé/futur, plus ancré dans l'instant présent.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">✓ Compassion naturelle</h4>
                    <p className="text-sm">L'empathie envers les autres s'approfondit — on reconnaît le même Soi en chacun.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">✓ Légèreté de l'être</h4>
                    <p className="text-sm">Le fardeau d'être « quelqu'un » s'allège. La vie devient plus simple, plus fluide.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-green-500/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">✓ Acceptation du mystère</h4>
                    <p className="text-sm">Le besoin de tout comprendre, de tout contrôler, diminue. Le mystère devient acceptable.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La Reconnaissance Finale : Les Mahāvākyas en Pratique</h3>
              <p>
                Les grandes paroles des Upanishads ne sont pas des concepts à croire, mais des <strong className="text-foreground">pointeurs
                vers l'expérience directe</strong>. Lorsque le sage dit « Tat Tvam Asi » (Tu es Cela), il ne donne
                pas une information — il invite à une reconnaissance.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">🧘 Méditation sur « Aham Brahmāsmi »</h4>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>Asseyez-vous en silence. Laissez les pensées passer.</li>
                    <li>Répétez doucement, intérieurement : « Aham Brahmāsmi » — « Je suis Brahman ».</li>
                    <li>Ne le pensez pas comme une affirmation de l'ego. Sentez que le « je » dont il est question n'est pas l'ego limité, mais la Conscience infinie qui dit « je » à travers vous.</li>
                    <li>Laissez le mantra se dissoudre dans le silence.</li>
                    <li>Demeurez dans ce qui reste — la Conscience pure, sans nom, sans forme.</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* La Vie après la Dissolution */}
          <section id="vie-apres">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. La Vie après la Dissolution : Vivre sans Ego</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Une question légitime se pose : <em className="text-foreground">« Si l'ego se dissout, qui reste pour
                vivre ? »</em> La tradition védique répond avec une nuance essentielle : ce qui disparaît, c'est
                l'<strong className="text-foreground">identification</strong> à l'ego, pas nécessairement sa fonction.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'ego fonctionnel vs. L'ego identitaire</h3>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Aspect</th>
                      <th className="p-3 text-left text-foreground">Ego Identitaire</th>
                      <th className="p-3 text-left text-foreground">Ego Fonctionnel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Nature</td>
                      <td className="p-3">« Je suis cette personne séparée »</td>
                      <td className="p-3">Un outil pour naviguer dans le monde</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Attitude</td>
                      <td className="p-3">Attachement, défense, peur</td>
                      <td className="p-3">Utilisation légère, sans attachement</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Résultat</td>
                      <td className="p-3">Souffrance, limitation</td>
                      <td className="p-3">Efficacité, liberté</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Le sage utilise l'ego comme on utilise un costume : il le porte pour interagir avec le monde,
                    mais sait qu'il n'est pas le costume. À la fin de la journée, il le retire sans regret. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Enseignement védantique</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Caractéristiques du Jīvanmukta</h3>
              <p>
                Le <strong className="text-foreground">Jīvanmukta</strong> (« libéré vivant ») est celui qui a réalisé
                sa vraie nature tout en continuant à vivre dans un corps. Les textes décrivent ses qualités :
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Samatva — Équanimité</h4>
                    <p className="text-sm mt-2">Il reste égal dans le plaisir et la douleur, le succès et l'échec.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Sthitaprajña — Sagesse stable</h4>
                    <p className="text-sm mt-2">Son discernement ne vacille pas selon les circonstances.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Niṣkāma — Sans désir</h4>
                    <p className="text-sm mt-2">Il agit sans être mû par des désirs personnels, mais par le dharma.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Nirabhimāna — Sans orgueil</h4>
                    <p className="text-sm mt-2">Il ne se considère ni supérieur ni inférieur — simplement un avec tout.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'Action Spontanée (Sahaja Karma)</h3>
              <p>
                Quand l'Ahaṃkāra n'est plus le maître, l'action devient <strong className="text-foreground">spontanée
                et appropriée</strong>. Elle coule comme l'eau d'une source — sans effort, sans calcul, parfaitement
                adaptée au moment.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Le libéré n'a pas besoin de décider ce qui est bien ou mal. L'action juste émerge
                    naturellement de la conscience non-obstruée, comme le parfum émane de la fleur. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Tradition Advaita</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Conclusion : Le Retour à l'Origine</h3>
              <p>
                Le voyage de dissolution de l'Ahaṃkāra n'est pas un voyage vers un ailleurs — c'est un <strong className="text-foreground">retour
                à ce qui a toujours été</strong>. L'ego n'a jamais vraiment existé en tant qu'entité séparée ; il
                était une contraction de la conscience, un rêve dans l'esprit de l'Être.
              </p>

              <p>
                Le chercheur qui entreprend cette quête découvre, au terme du chemin, qu'il n'y avait nulle part où
                aller et personne pour y aller. Le Soi — silencieux, lumineux, éternel — était toujours là, plus
                proche que le plus proche, plus intime que la pensée « je ».
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Avant l'illumination, je portais l'eau et coupais le bois.
                    Après l'illumination, je porte l'eau et je coupe le bois. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Dicton zen, écho de la sagesse védique</p>
                </CardContent>
              </Card>

              <p>
                La vie continue — mais elle est vécue par personne, pour personne, comme personne. C'est la
                <strong className="text-foreground"> liberté ultime </strong>: non pas une prison dorée de réalisation
                spirituelle, mais l'espace infini où tout apparaît et disparaît, sans que rien ne soit jamais touché.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <p className="text-foreground text-center italic text-lg">
                    ॐ पूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते।<br />
                    पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते॥
                  </p>
                  <p className="text-muted-foreground text-center mt-4">
                    « Cela est plénitude, ceci est plénitude. De la plénitude naît la plénitude.<br />
                    Si de la plénitude on retire la plénitude, seule la plénitude demeure. »
                  </p>
                  <p className="text-sm text-muted-foreground text-center mt-2">— Īśa Upanishad</p>
                </CardContent>
              </Card>

              <div className="text-center mt-12">
                <p className="text-xl font-serif text-primary mb-4">ॐ शान्तिः शान्तिः शान्तिः</p>
                <p className="text-muted-foreground">Om Shanti Shanti Shanti</p>
                <p className="text-sm text-muted-foreground mt-2">Paix, Paix, Paix</p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Button variant="outline" asChild>
                <Link to="/philosophie-vedique">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la Philosophie Védique
                </Link>
              </Button>
              <Button asChild>
                <Link to="/contact">
                  Nous contacter
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Ahamkara;