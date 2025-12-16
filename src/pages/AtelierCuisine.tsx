import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, Users, Utensils, BookOpen, Leaf } from "lucide-react";

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

const AtelierCuisine = () => {
  const schedule = [
    { time: "10h00", icon: "🕘", title: "Accueil", description: "Infusion d'ouverture et introduction à l'ayurvéda. Identification des doshas." },
    { time: "10h15", icon: "🌶️", title: "Découverte des épices & des six saveurs", description: "Exploration sensorielle et principes d'équilibre alimentaire." },
    { time: "11h00", icon: "🍲", title: "Atelier cuisine du matin", description: "Techniques de base (tarka, dhal, ghee) puis préparation collective d'un repas ayurvédique." },
    { time: "12h30", icon: "🧘‍♀️", title: "Repas en pleine conscience", description: "Dégustation du repas cuisiné ensemble." },
    { time: "13h30", icon: "☕", title: "Pause & échanges", description: "Questions-réponses autour d'une boisson chaude." },
    { time: "14h00", icon: "📚", title: "Alimentation selon votre dosha", description: "Conseils personnalisés et clés pour équilibrer votre digestion." },
    { time: "15h00", icon: "🌞", title: "Clôture", description: "" },
  ];

  const faqItems = [
    {
      question: "C'est quoi exactement la cuisine ayurvédique ?",
      answer: "La cuisine ayurvédique est une approche alimentaire issue de l'Ayurvéda, la médecine traditionnelle indienne. Elle repose sur l'équilibre des saveurs, l'utilisation d'épices digestives et l'adaptation des repas à la constitution individuelle (dosha)."
    },
    {
      question: "Est-ce que l'atelier convient aux débutants en cuisine ?",
      answer: "Oui, absolument ! L'atelier est conçu pour tous les niveaux. Les techniques enseignées sont accessibles et les recettes simples à reproduire chez soi."
    },
    {
      question: "Qu'est-ce qu'on apprend concrètement pendant l'atelier ?",
      answer: "Vous apprendrez à identifier votre dosha, à choisir les ingrédients adaptés, à maîtriser les techniques de cuisson traditionnelles, à équilibrer les six saveurs ayurvédiques et à composer des menus personnalisés."
    },
    {
      question: "Y a-t-il une limite d'âge pour participer ?",
      answer: "L'atelier est ouvert aux adultes et aux adolescents à partir de 14 ans accompagnés d'un adulte."
    },
    {
      question: "Est-ce qu'il y a une partie théorique ?",
      answer: "Oui, l'atelier combine théorie et pratique. Vous découvrirez les principes fondamentaux de l'alimentation ayurvédique avant de passer à la cuisine."
    },
    {
      question: "Dois-je connaître mon dosha avant de venir ?",
      answer: "Non, pas nécessairement. Nous commencerons l'atelier par une identification de votre constitution pour personnaliser les conseils."
    },
    {
      question: "Est-ce que je dois apporter du matériel ?",
      answer: "Non, tout le matériel et les ingrédients sont fournis. Venez simplement avec votre curiosité et votre appétit !"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Atelier de Cuisine Ayurvédique
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Apprenez à cuisiner selon votre Dosha
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explorez l'alimentation ayurvédique et découvrez comment adapter vos repas à votre constitution unique. 
              Un atelier immersif, pratique et inspirant, au cœur du centre ayurvédique Arkadhya.
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
              <div className="p-6 bg-background rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Dimanche 17 mai 2026</span>
                </div>
                <p className="text-muted-foreground">10h à 15h – Niveau 1</p>
                <p className="text-primary font-medium mt-2">Maîtriser l'art des 6 saveurs</p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Dimanche 20 septembre 2026</span>
                </div>
                <p className="text-muted-foreground">10h à 15h – Niveau 2</p>
                <p className="text-primary font-medium mt-2">Utiliser les épices</p>
              </div>
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
              L'Ayurvéda enseigne que chacun possède une combinaison personnelle de <strong className="text-foreground">doshas</strong> (Vata, Pitta, Kapha). 
              Adapter votre alimentation à votre constitution permet de :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Utensils className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Améliorer la digestion</h3>
                <p className="text-muted-foreground text-sm">Des repas adaptés pour un système digestif équilibré</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Leaf className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Augmenter l'énergie vitale</h3>
                <p className="text-muted-foreground text-sm">Nourrissez votre corps selon ses besoins uniques</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Équilibrer les émotions</h3>
                <p className="text-muted-foreground text-sm">L'alimentation influence votre état mental</p>
              </div>
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
              À la fin de l'atelier, vous serez capable de composer des menus personnalisés pour Vata, Pitta ou Kapha, 
              adaptés aux saisons, à votre énergie et à votre digestion.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {[
                { icon: <BookOpen className="w-6 h-6" />, text: "Identifier votre dosha dominant" },
                { icon: <Utensils className="w-6 h-6" />, text: "Choisir les ingrédients adaptés" },
                { icon: <Leaf className="w-6 h-6" />, text: "Maîtriser les techniques traditionnelles" },
                { icon: <Clock className="w-6 h-6" />, text: "Équilibrer les six saveurs" },
                { icon: <Users className="w-6 h-6" />, text: "Créer des menus personnalisés" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              Déroulé de la journée
            </h3>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-2xl">{item.icon}</span>
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
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={pdVata} alt="Petit-déjeuner Vata" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Petit-déjeuner</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Porridge de riz ou flocons d'avoine chauds</li>
                        <li>– Fruits compotés (pomme, poire, banane mûre)</li>
                        <li>– Noix et amandes trempées</li>
                        <li>– Tisane au gingembre ou chai épicé</li>
                        <li>– Ghee ou huile de sésame</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={dejVata} alt="Déjeuner Vata" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Repas du midi</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Dhal de lentilles corail au cumin</li>
                        <li>– Riz basmati parfumé</li>
                        <li>– Légumes racines rôtis (carottes, patates douces)</li>
                        <li>– Curry de courge butternut</li>
                        <li>– Chapati tiède</li>
                        <li>– Lassi salé ou tisane digestive</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={dinnerVata} alt="Dîner Vata" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Repas du soir</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Soupe de légumes crémeuse</li>
                        <li>– Kitchari léger (riz + mung dal)</li>
                        <li>– Légumes vapeur avec ghee</li>
                        <li>– Chapati léger</li>
                        <li>– Lait doré au curcuma et miel</li>
                        <li>– Tisane à la camomille</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pitta" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={pdPitta} alt="Petit-déjeuner Pitta" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Petit-déjeuner</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Yaourt doux avec fruits frais</li>
                        <li>– Concombre ou melon rafraîchissant</li>
                        <li>– Céréales complètes froides ou tièdes</li>
                        <li>– Épices douces : coriandre, fenouil, cardamome</li>
                        <li>– Tisane à la menthe ou eau de coco</li>
                        <li>– Éviter les agrumes et épices piquantes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={dejPitta} alt="Déjeuner Pitta" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Repas du midi</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Riz basmati nature</li>
                        <li>– Curry doux aux légumes</li>
                        <li>– Raita (yaourt à la menthe ou concombre)</li>
                        <li>– Légumes verts vapeur</li>
                        <li>– Pain naan nature</li>
                        <li>– Lassi à la rose ou eau infusée</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={dinnerPitta} alt="Dîner Pitta" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Repas du soir</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Soupe froide ou tiède aux légumes</li>
                        <li>– Salade de quinoa aux herbes</li>
                        <li>– Légumes sautés à la coriandre</li>
                        <li>– Chapati ou pain plat</li>
                        <li>– Lait d'amande à la cardamome</li>
                        <li>– Infusion de fenouil</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="kapha" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={pdKapha} alt="Petit-déjeuner Kapha" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Petit-déjeuner</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Fruits légers (pomme, poire, baies)</li>
                        <li>– Bouillie de millet ou sarrasin</li>
                        <li>– Miel cru en petite quantité</li>
                        <li>– Épices réchauffantes (gingembre, cannelle)</li>
                        <li>– Tisane au gingembre</li>
                        <li>– Éviter les produits laitiers lourds</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={dejKapha} alt="Déjeuner Kapha" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Repas du midi</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Légumes verts sautés aux épices</li>
                        <li>– Dhal de lentilles au curcuma</li>
                        <li>– Quinoa ou millet</li>
                        <li>– Légumes crucifères (chou, brocoli)</li>
                        <li>– Chapati de sarrasin</li>
                        <li>– Tisane digestive au gingembre</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg overflow-hidden border border-border">
                    <img src={dinnerKapha} alt="Dîner Kapha" className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">Repas du soir</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>– Soupe légère aux légumes verts</li>
                        <li>– Légumes grillés épicés</li>
                        <li>– Salade de graines germées</li>
                        <li>– Galette de sarrasin</li>
                        <li>– Tisane au curcuma et poivre</li>
                        <li>– Éviter de manger tard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Recette Kitcheri */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Recette de base : Le Kitcheri Ayurvédique
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img src={kitcheri} alt="Bol de kitcheri ayurvédique" className="w-full rounded-lg" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Ingrédients</h3>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>– 1 tasse de riz basmati</li>
                  <li>– 1/2 tasse de mung dal (lentilles jaunes)</li>
                  <li>– 4 tasses d'eau</li>
                  <li>– 1 c. à café de curcuma</li>
                  <li>– 1 c. à café de cumin</li>
                  <li>– 1 c. à café de graines de moutarde</li>
                  <li>– 2 c. à soupe de ghee</li>
                  <li>– Sel à votre goût</li>
                  <li>– Coriandre fraîche</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">Préparation</h3>
                <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Rincer le riz et les lentilles</li>
                  <li>Faire chauffer le ghee et ajouter les épices</li>
                  <li>Ajouter le riz et les lentilles, mélanger</li>
                  <li>Verser l'eau et le curcuma</li>
                  <li>Cuire 20-25 minutes à feu doux</li>
                  <li>Garnir de coriandre fraîche</li>
                </ol>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Pour Vata</h4>
                <p className="text-sm text-muted-foreground">Ajouter plus de ghee et des légumes racines</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Pour Pitta</h4>
                <p className="text-sm text-muted-foreground">Réduire les épices piquantes, ajouter de la coriandre</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Pour Kapha</h4>
                <p className="text-sm text-muted-foreground">Moins de riz, plus de légumes et d'épices réchauffantes</p>
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
              FAQ – Atelier de Cuisine Ayurvédique
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
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

      {/* CTA Final */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Prêt à transformer votre alimentation ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour un atelier immersif et repartez avec les clés d'une alimentation équilibrée selon l'Ayurvéda.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Je réserve ma place
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AtelierCuisine;
