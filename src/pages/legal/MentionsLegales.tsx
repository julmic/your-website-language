import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { getMentionsLegales } from "@/lib/legal-loader";

const mentionsData = getMentionsLegales();

const MentionsLegales = () => {
  return (
    <Layout>
      <Helmet>
        <title>{mentionsData.title}</title>
        <meta name="description" content={mentionsData.metaDescription} />
        <link rel="canonical" href={mentionsData.canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            {mentionsData.title}
          </h1>

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
              {mentionsData.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default MentionsLegales;
