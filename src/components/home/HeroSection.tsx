import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import wafLogo from "@/assets/certifications/waf-logo.webp";
import indianStateLogo from "@/assets/certifications/indian-state-logo.webp";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/cddVa78X5t24FrPQ/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-background/50 backdrop-blur-[1px]" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 animate-fade-in">
          
          {/* Logo WAF - Left */}
          <div className="hidden lg:flex flex-col items-center gap-3">
            <img 
              src={wafLogo} 
              alt="World Ayurveda Foundation" 
              className="w-24 h-auto object-contain"
            />
            <span className="text-xs text-muted-foreground text-center max-w-[120px]">
              World Ayurveda Foundation
            </span>
          </div>
          
          {/* Central Content */}
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
              Bienvenue au Centre Ayurvédique
              <span className="block text-gradient mt-2">Arkadhya en Aquitaine</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary font-medium">
              Retrouvez l'équilibre grâce à l'Ayurveda
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Le centre Ayurvédique Arkadhya Aquitaine vous accueille dans un espace dédié au bien-être, 
              à la santé naturelle et à l'harmonie corps-esprit. Nos méthodes reposent sur l'enseignement 
              traditionnel indien, validé par l'État indien et conforme aux standards internationaux WAF.
            </p>

            {/* Mobile logos */}
            <div className="flex lg:hidden justify-center items-center gap-8 py-4">
              <div className="flex flex-col items-center gap-2">
                <img 
                  src={wafLogo} 
                  alt="World Ayurveda Foundation" 
                  className="w-16 h-auto object-contain"
                />
                <span className="text-[10px] text-muted-foreground text-center">WAF</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img 
                  src={indianStateLogo} 
                  alt="Certifié par l'État Indien" 
                  className="w-12 h-auto object-contain"
                />
                <span className="text-[10px] text-muted-foreground text-center">État Indien</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl font-serif text-foreground/90 italic">
              Découvrez l'art ancestral de l'Ayurvéda
            </p>
            
            <div className="pt-4">
              <Button size="lg" asChild className="text-base">
                <Link to="/services">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Logo État Indien - Right */}
          <div className="hidden lg:flex flex-col items-center gap-3">
            <img 
              src={indianStateLogo} 
              alt="Certifié par l'État Indien" 
              className="w-20 h-auto object-contain"
            />
            <span className="text-xs text-muted-foreground text-center max-w-[120px]">
              Certifié par l'État Indien
            </span>
          </div>
        </div>
      </div>

      {/* Overlay to hide Spline watermark */}
      <div className="absolute bottom-0 right-0 w-48 h-20 z-[1] bg-gradient-to-tl from-background via-background/90 to-transparent pointer-events-none" />

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
};
