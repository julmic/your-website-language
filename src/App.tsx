import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AyurvedaElevationSpirituelle from "./pages/philosophie/AyurvedaElevationSpirituelle";
import InvolutionEvolution from "./pages/philosophie/InvolutionEvolution";
import MortAyurveda from "./pages/philosophie/MortAyurveda";
import VoieHisvara from "./pages/philosophie/VoieHisvara";

// Blog pages
import AyurvedaSanteMentale from "./pages/blog/AyurvedaSanteMentale";
import ColonIrritable from "./pages/blog/ColonIrritable";
import Osteoporose from "./pages/blog/Osteoporose";
import IncompatibilitesAlimentaires from "./pages/blog/IncompatibilitesAlimentaires";

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

// Massage pages
import Abhyanga from "./pages/massages/Abhyanga";
import Shirodhara from "./pages/massages/Shirodhara";
import PindaSweda from "./pages/massages/PindaSweda";
import ShiroAbhyanga from "./pages/massages/ShiroAbhyanga";
import Vishesh from "./pages/massages/Vishesh";
import Udvartana from "./pages/massages/Udvartana";
import MarmaTherapie from "./pages/massages/MarmaTherapie";
import Pizichilli from "./pages/massages/Pizichilli";
import Navarakiri from "./pages/massages/Navarakiri";
import Elakizhi from "./pages/massages/Elakizhi";
import Padabhyanga from "./pages/massages/Padabhyanga";
import Thalapothichil from "./pages/massages/Thalapothichil";
import PrasavpurveTirumu from "./pages/massages/PrasavpurveTirumu";
import PrishtikaraTirumu from "./pages/massages/PrishtikaraTirumu";
import Snehapanam from "./pages/massages/Snehapanam";
import Putapakam from "./pages/massages/Putapakam";
import Mukhalepam from "./pages/massages/Mukhalepam";
import Svedana from "./pages/massages/Svedana";
import Kizhi from "./pages/massages/Kizhi";
import Ubthan from "./pages/massages/Ubthan";
import Shantala from "./pages/massages/Shantala";
import Undgharshan from "./pages/massages/Undgharshan";
import Saundarya from "./pages/massages/Saundarya";
import Shashtishalipindswedan from "./pages/massages/Shashtishalipindswedan";
import Padavishesh from "./pages/massages/Padavishesh";
import BolKansu from "./pages/massages/BolKansu";
import Mardanam from "./pages/massages/Mardanam";
import PanchaMahaBhuta from "./pages/massages/PanchaMahaBhuta";
import Shirotchampi from "./pages/massages/Shirotchampi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cures" element={<Cures />} />
          
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
          
          {/* Massage routes */}
          <Route path="/services/abhyanga" element={<Abhyanga />} />
          <Route path="/services/shirodhara" element={<Shirodhara />} />
          <Route path="/services/pinda-sveda" element={<PindaSweda />} />
          <Route path="/services/shiro-abhyanga" element={<ShiroAbhyanga />} />
          <Route path="/services/vishesh" element={<Vishesh />} />
          <Route path="/services/udvartana" element={<Udvartana />} />
          <Route path="/services/marma-therapie" element={<MarmaTherapie />} />
          <Route path="/services/pizichilli" element={<Pizichilli />} />
          <Route path="/services/navarakiri" element={<Navarakiri />} />
          <Route path="/services/elakizhi" element={<Elakizhi />} />
          <Route path="/services/padabhyanga" element={<Padabhyanga />} />
          <Route path="/services/thalapothichil" element={<Thalapothichil />} />
          <Route path="/services/prasavpurve-tirumu" element={<PrasavpurveTirumu />} />
          <Route path="/services/prishtikara-tirumu" element={<PrishtikaraTirumu />} />
          <Route path="/services/snehapanam" element={<Snehapanam />} />
          <Route path="/services/putapakam" element={<Putapakam />} />
          <Route path="/services/mukhalepam" element={<Mukhalepam />} />
          <Route path="/services/svedana" element={<Svedana />} />
          <Route path="/services/kizhi" element={<Kizhi />} />
          <Route path="/services/ubthan" element={<Ubthan />} />
          <Route path="/services/shantala" element={<Shantala />} />
          <Route path="/services/undgharshan" element={<Undgharshan />} />
          <Route path="/services/saundarya" element={<Saundarya />} />
          <Route path="/services/shashtishalipindswedan" element={<Shashtishalipindswedan />} />
          <Route path="/services/padavishesh" element={<Padavishesh />} />
          <Route path="/services/bol-kansu" element={<BolKansu />} />
          <Route path="/services/mardanam" element={<Mardanam />} />
          <Route path="/services/pancha-maha-bhuta" element={<PanchaMahaBhuta />} />
          <Route path="/services/shirotchampi" element={<Shirotchampi />} />
          
          {/* Legacy routes for backwards compatibility */}
          <Route path="/services/shirodhara" element={<Shirodhara />} />
          <Route path="/services/pinda-sweda" element={<PindaSweda />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ayurveda-sante-mentale" element={<AyurvedaSanteMentale />} />
          <Route path="/blog/colon-irritable-ayurveda" element={<ColonIrritable />} />
          <Route path="/blog/osteoporose-ayurveda" element={<Osteoporose />} />
          <Route path="/blog/incompatibilites-alimentaires-ayurveda" element={<IncompatibilitesAlimentaires />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/atelier-cuisine" element={<AtelierCuisine />} />
          <Route path="/bilan-de-sante" element={<BilanDeSante />} />
          <Route path="/bhutavidya" element={<Bhutavidya />} />
          <Route path="/philosophie-vedique" element={<PhilosophieVedique />} />
          <Route path="/philosophie/ayurveda-elevation-spirituelle" element={<AyurvedaElevationSpirituelle />} />
          <Route path="/philosophie/involution-evolution" element={<InvolutionEvolution />} />
          <Route path="/philosophie/mort-ayurveda" element={<MortAyurveda />} />
          <Route path="/philosophie/voie-hisvara" element={<VoieHisvara />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
