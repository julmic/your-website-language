import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "architecture", title: "L'Architecture Subtile de l'Être" },
  { id: "feu-sacre", title: "Le Feu Sacré" },
  { id: "quete", title: "La Quête Spirituelle" },
  { id: "sattvavajaya", title: "Sattvavajaya" },
  { id: "trilogie", title: "La Trilogie Thérapeutique" },
  { id: "daiva", title: "Daiva Vyapashraya" },
  { id: "yukti", title: "Yukti Vyapashraya" },
  { id: "integration", title: "L'Intégration des Trois Voies" },
  { id: "huit-branches", title: "Les Huit Branches" },
  { id: "vaidya", title: "Le Vaidya comme Brahmin" },
  { id: "conclusion", title: "Conclusion" },
];

const AyurvedaElevationSpirituelle = () => {
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
            L'Ayurvéda : Une Voie d'<span className="text-primary">Élévation Spirituelle</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Découvrez comment la médecine traditionnelle indienne transcende la simple guérison physique pour devenir un chemin complet de réalisation de soi.
          </p>
        </div>
      </section>

      {/* Mantra */}
      <Card className="mx-auto max-w-4xl my-8 bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <p className="text-sm font-semibold text-foreground mb-2">Om Namah Shivai Om Namah Shivai Hara Hara Bole Namah Shivai</p>
          <p className="text-sm text-muted-foreground italic">Rameshwarai Shiva Rameshwarai Hara Hara Bole Namah Shivai</p>
        </CardContent>
      </Card>

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
          <section id="introduction" className="prose prose-lg text-muted-foreground">
            <p>
              L'Ayurvéda transcende la simple médecine pour embrasser une vision holistique où spiritualité, philosophie et santé s'entrelacent harmonieusement. Cette science millénaire repose sur quatre piliers fondamentaux :
            </p>
            <p>
              <strong className="text-foreground">Sharira</strong> (le corps), <strong className="text-foreground">Indriya</strong> (les sens), <strong className="text-foreground">Sattva</strong> (l'esprit) et <strong className="text-foreground">Atma</strong> (l'âme), constituant ensemble la voie vers l'élévation spirituelle.
            </p>
            <p>Ces quatre piliers correspondent aux quatre Purusharthas :</p>
            <ul className="space-y-2 mt-4">
              <li><strong className="text-foreground">Artha</strong> - prospérité physique</li>
              <li><strong className="text-foreground">Kama</strong> - satisfaction sensorielle (désir)</li>
              <li><strong className="text-foreground">Dharma</strong> - équilibre mental</li>
              <li><strong className="text-foreground">Moksha</strong> - réalisation de l'âme</li>
            </ul>
            <p className="mt-4">
              L'Ayurvéda est ainsi appelée "Ayur-Veda" - la connaissance (Veda) de la longévité (Ayus), mais cette longévité inclut non seulement <strong className="text-foreground">Deha-Ayus</strong> (durée de vie physique) mais aussi <strong className="text-foreground">Atma-Ayus</strong> (immortalité spirituelle).
            </p>
          </section>

          {/* Chapter 1 - Architecture */}
          <section id="architecture">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Architecture Subtile de l'Être</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Au cœur de notre existence réside <strong className="text-foreground">Atma</strong>, cette étincelle divine nichée dans le ventricule gauche sous forme atomique.
              </p>
              <p>
                Cette essence spirituelle établit la connexion vitale entre le corps physique et les organes sensoriels (Indriya). Selon les Upanishads, cet Atma est de la taille d'un grain de millet (<strong className="text-foreground">Shashti-Bhaga</strong>) et correspond au Jiva-Atman individuel qui porte les Samskaras (impressions subtiles) de toutes les vies antérieures.
              </p>
              <p>
                Les textes précisent que cette localisation dans le <strong className="text-foreground">Hridaya-Pundarikam</strong> (lotus du cœur) constitue le siège de Paramatman (âme suprême) en union avec Jivatman (âme individuelle).
              </p>
              <p>
                Enveloppant cette étincelle sacrée, <strong className="text-foreground">Sukshma Sharira</strong> - le corps subtil - pulse comme un filament lumineux de la taille d'un pouce, parcouru d'une énergie constante semblable à un éclair perpétuel.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Ce Sukshma Sharira est constitué de dix-neuf éléments :</h3>
              <ul className="space-y-2 mt-4">
                <li>les cinq <strong className="text-foreground">Pranas</strong> (énergies vitales)</li>
                <li>les cinq <strong className="text-foreground">Jnanendriyas</strong> (organes de connaissance)</li>
                <li>les cinq <strong className="text-foreground">Karmendriyas</strong> (organes d'action)</li>
                <li><strong className="text-foreground">Manas</strong> (mental)</li>
                <li><strong className="text-foreground">Buddhi</strong> (intelligence)</li>
                <li><strong className="text-foreground">Chitta</strong> (conscience)</li>
                <li><strong className="text-foreground">Ahamkara</strong> (ego)</li>
              </ul>
              
              <p className="mt-4">
                Il est animé par la <strong className="text-foreground">Kundalini-Shakti</strong> qui monte depuis Muladhara chakra vers Sahasrara chakra à travers les 72 000 Nadis (canaux subtils).
              </p>
              <p>
                Dans cette danse cosmique intérieure, <strong className="text-foreground">Ojas</strong> joue le rôle de régulateur énergétique, absorbant et harmonisant ces décharges spirituelles, tandis que Chitta Sattva maintient la connexion avec l'étincelle divine.
              </p>
              <p>
                Ojas représente la quintessence de tous les Dhatus (tissus corporels) et correspond à <strong className="text-foreground">Soma</strong>, l'amrita (nectar d'immortalité) mentionné dans les Vedas. Quand Ojas est pur, il facilite la perception directe de Brahman, d'où l'expression "Ojasvi" pour désigner un être rayonnant de réalisation spirituelle.
              </p>
            </div>
          </section>

          {/* Chapter 2 - Feu Sacré */}
          <section id="feu-sacre">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le Feu Sacré : Fondement de la Conscience</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les Écritures védiques s'ouvrent sur la révélation du feu primordial, faisant d'<strong className="text-foreground">Agni</strong> le principe créateur de conscience.
              </p>
              <p>
                <strong className="text-foreground">Pitta</strong>, manifestation de ce feu divin dans le corps, orchestre l'équilibre vital et forge notre être conscient. Sans cette flamme intérieure, la vie demeure impossible, car elle est la genèse même de l'existence.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Agni dans les Vedas revêt treize aspects :</h3>
              <ul className="space-y-3 mt-4">
                <li>
                  <strong className="text-foreground">Jatharagni</strong> (feu digestif principal) - situé dans l'estomac et le duodénum. C'est le plus important des 13 Agnis, responsable de la digestion primaire des aliments et de la transformation des nutriments.
                </li>
                <li>
                  <strong className="text-foreground">Les sept Dhatvagnis</strong> (feux des tissus) - les 7 feux métaboliques spécifiques qui président à la formation, à la transformation et au maintien des 7 Dhatus (tissus corporels).
                </li>
                <li>
                  <strong className="text-foreground">Les cinq Bhutagnis</strong> (feux des éléments) - les 5 feux élémentaires qui président à la digestion et à l'assimilation des Panchamahabhutas (5 grands éléments) présents dans la nourriture.
                </li>
              </ul>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    Le Rig Veda proclame "Agnir-ei Prathamam Devata" - Agni est la première divinité, car il transforme la matière grossière en essence subtile, permettant l'évolution de la conscience depuis Annamaya-Kosha jusqu'à Anandamaya-Kosha.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Chapter 3 - Quête Spirituelle */}
          <section id="quete">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Quête Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                La quête spirituelle consiste à nourrir et intensifier cette flamme intérieure jusqu'à ce qu'elle rayonne de tout son éclat.
              </p>
              <p>
                Notre mission existentielle nous invite à entreprendre ce voyage initiatique pour transmuter les disharmonies spirituelles. En explorant notre univers intérieur, nous dévoilons simultanément les mystères extérieurs, car nous sommes le microcosme reflétant le macrocosme.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    Cette correspondance entre microcosme (Pindanda) et macrocosme (Brahmanda) est exprimée dans la Taittiriya Upanishad : "Yat Pinde Tat Brahmande" - ce qui est dans le corps individuel existe dans l'univers cosmique.
                  </p>
                </CardContent>
              </Card>
              <p>
                L'Ayurvéda enseigne ainsi que guérir le corps individuel contribue à l'harmonie cosmique, d'où le concept de <strong className="text-foreground">Loka-Sangraha</strong> (maintien de l'ordre universel) par la pratique médicale sacrée.
              </p>
            </div>
          </section>

          {/* Chapter 4 - Sattvavajaya */}
          <section id="sattvavajaya">
            <h2 className="text-2xl font-serif text-foreground mb-6">Sattvavajaya : La Maîtrise de l'Esprit</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Sattvavajaya</strong>, fusion de Sattva (esprit) et Avajaya (victoire), désigne l'art de gouverner nos facultés mentales et de résister aux influences délétères.
              </p>
              <p>
                L'esprit humain, don précieux d'une complexité infinie, oscille entre deux polarités : l'abandon aux impulsions naturelles et l'aspiration à l'élévation par la conscience éveillée.
              </p>
              <p>
                Cette maîtrise correspond au concept védique de <strong className="text-foreground">"Sva-Raja"</strong> (auto-souveraineté) où l'individu devient maître de ses Vrittis (modifications mentales) selon les enseignements des Yoga-Sutras.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Les trois états de Sattva sont :</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Shuddha-Sattva (pure clarté)</h4>
                    <p className="text-sm text-muted-foreground">
                      L'état de conscience pure, non-conditionnée et transcendante. C'est la quintessence de Sattva Guna, libérée de toute influence de Rajas et Tamas.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Raja-Sattva (activité équilibrée)</h4>
                    <p className="text-sm text-muted-foreground">
                      L'état psycho-spirituel où l'activité noble (Raja) est guidée par la sagesse (Sattva), créant un équilibre parfait entre action dynamique et conscience claire.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Tamo-Sattva (inertie spirituelle)</h4>
                    <p className="text-sm text-muted-foreground">
                      Un état où la clarté sattvique est voilée par l'inertie tamasique, créant une forme de sagesse passive ou de spiritualité déconnectée de la réalité.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-4">
                Sattvavajaya vise à établir définitivement <strong className="text-foreground">Shuddha-Sattva</strong> comme état naturel de la conscience.
              </p>
            </div>
          </section>

          {/* Chapter 5 - Trilogie Thérapeutique */}
          <section id="trilogie">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Trilogie Thérapeutique selon Charaka</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Le maître Charaka structure l'approche thérapeutique ayurvédique en trois dimensions complémentaires :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Daiva Vyapashraya</strong> - La thérapie transcendante pour l'âme et l'esprit</li>
                <li><strong className="text-foreground">Yukti Vyapashraya</strong> - La thérapie rationnelle pour le corps physique</li>
                <li><strong className="text-foreground">Sattvavajaya</strong> - La thérapie psychique pour harmoniser le mental</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Ces trois approches correspondent aux trois Gunas :</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Daiva Vyapashraya</strong> agit sur Sattva-Guna (pureté)</li>
                <li><strong className="text-foreground">Yukti Vyapashraya</strong> sur Rajas-Guna (activité)</li>
                <li><strong className="text-foreground">Sattvavajaya</strong> équilibre Tamas-Guna (inertie)</li>
              </ul>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    Ensemble, elles forment le Trigunatmaka-Chikitsa (traitement des trois qualités) qui agit simultanément sur Adhi (dimension spirituelle), Vyadhi (dimension physique) et Upadhi (dimension mentale).
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Chapter 6 - Daiva Vyapashraya */}
          <section id="daiva">
            <h2 className="text-2xl font-serif text-foreground mb-6">Daiva Vyapashraya : La Dimension Transcendante</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Puisant ses origines dans l'<strong className="text-foreground">Atharvaveda</strong>, cette approche thérapeutique divine s'adresse particulièrement aux déséquilibres psychiques (Manasaroga). Elle s'appuie sur le pouvoir transformateur de la foi, élément intrinsèque de notre psyché.
              </p>
              <p>
                L'Atharvaveda contient 760 hymnes thérapeutiques (<strong className="text-foreground">Bhaishajya-Suktas</strong>) qui invoquent les Deva-Shakti (énergies divines) pour la guérison. Ces mantras thérapeutiques activent les Marma-Sthanas (points vitaux) et harmonisent les Pancha-Pranas avec les forces cosmiques (Bahuya-Pranas).
              </p>
              <p>
                Le terme "Daiva" évoque les influences karmiques des existences antérieures, cette thérapie visant à dissoudre les empreintes du passé générant les maladies d'origine spirituelle (<strong className="text-foreground">Daivikruta</strong>). "Vyapashraya" suggère l'acte de se réfugier, de trouver refuge dans une dimension supérieure.
              </p>
              <p>
                <strong className="text-foreground">Daivikruta-Vyadhi</strong> sont les maladies causées par Purva-Janma-Karma (actions des vies antérieures) et ne peuvent être guéries que par :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Prayaschitta</strong> (expiation)</li>
                <li><strong className="text-foreground">Japa</strong> (récitation sacrée)</li>
                <li><strong className="text-foreground">Homa</strong> (sacrifice du feu)</li>
                <li><strong className="text-foreground">Dana</strong> (don spirituel)</li>
                <li><strong className="text-foreground">Vratas</strong> (vœux sacrés)</li>
              </ul>
              <p className="mt-4">
                Ces pratiques purifient les Karma-Samskaras logés dans Karana Sharira (corps causal).
              </p>
              <p>
                Les Mantras thérapeutiques sont classés en : <strong className="text-foreground">Shanti-Mantras</strong> (pacification), <strong className="text-foreground">Pushti-Mantras</strong> (nutrition spirituelle), <strong className="text-foreground">Abhichara-Mantras</strong> (protection contre les influences adverses), et <strong className="text-foreground">Mrtyu-Jaya-Mantras</strong> (victoire sur la mort). Le plus puissant est le Maha-Mrityunjaya-Mantra dédié à Shiva comme Vaidyanatha (Seigneur des médecins).
              </p>
            </div>
          </section>

          {/* Chapter 7 - Yukti Vyapashraya */}
          <section id="yukti">
            <h2 className="text-2xl font-serif text-foreground mb-6">Yukti Vyapashraya : La Voie Rationnelle</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Yukti</strong> évoque l'union harmonieuse, le raisonnement éclairé, la stratégie thérapeutique et l'application méthodique. Dans le contexte médical, il désigne l'usage de l'intelligence discriminante pour diagnostiquer et soigner.
              </p>
              <p>
                Yukti dérive de la racine "Yuj" (unir) et représente l'application de <strong className="text-foreground">Viveka</strong> (discrimination spirituelle) à la médecine. Cette approche utilise les quatre Pramanas védiques :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Pratyaksha</strong> (perception directe)</li>
                <li><strong className="text-foreground">Anumana</strong> (inférence logique)</li>
                <li><strong className="text-foreground">Upamana</strong> (analogie)</li>
                <li><strong className="text-foreground">Shabda</strong> (témoignage scriptural)</li>
              </ul>
              <p className="mt-4">
                Charaka élève Yukti au rang de <strong className="text-foreground">Pramana</strong> (connaissance valide), le définissant comme l'exercice des facultés rationnelles permettant au praticien de saisir l'étiologie et la nature des pathologies, puis d'élaborer les protocoles thérapeutiques appropriés.
              </p>
              <p>
                Cette médecine rationnelle s'appuie sur la <strong className="text-foreground">Pancha-Mahabhuta-Siddhanta</strong> (théorie des cinq éléments), la <strong className="text-foreground">Tridosha-Siddhanta</strong> (théorie des trois humeurs), et la <strong className="text-foreground">Sapta-Dhatu-Siddhanta</strong> (théorie des sept tissus).
              </p>
              <p>
                Elle emploie <strong className="text-foreground">Shodasha-Upakarana</strong> (seize instruments thérapeutiques) incluant Aushadha (médicaments), Ahara (alimentation), Vihara (mode de vie) et Achar-Rasayana (élixirs comportementaux).
              </p>
              <p>
                Cette thérapie suit le principe de <strong className="text-foreground">"Samanya-Vishesha"</strong> (similaire et dissemblable) énoncé dans les Vedas : les substances similaires augmentent les qualités existantes tandis que les dissemblables les diminuent.
              </p>
            </div>
          </section>

          {/* Chapter 8 - Intégration */}
          <section id="integration">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Intégration des Trois Voies : Tri-Sutra-Chikitsa</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les grands <strong className="text-foreground">Acharyas</strong> (maîtres) de l'Ayurvéda enseignent que ces trois approches doivent être intégrées selon le principe de <strong className="text-foreground">Tri-Sutra-Chikitsa</strong> (thérapie à trois fils).
              </p>
              <p>
                Comme les trois brins d'un cordon sacré (Yajnopavita), elles se renforcent mutuellement pour créer une guérison complète touchant <strong className="text-foreground">Sharira</strong> (corps), <strong className="text-foreground">Manas</strong> (mental) et <strong className="text-foreground">Atman</strong> (âme).
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    Cette intégration reflète la vision védique de l'unité fondamentale exprimée dans "Sarvam Khalvidam Brahma" - tout ceci est véritablement Brahman.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Chapter 9 - Huit Branches */}
          <section id="huit-branches">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Huit Branches de l'Ayurvéda et leur Dimension Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                L'Ayurvéda traditionnel comprend <strong className="text-foreground">Ashta-Angas</strong> (huit branches) qui correspondent aux huit aspects de la réalisation spirituelle :
              </p>
              
              <div className="space-y-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">1. Kaya-Chikitsa (médecine interne)</h4>
                    <p className="text-sm text-muted-foreground">
                      Purification d'Annamaya-Kosha - traite les déséquilibres internes du corps physique, particulièrement focalisée sur la purification et l'harmonisation de l'enveloppe alimentaire/physique.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">2. Shalya-Tantra (chirurgie)</h4>
                    <p className="text-sm text-muted-foreground">
                      Libération des Granthis (nœuds énergétiques) - transcende la simple intervention physique pour inclure la libération des blocages énergétiques subtils, permettant la libre circulation du Prana.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">3. Shalakya-Tantra (ORL et ophtalmologie)</h4>
                    <p className="text-sm text-muted-foreground">
                      Clarification des Jnanendriyas - traite les pathologies de la région supra-claviculaire, focalisée sur la purification et clarification des organes sensoriels de perception.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">4. Kaumara-Bhritya (pédiatrie)</h4>
                    <p className="text-sm text-muted-foreground">
                      Protection des Bala-Samskaras (impressions de l'enfance) - s'étend au-delà du simple traitement médical pour inclure la protection et harmonisation des impressions formatrices de l'enfance.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">5. Agada-Tantra (toxicologie)</h4>
                    <p className="text-sm text-muted-foreground">
                      Neutralisation des Ama-Doshas (toxines spirituelles) - transcende le traitement des empoisonnements physiques pour inclure la détection et élimination des toxines subtiles.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">6. Rasayana-Tantra (gériatrie)</h4>
                    <p className="text-sm text-muted-foreground">
                      Régénération via Soma-Rasa (essence lunaire) - dépasse la simple gériatrie pour devenir la science de la régénération spirituelle par l'activation du Soma-Rasa qui confère immortalité et illumination.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">7. Vajikarana (aphrodisiaques)</h4>
                    <p className="text-sm text-muted-foreground">
                      Sublimation d'Ojas en Tejas (éclat spirituel) - transcende la simple stimulation sexuelle pour devenir la science de la transmutation de l'énergie sexuelle en pouvoir spirituel lumineux.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">8. Bhuta-Vidya (psychiatrie)</h4>
                    <p className="text-sm text-muted-foreground">
                      Harmonisation avec les Pancha-Bhutas - traite les déséquilibres mentaux comme des désharmonies fondamentales avec les cinq éléments cosmiques, révélant que toute maladie mentale résulte d'une perte de connexion avec les forces élémentaires.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 10 - Vaidya */}
          <section id="vaidya">
            <h2 className="text-2xl font-serif text-foreground mb-6">Le Vaidya comme Brahmin : Médecin-Prêtre Védique</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Dans la tradition védique authentique, le <strong className="text-foreground">Vaidya</strong> (médecin ayurvédique) est considéré comme un <strong className="text-foreground">Brahmin-Vishesh</strong> (brahmane spécialisé) qui unit Vidya (connaissance sacrée) et Seva (service désintéressé).
              </p>
              <p>
                Il pratique <strong className="text-foreground">Ahimsa-Paramo-Dharma</strong> (non-violence comme dharma suprême) et considère chaque patient comme une manifestation divine nécessitant :
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Shraddha</strong> (dévotion)</li>
                <li><strong className="text-foreground">Karuna</strong> (compassion)</li>
                <li><strong className="text-foreground">Prema</strong> (amour divin)</li>
              </ul>
              <p className="mt-4">
                Sa formation inclut obligatoirement l'étude des Vedas, des Upanishads, et la pratique de Yoga-Sadhana pour maintenir sa pureté spirituelle et son efficacité thérapeutique.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">Conclusion : L'Ayurvéda comme Moksha-Shastra</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Ainsi, l'Ayurvéda révèle sa véritable nature non comme simple système médical mais comme <strong className="text-foreground">Moksha-Shastra</strong> (science de la libération) où la guérison physique devient un moyen d'évolution spirituelle.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    En restaurant Swasthya (santé parfaite) - définie comme "Swa-Sthe" (établi dans le Soi) - cette science sacrée guide l'être humain vers la réalisation que "Aham Brahmasmi" (Je suis Brahman), transformant chaque acte thérapeutique en Yajna (sacrifice sacré) offert au Divin résidant en chaque créature.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie-vedique" onClick={() => window.scrollTo(0, 0)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie/involution-evolution" onClick={() => window.scrollTo(0, 0)}>
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

export default AyurvedaElevationSpirituelle;