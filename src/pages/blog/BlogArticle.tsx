import { Layout } from "@/components/layout/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, User, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getBlogArticleBySlug, formatBlogDate, type BlogArticle } from "@/lib/blog-loader";

// Import custom components for articles with interactive elements
import LesDoshas from "./LesDoshas";
import SommeilAyurveda from "./SommeilAyurveda";
import AutomneAyurveda from "./AutomneAyurveda";
import HiverAyurveda from "./HiverAyurveda";
import ColonIrritable from "./ColonIrritable";
import Osteoporose from "./Osteoporose";
import AyurvedaSanteMentale from "./AyurvedaSanteMentale";
import IncompatibilitesAlimentaires from "./IncompatibilitesAlimentaires";

// Map of slugs to custom components
const customComponents: Record<string, React.ComponentType> = {
  "les-3-doshas": LesDoshas,
  "sommeil-ayurveda": SommeilAyurveda,
  "automne-ayurveda": AutomneAyurveda,
  "hiver-ayurveda": HiverAyurveda,
  "colon-irritable-ayurveda": ColonIrritable,
  "osteoporose-ayurveda": Osteoporose,
  "ayurveda-sante-mentale": AyurvedaSanteMentale,
  "incompatibilites-alimentaires-ayurveda": IncompatibilitesAlimentaires,
};

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [article, setArticle] = useState<BlogArticle | null>(null);

  useEffect(() => {
    if (slug) {
      const foundArticle = getBlogArticleBySlug(slug);
      setArticle(foundArticle || null);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If there's a custom component for this article, render it
  if (slug && customComponents[slug]) {
    const CustomComponent = customComponents[slug];
    return <CustomComponent />;
  }

  // If no article found, redirect to blog
  if (!article && slug) {
    return <Navigate to="/blog" replace />;
  }

  if (!article) {
    return null;
  }

  return (
    <Layout>
      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container px-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
                  <Tag className="h-3 w-3" />
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatBlogDate(article.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime} de lecture
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                {article.excerpt}
              </p>

              {article.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{article.author}</p>
                    <p className="text-xs text-muted-foreground">Expert Ayurvédique</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {article.image && (
          <section className="container px-4 -mt-8">
            <div className="max-w-4xl mx-auto">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mt-12 mb-6 first:mt-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        {children}
                      </ol>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-foreground font-semibold">{children}</strong>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-secondary/30 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {article.content || ''}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                Vous souhaitez approfondir ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Prenez rendez-vous pour une consultation ayurvédique personnalisée.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
            aria-label="Retour en haut"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        )}
      </article>
    </Layout>
  );
};

export default BlogArticlePage;
