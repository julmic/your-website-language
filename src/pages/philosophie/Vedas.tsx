import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Flame, Sun, Moon, Quote } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "contexte", title: "Contexte historique" },
  { id: "structure", title: "Structure" },
  { id: "quatre-vedas", title: "Les 4 Vedas" },
  { id: "symbolisme", title: "Symbolisme" },
  { id: "transmission", title: "Transmission" },
  { id: "pertinence", title: "Pertinence" },
];

const Vedas = () => {
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
            Les <span className="text-primary">Vedas</span> : structure et symbolisme
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Exploration approfondie des textes sacrés les plus anciens de l'Inde et de leur symbolisme profond
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

          {/* I. Introduction générale */}
          <section id="introduction">
            <h2 className="text-2xl font-serif text-foreground mb-6">I. Introduction générale</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Définition des Vedas</h3>
              <p>
                Le mot "Veda" dérive de la racine sanskrite "vid" signifiant "savoir" ou "connaissance". Les Vedas constituent le corpus des textes sacrés les plus anciens de l'Inde, composés en sanskrit védique entre environ 1500 et 500 avant Jésus-Christ. Ils représentent non seulement une collection de textes religieux mais un système complet de connaissance englobant la cosmologie, la métaphysique, la psychologie, l'éthique et les pratiques spirituelles.
              </p>
              <p>
                Traditionnellement, les Vedas sont au nombre de quatre : le Rig Veda, le Yajur Veda, le Sama Veda et l'Atharva Veda. Chacun de ces textes possède une fonction spécifique dans le système rituel et spirituel de l'Inde védique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Leur statut de shruti (révélation)</h3>
              <p>
                Dans la tradition védique, les Vedas jouissent d'un statut particulier en tant que "shruti", terme qui signifie littéralement "ce qui est entendu". Cette appellation indique que ces textes ne sont pas le produit de l'intellect humain mais ont été "entendus" ou révélés aux sages (rishis) dans un état de conscience transcendantale.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-foreground italic">
                      Les rishis, en méditant profondément, ont perçu les vérités cosmiques et les ont exprimées dans des formules sacrées (mantras) qui conservent leur puissance vibratoire originelle.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Importance dans la tradition indienne</h3>
              <p>
                Les Vedas occupent une position centrale dans la tradition indienne, servant de fondement à toutes les écoles philosophiques orthodoxes (darshanas). Ils sont considérés comme la source de toute connaissance authentique et spirituelle. Leur influence s'étend bien au-delà du domaine religieux pour imprégner la littérature, la philosophie, l'art et la culture indienne dans leur ensemble.
              </p>
            </div>
          </section>

          {/* II. Contexte historique */}
          <section id="contexte" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Contexte historique et formation du corpus</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Période védique et sociétés aryennes</h3>
              <p>
                La période védique s'étend approximativement de 1500 à 500 avant Jésus-Christ, correspondant à l'âge du bronze et au début de l'âge du fer en Inde du Nord. La société védique était organisée autour de la tribu (vis) dirigée par un roi (raja) assisté de prêtres et de guerriers. L'économie reposait sur l'élevage et progressivement sur l'agriculture. La religion centrale était le sacrifice (yajna) pratiqué par des prêtres spécialisés selon des formules précises transmises oralement.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transmission orale : techniques, lignées</h3>
              <p>
                La transmission des Vedas s'est effectuée exclusivement par voie orale pendant plusieurs millénaires, une pratique qui témoigne de l'extraordinaire sophistication des méthodes mnémotechniques védiques. Les méthodes de transmission incluaient la récitation par cœur, la répétition en chaîne (samhita-patha), la récitation avec accentuation (svara) et des techniques complexes de permutation des mots (krama-patha) qui permettaient de vérifier l'intégrité du texte.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Codification tardive</h3>
              <p>
                La fixation écrite des Vedas a été un processus tardif, probablement commencé vers le IVe siècle après Jésus-Christ. La structure des Vedas comprend plusieurs couches textuelles : les Samhitas (hymnes), les Brahmanas (commentaires rituels), les Aranyakas (textes forestiers) et les Upanishads (enseignements philosophiques).
              </p>
            </div>
          </section>

          {/* III. Structure générale des Vedas */}
          <section id="structure">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. Structure générale des Vedas</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Samhitā : hymnes et formules</h3>
              <p>
                La couche la plus ancienne des Vedas est constituée des Samhitas, recueils d'hymnes et de formules sacrées. Ces textes représentent le cœur même de la révélation védique, contenant les mantras qui sont considérés comme des entités vivantes dotées de pouvoir spirituel intrinsèque.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Brāhmaṇa : commentaires rituels</h3>
              <p>
                Les Brahmanas constituent la deuxième couche des textes védiques, fournissant des commentaires détaillés sur les pratiques rituelles et les significations symboliques des cérémonies. Ces textes révèlent une complexité croissante dans la pensée védique, intégrant des éléments mythologiques, cosmologiques et philosophiques.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Āraṇyaka : textes forestiers</h3>
              <p>
                Les Aranyakas représentent une transition entre les préoccupations rituelles des Brahmanas et les spéculations métaphysiques des Upanishads. Ces textes étaient traditionnellement étudiés par les forestiers (vanaprastha) qui se retiraient dans les forêts pour mener une vie contemplative.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Upanishads : dimension philosophique</h3>
              <p>
                Les Upanishads constituent la dimension philosophique et spirituelle des Vedas, explorant les vérités métaphysiques ultimes et la nature de la conscience. Ces textes représentent la "fin des Védas" (Vedanta) et établissent les fondements de la philosophie indienne classique.
              </p>
            </div>
          </section>

          {/* IV. Étude détaillée des quatre Vedas */}
          <section id="quatre-vedas" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Étude détaillée des quatre Vedas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <BookOpen className="mr-2 w-5 h-5" /> Rig Veda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">Hymnes cosmiques, dieux, forces naturelles</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Le Rig Veda est le plus ancien et le plus important des quatre Vedas, composé de 1028 hymnes (sukta) répartis en dix mandalas. Ces hymnes sont dédiés aux dieux védiques et célèbrent leurs exploits cosmiques et leurs pouvoirs.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Les principaux dieux du Rig Veda incluent Agni (feu), Indra (roi des dieux), Varuna (ordre cosmique), Surya (soleil) et Ushas (aurore).
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <Flame className="mr-2 w-5 h-5" /> Yajur Veda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">Liturgie, actes sacrificiels</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Le Yajur Veda ("Veda du sacrifice") contient les formules rituelles et les instructions détaillées pour la célébration des sacrifices. Il existe deux versions principales : le Shukla Yajur Veda (blanc) et le Krishna Yajur Veda (noir).
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Ce Veda met l'accent sur la précision des gestes et des paroles dans le rituel sacrificiel.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <Sun className="mr-2 w-5 h-5" /> Sama Veda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">Chants sacrés, musique rituelle</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Le Sama Veda ("Veda des mélodies") est principalement constitué de versets du Rig Veda adaptés pour le chant. Ces mélodies sont considérées comme ayant un pouvoir spirituel particulier.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    La musique védique du Sama Veda est conçue pour produire des effets spirituels spécifiques et faciliter l'élévation spirituelle.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center">
                    <Moon className="mr-2 w-5 h-5" /> Atharva Veda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-2">Incantations, sagesse populaire</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    L'Atharva Veda diffère des trois autres Vedas par son contenu qui inclut des incantations magiques, des formules de guérison, et des hymnes pour la vie quotidienne.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Ce Veda est considéré comme la source de l'Ayurveda et contient des prières pour la santé, la prospérité et la protection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* V. Symbolisme */}
          <section id="symbolisme">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Le symbolisme védique</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les dieux comme symboles</h3>
              <p>
                Les dieux védiques ne sont pas simplement des êtres mythologiques mais représentent des forces cosmiques et des principes spirituels. Agni, le feu, symbolise la transformation spirituelle et le lien entre le monde humain et divin. Indra représente la force vitale et la conscience qui vainc l'obscurité de l'ignorance. Varuna incarne l'ordre cosmique (rita) et la loi morale universelle.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-foreground italic mb-2">
                        "Ekam sat vipra bahudha vadanti" - "La vérité est une, les sages l'expriment de multiples façons"
                      </p>
                      <p className="text-muted-foreground text-sm">— Rig Veda 1.164.46</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le sacrifice comme microcosme</h3>
              <p>
                Le sacrifice védique (yajna) est conçu comme une reproduction rituelle de l'acte créateur originel. Par le sacrifice, l'ordre cosmique est maintenu et renouvelé. Le rituel établit une correspondance entre les niveaux cosmique, humain et spirituel, permettant à l'officiant de participer consciemment au maintien de l'harmonie universelle.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le pouvoir du mantra</h3>
              <p>
                Les mantras védiques sont considérés comme des formules sacrées dotées d'un pouvoir intrinsèque. La vibration sonore correctement prononcée peut produire des effets spirituels et cosmiques. Cette conception du pouvoir du son est fondamentale dans la tradition védique et se retrouve dans toutes les pratiques spirituelles ultérieures.
              </p>
            </div>
          </section>

          {/* VI. Transmission */}
          <section id="transmission" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. La transmission védique</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La tradition orale</h3>
              <p>
                La transmission orale des Vedas est considérée comme l'une des réalisations les plus remarquables de la culture humaine. Les techniques de mémorisation et de récitation ont permis de préserver ces textes avec une fidélité extraordinaire pendant plusieurs millénaires avant leur fixation écrite.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les shakhas (branches)</h3>
              <p>
                Chaque Veda a été transmis par différentes écoles ou branches (shakhas), chacune préservant des variantes textuelles et des interprétations spécifiques. Ces lignées de transmission ont maintenu la diversité et la richesse de la tradition védique tout en assurant sa continuité.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les gardiens de la tradition</h3>
              <p>
                Les brahmanes (prêtres) ont été les principaux gardiens de la tradition védique, transmettant les textes de génération en génération au sein de familles sacerdotales. Cette transmission familiale a assuré non seulement la préservation des textes mais aussi celle des méthodes de récitation et des pratiques rituelles associées.
              </p>
            </div>
          </section>

          {/* VII. Pertinence contemporaine */}
          <section id="pertinence">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Pertinence contemporaine</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les Vedas continuent d'exercer une influence profonde sur la vie spirituelle et culturelle de l'Inde et, de plus en plus, sur la spiritualité mondiale. Leur message d'unité fondamentale de toute existence, de respect pour les forces cosmiques et de quête de la connaissance transcendante reste pertinent pour le monde contemporain.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Écologie spirituelle</h4>
                    <p className="text-sm text-muted-foreground">
                      La vision védique de la nature comme manifestation divine inspire les approches écologiques contemporaines.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Science et spiritualité</h4>
                    <p className="text-sm text-muted-foreground">
                      Les intuitions védiques sur la nature de la conscience et de la réalité résonnent avec certaines découvertes de la physique moderne.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Pratiques contemplatives</h4>
                    <p className="text-sm text-muted-foreground">
                      Les techniques de méditation et de mantra issues des Vedas sont pratiquées dans le monde entier.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Ayurveda et bien-être</h4>
                    <p className="text-sm text-muted-foreground">
                      La médecine ayurvédique, enracinée dans les Vedas, offre une approche holistique de la santé.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-foreground italic mb-2">
                        "Que tous les êtres soient heureux. Que tous les êtres soient en paix. Que tous les êtres soient bénis."
                      </p>
                      <p className="text-muted-foreground text-sm">— Prière védique traditionnelle</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

export default Vedas;
