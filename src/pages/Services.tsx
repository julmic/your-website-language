import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Stethoscope, Hand, Heart, GraduationCap, Clock, Euro } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { getBookableMassages, getCureOnlyMassages } from "@/lib/massages-loader";
import { getAllCures } from "@/lib/cures-loader";
import { getServicesPage } from "@/lib/pages-loader";

// Import massage images
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

// Mapping des images de massages par slug
const massageImageMap: Record<string, string> = {
  "abhyanga": massageAbhyanga,
  "vishesh": massageVishesh,
  "udvartana": massageUdvartana,
  "shiro-abhyanga": massageShiroabhyanga,
  "marma-therapie": massageMarmaTherapie,
  "pizichilli": massagePizichilli,
  "navarakiri": massageNavarakiri,
  "elakizhi": massageElakizhi,
  "padabhyanga": massagePadabhyanga,
  "thalapothichil": massageThalapothichil,
  "prasavpurve-tirumu": massagePrasavpurveTirumu,
  "prishtikara-tirumu": massagePrishtikaraTirumu,
  "shirodhara": massageShirodharaNew,
  "snehapanam": massageSnehapanam,
  "putapakam": massagePutapakam,
  "mukhalepam": massageMukhalepam,
  "svedana": massageSvedana,
  "pinda-sweda": massagePindaSweda,
  "shantala": massageShantala,
  "saundarya": massageSaundarya,
  "shashtishalipindswedan": massageShashtishalipindswedan,
  "padavishesh": massagePadavishesh,
  "bol-kansu": massageBolKansu,
  "mardanam": massageMardanam,
  "pancha-maha-bhuta": massagePanchaMahaBhuta,
  "shirotchampi": massageShirotchampi,
  "kizhi": massageKizhi,
  "ubthan": massageUbthan,
  "undgharshan": massageUndgharshan,
};

// Mapping des images de cures par slug
const cureImageMap: Record<string, string> = {
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

const Services = () => {
  const location = useLocation();
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  // Charger les données depuis le CMS
  const pageData = getServicesPage();
  const bookableMassages = getBookableMassages();
  const cureOnlyMassages = getCureOnlyMassages();
  const allMassages = [...bookableMassages, ...cureOnlyMassages];
  const cures = getAllCures();

  // Handle anchor scrolling
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setOpenAccordions([hash]);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  const getMassageImage = (slug: string): string => {
    return massageImageMap[slug] || massageAbhyanga;
  };

  const getCureImage = (slug: string): string => {
    return cureImageMap[slug] || curePanchakarma;
  };

  const formatMassagePrice = (massage: typeof allMassages[number]): string => {
    if (massage.cureOnly) return "Cure";
    if (!massage.prices || massage.prices.length === 0) return "-";
    // Nettoyer le prix en retirant le € existant pour éviter le double €€
    const cleanPrice = (price: string) => price.replace('€', '').trim();
    if (massage.prices.length === 1) {
      const priceNum = parseInt(cleanPrice(massage.prices[0].price).replace(/[^0-9]/g, ''));
      return `${priceNum}€`;
    }
    const prices = massage.prices.map(p => parseInt(cleanPrice(p.price).replace(/[^0-9]/g, '')));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return minPrice === maxPrice ? `${minPrice}€` : `${minPrice}-${maxPrice}€`;
  };

  const getMassageDuration = (massage: typeof allMassages[number]): string => {
    if (!massage.prices || massage.prices.length === 0) return "-";
    return massage.prices[0].duration || "-";
  };

  return (
    <Layout>
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">{pageData.title}</h1>
            <p className="text-lg text-muted-foreground">{pageData.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <Accordion type="multiple" value={openAccordions} onValueChange={setOpenAccordions} className="space-y-4">
            {/* Massages Ayurvédiques */}
            <AccordionItem id="massages" value="massages" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Hand className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">Massages Ayurvédiques</h2>
                    <p className="text-sm text-muted-foreground mt-1">{allMassages.length} soins disponibles</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
                  {allMassages.map((massage) => (
                    <Link key={massage.slug} to={`/services/${massage.slug}`}>
                      <Card className="bg-secondary/30 border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={getMassageImage(massage.slug)} 
                            alt={massage.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <p className="font-medium text-primary group-hover:underline">{massage.title}</p>
                          <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {getMassageDuration(massage)}
                            </span>
                            <span className="font-semibold text-foreground">{formatMassagePrice(massage)}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Consultations */}
            <AccordionItem id="consultations" value="consultations" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">{pageData.consultationsTitle}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{pageData.consultationsSubtitle}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6">
                    {pageData.consultationsDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pageData.consultations.map((item) => (
                      <Card key={item.name} className="bg-secondary/30 border-border">
                        <CardContent className="p-5">
                          <p className="font-medium text-lg">{item.name}</p>
                          <div className="flex items-center justify-between mt-3 text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3 w-3" /> {item.duration}
                            </span>
                            <span className="font-semibold text-primary flex items-center">
                              <Euro className="h-4 w-4" />{item.price.replace('€', '')}
                            </span>
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
            <AccordionItem id="cures" value="cures" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">{pageData.curesTitle}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{cures.length} {pageData.curesSubtitle}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6">
                    {pageData.curesDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {cures.map((cure) => (
                      <Link key={cure.slug} to={`/cures/${cure.slug}`}>
                        <Card className="bg-secondary/30 border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img 
                              src={getCureImage(cure.slug)} 
                              alt={cure.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="font-medium text-primary group-hover:underline">{cure.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">{cure.subtitle}</p>
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
            <AccordionItem id="formations" value="formations" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold">{pageData.formationsTitle}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{pageData.formationsSubtitle}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-6">
                    {pageData.formationsDescription}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pageData.formations.map((item) => (
                      <Card key={item.name} className="bg-secondary/30 border-border">
                        <CardContent className="p-5">
                          <p className="font-medium">{item.name}</p>
                          <div className="flex items-center justify-between mt-3 text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3 w-3" /> {item.duration}
                            </span>
                            <span className="font-semibold text-primary">{item.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild><Link to="/contact">Nous contacter</Link></Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Besoin d'un conseil personnalisé ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nous sommes à votre écoute pour vous guider vers le soin ou la cure qui vous correspond.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
