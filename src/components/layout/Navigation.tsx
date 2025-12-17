import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoArkadhya from "@/assets/logo-arkadhya.webp";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/cures", label: "Cures" },
  { href: "/bilan-de-sante", label: "Bilan de santé" },
  { href: "/bhutavidya", label: "Bhutavidya" },
  { href: "/philosophie-vedique", label: "Philosophie" },
  { href: "/atelier-cuisine", label: "Atelier Cuisine" },
  { href: "/blog", label: "Blog & Actualités" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Animation plays once on initial load
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 2500); // After animations complete
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="site-branding flex items-center gap-3 branding-hover">
            <img 
              src={logoArkadhya}
              alt="Arkadhya - Ayurveda Respect de la Vie"
              className={`h-14 w-auto logo-animated transition-all duration-500 ${
                hasAnimated ? 'loaded' : 'animate'
              }`}
            />
            <div className="flex flex-col">
              <span 
                className={`site-description text-[10px] uppercase tracking-wider text-muted-foreground ${
                  hasAnimated ? 'loaded' : 'animate'
                }`}
              >
                Centre Ayurvédique
              </span>
              <span 
                className={`site-title text-xl font-serif font-semibold text-foreground ${
                  hasAnimated ? 'loaded' : 'animate'
                }`}
              >
                Arkadhya
              </span>
              <span 
                className={`site-description text-[10px] text-muted-foreground ${
                  hasAnimated ? 'loaded' : 'animate'
                }`}
              >
                en Aquitaine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link to="/contact">Prendre RDV</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Prendre RDV
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
