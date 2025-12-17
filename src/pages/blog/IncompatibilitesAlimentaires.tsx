import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ChevronUp, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/blog/incompatibilites-alimentaires-hero.webp';

const IncompatibilitesAlimentaires = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'intro', label: 'Introduction' },
    { id: 'types', label: 'Les 18 Types' },
    { id: 'combinaisons', label: '55 Combinaisons à Éviter' },
    { id: 'solutions', label: 'Solutions Ayurvédiques' },
    { id: 'epices', label: 'Épices Digestives' },
    { id: 'regles', label: "Règles d'Or" },
    { id: 'protocole', label: 'Protocole Urgence' },
    { id: 'transition', label: 'Plan de Transition' },
    { id: 'tableaux', label: 'Tableaux Récapitulatifs' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/20 to-background">
        <div className="container px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 rounded-full text-primary">
                  🍽️ Nutrition
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  16 Octobre 2025
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  16 min de lecture
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                🍽️ Les Incompatibilités Alimentaires en Ayurvéda
              </h1>
              <h2 className="text-xl text-primary mb-4">
                Virodha Ahara : Quand Nos Assiettes Nous Empoisonnent
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Et si votre fatigue chronique, vos ballonnements persistants et vos difficultés de digestion ne venaient pas de <strong>CE</strong> que vous mangez, mais de <strong>COMMENT</strong> vous combinez vos aliments ?
              </p>

              <div className="flex gap-4">
                <Button onClick={() => scrollToSection("combinaisons")}>
                  ⚠️ Les 55 Mélanges Toxiques
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("solutions")}>
                  🌿 Les Solutions
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Incompatibilités Alimentaires en Ayurvéda" 
                className="rounded-xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Sommaire
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full py-1"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="flex-1 max-w-4xl">
          
              {/* Introduction */}
              <section id="intro" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  🌱 Introduction au Viruddha Ahara
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Dans la science millénaire de l'Ayurvéda, le concept de <strong>Viruddha Ahara</strong> (aliments incompatibles) occupe une place fondamentale dans la prévention des maladies et le maintien de la santé optimale.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Les textes classiques, notamment le <strong>Charaka Samhita</strong> et le <strong>Sushruta Samhita</strong>, nous enseignent que certaines combinaisons alimentaires perturbent profondément notre digestion et peuvent créer des toxines (<strong>Ama</strong>) dans l'organisme.
                </p>

                <Card className="bg-red-500/10 border-red-500/30">
                  <CardContent className="p-6">
                    <p className="text-foreground">
                      <strong>⚠️ Conséquences des incompatibilités :</strong> Fatigue chronique, ballonnements, problèmes de peau, allergies, inflammation, troubles digestifs, et à long terme : maladies chroniques et affaiblissement du système immunitaire.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Les 18 Types */}
              <section id="types" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  📚 Les 18 Types d'Incompatibilités Fondamentales
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    { 
                      id: '1', 
                      title: '1. Desha Viruddha - Incompatibilité Géographique',
                      desc: 'Consommer des aliments inappropriés au climat ou à la région où l\'on vit.',
                      examples: ['Aliments secs et froids dans un climat aride', 'Aliments lourds et gras en région humide et chaude', 'Boissons glacées dans un environnement froid'],
                      solutions: ['Privilégier les aliments locaux et de saison', 'En climat sec : aliments hydratants (concombre, melon)', 'En climat humide : aliments légers, épicés et secs']
                    },
                    { 
                      id: '2', 
                      title: '2. Kala Viruddha - Incompatibilité Temporelle',
                      desc: 'Consommer des aliments inappropriés à la saison ou au moment de la journée.',
                      examples: ['Yaourt ou glaces en hiver', 'Aliments lourds tard le soir', 'Miel en été (période chaude)'],
                      solutions: ['Matin (6h-10h) : Petit-déjeuner léger', 'Midi (10h-14h) : Repas principal copieux', 'Soir (18h-20h) : Repas léger, soupe']
                    },
                    { 
                      id: '3', 
                      title: '3. Agni Viruddha - Incompatibilité avec le Feu Digestif',
                      desc: 'Manger sans tenir compte de sa capacité digestive.',
                      examples: ['Aliments lourds avec un Agni faible', 'Grandes quantités quand on a peu faim', 'Glaces avec une digestion faible'],
                      solutions: ['Évaluer son Agni quotidiennement', 'Agni faible : soupes, bouillons, kitchari', 'Gingembre frais + citron + sel avant les repas']
                    },
                    { 
                      id: '4', 
                      title: '4. Matra Viruddha - Incompatibilité de Quantité',
                      desc: 'Consommer des proportions inadéquates d\'aliments.',
                      examples: ['Miel et ghee en proportions égales (toxique !)', 'Trop de fruits avec un repas principal', 'Portions démesurées d\'aliments lourds'],
                      solutions: ['Règle 2:1 pour miel/ghee (toujours inégales)', 'Remplir l\'estomac : 1/3 solide, 1/3 liquide, 1/3 vide', 'Portion = 2 mains jointes en coupe']
                    },
                    { 
                      id: '5', 
                      title: '5. Dosha Viruddha - Incompatibilité Constitutionnelle',
                      desc: 'Consommer des aliments qui aggravent sa constitution.',
                      examples: ['Vata : aliments secs, froids, crus en excès', 'Pitta : aliments épicés, acides, chauds en excès', 'Kapha : aliments lourds, gras, sucrés en excès'],
                      solutions: ['Vata : aliments chauds, onctueux, sucrés', 'Pitta : aliments frais, doux, amers', 'Kapha : aliments légers, secs, piquants']
                    },
                    { 
                      id: '6', 
                      title: '6. Samskara Viruddha - Incompatibilité de Préparation',
                      desc: 'Mauvais processus de cuisson ou de transformation.',
                      examples: ['Chauffer le miel au-delà de 40°C (devient toxique)', 'Réchauffer plusieurs fois les aliments', 'Cuisson au micro-ondes'],
                      solutions: ['Ustensiles appropriés (argile, inox, fonte)', 'Miel toujours à température ambiante', 'Préparer les aliments frais quotidiennement']
                    },
                    { 
                      id: '7', 
                      title: '7. Veerya Viruddha - Incompatibilité de Potentiel Énergétique',
                      desc: 'Combiner des aliments aux énergies opposées (chaude/froide).',
                      examples: ['Poisson (chauffant) + lait (refroidissant)', 'Miel (chauffant) + ghee en parts égales', 'Aliments très froids avec très chauds'],
                      solutions: ['Respecter les groupes énergétiques similaires', 'Utiliser épices pour harmoniser', 'Attendre 2-3h entre aliments de Veerya opposée']
                    },
                    { 
                      id: '8', 
                      title: '8. Koshtha Viruddha - Incompatibilité selon l\'État Intestinal',
                      desc: 'Aliments inappropriés selon la condition intestinale.',
                      examples: ['Aliments laxatifs en cas de diarrhée', 'Aliments secs avec intestin Vata', 'Épices fortes avec inflammation'],
                      solutions: ['Constipation : ghee, lait chaud, Triphala', 'Diarrhée : riz blanc, banane, cumin', 'Ballonnements : gingembre, fenouil, kitchari']
                    },
                  ].map((type) => (
                    <AccordionItem key={type.id} value={type.id} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left font-semibold">
                        {type.title}
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 space-y-4">
                        <p className="text-muted-foreground">{type.desc}</p>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">❌ Exemples :</h5>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            {type.examples.map((ex, i) => <li key={i}>• {ex}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">✅ Solutions ayurvédiques :</h5>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            {type.solutions.map((sol, i) => <li key={i}>• {sol}</li>)}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Card className="mt-6 bg-secondary/50">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm">
                      <strong>Et 10 autres types :</strong> Avastha Viruddha (état de santé), Krama Viruddha (ordre/séquence), Parihara Viruddha (pratique), Upachar Viruddha (traitement), Paka Viruddha (cuisson), Samyoga Viruddha (combinaison), Hrit Viruddha (aversion), Vidhi Viruddha (règles), Virasa Viruddha (goût), Satmya Viruddha (habitudes).
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Les 55 Combinaisons */}
              <section id="combinaisons" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  ⚠️ Les 55+ Combinaisons Alimentaires à Éviter
                </h2>

                <Tabs defaultValue="laitiers" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6 h-auto">
                    <TabsTrigger value="laitiers" className="text-xs">🥛 Laitiers</TabsTrigger>
                    <TabsTrigger value="fruits" className="text-xs">🍎 Fruits</TabsTrigger>
                    <TabsTrigger value="miel" className="text-xs">🍯 Miel</TabsTrigger>
                    <TabsTrigger value="proteines" className="text-xs">🥩 Protéines</TabsTrigger>
                    <TabsTrigger value="legumineuses" className="text-xs">🌾 Céréales</TabsTrigger>
                    <TabsTrigger value="autres" className="text-xs">📋 Autres</TabsTrigger>
                  </TabsList>

                  <TabsContent value="laitiers">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🥛 Produits Laitiers (15 incompatibilités)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { combo: 'Lait + Fruits acides', effet: 'Le lait caille avec l\'acidité, crée toxines (Ama)', solution: 'Attendre 2h entre les deux' },
                          { combo: 'Lait + Banane', effet: 'Lourdeur excessive, mucus, Kapha aggravé', solution: 'Ajouter cardamome + cannelle' },
                          { combo: 'Lait + Poisson/Fruits de mer', effet: 'Énergies opposées, problèmes de peau', solution: 'Éviter absolument, séparer de 6h' },
                          { combo: 'Lait + Viande', effet: 'Temps de digestion différents, putrescence', solution: 'Éviter ou séparer de plusieurs heures' },
                          { combo: 'Lait + Aliments salés', effet: 'Contrarie la nature du lait', solution: 'Lait seul ou avec épices douces' },
                          { combo: 'Lait + Melons', effet: 'Fermentation, ballonnements', solution: 'Melons toujours seuls' },
                          { combo: 'Yaourt le soir', effet: 'Kapha augmente, mucus, congestion', solution: 'Yaourt uniquement au déjeuner' },
                          { combo: 'Yaourt chauffé', effet: 'Détruit probiotiques, devient toxique', solution: 'Toujours température ambiante' },
                          { combo: 'Lait froid', effet: 'Éteint Agni, difficile à digérer', solution: 'Toujours lait chaud avec épices' },
                          { combo: 'Glace + tout aliment', effet: 'Éteint Agni complètement', solution: 'Seule, petite quantité, midi uniquement' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg">
                            <XCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                            <div>
                              <p className="font-semibold text-foreground">{item.combo}</p>
                              <p className="text-sm text-muted-foreground">{item.effet}</p>
                              <p className="text-sm text-primary">✅ {item.solution}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="fruits">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🍎 Fruits (12 incompatibilités)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { combo: 'Fruits + Repas principal', effet: 'Digestion rapide vs lente = fermentation', solution: 'Fruits 30 min avant ou 2-3h après repas' },
                          { combo: 'Melons + N\'importe quoi', effet: 'Digestion ultrarapide, dilution enzymes', solution: 'Melons TOUJOURS seuls, estomac vide' },
                          { combo: 'Fruits sucrés + Fruits acides', effet: 'Processus digestifs différents', solution: 'Séparer ou choisir l\'un ou l\'autre' },
                          { combo: 'Fruits + Pommes de terre', effet: 'Amidon lourd + sucres rapides = fermentation', solution: 'Éviter' },
                          { combo: 'Fruits + Céréales', effet: 'Temps de digestion incompatibles', solution: 'Céréales cuites avec épices, fruits à part' },
                          { combo: 'Papaye + Citron', effet: 'Peut causer anémie selon l\'Ayurvéda', solution: 'Éviter la combinaison' },
                          { combo: 'Bananes + Yaourt', effet: 'Obstrue les canaux, crée toxines', solution: 'Éviter' },
                          { combo: 'Fruits la nuit', effet: 'Agni faible, sucres non métabolisés', solution: 'Fruits jusqu\'à 18h maximum' },
                          { combo: 'Pastèque + Graines/Noix', effet: 'Eau + graisses = indigestion', solution: 'Pastèque seule' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg">
                            <XCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                            <div>
                              <p className="font-semibold text-foreground">{item.combo}</p>
                              <p className="text-sm text-muted-foreground">{item.effet}</p>
                              <p className="text-sm text-primary">✅ {item.solution}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="miel">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🍯 Miel (5 incompatibilités CRITIQUES)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { combo: 'Miel chauffé (> 40°C)', effet: 'Devient TOXIQUE - colle aux tissus', solution: 'Miel toujours cru, ajouté après refroidissement', critical: true },
                          { combo: 'Miel + Ghee en proportions égales (1:1)', effet: 'Considéré comme POISON en Ayurvéda', solution: 'Toujours proportions inégales (2:1 ou 3:1)', critical: true },
                          { combo: 'Miel + Boissons chaudes', effet: 'Élève la température du miel', solution: 'Attendre tiédeur avant d\'ajouter miel' },
                          { combo: 'Miel en grande quantité en été', effet: 'Nature chauffante + chaleur externe', solution: 'Modération en été' },
                          { combo: 'Miel + Aliments fermentés', effet: 'Incompatibilité de Veerya', solution: 'Éviter yaourt + miel chauffé' },
                        ].map((item, i) => (
                          <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${item.critical ? 'bg-red-500/20 border border-red-500/30' : 'bg-red-500/5'}`}>
                            <AlertTriangle className={`flex-shrink-0 mt-1 ${item.critical ? 'text-red-500' : 'text-orange-500'}`} size={18} />
                            <div>
                              <p className="font-semibold text-foreground">{item.combo} {item.critical && '⚠️'}</p>
                              <p className="text-sm text-muted-foreground">{item.effet}</p>
                              <p className="text-sm text-primary">✅ {item.solution}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="proteines">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🥩 Protéines Animales (8 incompatibilités)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { combo: 'Poisson + Lait/Produits laitiers', effet: 'Énergies opposées - vitiligo, psoriasis', solution: 'Éviter absolument, séparer de 6h minimum' },
                          { combo: 'Viande + Lait', effet: 'Digestion incompatible, putréfaction', solution: 'Éviter' },
                          { combo: 'Poulet + Yaourt', effet: 'Double protéine + lacté = lourdeur extrême', solution: 'Éviter ou épices digestives fortes' },
                          { combo: 'Œufs + Lait', effet: 'Protéines différentes, lourd', solution: 'Éviter ou séparer' },
                          { combo: 'Œufs + Fromage', effet: 'Double protéine concentrée', solution: 'Éviter' },
                          { combo: 'Œufs + Fruits', effet: 'Digestion incompatible', solution: 'Séparer' },
                          { combo: 'Poisson + Œufs', effet: 'Double protéine animale', solution: 'Éviter dans même repas' },
                          { combo: 'Viande rouge + Alcool', effet: 'Lourdeur + toxicité, foie surchargé', solution: 'Éviter ou modération extrême' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg">
                            <XCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                            <div>
                              <p className="font-semibold text-foreground">{item.combo}</p>
                              <p className="text-sm text-muted-foreground">{item.effet}</p>
                              <p className="text-sm text-primary">✅ {item.solution}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="legumineuses">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">🌾 Légumineuses & Céréales (6 incompatibilités)</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { combo: 'Haricots/Lentilles + Fruits', effet: 'Digestion très différente = fermentation, gaz', solution: 'Séparer complètement' },
                          { combo: 'Haricots + Fromage', effet: 'Double source de protéines lourdes', solution: 'Éviter' },
                          { combo: 'Riz + Vinaigre', effet: 'Incompatibilité selon textes classiques', solution: 'Éviter' },
                          { combo: 'Légumineuses mal cuites', effet: 'Très indigestes, gaz', solution: 'Trempage 8h + cuisson complète + épices (asa foetida, cumin)' },
                          { combo: 'Blé + Fruits acides', effet: 'Fermentation', solution: 'Séparer' },
                          { combo: 'Pain levé + Lait', effet: 'Fermentation + lait = lourdeur', solution: 'Éviter ou pains sans levure' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg">
                            <XCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                            <div>
                              <p className="font-semibold text-foreground">{item.combo}</p>
                              <p className="text-sm text-muted-foreground">{item.effet}</p>
                              <p className="text-sm text-primary">✅ {item.solution}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="autres">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">📋 Autres Combinaisons à Éviter</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { combo: 'Eau glacée + Repas', effet: 'Éteint Agni digestif', solution: 'Eau tiède ou chaude pendant/après repas' },
                          { combo: 'Café + Lait', effet: 'Caséine + tanins = indigestion', solution: 'Café noir ou lait seul' },
                          { combo: 'Thé + Lait', effet: 'Tanins + caséine', solution: 'Séparément (sauf avec épices)' },
                          { combo: 'Tomates + Concombre', effet: 'Processus enzymatiques antagonistes', solution: 'Séparément' },
                          { combo: 'Pommes de terre + Tomates', effet: 'Peut affecter Pitta', solution: 'Cuire séparément avec épices' },
                          { combo: 'Radis + Lait', effet: 'Incompatibilité de Veerya', solution: 'Éviter' },
                          { combo: 'Aliments réchauffés plusieurs fois', effet: 'Perte prana, création toxines', solution: 'Réchauffer une seule fois maximum' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg">
                            <XCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                            <div>
                              <p className="font-semibold text-foreground">{item.combo}</p>
                              <p className="text-sm text-muted-foreground">{item.effet}</p>
                              <p className="text-sm text-primary">✅ {item.solution}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Solutions */}
              <section id="solutions" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  🌿 Solutions Ayurvédiques Globales
                </h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>🔥 1. Renforcement d'Agni (Feu Digestif)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Pratiques quotidiennes :</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• <strong>Ginger Appetizer (Shunthi) :</strong> Gingembre frais râpé + citron + sel gemme, 15 min avant repas</li>
                          <li>• <strong>Eau chaude :</strong> Boire toute la journée (détoxifie, ravive Agni)</li>
                          <li>• <strong>Trikatu :</strong> Gingembre sec + poivre noir + poivre long</li>
                          <li>• <strong>Jeûne intermittent :</strong> 12-16h sans manger, une fois par semaine</li>
                          <li>• <strong>Exercice modéré :</strong> 30 min avant petit-déjeuner</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Tisanes digestives :</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• <strong>CCF Tea :</strong> Cumin + Coriandre + Fenouil (parts égales), infuser 10 min</li>
                          <li>• <strong>Tisane au gingembre :</strong> Gingembre frais bouilli 10 min</li>
                          <li>• <strong>Ajwain Tea :</strong> Graines de carambole pour ballonnements</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>🧹 2. Détoxification (Ama Pachana)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Quand détoxifier (signes d'Ama) :</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Langue blanche épaisse</li>
                          <li>• Mauvaise haleine persistante</li>
                          <li>• Fatigue chronique</li>
                          <li>• Lourdeur après repas</li>
                          <li>• Ballonnements fréquents</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Méthodes :</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• <strong>Kitchari Cleanse (3-7 jours) :</strong> Kitchari uniquement + tisanes digestives + repos</li>
                          <li>• <strong>Triphala :</strong> 1-2 g le soir avec eau tiède (2-3 mois pour effets profonds)</li>
                          <li>• <strong>Panchakarma :</strong> 1-2 fois par an aux changements de saison</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Épices */}
              <section id="epices" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  🌶️ Épices Digestives Essentielles
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="border border-border p-3 text-left">Épice</th>
                        <th className="border border-border p-3 text-left">Propriétés</th>
                        <th className="border border-border p-3 text-left">Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { epice: 'Cumin', props: 'Digestion, gaz, détox', usage: 'Tempérer dans ghee, ajouter aux plats' },
                        { epice: 'Coriandre', props: 'Refroidissant, anti-inflammatoire', usage: 'Poudre ou fraîche, tous doshas' },
                        { epice: 'Fenouil', props: 'Gaz, crampes, rafraîchissant', usage: 'Infusion après repas, graines à mâcher' },
                        { epice: 'Gingembre', props: 'Allume Agni, nausées', usage: 'Frais avant repas, sec dans cuisson' },
                        { epice: 'Cardamome', props: 'Digestion lait, haleine fraîche', usage: 'Dans lait chaud, thé, desserts' },
                        { epice: 'Asa foetida (Hing)', props: 'Anti-gaz puissant, légumineuses', usage: 'Pincée dans huile chaude' },
                        { epice: 'Ajwain', props: 'Ballonnements, coliques', usage: 'Infusion ou tempéré' },
                        { epice: 'Poivre noir', props: 'Stimule métabolisme', usage: 'Modération, avec curcuma' },
                        { epice: 'Curcuma', props: 'Anti-inflammatoire, détox foie', usage: 'Quotidien dans cuisine' },
                        { epice: 'Cannelle', props: 'Régule sucre, réchauffe', usage: 'Infusions, petit-déjeuner' },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}>
                          <td className="border border-border p-3 font-semibold">{row.epice}</td>
                          <td className="border border-border p-3 text-muted-foreground">{row.props}</td>
                          <td className="border border-border p-3 text-muted-foreground">{row.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Règles d'Or */}
              <section id="regles" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  ✨ Règles d'Or pour un Repas Ayurvédique
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">⏰ Avant le repas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>1. Attendre la vraie faim (4-6h)</li>
                        <li>2. Environnement calme et propre</li>
                        <li>3. Ginger appetizer 15 min avant</li>
                        <li>4. Se laver mains et visage</li>
                        <li>5. Moment de gratitude</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🍽️ Pendant le repas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>1. Assis confortablement, dos droit</li>
                        <li>2. Mastiquer 32 fois minimum</li>
                        <li>3. Manger avec conscience</li>
                        <li>4. Petites gorgées d'eau chaude</li>
                        <li>5. Silence ou conversation légère</li>
                        <li>6. Règle 1/3 solide, 1/3 liquide, 1/3 vide</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">🚶 Après le repas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground space-y-2">
                        <li>1. Rester assis 5-10 min (Vajrasana)</li>
                        <li>2. Marche légère 100 pas</li>
                        <li>3. Pas de sieste (sauf été, 15 min max)</li>
                        <li>4. Pas d'eau froide pendant 1h</li>
                        <li>5. Graines de fenouil à mâcher</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6 bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">⏰ Timing optimal des repas :</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• <strong>Petit-déjeuner (7h-9h) :</strong> Léger</li>
                      <li>• <strong>Déjeuner (12h-13h) :</strong> Repas PRINCIPAL (Agni au maximum)</li>
                      <li>• <strong>Dîner (18h-19h) :</strong> Léger et tôt</li>
                      <li>• <strong>Dernier repas :</strong> 3h avant coucher</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Protocole Urgence */}
              <section id="protocole" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  🆘 Protocole en Cas d'Incompatibilité Consommée
                </h2>

                <Card className="border-yellow-500/30 bg-yellow-500/5">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-3">⏱️ Immédiatement après :</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>1. <strong>Tisane digestive forte :</strong> gingembre + poivre noir</li>
                        <li>2. <strong>Hingvastak Churna :</strong> 1/4 cuillère à café</li>
                        <li>3. <strong>Marche :</strong> 15-20 minutes</li>
                        <li>4. <strong>Pranayama (Kapalabhati) :</strong> pour stimuler Agni</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-500 mb-3">📅 Heures suivantes :</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>1. Jeûne jusqu'à digestion complète</li>
                        <li>2. Eau chaude régulièrement</li>
                        <li>3. Tisane CCF toute la journée</li>
                        <li>4. Prochain repas très léger (soupe, kitchari)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-500 mb-3">📆 Jours suivants :</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>1. Diète légère 2-3 jours</li>
                        <li>2. Triphala le soir</li>
                        <li>3. Renforcement Agni avec épices</li>
                        <li>4. Retour progressif alimentation normale</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Plan de Transition */}
              <section id="transition" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  🗓️ Plan de Transition (3 mois)
                </h2>

                <div className="space-y-4">
                  {[
                    { phase: 'Semaine 1-2', title: 'Observation et Conscience', tasks: ['Tenir journal alimentaire', 'Noter combinaisons actuelles', 'Observer effets sur digestion', 'Identifier incompatibilités fréquentes'] },
                    { phase: 'Semaine 3-4', title: 'Premières Corrections', tasks: ['Éliminer 3 pires incompatibilités', 'Introduire épices digestives', 'Eau chaude quotidiennement', 'Fruits séparés des repas'] },
                    { phase: 'Semaine 5-8', title: 'Approfondissement', tasks: ['Timing des repas optimal', 'Renforcement Agni (ginger appetizer)', 'Élimination autres incompatibilités', 'Tisanes digestives'] },
                    { phase: 'Mois 3', title: 'Stabilisation', tasks: ['Routine complète établie', 'Détox Triphala', 'Adaptation saisonnière', 'Écoute intuitive du corps'] },
                    { phase: 'Mois 6+', title: 'Maîtrise', tasks: ['Alimentation intuitive ayurvédique', 'Ajustements selon Doshas', 'Panchakarma saisonnier', 'Santé optimale maintenue'] },
                  ].map((item, i) => (
                    <Card key={i} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-primary">{item.phase}</span>
                          <span className="font-semibold text-foreground">{item.title}</span>
                        </div>
                        <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-1">
                          {item.tasks.map((task, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <CheckCircle2 size={14} className="text-green-500" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Tableaux Récapitulatifs */}
              <section id="tableaux" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  📊 Tableaux Récapitulatifs
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-green-500/30">
                    <CardHeader>
                      <CardTitle className="text-green-500">✅ Combinaisons BÉNÉFIQUES</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          'Riz + Haricot mungo = Protéines complètes',
                          'Lait chaud + Curcuma = Anti-inflammatoire',
                          'Lait chaud + Cardamome = Meilleure digestion',
                          'Ghee + Céréales = Absorption nutriments',
                          'Kitchari + Épices = Détox + nutrition',
                          'Miel cru + Eau tiède = Détox matinale',
                          'Gingembre + Citron = Stimule Agni',
                          'Légumes verts + Ghee = Vitamines liposolubles',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-500/30">
                    <CardHeader>
                      <CardTitle className="text-red-500">❌ Combinaisons à ÉVITER ABSOLUMENT</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          'Miel + Chaleur >40°C = Toxique',
                          'Lait + Poisson = Très incompatible',
                          'Melons + Tout aliment = Fermentation',
                          'Fruits + Repas principal = Fermentation',
                          'Yaourt + Soir = Mucus, Kapha',
                          'Miel + Ghee (1:1) = Poison selon Ayurvéda',
                          'Lait + Fruits acides = Caillage, toxines',
                          'Glace + Tout = Éteint Agni',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <XCircle size={16} className="text-red-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-16">
                <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                      🙏 L'Alchimie de l'Alimentation Consciente
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Les incompatibilités alimentaires selon l'Ayurvéda ne sont pas des interdictions rigides, mais une <strong>invitation à la conscience</strong>. Chaque repas devient un acte créatif où nous composons une symphonie de saveurs, d'énergies et de vibrations.
                    </p>

                    <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 bg-primary/5 rounded-r-lg text-left max-w-2xl mx-auto">
                      <p className="text-lg italic text-foreground">
                        "Ahara Shuddhi Sattva Shuddhih" – Quand la nourriture est pure, l'esprit devient pur
                      </p>
                    </blockquote>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link to="/bilan-de-sante">
                          Prendre RDV pour un Bilan
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link to="/contact">
                          Nous Contacter
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Related Articles */}
              <section>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Articles connexes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/colon-irritable-ayurveda" className="group">
                    <Card className="h-full hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <span className="text-sm text-primary">Digestion</span>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mt-2">
                          Le Syndrome du Côlon Irritable et l'Ayurvéda
                        </h4>
                        <p className="text-muted-foreground text-sm mt-2">
                          Apaiser « Grahani Dosha », le Ventre qui Pleure
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link to="/blog/osteoporose-ayurveda" className="group">
                    <Card className="h-full hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <span className="text-sm text-primary">Santé Osseuse</span>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mt-2">
                          Ostéoporose et Ayurvéda
                        </h4>
                        <p className="text-muted-foreground text-sm mt-2">
                          Reconstruire ses os naturellement
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </section>

            </article>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Retour en haut"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </Layout>
  );
};

export default IncompatibilitesAlimentaires;
