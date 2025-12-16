import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, Sun, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "L'Ayurvéda : Une Voie d'Élévation Spirituelle",
    description: "Découvrez comment la médecine traditionnelle indienne transcende la simple guérison physique pour devenir un chemin complet de réalisation de soi.",
    href: "/philosophie/ayurveda-elevation-spirituelle",
    icon: Heart
  },
  {
    title: "Involution et Évolution selon les Vedas",
    description: "Comprenez les cycles cosmiques de la création et l'évolution de la conscience à travers les âges, du Satya Yuga au Kali Yuga.",
    href: "/philosophie/involution-evolution",
    icon: Sun
  },
  {
    title: "La Mort selon l'Ayurvéda",
    description: "Une Vision Holistique du Passage de l'Âme. Explorez la vision védique de la transition ultime, où la mort devient une porte vers de nouveaux états de conscience.",
    href: "/philosophie/mort-ayurveda",
    icon: Sparkles
  },
  {
    title: "La voie d'Hisvara",
    description: "Des védas à la transmission moderne : un fil sacré qui relie la sagesse ancestrale aux voix d'aujourd'hui, pour incarner le divin dans chaque acte.",
    href: "/philosophie/voie-hisvara",
    icon: BookOpen
  }
];

const PhilosophieVedique = () => {
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
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                La tradition védique, née il y a plus de 5000 ans dans la vallée de l'Indus, représente l'une des sources de connaissance spirituelle les plus anciennes et les plus complètes de l'humanité. Cette sagesse millénaire offre une <strong className="text-foreground">vision holistique de l'existence</strong>, intégrant science spirituelle, médecine sacrée, astronomie divine et art de vivre conscient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les Vedas */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-foreground mb-8">
              Que sont les Vedas ?
            </h2>
            <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les Vedas, littéralement <strong className="text-foreground">"connaissance révélée"</strong>, constituent les textes fondateurs de cette tradition. Ils ne sont pas seulement des livres, mais des <strong className="text-foreground">vibrations sonores sacrées</strong> (Shabda Brahman) qui révèlent les lois universelles gouvernant l'existence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Composés de quatre recueils principaux - <strong className="text-foreground">Rig Veda, Sama Veda, Yajur Veda et Atharva Veda</strong> - ils contiennent l'essence de toute connaissance spirituelle et pratique.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous abordons ces sujets avec respect pour la tradition authentique tout en rendant cette sagesse accessible à l'homme moderne, établissant des ponts entre la science ancienne et les découvertes contemporaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Invitation à l'exploration
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Que vous soyez nouveau dans cette tradition ou pratiquant expérimenté, ces pages vous offrent un voyage profond dans la compréhension de votre nature véritable. Chaque page révèle des aspects complémentaires de cette vision globale de l'existence.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 inline-block">
              <p className="text-foreground font-medium italic">
                "La philosophie védique enseigne que la vérité ultime (Sat-Chit-Ananda) réside en chaque être."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-foreground mb-4">
            Commencez votre voyage
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choisissez la page qui résonne le plus avec votre questionnement actuel. Laissez votre intuition vous guider dans cette exploration de la sagesse éternelle.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <article.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {article.description}
                      </p>
                      <Link 
                        to={article.href}
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                      >
                        Découvrir <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Svadhyaya */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Dans la tradition védique, étudier et partager cette connaissance constitue en soi une pratique spirituelle (<strong className="text-foreground">Svadhyaya</strong>). Puisse cette exploration enrichir votre chemin vers la réalisation de votre nature divine.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhilosophieVedique;
