import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Euro, ArrowLeft, ExternalLink, BookOpen, Phone, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  highlight?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  text: string;
  author: string;
  age: number;
  location: string;
}

interface Benefits {
  physical: string[];
  mental: string[];
  energetic: string[];
}

interface ForWhom {
  physical: string[];
  mental: string[];
  wellness: string[];
}

interface RelatedMassage {
  title: string;
  description: string;
  duration: string;
  price: string;
  link: string;
}

interface MassageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  prices: PriceOption[];
  cureOnly?: boolean;
  studies?: Study[];
  image?: string;
  forWhom?: ForWhom;
  contraindications?: string[];
  benefits?: Benefits;
  faq?: FAQ[];
  testimonials?: Testimonial[];
  relatedMassages?: RelatedMassage[];
}

export const MassageTemplate = ({
  title,
  subtitle,
  description,
  details,
  prices,
  cureOnly = false,
  studies = [],
  image,
  forWhom,
  contraindications = [],
  benefits,
  faq = [],
  testimonials = [],
  relatedMassages = [],
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

      {/* Description with Image */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`grid gap-12 items-center ${image ? 'md:grid-cols-2' : ''}`}>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">
                  Qu'est-ce que le {title} ?
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
              {image && (
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={image} 
                      alt={`Massage ${title}`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      {forWhom && (
        <section className="py-16 bg-secondary/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Le {title} Est Fait Pour Vous Si...
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Problèmes Physiques */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-400">
                    Problèmes Physiques
                  </h3>
                  <ul className="space-y-2">
                    {forWhom.physical.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Problèmes Mentaux/Émotionnels */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    Problèmes Mentaux/Émotionnels
                  </h3>
                  <ul className="space-y-2">
                    {forWhom.mental.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Recherche Bien-Être */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Recherche Bien-Être
                  </h3>
                  <ul className="space-y-2">
                    {forWhom.wellness.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contre-indications */}
              {contraindications.length > 0 && (
                <Card className="bg-card border-amber-500/30">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-amber-400 mb-4">
                      ⚠️ Contre-Indications
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      Le {title} est déconseillé en cas de :
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {contraindications.map((item, index) => (
                        <li key={index} className="text-muted-foreground">
                          ✗ {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-amber-400/80 mt-4">
                      💡 En cas de doute, consultez votre médecin ou contactez-nous.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && (
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Les Bienfaits <span className="text-primary">Prouvés</span> Du {title}
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Bienfaits Physiques */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-amber-400">
                    💪 Bienfaits Physiques
                  </h3>
                  <ul className="space-y-2">
                    {benefits.physical.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Bienfaits Mentaux */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-pink-400">
                    🧠 Bienfaits Mentaux
                  </h3>
                  <ul className="space-y-2">
                    {benefits.mental.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Bienfaits Énergétiques */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                    ⚡ Bienfaits Énergétiques
                  </h3>
                  <ul className="space-y-2">
                    {benefits.energetic.map((item, index) => (
                      <li key={index} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Study Highlight */}
              {studies.length > 0 && studies[0].highlight && (
                <Card className="bg-secondary/30 border-border">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      📚 Étude clinique {studies[0].source} ({studies[0].year}) :
                    </p>
                    <p className="text-foreground">
                      {studies[0].highlight}
                    </p>
                    <a
                      href={studies[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 mt-2 inline-block"
                    >
                      Source : {studies[0].source}
                    </a>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Original Details (fallback if no benefits) */}
      {!benefits && details.length > 0 && (
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
      {studies.length > 0 && !benefits && (
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

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="py-16 bg-secondary/10">
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

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
                Ce Que Nos Clients <span className="text-primary">Disent</span>
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
                      — {testimonial.author}, {testimonial.age} ans, {testimonial.location}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a 
                  href="https://g.page/r/your-google-reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  📱 Lire nos avis Google (4.9/5 ⭐)
                </a>
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

      {/* Related Massages */}
      {relatedMassages.length > 0 && (
        <section className="py-16 bg-secondary/10">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-4 text-center">
                Découvrez Nos Autres <span className="text-primary">Soins Ayurvédiques</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Chaque soin a sa spécificité. Trouvez celui qui correspond à votre besoin du moment.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedMassages.map((massage, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-serif font-semibold">{massage.title}</h3>
                    <p className="text-muted-foreground text-sm">{massage.description}</p>
                    <p className="text-primary font-medium">{massage.duration} • {massage.price}</p>
                    <Button variant="default" size="sm" asChild>
                      <Link to={massage.link}>En Savoir Plus →</Link>
                    </Button>
                  </div>
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
