import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Award, LucideIcon } from "lucide-react";
import { getAllTeamMembers, TeamMember } from "@/lib/collections-loader";
import { getAboutPage } from "@/lib/pages-loader";

// Images
import dhanvantariImg from "@/assets/about/dhanvantari.webp";
import fireDanceImg from "@/assets/about/fire-dance.webp";
import patrickImg from "@/assets/about/patrick-villette.webp";
import aurelieImg from "@/assets/about/aurelie-peltier.png";
import emmanuelleImg from "@/assets/about/emmanuelle-illien.png";
import patriciaImg from "@/assets/about/patricia-kaci.webp";

// Map des images pour résolution dynamique
const teamImageMap: Record<string, string> = {
  "/src/assets/about/patrick-villette.webp": patrickImg,
  "/src/assets/about/aurelie-peltier.png": aurelieImg,
  "/src/assets/about/emmanuelle-illien.png": emmanuelleImg,
  "/src/assets/about/patricia-kaci.webp": patriciaImg,
};

// Map des icônes pour résolution dynamique
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Heart,
  Award,
};

const getTeamImage = (imagePath: string): string => {
  return teamImageMap[imagePath] || imagePath;
};

const About = () => {
  // Charger les données depuis le CMS
  const pageData = getAboutPage();
  const teamMembers = getAllTeamMembers();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              {pageData.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {pageData.intro}
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
              <span className="text-primary font-medium">{pageData.missionTagline}</span>
              <h2 className="text-3xl font-serif font-semibold">{pageData.missionTitle}</h2>
              <p className="text-xl text-primary/80 font-medium">
                {pageData.missionSubtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pageData.missionText1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pageData.missionText2}
              </p>
              <Button asChild>
                <Link to="/services">Découvrir nos soins</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={dhanvantariImg} 
                alt="Dhanvantari, divinité indienne de la guérison" 
                className="rounded-lg w-full max-w-sm mx-auto"
              />
              <p className="text-xs text-muted-foreground mt-2 text-center italic">
                {pageData.missionImageCaption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <span className="text-primary italic">{pageData.philosophyTagline}</span>
          <h2 className="text-3xl font-serif font-semibold mt-2 mb-6">
            {pageData.philosophyTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {pageData.philosophyText}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">{pageData.valuesTitle}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {pageData.valuesSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pageData.values.map((value) => {
              const IconComponent = iconMap[value.icon] || Shield;
              return (
                <Card key={value.title} className="bg-card border-border text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-4">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-serif font-semibold">{pageData.historyTitle}</h2>
              <p className="text-xl text-primary/80 font-medium">
                {pageData.historySubtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pageData.historyText1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pageData.historyText2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {pageData.historyText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-semibold text-center mb-4">{pageData.teamTitle}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {pageData.teamSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 flex-shrink-0">
                      <img 
                        src={getTeamImage(member.image)} 
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
            {pageData.qualificationsTitle}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {pageData.qualificationsSubtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pageData.qualifications.map((qual) => (
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
              {pageData.ctaTitle}
            </h2>
            <p className="text-muted-foreground mb-8">
              {pageData.ctaText}
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
