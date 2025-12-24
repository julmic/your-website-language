import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "purusha", title: "Purusha" },
  { id: "prakriti", title: "Prakriti" },
  { id: "union", title: "L'Union" },
  { id: "consequences", title: "Conséquences" },
  { id: "ayurveda", title: "Ayurvéda" },
  { id: "psychologie", title: "Psychologie" },
  { id: "pratiques", title: "Pratiques" },
  { id: "avidya", title: "Avidya" },
  { id: "conclusion", title: "Conclusion" },
];

const PurushaPrakriti = () => {
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
            Purusha et <span className="text-primary">Prakriti</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Les Deux Piliers de la Cosmologie Védique
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
            <h2 className="text-2xl font-serif text-foreground mb-6">I. Introduction</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Pourquoi Purusha et Prakriti sont le cœur de la philosophie indienne</h3>
              <p>
                Au cœur de la pensée védique repose une intuition fondamentale : l'univers tout entier, visible et invisible, émerge de la rencontre silencieuse entre deux principes éternels — <strong className="text-foreground">Purusha</strong>, la conscience pure, et <strong className="text-foreground">Prakriti</strong>, la nature primordiale. Cette dualité n'est ni opposition ni conflit, mais complémentarité sacrée.
              </p>
              <p>
                Sans ces deux principes, aucune cosmologie védique ne peut tenir debout. Ils ne sont pas de simples concepts abstraits : ils sont les fondations vivantes sur lesquelles reposent les systèmes du <strong className="text-foreground">Samkhya</strong>, du <strong className="text-foreground">Yoga</strong>, de l'<strong className="text-foreground">Ayurveda</strong>, et même du <strong className="text-foreground">Védanta</strong>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Leur importance dans Samkhya, Yoga, Ayurveda et la cosmologie védique</h3>
              <p>
                Dans le <strong className="text-foreground">Samkhya</strong>, Purusha et Prakriti sont les deux réalités ultimes, irréductibles l'une à l'autre. Le Samkhya propose un dualisme ontologique rigoureux : d'un côté, la conscience immobile ; de l'autre, la nature dynamique.
              </p>
              <p>
                Dans le <strong className="text-foreground">Yoga</strong>, notamment celui de Patanjali, ce dualisme devient une voie pratique : c'est par la distinction progressive entre Purusha et Prakriti que le yogi accède à Kaivalya, l'isolement libérateur de la conscience.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Drashtri drishyayoh samyogo heya-hetuh"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    « L'union entre le voyant (Purusha) et le vu (Prakriti) est la cause de ce qui doit être évité. » — Yoga-Sutra II.17
                  </p>
                </CardContent>
              </Card>

              <p>
                En <strong className="text-foreground">Ayurveda</strong>, Prakriti désigne la constitution individuelle, le terrain unique de chaque être. Le Purusha y demeure le témoin intérieur, celui qui observe la santé et la maladie sans jamais y être réduit. Guérir, c'est restaurer l'équilibre dans Prakriti, tout en rappelant au patient sa vraie nature : Purusha.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La vision dualiste-sacrée</h3>
              <p>
                Ce dualisme n'est pas mécanique. Il est sacré. Purusha et Prakriti ne s'opposent pas : ils se révèlent mutuellement. Sans Purusha, Prakriti reste inerte, endormie. Sans Prakriti, Purusha reste invisible, sans manifestation.
              </p>
              <p>
                Ils sont éternels, sans commencement ni fin. Ils ne se confondent jamais, mais ne peuvent non plus exister l'un sans l'autre dans l'ordre manifesté. Leur relation est celle du <strong className="text-foreground">témoin et du spectacle</strong>, du regard et de la danse, de la lumière et du miroir.
              </p>
            </div>
          </section>

          {/* Purusha */}
          <section id="purusha">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Purusha : la conscience pure</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Nature essentielle</h3>
              <p>
                Purusha est l'essence même de ce que nous sommes, au-delà de tout attribut, de toute forme, de toute histoire. Il est <strong className="text-foreground">pure conscience</strong>, une lumière intérieure qui n'a besoin de rien pour exister. Il ne naît pas, ne meurt pas, ne grandit pas, ne diminue pas. Il est le témoin immobile, celui qui regarde sans être affecté.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Na jayate mriyate va vipashchin nayam kutashchin na vibhuva kashchit..."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    « Le Soi sage ne naît ni ne meurt ; il n'est venu de nulle part, il n'est devenu personne. Non-né, éternel, permanent, ancien, il n'est pas tué quand le corps est tué. » — Katha Upanishad I.2.18
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Caractéristiques : Sat-Chit-Ananda</h3>
              <p>Les textes védantiques décrivent Purusha à travers trois qualités fondamentales :</p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Sat (existence)</strong> : Purusha est, de manière absolue. Il ne devient pas, il ne change pas.</li>
                <li><strong className="text-foreground">Chit (conscience)</strong> : Purusha n'est pas conscient de quelque chose — il est conscience. Il est l'espace même où tout apparaît.</li>
                <li><strong className="text-foreground">Ananda (béatitude silencieuse)</strong> : Cette béatitude n'est pas une émotion. C'est la paix inaltérable, la plénitude sans objet.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Multiplicité ou unité ?</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Vision Samkhya</h4>
                    <p className="text-sm mt-2">Purushas multiples : chaque être vivant possède son propre Purusha, éternel et distinct.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Vision Védanta</h4>
                    <p className="text-sm mt-2">Purusha = Atman = Brahman : un seul Purusha universel. La pluralité est Maya.</p>
                  </CardContent>
                </Card>
              </div>

              <p className="mt-4">
                Ces deux visions offrent deux niveaux de vérité : <strong className="text-foreground">vyavaharika</strong> (relatif) où il semble y avoir plusieurs Purushas, et <strong className="text-foreground">paramarthika</strong> (absolu) où tous ne sont que des reflets de l'unique Conscience.
              </p>
            </div>
          </section>

          {/* Prakriti */}
          <section id="prakriti">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. Prakriti : la nature primordiale</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Définition</h3>
              <p>
                Prakriti est le <strong className="text-foreground">principe féminin, créateur, dynamique</strong> de l'univers. Elle est la matrice cosmique, la Mère universelle d'où émergent toutes les formes, tous les corps, tous les mondes. Elle contient en elle, à l'état latent, tous les potentiels de l'existence.
              </p>
              <p>
                Dans son état non manifesté (Avyakta), Prakriti est en équilibre parfait, silencieuse, invisible. Mais dès que Purusha pose sur elle son regard, elle s'éveille, se déploie, se différencie en une infinité de formes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Les trois Gunas</h3>
              <p>Prakriti est tissée de trois Gunas — trois qualités fondamentales qui s'entremêlent dans tout ce qui existe :</p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Sattvam rajas tama iti gunah prakriti-sambhavah"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    « Sattva, Rajas et Tamas sont les Gunas issus de Prakriti. » — Bhagavad Gita XIV.5
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Sattva</h4>
                    <p className="text-xs text-primary mb-2">Clarté, harmonie, lumière</p>
                    <p className="text-sm">Qualité de la pureté, de l'harmonie, de la légèreté. Associé à la connaissance, à la paix, à la joie.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Rajas</h4>
                    <p className="text-xs text-primary mb-2">Mouvement, désir, énergie</p>
                    <p className="text-sm">Qualité de l'action, du mouvement, du désir, de la passion. Moteur du changement.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Tamas</h4>
                    <p className="text-xs text-primary mb-2">Inertie, obscurité, densité</p>
                    <p className="text-sm">Qualité de l'inertie, de l'obscurité, de la lourdeur. Assure stabilité et repos.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Les 24 Tattvas</h3>
              <p>À partir de Prakriti, en présence de Purusha, se déploient 24 Tattvas (principes de réalité) :</p>

              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Niveau</th>
                      <th className="p-3 text-left text-foreground">Principe</th>
                      <th className="p-3 text-left text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3">1</td>
                      <td className="p-3 font-medium text-foreground">Prakriti</td>
                      <td className="p-3">Nature primordiale, non manifestée</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">2</td>
                      <td className="p-3 font-medium text-foreground">Mahat / Buddhi</td>
                      <td className="p-3">Intelligence cosmique, discernement</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">3</td>
                      <td className="p-3 font-medium text-foreground">Ahamkara</td>
                      <td className="p-3">Ego, sens du "je"</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">4-8</td>
                      <td className="p-3 font-medium text-foreground">5 Jnanendriyas</td>
                      <td className="p-3">Organes de perception</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">9-13</td>
                      <td className="p-3 font-medium text-foreground">5 Karmendriyas</td>
                      <td className="p-3">Organes d'action</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">14</td>
                      <td className="p-3 font-medium text-foreground">Manas</td>
                      <td className="p-3">Mental, coordination sensorielle</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">15-19</td>
                      <td className="p-3 font-medium text-foreground">5 Tanmatras</td>
                      <td className="p-3">Essences subtiles</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3">20-24</td>
                      <td className="p-3 font-medium text-foreground">5 Mahabhutas</td>
                      <td className="p-3">Éléments grossiers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                À ces 24 principes s'ajoute le 25e : <strong className="text-foreground">Purusha</strong>, la conscience pure, qui n'appartient pas à Prakriti mais en est le témoin.
              </p>
            </div>
          </section>

          {/* L'Union */}
          <section id="union">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. L'union de Purusha et Prakriti</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Le mystère du lien</h3>
              <p>
                Voici le paradoxe central : Purusha ne touche jamais Prakriti. Il ne la modifie pas, ne la contrôle pas. Et pourtant, sa simple <strong className="text-foreground">présence</strong> déclenche la manifestation.
              </p>
              <p>
                C'est comme si Purusha regardait Prakriti. Ce regard — silencieux, immobile, pur — suffit à éveiller toute l'activité cosmique. Les textes comparent cela au soleil et au lotus : le soleil ne fait rien, mais sa lumière fait éclore le lotus.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. La métaphore de la danse</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Prakriti</strong> est la danseuse, belle, expressive, pleine de mouvements.</li>
                <li><strong className="text-foreground">Purusha</strong> est le spectateur, immobile, silencieux, attentif.</li>
              </ul>
              <p>
                Quand le spectateur comprend enfin qu'il n'est pas le danseur, qu'il n'a jamais été dans la danse — la danse s'arrête. C'est la libération (<strong className="text-foreground">Kaivalya</strong>).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Le drame cosmique</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Sans Purusha</h4>
                    <p className="text-sm mt-2">Prakriti est inerte, potentialité pure mais endormie, non manifestée.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Sans Prakriti</h4>
                    <p className="text-sm mt-2">Purusha reste dans une solitude absolue, sans expérience, sans manifestation.</p>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-4">
                Ensemble : naissance de l'univers, du mental, du corps, du karma. Tout l'univers est donc le théâtre de cette rencontre entre conscience et nature.
              </p>
            </div>
          </section>

          {/* Conséquences */}
          <section id="consequences">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Conséquences philosophiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. L'illusion d'être le corps ou l'esprit</h3>
              <p>
                Le drame de l'existence humaine réside dans une confusion fondamentale : nous prenons les mouvements de Prakriti (le corps, les émotions, les pensées, l'ego) pour notre vraie nature, qui est Purusha.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Prakriteh kriyamanani gunaih karmani sarvashah..."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    « Toutes les actions sont accomplies par les Gunas de Prakriti ; celui dont le mental est égaré par l'ego pense : "C'est moi qui agis." » — Bhagavad Gita III.27
                  </p>
                </CardContent>
              </Card>

              <p>Cette confusion s'appelle <strong className="text-foreground">Avidya</strong> (l'ignorance), et elle est la racine de toute souffrance.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. La liberté intérieure</h3>
              <p>
                La libération (<strong className="text-foreground">Moksha ou Kaivalya</strong>) consiste à se désidentifier des Gunas, à reconnaître : « Je ne suis ni ce corps, ni ce mental, ni ces émotions. Je suis le témoin silencieux de tout cela. »
              </p>
              <p>
                Cette liberté intérieure est accessible dès cette vie. On l'appelle <strong className="text-foreground">Jivanmukti</strong> : la libération incarnée.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Le sens de l'existence</h3>
              <p>
                Selon le Samkhya, Prakriti se manifeste pour une seule raison : permettre à Purusha de se reconnaître lui-même. L'existence est une <strong className="text-foreground">pédagogie cosmique</strong>.
              </p>
            </div>
          </section>

          {/* Ayurvéda */}
          <section id="ayurveda">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Purusha et Prakriti dans l'Ayurvéda</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Purusha comme témoin de la santé</h3>
              <p>
                En Ayurveda, <strong className="text-foreground">Purusha n'est jamais malade</strong>. Seule Prakriti (le corps, le mental, les doshas) peut être en déséquilibre. Le patient n'est donc jamais réduit à sa maladie.
              </p>
              <p>
                Reconnaître Purusha dans le patient, c'est honorer sa dignité profonde, au-delà des symptômes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Prakriti comme constitution individuelle</h3>
              <p>
                En Ayurveda, Prakriti désigne aussi la <strong className="text-foreground">constitution individuelle</strong> de chaque personne, déterminée au moment de la conception par l'équilibre des trois doshas.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Vata</h4>
                    <p className="text-xs text-primary mb-2">Éther + Air</p>
                    <p className="text-sm">Rajasique, mobile, imprévisible</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Pitta</h4>
                    <p className="text-xs text-primary mb-2">Feu + Eau</p>
                    <p className="text-sm">Rajasique-sattvique, transformateur</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Kapha</h4>
                    <p className="text-xs text-primary mb-2">Eau + Terre</p>
                    <p className="text-sm">Tamasique-sattvique, stable</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Le rôle du Vaidya</h3>
              <p>Le médecin ayurvédique a un rôle double :</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Rétablir l'équilibre des Gunas dans le corps et le mental du patient.</li>
                <li>Éveiller Sattva, la clarté intérieure, pour révéler Purusha.</li>
              </ol>
              <p className="mt-4">
                L'Ayurveda est donc à la fois une <strong className="text-foreground">médecine du corps et une voie spirituelle</strong>.
              </p>
            </div>
          </section>

          {/* Psychologie */}
          <section id="psychologie">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Purusha, Prakriti et la psychologie</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Le mental (Manas) : produit de Prakriti</h3>
              <p>
                Le mental n'est pas Purusha. C'est un instrument subtil, un produit de Prakriti. Le mental fluctue, change, se trouble, se calme. Il est soumis aux Gunas. <strong className="text-foreground">Confondre le mental avec soi-même, c'est s'identifier à un outil.</strong>
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. L'ego (Ahamkara) : construction provisoire</h3>
              <p>
                Ahamkara, le sens du « je », est une structure née de Prakriti. L'ego n'est pas mauvais en soi : il est nécessaire pour fonctionner dans le monde. Mais il devient problématique quand on croit qu'il est notre vraie nature.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Les émotions : mouvements des Gunas</h3>
              <p>
                Les émotions sont des mouvements des Gunas dans le corps subtil. Elles vont et viennent comme les vagues sur l'océan. <strong className="text-foreground">Purusha, lui, ne ressent aucune émotion. Il observe les émotions sans y participer.</strong>
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Le témoin intérieur : la clé de la liberté</h3>
              <p>La clé de la santé psychologique est de cultiver le <strong className="text-foreground">témoin intérieur (Sakshi)</strong> :</p>
              <ul className="space-y-2 mt-4">
                <li>Observer ses pensées sans s'identifier à elles.</li>
                <li>Observer ses émotions sans être emporté par elles.</li>
                <li>Observer ses réactions sans les juger.</li>
              </ul>
            </div>
          </section>

          {/* Pratiques */}
          <section id="pratiques">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Pratiques spirituelles pour réaliser Purusha</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Yoga</h3>
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Yogash chitta-vritti-nirodhah"
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    « Le Yoga est l'arrêt des fluctuations du mental. » — Yoga-Sutra I.2
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Tada drashtuh svarupe'vasthanam"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    « Alors le voyant demeure dans sa vraie nature. » — Yoga-Sutra I.3
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Méditation</h3>
              <p>
                La méditation est l'art de revenir, encore et encore, au témoin silencieux. On ne force rien, on n'ajoute rien. On se contente de rester, dans une <strong className="text-foreground">présence nue</strong>, sans objet.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Viveka (discernement)</h3>
              <p>
                Viveka consiste à se poser sans cesse la question : « Ceci, est-ce moi ou est-ce Prakriti ? » Le corps change : ce n'est pas moi. Le mental fluctue : ce n'est pas moi. Alors, qui suis-je ?
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Sattva : purifier la perception</h3>
              <p>
                Cultiver Sattva — par l'alimentation, les pensées, les relations, les environnements — clarifie le mental et facilite la reconnaissance de Purusha. Un esprit sattvique est comme un miroir propre.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Bhakti : offrir l'ego</h3>
              <p>
                La voie de la dévotion offre une autre approche : au lieu de distinguer Purusha intellectuellement, on se donne entièrement à une réalité divine. En offrant l'ego, en s'abandonnant, on dissout les identifications.
              </p>
            </div>
          </section>

          {/* Avidya */}
          <section id="avidya">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Les erreurs de perception (Avidya)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>L'ignorance (Avidya) n'est pas un manque d'information, mais une méprise fondamentale sur notre nature :</p>
              
              <ol className="list-decimal list-inside mt-4 space-y-3">
                <li><strong className="text-foreground">Confondre le corps avec soi-même</strong> : « Je suis grand, je suis petit... » Le corps change, mais Purusha ne change pas.</li>
                <li><strong className="text-foreground">Confondre les émotions avec soi-même</strong> : « Je suis triste, je suis joyeux. » Les émotions traversent le mental, mais ne touchent jamais Purusha.</li>
                <li><strong className="text-foreground">Confondre le mental avec soi-même</strong> : « Je pense, donc je suis » — mais qui observe les pensées ?</li>
                <li><strong className="text-foreground">Confondre le rôle social avec l'essence</strong> : « Je suis médecin, je suis parent... » Tous ces rôles sont provisoires.</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le remède : constante discrimination (Viveka)</h3>
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Kshétram kshetra-jnam eva cha"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    « Distingue le champ (Prakriti) du connaisseur du champ (Purusha). » — Bhagavad Gita XIII.2
                  </p>
                </CardContent>
              </Card>

              {/* Tableau comparatif */}
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Aspect</th>
                      <th className="p-3 text-left text-foreground">Purusha</th>
                      <th className="p-3 text-left text-foreground">Prakriti</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Nature</td>
                      <td className="p-3">Conscience pure</td>
                      <td className="p-3">Matière/Énergie primordiale</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Caractère</td>
                      <td className="p-3">Immobile, témoin</td>
                      <td className="p-3">Dynamique, active</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Temporalité</td>
                      <td className="p-3">Éternel, intemporel</td>
                      <td className="p-3">Changeante, évolutive</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Action</td>
                      <td className="p-3">Non-agissant</td>
                      <td className="p-3">Source de toute action</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Expérience</td>
                      <td className="p-3">Observateur pur</td>
                      <td className="p-3">Objet d'expérience</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">X. Conclusion</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Purusha : notre essence non née</h3>
              <p>
                Au fond de nous, au-delà de toutes les couches de corps, de pensées, d'émotions, il y a Purusha : la conscience pure, le témoin silencieux, l'éternellement libre. Ce Purusha n'est pas à atteindre. <strong className="text-foreground">Il est déjà là, toujours présent.</strong>
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Prakriti : notre terrain d'expérience</h3>
              <p>
                Prakriti est notre mère, notre corps, notre monde. Elle n'est pas ennemie. Elle n'est pas illusion à rejeter. Elle est le <strong className="text-foreground">théâtre sacré où se joue le drame de la reconnaissance</strong>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Application quotidienne</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Au réveil</strong> : « Je suis le témoin de ce corps qui se réveille. »</li>
                <li><strong className="text-foreground">Dans l'action</strong> : « Les mains agissent, le mental planifie, mais je reste le spectateur silencieux. »</li>
                <li><strong className="text-foreground">Dans l'émotion</strong> : « Une émotion traverse le mental. Je ne suis pas cette émotion. »</li>
                <li><strong className="text-foreground">Dans la relation</strong> : Vois Purusha derrière le masque de Prakriti. Honore en l'autre ce témoin éternel.</li>
                <li><strong className="text-foreground">Au coucher</strong> : Lâche toutes les identifications. Retourne à la conscience pure.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Valeur pratique : au-delà de la souffrance</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Face à la maladie</strong> : Le corps souffre, mais tu n'es pas le corps.</li>
                <li><strong className="text-foreground">Face à l'échec</strong> : Le projet échoue, mais tu n'es pas le projet.</li>
                <li><strong className="text-foreground">Face au deuil</strong> : La forme disparaît, mais la conscience demeure.</li>
                <li><strong className="text-foreground">Face à l'angoisse</strong> : Les pensées tourbillonnent, mais tu es l'espace où elles apparaissent.</li>
              </ul>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Sukha-dukhe same kritva labhalabhau jayajayau"
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    « Égal dans le plaisir et la douleur, le gain et la perte, la victoire et la défaite. » — Bhagavad Gita II.38
                  </p>
                  <p className="text-sm text-muted-foreground">Non par insensibilité, mais par établissement dans Purusha.</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/30 my-8">
                <CardContent className="p-8 text-center">
                  <p className="text-xl font-serif text-foreground mb-4">Hari Om Tat Sat</p>
                  <p className="text-muted-foreground italic">Cela est. Et cela suffit.</p>
                  <div className="mt-6 text-sm text-muted-foreground">
                    <p>Que ce traité serve de lampe sur le chemin.</p>
                    <p>Que Purusha se reconnaisse en chacun.</p>
                    <p>Que Prakriti danse sa danse sacrée.</p>
                    <p className="mt-2 font-medium text-foreground">Et que tous les êtres réalisent leur vraie nature.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-center pt-8">
            <Button asChild size="lg">
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

export default PurushaPrakriti;
