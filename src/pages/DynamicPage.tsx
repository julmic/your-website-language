import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { getDynamicPageBySlug, DynamicPageSection } from "@/lib/dynamic-pages-loader";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

/**
 * Dynamic Page Component
 * Renders pages created via CMS with modular sections
 */
const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getDynamicPageBySlug(slug) : undefined;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{page.metaTitle || page.title} - Arkadhya</title>
        {page.metaDescription && (
          <meta name="description" content={page.metaDescription} />
        )}
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
        {page.heroImage && (
          <div className="absolute inset-0">
            <img 
              src={page.heroImage} 
              alt="" 
              className="w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            {page.heroTitle || page.title}
          </h1>
          {page.heroSubtitle && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {page.heroSubtitle}
            </p>
          )}
        </div>
      </section>

      {/* Dynamic Sections */}
      <div className="py-12 md:py-16">
        {page.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} index={index} />
        ))}
      </div>

      {/* Main Markdown Content */}
      {page.content && page.content.trim() && (
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
            <ReactMarkdown>{page.content}</ReactMarkdown>
          </div>
        </section>
      )}
    </Layout>
  );
};

/**
 * Section Renderer Component
 * Renders different section types based on their type
 */
interface SectionRendererProps {
  section: DynamicPageSection;
  index: number;
}

const SectionRenderer = ({ section, index }: SectionRendererProps) => {
  const isEven = index % 2 === 0;
  
  switch (section.type) {
    case 'text':
      return (
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                {section.title}
              </h2>
            )}
            {section.content && (
              <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground">
                <ReactMarkdown>{section.content}</ReactMarkdown>
              </div>
            )}
          </div>
        </section>
      );

    case 'image-text':
      return (
        <section className={`py-12 md:py-16 ${isEven ? 'bg-secondary/10' : ''}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center max-w-6xl mx-auto`}>
              {section.image && (
                <div className="w-full md:w-1/2">
                  <img 
                    src={section.image} 
                    alt={section.title || ''} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
              <div className="w-full md:w-1/2">
                {section.title && (
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                    {section.title}
                  </h2>
                )}
                {section.content && (
                  <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground">
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      );

    case 'cta':
      return (
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                {section.title}
              </h2>
            )}
            {section.buttonText && section.buttonLink && (
              <Button asChild size="lg" className="mt-4">
                <Link to={section.buttonLink}>{section.buttonText}</Link>
              </Button>
            )}
          </div>
        </section>
      );

    case 'list':
      return (
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                {section.title}
              </h2>
            )}
            {section.items && section.items.length > 0 && (
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      );

    case 'gallery':
      return (
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6 text-center">
                {section.title}
              </h2>
            )}
            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.images.map((image, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt="" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    default:
      return null;
  }
};

export default DynamicPage;
