import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, ArrowLeft, Calendar, Home, Utensils, Star, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DurationOption {
  days: number;
  pricePerDay: number;
  totalPrice: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  text: string;
}

interface Treatment {
  name: string;
  description?: string;
}

interface RelatedCure {
  name: string;
  path: string;
  description: string;
  pricePerDay: number;
}

interface CureTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  pricePerDay: number;
  durations?: DurationOption[];
  treatments?: Treatment[];
  benefits?: string[];
  includes?: string[];
  faq?: FAQ[];
  testimonials?: Testimonial[];
  relatedCures?: RelatedCure[];
}

export const CureTemplate = ({
  title,
  subtitle,
  description,
  image,
  pricePerDay,
  durations = [],
  treatments = [],
  benefits = [],
  includes = [],
  faq = [],
  testimonials = [],
  relatedCures = [],
}: CureTemplateProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/cures" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux cures
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground italic mb-8">
              {subtitle}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Jusqu'à 14 jours</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Euro className="h-5 w-5 text-primary" />
                <span className="font-semibold">{pricePerDay}€/jour</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Home className="h-5 w-5 text-primary" />
                <span>Chambre individuelle</span>
              </div>
            </div>

            <Button size="lg" className="mt-4" asChild>
              <Link to="/contact">Réserver cette cure</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Description with Image */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`grid gap-12 items-center ${image ? 'md:grid-cols-2' : ''}`}>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">
                  Qu'est-ce que la {title} ?
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                </div>
              </div>
              {image && (
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={image} 
                      alt={`Cure ${title}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      {includes.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Ce Qui Est <span className="text-primary">Inclus</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card/50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Card className="mt-8 bg-amber-500/10 border-amber-500/30">
                <CardContent className="p-6">
                  <p className="text-amber-400 text-sm">
                    <strong>Note :</strong> Les régimes spéciaux (sans gluten, etc.) ou demandes particulières entraînent un supplément de 40€ par jour et par personne.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Les <span className="text-primary">Bienfaits</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">✨ {benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Treatments Included */}
      {treatments.length > 0 && (
        <section className="py-16 bg-secondary/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Les <span className="text-primary">Soins</span> Proposés
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {treatments.map((treatment, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-foreground mb-1">{treatment.name}</h3>
                      {treatment.description && (
                        <p className="text-sm text-muted-foreground">{treatment.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Vos <span className="text-primary">Questions</span> Fréquentes
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  Une autre question ? <a href="tel:0553414810" className="text-primary font-medium">📞 05 53 41 48 10</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Témoignages de Nos <span className="text-primary">Curistes</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      « {testimonial.text} »
                    </p>
                    <p className="text-primary font-medium">
                      — {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Tarifs
            </h2>
            
            <div className="text-center mb-8">
              <p className="text-4xl font-serif font-bold text-primary">{pricePerDay}€</p>
              <p className="text-muted-foreground">par jour</p>
            </div>

            {durations.length > 0 && (
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {durations.map((duration, index) => (
                  <Card key={index} className="bg-card border-primary/20 text-center">
                    <CardContent className="p-6">
                      <p className="text-lg font-semibold text-primary mb-2">{duration.days} jours</p>
                      <p className="text-3xl font-serif font-bold mb-1">{duration.totalPrice}€</p>
                      <p className="text-sm text-muted-foreground">soit {duration.pricePerDay}€/jour</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Le tarif comprend :
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hébergement en chambre individuelle</li>
                  <li>• Tous les repas (cuisine ayurvédique végétarienne)</li>
                  <li>• Tous les soins et traitements</li>
                  <li>• Consultations ayurvédiques</li>
                  <li>• Tisanes et chai à volonté</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">Réserver cette cure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cures */}
      {relatedCures.length > 0 && (
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Autres <span className="text-primary">Cures</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedCures.map((cure, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{cure.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{cure.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">{cure.pricePerDay}€/jour</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={cure.path}>Découvrir</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Prêt à Vivre Cette Expérience ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour réserver votre cure ou obtenir plus d'informations. Un acompte est demandé à la réservation (non remboursable si annulation 7 jours avant le début de la cure).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Réserver maintenant</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0553414810">📞 05 53 41 48 10</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
