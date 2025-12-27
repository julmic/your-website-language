import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Cures from "./pages/Cures";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AtelierCuisine from "./pages/AtelierCuisine";
import BilanDeSante from "./pages/BilanDeSante";
import Bhutavidya from "./pages/Bhutavidya";
import PhilosophieVedique from "./pages/PhilosophieVedique";
import GayatriMantra from "./pages/GayatriMantraDynamic";
import PhilosophieArticlePage from "./pages/philosophie/PhilosophieArticlePage";
// Toutes les pages de philosophie sont maintenant gérées dynamiquement via PhilosophieArticlePage
import ConsultationsAyurveda from "./pages/ConsultationsAyurveda";
import GalerieArkadhya from "./pages/GalerieArkadhya";
import GuideCMS from "./pages/GuideCMS";
import LegalPage from "./pages/legal/LegalPage";

// Page dynamique blog (CMS)
import BlogArticle from "./pages/blog/BlogArticle";

// Pages dynamiques (CMS)
import MassagePage from "./pages/massages/MassagePage";
import CurePage from "./pages/cures/CurePage";
import DynamicPage from "./pages/DynamicPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cures" element={<Cures />} />
            <Route path="/consultations-ayurveda" element={<ConsultationsAyurveda />} />
            
            {/* Route dynamique pour toutes les pages légales (CMS) */}
            <Route path="/legal/:slug" element={<LegalPage />} />
          
            {/* Route dynamique pour toutes les cures (CMS) */}
            <Route path="/cures/:slug" element={<CurePage />} />
          
            {/* Route dynamique pour tous les massages (CMS) */}
            <Route path="/services/:slug" element={<MassagePage />} />
          
            {/* Route dynamique pour tous les articles de blog (CMS) */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            
            {/* Other pages */}
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/atelier-cuisine" element={<AtelierCuisine />} />
            <Route path="/bilan-de-sante" element={<BilanDeSante />} />
            <Route path="/bhutavidya" element={<Bhutavidya />} />
            <Route path="/philosophie-vedique" element={<PhilosophieVedique />} />
            <Route path="/gayatri-mantra" element={<GayatriMantra />} />
            
            {/* Route dynamique pour tous les articles de philosophie (CMS) */}
            <Route path="/philosophie/:slug" element={<PhilosophieArticlePage />} />
            
            <Route path="/centre-ayurvedique-arkadhya-en-images" element={<GalerieArkadhya />} />
            <Route path="/guide-cms" element={<GuideCMS />} />
            
            {/* Route dynamique pour les nouvelles pages (CMS) */}
            <Route path="/page/:slug" element={<DynamicPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
