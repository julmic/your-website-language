import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass, Sun, MapPin, Building, Quote } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "fondements", title: "Fondements" },
  { id: "cosmologie", title: "Cosmologie" },
  { id: "mandala", title: "Mandala" },
  { id: "directions", title: "Directions" },
  { id: "elements", title: "Éléments" },
  { id: "applications", title: "Applications" },
  { id: "pratique", title: "Pratique" },
];

const VastuShastra = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/philosophie-vedique">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la Philosophie Védique
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            <span className="text-primary">Vastu Shastra</span> – Architecture Sacrée de l'Inde
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            La science millénaire de l'harmonie entre l'espace, l'homme et l'univers
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className="text-sm px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {chapter.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* I. Introduction générale */}
          <section id="introduction">
            <h2 className="text-2xl font-serif text-foreground mb-6">I. Introduction générale</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Définition du Vastu Shastra</h3>
              <p>
                Le terme "Vastu Shastra" dérive du mot sanskrit "Vastu" signifiant "demeure" ou "habitat" et "Shastra" signifiant "science" ou "traité". Cette science ancienne est considérée comme la "science de l'espace" qui établit les principes fondamentaux de l'architecture sacrée. Le Vastu Shastra n'est pas simplement une méthode de construction mais un système complet de compréhension de la relation entre l'homme, l'espace qu'il habite et les forces cosmiques qui l'entourent.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Place dans les Védas</h3>
              <p>
                Le Vastu Shastra trouve ses racines dans les textes védiques, particulièrement dans le Sthapatya Veda, considéré comme un des Upavedas (sciences auxiliaires) du Rig Veda. Cette classification sacrée établit le Vastu Shastra comme une science divine destinée à créer des espaces harmonieux en accord avec les lois universelles.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">But : harmoniser l'être humain avec les forces cosmiques</h3>
              <p>
                L'objectif fondamental du Vastu Shastra est d'harmoniser l'être humain avec les forces cosmiques et terrestres pour favoriser la santé, la prospérité, la paix intérieure et l'évolution spirituelle. En alignant les structures humaines avec les principes universels, le Vastu Shastra transforme l'habitat en un temple vivant.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-foreground italic">
                      Les textes fondamentaux du Vastu Shastra incluent le Manasara, le Mayamata, le Viswakarma Vastu Shastra, le Kashyapa Vastu, et le Brihat Samhita de Varahamihira.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* II. Fondements philosophiques */}
          <section id="fondements" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">II. Fondements philosophiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le cosmos comme architecture divine</h3>
              <p>
                La philosophie du Vastu Shastra repose sur le principe que l'univers entier est une manifestation de l'architecture divine. Chaque élément de la création reflète une structure cosmique parfaite qui peut être reproduite à l'échelle humaine dans les constructions.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Purusha : l'univers comme corps cosmique</h3>
              <p>
                Le concept du Purusha cosmique est central dans la philosophie du Vastu Shastra. L'univers est perçu comme le corps d'un être divin couché, avec sa tête au nord-est et ses pieds au sud-ouest. Cette métaphore cosmologique établit les principes directionnels fondamentaux qui guident l'orientation et l'organisation des espaces construits.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les cinq éléments (Pancha Mahabhutas)</h3>
              <p>
                Les cinq éléments fondamentaux - Prithvi (terre), Jala (eau), Agni (feu), Vayu (air) et Akasha (éther) - constituent la base de toute existence matérielle. Le Vastu Shastra utilise ces éléments pour équilibrer les forces naturelles dans les constructions. Chaque élément est associé à une direction spécifique et à des qualités énergétiques particulières.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les trois Gunas et la qualité de l'espace</h3>
              <p>
                Les trois Gunas - Sattva (harmonie), Rajas (activité) et Tamas (inertie) - déterminent la qualité énergétique d'un espace. Un espace bien conçu selon les principes du Vastu Shastra favorise le Sattva, créant un environnement propice à la paix intérieure et à la croissance spirituelle.
              </p>
            </div>
          </section>

          {/* III. La cosmologie du Vastu */}
          <section id="cosmologie">
            <h2 className="text-2xl font-serif text-foreground mb-6">III. La cosmologie du Vastu</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les dix directions (Dik) et leurs déités</h3>
              <p>
                Le système directionnel du Vastu Shastra comprend les dix directions principales : les quatre cardinales (Est, Sud, Ouest, Nord), les quatre intercardinales (Nord-Est, Sud-Est, Sud-Ouest, Nord-Ouest) et les deux directions verticales (haut et bas). Chaque direction est gouvernée par une déité spécifique :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Indra (Est)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Roi des dieux, source de lumière et de prospérité</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Agni (Sud-Est)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Dieu du feu, transformation et purification</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Kubera (Nord)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Dieu de la richesse et de l'abondance</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Varuna (Ouest)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Dieu des eaux et de l'ordre cosmique</p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le principe du centre : Brahmasthan</h3>
              <p>
                Le Brahmasthan, ou centre sacré, représente le point de convergence de toutes les forces directionnelles. Cet espace central doit rester ouvert et non encombré pour permettre la circulation de l'énergie cosmique. Le Brahmasthan symbolise l'unité de l'existence et sert de point focal spirituel pour l'ensemble du bâtiment.
              </p>
            </div>
          </section>

          {/* IV. Le Vastu Purusha Mandala */}
          <section id="mandala" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">IV. Le Vastu Purusha Mandala</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Origine mythique du Vastu Purusha</h3>
              <p>
                Selon le mythe védique, le Vastu Purusha est né de la sueur de Shiva après une bataille cosmique. Les dieux l'ont immobilisé face contre terre et ont assigné des positions spécifiques à 45 divinités pour le maintenir en place. Ce sacrifice cosmique a créé le mandala directionnel qui guide l'architecture sacrée.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le carré sacré : 8×8, 9×9, 64 et 81 divisions</h3>
              <p>
                Le Vastu Purusha Mandala est généralement représenté sous forme de carré divisé en 8×8 ou 9×9 cases, créant respectivement 64 ou 81 divisions. Ces nombres possèdent des significations cosmologiques profondes : 64 représente les aspects de la conscience divine, tandis que 81 symbolise la totalité de l'existence manifestée.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle des 45 Devatas du Mandala</h3>
              <p>
                Les 45 divinités (Devatas) du Vastu Purusha Mandala représentent les forces cosmiques qui gouvernent différents aspects de l'existence. Ces divinités incluent les dieux védiques, les éléments naturels, les directions et les qualités spirituelles. Leur position dans le mandala détermine les qualités énergétiques des zones correspondantes dans une construction.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Home className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Zones énergétiques</h4>
                      <p className="text-muted-foreground text-sm">
                        Les zones positives (Nord, Est, Nord-Est) favorisent la croissance et l'expansion. Les zones neutres (Sud-Est, Nord-Ouest) conviennent aux activités fonctionnelles. Les zones sensibles (Sud, Sud-Ouest, Ouest) nécessitent un agencement particulier.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* V. Les directions et leurs significations */}
          <section id="directions">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Les directions et leurs significations</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Est (Purva)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Direction du soleil levant, associée à la lumière, la connaissance et les nouveaux commencements. L'entrée principale orientée vers l'Est favorise la prospérité et la santé.
                  </p>
                  <p className="text-sm text-foreground font-medium">Déité : Indra</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Nord (Uttara)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Direction de la richesse et de l'abondance. Le Nord doit rester ouvert et lumineux pour attirer la prospérité. C'est la direction idéale pour les bureaux et les espaces de travail.
                  </p>
                  <p className="text-sm text-foreground font-medium">Déité : Kubera</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Nord-Est (Ishanya)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Direction sacrée par excellence, associée à la méditation et à la spiritualité. Cette zone doit être maintenue propre et légère. Idéale pour un espace de prière ou de méditation.
                  </p>
                  <p className="text-sm text-foreground font-medium">Déité : Eshana (Shiva)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Sud-Ouest (Nairutya)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Direction de la stabilité et de l'ancrage. Cette zone doit être la plus lourde et la plus solide de la construction. Idéale pour la chambre principale du chef de famille.
                  </p>
                  <p className="text-sm text-foreground font-medium">Déité : Nirriti</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* VI. Les cinq éléments */}
          <section id="elements" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Les cinq éléments dans le Vastu</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">🌍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Prithvi (Terre) - Sud-Ouest</h4>
                  <p className="text-muted-foreground text-sm">
                    L'élément terre apporte stabilité et ancrage. Il est associé au Sud-Ouest, direction de la solidité et de la permanence. Les constructions lourdes et les espaces de stockage conviennent à cette zone.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">💧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Jala (Eau) - Nord-Est</h4>
                  <p className="text-muted-foreground text-sm">
                    L'élément eau représente la purification et le flux de l'énergie vitale. Le Nord-Est, direction la plus sacrée, est associé à cet élément. Les sources d'eau, puits et réservoirs doivent être placés dans cette zone.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">🔥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Agni (Feu) - Sud-Est</h4>
                  <p className="text-muted-foreground text-sm">
                    L'élément feu symbolise la transformation et l'énergie. Le Sud-Est est la direction du feu, idéale pour la cuisine et les sources de chaleur. Cette orientation favorise la digestion et la vitalité.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">💨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vayu (Air) - Nord-Ouest</h4>
                  <p className="text-muted-foreground text-sm">
                    L'élément air représente le mouvement et la communication. Le Nord-Ouest est associé à cet élément, favorisant les chambres d'invités et les espaces de transition.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Akasha (Éther) - Centre</h4>
                  <p className="text-muted-foreground text-sm">
                    L'élément éther représente l'espace et la conscience. Le centre de la maison (Brahmasthan) est associé à cet élément et doit rester ouvert pour permettre la libre circulation de l'énergie cosmique.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* VII. Applications pratiques */}
          <section id="applications">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Applications pratiques</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'entrée principale</h3>
              <p>
                L'entrée principale est considérée comme la "bouche" de la maison par laquelle l'énergie vitale (prana) pénètre. L'orientation idéale est vers l'Est ou le Nord. L'entrée doit être bien éclairée, sans obstructions, et légèrement plus élevée que le niveau du sol extérieur.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La cuisine</h3>
              <p>
                La cuisine doit idéalement être située au Sud-Est, direction d'Agni (le feu). La personne qui cuisine doit faire face à l'Est pendant la préparation des repas. Les sources d'eau et de feu ne doivent pas être adjacentes.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les chambres</h3>
              <p>
                La chambre principale convient au Sud-Ouest, direction de la stabilité. La tête du lit doit être orientée vers le Sud ou l'Est pour un sommeil réparateur. Les miroirs ne doivent pas refléter le lit pendant le sommeil.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'espace de méditation</h3>
              <p>
                Un espace de méditation ou de prière est idéalement placé au Nord-Est, la direction la plus spirituelle. Cette zone doit être maintenue propre, légère et paisible.
              </p>
            </div>
          </section>

          {/* VIII. Pratique contemporaine */}
          <section id="pratique" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Le Vastu dans le monde moderne</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Le Vastu Shastra continue d'influencer l'architecture contemporaine, particulièrement en Inde où de nombreux architectes et propriétaires intègrent ces principes dans leurs conceptions. L'application moderne du Vastu adapte les principes traditionnels aux contraintes de la vie urbaine et aux matériaux de construction contemporains.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-foreground italic mb-2">
                        "L'habitat n'est pas simplement un abri physique mais un espace vivant qui influence profondément le bien-être de ses occupants."
                      </p>
                      <p className="text-muted-foreground text-sm">— Principe fondamental du Vastu Shastra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Conseils pratiques pour commencer</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Désencombrer</h4>
                    <p className="text-sm text-muted-foreground">
                      Commencez par désencombrer votre espace, particulièrement le centre de la maison et les coins Nord-Est.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Lumière naturelle</h4>
                    <p className="text-sm text-muted-foreground">
                      Maximisez la lumière naturelle, particulièrement dans les zones Est et Nord.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Plantes</h4>
                    <p className="text-sm text-muted-foreground">
                      Placez des plantes au Nord et à l'Est pour activer les énergies positives.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Couleurs</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilisez des couleurs apaisantes au Nord-Est et des couleurs chaleureuses au Sud-Est.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-center pt-8">
            <Button asChild>
              <Link to="/philosophie-vedique">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à la Philosophie Védique
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VastuShastra;
