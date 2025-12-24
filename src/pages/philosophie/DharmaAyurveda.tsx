import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Shield, Sun, Moon, Leaf, Clock, BookOpen, Eye, Star, ArrowRight, ChevronRight, AlertTriangle, Compass, Lightbulb, Users, Zap, Flame, Droplets, Wind, Brain, Sparkles, Timer, Calendar, Sunrise, Sunset, Activity, Target } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "fondements", title: "I. Fondements" },
  { id: "prajnaparadha", title: "II. Prajñāparādha" },
  { id: "dinacharya", title: "III. Dinacharya" },
  { id: "samprapti", title: "IV. Samprapti" },
  { id: "ashrama", title: "V. Āśrama Dharma" },
  { id: "ritucharya", title: "VI. Ṛtucharya" },
  { id: "marana", title: "VII. Maraṇa" },
  { id: "conclusion", title: "Conclusion" },
];

const DharmaAyurveda = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Le Dharma en Ayurveda : La Loi Intérieure | Philosophie Védique | Arkadhya</title>
        <meta name="description" content="Traité complet sur le Dharma en Ayurveda : les 4 Puruṣārthas, Prajñāparādha, Dinacharya, Samprapti, Āśrama Dharma, Ṛtucharya et Maraṇa." />
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground">
                Le Dharma en Ayurveda : <span className="text-primary">La Loi Intérieure</span>
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Traité sur l'ordre universel et la voie de l'équilibre
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Lecture estimée : 90-120 minutes — Un voyage au cœur de la sagesse védique appliquée à la vie
          </p>
        </div>
      </section>

      {/* Table of Contents - Sticky */}
      <section className="py-4 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors whitespace-nowrap text-foreground"
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Introduction */}
          <section id="introduction">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  Introduction — Qu'est-ce que le Dharma ?
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Le mot <strong className="text-foreground">Dharma</strong> (धर्म) dérive de la racine sanskrite 
                    <em> dhṛ</em>, qui signifie « soutenir », « maintenir », « porter ». Le Dharma est donc ce qui 
                    <strong className="text-foreground"> soutient l'existence</strong>, ce qui maintient l'ordre cosmique 
                    et individuel, ce qui porte l'être vers sa réalisation.
                  </p>
                  
                  <Card className="bg-secondary/30 border-secondary my-6">
                    <CardContent className="p-6">
                      <p className="text-lg font-medium text-foreground italic">
                        "dharmo rakṣati rakṣitaḥ"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        « Le Dharma protège celui qui le protège. »
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">— Manusmṛti 8.15</p>
                    </CardContent>
                  </Card>

                  <p>
                    En Ayurveda, le Dharma n'est pas un concept abstrait : c'est la <strong className="text-foreground">loi 
                    vivante</strong> qui régit chaque aspect de l'existence — de la respiration à la digestion, 
                    du sommeil à l'éveil, de la naissance à la mort. Vivre selon son Dharma, c'est vivre en 
                    <strong className="text-foreground"> harmonie avec sa propre nature</strong> (Prakṛti) et avec 
                    l'ordre cosmique (Ṛta).
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Quatre Puruṣārthas</h3>
                  <p>
                    La tradition védique enseigne que la vie humaine vise quatre buts fondamentaux, 
                    les <strong className="text-foreground">Puruṣārthas</strong> :
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="bg-card/50 border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Shield className="w-5 h-5 text-emerald-500" />
                          1. Dharma (धर्म)
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          L'ordre, la vertu, le devoir. Fondement de tous les autres buts. 
                          Sans Dharma, les autres deviennent sources de souffrance.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Target className="w-5 h-5 text-amber-500" />
                          2. Artha (अर्थ)
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          La prospérité, les moyens matériels. Nécessaire pour vivre dignement 
                          et soutenir les autres, mais guidé par le Dharma.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Heart className="w-5 h-5 text-rose-500" />
                          3. Kāma (काम)
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Le plaisir, le désir, l'amour. L'épanouissement sensoriel et émotionnel, 
                          dans les limites du Dharma.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 border-primary/20">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Star className="w-5 h-5 text-violet-500" />
                          4. Mokṣa (मोक्ष)
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          La libération, la réalisation spirituelle. Le but ultime vers lequel 
                          convergent tous les autres, correctement vécus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-primary/5 border-primary/20 my-6">
                    <CardContent className="p-6">
                      <p className="text-lg font-medium text-foreground italic">
                        "dharma eva hato hanti dharmo rakṣati rakṣitaḥ<br/>
                        tasmād dharmo na hantavyo mā no dharmo hato'vadhīt"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        « Le Dharma, s'il est violé, détruit ; s'il est protégé, il protège.<br/>
                        C'est pourquoi le Dharma ne doit jamais être violé, de peur que le Dharma violé ne nous détruise. »
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">— Mahābhārata, Vana Parva 313.128</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section I - Fondements Conceptuels */}
          <section id="fondements">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-indigo-500" />
              I. Les Fondements Conceptuels
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Trois Piliers de la Vie (Upastambhas)</h3>
              <p>
                L'Ayurveda enseigne que la vie repose sur <strong className="text-foreground">trois piliers fondamentaux</strong> 
                (Trayopastambha). Leur équilibre est essentiel à la santé :
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-amber-500/10 border-amber-500/30">
                  <CardContent className="p-4 text-center">
                    <Flame className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Āhāra</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Nourriture — Ce que nous ingérons par tous les sens, pas seulement la bouche
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-500/10 border-blue-500/30">
                  <CardContent className="p-4 text-center">
                    <Moon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Nidrā</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Sommeil — Régénération et intégration des expériences
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-violet-500/10 border-violet-500/30">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-8 h-8 text-violet-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Brahmacarya</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Maîtrise de l'énergie vitale — Gestion consciente des sens et de la sexualité
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Svadharma vs Paradharma</h3>
              <p>
                La Bhagavad Gītā distingue le <strong className="text-foreground">Svadharma</strong> (son propre dharma) 
                du <strong className="text-foreground">Paradharma</strong> (le dharma d'autrui) :
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "śreyān svadharmo viguṇaḥ paradharmāt svanuṣṭhitāt<br/>
                    svadharme nidhanaṁ śreyaḥ paradharmo bhayāvahaḥ"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Mieux vaut son propre dharma, même imparfaitement accompli, que le dharma d'autrui bien exécuté.<br/>
                    Mieux vaut mourir dans son propre dharma ; le dharma d'autrui est source de peur. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Bhagavad Gītā 3.35</p>
                </CardContent>
              </Card>

              <p>
                En Ayurveda, cela se traduit par le respect de sa <strong className="text-foreground">Prakṛti</strong> 
                (constitution natale). Un individu Vāta ne doit pas essayer de vivre comme un Kapha, 
                et vice versa. Chaque constitution a son propre chemin vers l'équilibre.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Dix Caractéristiques du Dharma</h3>
              <p>
                Le <strong className="text-foreground">Manusmṛti</strong> (6.92) énumère dix qualités essentielles du Dharma :
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 my-6">
                {[
                  { name: "Dhṛti", meaning: "Patience, constance" },
                  { name: "Kṣamā", meaning: "Pardon" },
                  { name: "Dama", meaning: "Maîtrise de soi" },
                  { name: "Asteya", meaning: "Non-vol" },
                  { name: "Śauca", meaning: "Pureté" },
                  { name: "Indriya-nigraha", meaning: "Contrôle des sens" },
                  { name: "Dhī", meaning: "Sagesse" },
                  { name: "Vidyā", meaning: "Connaissance" },
                  { name: "Satya", meaning: "Vérité" },
                  { name: "Akrodha", meaning: "Non-colère" },
                ].map((item, i) => (
                  <Card key={i} className="bg-card/50 border-border">
                    <CardContent className="p-3 text-center">
                      <p className="font-semibold text-foreground text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.meaning}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Contemplation
                  </h4>
                  <p className="text-muted-foreground italic">
                    Parmi ces dix qualités, laquelle est la plus développée en vous ? 
                    Laquelle demande le plus de travail ? Comment pourriez-vous la cultiver 
                    dans votre vie quotidienne ?
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section II - Prajñāparādha */}
          <section id="prajnaparadha">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-rose-500" />
              II. Prajñāparādha — Le Crime Contre la Sagesse
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                <strong className="text-foreground">Prajñāparādha</strong> (प्रज्ञापराध) est littéralement le 
                « crime contre la sagesse » ou « l'offense contre l'intelligence ». C'est la 
                <strong className="text-foreground"> racine de toutes les maladies</strong> selon l'Ayurveda.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "dhī-dhṛti-smṛti-vibhraṣṭaḥ karma yat kurute'śubham<br/>
                    prajñāparādhaṁ taṁ vidyāt sarva-doṣa-prakopakam"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Lorsque l'intellect (Dhī), la volonté (Dhṛti) et la mémoire (Smṛti) sont corrompus,<br/>
                    les actions néfastes qui en résultent sont connues comme Prajñāparādha,<br/>
                    qui provoque l'aggravation de tous les doṣas. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Caraka Saṃhitā, Śārīrasthāna 1.102</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Trois Facultés Mentales</h3>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Brain className="w-5 h-5 text-indigo-500" />
                      Dhī (धी)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>L'intellect discriminant</strong> — La capacité de distinguer le bénéfique 
                      du nuisible, le réel de l'illusoire.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Shield className="w-5 h-5 text-emerald-500" />
                      Dhṛti (धृति)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>La volonté, la constance</strong> — La force de suivre ce que l'intellect 
                      a reconnu comme juste, malgré les tentations.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-500" />
                      Smṛti (स्मृति)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>La mémoire</strong> — Le souvenir des expériences passées et des enseignements 
                      reçus, qui guide les choix présents.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Trois Erreurs Fondamentales</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Type d'erreur</th>
                      <th className="p-3 text-left text-foreground">Description</th>
                      <th className="p-3 text-left text-foreground">Exemples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Asātmya-indriyārtha-saṃyoga</td>
                      <td className="p-3">Mauvais usage des sens</td>
                      <td className="p-3">Excès (trop de bruit), déficit (privation sensorielle), perversion (pornographie)</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Prajñāparādha</td>
                      <td className="p-3">Transgression de l'intelligence</td>
                      <td className="p-3">Manger sans faim, veiller tard en sachant les conséquences, réprimer les besoins naturels</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Pariṇāma</td>
                      <td className="p-3">Mauvaise gestion du temps</td>
                      <td className="p-3">Ignorer les cycles (saisons, âge), ne pas adapter son régime au temps</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Comment éviter Prajñāparādha ?</h3>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Cultiver Dhī</strong> : étude des textes sacrés, réflexion, méditation, compagnie des sages</li>
                <li>• <strong className="text-foreground">Renforcer Dhṛti</strong> : pratiques régulières, tapas (discipline), engagements progressifs</li>
                <li>• <strong className="text-foreground">Nourrir Smṛti</strong> : journal spirituel, révision des enseignements, rituels de rappel</li>
                <li>• <strong className="text-foreground">Satsaṅga</strong> : compagnie de personnes qui vivent selon le Dharma</li>
              </ul>

              <Card className="bg-amber-500/10 border-amber-500/30 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Le Paradoxe de Prajñāparādha
                  </h4>
                  <p className="text-muted-foreground">
                    Nous savons souvent ce qui est bon pour nous — et pourtant nous faisons le contraire. 
                    Ce n'est pas un manque de connaissance, mais une <strong className="text-foreground">déconnexion</strong> 
                    entre la connaissance intellectuelle et la sagesse incarnée. 
                    L'Ayurveda vise à rétablir cette connexion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section III - Dinacharya */}
          <section id="dinacharya">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Sun className="w-6 h-6 text-amber-500" />
              III. Dinacharya — Le Dharma Quotidien
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                <strong className="text-foreground">Dinacharya</strong> (दिनचर्या) signifie littéralement 
                « conduite du jour ». C'est la <strong className="text-foreground">structuration sacrée du temps quotidien</strong>, 
                alignant les activités humaines sur les rythmes cosmiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Cycles Doṣiques du Jour</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Période</th>
                      <th className="p-3 text-left text-foreground">Doṣa dominant</th>
                      <th className="p-3 text-left text-foreground">Qualités</th>
                      <th className="p-3 text-left text-foreground">Activités recommandées</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">2h - 6h</td>
                      <td className="p-3">Vāta</td>
                      <td className="p-3">Léger, subtil, créatif</td>
                      <td className="p-3">Méditation, éveil (Brahma Muhūrta : 4h-6h)</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">6h - 10h</td>
                      <td className="p-3">Kapha</td>
                      <td className="p-3">Lourd, stable, lent</td>
                      <td className="p-3">Exercice, petit-déjeuner léger, travail actif</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">10h - 14h</td>
                      <td className="p-3">Pitta</td>
                      <td className="p-3">Chaud, intense, digestif</td>
                      <td className="p-3">Repas principal, travail intellectuel</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">14h - 18h</td>
                      <td className="p-3">Vāta</td>
                      <td className="p-3">Mobile, dispersé</td>
                      <td className="p-3">Communication, créativité, goûter léger</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">18h - 22h</td>
                      <td className="p-3">Kapha</td>
                      <td className="p-3">Calme, nourrissant</td>
                      <td className="p-3">Dîner léger (avant 19h), détente, coucher</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">22h - 2h</td>
                      <td className="p-3">Pitta</td>
                      <td className="p-3">Régénération interne</td>
                      <td className="p-3">Sommeil profond (réparation hépatique)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Douze Pratiques Essentielles du Matin</h3>
              
              <Accordion type="multiple" className="space-y-3 my-6">
                <AccordionItem value="1" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">1</span>
                      <span>Brahma Muhūrta — Éveil avant l'aube</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Se lever 96 minutes avant le lever du soleil (≈ 4h-6h). C'est le moment où 
                    Sattva (pureté) domine l'atmosphère. L'esprit est clair, propice à la méditation et à l'étude.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="2" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">2</span>
                      <span>Mala Tyāga — Élimination</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Évacuer les selles, urines et autres déchets. Ne jamais réprimer ces besoins naturels (Adharaniya Vegas). 
                    L'idéal est une élimination spontanée au réveil.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="3" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">3</span>
                      <span>Jihvā Nirlekhana — Nettoyage de la langue</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Gratter la langue avec un gratte-langue en cuivre ou argent (7 à 14 passages). 
                    Élimine l'Āma (toxines) accumulé pendant la nuit, stimule les organes par réflexologie.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="4" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">4</span>
                      <span>Danta Dhāvana — Brossage des dents</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Avec des poudres ou pâtes à base de plantes amères, piquantes ou astringentes 
                    (neem, clou de girofle, réglisse). Évite les dentifrices industriels trop agressifs.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="5" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">5</span>
                      <span>Ganḍūṣa / Kavala — Bain de bouche à l'huile</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Ganḍūṣa : remplir la bouche d'huile de sésame et tenir 5-10 minutes. 
                    Kavala : gargarisme actif. Renforce les gencives, dents, mâchoires, voix.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="6" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">6</span>
                      <span>Añjana — Application de collyre</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Application de collyre (généralement à base de triphala ou antimoine) pour clarifier la vision, 
                    prévenir les maladies oculaires, éliminer les impuretés.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="7" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">7</span>
                      <span>Nasya — Huile nasale</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Instillation de quelques gouttes d'huile (sésame, Anu Taila) dans les narines. 
                    Le nez est la « porte de la tête » (Śirodvāra). Clarifie les sinus et l'esprit.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="8" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">8</span>
                      <span>Abhyaṅga — Auto-massage à l'huile</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Massage de tout le corps avec de l'huile tiède (sésame pour Vāta, coco pour Pitta, moutarde pour Kapha). 
                    Nourrit la peau, calme le système nerveux, renforce l'immunité.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="9" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">9</span>
                      <span>Vyāyāma — Exercice physique</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Exercice modéré jusqu'à 50% de sa capacité (quand la transpiration apparaît au front et aux aisselles). 
                    Jamais jusqu'à l'épuisement. Adapté à la constitution et à la saison.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="10" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">10</span>
                      <span>Snāna — Bain</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Bain tiède (jamais trop chaud sur la tête). Purifie le corps et l'esprit, 
                    stimule Agni, élimine la fatigue. L'eau chaude sous la taille, tiède au-dessus.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="11" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">11</span>
                      <span>Vastra Dhāraṇa — Vêtements</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Porter des vêtements propres, en fibres naturelles, de couleurs harmonieuses. 
                    Les vêtements affectent l'humeur et l'énergie. Éviter les vêtements sales ou synthétiques.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="12" className="bg-card/50 border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-foreground hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-semibold">12</span>
                      <span>Dhyāna & Prārthanā — Méditation et prière</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p>Pratiques spirituelles quotidiennes : méditation, récitation de mantras, prière. 
                    Ancre la journée dans le sacré, aligne l'individu avec le Dharma cosmique.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Pratique progressive
                  </h4>
                  <p className="text-muted-foreground">
                    N'essayez pas d'adopter toutes ces pratiques d'un coup ! Commencez par 2-3 qui vous attirent, 
                    pratiquez-les pendant 40 jours, puis ajoutez-en d'autres progressivement. 
                    La constance vaut mieux que l'intensité.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section IV - Samprapti */}
          <section id="samprapti">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-rose-500" />
              IV. Samprapti — La Pathogenèse
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                <strong className="text-foreground">Samprapti</strong> (सम्प्राप्ति) est la science de la pathogenèse — 
                comment la maladie se développe étape par étape. Comprendre Samprapti permet d'<strong className="text-foreground">intervenir 
                précocement</strong>, avant que la maladie ne se manifeste pleinement.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Six Stades de la Maladie (Ṣaṭ-Kriyākāla)</h3>
              
              <div className="space-y-4 my-6">
                <Card className="bg-emerald-500/10 border-emerald-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-600 font-semibold">1</span>
                      <h4 className="font-semibold text-foreground">Sañcaya — Accumulation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Le doṣa commence à s'accumuler dans son site d'origine (Vāta dans le côlon, Pitta dans l'intestin grêle, 
                      Kapha dans l'estomac). <strong>Signes subtils</strong> : légère lourdeur, fatigue vague.
                    </p>
                    <p className="text-xs text-emerald-600 mt-2">
                      <strong>Intervention :</strong> Ajustement du régime et du mode de vie. Très facile à corriger.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-amber-500/10 border-amber-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-600 font-semibold">2</span>
                      <h4 className="font-semibold text-foreground">Prakopa — Aggravation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Le doṣa accumulé s'aggrave, s'agite. Il « bouillonne » dans son site. 
                      <strong>Signes</strong> : inconfort digestif, irritabilité, troubles du sommeil.
                    </p>
                    <p className="text-xs text-amber-600 mt-2">
                      <strong>Intervention :</strong> Régime apaisant, plantes simples. Encore facile.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-orange-500/10 border-orange-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-600 font-semibold">3</span>
                      <h4 className="font-semibold text-foreground">Prasara — Débordement</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Le doṣa déborde de son site et commence à circuler dans le corps via les canaux (Srotas). 
                      <strong>Signes</strong> : symptômes qui « migrent », inconfort généralisé.
                    </p>
                    <p className="text-xs text-orange-600 mt-2">
                      <strong>Intervention :</strong> Panchakarma préventif, traitement plus soutenu. Point critique.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-rose-500/10 border-rose-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-600 font-semibold">4</span>
                      <h4 className="font-semibold text-foreground">Sthāna Saṃśraya — Localisation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Le doṣa se fixe dans un tissu ou organe vulnérable (point faible génétique, blessure ancienne). 
                      <strong>Signes prodromiques</strong> : symptômes précurseurs spécifiques à la maladie à venir.
                    </p>
                    <p className="text-xs text-rose-600 mt-2">
                      <strong>Intervention :</strong> Traitement ciblé. La maladie n'est pas encore installée mais imminente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-red-500/10 border-red-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-600 font-semibold">5</span>
                      <h4 className="font-semibold text-foreground">Vyakti — Manifestation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      La maladie se manifeste pleinement avec tous ses signes et symptômes caractéristiques. 
                      C'est à ce stade que la médecine occidentale pose généralement un diagnostic.
                    </p>
                    <p className="text-xs text-red-600 mt-2">
                      <strong>Intervention :</strong> Traitement complet. Plus difficile mais encore réversible.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-violet-500/10 border-violet-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-violet-500/20 rounded-full flex items-center justify-center text-violet-600 font-semibold">6</span>
                      <h4 className="font-semibold text-foreground">Bheda — Chronicité / Complication</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      La maladie devient chronique, produit des complications, affecte d'autres organes. 
                      Différenciation des sous-types pathologiques.
                    </p>
                    <p className="text-xs text-violet-600 mt-2">
                      <strong>Intervention :</strong> Traitement palliatif, gestion à long terme. Guérison difficile.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Signes d'Accumulation par Doṣa</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Doṣa</th>
                      <th className="p-3 text-left text-foreground">Signes de Sañcaya</th>
                      <th className="p-3 text-left text-foreground">Signes de Prakopa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Vāta</td>
                      <td className="p-3">Ballonnements, constipation légère, raideur</td>
                      <td className="p-3">Douleurs erratiques, anxiété, insomnie</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Pitta</td>
                      <td className="p-3">Chaleur digestive, soif accrue, teint jaunâtre</td>
                      <td className="p-3">Acidité, irritabilité, inflammations</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Kapha</td>
                      <td className="p-3">Lourdeur, perte d'appétit, léthargie</td>
                      <td className="p-3">Nausées, congestion, attachement excessif</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-amber-500/10 border-amber-500/30 my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    L'Art de la Prévention
                  </h4>
                  <p className="text-muted-foreground">
                    L'Ayurveda excelle dans les <strong className="text-foreground">stades 1 à 3</strong>, 
                    là où la médecine moderne n'a souvent rien à « traiter » car il n'y a pas encore de « maladie ». 
                    Être attentif aux signes subtils permet d'éviter la plupart des maladies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section V - Āśrama Dharma */}
          <section id="ashrama">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-teal-500" />
              V. Āśrama Dharma — Les Quatre Stades de la Vie
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                La tradition védique divise la vie humaine en <strong className="text-foreground">quatre Āśramas</strong> (stades), 
                chacun avec ses devoirs spécifiques, ses pratiques et son Dharma propre.
              </p>

              <Accordion type="multiple" className="space-y-4 my-6">
                <AccordionItem value="brahmacarya" className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-indigo-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Brahmacarya Āśrama</h4>
                        <p className="text-sm text-muted-foreground">L'Étudiant — 0 à 25 ans</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Phase de <strong className="text-foreground">formation et d'apprentissage</strong>. 
                        Le jeune vit auprès d'un maître (Guru), étudie les textes sacrés, développe discipline et caractère.
                      </p>
                      <h5 className="font-semibold text-foreground">Devoirs principaux :</h5>
                      <ul className="space-y-1">
                        <li>• Étude des Vedas et des sciences</li>
                        <li>• Service au Guru (Guru Sevā)</li>
                        <li>• Celibat et conservation de l'énergie vitale</li>
                        <li>• Développement de la discipline (Tapas)</li>
                        <li>• Acquisition des compétences pour la vie</li>
                      </ul>
                      <h5 className="font-semibold text-foreground mt-4">Doṣa dominant de cette phase :</h5>
                      <p>Kapha — construction du corps, stabilité, apprentissage</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="grihastha" className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Gṛhastha Āśrama</h4>
                        <p className="text-sm text-muted-foreground">Le Maître de Maison — 25 à 50 ans</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Phase de <strong className="text-foreground">vie active et sociale</strong>. 
                        Mariage, famille, profession, service à la communauté. C'est l'Āśrama qui soutient tous les autres.
                      </p>
                      <h5 className="font-semibold text-foreground">Les Cinq Mahāyajñas (Grands Sacrifices quotidiens) :</h5>
                      <div className="grid md:grid-cols-2 gap-3 my-3">
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3">
                            <p className="font-medium text-foreground text-sm">Brahma Yajña</p>
                            <p className="text-xs">Étude et enseignement des Vedas</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3">
                            <p className="font-medium text-foreground text-sm">Deva Yajña</p>
                            <p className="text-xs">Rituels aux divinités (Pūjā, Homa)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3">
                            <p className="font-medium text-foreground text-sm">Pitṛ Yajña</p>
                            <p className="text-xs">Honorer les ancêtres (Śrāddha)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50">
                          <CardContent className="p-3">
                            <p className="font-medium text-foreground text-sm">Manuṣya Yajña</p>
                            <p className="text-xs">Service aux êtres humains (hospitalité)</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-card/30 border-border/50 md:col-span-2">
                          <CardContent className="p-3">
                            <p className="font-medium text-foreground text-sm">Bhūta Yajña</p>
                            <p className="text-xs">Offrandes aux créatures (animaux, esprits, nature)</p>
                          </CardContent>
                        </Card>
                      </div>
                      <h5 className="font-semibold text-foreground mt-4">Doṣa dominant de cette phase :</h5>
                      <p>Pitta — ambition, transformation, accomplissement</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vanaprastha" className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Vānaprastha Āśrama</h4>
                        <p className="text-sm text-muted-foreground">Le Retraité — 50 à 75 ans</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Phase de <strong className="text-foreground">retrait progressif</strong>. 
                        Transmission des responsabilités à la génération suivante, simplification de vie, 
                        tournée vers la spiritualité.
                      </p>
                      <h5 className="font-semibold text-foreground">Caractéristiques :</h5>
                      <ul className="space-y-1">
                        <li>• Réduction des attachements matériels</li>
                        <li>• Transmission de la sagesse aux jeunes</li>
                        <li>• Pèlerinages et retraites spirituelles</li>
                        <li>• Préparation à la phase finale</li>
                        <li>• Vie plus contemplative</li>
                      </ul>
                      <h5 className="font-semibold text-foreground mt-4">Doṣa dominant de cette phase :</h5>
                      <p>Début de Vāta — légèreté, détachement, sagesse</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sannyasa" className="bg-violet-500/5 border border-violet-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-violet-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Sannyāsa Āśrama</h4>
                        <p className="text-sm text-muted-foreground">Le Renonçant — 75 ans et au-delà</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Phase de <strong className="text-foreground">renoncement total</strong>. 
                        Abandon de toutes les attaches mondaines, consécration exclusive à la réalisation spirituelle.
                      </p>
                      <h5 className="font-semibold text-foreground">Caractéristiques :</h5>
                      <ul className="space-y-1">
                        <li>• Vie d'errance ou de réclusion</li>
                        <li>• Méditation et contemplation continues</li>
                        <li>• Détachement complet du nom, de la famille, des possessions</li>
                        <li>• Enseignement par l'exemple</li>
                        <li>• Préparation consciente à la mort</li>
                      </ul>
                      <h5 className="font-semibold text-foreground mt-4">Doṣa dominant de cette phase :</h5>
                      <p>Vāta — subtilité, mouvement vers la libération</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Adaptation moderne
                  </h4>
                  <p className="text-muted-foreground">
                    Ces âges sont symboliques, non rigides. L'important est de <strong className="text-foreground">honorer 
                    chaque phase</strong> : ne pas fuir les responsabilités de Gṛhastha, mais ne pas non plus s'y 
                    accrocher quand vient le temps du détachement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section VI - Ṛtucharya */}
          <section id="ritucharya">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-emerald-500" />
              VI. Ṛtucharya — Le Dharma Saisonnier
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                <strong className="text-foreground">Ṛtucharya</strong> (ऋतुचर्या) est la science de vivre en harmonie 
                avec les saisons. Les six saisons indiennes peuvent être adaptées aux quatre saisons occidentales.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Adaptation aux Saisons Occidentales</h3>

              <Accordion type="multiple" className="space-y-4 my-6">
                <AccordionItem value="printemps" className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Printemps (Vasanta)</h4>
                        <p className="text-sm text-muted-foreground">Mars - Mai • Kapha aggravé</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Le Kapha accumulé en hiver <strong className="text-foreground">fond</strong> avec le réchauffement, 
                        provoquant allergies, congestion, léthargie printanière.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Alimentation recommandée :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Saveurs piquantes, amères, astringentes</li>
                            <li>• Miel, gingembre, poivre</li>
                            <li>• Légumes verts amers, germes</li>
                            <li>• Éviter : produits laitiers, sucré, gras</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Pratiques recommandées :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Exercice vigoureux</li>
                            <li>• Massages secs (Udvartana)</li>
                            <li>• Nettoyage du corps (Panchakarma printanier)</li>
                            <li>• Jeûne ou repas légers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ete" className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <Sun className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Été (Grīṣma)</h4>
                        <p className="text-sm text-muted-foreground">Juin - Août • Pitta accumulé puis aggravé</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        La chaleur <strong className="text-foreground">accumule Pitta</strong>. Risque d'inflammations, 
                        irritabilité, problèmes de peau, brûlures digestives.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Alimentation recommandée :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Saveurs sucrées, amères, astringentes</li>
                            <li>• Aliments frais : concombre, melon, menthe</li>
                            <li>• Lait, ghee, noix de coco</li>
                            <li>• Éviter : épicé, acide, salé, alcool</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Pratiques recommandées :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Éviter le soleil de midi</li>
                            <li>• Massages à l'huile de coco</li>
                            <li>• Bains frais, jardins ombragés</li>
                            <li>• Exercice modéré, tôt le matin</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="automne" className="bg-orange-500/5 border border-orange-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <Wind className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Automne (Śarad)</h4>
                        <p className="text-sm text-muted-foreground">Sept - Nov • Pitta aggravé, Vāta accumule</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Le Pitta accumulé en été <strong className="text-foreground">s'aggrave</strong> avec les dernières 
                        chaleurs. Vāta commence à s'accumuler avec les premiers froids.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Alimentation recommandée :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Saveurs sucrées, amères, astringentes</li>
                            <li>• Ghee, riz, blé, courges</li>
                            <li>• Eau de lune (exposée à la lune)</li>
                            <li>• Éviter : gras, épicé, fermenté</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Pratiques recommandées :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Virecana (purge) d'automne</li>
                            <li>• Marcher au clair de lune</li>
                            <li>• Porter des vêtements blancs</li>
                            <li>• Sandalwood, camphre, perles</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hiver" className="bg-blue-500/5 border border-blue-500/20 rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Hiver (Hemanta/Śiśira)</h4>
                        <p className="text-sm text-muted-foreground">Déc - Fév • Vāta aggravé, Kapha accumule</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Le froid <strong className="text-foreground">aggrave Vāta</strong> et commence à <strong className="text-foreground">accumuler Kapha</strong>. 
                        Paradoxalement, c'est la saison où Agni (feu digestif) est le plus fort.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Alimentation recommandée :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Repas nourrissants, chauds, onctueux</li>
                            <li>• Saveurs sucrées, acides, salées</li>
                            <li>• Ghee, sésame, viandes (si consommées)</li>
                            <li>• Lait chaud, soupes, ragoûts</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Pratiques recommandées :</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Abhyaṅga quotidien à l'huile de sésame</li>
                            <li>• Exercice vigoureux</li>
                            <li>• Vêtements chauds, cuir, laine</li>
                            <li>• Éviter le froid et le jeûne</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    « Celui qui connaît les saisons et adapte sa conduite en conséquence<br/>
                    jouit d'une vie longue, saine et pleine de vigueur. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Caraka Saṃhitā, Sūtrasthāna 6</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section VII - Maraṇa */}
          <section id="marana">
            <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-violet-500" />
              VII. Maraṇa — Le Dharma de la Mort
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              
              <p>
                <strong className="text-foreground">Maraṇa</strong> (मरण) signifie « mort ». Loin d'être un sujet morbide, 
                la contemplation de la mort est considérée comme essentielle à une vie <strong className="text-foreground">pleinement vécue</strong> 
                et à une mort <strong className="text-foreground">consciente</strong>.
              </p>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "na jāyate mriyate vā kadācin<br/>
                    nāyaṁ bhūtvā bhavitā vā na bhūyaḥ<br/>
                    ajo nityaḥ śāśvato 'yaṁ purāṇo<br/>
                    na hanyate hanyamāne śarīre"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « L'âme ne naît jamais et ne meurt jamais.<br/>
                    Elle n'a pas commencé à être et ne cessera pas d'être.<br/>
                    Non-née, éternelle, permanente, primordiale,<br/>
                    elle n'est pas tuée quand le corps est tué. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Bhagavad Gītā 2.20</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Trois Types de Mort</h3>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Kālaja Mṛtyu</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Mort naturelle</strong> — Au terme de l'Āyus (durée de vie) allouée. 
                      Le corps s'éteint naturellement, les tissus épuisés.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Akālaja Mṛtyu</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Mort prématurée</strong> — Avant le terme, due à des erreurs de vie, 
                      Prajñāparādha, accidents, violence.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Daivaja Mṛtyu</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Mort destinée</strong> — Résultant du karma passé, des forces 
                      cosmiques, « voulue » par le Divin.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Les Signes Précurseurs (Ariṣṭa Lakṣaṇa)</h3>
              <p>
                L'Ayurveda décrit des <strong className="text-foreground">signes</strong> indiquant qu'une mort 
                approche (dans les mois ou années à venir). Leur but n'est pas d'effrayer mais de permettre 
                une <strong className="text-foreground">préparation consciente</strong>.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-3 text-left text-foreground">Catégorie</th>
                      <th className="p-3 text-left text-foreground">Exemples de signes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Changements sensoriels</td>
                      <td className="p-3">Altération de la perception des sons, couleurs, odeurs, goûts</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Changements physiques</td>
                      <td className="p-3">Modification de l'ombre, perte soudaine de poids, teint terreux</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">Changements mentaux</td>
                      <td className="p-3">Désintérêt soudain pour la vie, visions, rêves récurrents</td>
                    </tr>
                    <tr className="border-t border-border bg-secondary/20">
                      <td className="p-3 font-medium text-foreground">Signes dans le pouls</td>
                      <td className="p-3">Pouls imperceptible ou erratique à certains points</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Préparation Spirituelle</h3>
              <ul className="space-y-2 my-4">
                <li>• <strong className="text-foreground">Résolution des conflits</strong> : pardonner et demander pardon</li>
                <li>• <strong className="text-foreground">Testament spirituel</strong> : transmettre sa sagesse, ses bénédictions</li>
                <li>• <strong className="text-foreground">Pratiques intensifiées</strong> : japa (répétition de mantras), méditation</li>
                <li>• <strong className="text-foreground">Détachement conscient</strong> : se préparer à lâcher le corps</li>
                <li>• <strong className="text-foreground">Orientation de la conscience</strong> : visualisation du chemin de sortie</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">L'Accompagnement du Mourant</h3>
              <p>
                Traditionnellement, le mourant est entouré de ses proches qui :
              </p>
              <ul className="space-y-2 my-4">
                <li>• Chantent des mantras sacrés (Mahāmṛtyuñjaya, Oṁ Namo Nārāyaṇāya, etc.)</li>
                <li>• Lisent des textes sacrés (Bhagavad Gītā, chapitre 2 et 8)</li>
                <li>• Maintiennent une atmosphère de paix, sans lamentations excessives</li>
                <li>• Placent de l'eau du Gange ou tulasī sur les lèvres</li>
                <li>• Orientent la tête vers l'est ou le nord</li>
              </ul>

              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-foreground italic">
                    "antakāle ca mām eva smaran muktvā kalevaram<br/>
                    yaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśayaḥ"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    « Quiconque, à l'heure de la mort, quitte son corps en se souvenant de Moi seul,<br/>
                    atteint immédiatement Ma nature. Il n'y a aucun doute à ce sujet. »
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">— Bhagavad Gītā 8.5</p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30 border-secondary my-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Méditation sur la mort (Maraṇa Smaraṇa)
                  </h4>
                  <p className="text-muted-foreground italic">
                    Contemplez régulièrement : « Ce corps n'est pas éternel. Un jour, il retournera 
                    aux éléments. Qu'est-ce qui demeure ? Qu'est-ce que je suis vraiment, au-delà 
                    de ce corps ? Comment puis-je vivre aujourd'hui de manière à mourir en paix ? »
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/20 border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  Conclusion — Vivre selon le Dharma
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Le Dharma n'est pas un ensemble de règles rigides imposées de l'extérieur. 
                    C'est la <strong className="text-foreground">loi intérieure</strong> qui, lorsqu'elle est suivie, 
                    conduit naturellement à la santé, au bonheur et à la libération.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Ce que ce traité nous enseigne :</h3>
                  <ul className="space-y-2">
                    <li>• <strong className="text-foreground">Les Puruṣārthas</strong> : structurer sa vie autour des quatre buts légitimes</li>
                    <li>• <strong className="text-foreground">Les Upastambhas</strong> : équilibrer nourriture, sommeil et énergie vitale</li>
                    <li>• <strong className="text-foreground">Prajñāparādha</strong> : reconnaître et éviter les crimes contre sa propre sagesse</li>
                    <li>• <strong className="text-foreground">Dinacharya</strong> : sacraliser le quotidien par des routines alignées</li>
                    <li>• <strong className="text-foreground">Samprapti</strong> : intervenir tôt dans le processus pathologique</li>
                    <li>• <strong className="text-foreground">Āśrama Dharma</strong> : honorer chaque stade de la vie</li>
                    <li>• <strong className="text-foreground">Ṛtucharya</strong> : vivre en harmonie avec les saisons</li>
                    <li>• <strong className="text-foreground">Maraṇa</strong> : intégrer la mort comme partie de la vie</li>
                  </ul>

                  <Card className="bg-primary/10 border-primary/30 my-8">
                    <CardContent className="p-6 text-center">
                      <p className="text-xl font-serif text-foreground italic mb-4">
                        "svadharme nidhanaṁ śreyaḥ paradharmo bhayāvahaḥ"
                      </p>
                      <p className="text-muted-foreground">
                        « Mieux vaut mourir dans son propre dharma ;<br/>
                        le dharma d'autrui est source de peur. »
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">— Bhagavad Gītā 3.35</p>
                    </CardContent>
                  </Card>

                  <p className="text-center text-foreground font-medium">
                    Que ce traité vous guide vers la découverte et l'accomplissement 
                    de votre Svadharma — votre voie unique vers l'équilibre et la réalisation.
                  </p>

                  <div className="text-center mt-8">
                    <p className="text-primary font-serif text-xl">
                      oṁ dharmo rakṣati rakṣitaḥ
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Oṁ, le Dharma protège celui qui le protège
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Epilogue */}
          <section className="pt-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Épilogue : Pour aller plus loin
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Sources traditionnelles</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Caraka Saṃhitā (Sūtrasthāna)</li>
                      <li>• Aṣṭāṅga Hṛdaya</li>
                      <li>• Bhagavad Gītā (chapitres 2, 3, 18)</li>
                      <li>• Manusmṛti</li>
                      <li>• Dharmasūtras</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Études modernes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <em>Prakriti</em> — Dr. Robert Svoboda</li>
                      <li>• <em>The Hidden Secret of Ayurveda</em> — Dr. Robert Svoboda</li>
                      <li>• <em>Ayurveda: Life, Health and Longevity</em> — Dr. Robert Svoboda</li>
                    </ul>
                  </div>
                </div>

                <Card className="bg-secondary/30 border-secondary mt-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Pratique quotidienne suggérée</h4>
                    <p className="text-sm text-muted-foreground">
                      Chaque matin, avant de vous lever, posez-vous cette question : 
                      « Quel est mon Dharma aujourd'hui ? Quelle est l'action juste que je dois accomplir ? »
                      Chaque soir : « Ai-je vécu selon mon Dharma ? »
                    </p>
                  </CardContent>
                </Card>

                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link to="/contact">
                      Approfondir avec un accompagnement personnalisé
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="ghost" asChild>
              <Link to="/philosophie-vedique">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la Philosophie Védique
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/philosophie/temps-cycles-yugas">
                Le Temps et les Yugas
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DharmaAyurveda;
