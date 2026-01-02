import { Routes, Route } from "react-router-dom";

// layout
import PublicLayout from "@/layouts/PublicLayout";

// pages
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import Massages from "@/pages/Massages";
import Cures from "@/pages/Cures";
import ConsultationsAyurveda from "@/pages/ConsultationsAyurveda";
import Blog from "@/pages/Blog";
import BlogArticle from "@/pages/blog/BlogArticle";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import AtelierCuisine from "@/pages/AtelierCuisine";
import BilanDeSante from "@/pages/BilanDeSante";
import Bhutavidya from "@/pages/Bhutavidya";
import PhilosophieVedique from "@/pages/PhilosophieVedique";
import Rigveda from "@/pages/philosophie/Rigveda";
import GayatriMantra from "@/pages/GayatriMantra";
import GalerieArkadhya from "@/pages/GalerieArkadhya";
import CurePage from "@/pages/cures/CurePage";

// philosophie
import BrahmanAtman from "@/pages/philosophie/BrahmanAtman";
import PhilosophieArticlePage from "@/pages/philosophie/PhilosophieArticlePage";
import LegalPage from "@/pages/legal/LegalPage";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ LAYOUT PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Index />} />

        <Route path="/services" element={<Services />} />
        <Route path="/massages" element={<Massages />} />
        <Route path="/cures" element={<Cures />} />
        <Route
          path="/consultations-ayurveda"
          element={<ConsultationsAyurveda />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />

        {/* About page - keep both english and french slugs for backward compatibility */}
        <Route path="/about" element={<About />} />
        <Route path="/a-propos" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/atelier-cuisine" element={<AtelierCuisine />} />
        <Route path="/bilan-de-sante" element={<BilanDeSante />} />
        <Route path="/bhutavidya" element={<Bhutavidya />} />
        <Route path="/philosophie-vedique" element={<PhilosophieVedique />} />
        <Route path="/philosophie-vedique/rigveda" element={<Rigveda />} />
        {/* Keep legacy /philosophie base and add article route */}
        <Route path="/philosophie" element={<PhilosophieVedique />} />
        <Route path="/philosophie/:slug" element={<PhilosophieArticlePage />} />

        <Route path="/gayatri-mantra" element={<GayatriMantra />} />
        <Route path="/galerie-arkadhya" element={<GalerieArkadhya />} />
        <Route path="/centre-ayurvedique-arkadhya-en-images" element={<GalerieArkadhya />} />

        {/* Cure detail pages */}
        <Route path="/cures/:slug" element={<CurePage />} />

        {/* Legal pages */}
        <Route path="/legal/:slug" element={<LegalPage />} />

        {/* 404 and catch-all */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}
