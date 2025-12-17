import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ChevronUp, Phone, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { OsteoporoseQuiz } from '@/components/blog/OsteoporoseQuiz';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/blog/osteoporose-hero.webp';

const Osteoporose = () => {
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
    { id: 'intro', label: "🦴 L'Ostéoporose : Un Appel à l'Équilibre" },
    { id: 'approches', label: '🔬 Deux Approches Complémentaires' },
    { id: 'dhatus', label: '🌊 Les 7 Dhatus' },
    { id: 'test', label: '🧪 Test Profil Osseux' },
    { id: 'profils', label: '👥 Les 3 Profils d\'Ostéoporose' },
    { id: 'protocole', label: '🔄 Protocole 4 Phases' },
    { id: 'recettes', label: '🍲 Recettes Ayurvédiques' },
    { id: 'urgence', label: '🆘 Protocole d\'Urgence' },
    { id: 'temoignages', label: '💬 Témoignages' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Ostéoporose et Ayurvéda" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Retour au blog</span>
          </Link>
          
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Santé Osseuse
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Ostéoporose et Ayurvéda
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-6">
            Asthi Dhatu Kshaya : La Vision Millénaire qui Régénère Vos Os
          </p>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              Novembre 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} />
              25 min de lecture
            </span>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Ans de Sagesse</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">87%</div>
              <div className="text-sm text-muted-foreground">Amélioration Moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Approche Naturelle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto pb-2">
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <section id="intro" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🦴 Au-delà du Calcium, la Révolution Ayurvédique
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>29 millions de personnes touchées en Europe. 1 femme sur 3 après 50 ans.</strong> L'ostéoporose n'est plus une fatalité du vieillissement mais une épidémie silencieuse de notre époque.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Et si la médecine moderne, focalisée sur le calcium et les biphosphonates, passait à côté de l'essentiel ?
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              L'Ayurvéda révèle une vérité bouleversante : vos os ne sont pas juste du « béton biologique ». Ils sont le siège de votre force vitale (Ojas), le reflet de votre feu digestif (Agni), et l'expression de votre équilibre hormonal profond.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg">
              <p className="text-lg italic text-foreground">
                « Asthi dhatu mulam vatam » – Les os sont la racine de Vata (énergie vitale)
              </p>
            </blockquote>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6">
                <p className="text-foreground">
                  <strong>🔑 Asthi Dhatu</strong> (tissu osseux) est l'un des 7 tissus vitaux en Ayurvéda. Lorsqu'il s'affaiblit, c'est tout votre système énergétique qui appelle à l'aide. L'ostéoporose touche plus de <strong>200 millions de personnes</strong> dans le monde. La médecine moderne la considère comme une fatalité du vieillissement. L'Ayurvéda, elle, y voit un <strong>déséquilibre énergétique réversible</strong>.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Deux Approches */}
          <section id="approches" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🔬 Deux Approches Complémentaires
            </h2>
            <p className="text-muted-foreground mb-8">
              Quand médecine moderne et sagesse ayurvédique se rencontrent
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-500/30 bg-blue-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    🏥 Médecine Occidentale
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🩺 Définition :</h4>
                    <p className="text-sm text-muted-foreground">
                      L'ostéoporose est une maladie osseuse caractérisée par une diminution de la densité minérale osseuse et une détérioration de la microarchitecture du tissu osseux.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🔍 Causes identifiées :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Diminution des œstrogènes (ménopause)</li>
                      <li>• Déficit en calcium et vitamine D</li>
                      <li>• Sédentarité et manque d'exercice</li>
                      <li>• Facteurs génétiques</li>
                      <li>• Certains médicaments (corticoïdes)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">💊 Traitements conventionnels :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bisphosphonates (Fosamax, Actonel)</li>
                      <li>• Supplémentation calcium + vitamine D</li>
                      <li>• Thérapie hormonale substitutive</li>
                      <li>• Exercices de renforcement</li>
                      <li>• Surveillance densitométrie osseuse</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    🌿 Vision Ayurvédique
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🕉️ Compréhension énergétique :</h4>
                    <p className="text-sm text-muted-foreground">
                      L'ostéoporose est principalement un déséquilibre de Vata dosha (élément air et éther), aggravé par un affaiblissement d'Asthi Dhatu (le tissu osseux).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🌱 Causes selon l'Ayurvéda :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Excès de Vata (stress, anxiété, irrégularités)</li>
                      <li>• Agni faible (feu digestif bas)</li>
                      <li>• Accumulation d'Ama (toxines)</li>
                      <li>• Mode de vie déséquilibré</li>
                      <li>• Consommation d'aliments froids/secs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">🌿 Approches thérapeutiques :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Plantes : Ashwagandha, Shatavari, Guggulu</li>
                      <li>• Régime : Aliments chauds, nourrissants</li>
                      <li>• Panchakarma : Basti (lavements médicamenteux)</li>
                      <li>• Abhyanga : Massages huile de sésame chaude</li>
                      <li>• Yoga : Asanas de renforcement (Vrikshasana)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-secondary/50">
              <CardContent className="p-6">
                <p className="text-foreground">
                  <strong>💡 L'approche intégrative idéale :</strong> Combiner la surveillance médicale moderne (densitométrie, suppléments ciblés) avec les pratiques ayurvédiques de rééquilibrage du Vata, renforcement du feu digestif et nourissement profond des tissus osseux. Cette synergie offre une prise en charge holistique qui traite à la fois les symptômes et les causes profondes.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Les 7 Dhatus */}
          <section id="dhatus" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🌊 Les 7 Dhatus : Les Tissus Vitaux
            </h2>
            <p className="text-muted-foreground mb-8">
              Asthi Dhatu (tissu osseux) est le 5ème des 7 tissus corporels en Ayurvéda
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: 1, name: 'Rasa Dhatu (Plasma)', icon: '💧', desc: 'Fluides corporels et lymphe. Nourrit tous les tissus. Si faible : fatigue, peau sèche.' },
                { num: 2, name: 'Rakta Dhatu (Sang)', icon: '🩸', desc: 'Transporte oxygène et nutriments. Vitalité et chaleur. Si faible : anémie, teint pâle.' },
                { num: 3, name: 'Mamsa Dhatu (Muscle)', icon: '💪', desc: 'Structure corporelle et force. Protection des organes. Si faible : fonte musculaire.' },
                { num: 4, name: 'Meda Dhatu (Graisse)', icon: '🧈', desc: 'Lubrification et réserves énergétiques. Protège articulations. Si excès : obésité.' },
                { num: 5, name: 'Asthi Dhatu (Os) ⭐', icon: '🦴', desc: 'Charpente du corps. Donne structure et stabilité. Si faible : ostéoporose, douleurs.', highlight: true },
                { num: 6, name: 'Majja Dhatu (Moelle)', icon: '🧠', desc: 'Moelle osseuse et système nerveux. Remplit les os. Si faible : vertiges, vide.' },
                { num: 7, name: 'Shukra Dhatu (Reproductif)', icon: '💎', desc: 'Tissus reproducteurs et essence vitale. Ojas ultime. Si faible : infertilité.' },
              ].map((dhatu) => (
                <Card key={dhatu.num} className={dhatu.highlight ? 'border-primary bg-primary/10' : ''}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{dhatu.icon}</span>
                      <h4 className="font-semibold text-foreground">{dhatu.num}. {dhatu.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{dhatu.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-secondary/50">
              <CardContent className="p-6">
                <p className="text-foreground">
                  <strong>🔄 Principe de cascades :</strong> Chaque dhatu nourrit le suivant. Si Rasa (plasma) est faible, Asthi (os) sera affaibli. L'Ayurvéda traite donc l'ostéoporose en remontant toute la chaîne nutritionnelle des tissus, pas seulement en apportant du calcium.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Test Quiz */}
          <section id="test" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🧪 Quel Est Votre Profil d'Ostéoporose ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Découvrez si votre ostéoporose est de type Vata, Pitta ou Kapha en 2 minutes
            </p>

            <OsteoporoseQuiz />
          </section>

          {/* Les 3 Profils */}
          <section id="profils" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              👥 Les 3 Profils d'Ostéoporose Ayurvédique
            </h2>
            <p className="text-muted-foreground mb-8">
              Chaque dosha déséquilibré crée un type d'ostéoporose spécifique
            </p>

            <Tabs defaultValue="vata" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="vata">💨 Vata</TabsTrigger>
                <TabsTrigger value="pitta">🔥 Pitta</TabsTrigger>
                <TabsTrigger value="kapha">🌊 Kapha</TabsTrigger>
              </TabsList>

              <TabsContent value="vata">
                <Card className="border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-purple-400">
                      💨 Ostéoporose Vata : « Les Os Poreux et Cassants »
                    </CardTitle>
                    <p className="text-sm italic text-muted-foreground">
                      « Je suis mince, toujours froide, stressée. Mes os se sont fracturés 3 fois en 2 ans. Douleurs aiguës et instabilité constante… » — Marie, 68 ans
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Symptômes Vata typiques :</h4>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Os naturellement fins et légers</li>
                        <li>• Douleurs osseuses migrantes, aiguës</li>
                        <li>• Anxiété chronique, insomnie</li>
                        <li>• Peau sèche, constipation</li>
                        <li>• Fractures fréquentes malgré précautions</li>
                        <li>• Aggravation par le froid et le vent</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">🌿 Approche ayurvédique Vata :</h4>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>Alimentation :</strong> Nourriture chaude, onctueuse, consistante (soupes, ragoûts, ghee)</li>
                        <li><strong>Plantes :</strong> Ashwagandha, Shatavari, Guggul (apaisent Vata)</li>
                        <li><strong>Huiles thérapeutiques :</strong> Massage quotidien huile sésame chaude</li>
                        <li><strong>Routine régulière :</strong> Horaires fixes, repos suffisant, chaleur</li>
                        <li><strong>Compléments :</strong> Calcium + Magnésium + Vitamine K2</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pitta">
                <Card className="border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="text-orange-400">
                      🔥 Ostéoporose Pitta : « Les Os Enflammés et Acides »
                    </CardTitle>
                    <p className="text-sm italic text-muted-foreground">
                      « J'ai des bouffées de chaleur depuis la ménopause. Mes os me brûlent littéralement. Je suis irritable, j'ai des reflux acides constants… » — Sophie, 55 ans
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Symptômes Pitta typiques :</h4>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Douleurs osseuses brûlantes</li>
                        <li>• Inflammation chronique</li>
                        <li>• Bouffées de chaleur, sueurs nocturnes</li>
                        <li>• Irritabilité, colère</li>
                        <li>• Acidité gastrique, reflux</li>
                        <li>• Aggravation par la chaleur et épices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">🌿 Approche ayurvédique Pitta :</h4>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>Alimentation :</strong> Aliments frais, doux, alcalins (concombre, coco, riz)</li>
                        <li><strong>Plantes :</strong> Brahmi, Amalaki, Shatavari (rafraîchissent Pitta)</li>
                        <li><strong>Éviter :</strong> Tomates, agrumes, alcool, viande rouge</li>
                        <li><strong>Huiles :</strong> Coco, ghee (anti-inflammatoires)</li>
                        <li><strong>Compléments :</strong> Calcium citrate + Vitamine K2 + Oméga-3</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="kapha">
                <Card className="border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="text-blue-400">
                      🌊 Ostéoporose Kapha : « Les Os Lourds et Congestionnés »
                    </CardTitle>
                    <p className="text-sm italic text-muted-foreground">
                      « Je suis en surpoids, mais mes os sont fragiles ! Le médecin ne comprend pas. J'ai des douleurs sourdes, une grande fatigue, et mes os semblent 'mous'… » — Françoise, 61 ans
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Symptômes Kapha typiques :</h4>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Ostéoporose malgré surpoids</li>
                        <li>• Douleurs sourdes, profondes, constantes</li>
                        <li>• Raideur matinale prolongée</li>
                        <li>• Congestion, lourdeur généralisée</li>
                        <li>• Rétention d'eau, œdèmes</li>
                        <li>• Fatigue chronique, léthargie</li>
                        <li>• Digestion lente, mucosités</li>
                        <li>• Aggravation par l'humidité et le froid</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">🌿 Approche ayurvédique Kapha :</h4>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>Alimentation :</strong> Léger, sec, épicé, chaud (éviter laitages lourds)</li>
                        <li><strong>Plantes :</strong> Guggul, Trikatu, Shilajit (stimulent métabolisme)</li>
                        <li><strong>Activité dynamique :</strong> Course, danse, HIIT (stimuler circulation)</li>
                        <li><strong>Exposition solaire :</strong> 20-30 min quotidiennes (vitamine D)</li>
                        <li><strong>Compléments :</strong> Vitamine D3 + Magnésium + K2</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Protocole 4 Phases */}
          <section id="protocole" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🔄 Protocole de Régénération Osseuse en 4 Phases
            </h2>
            <p className="text-muted-foreground mb-8">
              La méthode ayurvédique complète pour reconstruire vos os naturellement
            </p>

            <div className="space-y-6">
              {/* Phase 1 */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">1</span>
                    <div>
                      <CardTitle>Phase 1 : Détoxification (Shodhana) – 2 semaines</CardTitle>
                      <p className="text-sm text-muted-foreground">Éliminer les toxines (Ama) qui bloquent l'absorption du calcium</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">🌿 Actions quotidiennes :</h4>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li><strong>Matin à jeun :</strong> Eau chaude citronnée + 1/2 c.à.c curcuma</li>
                    <li><strong>Tisane détox :</strong> Gingembre, cumin, coriandre, fenouil (3 tasses/jour)</li>
                    <li><strong>Alimentation :</strong> Légère, chaude, digeste (kitchari, soupes de légumes)</li>
                    <li><strong>Éviter :</strong> Produits laitiers industriels, sucre raffiné, aliments froids</li>
                    <li><strong>Triphala :</strong> 1 c.à.c avant coucher dans eau tiède</li>
                    <li><strong>Massage Abhyanga :</strong> Huile de sésame chaude 15 min avant douche chaude</li>
                  </ul>
                  <p className="text-sm bg-green-500/10 p-3 rounded-lg text-foreground">
                    <strong>💡 Résultats attendus :</strong> Amélioration digestion, diminution ballonnements, langue plus claire, énergie accrue, meilleure absorption des nutriments.
                  </p>
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">2</span>
                    <div>
                      <CardTitle>Phase 2 : Renforcement d'Agni (Feu Digestif) – 4 semaines</CardTitle>
                      <p className="text-sm text-muted-foreground">Maximiser l'absorption du calcium et nutriments osseux</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">🔥 Stratégies Agni :</h4>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li><strong>Trikatu Churna :</strong> 1/4 c.à.c avec miel 15 min avant repas principaux</li>
                    <li><strong>Gingembre mariné :</strong> 3 tranches fines + citron + sel avant chaque repas</li>
                    <li><strong>Repas réguliers :</strong> Petit-déjeuner 8h, déjeuner 12h (repas principal), dîner léger 18h</li>
                    <li><strong>Mastiquer lentement :</strong> Minimum 30 fois par bouchée</li>
                    <li><strong>Épices digestives :</strong> Cumin, coriandre, fenouil, cardamome à chaque plat</li>
                  </ul>
                  <h4 className="font-semibold text-foreground mb-3">🥘 Aliments clés pour les os :</h4>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li><strong>Calcium bio-assimilable :</strong> Sésame, amandes trempées, légumes verts feuillus</li>
                    <li><strong>Ghee :</strong> 2 c.à.c/jour (transporte nutriments vers os)</li>
                    <li><strong>Bouillon d'os :</strong> 1 tasse/jour (collagène naturel)</li>
                    <li><strong>Dattes Medjool :</strong> 3/jour (bore pour densité osseuse)</li>
                  </ul>
                  <p className="text-sm bg-green-500/10 p-3 rounded-lg text-foreground">
                    <strong>💡 Résultats attendus :</strong> Digestion fluide, disparition ballonnements, appétit régulier, langue rose, selles formées 1-2x/jour, énergie stable.
                  </p>
                </CardContent>
              </Card>

              {/* Phase 3 */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">3</span>
                    <div>
                      <CardTitle>Phase 3 : Régénération Osseuse Active (Rasayana) – 3-6 mois</CardTitle>
                      <p className="text-sm text-muted-foreground">Reconstruction profonde d'Asthi Dhatu</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">🌿 Arsenal Ayurvédique Osseux :</h4>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li><strong>Ashwagandha :</strong> 500mg 2x/jour (régénération osseuse, réduit cortisol)</li>
                    <li><strong>Shatavari :</strong> 500mg 2x/jour (équilibre hormonal femmes, nourrit Asthi)</li>
                    <li><strong>Guggulu :</strong> 300mg 2x/jour (anti-inflammatoire puissant, circulation)</li>
                    <li><strong>Arjuna :</strong> 500mg 1x/jour (calcium cardiotonique)</li>
                    <li><strong>Laksha (résine Lac) :</strong> Spécifique fractures et régénération osseuse</li>
                    <li><strong>Hadjod (Cissus) :</strong> Favorise consolidation osseuse rapide</li>
                  </ul>
                  <h4 className="font-semibold text-foreground mb-3">💊 Compléments Modernes Synergiques :</h4>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li><strong>Calcium citrate :</strong> 1000mg/jour (meilleure absorption)</li>
                    <li><strong>Vitamine D3 :</strong> 4000 UI/jour (ou selon dosage sanguin)</li>
                    <li><strong>Vitamine K2 (MK-7) :</strong> 200mcg/jour (dirige calcium vers os, pas artères)</li>
                    <li><strong>Magnésium citrate :</strong> 400mg/jour (active vitamine D)</li>
                    <li><strong>Bore :</strong> 3mg/jour (augmente absorption calcium 40%)</li>
                    <li><strong>Silice :</strong> Bambou ou prêle (matrice osseuse)</li>
                  </ul>
                  <h4 className="font-semibold text-foreground mb-3">🧘‍♀️ Yoga pour les Os (30 min/jour) :</h4>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li><strong>Vrikshasana (Arbre) :</strong> Équilibre sur une jambe, renforce hanches/chevilles</li>
                    <li><strong>Tadasana (Montagne) :</strong> Alignement vertébral, compression osseuse saine</li>
                    <li><strong>Virabhadrasana II (Guerrier 2) :</strong> Renforcement fémurs et colonne</li>
                    <li><strong>Setu Bandhasana (Pont) :</strong> Stimulation lombaires et bassin</li>
                    <li><strong>Marche :</strong> 30-60 min/jour (impact doux = stimulation ostéoblastes)</li>
                  </ul>
                  <p className="text-sm bg-green-500/10 p-3 rounded-lg text-foreground">
                    <strong>💡 Résultats attendus :</strong> Diminution douleurs osseuses (6-8 semaines), amélioration densité osseuse mesurable (4-6 mois), réduction risque fracture, vitalité accrue.
                  </p>
                </CardContent>
              </Card>

              {/* Phase 4 */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">4</span>
                    <div>
                      <CardTitle>Phase 4 : Maintenance & Prévention (À vie)</CardTitle>
                      <p className="text-sm text-muted-foreground">Maintenir la santé osseuse optimale</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">🔄 Routine Quotidienne Longévité :</h4>
                  <ul className="text-muted-foreground space-y-2 mb-4">
                    <li><strong>Ashwagandha :</strong> 500mg/jour (entretien)</li>
                    <li><strong>Chyawanprash :</strong> 1 c.à.s le matin (régénération cellulaire globale)</li>
                    <li><strong>Ghee :</strong> 1 c.à.c/jour minimum</li>
                    <li><strong>Marche :</strong> 45 min quotidienne non-négociable</li>
                    <li><strong>Soleil :</strong> 20 min/jour peau nue (bras, jambes)</li>
                    <li><strong>Contrôles :</strong> Densitométrie annuelle, dosages sanguins 2x/an</li>
                  </ul>
                  <h4 className="font-semibold text-foreground mb-3">🧘‍♀️ Cures Saisonnières :</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li><strong>Printemps & Automne :</strong> Panchakarma léger (3-7 jours)</li>
                    <li><strong>Hiver :</strong> Renforcement Vata (massages, chaleur, routine stable)</li>
                    <li><strong>Été :</strong> Rafraîchissement Pitta (coco, hydratation, fraîcheur)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recettes */}
          <section id="recettes" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🍲 Recettes Ayurvédiques Spécial Os Solides
            </h2>
            <p className="text-muted-foreground mb-8">
              3 plats ultra-nutritifs adaptés à chaque profil doshique
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="vata" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  💨 Kheer aux Amandes (Vata) – Dessert Régénérateur
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p className="text-muted-foreground">
                    Pudding crémeux ultra-nourrissant pour os fragiles et secs. Calme Vata, apporte calcium et graisses saines.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">📝 Ingrédients (2 pers) :</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• 500ml lait d'amande maison (ou lait entier bio)</li>
                      <li>• 50g amandes trempées 8h puis pelées</li>
                      <li>• 2 c.à.s ghee</li>
                      <li>• 3 c.à.s sucre de canne complet (jaggery)</li>
                      <li>• 4 dattes Medjool dénoyautées</li>
                      <li>• 1/2 c.à.c cardamome moulue</li>
                      <li>• Quelques pistils de safran</li>
                      <li>• Pincée de noix muscade</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">👩‍🍳 Préparation :</h4>
                    <ol className="text-muted-foreground text-sm space-y-1 list-decimal list-inside">
                      <li>Mixer amandes + dattes + 100ml lait jusqu'à pâte lisse</li>
                      <li>Faire chauffer ghee dans casserole épaisse</li>
                      <li>Ajouter pâte amandes-dattes, faire revenir 2 min</li>
                      <li>Verser reste du lait, porter à ébullition douce</li>
                      <li>Ajouter sucre, cardamome, safran</li>
                      <li>Cuire 20 min feu doux en remuant régulièrement</li>
                      <li>Servir chaud ou tiède avec noix muscade râpée</li>
                    </ol>
                  </div>
                  <p className="text-sm bg-primary/10 p-3 rounded-lg">
                    <strong>🧬 Bienfaits osseux :</strong> Calcium des amandes + magnésium des dattes + ghee (absorption vitamine D) + safran (anti-inflammatoire). Réconforte Vata profondément.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pitta" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  🔥 Salade Rafraîchissante Concombre-Menthe (Pitta)
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p className="text-muted-foreground">
                    Salade alcalinisante qui combat l'inflammation osseuse. Rafraîchit Pitta et apporte minéraux essentiels.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">📝 Ingrédients (2 pers) :</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• 2 concombres moyens épluchés et coupés dés</li>
                      <li>• 200g épinards frais</li>
                      <li>• 1 avocat mûr en dés</li>
                      <li>• 50g graines de sésame légèrement grillées</li>
                      <li>• Jus de 1 citron vert</li>
                      <li>• 2 c.à.s huile de coco vierge</li>
                      <li>• 1 botte menthe fraîche hachée</li>
                      <li>• 1/2 c.à.c cumin moulu</li>
                      <li>• Sel rose de l'Himalaya</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">👩‍🍳 Préparation :</h4>
                    <ol className="text-muted-foreground text-sm space-y-1 list-decimal list-inside">
                      <li>Mélanger concombre, épinards, avocat dans saladier</li>
                      <li>Préparer vinaigrette : jus citron + huile coco + cumin + sel</li>
                      <li>Verser vinaigrette sur salade, mélanger délicatement</li>
                      <li>Parsemer graines de sésame et menthe fraîche</li>
                      <li>Laisser reposer 10 min au frais avant de servir</li>
                    </ol>
                  </div>
                  <p className="text-sm bg-primary/10 p-3 rounded-lg">
                    <strong>🧬 Bienfaits osseux :</strong> Calcium végétal (sésame, épinards) + Vitamine K (épinards) + anti-inflammatoires (concombre, menthe). Alcalinise et rafraîchit Pitta en profondeur.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kapha" className="border rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold">
                  🌊 Soupe Épicée Lentilles-Gingembre (Kapha)
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p className="text-muted-foreground">
                    Soupe stimulante qui active le métabolisme et décongeste Kapha. Riche en protéines végétales et minéraux osseux.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">📝 Ingrédients (4 pers) :</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• 200g lentilles corail rincées</li>
                      <li>• 1 gros oignon haché</li>
                      <li>• 3 gousses ail écrasées</li>
                      <li>• 50g gingembre frais râpé</li>
                      <li>• 2 tomates coupées en dés</li>
                      <li>• 1 c.à.s curcuma poudre</li>
                      <li>• 1 c.à.s cumin graines</li>
                      <li>• 1 c.à.c poivre noir moulu</li>
                      <li>• 2 piments verts émincés (facultatif)</li>
                      <li>• 2 c.à.s huile de moutarde</li>
                      <li>• 1L bouillon de légumes</li>
                      <li>• Jus de 1 citron</li>
                      <li>• Coriandre fraîche hachée</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">👩‍🍳 Préparation :</h4>
                    <ol className="text-muted-foreground text-sm space-y-1 list-decimal list-inside">
                      <li>Faire chauffer huile de moutarde, ajouter cumin (jusqu'à crépitement)</li>
                      <li>Ajouter oignon, ail, gingembre → faire revenir 5 min</li>
                      <li>Incorporer curcuma, poivre, piments → 1 min</li>
                      <li>Ajouter tomates, cuire jusqu'à compote (8 min)</li>
                      <li>Verser lentilles + bouillon, porter à ébullition</li>
                      <li>Réduire feu, couvrir, cuire 25-30 min (lentilles fondantes)</li>
                      <li>Mixer la moitié de la soupe (texture veloutée)</li>
                      <li>Ajouter jus de citron, rectifier assaisonnement</li>
                      <li>Servir très chaud, parsemé de coriandre fraîche</li>
                    </ol>
                  </div>
                  <p className="text-sm bg-primary/10 p-3 rounded-lg">
                    <strong>🧬 Bienfaits osseux :</strong> Protéines végétales (lentilles) + fer + curcuma anti-inflammatoire + gingembre (circulation) + poivre noir (absorption curcuma). Stimule Agni et décongestionne Kapha stagnant.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Principes alimentaires universels */}
            <Card className="mt-8 bg-secondary/50">
              <CardHeader>
                <CardTitle>🍽️ Principes Alimentaires Universels pour Tous les Profils</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Sources calcium bio-assimilable :</strong> Sésame (1400mg/100g), amandes trempées, légumes verts feuillus, sardines en conserve avec arêtes</li>
                  <li><strong>Cofacteurs essentiels :</strong> Vitamine K2 (natto, fromages fermentés), Magnésium (graines), Vitamine D (soleil + champignons)</li>
                  <li><strong>Éviter absolument :</strong> Sodas (acide phosphorique vole calcium), excès de sel, café &gt;3 tasses/jour, sucres raffinés</li>
                  <li><strong>Épices alliées :</strong> Curcuma + poivre noir, gingembre frais, cannelle (régulation glycémie)</li>
                  <li><strong>Timing optimal :</strong> Calcium le soir 1h avant coucher (absorption maximale pendant sommeil)</li>
                  <li><strong>Hydratation :</strong> 1.5-2L eau filtrée/jour (transport minéraux)</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Protocole d'Urgence */}
          <section id="urgence" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🆘 Protocole d'Urgence : Prévention Chutes & Fractures
            </h2>
            <p className="text-muted-foreground mb-8">
              Quand chaque geste compte : sécurité immédiate et gestion post-fracture
            </p>

            <Card className="border-yellow-500/30 bg-yellow-500/5 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-500">
                  <AlertTriangle />
                  Prévention Immédiate des Chutes
                </CardTitle>
                <p className="text-muted-foreground">
                  80% des fractures ostéoporotiques surviennent suite à une chute. Voici le protocole de sécurisation prioritaire.
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">🏠 Sécurisation Domicile (À faire AUJOURD'HUI) :</h4>
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  {[
                    'Retirer TOUS les tapis glissants',
                    'Installer barres d\'appui (douche, WC, couloirs)',
                    'Veilleuses nocturnes automatiques partout',
                    'Chaussures antidérapantes exclusivement',
                    'Ranger fils électriques (ruban adhésif)',
                    'Rehausser toilettes si besoin',
                    'Tapis antidérapant dans baignoire/douche',
                    'Dégager passages (mobilier, objets)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-foreground mb-3">💊 Kit d'Urgence Ayurvédique :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Arnica Montana 9CH :</strong> 5 granules immédiatement après tout choc</li>
                  <li><strong>Lakshadi Guggul :</strong> Accélère consolidation osseuse (3 comp. 3x/jour si fracture)</li>
                  <li><strong>Huile Mahanarayan :</strong> Massage douleurs osseuses/articulaires</li>
                  <li><strong>Ashwagandha :</strong> Gestion stress post-fracture (500mg 3x/jour)</li>
                  <li><strong>Triphala :</strong> Détox et cicatrisation (1 c.à.c/jour)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>🧘‍♀️ Programme Équilibre & Force Musculaire</CardTitle>
                <p className="text-muted-foreground">
                  Les muscles sont vos « protecteurs osseux ». Un bon équilibre réduit les chutes de 45%.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">🌅 Matin (Réveil musculaire)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Tadasana (Montagne) : 2 min pieds ancrés</li>
                      <li>• Marche sur place : 3 min genoux hauts</li>
                      <li>• Vrikshasana (Arbre) : 1 min chaque jambe</li>
                      <li>• Levées talons : 3×20 répétitions</li>
                      <li>• Squats assistés : 3×10 (avec chaise)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">🌙 Soir (Équilibre proprioception)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Marche talon-pointe : 5 min en ligne droite</li>
                      <li>• Équilibre yeux fermés : 30 sec chaque pied</li>
                      <li>• Balancement latéral : Transfert de poids 2 min</li>
                      <li>• Assis-debout : 3×10 sans les mains</li>
                      <li>• Étirements doux : Hanches, chevilles, dos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post-Fracture */}
            <Card className="border-red-500/30">
              <CardHeader>
                <CardTitle>🩹 Protocole Post-Fracture Ayurvédique</CardTitle>
                <p className="text-sm text-muted-foreground">
                  ⚠️ IMPORTANT : Ce protocole COMPLÈTE (ne remplace pas) le suivi médical conventionnel.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">🔴 Semaines 1-2 (Phase Aiguë)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Arnica 9CH : 5 granules 6x/jour</li>
                      <li>• Lakshadi Guggul : 2 comp. 3x/jour</li>
                      <li>• Repos strict (immobilisation médicale)</li>
                      <li>• Alimentation liquide/semi-liquide riche protéines</li>
                      <li>• Visualisation positive 15 min/jour</li>
                    </ul>
                  </div>
                  <div className="bg-orange-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-400 mb-2">🟠 Semaines 3-8 (Consolidation)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Hadjod (Cissus) : 500mg 3x/jour</li>
                      <li>• Ashwagandha : 500mg 2x/jour</li>
                      <li>• Calcium + D3 + K2 doses maximales</li>
                      <li>• Bouillon d'os 2 tasses/jour</li>
                      <li>• Kiné douce selon prescription</li>
                      <li>• Massage Abhyanga zones adjacentes</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">🟢 Mois 3-6 (Rééducation)</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Reprendre protocole Phase 3 complet</li>
                      <li>• Yoga adapté progressif</li>
                      <li>• Marche quotidienne croissante</li>
                      <li>• Renforcement musculaire ciblé</li>
                      <li>• Radio/densitométrie contrôle</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold text-red-400 flex items-center gap-2 mb-2">
                    <Phone size={18} />
                    📞 Quand consulter EN URGENCE :
                  </h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Douleur osseuse intense et soudaine</li>
                    <li>• Déformation visible d'un membre</li>
                    <li>• Impossibilité de se lever après chute</li>
                    <li>• Gonflement important ou ecchymose étendue</li>
                    <li>• Fracture vertébrale suspectée (douleur dos intense)</li>
                  </ul>
                  <p className="text-red-400 font-semibold mt-3">
                    ☎️ Appeler le 15 (SAMU) sans attendre.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Témoignages */}
          <section id="temoignages" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              💬 Témoignages Inspirants : Ils Ont Régénéré Leurs Os
            </h2>
            <p className="text-muted-foreground mb-8">
              Des histoires vraies de régénération osseuse par l'Ayurvéda
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  text: "À 68 ans, après 18 mois de protocole ayurvédique complet, ma densité osseuse a augmenté de +14% (T-score passé de -2.8 à -2.1). Mon rhumatologue était stupéfait. Plus aucune fracture, je me sens plus forte que jamais. Les douleurs lombaires chroniques ont disparu.",
                  author: "Marie-Claude, 68 ans, Lyon",
                  profile: "💨 Profil Vata"
                },
                {
                  text: "Diagnostic ostéoporose sévère à 64 ans avec 2 fractures vertébrales. Les bisphosphonates me rendaient malade. En combinant protocole ayurvédique + calcium naturel + yoga, les douleurs ont disparu en 4 mois. Dernière densitométrie : amélioration visible. Je revis !",
                  author: "Isabelle, 64 ans, Marseille",
                  profile: "🔥 Profil Pitta"
                },
                {
                  text: "Plus une seule fracture depuis 4 ans. Mon médecin a cessé de parler d'« âge inévitable ». L'Ayurvéda m'a redonné confiance en mon corps. À 72 ans, je fais de la randonnée et jardine sans peur. Le protocole détox + Ashwagandha a tout changé.",
                  author: "Jean-Pierre, 72 ans, Bordeaux",
                  profile: "🌊 Profil Kapha"
                },
                {
                  text: "Mon praticien ayurvédique a identifié un profil mixte Vata-Pitta. Le protocole personnalisé (Phase 3 avec adaptations) a donné des résultats en 5 mois. T-score +9%, énergie décuplée, qualité de vie transformée. L'approche holistique fait toute la différence.",
                  author: "Sophie, 59 ans, Toulouse",
                  profile: "🌀 Profil Mixte"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-secondary/30">
                  <CardContent className="p-6">
                    <p className="text-foreground italic mb-4">« {testimonial.text} »</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">— {testimonial.author}</span>
                      <span className="text-sm font-medium text-primary">{testimonial.profile}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  🌟 Votre Ostéoporose Peut Devenir un Nouveau Départ
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  L'Ayurvéda ne voit pas l'ostéoporose comme une fatalité, mais comme un <strong>message de votre corps</strong> vous invitant à rééquilibrer votre vie entière. Des milliers de personnes ont régénéré leurs os grâce à cette sagesse millénaire.
                </p>

                <div className="grid md:grid-cols-5 gap-4 mb-8 text-left max-w-3xl mx-auto">
                  {[
                    { title: 'Agni', desc: 'Restaurer le feu digestif' },
                    { title: 'Ojas', desc: 'Renforcer l\'immunité' },
                    { title: 'Prana', desc: 'Optimiser la circulation' },
                    { title: 'Tejas', desc: 'Activer la régénération' },
                    { title: 'Sattva', desc: 'Cultiver la paix mentale' },
                  ].map((pillar, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-primary">{i + 1}</div>
                      <div className="font-semibold text-foreground">{pillar.title}</div>
                      <div className="text-xs text-muted-foreground">{pillar.desc}</div>
                    </div>
                  ))}
                </div>

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
            <h3 className="text-2xl font-bold text-foreground mb-6">Articles connexes</h3>
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
              <Link to="/blog/ayurveda-sante-mentale" className="group">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <span className="text-sm text-primary">Santé Mentale</span>
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mt-2">
                      L'Ayurvéda pour une Meilleure Santé Mentale
                    </h4>
                    <p className="text-muted-foreground text-sm mt-2">
                      Approches naturelles pour l'équilibre émotionnel
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>

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

export default Osteoporose;
