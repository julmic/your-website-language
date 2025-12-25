import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Sun, Moon } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "fondements", title: "Fondements" },
  { id: "cosmologie", title: "Cosmologie" },
  { id: "analyse", title: "Analyse" },
  { id: "nakshatras", title: "Nakshatras" },
  { id: "dasas", title: "Dasas" },
  { id: "applications", title: "Applications" },
  { id: "remedies", title: "Remèdes" },
  { id: "pratique", title: "Pratique" },
  { id: "conclusion", title: "Conclusion" },
];

const Jyotish = () => {
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
            <span className="text-primary">Jyotish</span> — Astrologie Védique
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            La science de la lumière céleste et ses applications spirituelles
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
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Définition du Jyotish : « science de la lumière »</h3>
              <p>
                Le terme "Jyotish" dérive du mot sanskrit <strong className="text-foreground">"Jyoti"</strong> signifiant "lumière". Cette science ancienne est considérée comme la "lumière des lumières" qui éclaire le chemin de l'âme à travers les cycles karmiques de l'existence.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Place dans les Vedas : l'un des six Vedangas</h3>
              <p>
                Le Jyotish occupe une place privilégiée parmi les six Vedangas (membres auxiliaires des Védas), aux côtés de la phonétique, de la grammaire, des cérémonies, des étymologies et des métriques. Cette classification sacrée établit le Jyotish comme un outil essentiel pour comprendre les textes védiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Objectifs : comprendre le karma, guider l'action, harmoniser la vie</h3>
              <p>
                Les objectifs fondamentaux du Jyotish sont multiples : comprendre les schémas karmiques qui façonnent notre existence, guider nos actions vers des résultats harmonieux, et harmoniser notre vie avec les rythmes cosmiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Différence entre astrologie védique, occidentale et chinoise</h3>
              <p>
                L'astrologie védique utilise le <strong className="text-foreground">zodiaque sidéral</strong> basé sur les constellations fixes, contrairement à l'astrologie occidentale qui utilise le zodiaque tropical basé sur les équinoxes. Cette différence de 24° environ donne des signes différents.
              </p>
            </div>
          </section>

          {/* II. Fondements philosophiques */}
          <section id="fondements">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Fondements philosophiques du Jyotish</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relation entre cosmos et conscience</h3>
              <p>
                Le Jyotish repose sur le principe fondamental que l'homme est un <strong className="text-foreground">microcosme</strong> reflétant le <strong className="text-foreground">macrocosme</strong>. Chaque planète, constellation et position céleste correspond à un aspect de la conscience humaine.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Comme en haut, ainsi en bas. Comme dans le cosmos, ainsi dans l'âme. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Principe hermétique védique</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Karma, samskara et destinée</h3>
              <p>
                Le karma (action) crée des samskaras (impressions subconscientes) qui façonnent notre destinée. Le thème natal (Janma Kundali) est le reflet de notre karma accumulé dans les vies antérieures.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle du Dharma dans l'interprétation astrologique</h3>
              <p>
                Le Dharma (devoir cosmique) est central dans l'interprétation jyotishi. Chaque individu a un dharma spécifique selon sa constitution planétaire.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le regard védique sur le libre arbitre</h3>
              <p>
                Le Jyotish ne détermine pas notre destin mais révèle les tendances karmiques. Le libre arbitre (<strong className="text-foreground">Purushartha</strong>) permet de transcender les influences négatives par des actions spirituelles et éthiques.
              </p>
            </div>
          </section>

          {/* III. Cosmologie et structure céleste */}
          <section id="cosmologie">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. Cosmologie et structure céleste</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les neuf Grahas (planètes)</h3>
              <p>
                Les neuf Grahas (influenceurs) comprennent les sept planètes visibles à l'œil nu plus les nœuds lunaires Rahu et Ketu.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Surya (Soleil)</h4>
                    </div>
                    <p className="text-sm">Âme, vitalité, père, autorité</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Moon className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Chandra (Lune)</h4>
                    </div>
                    <p className="text-sm">Esprit, émotions, mère, mental</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Mangala (Mars)</h4>
                    </div>
                    <p className="text-sm">Énergie, courage, frères, action</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Les neuf Grahas et leurs significations</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><strong className="text-foreground">Surya</strong> — Âme, vitalité, père</li>
                    <li><strong className="text-foreground">Chandra</strong> — Esprit, émotions, mère</li>
                    <li><strong className="text-foreground">Mangala</strong> — Énergie, courage, frères</li>
                    <li><strong className="text-foreground">Budha</strong> — Communication, intelligence</li>
                    <li><strong className="text-foreground">Guru</strong> — Sagesse, expansion, maître</li>
                    <li><strong className="text-foreground">Shukra</strong> — Amour, beauté, arts</li>
                    <li><strong className="text-foreground">Shani</strong> — Discipline, karma, maturité</li>
                    <li><strong className="text-foreground">Rahu</strong> — Désirs, illusion, obsession</li>
                    <li><strong className="text-foreground">Ketu</strong> — Libération, spiritualité, détachement</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Rashis (12 signes)</h3>
              <p>
                Les 12 Rashis (signes) sont répartis selon quatre éléments (feu, terre, air, eau) et trois modes (cardinal, fixe, mutable). Chaque signe possède des qualités spécifiques qui influencent la manière dont les planètes s'expriment.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Bhavas (12 maisons)</h3>
              <p>
                Les 12 Bhavas (maisons) représentent les domaines spécifiques de l'expérience humaine : identité, richesse, communication, famille, créativité, santé, partenariat, transformation, spiritualité, carrière, amis, libération.
              </p>
            </div>
          </section>

          {/* IV. Les clés de l'analyse */}
          <section id="analyse">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Les clés essentielles de l'analyse</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relation Graha–Rashi–Bhava</h3>
              <p>
                L'analyse jyotishi repose sur la compréhension de la relation triangulaire entre les planètes (Graha), les signes (Rashi) et les maisons (Bhava). Une planète dans un signe et une maison crée une combinaison unique d'énergie.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dignités planétaires</h3>
              <p>
                La force d'une planète dépend de sa dignité dans un signe particulier : <strong className="text-foreground">domicile</strong> (Moolatrikona), <strong className="text-foreground">exaltation</strong> (Uchcha), <strong className="text-foreground">chute</strong> (Neecha). Ces dignités influencent considérablement l'expression planétaire.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Combinaisons planétaires (Yogas)</h3>
              <p>
                Les Yogas sont des combinaisons spécifiques de planètes qui créent des résultats puissants. Les Raja Yogas confèrent le pouvoir, les Dhana Yogas favorisent l'abondance.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nature des maisons</h3>
              <p>
                Les maisons sont classées selon leur nature : <strong className="text-foreground">Trikona</strong> (1,5,9 — trines spirituelles), <strong className="text-foreground">Kendra</strong> (1,4,7,10 — angles puissants), <strong className="text-foreground">Dusthana</strong> (6,8,12 — maisons difficiles), <strong className="text-foreground">Upachaya</strong> (3,6,10,11 — maisons d'accumulation).
              </p>
            </div>
          </section>

          {/* V. Les Nakshatras */}
          <section id="nakshatras">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Les Nakshatras : cœur de l'astrologie védique</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Origine et fonction des Nakshatras</h3>
              <p>
                Les Nakshatras représentent les 27 demeures de la lune dans sa course céleste. Chacun est associé à une déité védique et possède des qualités spirituelles spécifiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les 27 Nakshatras et leurs déités</h3>
              <p>
                Chaque Nakshatra est gouverné par une déité : Ashwini par les Ashwini Kumaras (médecins divins), Bharani par Yama (dieu de la mort), Krittika par Agni (dieu du feu), etc.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Exemples de Nakshatras</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong className="text-foreground">Ashwini</strong> — Guérison, rapidité, nouveaux départs</p>
                      <p><strong className="text-foreground">Rohini</strong> — Beauté, créativité, croissance</p>
                      <p><strong className="text-foreground">Mrigashira</strong> — Recherche, curiosité, exploration</p>
                    </div>
                    <div>
                      <p><strong className="text-foreground">Pushya</strong> — Nourriture, protection, spiritualité</p>
                      <p><strong className="text-foreground">Magha</strong> — Ancestralité, pouvoir, tradition</p>
                      <p><strong className="text-foreground">Revati</strong> — Voyage, transcendance, achèvement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nakshatras lunaires : psychologie et destinée</h3>
              <p>
                Le Nakshatra lunaire (Janma Nakshatra) révèle la psychologie profonde, les tendances karmiques et les remèdes spirituels adaptés à chaque individu.
              </p>
            </div>
          </section>

          {/* VI. Les Dasas */}
          <section id="dasas">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Système de chronologie : les Dasas</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le système Vimshottari Dasa</h3>
              <p>
                Le système Vimshottari est le plus utilisé, basé sur un cycle de 120 ans divisé entre les neuf planètes. Chaque planète gouverne une période spécifique de la vie.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Durée des Mahadasas</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <p><strong className="text-foreground">Ketu</strong> — 7 ans</p>
                    <p><strong className="text-foreground">Venus</strong> — 20 ans</p>
                    <p><strong className="text-foreground">Soleil</strong> — 6 ans</p>
                    <p><strong className="text-foreground">Lune</strong> — 10 ans</p>
                    <p><strong className="text-foreground">Mars</strong> — 7 ans</p>
                    <p><strong className="text-foreground">Rahu</strong> — 18 ans</p>
                    <p><strong className="text-foreground">Jupiter</strong> — 16 ans</p>
                    <p><strong className="text-foreground">Saturne</strong> — 19 ans</p>
                    <p><strong className="text-foreground">Mercure</strong> — 17 ans</p>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mahadasa, Antardasa, Pratyantardasa</h3>
              <p>
                Chaque période majeure (Mahadasa) est subdivisée en sous-périodes (Antardasa) et sous-sous-périodes (Pratyantardasa), permettant une analyse très fine des événements de la vie.
              </p>
            </div>
          </section>

          {/* VII. Applications */}
          <section id="applications">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Applications pratiques du Jyotish</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Jyotish et Ayurveda</h3>
              <p>
                Le Jyotish et l'Ayurveda sont intimement liés. Les planètes correspondent aux doshas et aux tissus corporels (dhatus), permettant une approche holistique de la santé.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Muhurta : l'élection du moment favorable</h3>
              <p>
                Muhurta est l'art de choisir le moment propice pour entreprendre des actions importantes : mariage, début d'entreprise, voyage, achat immobilier.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Compatibilité (Kundali Milan)</h3>
              <p>
                L'analyse de compatibilité pour le mariage est une application traditionnelle majeure du Jyotish, examinant l'harmonie entre les thèmes des deux partenaires.
              </p>
            </div>
          </section>

          {/* VIII. Remèdes */}
          <section id="remedies">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Upayes — Les remèdes védiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Types de remèdes</h3>
              <p>
                Les remèdes jyotishi visent à harmoniser les influences planétaires difficiles et à renforcer les positives.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Catégories de remèdes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Mantras</strong> — Récitation de formules sacrées spécifiques à chaque planète</li>
                    <li><strong className="text-foreground">Gemmes</strong> — Port de pierres précieuses correspondant aux planètes</li>
                    <li><strong className="text-foreground">Yantras</strong> — Diagrammes géométriques sacrés</li>
                    <li><strong className="text-foreground">Dana (charité)</strong> — Dons spécifiques selon les planètes affligées</li>
                    <li><strong className="text-foreground">Jeûnes</strong> — Pratiques ascétiques les jours planétaires</li>
                    <li><strong className="text-foreground">Rituels (Pujas)</strong> — Cérémonies d'adoration</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'approche spirituelle des remèdes</h3>
              <p>
                Les remèdes ne sont pas magiques mais représentent des pratiques spirituelles qui élèvent la conscience et permettent de transcender les limitations karmiques par la grâce divine.
              </p>
            </div>
          </section>

          {/* IX. Pratique contemporaine */}
          <section id="pratique">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Pratique contemporaine</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le Jyotish comme outil de connaissance de soi</h3>
              <p>
                Dans le monde moderne, le Jyotish est de plus en plus utilisé comme outil de développement personnel et de connaissance de soi, au-delà de la simple prédiction.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Éthique et responsabilité</h3>
              <p>
                Un astrologue védique responsable guide vers la compréhension et l'autonomie plutôt que vers la dépendance. L'objectif est d'éclairer le libre arbitre, non de le remplacer.
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
                    « Les étoiles inclinent, elles n'obligent pas. Le sage transcende ses influences planétaires. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Sagesse jyotishi</p>
                </CardContent>
              </Card>

              <p>
                Le Jyotish est bien plus qu'un système de prédiction — c'est une science sacrée qui révèle la relation entre l'individu et le cosmos. En comprenant les schémas célestes de notre thème natal, nous pouvons travailler consciemment avec nos forces et nos défis.
              </p>

              <p>
                La vraie sagesse du Jyotish réside dans sa capacité à nous montrer que nous sommes des êtres cosmiques, intimement liés à l'univers qui nous a donné naissance. Cette connaissance, bien utilisée, devient un outil de libération spirituelle.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-serif text-foreground mb-2">Om Namo Narayanaya</h4>
                  <p className="text-foreground italic">
                    Que la lumière des étoiles guide votre chemin vers la réalisation.
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

export default Jyotish;
