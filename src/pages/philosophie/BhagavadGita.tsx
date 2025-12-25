import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Sword, Users, Target, Lightbulb } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "contexte", title: "Contexte" },
  { id: "structure", title: "Structure" },
  { id: "symbolisme", title: "Symbolisme" },
  { id: "enseignements", title: "Enseignements" },
  { id: "metaphysique", title: "Métaphysique" },
  { id: "chapitres", title: "Chapitres" },
  { id: "synthese", title: "Synthèse" },
  { id: "interpretations", title: "Interprétations" },
  { id: "pratique", title: "Pratique" },
  { id: "conclusion", title: "Conclusion" },
];

const BhagavadGita = () => {
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
            La <span className="text-primary">Bhagavad Gītā</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Le dialogue sacré entre Krishna et Arjuna sur le champ de bataille de Kurukshetra
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
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Place de la Bhagavad Gītā dans la tradition hindoue</h3>
              <p>
                La Bhagavad Gītā, littéralement "Chant du Seigneur", occupe une place centrale dans la tradition hindoue en tant que texte sacré qui synthétise les enseignements des Védas, des Upanishads et des différentes écoles philosophiques. Considérée comme une Upanishad elle-même (appelée "Gītā Upanishad"), elle constitue l'un des trois textes fondamentaux du Vedanta, aux côtés des Upanishads et des Brahma Sutras.
              </p>
              <p>
                La Gītā transcende les divisions traditionnelles entre les différentes écoles philosophiques en offrant une approche intégrative qui englobe les multiples voies spirituelles : le karma yoga (yoga de l'action), le jñāna yoga (yoga de la connaissance) et le bhakti yoga (yoga de la dévotion).
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Présentation du Mahābhārata et de la situation narrative</h3>
              <p>
                La Bhagavad Gītā est intégrée au Mahābhārata, l'un des deux grands épopées sanskrites de l'Inde ancienne. Le Mahābhārata raconte l'histoire des conflits entre deux branches de la famille des Kuru : les Pāndavas (cinq frères) et les Kauravas (cent cousins). La Gītā se déroule précisément au moment crucial où la guerre entre ces deux factions est sur le point d'éclater sur le champ de bataille de Kurukshetra.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Pourquoi la Gītā est un texte universel</h3>
              <p>
                La Gītā transcende le cadre spécifique du Mahābhārata pour devenir un texte universel parce qu'elle traite des dilemmes fondamentaux de l'existence humaine : comment agir avec intégrité dans un monde complexe, comment concilier devoirs contradictoires, comment trouver un sens à la souffrance et à la mort.
              </p>
            </div>
          </section>

          {/* II. Contexte historique et littéraire */}
          <section id="contexte">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Contexte historique et littéraire</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Origine et datation approximative</h3>
              <p>
                La Bhagavad Gītā fait partie intégrante du Mahābhārata, dont la composition s'étend approximativement du VIIIe au IVe siècle avant Jésus-Christ. La Gītā elle-même est généralement datée entre le Ve et le IIe siècle avant Jésus-Christ.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La Gītā comme synthèse des traditions védiques, upanishadiques et yogiques</h3>
              <p>
                La Gītā représente une synthèse remarquable des différentes traditions spirituelles de l'Inde ancienne. Elle intègre les enseignements des Védas sur le sacrifice et le devoir (dharma), les spéculations métaphysiques des Upanishads sur la nature de l'Ātman et de Brahman, et les techniques pratiques des écoles yogiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Krishna : figure divine, avatāra de Vishnu, guru suprême</h3>
              <p>
                Krishna joue un rôle multiple dans la Gītā : il est à la fois l'avatāra (incarnation) de Vishnu, le dieu suprême qui maintient l'ordre cosmique (dharma), et le guru (maître spirituel) personnel d'Arjuna.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Arjuna : symbole de l'être humain confronté au dilemme moral</h3>
              <p>
                Arjuna représente l'humanité dans toute sa complexité : courageux guerrier mais confronté à des dilemmes moraux profonds, capable d'action mais paralysé par la compassion et le doute.
              </p>
            </div>
          </section>

          {/* III. Structure interne */}
          <section id="structure">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. Structure interne de la Bhagavad Gītā</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Organisation générale des 18 chapitres</h3>
              <p>
                La Bhagavad Gītā est structurée en 18 chapitres (adhyāya), chacun portant un titre spécifique qui indique son contenu principal. Cette organisation en 18 parties correspond symboliquement aux 18 livres du Mahābhārata et aux 18 aksharas (syllabes) du mantra sacré "Om".
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">Chapitres 1–6</h4>
                      <p className="text-sm">Karma yoga et Dhyāna yoga</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">Chapitres 7–12</h4>
                      <p className="text-sm">Bhakti yoga et nature divine</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">Chapitres 13–18</h4>
                      <p className="text-sm">Synthèse philosophique</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les trois grandes voies : action, connaissance, dévotion</h3>
              <p>
                La Gītā présente trois voies spirituelles principales qui correspondent aux trois aspects fondamentaux de la nature humaine : le karma yoga pour ceux qui sont actifs, le jñāna yoga pour ceux qui sont intellectuels, et le bhakti yoga pour ceux qui sont émotionnels.
              </p>
            </div>
          </section>

          {/* IV. Symbolisme */}
          <section id="symbolisme">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Symbolisme de la scène de Kurukshetra</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sword className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Champ de bataille intérieur</h4>
                    </div>
                    <p className="text-sm">
                      Le champ de bataille symbolise la lutte intérieure de chaque être humain entre les forces positives et négatives, entre le devoir et l'attachement.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Tendances psychologiques</h4>
                    </div>
                    <p className="text-sm">
                      Les Kauravas représentent les tendances égoïstes, tandis que les Pāndavas symbolisent les qualités nobles et spirituelles.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Corps et facultés</h4>
                    </div>
                    <p className="text-sm">
                      Le char d'Arjuna symbolise le corps humain, avec ses cinq chevaux représentant les cinq sens.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Conscience pure</h4>
                    </div>
                    <p className="text-sm">
                      Krishna représente la conscience pure (Ātman) qui guide l'âme empirique (Arjuna) à travers les dilemmes de l'existence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* V. Les grands enseignements philosophiques */}
          <section id="enseignements">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Les grands enseignements philosophiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Le Yoga de l'Action — Karma Yoga</h3>
              <p>
                Le karma yoga enseigne à agir sans attachement aux résultats. Cette voie spirituelle transforme le travail quotidien en sacrifice spirituel, permettant à l'individu de se libérer des liens de l'action tout en remplissant ses devoirs dans le monde.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Le Yoga de la Connaissance — Jñāna Yoga</h3>
              <p>
                Le jñāna yoga développe la discrimination entre le Soi éternel (Ātman) et le non-Soi temporaire (corps, esprit, émotions). La connaissance libératrice vient de la réalisation directe de l'identité entre l'Ātman individuel et le Brahman universel.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Le Yoga de la Dévotion — Bhakti Yoga</h3>
              <p>
                Le bhakti yoga cultive un amour dévoué et personnel pour le divin. Le surrender (śaraṇāgati) implique un abandon total de l'ego et de ses prétentions devant la divinité.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Le Yoga de la Méditation — Dhyāna / Raja Yoga</h3>
              <p>
                Le dhyāna yoga développe la maîtrise mentale et la concentration profonde. La conscience unifiée (samādhi) représente l'état ultime où le méditant, l'objet de méditation et le processus de méditation ne forment plus qu'un.
              </p>
            </div>
          </section>

          {/* VI. Les concepts métaphysiques centraux */}
          <section id="metaphysique">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Les concepts métaphysiques centraux</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les trois guna : sattva, rajas, tamas</h3>
              <p>
                Les trois gunas (qualités) constituent les forces dynamiques fondamentales de la nature (prakriti). Le sattva représente l'équilibre, la pureté et la connaissance; le rajas symbolise l'activité, la passion et l'agitation; le tamas incarne l'inertie, l'ignorance et l'obscurité.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le Soi (ātman) et le Seigneur Suprême (Īśvara)</h3>
              <p>
                La Gītā distingue entre l'Ātman (soi individuel) et Īśvara (Seigneur Suprême). Dans certains passages, ils sont présentés comme distincts; dans d'autres, ils sont identifiés, avec Īśvara comme Ātman suprême résidant dans le cœur de tous les êtres.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'univers comme manifestation de Krishna</h3>
              <p>
                La vision cosmique de Krishna (Viśvarūpa Darśana) révèle l'univers entier comme manifestation de la divinité. Cette révélation transcende la perception ordinaire pour montrer que toute existence émane de la conscience divine.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Moksha : libération par la connaissance, l'action juste, ou la dévotion</h3>
              <p>
                La Gītā enseigne que la libération peut être atteinte par plusieurs voies : la connaissance spirituelle (jñāna), l'action désintéressée (karma yoga), ou la dévotion exclusive (bhakti). Cette pluralité des moyens rend la réalisation spirituelle accessible à tous.
              </p>
            </div>
          </section>

          {/* VII. Chapitres et enseignements majeurs */}
          <section id="chapitres">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Chapitres et enseignements majeurs</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chapitre 2 : La sagesse du Samkhya</h3>
              <p>
                Ce chapitre fondamental établit les bases philosophiques de la Gītā. Krishna enseigne à Arjuna la distinction entre le Soi éternel (kshetrajña) et le champ d'expérience temporaire (kshetra).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chapitre 3 : Karma Yoga</h3>
              <p>
                Ce chapitre développe la voie de l'action désintéressée. Krishna explique que l'inaction n'est pas la solution au dilemme moral d'Arjuna, mais que l'action peut être transformée en sacrifice spirituel.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chapitre 11 : Vision de la forme cosmique</h3>
              <p>
                Ce chapitre culminant montre à Arjuna la forme cosmique de Krishna, révélant l'univers entier comme manifestation divine. Cette vision transcende toute compréhension ordinaire.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chapitres 14–18 : Synthèse et libération</h3>
              <p>
                Ces chapitres finaux offrent une synthèse complète des enseignements. Le message final est que l'abandon total à Dieu constitue la voie la plus directe vers la libération.
              </p>
            </div>
          </section>

          {/* VIII. La synthèse des voies spirituelles */}
          <section id="synthese">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. La synthèse des voies spirituelles</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Harmonisation du karma, jñāna et bhakti</h3>
              <p>
                La Gītā ne présente pas les trois voies spirituelles comme mutuellement exclusives mais comme complémentaires. La combinaison de l'action désintéressée, de la connaissance discriminante et de la dévotion fervente constitue l'idéal spirituel le plus complet.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Une voie universelle adaptée à l'homme actif</h3>
              <p>
                Contrairement à certaines traditions spirituelles qui exigent le retrait du monde, la Gītā enseigne que la réalisation spirituelle est possible même pour ceux qui mènent une vie active.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'éthique de l'action dans le monde</h3>
              <p>
                La Gītā développe une éthique complète pour l'action dans le monde. Elle enseigne que le devoir (dharma) doit être accompli avec compétence, sans attachement aux résultats, et dans un esprit de service désintéressé.
              </p>
            </div>
          </section>

          {/* IX. Approches interprétatives */}
          <section id="interpretations">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Approches interprétatives</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Commentaires traditionnels</h3>
              <p>
                Les trois grands commentateurs traditionnels offrent des interprétations distinctes : <strong className="text-foreground">Shankara</strong> (Advaita) voit l'identité absolue entre Ātman et Brahman; <strong className="text-foreground">Ramanuja</strong> (Vishishtadvaita) met l'accent sur la relation personnelle; <strong className="text-foreground">Madhva</strong> (Dvaita) maintient la distinction radicale.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Interprétations modernes</h3>
              <p>
                Les penseurs modernes ont redécouvert la Gītā : <strong className="text-foreground">Vivekananda</strong> a mis l'accent sur la force spirituelle; <strong className="text-foreground">Aurobindo</strong> sur l'évolution divine; <strong className="text-foreground">Gandhi</strong> sur la non-violence active et le sacrifice personnel.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La Gītā comme manuel de transformation intérieure</h3>
              <p>
                De nombreux maîtres spirituels modernes présentent la Gītā comme un manuel pratique pour la transformation intérieure. Ses enseignements sur la maîtrise de soi, la discrimination spirituelle et l'amour désintéressé constituent un programme complet de développement personnel et spirituel.
              </p>
            </div>
          </section>

          {/* X. Grille pratique de lecture */}
          <section id="pratique">
            <h2 className="text-2xl font-serif text-foreground mb-6">X. Grille pratique de lecture</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Comment lire la Gītā aujourd'hui</h3>
              
              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Lecture méditative quotidienne (1 shloka/jour)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Choisir un verset qui résonne particulièrement</li>
                    <li>• Lire lentement plusieurs fois</li>
                    <li>• Méditer sur sa signification profonde</li>
                    <li>• Appliquer l'enseignement à sa vie quotidienne</li>
                    <li>• Revenir au même verset périodiquement</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Traductions recommandées</h3>
              <ul className="space-y-2">
                <li>• Traduction de Swami Prabhupada (Bhaktivedanta Institute)</li>
                <li>• Traduction de Swami Chinmayananda (Chinmaya Mission)</li>
                <li>• Traduction de Sri Aurobindo (Aurobindo Ashram)</li>
                <li>• Traduction de Eknath Easwaran (Nilgiri Press)</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">XI. Conclusion générale</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-foreground mb-2 italic">
                    « Tu as le droit d'accomplir ton devoir, mais non de récolter les fruits de ton action. »
                  </p>
                  <p className="text-sm text-muted-foreground">— Bhagavad Gītā II.47</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La Gītā comme synthèse de la sagesse indienne</h3>
              <p>
                La Bhagavad Gītā représente l'aboutissement et la synthèse de plusieurs millénaires de réflexion spirituelle en Inde. Elle intègre les enseignements des Védas sur le sacrifice et le devoir, les spéculations métaphysiques des Upanishads, les techniques pratiques du yoga, et les développements dévotionnels du bhakti.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Message intemporel</h3>
              <p>
                Le message central de la Gītā est que la réalisation spirituelle n'exige pas le retrait du monde mais une transformation de notre manière d'être dans le monde. Agir avec lucidité, aimer avec profondeur, connaître avec discernement.
              </p>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-serif text-foreground mb-2">Shanti, Shanti, Shanti</h4>
                  <p className="text-foreground italic">
                    Paix, Paix, Paix — Que la paix règne en nous, autour de nous et partout dans l'univers.
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

export default BhagavadGita;
