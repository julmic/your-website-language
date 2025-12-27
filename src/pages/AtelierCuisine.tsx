import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, Users, Utensils, BookOpen, Leaf } from "lucide-react";
import { getServiceBySlug } from "@/lib/services-speciaux-loader";

// Images
import pdVata from "@/assets/cuisine/pdvata.webp";
import dejVata from "@/assets/cuisine/dej-vata.webp";
import dinnerVata from "@/assets/cuisine/dinner-vata.webp";
import pdPitta from "@/assets/cuisine/pdpitta.webp";
import dejPitta from "@/assets/cuisine/dej-pitta.webp";
import dinnerPitta from "@/assets/cuisine/dinner-pitta.webp";
import pdKapha from "@/assets/cuisine/pdkapha.webp";
import dejKapha from "@/assets/cuisine/dej-kapha.webp";
import dinnerKapha from "@/assets/cuisine/dinner-kapha.webp";
import kitcheri from "@/assets/cuisine/kitcheri.webp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Clock,
  Users,
  Utensils,
  BookOpen,
  Leaf,
};

const AtelierCuisine = () => {
  const data = getServiceBySlug("atelier-cuisine");

  // Fallback values
  const title = data?.title || "Atelier de Cuisine Ayurvédique";
  const subtitle = data?.subtitle || "Apprenez à cuisiner selon votre Dosha";
  const description = data?.description || "Explorez l'alimentation ayurvédique et découvrez comment adapter vos repas à votre constitution unique. Un atelier immersif, pratique et inspirant, au cœur du centre ayurvédique Arkadhya.";
  
  const upcomingDates = data?.upcomingDates || [
    { date: "Dimanche 17 mai 2026", time: "10h à 15h", level: "Niveau 1", theme: "Maîtriser l'art des 6 saveurs" },
    { date: "Dimanche 20 septembre 2026", time: "10h à 15h", level: "Niveau 2", theme: "Utiliser les épices" }
  ];

  const whyAyurvedicCooking = data?.whyAyurvedicCooking || {
    intro: "L'Ayurvéda enseigne que chacun possède une combinaison personnelle de **doshas** (Vata, Pitta, Kapha). Adapter votre alimentation à votre constitution permet de :",
    benefits: [
      { title: "Améliorer la digestion", description: "Des repas adaptés pour un système digestif équilibré", icon: "Utensils" },
      { title: "Augmenter l'énergie vitale", description: "Nourrissez votre corps selon ses besoins uniques", icon: "Leaf" },
      { title: "Équilibrer les émotions", description: "L'alimentation influence votre état mental", icon: "Users" }
    ]
  };

  const programIntro = data?.programIntro || "À la fin de l'atelier, vous serez capable de composer des menus personnalisés pour Vata, Pitta ou Kapha, adaptés aux saisons, à votre énergie et à votre digestion.";
  
  const programItems = data?.programItems || [
    { icon: "BookOpen", text: "Identifier votre dosha dominant" },
    { icon: "Utensils", text: "Choisir les ingrédients adaptés" },
    { icon: "Leaf", text: "Maîtriser les techniques traditionnelles" },
    { icon: "Clock", text: "Équilibrer les six saveurs" },
    { icon: "Users", text: "Créer des menus personnalisés" }
  ];

  const schedule = data?.schedule || [
    { time: "10h00", emoji: "🕘", title: "Accueil", description: "Infusion d'ouverture et introduction à l'ayurvéda. Identification des doshas." },
    { time: "10h15", emoji: "🌶️", title: "Découverte des épices & des six saveurs", description: "Exploration sensorielle et principes d'équilibre alimentaire." },
    { time: "11h00", emoji: "🍲", title: "Atelier cuisine du matin", description: "Techniques de base (tarka, dhal, ghee) puis préparation collective d'un repas ayurvédique." },
    { time: "12h30", emoji: "🧘‍♀️", title: "Repas en pleine conscience", description: "Dégustation du repas cuisiné ensemble." },
    { time: "13h30", emoji: "☕", title: "Pause & échanges", description: "Questions-réponses autour d'une boisson chaude." },
    { time: "14h00", emoji: "📚", title: "Alimentation selon votre dosha", description: "Conseils personnalisés et clés pour équilibrer votre digestion." },
    { time: "15h00", emoji: "🌞", title: "Clôture", description: "" }
  ];

  const menusVata = data?.menusVata || {
    petitDejeuner: { items: ["Porridge de riz ou flocons d'avoine chauds", "Fruits compotés (pomme, poire, banane mûre)", "Noix et amandes trempées", "Tisane au gingembre ou chai épicé", "Ghee ou huile de sésame"] },
    repasMidday: { items: ["Dhal de lentilles corail au cumin", "Riz basmati parfumé", "Légumes racines rôtis (carottes, patates douces)", "Curry de courge butternut", "Chapati tiède", "Lassi salé ou tisane digestive"] },
    repasSoir: { items: ["Soupe de légumes crémeuse", "Kitchari léger (riz + mung dal)", "Légumes vapeur avec ghee", "Chapati léger", "Lait doré au curcuma et miel", "Tisane à la camomille"] }
  };

  const menusPitta = data?.menusPitta || {
    petitDejeuner: { items: ["Yaourt doux avec fruits frais", "Concombre ou melon rafraîchissant", "Céréales complètes froides ou tièdes", "Épices douces : coriandre, fenouil, cardamome", "Tisane à la menthe ou eau de coco", "Éviter les agrumes et épices piquantes"] },
    repasMidday: { items: ["Riz basmati nature", "Curry doux aux légumes", "Raita (yaourt à la menthe ou concombre)", "Légumes verts vapeur", "Pain naan nature", "Lassi à la rose ou eau infusée"] },
    repasSoir: { items: ["Salade tiède de légumes", "Quinoa ou riz aux herbes fraîches", "Légumes verts sautés légers", "Fromage frais ou paneer", "Tisane à la camomille ou fenouil", "Fruits doux (raisin, melon)"] }
  };

  const menusKapha = data?.menusKapha || {
    petitDejeuner: { items: ["Petit-déjeuner léger ou jeûne possible", "Fruits astringents (pomme, poire, baies)", "Miel cru (en petite quantité)", "Épices réchauffantes : gingembre, poivre, cannelle", "Tisane au gingembre et citron", "Éviter les produits laitiers le matin"] },
    repasMidday: { items: ["Légumes variés sautés aux épices", "Millet ou sarrasin", "Légumineuses épicées", "Salade de crudités assaisonnée", "Galette de sarrasin légère", "Eau chaude avec citron"] },
    repasSoir: { items: ["Repas le plus léger de la journée", "Soupe claire aux légumes", "Légumes vapeur épicés", "Petite portion de céréales", "Tisane digestive (gingembre, cumin)", "Éviter les repas tardifs"] }
  };

  const kitcheriRecipe = data?.kitcheriRecipe || {
    title: "Recette vedette : Le Kitchari",
    description: "Plat équilibrant par excellence, le kitchari convient à tous les doshas et constitue la base de l'alimentation ayurvédique détox.",
    ingredients: ["1 tasse de riz basmati", "½ tasse de mung dal (lentilles vertes décortiquées)", "4 tasses d'eau", "1 cuillère à café de ghee", "½ cuillère à café de cumin", "½ cuillère à café de curcuma", "Sel selon goût"],
    steps: ["Rincer le riz et les lentilles ensemble", "Faire chauffer le ghee, ajouter le cumin", "Ajouter le riz, les lentilles et l'eau", "Cuire à feu doux 30-40 minutes", "Assaisonner et servir chaud"]
  };

  const faqItems = data?.faq || [
    { question: "C'est quoi exactement la cuisine ayurvédique ?", answer: "La cuisine ayurvédique est une approche alimentaire issue de l'Ayurvéda, la médecine traditionnelle indienne. Elle repose sur l'équilibre des saveurs, l'utilisation d'épices digestives et l'adaptation des repas à la constitution individuelle (dosha)." },
    { question: "Est-ce que l'atelier convient aux débutants en cuisine ?", answer: "Oui, absolument ! L'atelier est conçu pour tous les niveaux. Les techniques enseignées sont accessibles et les recettes simples à reproduire chez soi." },
    { question: "Qu'est-ce qu'on apprend concrètement pendant l'atelier ?", answer: "Vous apprendrez à identifier votre dosha, à choisir les ingrédients adaptés, à maîtriser les techniques de cuisson traditionnelles, à équilibrer les six saveurs ayurvédiques et à composer des menus personnalisés." },
    { question: "Y a-t-il une limite d'âge pour participer ?", answer: "L'atelier est ouvert aux adultes et aux adolescents à partir de 14 ans accompagnés d'un adulte." },
    { question: "Est-ce qu'il y a une partie théorique ?", answer: "Oui, l'atelier combine théorie et pratique. Vous découvrirez les principes fondamentaux de l'alimentation ayurvédique avant de passer à la cuisine." },
    { question: "Dois-je connaître mon dosha avant de venir ?", answer: "Non, pas nécessairement. Nous commencerons l'atelier par une identification de votre constitution pour personnaliser les conseils." },
    { question: "Est-ce que je dois apporter du matériel ?", answer: "Non, tout le matériel et les ingrédients sont fournis. Venez simplement avec votre curiosité et votre appétit !" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              {subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Je réserve ma place
            </Button>
          </div>
        </div>
      </section>

      {/* Prochaines dates */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-center text-foreground mb-8">
              Prochaines dates de l'atelier cuisine ayurvédique 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {upcomingDates.map((date, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{date.date}</span>
                  </div>
                  <p className="text-muted-foreground">{date.time} – {date.level}</p>
                  <p className="text-primary font-medium mt-2">{date.theme}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi cuisiner selon l'Ayurvéda */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6 text-center">
              Pourquoi cuisiner selon l'Ayurvéda ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {whyAyurvedicCooking.intro.replace(/\*\*/g, '')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {whyAyurvedicCooking.benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon] || Utensils;
                return (
                  <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
                    <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Programme de l'atelier */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4 text-center">
              Programme de l'atelier – Ce que vous apprendrez
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              {programIntro}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {programItems.map((item, index) => {
                const IconComponent = iconMap[item.icon] || BookOpen;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                    <div className="text-primary"><IconComponent className="w-6 h-6" /></div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              Déroulé de la journée
            </h3>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className="text-sm font-semibold text-primary mt-1">{item.time}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    {item.description && <p className="text-muted-foreground text-sm mt-1">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menus par Dosha */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4 text-center">
              Équilibrer ses menus pour une harmonie et une vitalité durables
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Chaque dosha possède des besoins nutritionnels spécifiques. Découvrez des repas conçus pour apaiser, 
              réchauffer ou équilibrer votre constitution, tout en soutenant la digestion et l'énergie au quotidien.
            </p>

            <Tabs defaultValue="vata" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="vata">VATA (Air + Éther)</TabsTrigger>
                <TabsTrigger value="pitta">PITTA (Feu + Eau)</TabsTrigger>
                <TabsTrigger value="kapha">KAPHA (Terre + Eau)</TabsTrigger>
              </TabsList>

              <TabsContent value="vata" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={pdVata} alt="Petit-déjeuner Vata" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Petit-déjeuner</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusVata.petitDejeuner.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={dejVata} alt="Déjeuner Vata" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Repas du midi</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusVata.repasMidday.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={dinnerVata} alt="Dîner Vata" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Repas du soir</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusVata.repasSoir.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pitta" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={pdPitta} alt="Petit-déjeuner Pitta" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Petit-déjeuner</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusPitta.petitDejeuner.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={dejPitta} alt="Déjeuner Pitta" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Repas du midi</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusPitta.repasMidday.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={dinnerPitta} alt="Dîner Pitta" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Repas du soir</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusPitta.repasSoir.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="kapha" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={pdKapha} alt="Petit-déjeuner Kapha" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Petit-déjeuner</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusKapha.petitDejeuner.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={dejKapha} alt="Déjeuner Kapha" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Repas du midi</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusKapha.repasMidday.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50">
                    <div className="overflow-hidden">
                      <img src={dinnerKapha} alt="Dîner Kapha" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Repas du soir</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {menusKapha.repasSoir.items.map((item, i) => (
                          <li key={i}>– {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Recette Kitchari */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src={kitcheri} alt="Kitchari ayurvédique" className="rounded-xl shadow-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">{kitcheriRecipe.title}</h2>
                <p className="text-muted-foreground mb-6">{kitcheriRecipe.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ingrédients :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {kitcheriRecipe.ingredients.map((ing, i) => (
                        <li key={i}>• {ing}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Préparation :</h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      {kitcheriRecipe.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 border border-border"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Prêt à découvrir la cuisine ayurvédique ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Rejoignez-nous pour un atelier transformateur qui changera votre relation à l'alimentation.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Réserver mon atelier
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AtelierCuisine;
