import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";

const chapters = [
  { id: "concepts", title: "Concepts Fondamentaux" },
  { id: "cycles", title: "Les Cycles Cosmiques" },
  { id: "shakti", title: "La Shakti et les Chakras" },
  { id: "ames", title: "Âmes en Involution et Évolution" },
  { id: "rayons", title: "Rayons et Initiations" },
  { id: "guru", title: "Le Guru-Tattva" },
  { id: "margas", title: "Les Margas (Voies)" },
  { id: "samskaras", title: "Samskaras Collectifs" },
  { id: "mantras-collectifs", title: "Science des Mantras" },
  { id: "antahkarana", title: "Antahkarana Collectif" },
  { id: "adhikaras", title: "Les Adhikaras" },
  { id: "etapes", title: "Les Sept Étapes" },
  { id: "conclusion", title: "Conclusion" },
];

const InvolutionEvolution = () => {
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
            Involution et <span className="text-primary">Évolution</span> selon les Vedas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprenez les cycles cosmiques de la création et l'évolution de la conscience à travers les âges.
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

          {/* Mantra */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold text-foreground mb-2">OM NAMO NARAYANA</p>
              <p className="text-sm text-muted-foreground italic mb-4">
                Ce Mantra protège l'esprit ou le mental de sa propre négativité
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>OM</strong> est la syllabe sacrée cosmique englobant tout l'univers
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>NAMO NARAYANA</strong> : s'incliner et rendre hommage au cœur des eaux cosmiques de la création
              </p>
            </CardContent>
          </Card>

          {/* Chapter 1 - Concepts Fondamentaux */}
          <section id="concepts">
            <h2 className="text-2xl font-serif text-foreground mb-6">Concepts Fondamentaux</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                L'<strong className="text-foreground">involution</strong> et l'<strong className="text-foreground">évolution</strong> de l'âme 
                sont deux processus intimement liés dans la spiritualité. L'involution se réfère à la descente de l'âme (Jiva) dans le monde matériel (Prakriti), 
                où elle s'incarne dans un corps physique pour expérimenter et apprendre.
              </p>
              
              <p>
                Cette descente correspond au concept védique de "<strong className="text-foreground">Avaroha</strong>" - le mouvement descendant de la conscience divine (Brahman) 
                vers la manifestation matérielle grossière (Sthula Sharira). C'est un mouvement vers la densité et la limitation, où l'âme se confronte 
                à des défis et des leçons nécessaires à sa croissance.
              </p>
              
              <p>
                Les Vedas expliquent ce processus par la loi du <strong className="text-foreground">Karma</strong> et les <strong className="text-foreground">Samskaras</strong> (impressions mentales) 
                qui lient l'âme aux cycles de renaissance (Samsara).
              </p>
              
              <p>
                Cette phase d'involution est suivie de l'évolution, qui consiste en l'ascension de l'âme vers des états de conscience supérieurs. 
                Cette ascension est appelée "<strong className="text-foreground">Aroha</strong>" dans les textes védiques - le mouvement ascendant vers la réalisation du Soi (Atman) 
                et l'union avec Brahman.
              </p>
              
              <p>
                Au fil des expériences vécues et des leçons apprises, l'âme se libère progressivement de l'illusion de la séparation (Maya) 
                et se reconnecte à sa véritable nature divine.
              </p>
              
              <p>
                Les Upanishads enseignent que cette évolution passe par la compréhension progressive des cinq <strong className="text-foreground">koshas</strong> (enveloppes) : 
                Annamaya (physique), Pranamaya (énergétique), Manomaya (mentale), Vijnanamaya (intellectuelle supérieure) et Anandamaya (béatitude).
              </p>
              
              <p>
                L'évolution de l'âme est un voyage de retour à la lumière, à l'amour inconditionnel et à la réalisation de son plein potentiel spirituel. 
                Ce voyage correspond aux quatre <strong className="text-foreground">Purusharthas</strong> (buts de l'existence humaine) : 
                Dharma (rectitude), Artha (prospérité matérielle juste), Kama (plaisirs légitimes) et Moksha (libération finale).
              </p>
              
              <p>
                C'est un processus continu qui se déroule à travers de multiples incarnations, permettant à l'âme de se rapprocher toujours davantage 
                de son aspect divin manifesté. Les Vedas décrivent ce processus comme la progression à travers les quatre Ashramas (étapes de la vie) 
                et les quatre Varnas (orientations naturelles) selon le Svadharma (dharma individuel) de chaque âme.
              </p>
            </div>
          </section>

          {/* Chapter 2 - Les Cycles Cosmiques */}
          <section id="cycles">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Cycles Cosmiques et l'Évolution Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Selon les Puranas, ce processus d'involution et d'évolution s'inscrit dans les grands cycles cosmiques 
                des <strong className="text-foreground">Kalpas</strong> (jours de Brahma) et des <strong className="text-foreground">Yugas</strong>.
              </p>
              
              <p>
                Nous traversons actuellement le <strong className="text-foreground">Kali Yuga</strong>, âge de l'obscurité spirituelle 
                où l'évolution consciente demande des efforts particuliers.
              </p>
              
              <p>
                Les textes enseignent que dans ce Yuga, la durée de vie spirituelle (Ayus), la force (Bala), l'intelligence (Buddhi) 
                et le dharma sont à leur minimum, nécessitant des pratiques adaptées comme le <strong className="text-foreground">Nama-Japa</strong> (répétition du nom divin) 
                et le <strong className="text-foreground">Bhakti-Yoga</strong> (voie de la dévotion).
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Satya Yuga</h4>
                    <p className="text-sm">L'âge d'or - Dharma à 100%</p>
                    <p className="text-xs mt-1 text-muted-foreground">Voie principale : Dhyana (méditation profonde)</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Treta Yuga</h4>
                    <p className="text-sm">L'âge d'argent - Dharma à 75%</p>
                    <p className="text-xs mt-1 text-muted-foreground">Voie principale : Yajna (rituels sacrificiels)</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Dvapara Yuga</h4>
                    <p className="text-sm">L'âge de bronze - Dharma à 50%</p>
                    <p className="text-xs mt-1 text-muted-foreground">Voie principale : Archana (adoration des formes divines)</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Kali Yuga</h4>
                    <p className="text-sm">L'âge de fer - Dharma à 25%</p>
                    <p className="text-xs mt-1 text-muted-foreground">Voie principale : Nama Sankirtana (chant collectif)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 3 - La Shakti et les Niveaux de Conscience */}
          <section id="shakti">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Shakti et les Niveaux de Conscience</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les Tantras et les Agamas complètent cette vision en décrivant l'évolution comme l'éveil progressif de 
                <strong className="text-foreground"> Kundalini Shakti</strong> à travers les sept Chakras (centres d'énergie).
              </p>
              
              <p>
                Chaque chakra correspond à un niveau de conscience et à une qualité divine spécifique :
              </p>
              
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Muladhara</strong> - Survie et ancrage</li>
                <li><strong className="text-foreground">Svadhisthana</strong> - Créativité et émotions</li>
                <li><strong className="text-foreground">Manipura</strong> - Pouvoir personnel</li>
                <li><strong className="text-foreground">Anahata</strong> - Amour inconditionnel</li>
                <li><strong className="text-foreground">Vishuddha</strong> - Expression authentique</li>
                <li><strong className="text-foreground">Ajna</strong> - Intuition et vision intérieure</li>
                <li><strong className="text-foreground">Sahasrara</strong> - Union divine</li>
              </ul>
              
              <p className="mt-4">
                Cette montée de l'énergie divine représente le retour conscient de Shakti vers Shiva, 
                symbolisant l'union de la conscience individuelle avec la Conscience universelle.
              </p>
            </div>
          </section>

          {/* Chapter 4 - Âmes en Involution et en Évolution */}
          <section id="ames">
            <h2 className="text-2xl font-serif text-foreground mb-6">Âmes en Involution et en Évolution</h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Les âmes en état de Tamas (inertie spirituelle) - Stade Panchamahabhuta</h3>
                <p>
                  Les âmes qui vivent, mais dont la conscience est en sommeil. Ce sont les êtres humains assoupis dont l'intelligence 
                  est d'un ordre si bas, dont la conscience qu'ils ont d'eux-mêmes et de la vie est si vague et nébuleuse, 
                  que seules les formes les plus basses de l'existence humaine entrent dans cette catégorie.
                </p>
                <p>
                  Dans la cosmologie védique, ces âmes sont dominées par Tamo-Guna (qualité d'inertie) et leur conscience 
                  est principalement centrée sur les Panchamahabhuta (cinq éléments grossiers) sans reconnaissance de leur nature spirituelle.
                </p>
                <p>
                  Elles sont dans l'état d'Avidya (ignorance fondamentale) décrit dans les Upanishads. Ces âmes ont accumulé 
                  un lourd Karma-Bandha (lien karmique) qui les maintient dans l'ignorance de leur Svarupa (nature véritable).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Les âmes au niveau Annamaya-Kosha (enveloppe alimentaire)</h3>
                <p>
                  Les âmes qui sont simplement conscientes de la vie et des sensations sur le plan physique. 
                  Ces gens sont lents, inertes, mal affirmés, déroutés par leur milieu.
                </p>
                <p>
                  Leur conscience est entièrement absorbée dans l'Annamaya-Kosha (enveloppe physique) et leurs Vrittis 
                  (modifications mentales) sont extrêmement limitées. Ils vivent principalement selon les Pancha-Pranas 
                  (cinq souffles vitaux) de base sans développement de Buddhi (intelligence discriminante).
                </p>
                <p>
                  Selon le Sankhya-Yoga, ils sont dominés par la seule Prakriti sans éveil de Purusha (principe conscient). 
                  Leur Dharma se limite aux Yama-Niyama (observances) les plus élémentaires.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Les âmes au stade Pranamaya (éveil de l'énergie vitale)</h3>
                <p>
                  Les âmes qui commencent leur intégration et qui sont émotionnellement et psychiquement éveillées. 
                  En elles, la nature animale est éveillée et la nature de désir commence à devenir violente.
                </p>
                <p>
                  L'énergie Prana-Shakti s'active dans le Pranamaya-Kosha, éveillant les Pancha-Indriya (cinq sens) 
                  et les Karmendriya (organes d'action). C'est le début de l'éveil de Kama (désir) mais sans la guidance de Dharma-Buddhi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Les âmes dominées par Rajo-Gunas</h3>
                <p>
                  Les âmes qui sont essentiellement émotionnelles. La nature mentale fonctionne faiblement, 
                  et ce n'est que rarement qu'elle devient active.
                </p>
                <p>
                  Ces âmes vivent principalement dans le Manomaya-Kosha (enveloppe mentale émotionnelle) sous l'influence de Rajo-Guna. 
                  Leurs Chitta-Vrittis (modifications du mental) sont constamment agitées par Raga-Dvesha (attraction-répulsion) 
                  sans la stabilité de Sattva-Guna.
                </p>
                <p>
                  Selon les Puranas, cette conscience correspond à la période -5000 avant JC où dominaient les pouvoirs psychiques (Siddhis) 
                  sans sagesse spirituelle, conduisant à la destruction par l'ego (Ahamkara).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Les âmes en transition Rajas-Sattva - Citoyens de l'âge de transition</h3>
                <p>
                  Les âmes que l'on peut maintenant classer comme des êtres humains intelligents, capables d'application mentale 
                  s'ils sont entraînés, et qui montrent qu'ils peuvent penser si besoin est.
                </p>
                <p>
                  Chez elles s'amorce la transition de Rajo-Guna vers Sattva-Guna. Le Vijnanamaya-Kosha (enveloppe de la connaissance supérieure) 
                  commence à s'activer sporadiquement, permettant des moments de Viveka (discernement) et de Vichara (investigation spirituelle).
                </p>
                <p>
                  Ils constituent la masse de l'humanité moderne. Cette oscillation correspond à la lutte entre Avidya-Shakti 
                  (pouvoir de l'ignorance) et Vidya-Shakti (pouvoir de la connaissance) décrite dans les Upanishads. 
                  Ils suivent le Loka-Dharma (dharma collectif) plutôt que leur Svadharma (dharma individuel).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Les âmes établies en Sattva-Guna - Les Karma-Yogis de l'époque moderne</h3>
                <p>
                  Les âmes qui pensent et qui sont des mentaux. Elles augmentent continuellement en nombre et en puissance 
                  au fur et à mesure que les procédés d'éducation et les découvertes scientifiques produisent des résultats.
                </p>
                <p>
                  Ces âmes ont développé un Buddhi-Yoga stable et pratiquent consciemment ou inconsciemment le Karma-Yoga 
                  (voie de l'action juste) dans leurs domaines d'expertise. Leur Sattva-Guna prédomine, permettant l'expression 
                  de Vidya (connaissance vraie) et de Dharana (concentration).
                </p>
                <p>
                  Ce sont les écrivains, les artistes, les penseurs des différents champs de la connaissance et de l'aspiration humaines, 
                  les politiciens, les chefs religieux, les savants. Ils sont des canaux pour les inspirations des Rishis (voyants) 
                  et pratiquent inconsciemment le Loka-Sangraha (maintien de l'ordre cosmique).
                </p>
                <p>
                  L'idéal de Seva (service désintéressé) s'éveille en eux comme expression naturelle de leur évolution spirituelle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7. Les âmes sur le Sentier de Probation - Les Sadhaka en quête de Moksha</h3>
                <p>
                  Les âmes dont le sens de conscience sur le plan physique est actuellement d'un ordre tel qu'elles peuvent 
                  passer sur le Sentier de Probation. Ce sont les mystiques, conscients de la dualité, déchirés entre les paires d'opposés 
                  mais incapables de se reposer tant qu'ils ne sont pas polarisés dans l'âme.
                </p>
                <p>
                  Cette dualité correspond à la lutte entre Jiva (âme individuelle) et Atman (Soi universel) décrite 
                  dans la Katha Upanishad comme les deux oiseaux sur l'arbre de l'existence.
                </p>
                <p>
                  Ils ont développé Mumukshutva (intense désir de libération) et pratiquent les Sadhana-Chatushtaya (quatre qualifications) :
                </p>
                <ul className="space-y-2 mt-4">
                  <li><strong className="text-foreground">Viveka</strong> - Discernement entre l'éternel (nitya) et l'éphémère (anitya)</li>
                  <li><strong className="text-foreground">Vairagya</strong> - Détachement vis-à-vis des fruits de l'action</li>
                  <li><strong className="text-foreground">Shad-Sampat</strong> - Six vertus : Śama (contrôle mental), Dama (contrôle sensoriel), 
                  Uparati (cessation des activités non-essentielles), Titikṣā (endurance), Śraddhā (foi), Samādhāna (concentration)</li>
                  <li><strong className="text-foreground">Mumukshutva</strong> - Désir intense de libération</li>
                </ul>
                <p>
                  Ils pratiquent diverses formes de Yoga : Hatha-Yoga, Bhakti-Yoga, Karma-Yoga, et commencent à entrevoir 
                  le Raja-Yoga et le Jnana-Yoga.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8. Les âmes sur le Sentier du Disciple - Les Yogis intégrés</h3>
                <p>
                  Les âmes dont l'intelligence et la nature d'amour deviennent si éveillées et intégrées qu'elles peuvent 
                  commencer à fouler le Sentier de l'État de Disciple. Ce sont les mystiques pratiques, ou les occultistes des temps modernes.
                </p>
                <p>
                  Ces âmes ont atteint l'état de Sthita-Prajna (sagesse établie) décrit dans la Bhagavad Gita. 
                  Elles ont développé Dharana (concentration), Dhyana (méditation) et commencent à expérimenter Samadhi.
                </p>
                <p>
                  Leur Antahkarana (instrument intérieur) est purifié et aligné, permettant la réception directe de Prajna (sagesse supérieure). 
                  Elles pratiquent le Guru-Yoga authentique et peuvent servir de pont entre les plans supérieurs et l'humanité ordinaire.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9. Les âmes initiées - Les Jivan-Muktas (libérés vivants)</h3>
                <p>
                  Les âmes qui sont initiées aux mystères du royaume de Dieu. Ce sont les âmes qui sont conscientes 
                  non seulement de leur véhicule d'expression, la personnalité intégrée, conscientes également d'elles-mêmes en tant qu'âmes, 
                  mais qui savent aussi, sans aucune controverse possible, qu'il n'existe rien qui ressemble à "mon âme et ton âme", 
                  mais qu'il existe simplement "l'âme".
                </p>
                <p>
                  Ces âmes ont réalisé l'état de Turiya (quatrième état de conscience) au-delà des trois états ordinaires 
                  (veille, rêve, sommeil profond). Elles vivent dans la conscience constante de "Tat Tvam Asi" (Tu es Cela) 
                  et "Aham Brahmasmi" (Je suis Brahman).
                </p>
                <p>
                  Elles ont transcendé l'identification au Jiva (âme individuelle) pour résider dans la conscience 
                  du Hiranyagarbha (âme cosmique) tout en maintenant un corps physique pour servir l'évolution collective.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10. Les âmes libérées - Les Videha-Muktas et Avatars</h3>
                <p>
                  Les âmes qui ont atteint la libération de toutes les limitations de la nature de la forme et qui résident 
                  éternellement dans la conscience de l'Âme Unique, ayant renoncé à toute identification, à toute aspiration 
                  de la vie de la forme, si développée qu'elle puisse être.
                </p>
                <p>
                  Ces âmes ont atteint Kaivalya (isolement absolu) ou Moksha complet. Elles peuvent choisir de demeurer 
                  comme Videha-Muktas (libérés sans forme) dans les plans causals, ou de redescendre comme Avatars 
                  (incarnations divines) ou Mahatmas pour guider l'humanité.
                </p>
                <p>
                  Elles opèrent depuis la conscience d'Ishvara (Seigneur cosmique) et manifestent les pouvoirs de Maya-Shakti 
                  pour le bien universel. Dans la tradition védique, ils correspondent aux Chiranjivas (immortels), 
                  aux Rishis éternels comme les Sapta-Rishis, et aux Avatars complets.
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 5 - Rayons et Initiations */}
          <section id="rayons">
            <h2 className="text-2xl font-serif text-foreground mb-6">Rayons et Initiations selon la Tradition Védique</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">Les Saptarishi-Mandalas (Sept Rayons Cosmiques)</h3>
              <p>
                Avant d'aborder l'initiation, il convient de comprendre que les rayons correspondent aux sept Saptarishi 
                (sept sages primordiaux) qui émanent du Brahma cosmique. Chaque âme appartient à l'un de ces rayons 
                qui déterminent sa nature fondamentale et son chemin évolutif :
              </p>
              <ol className="space-y-2 mt-4">
                <li><strong className="text-foreground">Kashyapa-Rishi</strong> - Volonté-Pouvoir</li>
                <li><strong className="text-foreground">Atri-Rishi</strong> - Amour-Sagesse</li>
                <li><strong className="text-foreground">Vasishta-Rishi</strong> - Intelligence Active</li>
                <li><strong className="text-foreground">Jamadgani-Rishi</strong> - Harmonie par le Conflit</li>
                <li><strong className="text-foreground">Gautama-Rishi</strong> - Connaissance Concrète</li>
                <li><strong className="text-foreground">Bharadvaja-Rishi</strong> - Dévotion-Idéalisme</li>
                <li><strong className="text-foreground">Vishvamitra-Rishi</strong> - Ordre Cérémoniel</li>
              </ol>
              <p>
                La reconnaissance de son rayon d'âme (Atmika-Kirana) est essentielle pour le développement spirituel approprié.
              </p>
            </div>
          </section>

          {/* Chapter 6 - Le Guru-Tattva */}
          <section id="guru">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Importance du Guru-Tattva et du Satsang</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">La Guru-Shishya Parampara et l'Initiation Collective</h3>
              <p>
                Le concept qui doit remplacer celui qui existe actuellement est celui de l'initiation de groupe, 
                et non celui de l'initiation de l'aspirant en tant qu'individu. Dans la tradition védique authentique, 
                l'initiation (Diksha) a toujours été comprise comme un phénomène de Sangha (communauté spirituelle).
              </p>
              <p>
                Le Guru-Shishya Parampara (lignée maître-disciple) fonctionne sur le modèle de l'Égrégore spirituel 
                où la conscience collective du groupe porte chaque membre individuel.
              </p>
              <p>
                Les anciens Rishis connaissaient cette vérité, c'est pourquoi ils établirent les Guru-Kulas (écoles spirituelles) 
                et les Tapovanams (retraites forestières) où l'évolution spirituelle se faisait collective, 
                sous la guidance d'un Brahma-Nishta Guru (maître établi en Brahman).
              </p>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">La nature universelle de l'Atman</h4>
                  <p className="text-muted-foreground">
                    L'âme, de par sa nature, a la conscience de groupe, elle n'a pas d'ambitions ou d'intérêts individuels. 
                    C'est l'âme qui est l'initié. L'Atman (Soi véritable) est par essence Sarva-Bhuta-Atmaikyam (unité avec le Soi de tous les êtres).
                  </p>
                  <p className="text-muted-foreground mt-2">
                    La réalisation spirituelle authentique dissout automatiquement Ahamkara (ego) et Mamakara (possessivité) 
                    pour révéler Vasudhaiva Kutumbakam (le monde entier est une famille).
                  </p>
                </CardContent>
              </Card>
              
              <p>
                L'initiation est un processus grâce auquel l'être spirituel, au sein de la personnalité, 
                prend conscience de lui-même en tant qu'âme doté des pouvoirs de l'âme, ayant des relations d'âme et un dessein d'âme.
              </p>
              <p>
                Le <strong className="text-foreground">Satsang</strong> (association avec la vérité) amplifie l'évolution 
                par la résonance collective des consciences en quête. Cette reconnaissance correspond au concept védique 
                de Dharma-Sangha (communauté dharhmique authentique) et à la pratique de Seva (service désintéressé).
              </p>
            </div>
          </section>

          {/* Chapter 7 - Les Margas */}
          <section id="margas">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Margas (Voies) et l'Initiation de Groupe selon les Yugas</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Il est important de comprendre que les différentes voies spirituelles (Margas) correspondent aux besoins 
                évolutifs des différents Yugas.
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Satya Yuga</strong> - Dhyana (méditation pure)</li>
                <li><strong className="text-foreground">Treta Yuga</strong> - Yajna (sacrifice rituel)</li>
                <li><strong className="text-foreground">Dvapara Yuga</strong> - Puja (dévotion formelle)</li>
                <li><strong className="text-foreground">Kali Yuga</strong> - Nama-Sankirtana (chant collectif du nom divin) et Prema-Bhakti (dévotion d'amour)</li>
              </ul>
              <p>
                Cette évolution des Sadhanas (pratiques spirituelles) selon les âges cosmiques confirme que l'initiation collective 
                n'est pas seulement naturelle mais nécessaire dans l'époque actuelle.
              </p>
            </div>
          </section>

          {/* Chapter 8 - Samskaras Collectifs */}
          <section id="samskaras">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Samskaras Collectifs et la Purification de Groupe</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Un aspect crucial de l'initiation de groupe concerne les Samskaras (impressions subconscientes). 
                Les textes enseignent que certains Karma-Bandhana (liens karmiques) ne peuvent être purifiés que collectivement.
              </p>
              <p>
                C'est pourquoi la tradition établit des pratiques comme les Maha-Yajnas (grands sacrifices collectifs), 
                les Kumbh Melas (rassemblements spirituels massifs), et les Sankirtan-Yajnas (sacrifices de chant collectif).
              </p>
              <p>
                Dans ces contextes sacrés, la Shakti collective du groupe dissout les Samskaras individuels les plus tenaces 
                qui résistent aux pratiques individuelles. L'effet d'Avarana-Shakti (pouvoir de voilement) de Maya 
                est ainsi neutralisé par la force combinée des aspirants sincères.
              </p>
            </div>
          </section>

          {/* Chapter 9 - Science des Mantras */}
          <section id="mantras-collectifs">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Science des Mantras dans l'Initiation Collective</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les Vedas révèlent que certains Bija-Mantras (mantras-germes) et Maha-Mantras ne peuvent déployer 
                leur pleine puissance transformatrice que lorsqu'ils sont pratiqués en groupe.
              </p>
              <p>
                Le <strong className="text-foreground">AUM</strong> cosmique, par exemple, quand il est chanté en harmonie 
                par un groupe d'âmes évoluées, crée un champ vibratoire (Shabda-Brahman) qui facilite l'éveil spontané 
                de Kundalini-Shakti chez tous les participants.
              </p>
              <p>
                Cette science des mantras explique pourquoi les anciennes initiations védiques se déroulaient toujours 
                dans des Brahma-Yajnas (sacrifices sacrés) collectifs où les Ritwiks (prêtres officiants) créaient ensemble 
                l'atmosphère nécessaire à la descente de la grâce divine (Kripa-Shakti).
              </p>
            </div>
          </section>

          {/* Chapter 10 - Antahkarana Collectif */}
          <section id="antahkarana">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Antahkarana Collectif et la Télépathie Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                À mesure qu'un groupe spirituel évolue ensemble, se développe ce que les textes appellent 
                <strong className="text-foreground"> Samuhika-Antahkarana</strong> (instrument psychique collectif).
              </p>
              <p>
                Cette interconnexion subtile permet aux membres du groupe de partager instantanément les réalisations spirituelles, 
                les inspirations et même certains Siddhis (pouvoirs spirituels).
              </p>
              <p>
                C'est pourquoi les grands Mahatmas travaillent toujours au sein de Mandalas (cercles spirituels) 
                où chaque membre contribue selon son Sva-Shakti (pouvoir naturel) au bien-être spirituel du groupe entier.
              </p>
              <p>
                Cette télépathie spirituelle est une manifestation naturelle de l'unité de conscience qui caractérise les vrais initiés.
              </p>
            </div>
          </section>

          {/* Chapter 11 - Les Adhikaras */}
          <section id="adhikaras">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Adhikaras (Qualifications) pour l'Initiation de Groupe</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les textes décrivent quatre Adhikaras principales pour participer à une initiation de groupe authentique :
              </p>
              <div className="space-y-4 mt-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">1. Shraddhavat (foi stable)</h4>
                    <p className="text-sm text-muted-foreground">
                      Une confiance inébranlable en l'efficacité du processus collectif et en la grâce du Guru-Mandala
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">2. Sat-Sangati (noble association)</h4>
                    <p className="text-sm text-muted-foreground">
                      La capacité de reconnaître et de s'associer harmonieusement avec d'autres âmes évoluées
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">3. Seva-Buddhi (mental de service)</h4>
                    <p className="text-sm text-muted-foreground">
                      L'attitude constante de se demander "comment puis-je servir le bien commun du groupe ?" 
                      plutôt que "que puis-je obtenir pour moi-même ?"
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">4. Dharma-Nishtha (fermeté dans le dharma)</h4>
                    <p className="text-sm text-muted-foreground">
                      La pratique stable de Yama-Niyama (observances éthiques) qui crée la pureté nécessaire 
                      pour recevoir les énergies subtiles générées par le groupe
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 12 - Les Sept Étapes */}
          <section id="etapes">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Sept Étapes de l'Initiation Collective selon les Upanishads</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les textes décrivent un processus en sept étapes pour l'initiation de groupe, 
                correspondant à l'éveil progressif des sept Chakras collectifs du Sangha :
              </p>
              <ol className="space-y-3 mt-6">
                <li><strong className="text-foreground">Prithvi-Sangha-Chakra (racine collective)</strong> - Établissement de la base matérielle et énergétique du groupe</li>
                <li><strong className="text-foreground">Apas-Sangha-Chakra (sacré collectif)</strong> - Éveil de la créativité et de la fertilité spirituelle du groupe</li>
                <li><strong className="text-foreground">Agni-Sangha-Chakra (solaire collectif)</strong> - Développement du pouvoir et de la volonté collective</li>
                <li><strong className="text-foreground">Vayu-Sangha-Chakra (cardiaque collectif)</strong> - Ouverture du cœur de groupe et compassion universelle</li>
                <li><strong className="text-foreground">Akasha-Sangha-Chakra (gorge collective)</strong> - Expression harmonieuse de la vérité spirituelle du groupe</li>
                <li><strong className="text-foreground">Mahat-Sangha-Chakra (frontal collectif)</strong> - Vision commune et intuition de groupe</li>
                <li><strong className="text-foreground">Sahasra-Sangha-Chakra (couronne collective)</strong> - Union mystique du groupe avec la Divinité suprême</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">L'importance du Kala (temps sacré) dans l'Initiation de Groupe</h3>
              <p>
                Les Vedas enseignent que le temps n'est pas homogène mais qu'il existe des Punya-Kalas (moments propices) 
                où les forces cosmiques favorisent les initiations spirituelles. Ces moments correspondent aux alignements planétaires spécifiques, 
                aux festivals sacrés (Parvas), aux phases lunaires, et aux transitions entre les Yugas.
              </p>
              <p>
                Les grands Mahatmas planifient toujours les initiations de groupe durant ces périodes où le Kala-Chakra (roue du temps) 
                facilite la descente des énergies supérieures.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Le Service Mondial comme Expression de l'Initiation de Groupe</h3>
              <p>
                Finalement, les Vedas enseignent que le critère ultime du succès d'une initiation de groupe 
                est la capacité du Sangha à servir l'évolution spirituelle de l'humanité entière.
              </p>
              <p>
                Un groupe vraiment initié devient naturellement un canal pour la Hiranya-Garbha-Shakti (énergie de l'âme universelle) 
                et rayonne spontanément Shanti (paix), Prema (amour divin), et Jnana (sagesse) dans le monde.
              </p>
              <p>
                Ses membres ne cherchent plus leur propre libération mais deviennent des instruments conscients 
                de Vishva-Kalyana (bien-être universel).
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">Conclusion : Le Dharma Éternel de l'Évolution Collective</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Ainsi, l'enseignement védique sur l'involution et l'évolution des âmes révèle un processus cosmique grandiose 
                où chaque conscience individuelle participe à un mouvement d'ensemble vers la réalisation divine.
              </p>
              <p>
                De l'obscurité primordiale du Tamas jusqu'à la lumière transcendante du Sattva-Shuddhi (pureté sattvique), 
                chaque âme trouve sa place naturelle dans la symphonie cosmique selon son Svadharma et son niveau d'évolution.
              </p>
              <p>
                L'initiation de groupe apparaît alors non comme une nouveauté moderne mais comme le retour à la sagesse éternelle 
                du Sanatana-Dharma (dharma éternel) qui reconnaît que "Vasudhaiva Kutumbakam" - le monde entier est une famille.
              </p>
              <p>
                Dans cette vision, l'évolution spirituelle individuelle et collective sont indissociables, 
                car elles participent du même mouvement cosmique de retour de la manifestation vers sa Source divine.
              </p>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <p className="italic text-foreground text-lg mb-4">
                    "Ô Maître, conduis-moi de l'irréel vers le Réel<br/>
                    Ô Maître, conduis-moi des ténèbres vers la Lumière<br/>
                    Ô Maître, conduis-moi de la mort vers l'Immortalité"
                  </p>
                  <p className="text-foreground font-semibold">Oṃ Paix, Paix, Paix</p>
                  <p className="text-sm text-muted-foreground mt-2">- Brihadaranyaka Upanishad</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie/ayurveda-elevation-spirituelle">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Article précédent
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie/mort-ayurveda">
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

export default InvolutionEvolution;