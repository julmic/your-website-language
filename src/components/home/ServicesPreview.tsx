import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Hand, Heart, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultations",
    description: "Bilan de santé ayurvédique complet pour déterminer votre constitution (Prakriti) et vos déséquilibres actuels.",
  },
  {
    icon: Hand,
    title: "Massages Ayurvédiques",
    description: "Abhyanga, Shirodhara, massages aux pochons d'herbes... Des soins traditionnels pour rééquilibrer vos énergies.",
  },
  {
    icon: Heart,
    title: "Cures Bien-être",
    description: "Programmes personnalisés de détoxification, amaigrissement et régénération selon les principes ayurvédiques.",
  },
  {
    icon: GraduationCap,
    title: "Formations",
    description: "Stages et formations pour apprendre les fondamentaux de l'Ayurvéda et les techniques de soins.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Nos Services
          </h2>
          <p className="text-muted-foreground">
            Une approche holistique du bien-être basée sur 5000 ans de sagesse indienne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
