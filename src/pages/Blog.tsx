import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { articleCategories, getArticlesByCategory } from "@/data/articles";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const filteredArticles = getArticlesByCategory(selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Blog & Actualités
            </h1>
            <p className="text-lg text-muted-foreground">
              Explorez nos articles pour approfondir vos connaissances en Ayurvéda et découvrir des conseils bien-être au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {articleCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  category === selectedCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground py-8">
                Aucun article dans cette catégorie pour le moment.
              </p>
            ) : filteredArticles.map((article) => (
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
                  <h2 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Lire l'article
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
