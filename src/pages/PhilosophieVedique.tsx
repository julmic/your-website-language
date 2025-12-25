import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Sparkles,
  Sun,
  Heart,
  ArrowRight,
  Compass,
  Flame,
  Users,
  Brain,
  Flower2,
  Music,
  Check,
  Clock,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  title: string;
  href: string | null;
  available: boolean;
  subsection?: string;
}

interface Section {
  id: number;
  title: string;
  icon: React.ElementType;
  description: string;
  articles: Article[];
}

const sections: Section[] = [
  {
    id: 1,
    title: "Les Textes Fondateurs",
    icon: BookOpen,
    description: "Les sources scripturales de la sagesse éternelle",
    articles: [
      { title: "Les Vedas : structure et symbolisme", href: null, available: false },
      { title: "Les Upanishads", href: "/philosophie/upanishads", available: true },
      { title: "La Bhagavad Gita", href: "/philosophie/bhagavad-gita", available: true },
      { title: "Les Brahmanas", href: null, available: false },
      { title: "Les Aranyakas", href: null, available: false },
      { title: "Les Sutras : Yoga Sutras, Brahma Sutras", href: null, available: false },
      { title: "Itihasa : Mahabharata et Ramayana", href: null, available: false },
      { title: "Les Puranas", href: null, available: false },
    ],
  },
  {
    id: 2,
    title: "Métaphysique Védique",
    icon: Sparkles,
    description: "Les concepts essentiels de la réalité ultime",
    articles: [
      { title: "Brahman et Atman", href: null, available: false },
      { title: "Maya : l'illusion cosmique", href: null, available: false },
      { title: "Karma et Samsara", href: null, available: false },
      { title: "Moksha : la libération", href: null, available: false },
      { title: "Le rôle du Guru", href: null, available: false },
    ],
  },
  {
    id: 3,
    title: "Cosmologie et Structure de l'Univers",
    icon: Sun,
    description: "L'univers selon la tradition védique",
    articles: [
      { title: "Purusha et Prakriti", href: "/philosophie/purusha-prakriti", available: true },
      { title: "Les trois Gunas", href: null, available: false },
      { title: "Les Pancha Mahabhutas (5 éléments)", href: null, available: false },
      { title: "Le temps, les cycles et les Yugas", href: "/philosophie/temps-cycles-yugas", available: true },
      { title: "Les Lokas (mondes célestes, terrestres et inférieurs)", href: null, available: false },
      { title: "Cosmologie du sacrifice", href: null, available: false },
    ],
  },
  {
    id: 4,
    title: "Les Voies Spirituelles : Yoga & Darshanas",
    icon: Compass,
    description: "Les chemins vers la réalisation de soi",
    articles: [
      { title: "La Voie d'Ishvara : des Védas à la transmission moderne", href: "/philosophie/voie-hisvara", available: true },
      { title: "Jnana Yoga : la voie de la connaissance", href: null, available: false },
      { title: "Bhakti Yoga : la voie de la dévotion", href: null, available: false },
      { title: "Karma Yoga : la voie de l'action", href: null, available: false },
      { title: "Raja Yoga : la voie royale", href: null, available: false },
      { title: "Samkhya", href: null, available: false },
      { title: "Mimamsa", href: null, available: false },
      { title: "Vedanta : Advaita, Vishishtadvaita, Dvaita", href: null, available: false },
    ],
  },
  {
    id: 5,
    title: "Rituels et Disciplines Sacrées",
    icon: Flame,
    description: "Les pratiques transformatrices",
    articles: [
      { title: "Mantras : science du son sacré", href: null, available: false },
      { title: "Agni Hotra : le rituel du feu", href: null, available: false },
      { title: "Antar Yajna : le rituel intérieur", href: null, available: false },
      { title: "Yajna extérieurs et sacrifices védiques", href: null, available: false },
      { title: "Puja : l'adoration rituelle", href: null, available: false },
      { title: "Symbolisme du feu sacré", href: null, available: false },
    ],
  },
  {
    id: 6,
    title: "Psychologie Védique & Sciences de la Conscience",
    icon: Brain,
    description: "La cartographie de l'esprit et de l'âme",
    articles: [
      { title: "Les Koshas : les cinq enveloppes de l'être", href: null, available: false },
      { title: "Prana et les cinq Vayus", href: null, available: false },
      { title: "Ahamkara : le sens de l'ego", href: "/philosophie/ahamkara", available: true },
      { title: "Manas : le mental sensoriel", href: null, available: false },
      { title: "Buddhi : l'intelligence discriminative", href: null, available: false },
      { title: "Les états de conscience (Jagrat, Svapna, Sushupti, Turiya)", href: null, available: false },
      { title: "Involution et Évolution selon les Vedas", href: "/philosophie/involution-evolution", available: true },
      { title: "Bhutavidya : science védique de l'esprit", href: "/philosophie/bhutavidya", available: false },
    ],
  },
  {
    id: 7,
    title: "Ayurveda & Sciences de la Vie",
    icon: Heart,
    description: "La médecine sacrée et l'art de vivre",
    articles: [
      { title: "L'Ayurvéda : Une Voie d'Élévation Spirituelle", href: "/philosophie/ayurveda-elevation-spirituelle", available: true },
      { title: "Les Doshas : Vata, Pitta, Kapha", href: null, available: false },
      { title: "Santé spirituelle et équilibre holistique", href: null, available: false },
      { title: "Ritucharya : cycles de la nature et saisonnalité", href: null, available: false },
      { title: "Le Dharma en Ayurveda : La Loi Intérieure", href: "/philosophie/dharma-ayurveda", available: true },
      { title: "La Mort selon l'Ayurvéda", href: "/philosophie/mort-ayurveda", available: true },
    ],
  },
  {
    id: 8,
    title: "Féminin Sacré & Symbolisme Shakti",
    icon: Flower2,
    description: "La puissance créatrice féminine",
    articles: [
      { title: "Sagesse féminine dans les Vedas", href: "/philosophie/sagesse-feminine", available: true },
      { title: "Les grandes Déesses : Lakshmi, Parvati, Durga, Kali", href: null, available: false },
      { title: "Symbolisme de Shakti dans la création", href: null, available: false },
      { title: "Féminin sacré et cosmologie", href: null, available: false },
    ],
  },
  {
    id: 9,
    title: "Sciences Sacrées Appliquées",
    icon: Music,
    description: "Applications pratiques de la sagesse védique",
    articles: [
      { title: "Jyotish : astrologie védique", href: "/philosophie/jyotish", available: true },
      { title: "Vastu Shastra : architecture sacrée", href: null, available: false },
      { title: "Gandharva Veda : musique sacrée", href: null, available: false },
      { title: "Artha Shastra : éthique politique et économique", href: null, available: false },
      { title: "Dhanurveda : l'art martial védique", href: null, available: false },
      { title: "Sthapatya Veda : science de la construction", href: null, available: false },
    ],
  },
  {
    id: 10,
    title: "Héritage et Interprétations Modernes",
    icon: Globe,
    description: "Transmission et renaissance de la sagesse védique",
    articles: [
      { title: "Sri Aurobindo et le Yoga intégral", href: null, available: false },
      { title: "Swami Vivekananda et la diffusion en Occident", href: null, available: false },
      { title: "Sarvepalli Radhakrishnan : philosophie et diplomatie", href: null, available: false },
      { title: "Gandhi et l'éthique védique", href: null, available: false },
      { title: "Réception en Occident : Schopenhauer, Emerson, Thoreau", href: null, available: false },
      { title: "Applications modernes : écologie, éthique, psychologie", href: null, available: false },
    ],
  },
];

const PhilosophieVedique = () => {
  const availableCount = sections.reduce(
    (acc, section) => acc + section.articles.filter((a) => a.available).length,
    0
  );
  const totalCount = sections.reduce((acc, section) => acc + section.articles.length, 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              <span className="text-primary">PHILOSOPHIE VÉDIQUE</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-4 font-medium">
              Bienvenue dans l'océan de sagesse éternelle
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Check className="w-3 h-3 mr-1" />
                {availableCount} articles disponibles
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                <Clock className="w-3 h-3 mr-1" />
                {totalCount - availableCount} à venir
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                La tradition védique, née il y a plus de 5000 ans dans la vallée de l'Indus, représente l'une des sources de connaissance spirituelle les plus anciennes et les plus complètes de l'humanité. Cette sagesse millénaire offre une <strong className="text-foreground">vision holistique de l'existence</strong>, intégrant science spirituelle, médecine sacrée, astronomie divine et art de vivre conscient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation par accordéons */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-foreground mb-4">
              Explorer les enseignements
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Naviguez à travers les 10 piliers de la sagesse védique. Les articles disponibles sont accessibles immédiatement.
            </p>

            <Accordion type="multiple" className="space-y-4">
              {sections.map((section) => {
                const Icon = section.icon;
                const availableInSection = section.articles.filter((a) => a.available).length;

                return (
                  <AccordionItem
                    key={section.id}
                    value={`section-${section.id}`}
                    className="bg-card/80 border border-border/50 rounded-xl px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-lg font-semibold text-foreground">
                              {section.id}. {section.title}
                            </h3>
                            {availableInSection > 0 && (
                              <Badge variant="default" className="bg-green-600/90 hover:bg-green-600 text-xs">
                                {availableInSection} disponible{availableInSection > 1 ? "s" : ""}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <ul className="space-y-3 ml-16">
                        {section.articles.map((article, index) => (
                          <li key={index} className="flex items-center gap-3">
                            {article.subsection && (
                              <span className="text-xs text-muted-foreground font-medium w-8">
                                {article.subsection}
                              </span>
                            )}
                            {article.available && article.href ? (
                              <Link
                                to={article.href}
                                className="flex items-center gap-3 group flex-1"
                              >
                                <span className="text-foreground group-hover:text-primary transition-colors flex-1">
                                  {article.title}
                                </span>
                                <Badge variant="default" className="bg-green-600/90 hover:bg-green-600 text-xs flex-shrink-0">
                                  <Check className="w-3 h-3 mr-1" />
                                  Disponible
                                </Badge>
                                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            ) : (
                              <div className="flex items-center gap-3 flex-1">
                                <span className="text-muted-foreground flex-1">
                                  {article.title}
                                </span>
                                <Badge variant="outline" className="text-xs border-primary/30 text-primary/70 flex-shrink-0">
                                  <Clock className="w-3 h-3 mr-1" />
                                  À venir
                                </Badge>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <p className="text-lg text-foreground font-medium italic mb-4">
                "La philosophie védique enseigne que la vérité ultime (Sat-Chit-Ananda) réside en chaque être."
              </p>
              <p className="text-sm text-muted-foreground">
                Dans la tradition védique, étudier et partager cette connaissance constitue en soi une pratique spirituelle (<strong className="text-foreground">Svadhyaya</strong>).
              </p>
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhilosophieVedique;
