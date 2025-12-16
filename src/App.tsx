import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Abhyanga from "./pages/massages/Abhyanga";
import Shirodhara from "./pages/massages/Shirodhara";
import PindaSweda from "./pages/massages/PindaSweda";
import ShiroAbhyanga from "./pages/massages/ShiroAbhyanga";

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
          <Route path="/services/abhyanga" element={<Abhyanga />} />
          <Route path="/services/shirodhara" element={<Shirodhara />} />
          <Route path="/services/pinda-sweda" element={<PindaSweda />} />
          <Route path="/services/shiro-abhyanga" element={<ShiroAbhyanga />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
