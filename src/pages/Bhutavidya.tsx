import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Euro, Brain, Heart, Sparkles, Wind, Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getServiceBySlug } from "@/lib/services-speciaux-loader";
import ReactMarkdown from "react-markdown";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Heart,
  Sparkles,
  Wind,
  Eye,
};

const Bhutavidya = () => {
  const data = getServiceBySlug("bhutavidya");

  // Fallback values
  const title = data?.title || "BHUTAVIDYA";
  const subtitle = data?.subtitle || "La psychologie selon l'Ayurveda";
  const tagline = data?.tagline || "Voie d'épanouissement psychologique et philosophique";
  const duration = data?.duration || "1h30";
  const price = data?.price || "70€";
  const introduction = data?.introduction || "";
  const philosophyQuote = data?.philosophyQuote || "La souffrance n'est pas une fatalité.";
  const philosophySubtext = data?.philosophySubtext || "La transformer permet d'atteindre bien-être et art de vivre.";
  const philosophyText = data?.philosophyText || "";
  const programSteps = data?.programSteps || [
    { icon: "Brain", title: "Comprendre", description: "Le sens et la raison de la souffrance" },
    { icon: "Eye", title: "S'explorer", description: "Pour découvrir l'origine inconsciente" },
    { icon: "Sparkles", title: "Apprendre", description: "De ses expériences passées pour devenir libre de ses choix" },
    { icon: "Heart", title: "Effacer", description: "Les culpabilités et les peurs pour enfin s'accepter" },
    { icon: "Wind", title: "S'élever", description: "Pour retrouver la profondeur et la beauté des valeurs humaines" }
  ];
  const techniques = data?.techniques || [
    { title: "Respiration connectée", description: "Techniques ayant pour effet de dissoudre les charges émotionnelles bloquant l'entrée dans les mémoires de l'inconscient" },
    { title: "Régressions", description: "Dans l'enfance, la petite enfance et la vie fœtale (revécu en état de profonde relaxation de mémoires enfouies dans l'inconscient)" },
    { title: "Exploration des mémoires", description: "Mémoires imprimées dans l'inconscient dont l'origine est dite karmique, généalogique ou atavique selon les écoles de pensées" },
    { title: "Expansion de conscience", description: "Pour permettre une compréhension profonde et une solution durable" }
  ];
  const firstSessionTitle = data?.firstSessionTitle || "La première séance";
  const firstSessionText = data?.firstSessionText || "Elle prend la forme d'un entretien visant à analyser votre situation, à mettre en évidence les problématiques à résoudre, et à planifier un travail suivi basé sur la respiration consciente puis les régressions.";
  const followUpTitle = data?.followUpTitle || "Suivi";
  const followUpText = data?.followUpText || "Les séances sont espacées de 1 semaine à 1 mois suivant l'urgence.";
  const sessionInfo = data?.sessionInfo || "Séance de 1h30 • Tarif : 70€ • Uniquement sur rendez-vous";
  const ctaTitle = data?.ctaTitle || "Prêt à transformer votre vie ?";
  const ctaText = data?.ctaText || "Commencez votre voyage vers l'épanouissement psychologique et philosophique.";
  const ctaPrimaryLink = data?.ctaPrimaryLink || "/contact";
  const ctaPrimaryText = data?.ctaPrimaryText || "Prendre rendez-vous";
  const ctaSecondaryLink = data?.ctaSecondaryLink || "/bilan-de-sante";
  const ctaSecondaryText = data?.ctaSecondaryText || "Voir le bilan de santé";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              <span className="text-primary">{title}</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-4">
              {subtitle}
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              {tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">{duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Euro className="w-5 h-5 text-primary" />
                <span className="text-foreground">{price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-muted-foreground">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="text-lg leading-relaxed mb-6">{children}</p>,
                  strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                }}
              >
                {introduction}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-foreground mb-4">La philosophie</h2>
              <p className="text-2xl text-primary font-medium italic">
                "{philosophyQuote}"
              </p>
              <p className="text-xl text-muted-foreground mt-2">
                {philosophySubtext}
              </p>
            </div>
            
            <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
              <div className="prose prose-lg text-muted-foreground">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="leading-relaxed mb-6 last:mb-0">{children}</p>,
                    strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                  }}
                >
                  {philosophyText}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-foreground mb-12">
            Programme thérapeutique
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Brain;
              return (
                <Card key={index} className="bg-card/50 border-primary/20 group hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-foreground mb-4">
            Techniques (Satvajaya)
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Le travail thérapeutique s'engage grâce à votre motivation et votre volonté à travers les techniques suivantes :
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {techniques.map((technique, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{technique.title}</h3>
                      <p className="text-muted-foreground">{technique.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-foreground mb-8">
              Déroulement des séances
            </h2>
            <div className="bg-card/50 border border-primary/20 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{firstSessionTitle}</h3>
                <p className="text-muted-foreground">
                  {firstSessionText}
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{followUpTitle}</h3>
                <p className="text-muted-foreground">
                  {followUpText}
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                <p className="text-foreground font-medium text-center">
                  {sessionInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-6">
              {ctaTitle}
            </h2>
            <p className="text-muted-foreground mb-8">
              {ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to={ctaPrimaryLink}>{ctaPrimaryText}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to={ctaSecondaryLink}>{ctaSecondaryText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bhutavidya;
