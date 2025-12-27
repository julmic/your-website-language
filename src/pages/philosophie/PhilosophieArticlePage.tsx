import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, List } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { getPhilosophieArticleBySlug } from "@/lib/philosophie-loader";
import ReactMarkdown from "react-markdown";
import { useMemo, useState, useEffect } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const PhilosophieArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showToc, setShowToc] = useState(true);
  
  const article = slug ? getPhilosophieArticleBySlug(slug) : undefined;

  // Générer la table des matières à partir du contenu
  const tableOfContents = useMemo<TocItem[]>(() => {
    if (!article?.content) return [];
    
    const toc: TocItem[] = [];
    const lines = article.content.split('\n');
    
    lines.forEach((line) => {
      const h2Match = line.match(/^## (.+)$/);
      const h3Match = line.match(/^### (.+)$/);
      
      if (h2Match) {
        const text = h2Match[1].trim();
        const id = text.toLowerCase()
          .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/gi, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
        toc.push({ id, text, level: 2 });
      } else if (h3Match) {
        const text = h3Match[1].trim();
        const id = text.toLowerCase()
          .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/gi, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
        toc.push({ id, text, level: 3 });
      }
    });
    
    return toc;
  }, [article?.content]);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Si l'article n'existe pas ou n'est pas disponible
  if (!article || !article.available) {
    return <Navigate to="/philosophie-vedique" replace />;
  }

  // Si l'article n'a pas de contenu markdown, rediriger vers la page index
  if (!article.content) {
    return <Navigate to="/philosophie-vedique" replace />;
  }

  // Fonction pour générer un ID depuis un texte
  const generateId = (text: string) => {
    return text.toLowerCase()
      .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/gi, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

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

      {/* Content with TOC */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Table of Contents - Sidebar */}
          {tableOfContents.length > 0 && (
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-card border border-border rounded-xl p-4">
                  <button 
                    onClick={() => setShowToc(!showToc)}
                    className="flex items-center gap-2 w-full text-left mb-3"
                  >
                    <List className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Sommaire</span>
                  </button>
                  
                  {showToc && (
                    <nav className="space-y-1 max-h-[60vh] overflow-y-auto">
                      {tableOfContents.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left text-sm hover:text-primary transition-colors ${
                            item.level === 2 
                              ? 'text-foreground font-medium py-1.5' 
                              : 'text-muted-foreground pl-3 py-1'
                          }`}
                        >
                          {item.text}
                        </button>
                      ))}
                    </nav>
                  )}
                </div>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => {
                    const text = String(children);
                    const id = generateId(text);
                    return <h1 id={id} className="text-3xl font-serif text-foreground mt-12 mb-6 scroll-mt-24">{children}</h1>;
                  },
                  h2: ({ children }) => {
                    const text = String(children);
                    const id = generateId(text);
                    return <h2 id={id} className="text-2xl font-serif text-foreground mt-10 mb-4 scroll-mt-24">{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const text = String(children);
                    const id = generateId(text);
                    return <h3 id={id} className="text-xl font-semibold text-foreground mt-8 mb-3 scroll-mt-24">{children}</h3>;
                  },
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
                  // Table components
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-secondary/50">{children}</thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="divide-y divide-border">{children}</tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="hover:bg-secondary/30 transition-colors">{children}</tr>
                  ),
                  th: ({ children }) => (
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-3 text-sm text-muted-foreground">{children}</td>
                  ),
                  // Code blocks
                  code: ({ children, className }) => {
                    const isInline = !className;
                    if (isInline) {
                      return <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-sm text-primary">{children}</code>;
                    }
                    return (
                      <code className="block bg-secondary/30 p-4 rounded-lg overflow-x-auto text-sm">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-secondary/30 rounded-lg overflow-x-auto my-4">{children}</pre>
                  ),
                  a: ({ href, children }) => (
                    <a href={href} className="text-primary hover:underline" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {children}
                    </a>
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
      </div>
    </Layout>
  );
};

export default PhilosophieArticlePage;
