import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { getFeaturedTestimonials } from "@/lib/collections-loader";
import { getHomePage } from "@/lib/pages-loader";

export const TestimonialsSection = () => {
  const homePage = getHomePage();
  // Charger les témoignages depuis le CMS
  const testimonials = getFeaturedTestimonials();
  
  // Fallback si pas de témoignages dans le CMS
  const displayTestimonials = testimonials.length > 0 ? testimonials : [
    {
      name: "Marie L.",
      location: "Bordeaux",
      text: "Une expérience transformatrice. Les soins Abhyanga m'ont permis de retrouver un équilibre que je n'avais plus depuis des années. Je recommande vivement !",
      rating: 5,
      featured: true,
    },
    {
      name: "Pierre D.",
      location: "Pau",
      text: "Le bilan ayurvédique m'a ouvert les yeux sur ma constitution et mes besoins réels. Les conseils personnalisés ont changé ma façon de vivre au quotidien.",
      rating: 5,
      featured: true,
    },
    {
      name: "Sophie M.",
      location: "Biarritz",
      text: "La cure détox de 3 jours fut une révélation. Un cadre apaisant, une équipe bienveillante et des résultats visibles dès la première semaine.",
      rating: 5,
      featured: true,
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            {homePage.testimonialsTitle}
          </h2>
          <p className="text-muted-foreground">
            {homePage.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground/90 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
