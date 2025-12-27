import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { getPolitiqueConfidentialite } from "@/lib/legal-loader";

const politiqueData = getPolitiqueConfidentialite();

const PolitiqueConfidentialite = () => {
  const currentDate = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  return (
    <Layout>
      <Helmet>
        <title>{politiqueData.title} - Arkadhya Centre Ayurvédique</title>
        <meta name="description" content={politiqueData.metaDescription} />
        <link rel="canonical" href={politiqueData.canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            {politiqueData.title}
          </h1>

          <p className="text-muted-foreground mb-8">
            <em>Date de dernière mise à jour : {currentDate}</em>
          </p>

          <div className="legal-content">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4 mt-12">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="text-muted-foreground space-y-2 mb-4">{children}</ul>
                ),
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => <strong>{children}</strong>,
                a: ({ href, children }) => (
                  <a href={href} className="text-primary hover:underline">
                    {children}
                  </a>
                ),
              }}
            >
              {politiqueData.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
