import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { getGeneralSettings, getSocialSettings, getNavigationSettings } from "@/lib/settings-loader";
import { getFooterLegalPages } from "@/lib/legal-loader";

export const Footer = () => {
  const settings = getGeneralSettings();
  const social = getSocialSettings();
  const navigation = getNavigationSettings();
  const legalPages = getFooterLegalPages();

  // Utiliser les liens du CMS ou fallback
  const navigationLinks = navigation.footerNavigationLinks.length > 0 
    ? navigation.footerNavigationLinks 
    : [
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Blog", href: "/blog" },
        { label: "À propos", href: "/a-propos" },
        { label: "Galerie Photos", href: "/centre-ayurvedique-arkadhya-en-images" },
        { label: "Contact", href: "/contact" },
      ];

  const servicesLinks = navigation.footerServicesLinks.length > 0
    ? navigation.footerServicesLinks
    : [
        { label: "Consultations", href: "/consultations-ayurveda" },
        { label: "Massages Ayurvédiques", href: "/services" },
        { label: "Cures Bien-être", href: "/cures" },
        { label: "Formations", href: "/atelier-cuisine" },
      ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-serif font-semibold">{settings.siteName}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Centre ayurvédique dédié à votre bien-être et à l'harmonie corps-esprit selon les traditions ancestrales de l'Inde.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{settings.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                {settings.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                {settings.email}
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {social.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arkadhya. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalPages.map((page) => (
              <Link 
                key={page.slug}
                to={`/legal/${page.slug}`} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {page.linkText}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
