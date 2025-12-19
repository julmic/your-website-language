import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Leaf,
  Star
} from "lucide-react";

const ConsultationsAyurveda = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Équilibre des doshas",
      description: "Rétablissement de l'harmonie entre Vata, Pitta et Kapha"
    },
    {
      icon: Brain,
      title: "Clarté mentale",
      description: "Amélioration de la concentration et réduction du stress"
    },
    {
      icon: Leaf,
      title: "Vitalité retrouvée",
      description: "Renforcement de l'énergie vitale (Ojas) et de l'immunité"
    },
    {
      icon: Star,
      title: "Prévention",
      description: "Identification précoce des déséquilibres avant l'apparition des symptômes"
    }
  ];

  const consultationTypes = [
    {
      title: "Bilan de santé CHIKITSA",
      description: "Analyse complète de votre constitution (Prakriti) et de vos déséquilibres actuels (Vikriti). Diagnostic par le pouls, l'observation et le questionnaire approfondi.",
      link: "/bilan-de-sante",
      duration: "1h30 à 2h",
      icon: Stethoscope
    },
    {
      title: "Accompagnement Bhutavidya",
      description: "Psychologie ayurvédique pour un équilibre mental et émotionnel. Travail sur les mémoires cellulaires et les schémas récurrents.",
      link: "/bhutavidya",
      duration: "1h à 1h30",
      icon: Brain
    }
  ];

  const targetAudience = [
    "Personnes souhaitant comprendre leur constitution unique",
    "Ceux qui recherchent une approche naturelle et préventive de la santé",
    "Personnes souffrant de troubles chroniques (digestifs, sommeil, stress...)",
    "Femmes enceintes ou en post-partum",
    "Personnes en quête d'équilibre émotionnel et mental",
    "Sportifs cherchant à optimiser leur récupération",
    "Seniors souhaitant maintenir leur vitalité"
  ];

  const faqItems = [
    {
      question: "Qu'est-ce qu'une consultation ayurvédique ?",
      answer: "Une consultation ayurvédique est un bilan complet de votre état de santé selon les principes de l'Ayurveda. Le praticien analyse votre constitution de naissance (Prakriti), identifie vos déséquilibres actuels (Vikriti) et établit un programme personnalisé incluant alimentation, hygiène de vie et soins adaptés."
    },
    {
      question: "Combien de temps dure une consultation ?",
      answer: "Une première consultation dure généralement entre 1h30 et 2h. Les consultations de suivi sont plus courtes, environ 45 minutes à 1h. Ce temps permet une analyse approfondie et l'établissement d'un protocole personnalisé."
    },
    {
      question: "Dois-je préparer quelque chose avant ma consultation ?",
      answer: "Il est recommandé de venir à jeun ou après un repas léger. Apportez vos éventuels bilans médicaux récents. Notez également vos questions et les symptômes que vous souhaitez aborder."
    },
    {
      question: "L'Ayurveda peut-il remplacer la médecine conventionnelle ?",
      answer: "L'Ayurveda est une approche complémentaire qui ne remplace pas la médecine conventionnelle. Nous travaillons en collaboration avec votre parcours médical et ne vous demanderons jamais d'arrêter un traitement prescrit par votre médecin."
    },
    {
      question: "Combien de consultations sont nécessaires ?",
      answer: "Cela dépend de votre situation. Généralement, un suivi de 3 à 6 mois avec des consultations espacées permet d'observer des améliorations durables. Certaines personnes choisissent ensuite un suivi annuel préventif."
    },
    {
      question: "Les consultations sont-elles remboursées ?",
      answer: "L'Ayurveda n'est pas pris en charge par la Sécurité sociale. Cependant, certaines mutuelles proposent un forfait \"médecines douces\". Renseignez-vous auprès de votre complémentaire santé."
    }
  ];

  // Schema.org FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Consultation Ayurvédique : Bilan, Diagnostic et Accompagnement | Arkadhya</title>
        <meta 
          name="description" 
          content="Consultation ayurvédique personnalisée en Aquitaine. Bilan de santé Prakriti/Vikriti, diagnostic par le pouls, accompagnement sur-mesure. Centre Arkadhya." 
        />
        <meta 
          name="keywords" 
          content="consultation ayurvédique, bilan ayurveda, prakriti vikriti, diagnostic ayurvédique, ayurveda aquitaine, médecine ayurvédique" 
        />
        <link rel="canonical" href="https://arkadhya.org/consultations-ayurveda" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Consultations & Soins
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Consultation ayurvédique : bilan, diagnostic et accompagnement personnalisé
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez votre constitution unique et retrouvez l'équilibre grâce à une approche 
              holistique millénaire. Nos praticiens certifiés vous guident vers une santé optimale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/bilan-de-sante">
                  Découvrir le bilan CHIKITSA
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ayurvedic Consultation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Qu'est-ce qu'une consultation Ayurveda ?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                La consultation ayurvédique est bien plus qu'un simple examen médical. C'est une rencontre 
                profonde avec vous-même, guidée par un praticien formé aux traditions ancestrales de l'Inde.
              </p>
              <p className="text-muted-foreground mb-4">
                L'Ayurveda considère chaque individu comme unique, avec sa propre constitution 
                (<strong>Prakriti</strong>) déterminée à la naissance. Cette constitution influence votre 
                morphologie, votre métabolisme, vos tendances émotionnelles et votre prédisposition à 
                certains déséquilibres.
              </p>
              <p className="text-muted-foreground">
                L'objectif de la consultation est d'identifier vos déséquilibres actuels (<strong>Vikriti</strong>) 
                et de vous proposer un accompagnement sur-mesure pour retrouver l'harmonie entre corps, 
                mental et esprit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a Session Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
              Comment se déroule une séance ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Anamnèse approfondie</h3>
                <p className="text-muted-foreground text-sm">
                  Questionnaire détaillé sur votre histoire de vie, habitudes, alimentation, sommeil, 
                  digestion et antécédents.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Diagnostic ayurvédique</h3>
                <p className="text-muted-foreground text-sm">
                  Prise du pouls (Nadi Pariksha), observation de la langue, des yeux, de la peau 
                  et de la morphologie.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Programme personnalisé</h3>
                <p className="text-muted-foreground text-sm">
                  Recommandations alimentaires, routines quotidiennes, soins adaptés et 
                  éventuellement compléments ayurvédiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Consultations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
              Les différents types de consultations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {consultationTypes.map((type, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <type.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {type.duration}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <Button asChild variant="link" className="p-0">
                      <Link to={type.link} className="flex items-center gap-2">
                        En savoir plus
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Découvrez également nos <Link to="/services" className="text-primary hover:underline">massages ayurvédiques</Link> pour 
                compléter votre accompagnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
              Les bénéfices d'une consultation ayurvédique
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Pour qui est-ce adapté ?
            </h2>
            <p className="text-muted-foreground mb-8">
              L'Ayurveda s'adresse à tous, quel que soit l'âge ou la condition physique. 
              Nos consultations sont particulièrement bénéfiques pour :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium">
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

      {/* Tarifs & CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Tarifs et réservation
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous pour votre première consultation ayurvédique. 
              Notre équipe vous accueille dans un cadre apaisant propice à la guérison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/cures">
                  Découvrir nos cures
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Vous avez des questions ? Consultez nos{" "}
              <Link to="/cgv" className="text-primary hover:underline">
                conditions générales de vente
              </Link>{" "}
              ou{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contactez-nous
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConsultationsAyurveda;
