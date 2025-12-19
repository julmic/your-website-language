import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, Hand, Heart, GraduationCap, Clock, Euro, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import massage images
import massageOil from "@/assets/massages/massage-oil.jpg";
import massageHead from "@/assets/massages/massage-head.jpg";
import massageFeet from "@/assets/massages/massage-feet.jpg";
import massageHerbal from "@/assets/massages/massage-herbal.jpg";
import massageFace from "@/assets/massages/massage-face.jpg";
import massagePrenatal from "@/assets/massages/massage-prenatal.jpg";
import massageBaby from "@/assets/massages/massage-baby.jpg";
import massageShirodhara from "@/assets/massages/massage-shirodhara.jpg";
import massageEyes from "@/assets/massages/massage-eyes.jpg";
import massageScrub from "@/assets/massages/massage-scrub.jpg";

// Import specific massage images
import massageAbhyanga from "@/assets/massages/abhyanga.webp";
import massageVishesh from "@/assets/massages/vishesh-new.png";
import massageKizhi from "@/assets/massages/kizhi.webp";
import massageElakizhi from "@/assets/massages/elakizhi.webp";
import massageMardanam from "@/assets/massages/mardanam.webp";
import massagePanchaMahaBhuta from "@/assets/massages/pancha-maha-bhuta.webp";
import massageSnehapanam from "@/assets/massages/snehapanam.jpeg";
import massageUdvartana from "@/assets/massages/udvartana.jpeg";
import massagePrasavpurveTirumu from "@/assets/massages/prasavpurve-tirumu.jpeg";
import massageBolKansu from "@/assets/massages/bol-kansu.webp";
import massageShiroabhyanga from "@/assets/massages/shiroabhyanga.jpeg";
import massageUbthan from "@/assets/massages/ubthan.jpeg";
import massageShirodharaNew from "@/assets/massages/shirodhara-new.jpeg";
import massagePizichilli from "@/assets/massages/pizichilli.jpeg";
import massagePindaSweda from "@/assets/massages/pinda-sveda.png";
import massageMukhalepam from "@/assets/massages/mukhalepam.png";
import massageThalapothichil from "@/assets/massages/thalapothichil.png";
import massagePutapakam from "@/assets/massages/putapakam.jpeg";
import massageShirotchampi from "@/assets/massages/shirotchampi.jpeg";
import massageSaundarya from "@/assets/massages/saundarya.jpeg";
import massageShantala from "@/assets/massages/shantala.jpg";

// Import new massage images
import massageShashtishalipindswedan from "@/assets/massages/shashtishalipindswedan.png";
import massageSvedana from "@/assets/massages/svedana.png";
import massagePadavishesh from "@/assets/massages/padavishesh.png";
import massagePadabhyanga from "@/assets/massages/padabhyanga.png";
import massageNavarakiri from "@/assets/massages/navarakiri.png";
import massageMarmaTherapie from "@/assets/massages/marma-therapie.png";
import massageUndgharshan from "@/assets/massages/undgharshan.png";
import massagePrishtikaraTirumu from "@/assets/massages/prishtikara-tirumu.png";

// Import cure images
import curePanchakarma from "@/assets/cures/cure-panchakarma.jpg";
import cureAmrita from "@/assets/cures/cure-amrita.jpg";
import cureKarchan from "@/assets/cures/cure-karchan.jpg";
import cureLaghana from "@/assets/cures/cure-laghana-rasayana.jpg";
import cureOjas from "@/assets/cures/cure-ojas-kayakalpa.jpg";
import curePersonnalisee from "@/assets/cures/cure-personnalisee.jpg";
import cureSamvahana from "@/assets/cures/cure-samvahana-vata.jpg";
import curePrenatale from "@/assets/cures/cure-prenatale.jpg";
import curePostnatale from "@/assets/cures/cure-postnatale.jpg";
import cureJournee from "@/assets/cures/cure-journee.jpg";
import cureWeekEnd from "@/assets/cures/cure-week-end.jpg";

const massages = [
  { name: "Abhyanga", duration: "1h30", price: "70-80€", link: "/services/abhyanga", image: massageAbhyanga },
  { name: "Vishesh", duration: "1h30", price: "70€", link: "/services/vishesh", image: massageVishesh },
  { name: "Udvartana", duration: "1h30", price: "80€", link: "/services/udvartana", image: massageUdvartana },
  { name: "Shiroabhyanga", duration: "1h", price: "70€", link: "/services/shiro-abhyanga", image: massageShiroabhyanga },
  { name: "Marma-Thérapie", duration: "1h30", price: "80€", link: "/services/marma-therapie", image: massageMarmaTherapie },
  { name: "Pizichilli", duration: "2h", price: "120€", link: "/services/pizichilli", image: massagePizichilli },
  { name: "Navarakiri", duration: "1h30", price: "90€", link: "/services/navarakiri", image: massageNavarakiri },
  { name: "Elakizhi", duration: "1h30", price: "80€", link: "/services/elakizhi", image: massageElakizhi },
  { name: "Padabhyanga", duration: "1h", price: "70€", link: "/services/padabhyanga", image: massagePadabhyanga },
  { name: "Thalapothichil", duration: "1h", price: "70€", link: "/services/thalapothichil", image: massageThalapothichil },
  { name: "Prasavpurve Tirumu", duration: "1h30", price: "70€", link: "/services/prasavpurve-tirumu", image: massagePrasavpurveTirumu },
  { name: "Prishtikara Tirumu", duration: "1h", price: "70€", link: "/services/prishtikara-tirumu", image: massagePrishtikaraTirumu },
  { name: "Shirodhara", duration: "1h30", price: "90€", link: "/services/shirodhara", image: massageShirodharaNew },
  { name: "Snehapanam", duration: "1h30", price: "70€", link: "/services/snehapanam", image: massageSnehapanam },
  { name: "Putapakam", duration: "1h30", price: "90€", link: "/services/putapakam", image: massagePutapakam },
  { name: "Mukhalepam", duration: "1h", price: "70€", link: "/services/mukhalepam", image: massageMukhalepam },
  { name: "Svedana", duration: "1h", price: "25€", link: "/services/svedana", image: massageSvedana },
  { name: "Pinda Sveda", duration: "1h30", price: "90€", link: "/services/pinda-sveda", image: massagePindaSweda },
  { name: "Shantala", duration: "1h30", price: "70€", link: "/services/shantala", image: massageShantala },
  { name: "Saundarya", duration: "1h30", price: "70€", link: "/services/saundarya", image: massageSaundarya },
  { name: "Shashtishalipindswedan", duration: "1h30", price: "90€", link: "/services/shashtishalipindswedan", image: massageShashtishalipindswedan },
  { name: "Padavishesh", duration: "1h30", price: "80€", link: "/services/padavishesh", image: massagePadavishesh },
  { name: "Bol Kansu", duration: "1h", price: "70€", link: "/services/bol-kansu", image: massageBolKansu },
  { name: "Mardanam", duration: "1h30", price: "70€", link: "/services/mardanam", image: massageMardanam },
  { name: "Pancha Maha Bhuta", duration: "1h30", price: "70€", link: "/services/pancha-maha-bhuta", image: massagePanchaMahaBhuta },
  { name: "Shirotchampi", duration: "1h30", price: "80€", link: "/services/shirotchampi", image: massageShirotchampi },
  { name: "Kizhi", duration: "-", price: "Cure", link: "/services/kizhi", image: massageKizhi },
  { name: "Ubthan", duration: "-", price: "Cure", link: "/services/ubthan", image: massageUbthan },
  { name: "Undgharshan", duration: "-", price: "Cure", link: "/services/undgharshan", image: massageUndgharshan },
];

const consultations = [
  { name: "Première consultation complète", duration: "1h30", price: "80€" },
  { name: "Consultation de suivi", duration: "45min", price: "50€" },
  { name: "Bilan Prakriti détaillé", duration: "2h", price: "120€" },
];

// Import des données centralisées des cures
import { curesData } from "@/data/cures";

// Mapping des images par ID de cure
const cureImages: Record<string, string> = {
  "panchakarma": curePanchakarma,
  "amrita": cureAmrita,
  "karchan": cureKarchan,
  "laghana-rasayana": cureLaghana,
  "ojas-kayakalpa": cureOjas,
  "personnalisee": curePersonnalisee,
  "samvahana-vata": cureSamvahana,
  "prenatale": curePrenatale,
  "postnatale": curePostnatale,
  "journee": cureJournee,
  "week-end-decouverte": cureWeekEnd,
};

// Cures avec images pour l'affichage
const cures = curesData.map(cure => ({
  ...cure,
  image: cureImages[cure.id],
}));

const formations = [
  { name: "Initiation à l'Ayurvéda", duration: "1 jour", price: "120€" },
  { name: "Stage Massage Abhyanga", duration: "2 jours", price: "280€" },
  { name: "Formation Praticien Ayurvédique", duration: "6 mois", price: "Sur devis" },
  { name: "Atelier Cuisine Ayurvédique", duration: "Demi-journée", price: "60€" },
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

      <section className="py-16">
        <div className="container px-4">
          <Accordion type="multiple" defaultValue={[]} className="space-y-4">
            {/* Massages Ayurvédiques */}
            <AccordionItem value="massages" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Hand className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Massages Ayurvédiques</h2>
                    <p className="text-sm text-muted-foreground mt-1">{massages.length} soins disponibles</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
                  {massages.map((massage) => (
                    <Link key={massage.name} to={massage.link}>
                      <Card className="bg-secondary/30 border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={massage.image} 
                            alt={massage.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <p className="font-medium text-primary group-hover:underline">{massage.name}</p>
                          <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {massage.duration}</span>
                            <span className="font-semibold text-foreground">{massage.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Consultations */}
            <AccordionItem value="consultations" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Consultations Ayurvédiques</h2>
                    <p className="text-sm text-muted-foreground mt-1">Bilan personnalisé selon votre constitution</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6">
                    Un bilan de santé complet selon les principes de l'Ayurvéda pour déterminer votre constitution (Prakriti), 
                    identifier vos déséquilibres actuels (Vikriti) et recevoir des recommandations personnalisées.
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {consultations.map((item) => (
                      <Card key={item.name} className="bg-secondary/30 border-border">
                        <CardContent className="p-5">
                          <p className="font-medium text-lg">{item.name}</p>
                          <div className="flex items-center justify-between mt-3 text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> {item.duration}</span>
                            <span className="font-semibold text-primary flex items-center"><Euro className="h-4 w-4" />{item.price.replace('€', '')}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild><Link to="/contact">Prendre rendez-vous</Link></Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cures et Programmes */}
            <AccordionItem value="cures" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Cures & Programmes</h2>
                    <p className="text-sm text-muted-foreground mt-1">{cures.length} programmes de 1 à 14 jours</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6">
                    Des programmes intensifs pour une transformation profonde. Détoxification, régénération, 
                    perte de poids selon les protocoles ayurvédiques traditionnels. Toutes les cures se déroulent en présentiel avec hébergement en chambre individuelle.
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {cures.map((cure) => (
                      <Link key={cure.name} to={cure.link}>
                        <Card className="bg-secondary/30 border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img 
                              src={cure.image} 
                              alt={cure.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="font-medium text-primary group-hover:underline">{cure.name}</p>
                            <p className="text-sm text-muted-foreground mt-1">{cure.description}</p>
                            <p className="font-semibold text-foreground mt-2">{cure.price}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline"><Link to="/cures">Voir toutes les cures</Link></Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Formations et Stages */}
            <AccordionItem value="formations" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Formations & Stages</h2>
                    <p className="text-sm text-muted-foreground mt-1">Apprenez les techniques ayurvédiques</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6">
                    Apprenez les fondamentaux de l'Ayurvéda et les techniques de soins. Des formations pour professionnels 
                    et particuliers souhaitant approfondir leurs connaissances.
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {formations.map((item) => (
                      <Card key={item.name} className="bg-secondary/30 border-border">
                        <CardContent className="p-5">
                          <p className="font-medium text-lg">{item.name}</p>
                          <div className="flex items-center justify-between mt-3 text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> {item.duration}</span>
                            <span className="font-semibold text-primary">{item.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild><Link to="/contact">S'inscrire</Link></Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
