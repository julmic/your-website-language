import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ThreeDoorsSection } from "@/components/home/ThreeDoorsSection";
import { WhyAyurvedaSection } from "@/components/home/WhyAyurvedaSection";
import { FeaturedTreatmentsSection } from "@/components/home/FeaturedTreatmentsSection";
import { CuresZoomSection } from "@/components/home/CuresZoomSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { GallerySection } from "@/components/home/GallerySection";
import { ContactPreviewSection } from "@/components/home/ContactPreviewSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ThreeDoorsSection />
      <WhyAyurvedaSection />
      <FeaturedTreatmentsSection />
      <CuresZoomSection />
      <TestimonialsSection />
      <BlogPreview />
      <GallerySection />
      <ContactPreviewSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
