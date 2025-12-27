import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag, Sparkles } from "lucide-react";
import { getLatestBlogArticles } from "@/lib/blog-loader";
import { getHomePage } from "@/lib/pages-loader";
import kitcheriImage from "@/assets/cuisine/kitcheri.webp";

export const BlogPreview = () => {
  const homePage = getHomePage();
  const latestArticles = getLatestBlogArticles(homePage.blogArticlesCount || 3);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            {homePage.blogTitle}
          </h2>
          <p className="text-muted-foreground">
            {homePage.blogSubtitle}
          </p>
        </div>

        {/* Featured Workshop Card */}
        <Card className="mb-10 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/20 border-primary/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
              <img 
                src={kitcheriImage} 
                alt="Atelier de Cuisine Ayurvédique - Préparation du Kitcheri"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-primary text-primary-foreground rounded-full shadow-md">
                  <Sparkles className="h-3 w-3" />
                  Événement à venir
                </span>
              </div>
            </div>
            <CardContent className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
                Atelier de Cuisine Ayurvédique
              </h3>
              <p className="text-muted-foreground mb-6">
                Apprenez à cuisiner selon votre Dosha et découvrez les secrets de la cuisine équilibrée ayurvédique
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border/50">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Dimanche 17 mai 2026 - Niveau 1</p>
                    <p className="text-sm text-muted-foreground">"Maîtriser l'art des 6 saveurs"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border/50">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Dimanche 20 septembre 2026 - Niveau 2</p>
                    <p className="text-sm text-muted-foreground">"Utiliser les épices"</p>
                  </div>
                </div>
              </div>

              <div>
                <Button asChild size="lg" className="group/btn">
                  <Link to="/atelier-cuisine">
                    Réserver ma place
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

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
              {homePage.blogButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
