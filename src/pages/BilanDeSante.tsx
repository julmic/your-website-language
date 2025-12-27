import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Euro, Heart, Leaf, Activity, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getServiceBySlug } from "@/lib/services-speciaux-loader";
import ReactMarkdown from "react-markdown";

// Utilitaire centralisé pour la résolution d'images de bilan
import { prakritiImg, doshaImg } from "@/lib/bilan-images";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Users,
  Leaf,
  Heart,
};

const BilanDeSante = () => {
  const data = getServiceBySlug("bilan-de-sante");

  // Fallback values
  const title = data?.title || "Bilan de santé CHIKITSA";
  const subtitle = data?.subtitle || "Un outil complet pour évaluer votre santé globale selon les principes de l'Ayurveda";
  const duration = data?.duration || "1h30";
  const price = data?.price || "70€";
  const description = data?.description || "";
  const aspectTitle = data?.aspectTitle || "Aspects diététiques (Kayachikitsa)";
  const aspectItems = data?.aspectItems || [
    "Rééquilibrage alimentaire personnalisé",
    "Routines de vie (sommeil, horaires des repas, hygiène)",
    "Traitement des douleurs physiques"
  ];
  const steps = data?.steps || [
    { title: "Lecture du pouls", description: "Évaluation de Vikriti (état actuel) et Prakriti (constitution de naissance)", icon: "Activity" },
    { title: "Examen physique", description: "Observation du corps et de la langue pour identifier les déséquilibres", icon: "Users" },
    { title: "Discussion", description: "Questions sur vos routines de vie, alimentation et habitudes", icon: "Leaf" },
    { title: "Plan personnalisé", description: "Propositions de régime, phytothérapie et soins complémentaires", icon: "Heart" }
  ];
  const followUpText = data?.followUpText || "Après la consultation, vous recevrez un bilan de santé global et un plan de traitement personnalisé qui peut inclure des thérapies manuelles ou un travail émotionnel selon vos besoins.";
  const followUpNote = data?.followUpNote || "Les consultations se font **en présentiel** afin de permettre la lecture du pouls et un bilan de santé ayurvédique complet.";
  const ctaTitle = data?.ctaTitle || "Prêt à découvrir votre constitution ?";
  const ctaText = data?.ctaText || "Réservez votre bilan de santé CHIKITSA et commencez votre voyage vers l'équilibre.";
  const ctaPrimaryLink = data?.ctaPrimaryLink || "/contact";
  const ctaPrimaryText = data?.ctaPrimaryText || "Prendre rendez-vous";
  const ctaSecondaryLink = data?.ctaSecondaryLink || "/services";
  const ctaSecondaryText = data?.ctaSecondaryText || "Voir tous les services";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                {title.includes("CHIKITSA") ? (
                  <>
                    {title.replace("CHIKITSA", "")} <span className="text-primary">CHIKITSA</span>
                  </>
                ) : (
                  title
                )}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
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
            <div className="relative">
              <img 
                src={doshaImg} 
                alt="Les trois doshas - Vata, Pitta, Kapha" 
                className="rounded-2xl shadow-2xl shadow-primary/20 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img 
                src={prakritiImg} 
                alt="Prakriti - Constitution ayurvédique" 
                className="rounded-2xl shadow-xl shadow-primary/10 w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg text-muted-foreground">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="text-lg leading-relaxed mb-6">{children}</p>,
                    strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                  }}
                >
                  {description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aspects de la consultation */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-foreground mb-12">
            Aspect de la consultation
          </h2>
          <div className="max-w-xl mx-auto">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{aspectTitle}</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {aspectItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Déroulement de la séance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-foreground mb-12">
            Déroulement de la séance
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Activity;
              return (
                <Card key={index} className="bg-card/50 border-primary/20 text-center group hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {index + 1}
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

      {/* Suivi */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              Suivi personnalisé
            </h2>
            <div className="prose prose-lg text-muted-foreground mb-8 mx-auto">
              <ReactMarkdown>{followUpText}</ReactMarkdown>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <div className="text-foreground font-medium prose prose-lg mx-auto">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="text-foreground font-medium m-0">{children}</p>,
                    strong: ({ children }) => <strong>{children}</strong>,
                  }}
                >
                  {followUpNote}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
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

export default BilanDeSante;
