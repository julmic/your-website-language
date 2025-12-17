import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { getLatestArticles } from "@/data/articles";

export const BlogPreview = () => {
  const latestArticles = getLatestArticles(3);

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
          {latestArticles.map((article) => (
            <Card 
              key={article.slug} 
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                {article.image ? (
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl opacity-30">🌿</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 bg-background/80 backdrop-blur-sm rounded">
                    <Tag className="h-3 w-3" />
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center text-sm text-primary hover:underline"
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
