import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "contexte", title: "Contexte" },
  { id: "structure", title: "Structure" },
  { id: "concepts", title: "Concepts" },
  { id: "upanishads-majeurs", title: "Upanishads Majeurs" },
  { id: "doctrines", title: "Doctrines" },
  { id: "mahavakyas", title: "Mahavakyas" },
  { id: "influence", title: "Influence" },
  { id: "pratique", title: "Pratique" },
  { id: "conclusion", title: "Conclusion" },
];

const Upanishads = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Les Upanishads - Textes sacrés de la sagesse védique | Arkadhya</title>
        <meta name="description" content="Découvrez les Upanishads, textes philosophiques fondamentaux de l'hindouisme. Explorez les concepts de Brahman, Atman, Maya et le chemin vers la libération spirituelle." />
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
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Les <span className="text-primary">Upanishads</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Les textes sacrés de la sagesse védique et les fondements de la philosophie indienne
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
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Définition et origine des Upanishads</h3>
              <p>
                Le mot "Upanishad" dérive de la racine sanskrite "sad" (s'asseoir) avec le préfixe "upa" (près de) et le suffixe "ni" (en arrière), signifiant littéralement <strong className="text-foreground">"s'asseoir près de"</strong> — une référence à l'élève qui s'installe près de son maître pour recevoir l'enseignement secret.
              </p>
              <p>
                Les Upanishads constituent la partie philosophique et spirituelle des Védas, les textes sacrés les plus anciens de l'Inde. Alors que les Samhitas (hymnes) et les Brahmanas (rituels) se concentrent sur les pratiques extérieures, les Upanishads explorent les vérités intérieures et les réalités ultimes de l'existence.
              </p>
              <p>
                Ces textes ne sont pas des traités philosophiques systématiques, mais des enseignements mystiques transmis de maître à disciple dans une relation sacrée. Chaque Upanishad est une invitation à la contemplation, à l'introspection et à la réalisation directe des vérités qu'elle expose.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Place dans le Veda et dans l'ensemble de la pensée indienne</h3>
              <p>
                Dans la tradition védique, les Upanishads occupent la position la plus élevée dans la hiérarchie des textes sacrés. Ils constituent les <strong className="text-foreground">Vedanta</strong>, la "fin des Védas", non seulement chronologiquement mais aussi conceptuellement.
              </p>
              <p>
                Cette appellation reflète leur rôle comme aboutissement de la connaissance védique. Si les premiers textes védiques établissent les rituels et les hymnes aux divinités, les Upanishads révèlent la signification profonde de ces pratiques et la nature ultime de la réalité qu'elles tentent d'approcher.
              </p>
              <p>
                Les Upanishads ont influencé pratiquement toutes les écoles philosophiques indiennes, tant orthodoxes (astika) qu'hétérodoxes (nastika). Même le bouddhisme et le jaïnisme, qui rejettent l'autorité des Védas, portent l'empreinte de la pensée upanishadique dans leur conception de la libération et de la nature de la conscience.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Importance historique, philosophique et spirituelle</h3>
              <p>
                L'importance des Upanishads dépasse largement le cadre de la tradition hindoue. Ils représentent l'une des contributions les plus significatives de l'humanité à la philosophie, à la spiritualité et à la compréhension de la conscience.
              </p>
              <p>
                Sur le plan historique, ces textes documentent l'évolution de la pensée religieuse indienne, passant d'un ritualisme sacrificiel à une spiritualité intériorisée centrée sur la connaissance de soi.
              </p>
              <p>
                Sur le plan philosophique, ils posent des questions fondamentales sur la nature de la réalité, de la conscience, du soi et de l'absolu — questions qui résonnent encore aujourd'hui dans la philosophie contemporaine et les sciences cognitives.
              </p>
              <p>
                Sur le plan spirituel, les Upanishads offrent un chemin de libération (moksha) fondé non pas sur la croyance aveugle mais sur l'expérience directe et la réalisation personnelle. Cette approche expérientielle de la spiritualité continue d'attirer des chercheurs du monde entier.
              </p>
            </div>
          </section>

          {/* II. Contexte historique et culturel */}
          <section id="contexte">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Contexte historique et culturel</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Période de composition</h3>
              <p>
                La composition des Upanishads s'étend sur plusieurs siècles, généralement datée entre le VIIIe et le IVe siècle avant Jésus-Christ. Les plus anciens Upanishads, appelés Mukhya (principaux), datent probablement du VIIIe au VIe siècle avant J.C.
              </p>
              <p>
                Cette période correspond à une ère de grande effervescence intellectuelle et spirituelle en Inde, souvent comparée à l'époque des philosophes présocratiques en Grèce ou des grands prophètes hébreux. C'est également l'époque où le Bouddha et Mahavira (fondateur du jaïnisme) ont vécu et enseigné.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Chronologie des Upanishads</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">VIIIe-VIe siècle av. J.C.</strong> : Brihadaranyaka, Chandogya, Taittiriya, Aitareya, Kaushitaki — Les plus anciens et les plus longs</li>
                    <li><strong className="text-foreground">VIe-IVe siècle av. J.C.</strong> : Kena, Katha, Isha, Shvetashvatara, Mundaka — Upanishads en vers, plus courts et plus systématiques</li>
                    <li><strong className="text-foreground">Période tardive</strong> : Mandukya, Prashna — Upanishads plus courts, souvent commentés par Shankara</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Milieu religieux et social de l'Inde ancienne</h3>
              <p>
                L'époque de la composition des Upanishads coïncide avec une transformation radicale de la société indienne. Le système de castes se rigidifiait, tandis que le pouvoir des prêtres brahmanes sur les rituels complexes devenait de plus en plus contesté.
              </p>
              <p>
                Ce contexte a favorisé l'émergence de mouvements religieux alternatifs, notamment le bouddhisme et le jaïnisme, qui rejetaient l'autorité des Védas et proposaient des voies de libération accessibles à tous, indépendamment de la caste.
              </p>
              <p>
                Les Upanishads peuvent être vus comme la réponse de la tradition védique à ces défis. En intériorisant le rituel et en affirmant que la connaissance spirituelle transcende les distinctions sociales, ils ont renouvelé le vedisme tout en préservant son autorité.
              </p>
              <p>
                Il est significatif que certains enseignements upanishadiques soient attribués à des kshatriyas (guerriers) plutôt qu'à des brahmanes, suggérant que la sagesse n'était pas le monopole de la caste sacerdotale.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transmission orale et formation du corpus</h3>
              <p>
                Comme l'ensemble des textes védiques, les Upanishads ont été transmis oralement pendant plusieurs siècles avant d'être mis par écrit. Cette tradition orale, appelée <strong className="text-foreground">shruti</strong> (ce qui est entendu), impliquait des méthodes de mémorisation extrêmement sophistiquées.
              </p>
              <p>
                Les élèves apprenaient les textes par cœur sous la direction de leur maître, répétant chaque syllabe avec une précision rigoureuse. Cette transmission garantissait non seulement la préservation du contenu mais aussi de l'intonation et du rythme, considérés comme essentiels au pouvoir spirituel du texte.
              </p>
              <p>
                La mise par écrit des Upanishads n'est intervenue que beaucoup plus tard, probablement au cours des premiers siècles de notre ère. Même après cette transcription, la tradition orale a continué à jouer un rôle central dans leur enseignement et leur transmission.
              </p>
              <p>
                Le corpus des Upanishads s'est constitué progressivement, avec des textes plus tardifs ajoutés à la collection au fil des siècles. Si la tradition reconnaît 108 Upanishads, ce nombre a une valeur symbolique plutôt que littérale, et des textes très variés ont été inclus sous cette appellation.
              </p>
            </div>
          </section>

          {/* III. Structure et classification */}
          <section id="structure">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. Structure et classification des Upanishads</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Upanishads principales (Mukhya)</h3>
              <p>
                Les dix Upanishads principales sont traditionnellement reconnus comme les textes les plus anciens et les plus autoritaires : <strong className="text-foreground">Isha, Kena, Katha, Prashna, Mundaka, Mandukya, Taittiriya, Aitareya, Chandogya et Brihadaranyaka</strong>.
              </p>
              <p>
                Ces textes ont été commentés par les grands philosophes du Vedanta, notamment Shankara (VIIIe siècle), Ramanuja (XIe siècle) et Madhva (XIIIe siècle), ce qui a consolidé leur statut central dans la tradition.
              </p>
              <p>
                Chaque Upanishad principal est associé à l'un des quatre Védas. Par exemple, la Brihadaranyaka et l'Isha appartiennent au Yajur Veda blanc, la Chandogya au Sama Veda, l'Aitareya au Rig Veda, et le Mundaka à l'Atharva Veda.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Upanishads mineures</h3>
              <p>
                En plus des dix Upanishads majeures, il existe plus de 200 autres Upanishads, généralement classés comme mineurs. Parmi les plus importants figurent le Shvetashvatara, le Maitri, le Kaushitaki et le Mahanarayana.
              </p>
              <p>
                Ces Upanishads mineurs couvrent une grande variété de sujets, allant de la dévotion (bhakti) aux techniques de yoga, en passant par les pratiques tantriques et les doctrines sectaires. Certains sont des compositions relativement tardives, reflétant les développements de l'hindouisme médiéval.
              </p>
              <p>
                La classification traditionnelle distingue également les Upanishads selon leur orientation : Samanya (généraux), Sannyasa (relatifs au renoncement), Yoga (relatifs aux pratiques yogiques), Shakta (dédiés à la Déesse), Vaishnava (dédiés à Vishnu) et Shaiva (dédiés à Shiva).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Caractéristiques stylistiques et littéraires</h3>
              <p>
                Les Upanishads présentent une grande diversité stylistique. Les plus anciens, comme la Brihadaranyaka et la Chandogya, sont rédigés principalement en prose, avec des passages poétiques intercalés. Les Upanishads plus tardifs, comme la Katha et la Mundaka, sont composés entièrement en vers.
              </p>
              <p>
                Le style est généralement didactique, prenant la forme de dialogues entre maîtres et disciples, de récits mythologiques, ou de discussions philosophiques. Les dialogues permettent d'exposer progressivement des vérités complexes, guidant le lecteur à travers une série de questions et de réponses.
              </p>
              <p>
                Les Upanishads font un usage extensif de l'analogie et de la métaphore pour communiquer des vérités spirituelles qui dépassent les catégories ordinaires de la pensée. Des images comme le sel dissous dans l'eau, l'araignée tissant sa toile, ou le feu contenu dans le bois, sont utilisées pour suggérer la relation entre l'Atman et Brahman.
              </p>
              <p>
                Les grands énoncés (mahavakyas) comme "Tat tvam asi" (Tu es Cela) ou "Aham Brahmasmi" (Je suis Brahman) condensent en quelques mots l'essence de l'enseignement upanishadique, offrant des points de méditation intensifs pour les chercheurs spirituels.
              </p>
            </div>
          </section>

          {/* IV. Concepts fondamentaux */}
          <section id="concepts">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Concepts fondamentaux</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Brahman : l'Absolu</h3>
              <p>
                Brahman constitue le concept central des Upanishads. Il est décrit comme la réalité ultime, infinie, éternelle et immuable qui sous-tend toute existence. Brahman est la source de l'univers, son soutien et sa destination finale.
              </p>
              <p>
                Les Upanishads décrivent Brahman comme <strong className="text-foreground">Sat</strong> (être pur), <strong className="text-foreground">Chit</strong> (conscience pure) et <strong className="text-foreground">Ananda</strong> (béatitude pure). Ces trois attributs ne sont pas des qualités distinctes mais des aspects d'une réalité unique et indivisible.
              </p>
              <p>
                Brahman est à la fois transcendant (au-delà de toute manifestation) et immanent (présent en toute chose). Il est décrit par la négation (neti neti — "ni ceci, ni cela") car il transcende toutes les catégories de la pensée et du langage.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Brahman est la réalité, le monde est apparence, l'âme individuelle n'est autre que Brahman. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Formule classique du Vedanta, résumant l'enseignement upanishadique</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Ātman : le Soi</h3>
              <p>
                L'Atman est l'âme immortelle et éternelle qui réside au cœur de chaque être. Il est distinct du corps physique, des émotions et de l'intellect. L'Atman est le témoin silencieux de toutes les expériences, immuable au milieu du changement constant.
              </p>
              <p>
                Contrairement à la conception occidentale de l'âme comme entité individuelle créée, l'Atman est décrit comme sans commencement ni fin, sans naissance ni mort. Il n'est pas affecté par les actions du corps ou les fluctuations du mental.
              </p>
              <p>
                La Katha Upanishad compare l'Atman au passager d'un char dont le corps est le char, l'intellect le conducteur, le mental les rênes et les sens les chevaux. L'Atman, distinct de tous ces éléments, est le maître silencieux du char.
              </p>
              <p>
                La découverte de l'Atman ne se fait pas par l'intellect mais par l'expérience directe dans la méditation profonde. C'est une connaissance qui transforme celui qui la réalise, car elle révèle sa nature véritable au-delà des identifications limitées.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relation Ātman – Brahman</h3>
              <p>
                L'une des révélations les plus profondes des Upanishads est l'identité fondamentale entre l'Atman individuel et le Brahman universel. Cette identité est exprimée dans les grandes déclarations (mahavakyas) comme "Tat tvam asi" (Tu es Cela) et "Aham Brahmasmi" (Je suis Brahman).
              </p>
              <p>
                Cette doctrine affirme que le Soi au cœur de chaque être n'est pas différent de la réalité ultime de l'univers. La séparation apparente entre l'individu et l'Absolu est due à l'ignorance (avidya) et à l'illusion (maya).
              </p>
              <p>
                La Chandogya Upanishad illustre cette vérité à travers l'histoire d'Uddalaka enseignant à son fils Shvetaketu. Comme le sel dissous dans l'eau est présent partout sans être visible, ainsi Brahman est présent en toute chose, y compris en nous-mêmes.
              </p>
              <p>
                La réalisation de cette identité est le but de la vie spirituelle. Elle n'est pas une union à accomplir mais une reconnaissance de ce qui a toujours été. L'Atman n'a jamais été séparé de Brahman; seule l'ignorance nous fait croire à cette séparation.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Maya : l'illusion cosmique</h3>
              <p>
                Maya désigne le voile de l'illusion qui nous empêche de percevoir la réalité telle qu'elle est véritablement. Elle est responsable de notre perception d'un monde de multiplicité et de différences alors qu'en réalité tout est Un.
              </p>
              <p>
                Maya n'est pas simplement un mensonge ou une hallucination. Le monde phénoménal est réel à son niveau propre, mais il n'est pas la réalité ultime. Comme un rêve est réel tant qu'on rêve mais s'évanouit au réveil, le monde de maya est réel dans l'expérience ordinaire mais disparaît dans la réalisation spirituelle.
              </p>
              <p>
                Maya opère à travers deux pouvoirs : le pouvoir de voiler (avarana shakti), qui cache la vraie nature de la réalité, et le pouvoir de projeter (vikshepa shakti), qui crée l'apparence du monde phénoménal.
              </p>
              <p>
                La libération consiste à voir à travers maya, à reconnaître le substrat immuable (Brahman) derrière les apparences changeantes. Ce n'est pas une destruction du monde mais un changement de perspective, comme reconnaître que ce qu'on prenait pour un serpent est en fait une corde.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Karma et Samsara</h3>
              <p>
                Le karma désigne la loi de cause à effet selon laquelle chaque action génère des conséquences futures. Le samsara est le cycle des renaissances dans lequel l'âme est prise tant qu'elle n'a pas atteint la libération.
              </p>
              <p>
                Selon cette doctrine, les actions accomplies dans une vie déterminent les circonstances de la vie suivante. Les actions vertueuses conduisent à des naissances favorables, les actions négatives à des naissances défavorables. Ce cycle se poursuit indéfiniment jusqu'à ce que la libération soit atteinte.
              </p>
              <p>
                Les Upanishads distinguent trois types de karma : sanchita (karma accumulé des vies passées), prarabdha (karma en cours d'épuisement dans la vie présente) et kriyamana (karma créé par les actions présentes). La connaissance spirituelle brûle le sanchita karma mais le prarabdha doit être vécu jusqu'à son terme.
              </p>
              <p>
                La Brihadaranyaka Upanishad décrit magnifiquement le processus de la mort et de la renaissance : "Comme une chenille, arrivant au bout d'un brin d'herbe, se contracte et passe sur un autre brin, ainsi le Soi, ayant quitté ce corps et abandonné l'ignorance, se contracte et passe à un autre corps."
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Moksha : la libération</h3>
              <p>
                Moksha représente la libération finale du cycle des renaissances (samsara) et la réalisation de l'identité entre l'Atman individuel et le Brahman universel. C'est l'état de liberté absolue, de conscience infinie et de béatitude permanente.
              </p>
              <p>
                La libération n'est pas quelque chose à acquérir de nouveau mais la reconnaissance de ce qui a toujours été. L'Atman est éternellement libre; seule l'ignorance nous fait croire à notre servitude. Moksha est donc un éveil à notre vraie nature plutôt qu'une transformation.
              </p>
              <p>
                Les Upanishads décrivent différentes voies vers moksha : la voie de la connaissance (jnana), la voie de l'action désintéressée (karma), la voie de la dévotion (bhakti) et la voie de la méditation (yoga). Ces voies ne sont pas mutuellement exclusives mais complémentaires.
              </p>
              <p>
                L'être libéré (jivanmukta) continue de vivre dans le monde, mais n'est plus affecté par lui. Comme le lotus qui pousse dans l'eau boueuse mais reste immaculé, le sage vit dans le monde sans être souillé par ses limitations. Sa simple présence irradie la paix et la sagesse.
              </p>
            </div>
          </section>

          {/* V. Les Upanishads majeurs */}
          <section id="upanishads-majeurs">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Les Upanishads majeurs en détail</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Brihadaranyaka Upanishad</h3>
              <p>
                Le plus ancien et le plus volumineux des Upanishads, la Brihadaranyaka (littéralement "le grand texte de la forêt") contient certains des enseignements les plus profonds de la philosophie indienne. Elle est associée au Yajur Veda blanc.
              </p>
              <p>
                Ce texte est célèbre pour ses dialogues philosophiques, notamment entre le sage Yajnavalkya et divers interlocuteurs. Le dialogue entre Yajnavalkya et son épouse Maitreyi sur la nature de l'immortalité est particulièrement émouvant et profond.
              </p>
              <p>
                La Brihadaranyaka contient la formule "neti neti" (ni ceci, ni cela), méthode apophatique pour approcher Brahman par la négation de tout ce qui n'est pas l'Absolu. Elle enseigne aussi le mahavakya "Aham Brahmasmi" (Je suis Brahman).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chandogya Upanishad</h3>
              <p>
                La Chandogya est le second Upanishad majeur par sa taille et son ancienneté. Associée au Sama Veda, elle doit son nom aux chantres (chandoga) qui psalmodiaient les hymnes védiques.
              </p>
              <p>
                Elle contient le célèbre enseignement de "Tat Tvam Asi" (Tu es Cela), transmis par le sage Uddalaka Aruni à son fils Shvetaketu. À travers une série de neuf exemples et analogies, le père révèle progressivement à son fils la vérité de son identité avec Brahman.
              </p>
              <p>
                La Chandogya explore également la méditation sur Om, les différents états de conscience, et la doctrine des cinq feux décrivant le voyage de l'âme après la mort.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Katha Upanishad</h3>
              <p>
                La Katha Upanishad raconte l'histoire poignante du jeune Nachiketas qui, par la faute de son père, est envoyé chez Yama, le dieu de la mort. Après avoir attendu trois jours sans recevoir l'hospitalité due, Nachiketas reçoit trois vœux en compensation.
              </p>
              <p>
                Pour son troisième vœu, Nachiketas demande à connaître le mystère de ce qui survient après la mort. Yama tente d'abord de le dissuader, lui offrant richesses, longévité et plaisirs terrestres. Mais Nachiketas reste ferme, et Yama finit par lui révéler la connaissance suprême de l'Atman.
              </p>
              <p>
                Ce texte contient des images célèbres comme l'analogie du char (où le corps est le char, l'intellect le conducteur, le mental les rênes, les sens les chevaux, et l'Atman le passager). Il enseigne que seul celui dont le mental est purifié peut percevoir la subtile vérité du Soi.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mandukya Upanishad</h3>
              <p>
                Le plus court des Upanishads majeurs avec seulement douze versets, la Mandukya est considérée par beaucoup comme le plus profond. Elle analyse la syllabe sacrée Om et les quatre états de conscience.
              </p>
              <p>
                Les trois premières lettres de Om (A, U, M) correspondent aux trois états de conscience ordinaires : l'état de veille (jagrat), l'état de rêve (svapna) et le sommeil profond (sushupti). Le silence qui suit représente le quatrième état (turiya), qui est la conscience pure, le témoin silencieux des trois autres états.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Les quatre états de conscience (Mandukya)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Jagrat (A)</strong> — État de veille, conscience tournée vers l'extérieur, correspondant à Vaishvanara</li>
                    <li><strong className="text-foreground">Svapna (U)</strong> — État de rêve, conscience tournée vers l'intérieur, correspondant à Taijasa</li>
                    <li><strong className="text-foreground">Sushupti (M)</strong> — Sommeil profond, conscience indifférenciée, correspondant à Prajna</li>
                    <li><strong className="text-foreground">Turiya (Silence)</strong> — Le quatrième état, pure conscience transcendante, qui est l'Atman véritable</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Isha Upanishad</h3>
              <p>
                L'Isha Upanishad, également très court (18 versets), ouvre le Yajur Veda blanc. Son premier verset est une déclaration puissante : "Tout ce qui existe dans cet univers est habité par le Seigneur (Isha). Jouis de ce qui t'est donné en renonçant à l'attachement."
              </p>
              <p>
                Ce texte enseigne l'art de vivre dans le monde tout en maintenant une conscience spirituelle. Il harmonise action et contemplation, engagement dans le monde et détachement intérieur.
              </p>
              <p>
                L'Isha Upanishad contient la prière célèbre : "Conduis-moi de l'irréel au réel, des ténèbres à la lumière, de la mort à l'immortalité."
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mundaka Upanishad</h3>
              <p>
                La Mundaka (de "mund", raser) tire son nom de l'idée que sa connaissance "rase" l'ignorance. Elle appartient à l'Atharva Veda et distingue clairement deux types de connaissance.
              </p>
              <p>
                La connaissance inférieure (apara vidya) comprend tous les savoirs ordinaires, y compris les Védas rituels. La connaissance supérieure (para vidya) est la connaissance de Brahman, qui seule mène à la libération.
              </p>
              <p>
                Elle contient l'image célèbre des deux oiseaux sur un même arbre : l'un mange les fruits (le jiva, l'âme individuelle engagée dans l'expérience), l'autre observe sans manger (l'Atman, le témoin silencieux). La libération survient quand l'oiseau qui mange reconnaît la gloire de l'autre.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Taittiriya Upanishad</h3>
              <p>
                La Taittiriya Upanishad est célèbre pour son enseignement sur les cinq enveloppes (pancha kosha) de l'être humain et pour l'exhortation du maître à son disciple après l'initiation.
              </p>
              <p>
                Les cinq enveloppes sont : l'enveloppe de nourriture (annamaya kosha), l'enveloppe de souffle vital (pranamaya kosha), l'enveloppe mentale (manomaya kosha), l'enveloppe de connaissance (vijnanamaya kosha) et l'enveloppe de félicité (anandamaya kosha). L'Atman transcende toutes ces enveloppes.
              </p>
              <p>
                Le texte culmine dans l'exclamation extatique : "Merveille! Merveille! Merveille! Je suis la nourriture, je suis la nourriture, je suis la nourriture! Je suis le mangeur de nourriture! Je suis le mangeur de nourriture! Je suis le mangeur de nourriture!"
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Autres Upanishads significatifs</h3>
              <p>
                Le <strong className="text-foreground">Shvetashvatara Upanishad</strong> est remarquable pour sa synthèse de différentes voies spirituelles et sa vision théiste de Brahman comme Rudra-Shiva. Il contient des enseignements détaillés sur le yoga et la méditation.
              </p>
              <p>
                Le <strong className="text-foreground">Prashna Upanishad</strong> prend la forme de six questions posées par des disciples au sage Pippalada, abordant des thèmes comme l'origine de la vie, le prana, et les états de conscience.
              </p>
              <p>
                Le <strong className="text-foreground">Kena Upanishad</strong> commence par la question "Par qui?" (kena), explorant la nature de la conscience qui anime les sens et le mental. Il contient l'histoire d'Indra et des autres dieux humiliés par Brahman sous une forme mystérieuse.
              </p>
            </div>
          </section>

          {/* VI. Les grandes doctrines */}
          <section id="doctrines">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Les grandes doctrines upanishadiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La doctrine de l'Unité (Advaita)</h3>
              <p>
                La doctrine de la non-dualité (Advaita) affirme qu'il n'existe qu'une seule réalité — Brahman — et que toute apparence de multiplicité est illusoire. L'Atman individuel et Brahman sont fondamentalement identiques; seule l'ignorance nous fait percevoir une différence.
              </p>
              <p>
                Cette doctrine a été systématisée par le grand philosophe Shankara (VIIIe siècle), mais ses racines se trouvent clairement dans les Upanishads. L'Advaita Vedanta reste l'une des écoles philosophiques les plus influentes de l'Inde.
              </p>
              <p>
                L'Advaita distingue trois niveaux de réalité : la réalité absolue (paramarthika), où seul Brahman existe; la réalité empirique (vyavaharika), où le monde apparaît comme réel dans notre expérience ordinaire; et la réalité illusoire (pratibhasika), comme les objets perçus dans un rêve.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les cinq enveloppes (Koshas)</h3>
              <p>
                La Taittiriya Upanishad décrit l'être humain comme composé de cinq enveloppes concentriques (koshas) qui entourent l'Atman central. Cette anatomie subtile offre une carte pour l'exploration intérieure.
              </p>
              <p>
                <strong className="text-foreground">Annamaya kosha</strong> (enveloppe de nourriture) est le corps physique, composé de nourriture et retournant à la nourriture. <strong className="text-foreground">Pranamaya kosha</strong> (enveloppe de souffle vital) est le corps d'énergie qui anime le corps physique. <strong className="text-foreground">Manomaya kosha</strong> (enveloppe mentale) est le corps des pensées, émotions et impressions sensorielles.
              </p>
              <p>
                <strong className="text-foreground">Vijnanamaya kosha</strong> (enveloppe de connaissance) est le corps de l'intellect discriminant et de la sagesse. <strong className="text-foreground">Anandamaya kosha</strong> (enveloppe de félicité) est la couche la plus subtile, un reflet de la béatitude inhérente à l'Atman.
              </p>
              <p>
                L'Atman transcende toutes ces enveloppes. La pratique spirituelle consiste à désidentifier progressivement la conscience de chaque enveloppe pour réaliser le Soi qui en est distinct.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La doctrine des trois corps</h3>
              <p>
                Complémentaire à la doctrine des koshas, la théorie des trois corps (shariras) offre une autre perspective sur la structure de l'être humain.
              </p>
              <p>
                Le <strong className="text-foreground">corps grossier</strong> (sthula sharira) correspond au corps physique, composé des cinq éléments. Le <strong className="text-foreground">corps subtil</strong> (sukshma sharira) comprend le mental, l'intellect, les organes des sens subtils et le souffle vital. C'est ce corps qui transmigre d'une vie à l'autre.
              </p>
              <p>
                Le <strong className="text-foreground">corps causal</strong> (karana sharira) est le siège de l'ignorance primordiale (avidya) et des impressions karmiques latentes (samskaras). C'est la "semence" qui contient en potentiel les deux autres corps.
              </p>
              <p>
                Dans le sommeil profond, les corps grossier et subtil sont au repos; seul le corps causal demeure actif. Dans le samadhi (absorption méditative), même le corps causal est transcendé, révélant l'Atman pur.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La théorie des trois états de conscience</h3>
              <p>
                La Mandukya Upanishad analyse les trois états de conscience ordinaires — veille, rêve et sommeil profond — pour révéler le quatrième état (turiya), qui est la conscience pure elle-même.
              </p>
              <p>
                Dans l'<strong className="text-foreground">état de veille</strong> (jagrat), la conscience est tournée vers le monde extérieur à travers les sens. Dans l'<strong className="text-foreground">état de rêve</strong> (svapna), la conscience se retire du monde extérieur et crée son propre monde intérieur. Dans le <strong className="text-foreground">sommeil profond</strong> (sushupti), toute dualité s'efface; il n'y a plus ni sujet ni objet.
              </p>
              <p>
                <strong className="text-foreground">Turiya</strong> n'est pas un quatrième état à côté des trois autres, mais la conscience qui est le témoin des trois états. C'est l'arrière-plan constant sur lequel les trois états apparaissent et disparaissent. La réalisation de turiya est moksha.
              </p>
            </div>
          </section>

          {/* VII. Les Mahavakyas */}
          <section id="mahavakyas">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Les Mahavakyas — Les grandes déclarations</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les Mahavakyas sont les quatre grandes déclarations des Upanishads qui condensent l'essence de leur enseignement sur l'identité entre l'Atman et Brahman. Chaque mahavakya provient d'un des quatre Védas.
              </p>
              <p>
                Ces formules ne sont pas de simples affirmations intellectuelles mais des outils de transformation spirituelle. Méditées profondément, elles ont le pouvoir de briser les chaînes de l'ignorance et de révéler notre vraie nature.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Prajnanam Brahma</h4>
                    <p className="text-xs text-primary mb-2">Aitareya Upanishad (Rig Veda)</p>
                    <p className="text-sm">"La Conscience est Brahman" — La conscience pure est la réalité ultime. Ce n'est pas une conscience de quelque chose, mais la conscience elle-même, sans objet.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Aham Brahmasmi</h4>
                    <p className="text-xs text-primary mb-2">Brihadaranyaka Upanishad (Yajur Veda)</p>
                    <p className="text-sm">"Je suis Brahman" — Déclaration de réalisation directe. Le "je" ici n'est pas l'ego mais l'Atman, le Soi véritable identique à l'Absolu.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Tat Tvam Asi</h4>
                    <p className="text-xs text-primary mb-2">Chandogya Upanishad (Sama Veda)</p>
                    <p className="text-sm">"Tu es Cela" — L'enseignement du maître au disciple. "Cela" (Tat) désigne Brahman; "Tu" (Tvam) désigne l'Atman du disciple. Leur identité est affirmée.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Ayam Atma Brahma</h4>
                    <p className="text-xs text-primary mb-2">Mandukya Upanishad (Atharva Veda)</p>
                    <p className="text-sm">"Cet Atman est Brahman" — L'Atman en chaque être est identique à Brahman. Ce n'est pas une fusion mais une reconnaissance de l'identité éternelle.</p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Ces quatre mahavakyas expriment la même vérité sous différents angles. Ensemble, ils forment une méthode complète de réalisation spirituelle, partant de la définition de Brahman (Prajnanam Brahma), passant par l'enseignement du maître (Tat Tvam Asi), la contemplation de l'Atman (Ayam Atma Brahma), jusqu'à la réalisation directe (Aham Brahmasmi).
              </p>
            </div>
          </section>

          {/* VIII. Influence des Upanishads */}
          <section id="influence">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Influence des Upanishads</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dans la philosophie indienne</h3>
              <p>
                Les Upanishads ont exercé une influence déterminante sur toutes les écoles philosophiques indiennes. Le Vedanta, qui prend les Upanishads comme source première, est devenu la tradition philosophique dominante de l'hindouisme.
              </p>
              <p>
                Les trois grandes écoles du Vedanta — l'Advaita (non-dualisme) de Shankara, le Vishishtadvaita (non-dualisme qualifié) de Ramanuja, et le Dvaita (dualisme) de Madhva — sont toutes des interprétations différentes des mêmes textes upanishadiques.
              </p>
              <p>
                Même les traditions qui ne reconnaissent pas l'autorité des Védas, comme le bouddhisme et le jaïnisme, ont été profondément influencées par les concepts upanishadiques. Les notions de karma, samsara et moksha sont devenues communes à toute la pensée indienne.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dans la littérature et la culture indiennes</h3>
              <p>
                Au-delà de la philosophie, les Upanishads ont imprégné la littérature, l'art et la culture de l'Inde. La Bhagavad Gita, texte central de l'hindouisme, est souvent considérée comme une synthèse accessible des enseignements upanishadiques.
              </p>
              <p>
                Les poètes mystiques de toutes les traditions indiennes — Kabir, Tulsidas, Mirabai, les saints du Maharashtra — ont puisé dans la sagesse upanishadique pour exprimer leur expérience spirituelle.
              </p>
              <p>
                Dans l'Inde contemporaine, les Upanishads continuent d'inspirer des penseurs, des artistes et des chercheurs spirituels. Ils font partie intégrante du patrimoine culturel et spirituel du pays.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Impact sur la pensée occidentale</h3>
              <p>
                La découverte des Upanishads par l'Occident au XIXe siècle a eu un impact profond sur la philosophie et la spiritualité occidentales. Le philosophe allemand Arthur Schopenhauer considérait les Upanishads comme "la lecture la plus profitable et la plus édifiante qui soit possible en ce monde."
              </p>
              <p>
                Les transcendantalistes américains, notamment Ralph Waldo Emerson et Henry David Thoreau, ont été profondément influencés par les Upanishads. Thoreau écrivait dans Walden : "Au matin, je baigne mon intellect dans la philosophie stupéfiante et cosmogonique de la Bhagavad Gita et des Upanishads."
              </p>
              <p>
                Au XXe siècle, les Upanishads ont continué d'inspirer des penseurs occidentaux comme Aldous Huxley, Joseph Campbell et Ken Wilber. Des physiciens comme Erwin Schrödinger et Werner Heisenberg ont trouvé des parallèles entre la physique quantique et la vision upanishadique de la réalité.
              </p>
              <p>
                Aujourd'hui, dans un monde en quête de sens et de spiritualité authentique, les Upanishads offrent une source de sagesse intemporelle. Leur message d'unité fondamentale et de réalisation du Soi continue de résonner avec les chercheurs contemporains.
              </p>
            </div>
          </section>

          {/* IX. Pratique et application */}
          <section id="pratique">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Pratique et application des enseignements</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Étude traditionnelle</h3>
              <p>
                Traditionnellement, l'étude des Upanishads se fait sous la guidance d'un maître qualifié (guru). L'enseignement suit un processus en trois étapes : shravana (écoute), manana (réflexion) et nididhyasana (méditation profonde).
              </p>
              <p>
                <strong className="text-foreground">Shravana</strong> consiste à écouter les enseignements du maître, qui explique le sens des textes et répond aux questions du disciple. <strong className="text-foreground">Manana</strong> est la réflexion personnelle sur ces enseignements, jusqu'à ce qu'ils deviennent une conviction intellectuelle ferme. <strong className="text-foreground">Nididhyasana</strong> est la méditation constante sur la vérité réalisée, jusqu'à ce qu'elle devienne une expérience vivante.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Méditation et contemplation</h3>
              <p>
                Les Upanishads eux-mêmes recommandent diverses pratiques de méditation. La méditation sur Om, développée notamment dans la Mandukya Upanishad, reste l'une des plus puissantes.
              </p>
              <p>
                L'auto-enquête "Qui suis-je?" (atma-vichara), popularisée au XXe siècle par Ramana Maharshi, est une méthode directe de réalisation du Soi basée sur les enseignements upanishadiques.
              </p>
              <p>
                La contemplation des mahavakyas est également une pratique traditionnelle. Le chercheur médite profondément sur une formule comme "Tat Tvam Asi", permettant à sa signification de pénétrer au-delà de l'intellect jusqu'au cœur de l'être.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Application dans la vie quotidienne</h3>
              <p>
                Les Upanishads ne sont pas seulement des textes pour la méditation mais aussi des guides pour la vie quotidienne. L'Isha Upanishad enseigne comment vivre dans le monde tout en maintenant une conscience spirituelle.
              </p>
              <p>
                La vision upanishadique transforme notre relation au monde. Si tout est Brahman, alors chaque être et chaque situation méritent notre respect et notre attention. L'éthique découle naturellement de cette vision cosmique.
              </p>
              <p>
                Le détachement (vairagya) enseigné par les Upanishads n'est pas un rejet du monde mais une liberté intérieure par rapport aux attachements et aux aversions. L'action accomplie avec cette attitude devient un yoga, un chemin vers la libération.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Qualifications pour l'étude des Upanishads</h4>
                  <p className="text-muted-foreground mb-4">La tradition énumère quatre qualités nécessaires pour l'aspirant à la connaissance upanishadique :</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Viveka</strong> — La discrimination entre le réel et l'irréel, l'éternel et le transitoire</li>
                    <li><strong className="text-foreground">Vairagya</strong> — Le détachement des fruits de l'action, ici et dans l'au-delà</li>
                    <li><strong className="text-foreground">Shat-sampat</strong> — Les six vertus : calme mental, maîtrise des sens, renoncement, endurance, foi et concentration</li>
                    <li><strong className="text-foreground">Mumukshutva</strong> — Le désir ardent de libération, qui l'emporte sur tous les autres désirs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* X. Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">X. Conclusion : La pertinence éternelle des Upanishads</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les Upanishads, composés il y a près de trois millénaires, demeurent d'une actualité saisissante. Dans un monde fragmenté par les divisions et assoiffé de sens, leur message d'unité fondamentale et de réalisation intérieure offre un antidote aux maux de notre époque.
              </p>
              <p>
                La question centrale des Upanishads — "Qui suis-je vraiment?" — est la question de tous les temps. Au-delà des réponses faciles que nous donnent nos rôles sociaux, nos possessions ou nos accomplissements, les Upanishads nous invitent à découvrir notre nature véritable, au-delà de toute limitation.
              </p>
              <p>
                La vision upanishadique n'est pas une philosophie parmi d'autres mais une invitation à l'expérience directe. Elle ne demande pas une croyance aveugle mais une enquête personnelle, une exploration de notre propre conscience. En ce sens, elle anticipe l'approche empirique de la science moderne tout en transcendant ses limitations matérialistes.
              </p>
              <p>
                Pour celui qui s'engage sérieusement dans l'étude et la pratique des Upanishads, ces textes offrent bien plus qu'une satisfaction intellectuelle. Ils sont des portes vers une transformation profonde, une libération de la souffrance et une réalisation de la plénitude qui est notre nature véritable.
              </p>
              <p>
                Comme le dit la prière qui conclut de nombreux Upanishads : "Om, puisse-t-Il nous protéger tous deux. Puisse-t-Il nous nourrir tous deux. Puissions-nous travailler ensemble avec grande énergie. Puisse notre étude être lumineuse et fructueuse. Puissions-nous ne jamais nous quereller. Om, Paix, Paix, Paix."
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium text-foreground italic mb-2">
                    « Asato mā sad gamaya, tamaso mā jyotir gamaya, mṛtyor mā amṛtaṃ gamaya »
                  </p>
                  <p className="text-muted-foreground">
                    "Conduis-moi de l'irréel au Réel, des ténèbres à la Lumière, de la mort à l'Immortalité."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Brihadaranyaka Upanishad 1.3.28</p>
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

export default Upanishads;
