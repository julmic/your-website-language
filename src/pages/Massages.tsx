import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { getAllMassages } from "@/lib/massages-loader";
import { massageImageMap, abhyangaImg } from "@/lib/massage-images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Phone, AlertCircle, Leaf, Droplets } from "lucide-react";

const faqData = [
  {
    question: "Par quel massage ayurvédique vaut-il mieux commencer ?",
    answer: "Le massage par lequel nous commençons généralement est l'abhyanga. Il est en effet considéré comme un massage « d'entretien » en Inde qui permet de faire circuler et de rééquilibrer l'énergie dans l'ensemble du corps physique. Il existe trois abhyanga, chacun étant adapté par le praticien à votre constitution."
  },
  {
    question: "J'ai des problèmes de peau, puis-je recevoir un massage ayurvédique ?",
    answer: "Tout dépend des problèmes de peau que vous avez. Si, par exemple, vous avez quelques plaques d'eczéma à certaines zones de votre corps physique, vous pouvez recevoir un massage. A ces endroits, le praticien pourra adapter l'huile utilisée à l'inflammation dont vous souffrez."
  },
  {
    question: "Je suis enceinte. Puis-je être massée ?",
    answer: "Vous pouvez être massée à partir du 3ème mois de votre grossesse. Il existe un massage parfaitement adapté à votre état."
  },
  {
    question: "Y a-t-il des contre-indications à un abhyanga ?",
    answer: "L'abhyanga et les massages ayurvédiques en général sont déconseillés si vous avez de la fièvre."
  },
  {
    question: "Les enfants et les adolescents peuvent-ils recevoir des massages ayurvédiques ? Si oui lesquels ?",
    answer: "Les enfants et les adolescents peuvent recevoir des massages ayurvédiques à condition qu'un parent majeur soit présent pendant le massage. D'autre part nous ne massons les mineurs qu'avec leur accord. Quels massages ?... L'abhyanga enfant est pratiqué pour les enfants à partir de 8 ans et dure 30 minutes; l'abhyanga adolescent est pratiqué à partir de 12 ans et dure 40 minutes."
  },
  {
    question: "Je suis pudique. Est-il possible d'être massé sans être nu ?",
    answer: "Quel que soit le massage que vous recevez, vous n'êtes jamais intégralement nu : vous portez un pagne jetable qui vous est fourni. Si cette nudité, même partielle, reste un frein pour vous, vous pouvez recevoir un massage au sol (mardanam) pendant lequel vous restez habillé. Le massage au bol kansu est également possible. C'est un massage des pieds où seuls pieds et mollets sont découverts."
  },
  {
    question: "Dans quel état est-on après un massage ayurvédique ?",
    answer: "L'état ressenti après un massage ayurvédique dépend de chacun et varie au fil des massages y compris pour une même personne. Vous pouvez aussi bien vous sentir ancré, posé comme vous pouvez vous sentir « laxe », détendu ou même très tonique. Il n'y a pas de règle."
  },
  {
    question: "Y a-t-il des recommandations à suivre après un massage ?",
    answer: "Pour conserver les bienfaits d'un massage ayurvédique, nous vous recommandons de garder l'huile sur votre peau si possible pendant 2 heures avant de prendre une douche. Si vous éprouvez le besoin d'avoir un sas avant de reprendre votre véhicule, n'hésitez pas à prendre l'air, à faire quelques pas dans la nature, à votre rythme. Quel que soit le massage que vous recevez, une plage de repos est prévue au centre ayurvédique, avant que le praticien ne revienne vous chercher."
  },
  {
    question: "Que dois-je apporter en prévision d'un massage ?",
    answer: "Vous devez prévoir des sous-vêtements qui ne craignent pas d'éventuelles traces d'huile ainsi que des vêtements souples et amples. Serviettes et pagne jetable sont prévus par le centre."
  },
  {
    question: "Les massages ayurvédiques sont-ils remboursés ?",
    answer: "Cela dépend de votre mutuelle et du contrat que vous avez. Si votre mutuelle rembourse totalement ou partiellement les massages ayurvédiques, n'hésitez pas à nous en faire part. Nous vous ferons alors parvenir une facture."
  },
  {
    question: "À quelle fréquence est-il recommandé de se faire masser ?",
    answer: "Se faire masser une fois par mois est idéal pour entretenir l'équilibre et la vitalité de votre corps physique. Cette recommandation est bien entendu à adapter aux éventuelles problématiques que vous rencontrez."
  },
  {
    question: "Vaut-il mieux se faire masser régulièrement ou faire une cure ?",
    answer: "Lors de massages réguliers vous permettez un bon entretien de votre corps physique, en débloquant les zones de tension avant qu'elles ne s'enkystent, en faisant circuler l'énergie. Lors d'une cure, vous prenez 3 jours, 7 jours, 10 jours (voire plus) avec vous-même. Vous recevez chaque jour des massages, des soins, une alimentation adaptée à votre constitution, pour une récupération en profondeur. Massages et cures ayurvédiques sont complémentaires."
  },
  {
    question: "Combien de temps dure un massage ayurvédique ?",
    answer: "Un massage ayurvédique dure de 45 à 70 minutes."
  },
  {
    question: "Pourquoi ce temps est-il nécessaire ?",
    answer: "Ce temps dépend de votre constitution, Vata, Pitta, Kapha: un massage Vata dure 45 minutes, un massage Pitta 50 minutes, un massage Kapha 60 minutes."
  },
  {
    question: "Est-ce que le massage Ayurvédique est douloureux ?",
    answer: "L'intensité du massage est adaptée à chaque constitution ou pathologie: pour vata la pression est légère et délicate, pour pitta le massage est enveloppant et doux, pour kapha le toucher est plus appuyé."
  },
  {
    question: "Quelle huile utilisez-vous ?",
    answer: "Le choix de l'huile se fait selon le dosha et les besoins de la personne, de l'huile chaude ou froide. Toutes nos huiles sont BIO."
  },
  {
    question: "Comment dois-je me préparer avant le massage ?",
    answer: "Voici quelques recommandations pour les heures précédant le massage: pas d'exposition prolongée au soleil, pas de repas pimenté, pas d'effort physique intense (sport), pas de sudation (sauna), et pour vous, Mesdames, pas pendant vos règles. Un autre conseil pour les dames: éviter le maquillage des yeux et du visage avant de recevoir votre massage."
  },
  {
    question: "Comment déterminez-vous mon dosha ?",
    answer: "Nous déterminons votre dosha par l'observation et la prise de pouls. Nous adaptons ainsi le massage à votre constitution."
  },
  {
    question: "Que soignent les massages ayurvédiques ?",
    answer: "Les massages ayurvédiques sont nombreux et chacun comporte des bienfaits précis. Voici quelques exemples de maux ou d'inconforts soignés: stress, insomnie, douleur musculaire, circulation sanguine, digestion, etc."
  },
  {
    question: "Je n'aime pas que l'on me touche la tête, est-ce possible ?",
    answer: "Une explication détaillée de l'importance de la tête et du crâne en ayurveda, vous sera donnée pour que vous compreniez l'utilité de masser votre tête."
  },
];

const Massages = () => {
  const massages = getAllMassages();

  const getMassageImage = (slug: string): string => {
    return massageImageMap[slug] || abhyangaImg;
  };

  return (
    <Layout>
      <Helmet>
        <title>Massages Ayurvédiques Traditionnels | Centre Arkadhya</title>
        <meta
          name="description"
          content="Découvrez nos massages ayurvédiques traditionnels : Abhyanga, Shirodhara, Udvartana et plus. Thérapies manuelles adaptées à chaque constitution pour un bien-être profond."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Massages Ayurvédiques <span className="text-primary">Traditionnels</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Les massages de tradition ayurvédique de Ahrahara sont des thérapies manuelles adaptées à chaque déséquilibre. 
              Ces traitements offrent un bien-être profond en agissant sur les différentes parties du corps. L'ayurvéda, 
              une médecine traditionnelle indienne, considère que le corps et l'esprit sont étroitement liés, et ces massages 
              visent à rétablir l'harmonie entre les deux. Grâce à des pressions, des étirements et des mouvements spécifiques, 
              les massages d'Ahrahara sont capables de soulager les tensions musculaires, d'améliorer la circulation sanguine 
              et de détendre le corps et l'esprit. Que vous ayez des problèmes de digestion, de sommeil ou de stress, 
              les massages de tradition ayurvédique sont une solution naturelle et efficace pour retrouver un équilibre intérieur.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Sur rendez-vous uniquement</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>45 à 70 minutes</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm">
                <Droplets className="w-4 h-4 text-primary" />
                <span>Huiles 100% BIO</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-sm">
                <Leaf className="w-4 h-4 text-primary" />
                <span>Adapté à votre dosha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massages Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-center">
              Nos <span className="text-primary">Massages</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Découvrez notre gamme complète de massages ayurvédiques, chacun adapté à des besoins spécifiques.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {massages.map((massage) => (
                <Card
                  key={massage.slug}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50"
                >
                  <Link to={`/services/${massage.slug}`}>
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={getMassageImage(massage.slug)}
                        alt={massage.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {massage.cureOnly && (
                        <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">
                          Cure uniquement
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {massage.title}
                      </h3>
                      {massage.subtitle && (
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {massage.subtitle}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm">
                        {massage.prices.length > 0 && !massage.cureOnly ? (
                          <>
                            <span className="text-muted-foreground">
                              {massage.prices[0].duration}
                            </span>
                            <span className="font-semibold text-primary">
                              {massage.prices[0].price}
                            </span>
                          </>
                        ) : massage.cureOnly ? (
                          <span className="text-muted-foreground italic">
                            Réservé aux cures
                          </span>
                        ) : null}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-secondary/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Les prestations proposées sont des massages de relaxation sans caractère médical ou thérapeutique. 
                  Elles ne se substituent pas à un traitement ou diagnostic médical. Pour toute question concernant 
                  votre santé, consultez un professionnel de santé.
                </p>
                <p className="text-xs">
                  Compte tenu de la loi du 30/04/1946 et du décret 60669 du 04/07/1960, l'article 489 L et de l'arrêté 
                  du 08/10/1996, il ne s'agit nullement de massages médicaux ou de kinésithérapie, mais de techniques 
                  de bien-être dans la relaxation et la détente libératrice de tout stress.
                </p>
              </div>
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
              Vous souhaitez bénéficier des bienfaits des massages ayurvédiques du centre Arkadhya ? 
              Voici des éléments de réponses aux questions qui nous sont le plus fréquemment posées.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Cette liste n'étant pas exhaustive, n'hésitez pas à{" "}
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  nous contacter
                </Link>{" "}
                ou appeler le{" "}
                <a href="tel:0553414810" className="text-primary font-medium hover:underline">
                  05 53 41 48 10
                </a>
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
              Besoin de <span className="text-primary">Conseils</span> ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Notre équipe est à votre disposition pour vous guider dans le choix du massage 
              le plus adapté à vos besoins et à votre constitution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:0553414810">
                  <Phone className="w-4 h-4 mr-2" />
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

export default Massages;
