import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Tradition",
    description: "Nous respectons les enseignements millénaires de l'Ayurvéda tout en les adaptant au monde moderne.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Chaque personne est unique. Nous offrons une approche personnalisée et attentive à vos besoins.",
  },
  {
    icon: Users,
    title: "Transmission",
    description: "Nous partageons notre savoir pour vous rendre acteur de votre propre bien-être.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Des praticiens certifiés et formés en Inde, garants d'un savoir-faire authentique.",
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
              À propos d'Arkadhya
            </h1>
            <p className="text-lg text-muted-foreground">
              Un centre dédié à l'art de vivre ayurvédique, au cœur de l'Aquitaine
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold">Notre Histoire</h2>
              <p className="text-muted-foreground leading-relaxed">
                Arkadhya est né d'une passion profonde pour l'Ayurvéda, cette science de la vie vieille de plus de 5000 ans. Après de nombreux voyages en Inde et des années de formation auprès de maîtres reconnus, nous avons créé ce centre pour partager cette sagesse ancestrale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre mission est de vous accompagner vers un équilibre durable, en respectant les principes fondamentaux de l'Ayurvéda : comprendre votre constitution unique, identifier les déséquilibres et les corriger naturellement grâce aux soins, à l'alimentation et au mode de vie.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le nom "Arkadhya" signifie "digne du soleil" en sanskrit, symbolisant notre engagement à vous aider à révéler votre lumière intérieure et à vivre en harmonie avec les cycles de la nature.
              </p>
            </div>
            <div className="h-96 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Dr. Priya Sharma", role: "Fondatrice & Praticienne", specialty: "Consultations, Panchakarma" },
              { name: "Antoine Dubois", role: "Praticien Massages", specialty: "Abhyanga, Shirodhara" },
              { name: "Marie Martin", role: "Formatrice", specialty: "Cuisine ayurvédique, Yoga" },
            ].map((member) => (
              <Card key={member.name} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurveda Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">Qu'est-ce que l'Ayurvéda ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              L'Ayurvéda, qui signifie "science de la vie" en sanskrit, est un système de médecine holistique originaire de l'Inde. Vieux de plus de 5000 ans, il considère chaque individu comme unique et vise à maintenir l'équilibre entre le corps, l'esprit et l'âme.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Selon l'Ayurvéda, chaque personne est constituée d'une combinaison unique des trois doshas : <span className="text-primary font-medium">Vata</span> (air et éther), <span className="text-primary font-medium">Pitta</span> (feu et eau) et <span className="text-primary font-medium">Kapha</span> (terre et eau). La santé optimale est atteinte lorsque ces trois énergies sont en équilibre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              À travers l'alimentation, les soins corporels, les plantes médicinales, le yoga et la méditation, l'Ayurvéda offre une approche complète pour préserver la santé et prévenir les maladies.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
