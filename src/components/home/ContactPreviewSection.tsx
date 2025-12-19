import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import GoogleMap from "@/components/ui/GoogleMap";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "461 route de la Côte Rouge, 47440 Pailloles"
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "05 53 36 94 30",
    href: "tel:+33553369430"
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@arkadhya.fr",
    href: "mailto:contact@arkadhya.fr"
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Sur rendez-vous uniquement"
  }
];

export const ContactPreviewSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Nous trouver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Le centre Arkadhya vous accueille en Lot-et-Garonne, dans un cadre naturel propice à la détente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <GoogleMap className="h-80 lg:h-96" />

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
