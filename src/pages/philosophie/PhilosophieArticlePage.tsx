import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { getPhilosophieArticleBySlug } from "@/lib/philosophie-loader";
import ReactMarkdown from "react-markdown";

const PhilosophieArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const article = slug ? getPhilosophieArticleBySlug(slug) : undefined;

  // Si l'article n'existe pas ou n'est pas disponible
  if (!article || !article.available) {
    return <Navigate to="/philosophie-vedique" replace />;
  }

  // Si l'article n'a pas de contenu markdown, rediriger vers la page index
  if (!article.content) {
    return <Navigate to="/philosophie-vedique" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{article.title} - Philosophie Védique - Arkadhya</title>
        <meta name="description" content={`Découvrez ${article.title} dans notre exploration de la philosophie védique.`} />
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/philosophie-vedique">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la Philosophie Védique
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            <span className="text-primary">{article.title}</span>
          </h1>
          {article.subsection && (
            <p className="text-lg text-muted-foreground">
              Section {article.subsection}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-serif text-foreground mt-12 mb-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-serif text-foreground mt-10 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">{children}</h4>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary/40 pl-4 italic text-foreground my-6">
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => (
                  <strong className="text-foreground font-semibold">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic">{children}</em>
                ),
                hr: () => (
                  <hr className="border-border my-8" />
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <Button asChild variant="outline">
              <Link to="/philosophie-vedique">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la Philosophie Védique
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhilosophieArticlePage;
