import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Home, 
  Compass, 
  Sun, 
  MapPin, 
  Building, 
  Quote,
  Mountain,
  Waves,
  Wind,
  Sparkles,
  Users,
  Target,
  Lightbulb,
  Shield,
  TreePine,
  Palette,
  Settings,
  BookOpen
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "fondements", title: "Fondements" },
  { id: "cosmologie", title: "Cosmologie" },
  { id: "mandala", title: "Mandala" },
  { id: "site", title: "Site" },
  { id: "orientation", title: "Orientation" },
  { id: "elements", title: "Éléments" },
  { id: "mesures", title: "Mesures" },
  { id: "architectures", title: "Architectures" },
  { id: "construction", title: "Construction" },
  { id: "bien-etre", title: "Bien-être" },
  { id: "correction", title: "Remèdes" },
  { id: "contemporain", title: "Contemporain" },
  { id: "sthapati", title: "Sthapati" },
  { id: "annexes", title: "Annexes" },
  { id: "conclusion", title: "Conclusion" },
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
                Le Vastu Shastra trouve ses racines dans les textes védiques, particulièrement dans le Sthapatya Veda, considéré comme un des Upavedas (sciences auxiliaires) du Rig Veda. Le Sthapatya Veda traite spécifiquement de l'architecture, de la construction et de l'urbanisme selon les principes cosmiques. Cette classification sacrée établit le Vastu Shastra comme une science divine destinée à créer des espaces harmonieux en accord avec les lois universelles.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">But : harmoniser l'être humain avec les forces cosmiques</h3>
              <p>
                L'objectif fondamental du Vastu Shastra est d'harmoniser l'être humain avec les forces cosmiques et terrestres pour favoriser la santé, la prospérité, la paix intérieure et l'évolution spirituelle. En alignant les structures humaines avec les principes universels, le Vastu Shastra transforme l'habitat en un temple vivant qui soutient le bien-être physique, mental et spirituel de ses occupants.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Différence avec le Feng Shui</h3>
              <p>
                Bien que le Feng Shui chinois partage des objectifs similaires avec le Vastu Shastra, les deux systèmes diffèrent fondamentalement dans leurs approches. Le Vastu Shastra repose sur des principes cosmologiques védiques immuables basés sur les positions solaires et les directions cardinales fixes, tandis que le Feng Shui utilise un système de boussole variable.
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
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'énergie vitale : Prana dans l'architecture</h3>
              <p>
                Le Prana, ou énergie vitale, circule dans l'univers et peut être canalisé favorablement par une architecture bien conçue. Le Vastu Shastra enseigne comment concevoir des espaces qui favorisent l'entrée et la circulation du Prana, créant ainsi des environnements vivifiants qui soutiennent la santé et le bien-être.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le lien entre espace, karma et bien-être</h3>
              <p>
                Le Vastu Shastra considère que l'espace habité influence directement le karma individuel. Un environnement harmonieux soutient les actions positives et facilite l'accomplissement des objectifs spirituels et matériels.
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
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mountain className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Yama (Sud)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Dieu de la mort, stabilité et dharma</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Vayu (Nord-Ouest)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Dieu du vent, communication et mouvement</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Nirriti (Sud-Ouest)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Déesse de la transformation et de la protection</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Eshana (Nord-Est)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Shiva, sagesse et connaissance spirituelle</p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le principe du centre : Brahmasthan</h3>
              <p>
                Le Brahmasthan, ou centre sacré, représente le point de convergence de toutes les forces directionnelles. Cet espace central doit rester ouvert et non encombré pour permettre la circulation de l'énergie cosmique. Le Brahmasthan symbolise l'unité de l'existence et sert de point focal spirituel pour l'ensemble du bâtiment.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relation Soleil–Lune–Terre</h3>
              <p>
                Le Vastu Shastra considère la lumière comme une force vitale essentielle au bien-être. La lumière solaire, en particulier dans sa progression diurne, influence les qualités énergétiques des différentes directions. L'orientation des espaces pour capter la lumière naturelle optimale est un principe fondamental de l'architecture vastu.
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
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Zones énergétiques</h3>
              <p>
                Le Vastu Purusha Mandala révèle des zones énergétiques spécifiques : les zones positives (directions Nord, Est, Nord-Est) favorisent la croissance et l'expansion, les zones neutres (Sud-Est, Nord-Ouest) conviennent aux activités fonctionnelles, et les zones sensibles (Sud, Sud-Ouest, Ouest) nécessitent un agencement particulier.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Home className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Modèle universel</h4>
                      <p className="text-muted-foreground text-sm">
                        Le Vastu Purusha Mandala sert de modèle universel applicable à toutes les formes de construction, des maisons individuelles aux temples sacrés, en passant par les villes entières.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* V. Le site idéal (Bhumi) */}
          <section id="site">
            <h2 className="text-2xl font-serif text-foreground mb-6">V. Le site idéal (Bhumi)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Choix du terrain : orientation, forme, composition</h3>
              <p>
                Le choix du terrain est la première étape cruciale dans l'application du Vastu Shastra. Un terrain idéal est légèrement surélevé vers le Sud et l'Ouest, avec une surface régulière et une orientation favorable vers les directions cardinales. La forme carrée ou rectangulaire est préférée car elle correspond à la structure cosmique du Vastu Purusha Mandala.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tests du sol, eau souterraine et vibrations</h3>
              <p>
                L'analyse du sol inclut l'examen de sa composition, de sa fertilité, de la présence d'eau souterraine et de ses vibrations naturelles. Un sol fertile et stable favorise la stabilité énergétique du bâtiment. La présence d'eau souterraine dans certaines zones peut influencer positivement ou négativement les qualités énergétiques selon sa position directionnelle.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Inclinaison et topographie</h3>
              <p>
                La topographie idéale présente une légère inclinaison vers le Nord et l'Est, permettant un écoulement naturel des eaux usées tout en captant les influences positives des directions favorables. Une élévation progressive vers le Sud et l'Ouest confère stabilité et puissance à la structure.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Environnement naturel et influences subtiles</h3>
              <p>
                L'environnement naturel influence les qualités énergétiques d'un site. La présence d'arbres, de collines, de cours d'eau et d'autres éléments naturels peut renforcer ou perturber les influences directionnelles. Un environnement harmonieux avec la nature favorise l'équilibre énergétique du lieu.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Position dans le mouvement solaire</h3>
              <p>
                La position du terrain par rapport au mouvement solaire détermine l'exposition aux influences lumineuses et énergétiques. Un site bien orienté capte les rayons du lever de soleil (Est) et bénéficie de la lumière optimale tout au long de la journée.
              </p>
            </div>
          </section>

          {/* VI. Orientation et distribution des espaces */}
          <section id="orientation" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">VI. Orientation et distribution des espaces</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Importance de l'orientation Est et Nord</h3>
              <p>
                L'orientation vers l'Est et le Nord est particulièrement favorable dans le Vastu Shastra. L'Est, direction du lever du soleil, symbolise le renouveau, la connaissance et l'illumination spirituelle. Le Nord, direction de Kubera (dieu de la richesse), favorise la prospérité et l'expansion.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Organisation harmonieuse des pièces</h3>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">Entrée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      L'entrée principale doit être orientée de préférence vers le Nord ou l'Est pour capter les influences positives. Elle doit être spacieuse, bien éclairée et dégagée.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">Cuisine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      La cuisine est associée à l'élément feu (Agni) et doit être située dans la direction Sud-Est. Le cuisinier doit faire face à l'Est pendant la préparation des repas.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">Chambres</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Les chambres à coucher doivent être situées dans les directions Sud et Sud-Ouest pour favoriser le repos et la stabilité. La tête du lit orientée vers le Sud ou l'Est.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">Espace de méditation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      L'espace de méditation ou de prière doit être situé dans la direction Nord-Est, associée à la connaissance spirituelle. Cette zone doit être calme et épurée.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">Salle d'eau</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      La salle d'eau est associée à l'élément eau (Jala) et doit être située dans la direction Nord-Est. Cette position favorise la purification et le renouvellement énergétique.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">Bureau</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Le bureau ou espace de travail doit être orienté de manière à ce que l'occupant fasse face au Nord ou à l'Est pour favoriser la concentration et le succès professionnel.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">Jardin, cour intérieure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Le jardin ou la cour intérieure doivent être situés au centre (Brahmasthan) ou à l'Est pour favoriser la croissance, la vitalité et la connexion avec la nature.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* VII. Les cinq éléments dans la maison */}
          <section id="elements">
            <h2 className="text-2xl font-serif text-foreground mb-6">VII. Les cinq éléments dans la maison</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">🔥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Agni (Feu) - Sud-Est</h4>
                  <p className="text-muted-foreground text-sm">
                    L'élément feu (Agni) représente la transformation, la vitalité et l'énergie créatrice. Dans la maison, il est principalement manifesté par la cuisine située dans la direction Sud-Est. Cette position favorise la santé, la prospérité et la vitalité des occupants.
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
                    L'élément eau (Jala) symbolise la purification, l'intellect et la fluidité. Les salles d'eau, les bassins et les puits doivent être situés dans la direction Nord-Est pour favoriser la clarté mentale et le renouvellement énergétique.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">🌍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Prithvi (Terre) - Sud-Ouest</h4>
                  <p className="text-muted-foreground text-sm">
                    L'élément terre (Prithvi) représente la stabilité, la solidité et la nourriture. Les murs, les fondations et les structures massives sont associés à cet élément. La direction Sud-Ouest favorise la sécurité, le repos et l'ancrage.
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
                    L'élément air (Vayu) symbolise la communication, la circulation et la liberté. La direction Nord-Ouest favorise les interactions sociales, la créativité et la mobilité. Une bonne ventilation soutient la santé respiratoire et mentale.
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
                    L'élément éther (Akasha) représente l'espace, la connectivité et l'unité. Le Brahmasthan central permet la circulation de l'éther et favorise la connexion spirituelle. Cet espace symbolise l'infini et l'unité de toute existence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* VIII. Mesures et proportions sacrées */}
          <section id="mesures" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">VIII. Mesures et proportions sacrées</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le système des mesures (Hasta, Tala, Angula)</h3>
              <p>
                Le Vastu Shastra utilise un système de mesures basé sur le corps humain : l'Angula (doigt), le Tala (paume) et le Hasta (coudée). Ces unités de mesure assurent une harmonie naturelle entre l'architecture et l'échelle humaine. Une Hasta équivaut à 24 Angulas ou environ 39,6 cm.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Proportions du corps humain dans l'architecture</h3>
              <p>
                Les proportions architecturales sont basées sur les rapports harmonieux du corps humain, reflétant le principe que l'homme est le modèle de toute création parfaite. Ces proportions créent des espaces qui favorisent le bien-être physique et psychologique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le canon du Sthapati (architecte divin)</h3>
              <p>
                Le Sthapati, architecte sacré, suit un canon de proportions divines inspiré de la structure cosmique. Ce canon établit les relations mathématiques et géométriques qui assurent l'harmonie entre le bâtiment et les principes universels.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle du rythme et de la géométrie sacrée</h3>
              <p>
                Le rythme architectural, basé sur des répétitions harmonieuses et des proportions sacrées, crée une vibration positive dans l'espace. Les symétries directionnelles et les formes géométriques sacrées (carrés, cercles, triangles) activent des qualités énergétiques spécifiques.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Shilpa Shastra : sculpture et décoration</h3>
              <p>
                Le Shilpa Shastra, science de la sculpture, complète le Vastu Shastra en établissant les principes de décoration et d'ornementation qui renforcent les qualités énergétiques d'un espace. Les sculptures, les motifs et les symboles sacrés activent des vibrations positives.
              </p>
            </div>
          </section>

          {/* IX. Types d'architectures traditionnelles */}
          <section id="architectures">
            <h2 className="text-2xl font-serif text-foreground mb-6">IX. Types d'architectures traditionnelles</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Maisons traditionnelles indiennes</h3>
              <p>
                Les maisons traditionnelles indiennes, comme les agraharams du Sud ou les havelis du Rajasthan, incarnent les principes du Vastu Shastra dans leur agencement spatial et leur orientation. Ces habitations intègrent cour intérieure, espaces de méditation et distribution directionnelle des pièces.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Temples : structure (garbhagriha, mandapa, shikhara)</h3>
              <p>
                Les temples hindous représentent l'apogée de l'architecture vastu. La structure comprend le garbhagriha (sanctuaire intérieur) orienté vers l'Est, le mandapa (salle de prière) et le shikhara (tour sacrée). Cette organisation spatiale crée un chemin spirituel progressif vers l'unité divine.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Palais et villes planifiées</h3>
              <p>
                Les palais royaux et les villes planifiées selon le Vastu Shastra intègrent des principes directionnels complexes pour favoriser la prospérité, la protection et l'harmonie sociale. La disposition des quartiers suit des grilles vastu pour créer un environnement propice au bien-être collectif.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Vastu dans les jardins sacrés</h3>
              <p>
                Les jardins sacrés appliquent les principes du Vastu Shastra pour créer des espaces de méditation et de connexion avec la nature. L'agencement des plantes, des cours d'eau et des structures paysagères suit des orientations directionnelles précises.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Vastu appliqué à l'urbanisme</h3>
              <p>
                L'urbanisme vastu établit des grilles directionnelles pour l'organisation des villes, avec des centres sacrés, des axes principaux et des quartiers fonctionnels alignés sur les principes cosmologiques.
              </p>
            </div>
          </section>

          {/* X. Construction selon le Vastu */}
          <section id="construction" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">X. Construction selon le Vastu</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Fondation (adhisthana)</h3>
              <p>
                La fondation (adhisthana) est le premier élément crucial de la construction vastu. Elle doit être solide, nivelée et alignée selon les principes directionnels. La cérémonie de pose de la première pierre (Shila Nyasa) sanctifie le site et établit la connexion spirituelle.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Orientation de la porte principale</h3>
              <p>
                L'orientation de la porte principale détermine l'énergie qui entre dans le bâtiment. Les directions Nord et Est sont particulièrement favorables pour la porte principale, car elles captent les influences positives du lever de soleil et de la richesse cosmique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Position des fenêtres et ouvertures</h3>
              <p>
                Les fenêtres et ouvertures doivent être positionnées pour capter la lumière naturelle et favoriser la circulation de l'air frais. Les fenêtres orientées à l'Est et au Nord apportent des influences positives.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hauteurs, niveaux et circulation</h3>
              <p>
                Les hauteurs progressives dans une construction vastu suivent un ordre spécifique : le niveau le plus élevé au Sud-Ouest et le plus bas au Nord-Est. Cette configuration favorise la stabilité et la circulation harmonieuse de l'énergie.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Choix des matériaux</h3>
              <p>
                Le choix des matériaux de construction suit des principes énergétiques spécifiques. Les matériaux naturels comme la pierre, le bois et l'argile sont préférés car ils résonnent avec les forces terrestres.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Calendrier et astrologie du chantier (Muhurta)</h3>
              <p>
                Le calendrier de construction suit les principes astrologiques pour choisir les moments propices (Muhurta) aux différentes étapes de la construction. Ces moments astronomiquement favorables maximisent l'harmonie entre le bâtiment et les forces cosmiques.
              </p>
            </div>
          </section>

          {/* XI. Effets du Vastu sur le bien-être */}
          <section id="bien-etre">
            <h2 className="text-2xl font-serif text-foreground mb-6">XI. Effets du Vastu sur le bien-être</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Impact sur la santé</h3>
              <p>
                Un environnement conçu selon les principes du Vastu Shastra favorise la santé physique et mentale en optimisant la circulation de l'énergie vitale. L'orientation appropriée, la lumière naturelle et l'équilibre des éléments réduisent le stress et améliorent le sommeil.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Réduction du stress et harmonisation émotionnelle</h3>
              <p>
                Les principes vastu créent des environnements apaisants qui réduisent naturellement le stress et favorisent l'équilibre émotionnel. Les espaces bien orientés soutiennent la stabilité mentale et la paix intérieure.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Influence sur la prospérité et les relations</h3>
              <p>
                L'agencement directionnel approprié favorise la prospérité matérielle et spirituelle. Les influences positives du Nord et de l'Est soutiennent la réussite financière et les relations harmonieuses.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Vastu psychologique</h3>
              <p>
                Le Vastu Shastra considère l'interaction entre l'espace intérieur et l'espace extérieur dans la formation de l'expérience psychologique. Un environnement extérieur harmonieux renforce les qualités positives de l'espace intérieur.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Vastu comme outil de spiritualité quotidienne</h3>
              <p>
                Le Vastu Shastra intègre la spiritualité dans la vie quotidienne en créant des environnements qui soutiennent la méditation, la prière et l'éveil conscient. L'espace habité devient un support pour la pratique spirituelle quotidienne.
              </p>
            </div>
          </section>

          {/* XII. Correction et remèdes (Vastu Shanti) */}
          <section id="correction" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">XII. Correction et remèdes (Vastu Shanti)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Diagnostic des espaces non conformes</h3>
              <p>
                Le diagnostic vastu analyse l'agencement spatial, les orientations directionnelles, les éléments dominants et les déséquilibres énergétiques d'un espace existant. Cette analyse révèle les causes potentielles des problèmes et identifie les zones nécessitant des corrections.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Solutions sans destruction : corrections symboliques</h3>
              <p>
                Les corrections vastu modernes privilégient les solutions non destructives qui équilibrent les énergies sans modifications structurelles majeures. Ces corrections incluent l'utilisation de miroirs, de plantes, de couleurs et d'objets symboliques.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rituels de purification : Vastu Shanti, Vastu Puja, Homa</h3>
              <p>
                Les rituels de purification constituent un aspect essentiel des corrections vastu. Le Vastu Shanti pacifie les énergies perturbées, le Vastu Puja honore les divinités directionnelles, et le Homa (rituel du feu) purifie l'environnement par le pouvoir transformateur du feu sacré.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Yantras et symboles</h3>
              <p>
                Les yantras sont des diagrammes géométriques sacrés qui canalisent des énergies spécifiques. Le Sudharma Vastu Yantra et le Sri Yantra sont couramment utilisés pour corriger les déséquilibres vastu et activer des influences positives.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Couleurs, plantes et objets correctifs</h3>
              <p>
                Les couleurs, les plantes et les objets décoratifs peuvent corriger les déséquilibres vastu. Chaque direction est associée à des couleurs spécifiques, et les plantes apportent des énergies vivifiantes qui harmonisent l'espace.
              </p>
            </div>
          </section>

          {/* XIII. Vastu et architecture contemporaine */}
          <section id="contemporain">
            <h2 className="text-2xl font-serif text-foreground mb-6">XIII. Vastu et architecture contemporaine</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Application dans les habitations modernes</h3>
              <p>
                L'application du Vastu Shastra dans les habitations modernes adapte les principes traditionnels aux contraintes contemporaines comme les appartements, les espaces réduits et les orientations fixes. Les solutions modernes privilégient la flexibilité et les corrections subtiles.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Minimalisme et Vastu</h3>
              <p>
                Le minimalisme architectural trouve une résonance naturelle avec les principes vastu qui favorisent les espaces ouverts, la circulation fluide de l'énergie et l'équilibre des éléments. Un espace épuré facilite l'harmonie énergétique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Vastu et bioclimatisme</h3>
              <p>
                Le bioclimatisme moderne reprend inconsciemment de nombreux principes vastu : orientation solaire, ventilation naturelle, utilisation de matériaux naturels. L'intégration consciente des principes vastu enrichit l'approche écologique.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Intégration dans le design intérieur</h3>
              <p>
                Le design intérieur vastu utilise les couleurs, les formes, les textures et les objets pour équilibrer les énergies d'un espace. Cette approche intègre l'esthétique moderne avec les principes énergétiques traditionnels.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Intégration dans l'urbanisme contemporain</h3>
              <p>
                Les principes vastu peuvent informer l'urbanisme contemporain en établissant des orientations favorables, des centres communautaires propices et des distributions spatiales qui soutiennent le bien-être collectif.
              </p>
            </div>
          </section>

          {/* XIV. Le rôle du Sthapati (architecte sacré) */}
          <section id="sthapati" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">XIV. Le rôle du Sthapati (architecte sacré)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Formation traditionnelle</h3>
              <p>
                La formation du Sthapati suit une tradition millénaire transmise par la chaîne Guru-Shishya (maître-disciple). Cette formation comprend non seulement les aspects techniques de l'architecture mais aussi les dimensions spirituelles, philosophiques et cosmologiques.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transmission maître–disciple</h3>
              <p>
                La transmission du savoir vastu s'effectue par l'expérience directe avec un maître éclairé. Cette approche personnalisée permet une compréhension profonde des nuances subtiles du Vastu Shastra.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Éthique de l'architecte</h3>
              <p>
                Le Sthapati porte une responsabilité éthique profonde envers les occupants des bâtiments qu'il conçoit. Son travail vise à créer des espaces qui soutiennent le bien-être, la prospérité et l'évolution spirituelle.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle spirituel du bâtisseur</h3>
              <p>
                Le Sthapati est considéré comme un bâtisseur spirituel qui façonne non seulement des structures physiques mais aussi des environnements énergétiques propices à l'éveil.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Architecture comme voie de Yoga</h3>
              <p>
                Pour le Sthapati éclairé, l'architecture devient une voie de Yoga où chaque création est une offrande spirituelle. La pratique architecturale consciente développe la concentration, la créativité divine et l'unité avec les forces cosmiques.
              </p>
            </div>
          </section>

          {/* XV. Annexes techniques */}
          <section id="annexes">
            <h2 className="text-2xl font-serif text-foreground mb-6">XV. Annexes techniques</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Table des directions et divinités</h3>
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-secondary/30">
                        <TableHead className="text-foreground font-semibold">Direction</TableHead>
                        <TableHead className="text-foreground font-semibold">Divinité</TableHead>
                        <TableHead className="text-foreground font-semibold">Qualité</TableHead>
                        <TableHead className="text-foreground font-semibold">Élément</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Est (Purva)</TableCell>
                        <TableCell>Indra</TableCell>
                        <TableCell>Connaissance</TableCell>
                        <TableCell>Feu</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Sud-Est (Agneya)</TableCell>
                        <TableCell>Agni</TableCell>
                        <TableCell>Énergie</TableCell>
                        <TableCell>Feu</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sud (Dakshina)</TableCell>
                        <TableCell>Yama</TableCell>
                        <TableCell>Stabilité</TableCell>
                        <TableCell>Terre</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Sud-Ouest (Nairriti)</TableCell>
                        <TableCell>Nirriti</TableCell>
                        <TableCell>Transformation</TableCell>
                        <TableCell>Terre</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ouest (Paschima)</TableCell>
                        <TableCell>Varuna</TableCell>
                        <TableCell>Créativité</TableCell>
                        <TableCell>Air</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Nord-Ouest (Vayavya)</TableCell>
                        <TableCell>Vayu</TableCell>
                        <TableCell>Communication</TableCell>
                        <TableCell>Air</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nord (Uttara)</TableCell>
                        <TableCell>Kubera</TableCell>
                        <TableCell>Richesse</TableCell>
                        <TableCell>Eau</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Nord-Est (Ishanya)</TableCell>
                        <TableCell>Eshana</TableCell>
                        <TableCell>Sagesse</TableCell>
                        <TableCell>Eau</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Table des zones énergétiques du Mandala</h3>
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-secondary/30">
                        <TableHead className="text-foreground font-semibold">Zone</TableHead>
                        <TableHead className="text-foreground font-semibold">Qualité</TableHead>
                        <TableHead className="text-foreground font-semibold">Utilisation recommandée</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Nord-Est</TableCell>
                        <TableCell>Positive (Sattvika)</TableCell>
                        <TableCell>Méditation, étude, salle d'eau</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Est</TableCell>
                        <TableCell>Positive (Sattvika)</TableCell>
                        <TableCell>Entrée principale, chambre d'enfants</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nord</TableCell>
                        <TableCell>Positive (Sattvika)</TableCell>
                        <TableCell>Salle de séjour, bureau</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Sud-Est</TableCell>
                        <TableCell>Neutre (Rajasika)</TableCell>
                        <TableCell>Cuisine, salle de générateur</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nord-Ouest</TableCell>
                        <TableCell>Neutre (Rajasika)</TableCell>
                        <TableCell>Stockage, toilettes</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Sud</TableCell>
                        <TableCell>Négative (Tamasika)</TableCell>
                        <TableCell>Chambre à coucher principale</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sud-Ouest</TableCell>
                        <TableCell>Négative (Tamasika)</TableCell>
                        <TableCell>Maître chambre, stockage lourd</TableCell>
                      </TableRow>
                      <TableRow className="bg-secondary/10">
                        <TableCell>Ouest</TableCell>
                        <TableCell>Négative (Tamasika)</TableCell>
                        <TableCell>Chambre d'invités, garage</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Schémas du Vastu Purusha Mandala</h3>
                <p className="text-muted-foreground mb-4">
                  Le Vastu Purusha Mandala est représenté comme un carré divisé en 8×8 ou 9×9 cases, avec le Purusha couché la tête au Nord-Est et les pieds au Sud-Ouest. Chaque case contient une divinité directionnelle qui influence les qualités énergétiques de cette zone. Le centre (Brahmasthan) reste ouvert pour permettre la circulation de l'énergie cosmique.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Modèles de plans conformes au Vastu</h3>
                <p className="text-muted-foreground mb-4">
                  Les plans conformes au Vastu présentent une organisation spatiale qui respecte les principes directionnels : entrée principale au Nord ou à l'Est, cuisine au Sud-Est, chambres principales au Sud-Ouest, espaces de méditation au Nord-Est, et Brahmasthan central ouvert.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Glossaire complet des termes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Vastu</strong> : Demeure, habitat</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Shastra</strong> : Science, traité</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Purusha</strong> : Être cosmique</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Mandala</strong> : Diagramme sacré</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Brahmasthan</strong> : Centre sacré</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Sthapati</strong> : Architecte sacré</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Prana</strong> : Énergie vitale</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Guna</strong> : Qualité (Sattva, Rajas, Tamas)</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Dik</strong> : Direction</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Shila Nyasa</strong> : Pose de la première pierre</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Muhurta</strong> : Moment propice</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-foreground"><strong>Yantra</strong> : Diagramme géométrique sacré</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* XVI. Conclusion */}
          <section id="conclusion" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-2xl font-serif text-foreground mb-6">XVI. Conclusion</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Vastu Shastra comme science de l'harmonie cosmique</h3>
              <p>
                Le Vastu Shastra transcende l'architecture ordinaire pour devenir une science de l'harmonie cosmique. Cette science millénaire révèle comment l'espace construit peut devenir un catalyseur pour l'éveil spirituel et le bien-être humain. En alignant les structures terrestres avec les principes universels, le Vastu Shastra transforme l'habitat en un temple vivant.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le lien entre espace, conscience et libération</h3>
              <p>
                Le Vastu Shastra établit un lien profond entre l'espace physique, la conscience humaine et la libération spirituelle. Un environnement harmonisé selon les principes vastu favorise naturellement l'éveil de la conscience et crée les conditions propices à l'expérience de l'unité fondamentale de l'existence.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'habitat comme temple vivant</h3>
              <p>
                Dans la vision du Vastu Shastra, chaque habitat peut devenir un temple vivant où la vie quotidienne se transforme en pratique spirituelle. L'agencement directionnel, l'équilibre des éléments et l'harmonie énergétique créent un environnement sacré qui sanctifie chaque activité.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le rôle du Vastu dans la transformation intérieure</h3>
              <p>
                Le Vastu Shastra joue un rôle crucial dans la transformation intérieure en créant des environnements qui soutiennent naturellement la croissance spirituelle. L'espace bien conçu devient un miroir de la conscience divine, révélant progressivement l'harmonie intérieure.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-6">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Home className="w-8 h-8 text-primary mx-auto mb-4" />
                    <p className="text-foreground italic mb-2">
                      "Comme l'univers est un temple vivant, chaque demeure bien conçue devient un sanctuaire où l'âme se révèle dans toute sa splendeur."
                    </p>
                    <p className="text-muted-foreground text-sm">— Vastu Purana</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center mt-8">
                <h4 className="text-xl font-semibold text-primary mb-2">Shanti, Shanti, Shanti</h4>
                <p className="text-muted-foreground italic">
                  Paix, Paix, Paix - Que la paix règne en nous, autour de nous et partout dans l'univers.
                </p>
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
