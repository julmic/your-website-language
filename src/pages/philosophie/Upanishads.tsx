import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Place dans le Veda et dans l'ensemble de la pensée indienne</h3>
              <p>
                Dans la tradition védique, les Upanishads occupent la position la plus élevée dans la hiérarchie des textes sacrés. Ils constituent les <strong className="text-foreground">Vedanta</strong>, la "fin des Védas", non seulement chronologiquement mais aussi conceptuellement.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Importance historique, philosophique et spirituelle</h3>
              <p>
                L'importance des Upanishads dépasse largement le cadre de la tradition hindoue. Ils représentent l'une des contributions les plus significatives de l'humanité à la philosophie, à la spiritualité et à la compréhension de la conscience.
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

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Chronologie des Upanishads</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">VIIIe-VIe siècle av. J.C.</strong> : Brihadaranyaka, Chandogya, Taittiriya, Aitareya, Kaushitaki</li>
                    <li><strong className="text-foreground">VIe-IVe siècle av. J.C.</strong> : Kena, Katha, Isha, Shvetashvatara, Mundaka</li>
                    <li><strong className="text-foreground">Période tardive</strong> : Mandukya, Prashna</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Milieu religieux et social de l'Inde ancienne</h3>
              <p>
                L'époque de la composition des Upanishads coïncide avec une transformation radicale de la société indienne. Ce contexte a favorisé l'émergence de mouvements religieux alternatifs, notamment le bouddhisme et le jaïnisme.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transmission orale et formation du corpus</h3>
              <p>
                Comme l'ensemble des textes védiques, les Upanishads ont été transmis oralement pendant plusieurs siècles avant d'être mis par écrit. Cette tradition orale, appelée <strong className="text-foreground">shruti</strong> (ce qui est entendu), impliquait des méthodes de mémorisation extrêmement sophistiquées.
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

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Upanishads mineures</h3>
              <p>
                En plus des dix Upanishads majeures, il existe plus de 200 autres Upanishads, généralement classés comme mineurs. Parmi les plus importants figurent le Shvetashvatara, le Maitri, le Kaushika et le Mahanarayana.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Caractéristiques stylistiques et littéraires</h3>
              <p>
                Les Upanishads présentent une grande diversité stylistique. Le style est généralement didactique, prenant la forme de dialogues entre maîtres et disciples, de récits mythologiques, ou de discussions philosophiques.
              </p>
            </div>
          </section>

          {/* IV. Concepts fondamentaux */}
          <section id="concepts">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Concepts fondamentaux</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Brahman : l'Absolu</h3>
              <p>
                Brahman constitue le concept central des Upanishads. Il est décrit comme la réalité ultime, infinie, éternelle et immuable qui sous-tend toute existence. Les Upanishads décrivent Brahman comme <strong className="text-foreground">Sat</strong> (être), <strong className="text-foreground">Chit</strong> (conscience) et <strong className="text-foreground">Ananda</strong> (béatitude).
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Brahman est la réalité, le monde est apparence, l'âme individuelle n'est autre que Brahman. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Enseignement upanishadique</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Ātman : le Soi</h3>
              <p>
                L'Atman est l'âme immortelle et éternelle qui réside au cœur de chaque être. Il est distinct du corps physique, des émotions et de l'intellect. L'Atman est témoin de toutes les expériences — naissance, vie, mort — sans être affecté par elles.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relation Ātman – Brahman</h3>
              <p>
                L'une des révélations les plus profondes des Upanishads est l'identité fondamentale entre l'Atman individuel et le Brahman universel. Cette identité est exprimée dans les grandes déclarations (mahavakyas).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Maya : l'illusion cosmique</h3>
              <p>
                Maya désigne le voile de l'illusion qui nous empêche de percevoir la réalité telle qu'elle est véritablement. Elle est responsable de notre perception d'un monde de multiplicité et de différences alors qu'en réalité tout est Un.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Karma et Samsara</h3>
              <p>
                Le karma désigne la loi de cause à effet selon laquelle chaque action génère des conséquences futures. Le samsara est le cycle des renaissances dans lequel l'âme est prise tant qu'elle n'a pas atteint la libération.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Moksha : la libération</h3>
              <p>
                Moksha représente la libération finale du cycle des renaissances (samsara) et la réalisation de l'identité entre l'Atman individuel et le Brahman universel. C'est l'état de liberté absolue, de conscience infinie et de béatitude permanente.
              </p>
            </div>
          </section>

          {/* V. Les Upanishads majeurs */}
          <section id="upanishads-majeurs">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Les Upanishads majeurs en détail</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Brihadaranyaka Upanishad</h3>
              <p>
                Le plus ancien et le plus volumineux des Upanishads, contenant des dialogues célèbres comme celui entre Yajnavalkya et Maitreyi sur la nature de l'immortalité.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chandogya Upanishad</h3>
              <p>
                Contient l'enseignement célèbre de "Tat Tvam Asi" (Toi et Cela êtes un) transmis par Uddalaka à son fils Shvetaketu.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Katha Upanishad</h3>
              <p>
                Raconte le dialogue entre le jeune Nachiketas et Yama, le dieu de la mort, sur la nature de l'âme et l'immortalité.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mandukya Upanishad</h3>
              <p>
                Le plus court mais peut-être le plus profond des Upanishads, analysant les quatre états de conscience à travers la syllabe sacrée OM.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Les quatre états de conscience (Mandukya)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Jagrat (A)</strong> — État de veille, conscience tournée vers l'extérieur</li>
                    <li><strong className="text-foreground">Svapna (U)</strong> — État de rêve, conscience tournée vers l'intérieur</li>
                    <li><strong className="text-foreground">Sushupti (M)</strong> — Sommeil profond, conscience indifférenciée</li>
                    <li><strong className="text-foreground">Turiya (Silence)</strong> — Le quatrième état, pure conscience transcendante</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Isha Upanishad</h3>
              <p>
                Commence par la déclaration que tout l'univers est habité par le Seigneur et enseigne comment vivre dans le monde tout en maintenant une conscience spirituelle.
              </p>
            </div>
          </section>

          {/* VI. Les grandes doctrines */}
          <section id="doctrines">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Les grandes doctrines upanishadiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La doctrine de l'Unité (Advaita)</h3>
              <p>
                La doctrine de la non-dualité (Advaita) affirme qu'il n'existe qu'une seule réalité — Brahman — et que toute apparence de multiplicité est illusoire. L'Atman individuel et Brahman sont fondamentalement identiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les cinq enveloppes (Koshas)</h3>
              <p>
                Les Upanishads décrivent l'être humain comme composé de cinq enveloppes concentriques : Annamaya (corps physique), Pranamaya (corps vital), Manomaya (corps mental), Vijnanamaya (corps de sagesse), et Anandamaya (corps de béatitude).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La doctrine des trois corps</h3>
              <p>
                Complémentaire à la doctrine des koshas, cette théorie distingue le corps grossier (sthula sharira), le corps subtil (sukshma sharira) et le corps causal (karana sharira).
              </p>
            </div>
          </section>

          {/* VII. Les Mahavakyas */}
          <section id="mahavakyas">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Les Mahavakyas — Les grandes déclarations</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les Mahavakyas sont les quatre grandes déclarations des Upanishads qui condensent l'essence de leur enseignement sur l'identité entre l'Atman et Brahman.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Prajnanam Brahma</h4>
                    <p className="text-xs text-primary mb-2">Aitareya Upanishad</p>
                    <p className="text-sm">"La Conscience est Brahman" — La conscience pure est la réalité ultime.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Aham Brahmasmi</h4>
                    <p className="text-xs text-primary mb-2">Brihadaranyaka Upanishad</p>
                    <p className="text-sm">"Je suis Brahman" — Déclaration de réalisation directe de l'identité.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Tat Tvam Asi</h4>
                    <p className="text-xs text-primary mb-2">Chandogya Upanishad</p>
                    <p className="text-sm">"Tu es Cela" — L'enseignement du maître au disciple sur son identité.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-lg">Ayam Atma Brahma</h4>
                    <p className="text-xs text-primary mb-2">Mandukya Upanishad</p>
                    <p className="text-sm">"Cet Atman est Brahman" — L'Atman en chaque être est identique à Brahman.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* VIII. Influence et héritage */}
          <section id="influence">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Influence et héritage</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Impact sur les darshanas</h3>
              <p>
                Les Upanishads ont profondément influencé les six écoles philosophiques (darshanas) de l'Inde, particulièrement le Vedanta dans ses trois formes : Advaita (non-dualisme), Vishishtadvaita (non-dualisme qualifié) et Dvaita (dualisme).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Influence sur le bouddhisme et le jaïnisme</h3>
              <p>
                Bien que le bouddhisme et le jaïnisme rejettent l'autorité des Védas, ils partagent avec les Upanishads de nombreux concepts fondamentaux : le cycle des renaissances, la libération comme but ultime, et l'importance de la connaissance directe.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Réception en Occident</h3>
              <p>
                Les Upanishads ont exercé une influence profonde sur la pensée occidentale, particulièrement à partir du XIXe siècle. Schopenhauer les considérait comme "la consolation de ma vie et sera celle de ma mort".
              </p>
            </div>
          </section>

          {/* IX. Pratique et application */}
          <section id="pratique">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Pratique et application contemporaine</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Méditation sur les Mahavakyas</h3>
              <p>
                La pratique traditionnelle consiste à méditer profondément sur les grandes déclarations, en les répétant mentalement et en contemplant leur signification jusqu'à ce qu'elles deviennent une réalisation directe.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">🧘 Exercice : Méditation sur "Tat Tvam Asi"</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Asseyez-vous confortablement et fermez les yeux</li>
                    <li>• Répétez mentalement "Tat Tvam Asi" (Tu es Cela)</li>
                    <li>• Contemplez : Que signifie "Cela" (Tat) — l'Absolu infini?</li>
                    <li>• Contemplez : Que signifie "Tu" (Tvam) — votre essence profonde?</li>
                    <li>• Contemplez : Comment "Tu es Cela" — comment cette identité se manifeste-t-elle?</li>
                    <li>• Restez dans le silence qui suit cette contemplation</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'enquête du Soi (Atma Vichara)</h3>
              <p>
                Suivant la méthode de Ramana Maharshi, l'enquête "Qui suis-je?" permet de remonter à la source de la pensée "je" et de découvrir l'Atman qui est au-delà de toute identification.
              </p>
            </div>
          </section>

          {/* X. Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">X. Conclusion</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Conduis-moi de l'irréel au Réel, de l'obscurité à la Lumière, de la mort à l'Immortalité. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Brihadaranyaka Upanishad I.3.28</p>
                </CardContent>
              </Card>

              <p>
                Les Upanishads représentent l'aboutissement de plusieurs siècles de recherche spirituelle dans l'Inde ancienne. Leur message central — l'identité entre l'âme individuelle et la réalité absolue — continue de résonner à travers les âges comme une invitation à découvrir notre vraie nature.
              </p>

              <p>
                Cette sagesse millénaire nous rappelle que la quête spirituelle n'est pas une recherche de quelque chose d'extérieur, mais une reconnaissance de ce que nous sommes déjà — conscience infinie, être éternel, béatitude absolue.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-serif text-foreground mb-2">Om Shanti Shanti Shanti</h4>
                  <p className="text-foreground italic">
                    Que la paix règne dans les trois mondes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Upanishads;
