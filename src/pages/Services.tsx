import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, Hand, Heart, GraduationCap, Clock, Euro } from "lucide-react";

const massages = [
  { name: "Abhyanga", duration: "1h30", price: "70-80€", link: "/services/abhyanga" },
  { name: "Vishesh", duration: "1h30", price: "70€", link: "/services/vishesh" },
  { name: "Udvartana", duration: "1h30", price: "80€", link: "/services/udvartana" },
  { name: "Shiroabhyanga", duration: "1h", price: "70€", link: "/services/shiro-abhyanga" },
  { name: "Marma-Thérapie", duration: "1h30", price: "80€", link: "/services/marma-therapie" },
  { name: "Pizichilli", duration: "2h", price: "120€", link: "/services/pizichilli" },
  { name: "Navarakiri", duration: "1h30", price: "90€", link: "/services/navarakiri" },
  { name: "Elakizhi", duration: "1h30", price: "80€", link: "/services/elakizhi" },
  { name: "Padabhyanga", duration: "1h", price: "70€", link: "/services/padabhyanga" },
  { name: "Thalapothichil", duration: "1h", price: "70€", link: "/services/thalapothichil" },
  { name: "Prasavpurve Tirumu", duration: "1h30", price: "70€", link: "/services/prasavpurve-tirumu" },
  { name: "Prishtikara Tirumu", duration: "1h", price: "70€", link: "/services/prishtikara-tirumu" },
  { name: "Sirodhara", duration: "1h30", price: "90€", link: "/services/sirodhara" },
  { name: "Snehapanam", duration: "1h30", price: "70€", link: "/services/snehapanam" },
  { name: "Putapakam", duration: "1h30", price: "90€", link: "/services/putapakam" },
  { name: "Mukhalepam", duration: "1h", price: "70€", link: "/services/mukhalepam" },
  { name: "Svedana", duration: "1h", price: "25€", link: "/services/svedana" },
  { name: "Pinda Sveda", duration: "1h30", price: "90€", link: "/services/pinda-sveda" },
  { name: "Shantala", duration: "1h30", price: "70€", link: "/services/shantala" },
  { name: "Saundarya", duration: "1h30", price: "70€", link: "/services/saundarya" },
  { name: "Shashtishalipindswedan", duration: "1h30", price: "90€", link: "/services/shashtishalipindswedan" },
  { name: "Padavishesh", duration: "1h30", price: "80€", link: "/services/padavishesh" },
  { name: "Bol Kansu", duration: "1h", price: "70€", link: "/services/bol-kansu" },
  { name: "Mardanam", duration: "1h30", price: "70€", link: "/services/mardanam" },
  { name: "Pancha Maha Bhuta", duration: "1h30", price: "70€", link: "/services/pancha-maha-bhuta" },
  { name: "Shirotchampi", duration: "1h30", price: "80€", link: "/services/shirotchampi" },
  { name: "Kizhi", duration: "-", price: "Cure", link: "/services/kizhi" },
  { name: "Ubthan", duration: "-", price: "Cure", link: "/services/ubthan" },
  { name: "Undgharshan", duration: "-", price: "Cure", link: "/services/undgharshan" },
];

const services = [
  {
    icon: Stethoscope,
    title: "Consultations Ayurvédiques",
    description: "Un bilan de santé complet selon les principes de l'Ayurvéda pour déterminer votre constitution (Prakriti), identifier vos déséquilibres actuels (Vikriti) et recevoir des recommandations personnalisées.",
    items: [
      { name: "Première consultation complète", duration: "1h30", price: "80€" },
      { name: "Consultation de suivi", duration: "45min", price: "50€" },
      { name: "Bilan Prakriti détaillé", duration: "2h", price: "120€" },
    ],
  },
  {
    icon: Heart,
    title: "Cures & Programmes",
    description: "Des programmes intensifs de plusieurs jours pour une transformation profonde. Détoxification, régénération, perte de poids selon les protocoles ayurvédiques traditionnels.",
    items: [
      { name: "Cure Détox Panchakarma (3 jours)", duration: "3 jours", price: "450€" },
      { name: "Programme Bien-être (5 jours)", duration: "5 jours", price: "700€" },
      { name: "Cure Amaigrissement", duration: "7 jours", price: "950€" },
      { name: "Retraite Régénération", duration: "Weekend", price: "380€" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Formations & Stages",
    description: "Apprenez les fondamentaux de l'Ayurvéda et les techniques de soins. Des formations pour professionnels et particuliers souhaitant approfondir leurs connaissances.",
    items: [
      { name: "Initiation à l'Ayurvéda", duration: "1 jour", price: "120€" },
      { name: "Stage Massage Abhyanga", duration: "2 jours", price: "280€" },
      { name: "Formation Praticien Ayurvédique", duration: "6 mois", price: "Sur devis" },
      { name: "Atelier Cuisine Ayurvédique", duration: "Demi-journée", price: "60€" },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Nos Services</h1>
            <p className="text-lg text-muted-foreground">Découvrez notre gamme complète de soins ayurvédiques.</p>
          </div>
        </div>
      </section>

      {/* Massages Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Hand className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold">Massages Ayurvédiques</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {massages.map((massage) => (
              <Link key={massage.name} to={massage.link}>
                <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-4">
                    <p className="font-medium text-primary hover:underline">{massage.name}</p>
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {massage.duration}</span>
                      <span className="font-semibold text-foreground">{massage.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.title} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button asChild className="mt-4"><Link to="/contact">Réserver</Link></Button>
                </div>
                <Card className="bg-card border-border">
                  <CardHeader><CardTitle className="text-lg font-serif">Tarifs</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {service.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><Clock className="h-3 w-3" /> {item.duration}</p>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-semibold"><Euro className="h-4 w-4" />{item.price.replace('€', '')}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4">Prêt à commencer votre voyage ?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Contactez-nous pour discuter de vos besoins et réserver votre première consultation.</p>
          <Button size="lg" asChild><Link to="/contact">Nous contacter</Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
