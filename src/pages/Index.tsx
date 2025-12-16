import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <TestimonialsSection />
      <BlogPreview />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
