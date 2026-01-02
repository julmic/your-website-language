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
  ArrowRight,
  Check,
  Clock,
  Users,
  Lightbulb,
  Brain,
  Route,
  Zap,
  Star,
  Heart,
  Microscope,
  Building2,
  FolderOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  getSectionsWithArticles, 
  getPhilosophieStats,
  type PhilosophieSectionWithArticles 
} from "@/lib/philosophie-loader";
import { useMemo } from "react";

// Mapping des icônes string vers les composants Lucide
const iconComponents: Record<string, React.ElementType> = {
  'book-open': BookOpen,
  'sparkles': Sparkles,
  'sun': Sun,
  'users': Users,
  'lightbulb': Lightbulb,
  'brain': Brain,
  'route': Route,
  'zap': Zap,
  'star': Star,
  'hand-heart': Heart,
  'microscope': Microscope,
  'building': Building2,
  'folder': FolderOpen,
};

// Données de fallback au cas où le CMS n'est pas disponible
const fallbackSections = [
  {
    order: 1,
    title: "Les Textes Fondateurs",
    icon: "book-open",
    description: "Les sources scripturales de la sagesse éternelle",
    articles: [
      { title: "Les Vedas : structure et symbolisme", slug: "vedas", sectionId: 1, order: 1, available: true, href: "/philosophie/vedas" },
      { title: "Le Rig‑Veda : la source primordiale", slug: "rigveda", sectionId: 1, order: 2, available: true, href: "/philosophie-vedique/rigveda" },
    ],
  },
];

const PhilosophieVedique = () => {
  // Charger les données depuis le CMS
  const sections = useMemo(() => {
    try {
      const cmsSections = getSectionsWithArticles();
      if (cmsSections.length > 0) {
        return cmsSections;
      }
      return fallbackSections as PhilosophieSectionWithArticles[];
    } catch {
      return fallbackSections as PhilosophieSectionWithArticles[];
    }
  }, []);

  const stats = useMemo(() => {
    try {
      return getPhilosophieStats();
    } catch {
      return { available: 0, total: 0 };
    }
  }, []);

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
                {stats.available} articles disponibles
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                <Clock className="w-3 h-3 mr-1" />
                {stats.total - stats.available} à venir
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
              Naviguez à travers les 13 piliers de la sagesse védique. Les articles disponibles sont accessibles immédiatement.
            </p>

            <Accordion type="multiple" className="space-y-4">
              {sections.map((section) => {
                const Icon = iconComponents[section.icon] || BookOpen;
                const availableInSection = section.articles.filter((a) => a.available).length;

                return (
                  <AccordionItem
                    key={section.order}
                    value={`section-${section.order}`}
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
                              {section.order}. {section.title}
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
