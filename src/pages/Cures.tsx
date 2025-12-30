import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Calendar, Euro, Home, Utensils, Phone } from "lucide-react";
import { getAllCures, CureData } from "@/lib/cures-loader";
import { resolveCureImage } from "@/lib/cure-images";

const faqData = [
  {
    question: "Je suis végétarien et ne supporte pas le gluten, vais-je pouvoir conserver les principes de mon régime alimentaire ?",
    answer: "Nos repas sont sans viande ni poisson, ni œufs. Les aliments sont également sans gluten, de manière à éviter toute réaction allergique ou inflammatoire du corps physique."
  },
  {
    question: "Je ne suis pas malade, seulement fatiguée. Les cures sont-elles faites pour moi ?",
    answer: "Les cures ayurvédiques sont adaptées à votre état physique et émotionnel, que vous ayez des problèmes de santé ou pas. La fatigue, le stress, ou tout simplement le besoin de se retrouver avec soi-même, au calme, sont autant de raisons pour faire une cure."
  },
  {
    question: "Je suis âgée de plus de 80 ans. Puis-je bénéficier d'une cure ?",
    answer: "Bien sûr ! Nous vous accueillons jusqu'à 100 ans et plus. Simplement, les soins seront particulièrement doux et enveloppants."
  },
  {
    question: "Puis-je me promener après les soins ou est-il préférable que je reste me reposer dans ma chambre ?",
    answer: "Vous pouvez bien sûr vous promener tranquillement après les soins du jour. Le parc est vaste, arboré et fleuri. Si vous avez le moindre doute sur vos capacités physiques jour après jour, nous sommes là pour vous conseiller."
  },
  {
    question: "J'ai déjà fait des cures dans des spas et je me suis senti un peu comme un numéro parmi de nombreux autres curistes. Comment cela se passe-t-il au centre Arkadhya ?",
    answer: "Nous avons à cœur de vous accueillir, vous, et de vous prodiguer des soins personnalisés, sans vous réduire à une « pathologie ». Vous serez suivi par une unique personne au fil de votre cure de manière à assurer une continuité et une cohérence de soins. Nous accueillons au maximum 3 curistes sur une même semaine."
  },
  {
    question: "Quel hébergement proposez-vous ? Les chambres sont-elles individuelles ou collectives ?",
    answer: "L'hébergement est exclusivement en chambre individuelle, de manière à respecter votre intimité et votre besoin de repos et d'intégration des soins."
  },
  {
    question: "J'ai des difficultés à me déplacer, notamment avec des bagages. Comment puis-je faire pour rejoindre le centre ayurvédique ?",
    answer: "Si vous prenez le train jusqu'à Agen et le car jusqu'à la gare routière de Villeneuve sur Lot, vous pouvez bénéficier de services SNCF pour porter vos bagages puis de l'aide d'un voyageur pour ranger vos valises. Des taxis existent (Taxi Adrien 06 45 02 36 73) pour vous conduire ensuite au centre Arkadhya."
  },
  {
    question: "Je viens en voiture. Où puis-je me garer ?",
    answer: "Un parking est à votre disposition dans le parc. Vous pourrez garer votre voiture en toute tranquillité."
  },
  {
    question: "Que dois-je apporter pour l'hébergement et pour les soins ?",
    answer: "Les draps, taies d'oreiller et couvertures sont fournis. Vous devez apporter un peignoir léger (par exemple en matière « nid d'abeille ») et quelques sous-vêtements ne craignant pas l'huile en prévision des soins ; des vêtements amples et souples, des chaussures confortables (du style baskets) ainsi que votre nécessaire de toilette pour vos demi-journées de détente et de repos."
  },
  {
    question: "Des options payantes s'ajoutent-elles aux tarifs indiqués sur le site d'Arkadhya ?",
    answer: "Il n'y a aucun ajout aux tarifs affichés sur le site. Pour connaître le prix total de votre cure, il vous suffit de multiplier le tarif journalier de la cure choisie par le nombre de jours souhaités. Le prix comprend l'hébergement, les soins, et les repas."
  },
  {
    question: "Dois-je arrêter mon traitement médical pendant la cure ?",
    answer: "Non, pensez à prendre vos médicaments."
  },
  {
    question: "Combien de temps à l'avance dois-je m'y prendre pour réserver ma cure ?",
    answer: "Les réservations des cures de l'année sont ouvertes à partir du mois de février. Par exemple, si vous souhaitez une cure au mois de juillet 2026, nous vous recommandons de nous contacter dès février 2026. Il est bien entendu possible de nous appeler plus tardivement pour savoir si vos dates sont encore disponibles à la réservation."
  }
];

const getImage = (cure: CureData): string => {
  return resolveCureImage(cure.slug, cure.image);
};

const cures = getAllCures();

const Cures = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
              Cures Ayurvédiques
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez nos cures en résidentiel au cœur de l'Aquitaine. Une expérience 
              de détoxification et de régénération profonde dans un cadre paisible.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Jusqu'à 14 jours</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Home className="h-4 w-4 text-primary" />
                <span>Chambre individuelle</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                <Utensils className="h-4 w-4 text-primary" />
                <span>Repas inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Cures Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cures.map((cure, index) => (
                <Card 
                  key={index} 
                  className={`bg-card border-border hover:border-primary/30 transition-all hover:shadow-lg overflow-hidden group ${
                    cure.highlight ? 'ring-2 ring-primary/50' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={getImage(cure)} 
                      alt={cure.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    {cure.highlight && (
                      <span className="absolute top-3 left-3 text-xs font-medium text-primary-foreground bg-primary px-2 py-1 rounded-full">
                        Cure phare
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-serif font-semibold text-foreground">{cure.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {cure.description.split('\n')[0]}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {cure.durationsText || 'Sur mesure'}
                        </span>
                        <span className="font-semibold text-primary flex items-center gap-1">
                          <Euro className="h-4 w-4" />
                          {cure.price}
                        </span>
                      </div>
                      <Button className="w-full" variant="outline" asChild>
                        <Link to={`/cures/${cure.slug}`}>Découvrir cette cure</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">
              Informations <span className="text-primary">Pratiques</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Ce qui est inclus</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Hébergement en chambre individuelle</li>
                    <li>✓ Tous les repas (cuisine ayurvédique)</li>
                    <li>✓ Soins et traitements quotidiens</li>
                    <li>✓ Consultations ayurvédiques</li>
                    <li>✓ Tisanes et chai à volonté</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Bon à savoir</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Les cures se déroulent en présentiel</li>
                    <li>• Durée maximale : 14 jours</li>
                    <li>• Régimes spéciaux : +40€/jour</li>
                    <li>• Acompte non remboursable si annulation 7 jours avant</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-center">
              Foire aux <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Vous souhaitez bénéficier des bienfaits d'une cure ayurvédique au centre Arkadhya ? 
              Voici des éléments de réponses aux questions qui nous sont le plus fréquemment posées.
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Cette liste n'étant pas exhaustive, n'hésitez pas à{" "}
                <Link to="/contact" className="text-primary font-medium hover:underline">nous contacter</Link>
                {" "}ou appeler le{" "}
                <a href="tel:0553414810" className="text-primary font-medium">05 53 41 48 10</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Besoin de Conseils ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Vous hésitez entre plusieurs cures ? Contactez-nous pour un échange 
              personnalisé et trouver la cure qui correspond à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0553414810" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  05 53 41 48 10
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cures;
