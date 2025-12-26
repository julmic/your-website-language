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
  { id: "mythologie", title: "Mythologie" },
  { id: "rituel", title: "Rituel" },
  { id: "esoterisme", title: "Ésotérisme" },
  { id: "heritage", title: "Héritage" },
  { id: "conclusion", title: "Conclusion" },
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
                Traditionnellement, les Vedas sont au nombre de quatre : le Rig Veda, le Yajur Veda, le Sama Veda et l'Atharva Veda. Chacun de ces textes possède une fonction spécifique dans le système rituel et spirituel de l'Inde védique. Ensemble, ils forment la fondation de la tradition hindoue orthodoxe (astika) et continuent d'influencer la pensée spirituelle indienne depuis plus de trois millénaires.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Leur statut de shruti (révélation)</h3>
              <p>
                Dans la tradition védique, les Vedas jouissent d'un statut particulier en tant que "shruti", terme qui signifie littéralement "ce qui est entendu". Cette appellation indique que ces textes ne sont pas le produit de l'intellect humain mais ont été "entendus" ou révélés aux sages (rishis) dans un état de conscience transcendantale. Le caractère apaurusha (non-humain) des Vedas établit leur autorité absolue dans la tradition hindoue orthodoxe.
              </p>
              <p>
                Cette révélation n'est pas conçue comme une communication divine unilatérale mais comme une expérience directe de la réalité ultime par des êtres humains qui ont atteint un état de conscience supérieure. Les rishis, en méditant profondément, ont perçu les vérités cosmiques et les ont exprimées dans des formules sacrées (mantras) qui conservent leur puissance vibratoire originelle.
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
              <p>
                Dans le système des six écoles philosophiques orthodoxes (shad darshanas), les Vedas constituent le pramana (source d'autorité) reconnu par toutes. Même les écoles qui mettent l'accent sur la connaissance directe (jnana) plutôt que sur le rituel reconnaissent l'autorité des Vedas comme source de connaissance spirituelle suprême.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Aperçu global : Rig, Yajur, Sama, Atharva</h3>
              <p>Les quatre Vedas présentent des caractéristiques distinctes tout en formant un ensemble cohérent :</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong className="text-foreground">Rig Veda</strong> : recueil d'hymnes cosmiques dédiés aux dieux védiques</li>
                <li><strong className="text-foreground">Yajur Veda</strong> : formules rituelles pour les cérémonies sacrificielles</li>
                <li><strong className="text-foreground">Sama Veda</strong> : mélodies chantées lors des sacrifices</li>
                <li><strong className="text-foreground">Atharva Veda</strong> : incantations et formules magiques pour la vie quotidienne</li>
              </ul>
              <p className="mt-4">
                Chacun de ces textes contient à la fois des éléments liturgiques et des développements philosophiques, avec une progression naturelle du rituel vers la spéculation métaphysique.
              </p>
            </div>
          </section>

          {/* II. Contexte historique */}
          <section id="contexte" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Contexte historique et formation du corpus</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Période védique et sociétés aryennes</h3>
              <p>
                La période védique s'étend approximativement de 1500 à 500 avant Jésus-Christ, correspondant à l'âge du bronze et au début de l'âge du fer en Inde du Nord. Cette époque marque l'arrivée des peuples aryens dans la vallée de l'Indus et du Gange, apportant avec eux leur langue, leur culture et leurs pratiques religieuses.
              </p>
              <p>
                La société védique était organisée autour de la tribu (vis) dirigée par un roi (raja) assisté de prêtres et de guerriers. L'économie reposait sur l'élevage (principalement du bétail) et progressivement sur l'agriculture. La religion centrale était le sacrifice (yajna) pratiqué par des prêtres spécialisés selon des formules précises transmises oralement.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transmission orale : techniques, lignées</h3>
              <p>
                La transmission des Vedas s'est effectuée exclusivement par voie orale pendant plusieurs millénaires, une pratique qui témoigne de l'extraordinaire sophistication des méthodes mnémotechniques védiques. Cette tradition orale, appelée "shruti", impliquait des techniques de récitation extrêmement précises qui préservaient non seulement le sens mais aussi la vibration originelle des textes.
              </p>
              <p>
                Les méthodes de transmission incluaient la récitation par cœur, la répétition en chaîne (samhita-patha), la récitation avec accentuation (svara) et des techniques complexes de permutation des mots (krama-patha) qui permettaient de vérifier l'intégrité du texte. Chaque Veda était transmis par des lignées (shakhas) spécifiques, chacune préservant des variantes textuelles et des interprétations particulières.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Codification tardive</h3>
              <p>
                La fixation écrite des Vedas a été un processus tardif, probablement commencé vers le IVe siècle après Jésus-Christ, bien que les textes aient continué à évoluer et à se multiplier. Cette codification tardive reflète la primauté accordée à la transmission orale et la croyance en la supériorité de la parole vivante sur le texte écrit.
              </p>
              <p>
                La structure des Vedas comprend plusieurs couches textuelles : les Samhitas (hymnes), les Brahmanas (commentaires rituels), les Aranyakas (textes forestiers) et les Upanishads (enseignements philosophiques). Cette organisation reflète l'évolution de la pensée védique du rituel vers la spéculation métaphysique.
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
              <p>
                Les Samhitas sont organisées en mandalas (livres) et sukta (hymnes composés de plusieurs versets). Chaque mantra est conçu pour être récité selon des règles précises d'accentuation et de prononciation qui préservent sa puissance vibratoire. La structure même des hymnes suit des principes poétiques et symboliques qui reflètent l'ordre cosmique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Brāhmaṇa : commentaires rituels</h3>
              <p>
                Les Brahmanas constituent la deuxième couche des textes védiques, fournissant des commentaires détaillés sur les pratiques rituelles et les significations symboliques des cérémonies. Ces textes expliquent non seulement comment pratiquer les sacrifices mais aussi pourquoi ils doivent être effectués de manière spécifique.
              </p>
              <p>
                Les Brahmanas révèlent une complexité croissante dans la pensée védique, intégrant des éléments mythologiques, cosmologiques et philosophiques dans l'interprétation des rites. Ils montrent comment les pratiques extérieures reflètent des réalités spirituelles plus profondes et comment le sacrifice peut être compris comme un microcosme de l'ordre cosmique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Āraṇyaka : textes forestiers, transition vers la spéculation</h3>
              <p>
                Les Aranyakas, littéralement "textes forestiers", représentent une transition entre les préoccupations rituelles des Brahmanas et les spéculations métaphysiques des Upanishads. Ces textes étaient traditionnellement étudiés par les forestiers (vanaprastha) qui se retiraient dans les forêts pour mener une vie contemplative.
              </p>
              <p>
                Les Aranyakas introduisent des concepts symboliques plus abstraits et commencent à explorer les dimensions internes des pratiques rituelles. Ils préparent le terrain pour l'émergence de la pensée philosophique non-duelle en montrant comment les symboles extérieurs peuvent pointer vers des réalités spirituelles intérieures.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Upanishads : dimension philosophique</h3>
              <p>
                Les Upanishads constituent la dimension philosophique et spirituelle des Vedas, explorant les vérités métaphysiques ultimes et la nature de la conscience. Ces textes transcendent les préoccupations rituelles pour se concentrer sur la réalisation directe de l'unité entre l'Atman (soi individuel) et le Brahman (réalité absolue).
              </p>
              <p>
                Les Upanishads représentent la "fin des Védas" (Vedanta) non seulement chronologiquement mais aussi conceptuellement. Ils établissent les fondements de la philosophie indienne classique et continuent d'influencer la pensée spirituelle mondiale. Leur enseignement central est que la réalité ultime est non-duelle et que cette vérité peut être réalisée par la connaissance spirituelle directe.
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
                    Les principaux dieux du Rig Veda incluent Agni (feu), Indra (roi des dieux), Varuna (ordre cosmique), Surya (soleil) et Ushas (aurore). Chaque dieu représente une force cosmique spécifique et symbolise des aspects de la conscience humaine et de l'ordre universel.
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
                    Le Yajur Veda ("Veda du sacrifice") contient les formules rituelles et les instructions détaillées pour la célébration des sacrifices. Il existe deux versions principales : le Shukla Yajur Veda (blanc) et le Krishna Yajur Veda (noir), qui diffèrent par leur organisation et leur contenu.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Ce Veda met l'accent sur la précision des gestes et des paroles dans le rituel sacrificiel. Il révèle comment chaque élément du sacrifice - depuis la préparation des offrandes jusqu'à la prononciation des mantras - contribue à maintenir l'harmonie cosmique.
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
                    Le Sama Veda ("Veda des mélodies") est principalement constitué de versets du Rig Veda adaptés pour le chant. Ces mélodies sont considérées comme ayant un pouvoir spirituel particulier et sont utilisées lors des cérémonies sacrificielles les plus importantes.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    La musique védique du Sama Veda est conçue pour produire des effets spirituels spécifiques. Les mélodies sont chantées selon des modes précis (gramas) et des rythmes (tala) qui correspondent aux vibrations cosmiques et facilitent l'élévation spirituelle.
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
                  <h4 className="font-semibold text-foreground mb-2">Incantations, sagesse populaire, métaphysique archaïque</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    L'Atharva Veda diffère des trois autres Vedas par son contenu plus diversifié, incluant des incantations magiques, des formules médicales, des prières pour la vie quotidienne et des spéculations métaphysiques.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Ce Veda reflète la sagesse populaire et les préoccupations concrètes des gens ordinaires. Il traite de sujets aussi variés que la guérison, la protection contre les maléfices, le mariage, la prospérité et la mort, tout en contenant des enseignements métaphysiques profonds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* V. Symbolisme védique */}
          <section id="symbolisme">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Symbolisme védique : principes fondamentaux</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le sacrifice (yajña) comme modèle cosmique</h3>
              <p>
                Le sacrifice (yajna) constitue le symbole central de la pensée védique, représentant à la fois une pratique rituelle et un modèle cosmique de l'ordre et de l'harmonie. Dans la vision védique, l'univers entier est un sacrifice perpétuel où toutes les forces cosmiques participent à maintenir l'équilibre et la cohésion de l'existence.
              </p>
              <p>
                Le sacrifice védique implique quatre éléments essentiels : le sacrificant (yajamana), le prêtre (hotri), l'offrande (havis) et le feu (agni) qui sert de médiateur entre le monde humain et le monde divin. Cette structure symbolique reflète la relation fondamentale entre le microcosme humain et le macrocosme universel.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le langage et la vibration (vac)</h3>
              <p>
                Dans la pensée védique, le langage n'est pas simplement un outil de communication mais une force créatrice qui participe à la manifestation de la réalité. La parole sacrée (vac) est personnifiée comme une déesse et considérée comme l'énergie même de la conscience divine.
              </p>
              <p>
                Les mantras védiques sont conçus comme des entités vivantes dotées d'une puissance vibratoire spécifique. Leur prononciation exacte, leur accentuation et leur rythme sont cruciaux pour libérer leur pouvoir spirituel. Cette compréhension du langage comme force cosmique influence profondément la vision védique de la réalité.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le Feu (Agni) comme médiateur entre hommes et dieux</h3>
              <p>
                Agni, le dieu du feu, occupe une position centrale dans la symbolique védique en tant que médiateur entre le monde humain et le monde divin. Le feu sacré transforme les offrandes matérielles en substances subtiles capables d'atteindre les dieux et de maintenir la communication entre les deux sphères d'existence.
              </p>
              <p>
                Symboliquement, Agni représente la conscience qui brûle les impuretés et transforme la matière en lumière. Il est à la fois le véhicule de l'offrande et le témoin de l'acte sacrificiel. Cette dualité fait d'Agni un symbole parfait de la médiation entre les dimensions terrestres et célestes.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le symbolisme solaire, lunaire et céleste</h3>
              <p>
                La symbolique céleste joue un rôle majeur dans la pensée védique, avec le soleil (Surya), la lune (Chandra) et les étoiles représentant différentes dimensions de la réalité spirituelle. Le soleil symbolise la conscience pure, la lumière divine et l'énergie créatrice, tandis que la lune représente l'esprit, l'intuition et le cycle des transformations.
              </p>
              <p>
                Les mouvements célestes sont interprétés comme des modèles pour la vie spirituelle humaine. Le lever et le coucher du soleil symbolisent les cycles de l'éveil et du sommeil spirituels, tandis que les phases lunaires représentent les étapes du développement spirituel. Cette symbolique céleste imprègne toute la pensée védique et fournit un cadre pour comprendre la relation entre l'individu et l'univers.
              </p>
            </div>
          </section>

          {/* VI. Symbolisme mythologique */}
          <section id="mythologie" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Symbolisme mythologique</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les dieux principaux : Indra, Agni, Soma, Varuna, Ushas…</h3>
              <p>
                Les dieux védiques ne sont pas des personnages anthropomorphiques mais des forces cosmiques personnifiées qui représentent différents aspects de la réalité et de la conscience. Chaque dieu possède des attributs symboliques spécifiques qui révèlent des dimensions de l'expérience spirituelle humaine.
              </p>
              <p>
                Indra, roi des dieux, représente la force spirituelle qui triomphe des obstacles et des forces négatives. Agni, dieu du feu, symbolise la conscience transformante. Soma, dieu de l'immortalité, représente l'extase spirituelle et la connaissance suprême. Varuna, gardien de l'ordre cosmique, incarne la loi morale et la justice divine. Ushas, déesse de l'aurore, symbolise l'éveil spirituel et la lumière de la conscience.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Significations internes (cosmiques) et externes (rituelles)</h3>
              <p>
                Les mythes védiques fonctionnent à plusieurs niveaux de signification simultanément. La signification externe (rituelle) concerne les pratiques sacrificielles et les cérémonies, tandis que la signification interne (cosmique) révèle les vérités métaphysiques sous-jacentes.
              </p>
              <p>
                Par exemple, le mythe du combat d'Indra contre le serpent Vritra peut être interprété comme une description rituelle d'un sacrifice spécifique, mais aussi comme une métaphore cosmique de la lumière triomphant des ténèbres, ou encore comme une représentation psychologique de la conscience surmontant l'ignorance.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le mythe de la création (Nasadiya Sukta)</h3>
              <p>
                Le Nasadiya Sukta (hymne de non-connaissance) du Rig Veda représente l'un des textes les plus profonds de la pensée védique sur la création. Ce hymne audacieux commence par l'affirmation que même les dieux ne connaissent pas l'origine de l'univers, car elle précède leur propre existence.
              </p>
              <p>
                Le symbolisme du Nasadiya Sukta réside dans son exploration des limites de la connaissance et de la nature mystérieuse de l'existence. Il suggère que la création émane d'un principe transcendant qui dépasse toute compréhension conceptuelle, préfigurant ainsi les enseignements non-duels des Upanishads.
              </p>
            </div>
          </section>

          {/* VII. Symbolisme rituel */}
          <section id="rituel">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Symbolisme rituel</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Fonction du rite : maintenir l'ordre cosmique (ṛta)</h3>
              <p>
                Dans la pensée védique, le rituel n'est pas une simple cérémonie mais un acte de participation active au maintien de l'ordre cosmique (ṛta). Chaque geste rituel, chaque mot prononcé selon les règles sacrées contribue à préserver l'harmonie entre les différentes sphères de l'existence.
              </p>
              <p>
                Le sacrifice védique est conçu comme un microcosme de l'univers, où les éléments terrestres (offrandes), atmosphériques (feu) et célestes (dieux) interagissent pour maintenir l'équilibre cosmique. Cette vision rituelle transforme l'individu en participant conscient de l'ordre universel.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les trois feux, les trois mondes</h3>
              <p>
                La symbolique des trois feux (garhapatya, ahavaniya, dakshinagni) dans le sacrifice védique correspond à la structure des trois mondes (terre, atmosphère, ciel) et aux trois états de conscience (veille, rêve, sommeil profond). Cette correspondance révèle l'unité fondamentale entre le microcosme humain et le macrocosme universel.
              </p>
              <p>
                Le garhapatya (feu domestique) représente la terre et l'état de veille, le dakshinagni (feu du midi) symbolise l'atmosphère et l'état de rêve, tandis que l'ahavaniya (feu sacrificiel) incarne le ciel et l'état de sommeil profond. Cette symbolique complexe montre comment chaque élément du rituel reflète une structure cosmique plus vaste.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Objets rituels et leurs significations cachées</h3>
              <p>
                Chaque objet utilisé dans le rituel védique possède une signification symbolique profonde. Le soma (plante sacrée) représente l'extase spirituelle, le ghee (beurre clarifié) symbolise la pureté et la lumière, les boissons rituelles incarnent les fluides vitaux cosmiques.
              </p>
              <p>
                La disposition spatiale des éléments rituels reflète la structure de l'univers. Le feu central représente l'axe du monde, les offrandes symbolisent les forces cosmiques, et les directions cardinales correspondent aux différentes sphères de l'existence. Cette symbolique transforme l'espace rituel en mandala cosmique vivant.
              </p>
            </div>
          </section>

          {/* VIII. Interprétations ésotériques */}
          <section id="esoterisme" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Interprétations ésotériques et mystiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lecture psychologique des dieux</h3>
              <p>
                Les dieux védiques peuvent être interprétés comme des représentations symboliques des forces psychologiques et spirituelles présentes dans l'être humain. Indra symbolise la force de volonté, Agni représente la conscience transformante, Varuna incarne la loi morale intérieure.
              </p>
              <p>
                Cette lecture psychologique transforme les mythes védiques en cartes du développement spirituel individuel. Les exploits des dieux deviennent des modèles pour la conquête des obstacles intérieurs et l'éveil des potentialités spirituelles latentes.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le Veda comme métaphysique déguisée</h3>
              <p>
                Derrière l'apparente simplicité des descriptions rituelles et mythologiques, les Vedas contiennent une métaphysique sophistiquée qui explore les questions fondamentales sur la nature de la réalité, de la conscience et de l'existence. Les récits apparemment naïfs dissimulent des vérités spirituelles profondes.
              </p>
              <p>
                Cette dimension métaphysique se révèle progressivement à travers l'étude approfondie des textes et la pratique spirituelle. Les symboles rituels deviennent des portes vers des réalités transcendantales, et les mythes se transforment en révélations de l'unité fondamentale de l'être.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Préfiguration de la non-dualité</h3>
              <p>
                Bien que les Vedas soient principalement axés sur le dualisme entre les dieux et les humains, les sacrifices et les bénéfices, ils contiennent déjà les germes de la pensée non-duelle qui fleurira pleinement dans les Upanishads. Les descriptions de l'unité cosmique et de l'interdépendance de toutes choses préfigurent l'enseignement de l'identité entre l'Atman et le Brahman.
              </p>
              <p>
                Le symbolisme du sacrifice, où l'offrant, l'offrande et le receveur finissent par se fondre dans l'acte même du sacrifice, anticipe la dissolution des dualités dans l'expérience spirituelle ultime. Cette préfiguration montre la continuité profonde entre les deux grandes phases de la pensée védique.
              </p>
            </div>
          </section>

          {/* IX. Héritage et postérité */}
          <section id="heritage">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Héritage et postérité</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Influence sur l'hindouisme, le yoga, le Vedānta</h3>
              <p>
                Les Vedas continuent d'influencer profondément l'hindouisme contemporain, fournissant le fondement théologique et rituel pour la plupart des pratiques religieuses. Les concepts védiques de sacrifice, de mantra et de dévotion personnelle restent centraux dans la vie spirituelle hindoue.
              </p>
              <p>
                Le yoga, particulièrement dans ses formes classiques et tantriques, s'inspire largement de la symbolique védique. Les techniques de respiration (pranayama), de concentration (dharana) et de méditation (dhyana) trouvent leurs racines dans les pratiques contemplatives décrites dans les textes védiques.
              </p>
              <p>
                Le Vedanta, l'école philosophique qui se base sur les Upanishads, représente l'aboutissement logique de la pensée védique. Même les interprétations non-duelles du Vedanta reconnaissent l'autorité des Vedas comme source de connaissance spirituelle suprême.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Interprétations modernes (Aurobindo, Radhakrishnan, etc.)</h3>
              <p>
                Les penseurs modernes comme Sri Aurobindo et Sarvepalli Radhakrishnan ont offert de nouvelles interprétations des Vedas qui les rendent accessibles aux réalités contemporaines. Aurobindo a vu dans les Vedas une révélation de l'évolution spirituelle de l'humanité vers une conscience divine supérieure.
              </p>
              <p>
                Radhakrishnan a défendu l'idée que les Vedas contenaient une sagesse universelle qui transcende les particularités culturelles et historiques. Ces interprétations modernes montrent la vitalité continue des textes védiques et leur pertinence pour les questions spirituelles contemporaines.
              </p>
            </div>
          </section>

          {/* X. Conclusion */}
          <section id="conclusion" className="bg-primary/5 border border-primary/20 -mx-4 px-8 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6 text-center">X. Conclusion</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3 text-center">Unité interne du corpus</h3>
              <p>
                Les Vedas forment un ensemble cohérent malgré leur diversité apparente. Des hymnes rituels aux spéculations philosophiques, un fil conducteur traverse l'ensemble du corpus : la quête de l'harmonie entre l'individu et le cosmos, la recherche de l'ordre (ṛta) qui maintient l'équilibre universel.
              </p>
              <p>
                Cette unité interne se manifeste dans la continuité des thèmes fondamentaux : le sacrifice comme modèle cosmique, le langage comme force créatrice, le feu comme médiateur entre les mondes. Ces éléments symboliques tissent un réseau de significations qui unifie les différentes parties des Vedas.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3 text-center">Actualité du symbolisme védique</h3>
              <p>
                Le symbolisme védique reste profondément pertinent pour le monde contemporain. Ses enseignements sur l'interconnexion de toutes choses, sur la responsabilité humaine envers l'ordre cosmique, et sur le pouvoir transformateur de la conscience résonnent avec les préoccupations spirituelles et écologiques actuelles.
              </p>
              
              <Card className="bg-card border-primary/20 my-8">
                <CardContent className="p-6 text-center">
                  <Quote className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    "Ekam sat vipra bahudha vadanti"
                  </p>
                  <p className="text-muted-foreground italic mb-2">
                    "La vérité est une, les sages l'expriment de multiples façons"
                  </p>
                  <p className="text-sm text-muted-foreground">— Rig Veda 1.164.46</p>
                </CardContent>
              </Card>
              
              <div className="text-center mt-8">
                <h4 className="text-xl font-semibold text-primary mb-2">Shanti, Shanti, Shanti</h4>
                <p className="text-muted-foreground italic">
                  Paix, Paix, Paix - Que la paix règne en nous, autour de nous et partout dans l'univers.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Vedas;
