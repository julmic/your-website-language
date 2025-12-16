import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Award } from "lucide-react";

// Images
import dhanvantariImg from "@/assets/about/dhanvantari.webp";
import fireDanceImg from "@/assets/about/fire-dance.webp";
import patrickImg from "@/assets/about/patrick-villette.webp";
import aurelieImg from "@/assets/about/aurelie-peltier.png";
import emmanuelleImg from "@/assets/about/emmanuelle-illien.png";
import patriciaImg from "@/assets/about/patricia-kaci.webp";

const values = [
  {
    icon: Shield,
    title: "Authenticité",
    description: "Des soins fidèles à l'Ayurvéda traditionnel, effectués avec précision et respect. Nous croyons en l'approche holistique qui vise à équilibrer le corps, l'esprit et l'âme.",
  },
  {
    icon: Heart,
    title: "Présence",
    description: "Une écoute sincère, un accueil chaleureux et un espace où l'on peut déposer ce que l'on porte. Nous valorisons la connexion avec la nature et les cinq éléments.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Une expertise technique, un soin du détail et un engagement qualitatif constant. Nous nous engageons à préserver et transmettre l'art ancestral de l'Ayurvéda.",
  },
];

const teamMembers = [
  {
    name: "Patrick Villette",
    title: "KAVIRADJA",
    role: "Fondateur / Vaidya Ayurvédique",
    image: patrickImg,
    bio: "Formé à l'ayurvéda à Pune en Inde, vaidya praticien depuis plus de 35 ans. Licence et maîtrise en naturopathie védique (1984-1988), formation en Rasayana (1989), diplôme en Bhutavidya Karma (1995), doctorat en ayurvéda (1998). Pratique clinique à Prabas, Kerala (1999-2001). Fondateur du Centre Ayurvédique Arkadhya en 2001.",
  },
  {
    name: "Aurélie Peltier",
    title: "",
    role: "Technicienne Ayurvédique",
    image: aurelieImg,
    bio: "Formée aux principes de l'Ayurvéda, Aurélie applique les thérapies Panchakarma et massages avec une approche personnalisée. Son écoute bienveillante et sa maîtrise des protocoles ayurvédiques guident les patients vers une hygiène de vie alignée avec les rythmes de la nature.",
  },
  {
    name: "Emmanuelle Illien",
    title: "",
    role: "Praticienne Bhutavidya",
    image: emmanuelleImg,
    bio: "Spécialiste en psychologie védique (Bhutavidya), elle accompagne vers l'équilibre mental et émotionnel grâce aux techniques ancestrales de Satvajaya : respiration connectée, régressions et expansion de conscience.",
  },
  {
    name: "Patricia Kaci",
    title: "",
    role: "Technicienne Ayurvédique",
    image: patriciaImg,
    bio: "Diplômée en psychologie (licence faculté de Toulouse 2004), formée au Centre Ayurvédique Arkadhya par Patrick Villette Kaviradja. Depuis 2006, elle propose des massages ayurvédiques traditionnels à travers la prise de pouls (Vikriti), dans le respect de la singularité de chacun. Elle accompagne également en tant que bénévole des personnes en fin de vie. Contact : 06 74 22 62 50 – 1 rue Eugène le Roy, 24480 Le Buisson de Cadouin.",
  },
];

const qualifications = [
  {
    title: "Technicien / Pravidhika",
    description: "Formation de base aux techniques ayurvédiques et aux massages traditionnels.",
  },
  {
    title: "Praticien / Cikitsaka",
    description: "Praticien qualifié pour les consultations et les soins ayurvédiques complets.",
  },
  {
    title: "Praticien / Bhuta Cikitsaka",
    description: "Spécialiste de la psychologie védique et de l'accompagnement mental/émotionnel.",
  },
  {
    title: "Médecin / Vaidya",
    description: "Titre le plus élevé, doctorat en ayurvéda avec expertise complète de la médecine védique.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              L'art de l'Ayurvéda authentique, au service de votre équilibre
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Arkadhya est né d'une vision simple : offrir un espace où l'on retrouve 
              son souffle, son énergie et son harmonie intérieure.
            </p>
            <p className="text-lg italic text-primary">
              "Prenez soin de votre corps, et votre être tout entier s'ouvrira."
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium">Pourquoi Choisir Arkadhya</span>
              <h2 className="text-3xl font-serif font-semibold">Notre Mission</h2>
              <p className="text-xl text-primary/80 font-medium">
                Prendre soin du vivant en vous.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                L'Ayurvéda est une science millénaire, mais c'est surtout un art du quotidien. 
                Au Centre Ayurvédique Arkadhya en Aquitaine, notre mission est de vous aider 
                à vous reconnecter à votre vitalité naturelle grâce à des soins qualitatifs, 
                une écoute vraie et un accompagnement fondé sur la tradition ancestrale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous vous accueillons dans un espace apaisant, dédié à votre mieux-être. 
                Chaque soin est personnalisé selon vos besoins, afin de vous offrir un moment 
                profondément régénérant et aligné avec la sagesse ayurvédique.
              </p>
              <Button asChild>
                <Link to="/services">Découvrir nos soins</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={dhanvantariImg} 
                alt="Dhanvantari, divinité indienne de la guérison" 
                className="rounded-lg w-full"
              />
              <p className="text-xs text-muted-foreground mt-2 text-center italic">
                Dhanvantari, divinité indienne de la guérison – symbole de l'Ayurvéda traditionnel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <span className="text-primary italic">Notre Philosophie</span>
          <h2 className="text-3xl font-serif font-semibold mt-2 mb-6">
            L'Ayurvéda, une voie vers l'équilibre
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Inspiré par la tradition millénaire de l'Ayurvéda, notre centre vous accompagne 
            vers une harmonie durable du corps et de l'esprit. Nous privilégions des soins 
            authentiques, des huiles de qualité et une écoute profonde pour vous aider 
            à retrouver vitalité et sérénité.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">Nos Valeurs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Les piliers qui guident notre pratique au quotidien
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-4">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={fireDanceImg} 
                alt="Cérémonie védique autour du feu" 
                className="rounded-lg w-full"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-serif font-semibold">Notre Histoire</h2>
              <p className="text-xl text-primary/80 font-medium">
                Une aventure guidée par la passion de l'Ayurvéda
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Arkadhya s'est développé autour d'un désir : créer un lieu où l'on se sent 
                soutenu, considéré et profondément respecté.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le fondateur, Patrick Villette, s'est formé à l'Ayurvéda à Pune en Inde 
                auprès de praticiens ayurvédiques reconnus, avant de créer un espace où 
                tradition, précision et humanité se rencontrent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chaque soin, chaque cure et chaque accompagnement est le fruit de cette 
                expérience et de cette vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">Notre Équipe</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Des experts passionnés, unis par l'amour de l'Ayurvéda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={`Portrait de ${member.name}`}
                        className="w-full h-48 sm:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:w-2/3">
                      <h3 className="text-lg font-serif font-semibold">{member.name}</h3>
                      {member.title && (
                        <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                          {member.title}
                        </p>
                      )}
                      <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">
            Qualifications et Titres en Ayurvéda
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprendre les différents niveaux d'expertise dans la tradition ayurvédique
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qual) => (
              <Card key={qual.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{qual.title}</h3>
                  <p className="text-sm text-muted-foreground">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Prêt à commencer votre voyage vers l'équilibre ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Réservez une consultation pour découvrir comment l'Ayurvéda peut vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/bilan-de-sante">Prendre rendez-vous</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
