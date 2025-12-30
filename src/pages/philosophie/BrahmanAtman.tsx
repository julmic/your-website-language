import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Quote, Lightbulb, Users, Target, Eye } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "brahman", title: "Brahman" },
  { id: "atman", title: "Atman" },
  { id: "unite", title: "Unité" },
  { id: "voies", title: "Voies" },
  { id: "ecoles", title: "Écoles" },
  { id: "contemporain", title: "Contemporain" },
  { id: "conclusion", title: "Conclusion" },
];

const BrahmanAtman = () => {
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
          <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            Philosophie Védique : <span className="text-primary">Brahman et Atman</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            L'exploration approfondie des concepts fondamentaux de l'Absolu et de l'Âme dans la tradition spirituelle indienne
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

          {/* Introduction */}
          <section id="introduction">
            <h2 className="text-3xl font-serif text-foreground mb-4">Brahman et Atman : L'Essence de l'Existence</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <div className="prose prose-lg text-muted-foreground space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border">
              <p>
                La philosophie védique, particulièrement telle qu'exprimée dans les Upanishads, explore les concepts 
                profonds de Brahman (l'Absolu) et Atman (l'Âme individuelle). Ces deux notions centrales sont au cœur 
                de la compréhension spirituelle de l'hindouisme et représentent la quête ultime de l'unité et de la 
                connaissance de soi.
              </p>
              
              <p>
                Dans la tradition védique, Brahman est considéré comme la réalité ultime, infinie, éternelle et immuable 
                qui sous-tend toute existence. Il transcende toutes les limitations et dualités du monde manifesté. 
                Atman, quant à lui, représente l'âme immortelle et éternelle qui réside au cœur de chaque être. 
                L'identité fondamentale entre ces deux concepts est exprimée par la formule "Tat Tvam Asi" - "Toi et Cela êtes un".
              </p>
              
              <Card className="bg-primary/5 border-primary/20 my-8">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-foreground italic">
                      "Tat Tvam Asi" - "Toi et Cela êtes un" : L'une des grandes déclarations des Upanishads qui exprime 
                      l'identité fondamentale entre l'Atman individuel et le Brahman universel.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <p>
                Cette exploration des concepts de Brahman et Atman nous conduit à une compréhension profonde de la nature 
                de la réalité, de la conscience et de l'existence humaine. Elle nous invite à transcender les limitations 
                de l'ego et à réaliser notre véritable nature divine. Cette quête spirituelle, qui traverse les millénaires, 
                continue d'offrir des perspectives précieuses sur la nature de l'être et la signification ultime de l'existence.
              </p>
            </div>
          </section>

          {/* Brahman Section */}
          <section id="brahman" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-3xl font-serif text-foreground mb-4">Brahman : L'Absolu Inconditionné</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">La Réalité Suprême</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Nature de Brahman</h4>
                      <p className="text-muted-foreground">
                        Brahman est la réalité ultime, infinie, éternelle et immuable qui sous-tend toute existence. 
                        Il transcende toutes les limitations et dualités du monde manifesté. Brahman n'est ni masculin 
                        ni féminin, ni personnel ni impersonnel dans le sens ordinaire de ces termes. Il est au-delà 
                        de toutes les catégories conceptuelles.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Attributs de Brahman</h4>
                      <p className="text-muted-foreground">
                        Brahman est décrit comme Sat (être), Chit (conscience) et Ananda (béatitude). 
                        Ces trois aspects constituent l'essence même de la réalité absolue. Sat signifie 
                        l'existence éternelle et immuable, Chit représente la conscience pure et infinie, 
                        et Ananda symbolise la béatitude absolue et la joie transcendante.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Manifestation et Immanence</h4>
                      <p className="text-muted-foreground">
                        Bien que transcendant, Brahman est aussi immanent dans toute création. 
                        Il est à la fois le créateur, la création et ce vers quoi tout retourne. 
                        Cette dualité apparente entre transcendance et immanence est résolue dans 
                        la compréhension que Brahman est la seule réalité, et que tout le reste 
                        n'est qu'une manifestation de sa propre nature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-primary">
                    <BookOpen className="mr-2" /> Textes Fondamentaux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Brihadaranyaka Upanishad</h4>
                    <p className="text-muted-foreground text-sm">
                      "Brahman était seul au commencement. Il pensa : 'Que deviendrais-je si j'étais seul ?' 
                      Il se multiplica lui-même." Cette déclaration fondamentale établit que la création 
                      émane de Brahman lui-même, sans séparation réelle entre le créateur et la création.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Taittiriya Upanishad</h4>
                    <p className="text-muted-foreground text-sm">
                      "De lui-même, il se craignait. En vérité, il n'y avait rien d'autre que lui. 
                      Il pensa : 'Que deviendrais-je s'il n'y avait que moi ?'" Cette description 
                      poétique illustre la nature dynamique de Brahman qui se manifeste pour 
                      expérimenter sa propre plénitude.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mandukya Upanishad</h4>
                    <p className="text-muted-foreground text-sm">
                      "Il n'y a pas de connaissance de l'objet, ni de connaissance subjective, 
                      ni de connaissance de la connaissance. C'est l'inconnaissable." Cette 
                      description pointe vers l'ineffabilité de Brahman, qui dépasse toute 
                      connaissance ordinaire.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Les Différentes Perspectives sur Brahman</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">Brahman avec Attributs (Saguna Brahman)</h4>
                    <p className="text-muted-foreground mb-4">
                      Dans cette perspective, Brahman est conçu avec des qualités et des attributs. 
                      Il est personnifié sous diverses formes divines comme Vishnu, Shiva ou Devi. 
                      Cette approche rend Brahman accessible à la dévotion et à la prière. Les dévots 
                      peuvent s'adresser à Brahman sous des formes personnalisées, facilitant ainsi 
                      la relation spirituelle.
                    </p>
                    <p className="text-muted-foreground">
                      Cette vision de Brahman permet aux pratiquants de développer un lien personnel 
                      avec l'Absolu. Les pratiques de Bhakti Yoga (yoga de la dévotion) s'appuient 
                      sur cette compréhension pour établir une relation intime avec le divin.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">Brahman sans Attributs (Nirguna Brahman)</h4>
                    <p className="text-muted-foreground mb-4">
                      Dans cette perspective, Brahman est conçu comme absolument sans attributs, 
                      au-delà de toute qualification ou limitation. Il est pur être, pure conscience, 
                      pure béatitude - mais même ces descriptions sont des approximations. Cette 
                      vision est plus difficile à conceptualiser mais est considérée comme plus 
                      proche de la vérité ultime.
                    </p>
                    <p className="text-muted-foreground">
                      Les pratiques de Jnana Yoga (yoga de la connaissance) visent à réaliser 
                      cette nature de Brahman. Les méditations sur l'ineffable et l'inconcevable 
                      s'orientent vers cette compréhension.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-primary mb-4">La Relation entre les Deux Perspectives</h4>
                  <p className="text-muted-foreground">
                    Ces deux perspectives ne sont pas contradictoires mais complémentaires. 
                    Brahman avec attributs sert de pont vers la réalisation de Brahman sans attributs. 
                    La dévotion personnelle prépare l'esprit à transcender toute forme et toute limitation. 
                    Les deux approches convergent vers la même réalité ultime, chacune selon le tempérament 
                    et la capacité du chercheur spirituel.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Atman Section */}
          <section id="atman">
            <h2 className="text-3xl font-serif text-foreground mb-4">Atman : L'Âme Individuelle</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-primary">
                    <Lightbulb className="mr-2" /> États de Conscience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Jagrat (État de Veille)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état ordinaire de conscience où nous percevons le monde extérieur 
                      à travers nos sens et notre intellect. C'est l'état de l'activité, 
                      des interactions sociales et des expériences sensorielles. Dans cet 
                      état, l'ego est dominant et l'identification avec le corps et 
                      l'esprit est forte.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Swapna (Rêve)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état où la conscience se tourne vers l'intérieur et crée son propre 
                      monde d'expériences mentales. Dans le rêve, l'esprit projette ses 
                      propres créations sans l'intermédiaire des sens physiques. Cet état 
                      révèle la nature créative de la conscience et préfigure l'expérience 
                      de l'unité dans des états plus subtils.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sushupti (Sommeil Profond)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état de paix et d'unité où l'ego et les désirs sont temporairement 
                      suspendus, révélant une félicité intérieure. Dans le sommeil profond, 
                      il n'y a ni perception des objets extérieurs ni pensées internes. 
                      Pourtant, il y a une continuité de l'expérience - le dormeur sait 
                      qu'il a dormi paisiblement. Cette conscience fondamentale est un 
                      reflet de l'Atman.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Turiya (Quatrième État)</h4>
                    <p className="text-muted-foreground text-sm">
                      L'état transcendant qui dépasse les trois états ordinaires de conscience 
                      et révèle l'unité de l'Atman avec le Brahman. Turiya n'est pas un état 
                      comme les autres mais la conscience fondamentale qui sous-tend tous les 
                      états. C'est l'état de réalisation spirituelle où l'identité avec l'Atman 
                      est pleinement établie.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">L'Essence de l'Être</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Nature de l'Atman</h4>
                      <p className="text-muted-foreground">
                        L'Atman est l'âme immortelle et éternelle qui réside au cœur de chaque être. 
                        Il est distinct du corps physique, des émotions et de l'intellect. L'Atman 
                        est témoin de toutes les expériences - naissance, vie, mort - sans être 
                        affecté par elles. Il est la conscience fondamentale qui rend possible 
                        toute expérience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Relation avec Brahman</h4>
                      <p className="text-muted-foreground">
                        L'Atman individuel est en essence identique au Brahman universel. 
                        Cette identité fondamentale est exprimée par la formule "Aham Brahmasmi" 
                        (Je suis Brahman). La perception de séparation entre l'Atman individuel 
                        et le Brahman universel est due à l'ignorance (avidya) et à l'identification 
                        avec le corps et l'esprit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Libération (Moksha)</h4>
                      <p className="text-muted-foreground">
                        La réalisation de l'unité entre Atman et Brahman conduit à la libération 
                        (moksha) du cycle des naissances et des morts (samsara). Cette libération 
                        n'est pas une acquisition mais une reconnaissance de notre véritable nature. 
                        Elle libère l'individu de la souffrance inhérente à l'identification avec 
                        le temporel et le conditionné.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Card className="mt-8 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">La Métaphore du Soleil et de son Reflet</h4>
                    <p className="text-muted-foreground">
                      Les textes védiques utilisent souvent la métaphore du soleil et de son reflet 
                      dans l'eau pour expliquer la relation entre Brahman et Atman. Le soleil représente 
                      Brahman, la lumière universelle, tandis que son reflet dans l'eau représente Atman, 
                      la conscience individuelle. Bien que le reflet semble séparé du soleil, il n'est 
                      qu'une manifestation de la même lumière. De même, l'Atman individuel est une 
                      manifestation de la conscience universelle de Brahman.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Unity Section */}
          <section id="unite" className="bg-gradient-to-b from-primary/10 to-primary/5 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-3xl font-serif text-foreground mb-4 text-center">L'Unité Fondamentale de Brahman et Atman</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center justify-center">
                    <Users className="mr-2 text-primary" /> Dualité Apparente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La perception de séparation entre le soi individuel et l'Absolu est due à l'ignorance (avidya) 
                    et à l'identification avec le corps et l'esprit. Cette dualité apparente est comme une onde 
                    qui perçoit une séparation illusoire de l'océan.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center justify-center">
                    <Target className="mr-2 text-primary" /> Révélation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Par la connaissance (jnana), la méditation (dhyana) et la discipline spirituelle, 
                    cette unité est révélée. La pratique spirituelle élimine les couches d'ignorance 
                    qui masquent notre véritable nature.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center justify-center">
                    <Eye className="mr-2 text-primary" /> Libération
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La réalisation de l'identité entre Atman et Brahman conduit à la libération 
                    (moksha) et à la béatitude éternelle. Cette libération n'est pas un gain mais 
                    une reconnaissance de notre nature essentielle.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Quote className="mx-auto mb-6 text-primary" size={48} />
                <p className="text-xl italic text-foreground max-w-2xl mx-auto">
                  "Comme l'onde et l'océan, comme le rayon et le soleil, 
                  comme la bulle et l'eau, l'Atman et le Brahman sont un."
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Voies Section */}
          <section id="voies">
            <h2 className="text-3xl font-serif text-foreground mb-4">Voies vers la Réalisation</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Les Quatre Yogas Principaux</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Jnana Yoga (Yoga de la Connaissance)</h4>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
                      <li>Étude des textes sacrés (Vedanta)</li>
                      <li>Discrimination entre le réel et l'irréel</li>
                      <li>Méditation sur l'identité Atman-Brahman</li>
                      <li>Renoncement aux attachements</li>
                      <li>Investigation sur la nature du soi ("Qui suis-je ?")</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Le Jnana Yoga est le chemin de la connaissance intellectuelle et intuitive. 
                      Il utilise la raison pour transcender la raison, menant à la réalisation directe 
                      de l'unité de l'Atman et du Brahman. Ce chemin convient aux personnes de tempérament 
                      intellectuel et analytique.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">Bhakti Yoga (Yoga de la Dévotion)</h4>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
                      <li>Amour inconditionnel pour le divin</li>
                      <li>Prière et dévotion personnelle</li>
                      <li>Service désintéressé (seva)</li>
                      <li>Soumission totale à l'Absolu</li>
                      <li>Célébration des attributs divins</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Le Bhakti Yoga est le chemin de l'amour dévoué. Il développe une relation personnelle 
                      avec le divin, utilisant les émotions et le cœur comme voie vers la réalisation spirituelle. 
                      Ce chemin convient aux personnes de tempérament émotionnel et affectif.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">Raja Yoga (Yoga de la Méditation)</h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
                    <li>Contrôle des sens et de l'esprit</li>
                    <li>Pratique des postures (asanas) et du souffle (pranayama)</li>
                    <li>Retrait sensoriel (pratyahara)</li>
                    <li>Concentration (dharana) et méditation (dhyana)</li>
                    <li>Samadhi (absorption dans l'Absolu)</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Le Raja Yoga est le chemin de la méditation et du contrôle mental. Il suit le système 
                    des huit membres (Ashtanga Yoga) décrit par Patanjali dans les Yoga Sutras. Ce chemin 
                    développe la maîtrise de l'esprit pour atteindre l'état de samadhi où l'unité de l'Atman 
                    et du Brahman est réalisée.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-primary mb-4">Karma Yoga (Yoga de l'Action)</h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
                    <li>Action désintéressée</li>
                    <li>Renoncement aux fruits de l'action</li>
                    <li>Service désintéressé</li>
                    <li>Transformation par le travail</li>
                    <li>Purification du mental par l'action juste</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Le Karma Yoga est le chemin de l'action désintéressée. Il enseigne à agir sans 
                    attachement aux résultats, transformant le travail quotidien en pratique spirituelle. 
                    Ce chemin purifie le mental et prépare à la réalisation de l'unité de l'Atman et du Brahman.
                  </p>
                </div>
                
                <Card className="mt-12 bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-4">L'Intégration des Voies</h4>
                    <p className="text-muted-foreground mb-4">
                      Bien que ces quatre yogas soient présentés séparément, ils sont en réalité complémentaires 
                      et interdépendants. La plupart des pratiquants spirituels combinent plusieurs de ces approches 
                      selon leur tempérament et leurs besoins. Un chercheur peut utiliser le Jnana Yoga pour 
                      comprendre intellectuellement les concepts, le Bhakti Yoga pour développer la dévotion, 
                      le Raja Yoga pour approfondir la méditation, et le Karma Yoga pour purifier l'action.
                    </p>
                    <p className="text-muted-foreground">
                      L'essentiel n'est pas de suivre un seul chemin mais de s'engager sincèrement dans la pratique 
                      spirituelle avec dévouement et persévérance. Chaque voie mène à la même destination : la 
                      réalisation de l'unité fondamentale entre l'Atman individuel et le Brahman universel.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>

          {/* Écoles Section */}
          <section id="ecoles" className="bg-secondary/20 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-3xl font-serif text-foreground mb-4">Écoles Philosophiques</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 border-2 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Advaita Vedanta (Non-dualisme)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fondée par Adi Shankara au VIIIe siècle, l'Advaita Vedanta enseigne que Brahman est 
                    la seule réalité et que le monde manifesté est une illusion (maya). L'Atman individuel 
                    est identique au Brahman universel - il n'y a qu'un seul être, une seule conscience, 
                    une seule plénitude.
                  </p>
                  <p className="text-muted-foreground">
                    Cette école met l'accent sur la connaissance directe (jnana) comme voie vers la libération. 
                    Les pratiques de discrimination (viveka) entre le réel et l'irréel sont essentielles. 
                    L'Advaita considère que la libération est déjà présente - il suffit de la reconnaître.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 border-2 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Vishishtadvaita (Dualisme Qualifié)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Développée par Ramanuja au XIe siècle, le Vishishtadvaita enseigne que Brahman possède 
                    des attributs et que l'âme individuelle (jiva) et la matière (prakriti) sont des modes 
                    réels de Brahman. Bien que l'âme soit distincte de Brahman, elle est en relation intime 
                    avec lui.
                  </p>
                  <p className="text-muted-foreground">
                    Cette école met l'accent sur la dévotion (bhakti) envers Brahman personnalisé (Vishnu). 
                    La libération implique le maintien de l'individualité dans l'union avec Brahman. 
                    L'âme conserve son essence individuelle même dans l'état libéré.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 border-2 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Dvaita (Dualisme)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fondée par Madhva au XIIIe siècle, le Dvaita maintient une distinction radicale entre 
                    Brahman (Dieu), l'âme individuelle et la matière. Brahman (Vishnu) est considéré comme 
                    indépendant et suprême, tandis que les âmes sont dépendantes et éternellement distinctes.
                  </p>
                  <p className="text-muted-foreground">
                    Cette école met l'accent sur la dévotion et la grâce divine pour la libération. 
                    La relation entre le dévot et Dieu est éternelle et basée sur l'amour. 
                    La libération implique le service éternel à Brahman dans des mondes célestes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 border-2 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Shuddhadvaita (Dualisme Pur)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Développée par Vallabha au XVIe siècle, le Shuddhadvaita enseigne que Brahman et les âmes 
                    sont une seule réalité sans différenciation. Cependant, cette unité est qualifiée par 
                    l'amour divin (prema). Brahman se manifeste sous forme de Krishna dans l'amour absolu.
                  </p>
                  <p className="text-muted-foreground">
                    Cette école met l'accent sur la grâce divine (pushti) et l'amour dévoué envers Krishna. 
                    La libération est atteinte par la dévotion exclusive à Krishna. La joie divine est 
                    considérée comme la nature essentielle de l'âme.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">Unité dans la Diversité</h3>
                <p className="text-muted-foreground mb-4">
                  Ces différentes écoles philosophiques montrent la richesse et la profondeur de la pensée 
                  védique. Bien qu'elles diffèrent dans leurs approches et leurs conclusions, elles partagent 
                  un objectif commun : la réalisation de l'unité fondamentale de l'être et la libération 
                  de la souffrance.
                </p>
                <p className="text-muted-foreground">
                  Chaque école répond à des besoins spirituels différents et à des tempéraments variés. 
                  L'important n'est pas de déterminer quelle école est "correcte", mais de trouver l'approche 
                  qui résonne avec notre propre nature et notre quête spirituelle. Toutes ces voies mènent 
                  à la même montagne sacrée, même si les sentiers diffèrent.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contemporain Section */}
          <section id="contemporain" className="bg-gradient-to-b from-primary/10 to-primary/5 -mx-4 px-4 py-12 rounded-lg">
            <h2 className="text-3xl font-serif text-foreground mb-4 text-center">Pertinence Contemporaine</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
            
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 mb-12">
              <CardContent className="p-8">
                <p className="text-xl italic text-foreground mb-6 text-center">
                  "La sagesse des anciens n'est pas un musée de concepts obsolètes, 
                  mais une source vivante d'inspiration pour les défis contemporains."
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Psychologie Moderne</h4>
                    <p className="text-muted-foreground">
                      Les concepts de soi multiple et de conscience fondamentale trouvent des échos 
                      dans la psychologie transpersonnelle et les recherches sur la conscience.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Écologie Spirituelle</h4>
                    <p className="text-muted-foreground">
                      La vision de l'unité de toute existence offre une base spirituelle 
                      pour l'engagement écologique et la responsabilité environnementale.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Bien-être Intégral</h4>
                    <p className="text-muted-foreground">
                      Les pratiques de yoga et de méditation, ancrées dans la compréhension 
                      de l'Atman, contribuent au bien-être physique, mental et spirituel.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Intégration dans la Vie Contemporaine</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Équilibre Intérieur</h4>
                    <p className="text-muted-foreground">
                      La compréhension de l'Atman comme conscience fondamentale permet de développer 
                      un équilibre intérieur face aux fluctuations émotionnelles et aux défis externes. 
                      En reconnaissant notre nature essentielle comme pure conscience, nous pouvons 
                      naviguer dans la vie avec plus de stabilité et de paix intérieure.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Relations Harmonieuses</h4>
                    <p className="text-muted-foreground">
                      La réalisation de l'unité fondamentale entre tous les êtres transforme notre 
                      approche des relations. En reconnaissant l'Atman en autrui, nous développons 
                      naturellement compassion, empathie et respect. Cette vision transcende les 
                      barrières de race, de religion et de culture.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Sens de la Vie</h4>
                    <p className="text-muted-foreground">
                      La quête de Brahman et d'Atman donne un sens profond à l'existence humaine. 
                      Elle nous invite à voir au-delà des préoccupations matérielles et à chercher 
                      la réalisation de notre nature divine. Cette perspective transforme notre 
                      approche du travail, des relations et de la vie quotidienne.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Responsabilité Universelle</h4>
                    <p className="text-muted-foreground">
                      La compréhension de l'unité de l'existence conduit naturellement à une 
                      responsabilité universelle. Si tous les êtres partagent la même essence 
                      divine, notre bien-être est intrinsèquement lié à celui de tous. Cette 
                      réalisation inspire l'engagement social, l'écologie et le service désintéressé.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-3xl font-serif text-foreground mb-4">Vers l'Éveil Intérieur</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8 space-y-6">
                <p className="text-muted-foreground">
                  La quête de l'unité entre Brahman et Atman représente l'apogée de la sagesse védique. 
                  Elle nous invite à transcender les limitations de l'ego et à réaliser notre véritable 
                  nature divine. Cette exploration n'est pas une simple curiosité intellectuelle mais 
                  une transformation radicale de notre manière d'être dans le monde.
                </p>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                      <p className="text-foreground italic">
                        "Celui qui voit Brahman en tout et tout en Brahman ne connaît plus la peur. 
                        Il a trouvé la paix éternelle et la joie infinie."
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <p className="text-muted-foreground">
                  La compréhension de Brahman et Atman n'est pas réservée à quelques élus mais est 
                  accessible à tous ceux qui s'engagent sincèrement dans la pratique spirituelle. 
                  Que ce soit par la connaissance, la dévotion, la méditation ou l'action désintéressée, 
                  chaque voie mène à la même réalisation ultime. L'essentiel est l'authenticité de la 
                  quête et la persévérance dans la pratique.
                </p>
                
                <p className="text-muted-foreground">
                  Dans notre monde moderne souvent dominé par le matérialisme et la séparation, 
                  la sagesse de Brahman et Atman offre un antidote puissant. Elle nous rappelle 
                  que notre véritable nature est amour, paix et unité. Elle nous invite à voir 
                  au-delà des apparences et à reconnaître la divinité en nous-mêmes et en tous les êtres.
                </p>
                
                <p className="text-muted-foreground">
                  Que cette exploration de Brahman et Atman soit une inspiration pour votre propre 
                  quête spirituelle. Que vous trouviez dans ces enseignants anciens une lumière 
                  pour éclairer votre chemin vers la réalisation de votre nature essentielle. 
                  Car en fin de compte, la connaissance de Brahman et Atman n'est rien d'autre 
                  que la connaissance de soi - et cette connaissance est la liberté absolue.
                </p>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-serif text-primary mb-4">Shanti, Shanti, Shanti</h3>
                  <p className="text-muted-foreground italic">
                    Paix, Paix, Paix - Que la paix règne en nous, autour de nous et partout dans l'univers.
                  </p>
                </div>
              </CardContent>
            </Card>
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

export default BrahmanAtman;
