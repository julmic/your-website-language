import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { Layout } from "@/components/layout/Layout";
import { getLegalPageBySlug } from "@/lib/legal-loader";

const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }
  
  const page = getLegalPageBySlug(slug);
  
  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{page.title} | Arkadhya</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={page.canonicalUrl} />
      </Helmet>

      <main className="min-h-screen bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
            {page.title}
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground">
            <ReactMarkdown>{page.content}</ReactMarkdown>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LegalPage;
