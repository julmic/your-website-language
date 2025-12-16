import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, ArrowLeft, ExternalLink, BookOpen } from "lucide-react";

interface PriceOption {
  label?: string;
  duration: string;
  price: string;
}

interface Study {
  title: string;
  source: string;
  url: string;
  year?: string;
}

interface MassageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  prices: PriceOption[];
  cureOnly?: boolean;
  studies?: Study[];
}

export const MassageTemplate = ({
  title,
  subtitle,
  description,
  details,
  prices,
  cureOnly = false,
  studies = [],
}: MassageTemplateProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground italic mb-8">
              {subtitle}
            </p>
            
            {!cureOnly && prices.length === 1 && (
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{prices[0].duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{prices[0].price}</span>
                </div>
              </div>
            )}

            {!cureOnly && (
              <Button size="lg" className="mt-8" asChild>
                <Link to="/contact">Réserver ce soin</Link>
              </Button>
            )}

            {cureOnly && (
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-primary font-medium">Ce soin est donné uniquement dans les cures.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Qu'est-ce que le {title} ?
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      {details.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
                Les bienfaits
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {details.map((detail, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">{detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Studies Section */}
      {studies.length > 0 && (
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-serif font-semibold text-center">
                  Études et recherches
                </h2>
              </div>
              <div className="space-y-4">
                {studies.map((study, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground mb-1">
                            {study.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {study.source} {study.year && `(${study.year})`}
                          </p>
                        </div>
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm transition-colors shrink-0"
                        >
                          <span>Voir l'étude</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {!cureOnly && prices.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
                Tarifs
              </h2>
              <div className={`grid gap-4 ${prices.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-md mx-auto'}`}>
                {prices.map((price, index) => (
                  <Card key={index} className="bg-card border-primary/20">
                    <CardContent className="p-6 text-center">
                      {price.label && (
                        <p className="text-primary font-medium mb-2">{price.label}</p>
                      )}
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{price.duration}</span>
                      </div>
                      <p className="text-2xl font-serif font-semibold">{price.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {!cureOnly && (
        <section className="py-16 bg-primary/5">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                Prêt(e) à découvrir le {title} ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Réservez votre séance et offrez-vous un moment de bien-être authentique.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Réserver maintenant</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};
