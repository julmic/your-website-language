import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import GoogleMap from "@/components/ui/GoogleMap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHomePage } from "@/lib/pages-loader";
import { getGeneralSettings } from "@/lib/settings-loader";

export const ContactPreviewSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const homeData = getHomePage();
  const settings = getGeneralSettings();

  // Build contact info from CMS settings
  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresse",
      value: settings.address.replace(/\n/g, ', ').replace(/^"|"$/g, ''),
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: settings.phone,
      href: `tel:${settings.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: settings.email,
      href: `mailto:${settings.email}`,
    },
    {
      icon: Clock,
      label: "Horaires",
      value: "Sur rendez-vous uniquement",
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-card/30 overflow-hidden"
    >
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl font-serif font-semibold mb-4 opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
          >
            {homeData.contactTitle}
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {homeData.contactSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map with blur-in effect */}
          <div 
            className={`opacity-0 ${isVisible ? "animate-blur-in" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <GoogleMap className="h-80 lg:h-96 rounded-xl shadow-2xl" />
          </div>

          {/* Contact Info with staggered fade-in-right */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 opacity-0 group ${
                  isVisible ? "animate-fade-in-right" : ""
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <info.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <Button 
              asChild 
              size="lg" 
              className={`mt-6 w-full sm:w-auto opacity-0 hover:scale-105 transition-transform ${
                isVisible ? "animate-slide-up-spring" : ""
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              <Link to="/contact">
                {homeData.contactButtonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
