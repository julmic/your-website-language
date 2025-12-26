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
import GayatriMantra from "./pages/GayatriMantra";
import AyurvedaElevationSpirituelle from "./pages/philosophie/AyurvedaElevationSpirituelle";
import InvolutionEvolution from "./pages/philosophie/InvolutionEvolution";
import MortAyurveda from "./pages/philosophie/MortAyurveda";
import VoieHisvara from "./pages/philosophie/VoieHisvara";
import PurushaPrakriti from "./pages/philosophie/PurushaPrakriti";
import Ahamkara from "./pages/philosophie/Ahamkara";
import SagesseFeminine from "./pages/philosophie/SagesseFeminine";
import TempsCyclesYugas from "./pages/philosophie/TempsCyclesYugas";
import DharmaAyurveda from "./pages/philosophie/DharmaAyurveda";
import BhagavadGita from "./pages/philosophie/BhagavadGita";
import Upanishads from "./pages/philosophie/Upanishads";
import Jyotish from "./pages/philosophie/Jyotish";
import BrahmanAtman from "./pages/philosophie/BrahmanAtman";
import Vedas from "./pages/philosophie/Vedas";
import VastuShastra from "./pages/philosophie/VastuShastra";
import ConsultationsAyurveda from "./pages/ConsultationsAyurveda";
import GalerieArkadhya from "./pages/GalerieArkadhya";
import GuideCMS from "./pages/GuideCMS";
import MentionsLegales from "./pages/legal/MentionsLegales";
import CGV from "./pages/legal/CGV";
import PolitiqueConfidentialite from "./pages/legal/PolitiqueConfidentialite";

// Blog pages
import AyurvedaSanteMentale from "./pages/blog/AyurvedaSanteMentale";
import ColonIrritable from "./pages/blog/ColonIrritable";
import Osteoporose from "./pages/blog/Osteoporose";
import IncompatibilitesAlimentaires from "./pages/blog/IncompatibilitesAlimentaires";
import HiverAyurveda from "./pages/blog/HiverAyurveda";
import AutomneAyurveda from "./pages/blog/AutomneAyurveda";
import SommeilAyurveda from "./pages/blog/SommeilAyurveda";
import LesDoshas from "./pages/blog/LesDoshas";

// Cure pages
import Panchakarma from "./pages/cures/Panchakarma";
import Amrita from "./pages/cures/Amrita";
import Karchan from "./pages/cures/Karchan";
import LaghanaRasayana from "./pages/cures/LaghanaRasayana";
import OjasKayakalpa from "./pages/cures/OjasKayakalpa";
import Personnalisee from "./pages/cures/Personnalisee";
import SamvahanaVata from "./pages/cures/SamvahanaVata";
import Prenatale from "./pages/cures/Prenatale";
import Postnatale from "./pages/cures/Postnatale";
import Journee from "./pages/cures/Journee";
import WeekEndDecouverte from "./pages/cures/WeekEndDecouverte";

// Massage page dynamique (CMS)
import MassagePage from "./pages/massages/MassagePage";

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
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          
            {/* Cure routes */}
            <Route path="/cures/panchakarma" element={<Panchakarma />} />
            <Route path="/cures/amrita" element={<Amrita />} />
            <Route path="/cures/karchan" element={<Karchan />} />
            <Route path="/cures/laghana-rasayana" element={<LaghanaRasayana />} />
            <Route path="/cures/ojas-kayakalpa" element={<OjasKayakalpa />} />
            <Route path="/cures/personnalisee" element={<Personnalisee />} />
            <Route path="/cures/samvahana-vata" element={<SamvahanaVata />} />
            <Route path="/cures/prenatale" element={<Prenatale />} />
            <Route path="/cures/postnatale" element={<Postnatale />} />
            <Route path="/cures/journee" element={<Journee />} />
            <Route path="/cures/week-end-decouverte" element={<WeekEndDecouverte />} />
          
            {/* Route dynamique pour tous les massages (CMS) */}
            <Route path="/services/:slug" element={<MassagePage />} />
          
            {/* Blog routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ayurveda-sante-mentale" element={<AyurvedaSanteMentale />} />
            <Route path="/blog/colon-irritable-ayurveda" element={<ColonIrritable />} />
            <Route path="/blog/osteoporose-ayurveda" element={<Osteoporose />} />
            <Route path="/blog/incompatibilites-alimentaires-ayurveda" element={<IncompatibilitesAlimentaires />} />
            <Route path="/blog/hiver-ayurveda" element={<HiverAyurveda />} />
            <Route path="/blog/automne-ayurveda" element={<AutomneAyurveda />} />
            <Route path="/blog/sommeil-ayurveda" element={<SommeilAyurveda />} />
            <Route path="/blog/les-3-doshas" element={<LesDoshas />} />
            
            {/* Other pages */}
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/atelier-cuisine" element={<AtelierCuisine />} />
            <Route path="/bilan-de-sante" element={<BilanDeSante />} />
            <Route path="/bhutavidya" element={<Bhutavidya />} />
            <Route path="/philosophie-vedique" element={<PhilosophieVedique />} />
            <Route path="/gayatri-mantra" element={<GayatriMantra />} />
            
            {/* Philosophie routes */}
            <Route path="/philosophie/ayurveda-elevation-spirituelle" element={<AyurvedaElevationSpirituelle />} />
            <Route path="/philosophie/involution-evolution" element={<InvolutionEvolution />} />
            <Route path="/philosophie/mort-ayurveda" element={<MortAyurveda />} />
            <Route path="/philosophie/voie-hisvara" element={<VoieHisvara />} />
            <Route path="/philosophie/purusha-prakriti" element={<PurushaPrakriti />} />
            <Route path="/philosophie/ahamkara" element={<Ahamkara />} />
            <Route path="/philosophie/sagesse-feminine" element={<SagesseFeminine />} />
            <Route path="/philosophie/temps-cycles-yugas" element={<TempsCyclesYugas />} />
            <Route path="/philosophie/dharma-ayurveda" element={<DharmaAyurveda />} />
            <Route path="/philosophie/bhagavad-gita" element={<BhagavadGita />} />
            <Route path="/philosophie/upanishads" element={<Upanishads />} />
            <Route path="/philosophie/jyotish" element={<Jyotish />} />
            <Route path="/philosophie/brahman-atman" element={<BrahmanAtman />} />
            <Route path="/philosophie/vedas" element={<Vedas />} />
            <Route path="/philosophie/vastu-shastra" element={<VastuShastra />} />
            
            <Route path="/centre-ayurvedique-arkadhya-en-images" element={<GalerieArkadhya />} />
            <Route path="/guide-cms" element={<GuideCMS />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
