import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    slug: "introduction-ayurveda",
    title: "Introduction à l'Ayurvéda : Les 3 Doshas",
    excerpt: "Découvrez les fondamentaux de l'Ayurvéda et comprenez votre constitution unique à travers les trois doshas : Vata, Pitta et Kapha.",
    date: "15 Décembre 2024",
    category: "Conseils",
  },
  {
    slug: "bienfaits-massage-abhyanga",
    title: "Les bienfaits du massage Abhyanga",
    excerpt: "Le massage à l'huile chaude Abhyanga est l'un des soins les plus précieux de l'Ayurvéda. Découvrez ses nombreux bienfaits pour le corps et l'esprit.",
    date: "10 Décembre 2024",
    category: "Soins",
  },
  {
    slug: "alimentation-ayurvedique-hiver",
    title: "Alimentation ayurvédique en hiver",
    excerpt: "Comment adapter votre alimentation selon les principes ayurvédiques pour traverser l'hiver en pleine forme et renforcer votre immunité.",
    date: "5 Décembre 2024",
    category: "Nutrition",
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Actualités & Conseils
          </h2>
          <p className="text-muted-foreground">
            Explorez notre blog pour approfondir vos connaissances en Ayurvéda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card 
              key={article.slug} 
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center text-sm text-primary mt-4 hover:underline"
                >
                  Lire la suite
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">
              Voir tous les articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
