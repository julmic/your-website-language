import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Sun, Moon } from "lucide-react";
import { Helmet } from "react-helmet-async";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "fondements", title: "Fondements" },
  { id: "cosmologie", title: "Cosmologie" },
  { id: "analyse", title: "Analyse" },
  { id: "nakshatras", title: "Nakshatras" },
  { id: "theme-natal", title: "Thème natal" },
  { id: "dasas", title: "Dasas" },
  { id: "transits", title: "Transits" },
  { id: "branches", title: "Branches" },
  { id: "remedies", title: "Remèdes" },
  { id: "ethique", title: "Éthique" },
  { id: "annexes", title: "Annexes" },
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
      <Helmet>
        <title>Jyotish - Astrologie Védique | Arkadhya</title>
        <meta name="description" content="Découvrez le Jyotish, science de la lumière céleste. Explorez les fondements philosophiques, les Grahas, Rashis, Nakshatras et les cycles karmiques de l'astrologie védique." />
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
                Le terme "Jyotish" dérive du mot sanskrit <strong className="text-foreground">"Jyoti"</strong> signifiant "lumière". Cette science ancienne est considérée comme la "lumière des lumières" qui éclaire le chemin de l'âme à travers les cycles karmiques de l'existence. Le Jyotish n'est pas simplement une méthode de prédiction mais un système complet de compréhension de la relation entre l'individu et le cosmos.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Place dans les Vedas : l'un des six Vedangas</h3>
              <p>
                Le Jyotish occupe une place privilégiée parmi les six Vedangas (membres auxiliaires des Védas), aux côtés de la phonétique, de la grammaire, des cérémonies, des étymologies et des métriques. Cette classification sacrée établit le Jyotish comme un outil essentiel pour comprendre les textes védiques et vivre en harmonie avec les lois cosmiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Objectifs : comprendre le karma, guider l'action, harmoniser la vie</h3>
              <p>
                Les objectifs fondamentaux du Jyotish sont multiples : comprendre les schémas karmiques qui façonnent notre existence, guider nos actions vers des résultats harmonieux, et harmoniser notre vie avec les rythmes cosmiques. Le Jyotish agit comme un miroir céleste révélant les forces et les faiblesses de notre constitution spirituelle.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Différence entre astrologie védique, occidentale et chinoise</h3>
              <p>
                L'astrologie védique utilise le <strong className="text-foreground">zodiaque sidéral</strong> basé sur les constellations fixes, contrairement à l'astrologie occidentale qui utilise le zodiaque tropical basé sur les équinoxes. Cette différence de 24° environ donne des signes différents. L'astrologie chinoise, quant à elle, se base sur un cycle lunaire de 12 ans avec des animaux comme symboles principaux.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Sources scripturaires</h3>
              <p>
                Les textes fondamentaux du Jyotish incluent le Brihat Parashara Hora Shastra (traité classique), les Jaimini Sutras (approche unique), le Prasna Marga (astrologie des questions), le Bhrigu Samhita (texte ancien), et le Saravali (traité complet). Ces textes forment le corpus doctrinal de cette science millénaire.
              </p>
            </div>
          </section>

          {/* II. Fondements philosophiques */}
          <section id="fondements">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Fondements philosophiques du Jyotish</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relation entre cosmos et conscience</h3>
              <p>
                Le Jyotish repose sur le principe fondamental que l'homme est un <strong className="text-foreground">microcosme</strong> reflétant le <strong className="text-foreground">macrocosme</strong>. Chaque planète, constellation et position céleste correspond à un aspect de la conscience humaine. Cette correspondance cosmique-conscience permet de comprendre les schémas psychologiques et spirituels de l'individu.
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
                Le karma (action) crée des samskaras (impressions subconscientes) qui façonnent notre destinée. Le thème natal (Janma Kundali) est le reflet de notre karma accumulé dans les vies antérieures. Le Jyotish révèle ces schémas karmiques pour nous aider à les transcender par des actions conscientes et spirituelles.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle du Dharma dans l'interprétation astrologique</h3>
              <p>
                Le Dharma (devoir cosmique) est central dans l'interprétation jyotishi. Chaque individu a un dharma spécifique selon sa constitution planétaire. Le Jyotish aide à identifier ce dharma personnel et à l'accomplir avec intégrité, ce qui conduit à l'équilibre karmique et spirituel.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Temps cyclique (Kala) et Prarabdha Karma</h3>
              <p>
                Le temps (Kala) dans le Jyotish est cyclique plutôt que linéaire. Le Prarabdha Karma est la portion de notre karma qui se manifeste dans cette vie. Les cycles planétaires (Dasas) activent différents aspects de notre karma selon des rythmes cosmiques précis.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le regard védique sur le libre arbitre</h3>
              <p>
                Le Jyotish ne détermine pas notre destin mais révèle les tendances karmiques. Le libre arbitre (<strong className="text-foreground">Purushartha</strong>) permet de transcender les influences négatives par des actions spirituelles et éthiques. La connaissance astrologique donne le pouvoir de choisir consciemment notre réponse aux influences cosmiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Jyotish comme miroir du Purusha observant Prakriti</h3>
              <p>
                Le Jyotish fonctionne comme un miroir cosmique où le Purusha (conscience pure) observe Prakriti (nature manifestée). Le thème natal représente Prakriti tandis que la conscience transcendante du consultant représente Purusha. Cette perspective permet de transcender les limitations du thème par la réalisation spirituelle.
              </p>
            </div>
          </section>

          {/* III. Cosmologie et structure céleste */}
          <section id="cosmologie">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. Cosmologie et structure céleste</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les neuf Grahas (planètes)</h3>
              <p>
                Les neuf Grahas (influenceurs) comprennent les sept planètes visibles à l'œil nu plus les nœuds lunaires Rahu et Ketu. Chacun représente une force cosmique spécifique : Surya (âme, vitalité), Chandra (esprit, émotions), Mangala (énergie, courage), Budha (communication, intelligence), Guru (sagesse, expansion), Shukra (amour, beauté), Shani (discipline, maturité), Rahu (désir, illusion), Ketu (libération, spiritualité).
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

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La symbolique profonde de chaque Graha</h3>
              <p>
                Chaque Graha possède une symbolique profonde liée aux aspects de la conscience humaine. Surya représente le Soi divin, Chandra l'esprit émotionnel, Mangala la force vitale, Budha l'intellect discriminant, Guru la sagesse spirituelle, Shukra l'amour pur, Shani la maturité karmique, Rahu les désirs non résolus, et Ketu la libération spirituelle.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Les neuf Grahas et leurs significations</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li><strong className="text-foreground">Surya</strong> — Âme, vitalité, père, autorité intérieure</li>
                    <li><strong className="text-foreground">Chandra</strong> — Esprit, émotions, mère, réactivité</li>
                    <li><strong className="text-foreground">Mangala</strong> — Énergie, courage, frères, action</li>
                    <li><strong className="text-foreground">Budha</strong> — Communication, intelligence, commerce</li>
                    <li><strong className="text-foreground">Guru</strong> — Sagesse, expansion, maître spirituel</li>
                    <li><strong className="text-foreground">Shukra</strong> — Amour, beauté, arts, plaisirs</li>
                    <li><strong className="text-foreground">Shani</strong> — Discipline, karma, maturité, restrictions</li>
                    <li><strong className="text-foreground">Rahu</strong> — Désirs, illusion, obsession, monde matériel</li>
                    <li><strong className="text-foreground">Ketu</strong> — Libération, spiritualité, détachement, moksha</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Rashis (12 signes) : nature, éléments, modes</h3>
              <p>
                Les 12 Rashis (signes) sont répartis selon quatre éléments (feu, terre, air, eau) et trois modes (cardinal, fixe, mutable). Chaque signe possède des qualités spécifiques qui influencent la manière dont les planètes s'expriment dans le thème natal. Les signes de feu (Bélier, Lion, Sagittaire) expriment l'énergie créatrice, les signes de terre (Taureau, Vierge, Capricorne) la stabilité matérielle, les signes d'air (Gémeaux, Balance, Verseau) la communication intellectuelle, et les signes d'eau (Cancer, Scorpion, Poissons) l'émotion intuitive.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Bhavas (12 maisons) : domaines de vie</h3>
              <p>
                Les 12 Bhavas (maisons) représentent les domaines spécifiques de l'expérience humaine : 1ère (identité), 2e (richesse), 3e (communication), 4e (famille), 5e (créativité), 6e (santé), 7e (partenariat), 8e (transformation), 9e (spiritualité), 10e (carrière), 11e (amis), 12e (libération). Chaque Bhava est régi par un signe et une planète spécifique.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Nakshatras (27 constellations)</h3>
              <p>
                Les 27 Nakshatras (demeures lunaires) divisent le zodiaque en segments de 13°20'. Chaque Nakshatra possède une déité, un symbole et des qualités psychologiques spécifiques. Les Nakshatras révèlent la psychologie profonde, les tendances karmiques et les remèdes spirituels adaptés à chaque individu.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le Zodiaque sidéral : Ayanamsa et précision astronomique</h3>
              <p>
                Le zodiaque sidéral du Jyotish est basé sur les constellations fixes, contrairement au zodiaque tropical occidental. L'Ayanamsa (différence entre les deux systèmes) est cruciale pour la précision astrologique. Le système Lahiri est le plus utilisé aujourd'hui, corrigeant les positions planétaires selon les observations astronomiques précises.
              </p>
            </div>
          </section>

          {/* IV. Les clés de l'analyse */}
          <section id="analyse">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Les clés essentielles de l'analyse astrologique</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relation Graha–Rashi–Bhava</h3>
              <p>
                L'analyse jyotishi repose sur la compréhension de la relation triangulaire entre les planètes (Graha), les signes (Rashi) et les maisons (Bhava). Une planète dans un signe et une maison crée une combinaison unique d'énergie qui influence les domaines de vie associés à cette maison.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dignités planétaires : exaltation, chute, Moolatrikona, domicile</h3>
              <p>
                La force d'une planète dépend de sa dignité dans un signe particulier. Le domicile (Moolatrikona) est la position la plus forte, suivi du signe de dignité (Swakshetra). L'exaltation (Uchcha) renforce la planète, tandis que la chute (Neecha) la fragilise. Ces dignités influencent considérablement l'expression planétaire.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Aspects planétaires (Drishti) : Parashara, Jaimini</h3>
              <p>
                Les aspects planétaires (Drishti) sont des influences que les planètes exercent sur d'autres maisons. Le système Parashara utilise des aspects fixes (Mars 4/8, Jupiter 5/9, Saturne 3/10), tandis que le système Jaimini utilise des aspects basés sur les signes et les Nakshatras pour une analyse plus subtile.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Combinaisons planétaires (Yogas)</h3>
              <p>
                Les Yogas sont des combinaisons spécifiques de planètes qui créent des résultats puissants. Les Raja Yogas (yogas royaux) confèrent le pouvoir et la réussite, les Dhana Yogas (yogas de richesse) favorisent l'abondance, et les Artha Yogas (yogas de réalisation) facilitent l'accomplissement des objectifs.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Karakas : significateurs universels et Jaimini</h3>
              <p>
                Les Karakas sont des planètes qui représentent des significateurs universels : Atmakaraka (âme), Amatyakaraka (conseiller), Bhratrukaraka (fratrie), Matrukaraka (mère), Putrakaraka (enfants), Gnayakaraka (connaissance), Dharakaraka (épouse). Le système Jaimini utilise un classement différent basé sur les degrés planétaires.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Force planétaire : Shadbala</h3>
              <p>
                Le Shadbala (force sextuple) évalue la force d'une planète selon six critères : position naturelle, position temporelle, direction, inter-relation, aspect et équilibre saisonnier. Cette analyse précise détermine l'efficacité d'une planète dans le thème natal.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nature des maisons</h3>
              <p>
                Les maisons sont classées selon leur nature : <strong className="text-foreground">Trikona</strong> (1,5,9 — trines spirituelles), <strong className="text-foreground">Kendra</strong> (1,4,7,10 — angles puissants), <strong className="text-foreground">Dusthana</strong> (6,8,12 — maisons difficiles), <strong className="text-foreground">Upachaya</strong> (3,6,10,11 — maisons d'accumulation). Cette classification détermine la qualité des résultats associés à chaque domaine de vie.
              </p>
            </div>
          </section>

          {/* V. Les Nakshatras */}
          <section id="nakshatras">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Les Nakshatras : cœur de l'astrologie védique</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Origine et fonction des Nakshatras</h3>
              <p>
                Les Nakshatras représentent les 27 demeures de la lune dans sa course céleste. Chacun est associé à une déité védique et possède des qualités spirituelles spécifiques. Les Nakshatras révèlent la psychologie profonde, les tendances karmiques et les remèdes spirituels adaptés à chaque individu.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les 27 Nakshatras et leurs déités</h3>
              <p>
                Chaque Nakshatra est gouverné par une déité spécifique : Ashwini par les Ashwini Kumaras (médecins divins), Bharani par Yama (dieu de la mort), Krittika par Agni (dieu du feu), Rohini par Brahma (créateur), etc. Ces déités influencent les qualités spirituelles et psychologiques associées à chaque Nakshatra.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Exemples de Nakshatras</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p><strong className="text-foreground">Ashwini</strong> — Guérison, rapidité, nouveaux départs</p>
                      <p><strong className="text-foreground">Rohini</strong> — Beauté, créativité, croissance</p>
                      <p><strong className="text-foreground">Mrigashira</strong> — Recherche, curiosité, exploration</p>
                      <p><strong className="text-foreground">Ardra</strong> — Transformation, tempête, renouveau</p>
                    </div>
                    <div className="space-y-1">
                      <p><strong className="text-foreground">Pushya</strong> — Nourriture, protection, spiritualité</p>
                      <p><strong className="text-foreground">Magha</strong> — Ancestralité, pouvoir, tradition</p>
                      <p><strong className="text-foreground">Hasta</strong> — Habileté, maîtrise, guérison</p>
                      <p><strong className="text-foreground">Revati</strong> — Voyage, transcendance, achèvement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Pada (quarts) et leur influence</h3>
              <p>
                Chaque Nakshatra est divisé en quatre Padas (quarts) de 3°20' chacun. Chaque Pada est associé à un signe différent, créant des nuances subtiles dans l'expression du Nakshatra. Les Padas sont cruciaux pour l'analyse des Dasas et des compatibilités dans le mariage.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nakshatras lunaires : psychologie et destinée</h3>
              <p>
                Le Nakshatra lunaire (Janma Nakshatra) est particulièrement important car il révèle la psychologie émotionnelle profonde et les tendances karmiques. La lune dans un Nakshatra spécifique influence le caractère, les réactions émotionnelles et les relations interpersonnelles.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Usage des Nakshatras : mariage, carrière, mantras, remèdes</h3>
              <p>
                Les Nakshatras sont utilisés pour déterminer la compatibilité matrimoniale (Ashta Koota), choisir les moments propices (Muhurta), sélectionner les mantras appropriés et prescrire des remèdes spirituels. Chaque Nakshatra possède un mantra bija et une déité spécifique pour l'adoration.
              </p>
            </div>
          </section>

          {/* VI. Lecture du thème natal */}
          <section id="theme-natal">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Lecture du thème natal (Janma Kundali)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Étapes de l'interprétation</h3>
              <p>
                L'interprétation du thème natal commence par l'analyse de l'Ascendant (Lagna) et de son maître, suivie de l'examen de la Lune (Chandra) et du Soleil (Surya). Ensuite, chaque maison est analysée selon les planètes qu'elle contient, les planètes qui la gouvernent et les aspects qu'elle reçoit.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analyse de l'Ascendant et du maître d'Ascendant</h3>
              <p>
                L'Ascendant (Lagna) représente le corps physique, l'apparence et l'approche personnelle de la vie. Le maître d'Ascendant (Lagnesh) indique comment l'individu interagit avec le monde. La force de l'Ascendant et de son maître détermine la vitalité et la capacité d'adaptation.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lecture de la Lune (Janma Rashi, Janma Nakshatra)</h3>
              <p>
                La Lune représente l'esprit émotionnel, les habitudes et la réactivité instinctive. Le signe lunaire (Janma Rashi) et le Nakshatra lunaire (Janma Nakshatra) révèlent la psychologie profonde, les besoins émotionnels et les tendances karmiques fondamentales.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analyse du Soleil (âme, dharma, vitalité)</h3>
              <p>
                Le Soleil (Surya) représente l'âme divine, le dharma personnel et la vitalité spirituelle. Sa position indique le but de vie, l'autorité intérieure et la manière dont l'individu exprime sa lumière intérieure dans le monde.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Synthèse Raja Yoga / Dhana Yoga / Artha Yoga</h3>
              <p>
                Les Yogas puissants dans le thème indiquent les domaines de vie où l'individu peut atteindre l'excellence. Les Raja Yogas favorisent le leadership et le succès, les Dhana Yogas l'abondance matérielle, et les Artha Yogas la réalisation des objectifs personnels.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Points karmiques : Rahu et Ketu</h3>
              <p>
                Rahu et Ketu représentent les points karmiques nodaux. Rahu indique les désirs non résolus et les illusions à transcender, tandis que Ketu représente la libération spirituelle et les talents innés. Leur position révèle les leçons karmiques importantes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Étude spécifique de chaque maison (I à XII)</h3>
              <p>
                Chaque maison est analysée pour comprendre les domaines spécifiques de la vie : santé (6e), relations (7e), transformation (8e), spiritualité (9e), carrière (10e), gains (11e), libération (12e). Les influences planétaires déterminent la qualité des expériences dans chaque domaine.
              </p>
            </div>
          </section>

          {/* VII. Les Dasas */}
          <section id="dasas">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Le système des Dasas : cycles karmiques du destin</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle des cycles temporels dans le karma</h3>
              <p>
                Les Dasas (cycles planétaires) activent les différents aspects du karma selon des rythmes cosmiques précis. Chaque période planétaire met en lumière des domaines spécifiques de la vie, permettant l'accomplissement ou la résolution de schémas karmiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le Vimshottari Dasa : structure et signification</h3>
              <p>
                Le système Vimshottari Dasa est le plus utilisé en Jyotish, avec une durée totale de 120 ans répartie entre les neuf planètes selon des périodes spécifiques.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Durée des Mahadasas</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <p><strong className="text-foreground">Ketu</strong> — 7 ans</p>
                    <p><strong className="text-foreground">Vénus</strong> — 20 ans</p>
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

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analyse des Mahadasas (grandes périodes)</h3>
              <p>
                Chaque Mahadasa (grande période) est gouvernée par une planète spécifique qui influence tous les domaines de la vie selon sa nature et sa dignité dans le thème. La qualité de la période dépend de la force de la planète maîtresse et des maisons qu'elle influence.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analyse des Antardasas (sous-périodes)</h3>
              <p>
                Les Antardasas sont des sous-périodes qui se déroulent pendant chaque Mahadasa, créant des nuances dans l'expérience globale. L'interaction entre la planète Mahadasa et la planète Antardasa détermine les événements spécifiques et la qualité de l'expérience.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Prédictions à partir des Dasas</h3>
              <p>
                Les prédictions Dasas combinent l'analyse des planètes actives, des maisons activées et des Yogas activés. Les périodes favorables sont indiquées par des influences positives, tandis que les défis sont signalés par des aspects difficiles ou des planètes affaiblies.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Autres systèmes : Kalachakra, Yogini, Jaimini Chara Dasa</h3>
              <p>
                D'autres systèmes Dasa existent pour des analyses spécifiques : Kalachakra Dasa pour les cycles temporels, Yogini Dasa pour les influences féminines, Jaimini Chara Dasa pour les changements de signes. Chaque système offre une perspective unique sur les cycles karmiques.
              </p>
            </div>
          </section>

          {/* VIII. Les transits */}
          <section id="transits">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Les transits (Gochara) et leurs influences</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Principes généraux des transits</h3>
              <p>
                Les transits planétaires activent les maisons et les planètes du thème natal selon des rythmes célestes. Les influences transitaires sont temporaires mais puissantes, déclenchant des événements ou des changements dans les domaines de vie associés aux maisons activées.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transit de Saturne : Sade Sati</h3>
              <p>
                Le transit de Saturne (Shani) autour de la Lune dure environ 7.5 ans et est appelé Sade Sati. Cette période de transformation profonde teste la maturité karmique et force l'individu à assumer ses responsabilités avec discipline et intégrité.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transit de Jupiter : expansions karmiques</h3>
              <p>
                Le transit de Jupiter (Guru) apporte des expansions, des opportunités et des bénédictions spirituelles. Ces périodes favorisent l'apprentissage, la croissance personnelle et les réalisations dans les domaines associés aux maisons activées.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transit des éclipses (Rahu / Ketu)</h3>
              <p>
                Les éclipses solaires et lunaires, associées à Rahu et Ketu, marquent des points de bascule karmiques majeurs. Ces transits puissants déclenchent des transformations profondes et des changements irréversibles dans les domaines de vie concernés.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Comprendre les périodes critiques et propices</h3>
              <p>
                Les périodes critiques sont indiquées par des transits difficiles (Saturne, Mars, Rahu/Ketu) vers des planètes ou maisons vulnérables. Les périodes propices sont marquées par des transits favorables (Jupiter, Vénus) vers des points forts du thème.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Combinaison Dasas + Transits : prédiction intégrée</h3>
              <p>
                La prédiction précise combine l'analyse des Dasas (cycles karmiques) avec les transits (influences actuelles). Cette approche intégrée permet de comprendre non seulement quand les événements se produiront mais aussi leur nature et leur qualité.
              </p>
            </div>
          </section>

          {/* IX. Les branches du Jyotish */}
          <section id="branches">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Les branches du Jyotish</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hora Shastra : astrologie natale</h3>
              <p>
                L'Hora Shastra est l'astrologie natale qui analyse le thème de naissance pour comprendre le karma individuel et les tendances de vie. C'est la branche fondamentale du Jyotish qui fournit la base pour toutes les autres applications.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Muhurta : choix des moments propices</h3>
              <p>
                Le Muhurta est l'art de choisir les moments astronomiquement favorables pour entreprendre des actions importantes : mariages, départs, investissements, cérémonies. Cette branche utilise les positions planétaires pour maximiser les chances de succès.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Prashna : astrologie de l'instant (questions)</h3>
              <p>
                Le Prashna Shastra répond aux questions spécifiques en dressant un thème pour le moment exact où la question est posée. Cette branche est particulièrement utile quand la date de naissance est inconnue ou pour des décisions immédiates.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Nimitta : signes et synchronicités</h3>
              <p>
                Le Nimitta Shastra interprète les signes, synchronicités et événements apparemment fortuits comme des messages cosmiques. Cette branche développe l'intuition et la capacité à lire les signes du destin dans la vie quotidienne.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Samhita : astrologie mondiale, climat, royaumes</h3>
              <p>
                La Samhita traite de l'astrologie collective : prévisions climatiques, événements mondiaux, montées et chutes de royaumes. Cette branche applique les principes jyotishi à l'échelle sociétale et historique.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Remèdes (Upayas) : mantras, yantras, gemmes, rituels</h3>
              <p>
                Les Upayas sont des remèdes spirituels pour équilibrer les influences planétaires défavorables. Ils incluent les mantras (vibrations sonores), yantras (géométrie sacrée), gemmes (cristaux), rituels (yajnas) et disciplines de vie (sadhana).
              </p>
            </div>
          </section>

          {/* X. Remèdes astrologiques */}
          <section id="remedies">
            <h2 className="text-2xl font-serif text-foreground mb-6">X. Remèdes astrologiques (Upayas)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Principe : équilibrer l'énergie karmique</h3>
              <p>
                Les Upayas fonctionnent sur le principe de résonance vibratoire pour équilibrer les influences planétaires défavorables. En activant les fréquences appropriées, ces remèdes transforment les schémas karmiques négatifs en opportunités de croissance spirituelle.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mantras : Surya mantra, Navagraha mantra</h3>
              <p>
                Les mantras sont des formules sacrées qui activent les vibrations spécifiques des déités planétaires. Le Surya mantra (Om Hram Hreem Hraum Sah Suryaya Namah) équilibre le Soleil, tandis que les Navagraha mantras ciblent chacune des neuf planètes pour harmoniser leurs influences.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Yantras : Sri Yantra, Navagraha Yantra</h3>
              <p>
                Les yantras sont des diagrammes géométriques sacrés qui concentrent les énergies cosmiques. Le Sri Yantra représente l'univers manifesté, tandis que les Navagraha yantras spécifiques ciblent chaque planète pour équilibrer ses influences dans la vie.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Pierres précieuses : règles traditionnelles</h3>
              <p>
                Les gemmes (Ratnas) sont choisies selon les planètes à renforcer ou équilibrer. Le rubis pour le Soleil, la perle pour la Lune, le corail pour Mars, etc. Les règles traditionnelles exigent une consultation experte pour éviter les effets indésirables.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dons (Dāna)</h3>
              <p>
                Le don désintéressé (Dāna) est un remède puissant qui dissout l'ego et équilibre le karma. Les dons spécifiques à chaque planète (lait pour la Lune, jaggery pour le Soleil) activent les qualités associées et apaisent les influences défavorables.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Puja et Yajna dédiés aux Grahas</h3>
              <p>
                Les cérémonies dévotionnelles (Puja) et les sacrifices rituels (Yajna) créent des vibrations positives qui influencent les schémas karmiques. Ces pratiques spirituelles transforment les obstacles en opportunités par la grâce divine.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Discipline de vie (Sadhana)</h3>
              <p>
                La discipline spirituelle (Sadhana) inclut la méditation, le yoga, l'étude sacrée et le service désintéressé. Ces pratiques élèvent la conscience au-dessus des influences planétaires et conduisent à la libération spirituelle.
              </p>
            </div>
          </section>

          {/* XI. Éthique et responsabilité */}
          <section id="ethique">
            <h2 className="text-2xl font-serif text-foreground mb-6">XI. Éthique et responsabilité du praticien</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rôle du Jyotishi dans la société</h3>
              <p>
                Le Jyotishi (astrologue védique) est un guide spirituel qui aide les individus à comprendre leur karma et à naviguer dans les défis de la vie. Son rôle est éducatif plutôt que déterministe, inspirant l'auto-responsabilité et la croissance spirituelle.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transmission traditionnelle (Guru-Shishya Parampara)</h3>
              <p>
                La transmission authentique du Jyotish suit la chaîne Guru-Shishya (maître-disciple) qui préserve l'intégrité spirituelle de la science. Cette approche personnalisée permet une compréhension profonde des nuances subtiles de l'astrologie védique.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Limites des prédictions</h3>
              <p>
                Le Jyotish ne prédit pas l'inévitable mais révèle les tendances karmiques. Le libre arbitre permet de transcender les influences défavorables par des actions spirituelles et éthiques. Le praticien doit toujours souligner le potentiel de transformation humaine.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Éthique de la parole, compassion, discernement</h3>
              <p>
                Le Jyotishi doit parler avec compassion et discernement, évitant les prédictions alarmistes qui pourraient créer de la peur. L'objectif est d'inspirer l'espoir et la compréhension plutôt que l'anxiété et la résignation.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le but ultime : conduire vers le Dharma et la connaissance de soi</h3>
              <p>
                Le véritable but du Jyotish est de guider l'individu vers l'accomplissement de son Dharma personnel et la réalisation de son essence divine. La connaissance astrologique devient un outil pour l'éveil spirituel plutôt qu'une fin en soi.
              </p>
            </div>
          </section>

          {/* XII. Annexes techniques */}
          <section id="annexes">
            <h2 className="text-2xl font-serif text-foreground mb-6">XII. Annexes techniques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Glossaire complet des termes sanskrits</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-1">
                  <p><strong className="text-foreground">Jyotish</strong> : Science de la lumière</p>
                  <p><strong className="text-foreground">Graha</strong> : Planète/influenceur</p>
                  <p><strong className="text-foreground">Rashi</strong> : Signe zodiacal</p>
                  <p><strong className="text-foreground">Bhava</strong> : Maison astrologique</p>
                  <p><strong className="text-foreground">Nakshatra</strong> : Constellation lunaire</p>
                  <p><strong className="text-foreground">Dasa</strong> : Cycle planétaire</p>
                </div>
                <div className="space-y-1">
                  <p><strong className="text-foreground">Karma</strong> : Action et conséquence</p>
                  <p><strong className="text-foreground">Dharma</strong> : Devoir cosmique</p>
                  <p><strong className="text-foreground">Moksha</strong> : Libération spirituelle</p>
                  <p><strong className="text-foreground">Yoga</strong> : Union/combinaison</p>
                  <p><strong className="text-foreground">Upaya</strong> : Remède spirituel</p>
                  <p><strong className="text-foreground">Mantra</strong> : Formule vibratoire</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Table des Nakshatras et significations clés</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-card border border-border rounded-lg">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Nakshatra</th>
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Déité</th>
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Symbole</th>
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Qualité</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-border">Ashwini</td>
                      <td className="py-2 px-4 border-b border-border">Ashwini Kumaras</td>
                      <td className="py-2 px-4 border-b border-border">Cheval</td>
                      <td className="py-2 px-4 border-b border-border">Guérison</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="py-2 px-4 border-b border-border">Bharani</td>
                      <td className="py-2 px-4 border-b border-border">Yama</td>
                      <td className="py-2 px-4 border-b border-border">Yoni</td>
                      <td className="py-2 px-4 border-b border-border">Transformation</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-border">Krittika</td>
                      <td className="py-2 px-4 border-b border-border">Agni</td>
                      <td className="py-2 px-4 border-b border-border">Rasoir</td>
                      <td className="py-2 px-4 border-b border-border">Pouvoir</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Table des dignités planétaires</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-card border border-border rounded-lg">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Planète</th>
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Domicile</th>
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Exaltation</th>
                      <th className="py-2 px-4 border-b border-border text-foreground text-left">Chute</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-border">Soleil</td>
                      <td className="py-2 px-4 border-b border-border">Lion</td>
                      <td className="py-2 px-4 border-b border-border">Bélier</td>
                      <td className="py-2 px-4 border-b border-border">Balance</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="py-2 px-4 border-b border-border">Lune</td>
                      <td className="py-2 px-4 border-b border-border">Cancer</td>
                      <td className="py-2 px-4 border-b border-border">Taureau</td>
                      <td className="py-2 px-4 border-b border-border">Scorpion</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Guide d'étude progressif</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Maîtriser les bases astronomiques et les calculs de thème</li>
                <li>Comprendre les significations des planètes, signes et maisons</li>
                <li>Étudier les dignités planétaires et les aspects</li>
                <li>Analyser les Nakshatras et leurs influences</li>
                <li>Maîtriser les systèmes Dasa et les transits</li>
                <li>Étudier les Yogas et leurs effets</li>
                <li>Apprendre les remèdes spirituels (Upayas)</li>
                <li>Pratiquer l'interprétation intégrale des thèmes</li>
              </ol>
            </div>
          </section>

          {/* XIII. Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">XIII. Conclusion générale</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Jyotish comme science sacrée de la conscience</h3>
              <p>
                Le Jyotish transcende l'astrologie ordinaire pour devenir une science sacrée de la conscience. Il révèle non seulement les influences cosmiques mais aussi la nature divine de l'âme humaine. Cette science millénaire continue d'offrir des perspectives précieuses sur le parcours spirituel de l'individu.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Union de l'astronomie, de la psychologie et du karma</h3>
              <p>
                Le Jyotish unifie l'observation astronomique précise, la compréhension psychologique profonde et les lois karmiques subtiles. Cette synthèse unique permet une compréhension holistique de l'existence humaine et de sa place dans le cosmos.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle du Jyotish dans l'éveil spirituel</h3>
              <p>
                Le Jyotish n'est pas un outil de fatalisme mais un guide vers l'éveil spirituel. En révélant les schémas karmiques et les blocages psychologiques, il offre un chemin clair vers la libération et l'auto-réalisation. La connaissance astrologique devient une lumière pour naviguer vers l'illumination.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lumière intérieure et lumière cosmique</h3>
              <p>
                Le véritable Jyotish équilibre la lumière cosmique (influences célestes) avec la lumière intérieure (conscience divine). Cette harmonie permet de transcender les limitations astrologiques par la réalisation spirituelle. L'ultime objectif est de devenir soi-même une source de lumière pour éclairer le chemin des autres.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6 text-center">
                  <Star className="text-primary mb-4 mx-auto" size={32} />
                  <p className="text-foreground italic text-lg mb-2">
                    "Comme le soleil éclaire toute la création, la connaissance de soi éclaire toute l'existence."
                  </p>
                  <p className="text-muted-foreground text-sm">— Brihadaranyaka Upanishad</p>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <h4 className="text-xl font-semibold text-foreground mb-2">Shanti, Shanti, Shanti</h4>
                <p className="text-muted-foreground italic">
                  Paix, Paix, Paix — Que la paix règne en nous, autour de nous et partout dans l'univers.
                </p>
              </div>
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

export default Jyotish;
