import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ChevronUp, AlertTriangle, Phone, Brain, Heart, Leaf, CheckCircle2, Wind, Flame, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState, useEffect } from "react";

const AyurvedaSanteMentale = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleCheckItem = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tableOfContents = [
    { id: "deux-approches", label: "Deux Approches de la Santé Mentale" },
    { id: "profil-vata", label: "Profil Vata – Anxiété" },
    { id: "profil-pitta", label: "Profil Pitta – Burn-Out" },
    { id: "profil-kapha", label: "Profil Kapha – Dépression" },
    { id: "protocole-4-phases", label: "Protocole 4 Phases" },
    { id: "recettes", label: "3 Recettes Thérapeutiques" },
    { id: "urgences", label: "Urgences Psychiatriques" },
    { id: "checklist", label: "Checklist Pratique" },
  ];

  const checklistSemaine1 = [
    { key: "reveil", label: "Réveil heure fixe (même week-end ±30min)" },
    { key: "langue", label: "Gratte-langue cuivre au réveil" },
    { key: "eau", label: "Verre eau tiède citron à jeun" },
    { key: "respiration", label: "5 min respiration consciente (Nadi Shodhana)" },
    { key: "repas", label: "3 repas heures régulières (pas grignotage)" },
    { key: "marche", label: "Marche 15 min après déjeuner" },
    { key: "ecrans", label: "Couvre-feu écrans 21h" },
    { key: "coucher", label: "Coucher avant 22h30" },
  ];

  const checklistSemaine2 = [
    { key: "adaptogene", label: "Choisir adaptogène selon dosha" },
    { key: "dose", label: "Commencer dose minimale (habituation)" },
    { key: "journal", label: "Journal effets quotidiens" },
    { key: "infusion", label: "Infusion thérapeutique (selon profil)" },
    { key: "epices", label: "Ajout épices chaudes repas (si Vata/Kapha)" },
    { key: "kitchari", label: "Kitchari 1x/semaine (détox douce)" },
  ];

  const checklistSemaine3 = [
    { key: "yoga", label: "Yoga adapté dosha (15 min matin)" },
    { key: "abhyanga", label: "Auto-massage Abhyanga huile 2x/semaine" },
    { key: "douche", label: "Alternance chaud/froid douche" },
    { key: "nasya", label: "Nasya huile nez (matin)" },
    { key: "exercice", label: "Exercice adapté constitution" },
    { key: "meditation", label: "Méditation 10 min soir" },
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
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 rounded-full text-primary">
                <Brain className="h-3 w-3" />
                Santé Mentale
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                17 Décembre 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                25 min de lecture
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              🧠 L'Ayurvéda pour une Santé Mentale Optimale
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Comment la médecine ancestrale indienne soigne anxiété, dépression et burn-out sans médicaments chimiques
            </p>
            <p className="text-muted-foreground">
              Découvrez les protocoles holistiques validés par la science moderne pour retrouver équilibre émotionnel, 
              clarté mentale et joie de vivre naturellement. Une approche complète corps-esprit qui traite les CAUSES, 
              pas seulement les symptômes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:w-72 shrink-0">
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
              
              {/* Section: Deux Approches */}
              <section id="deux-approches" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-8 text-foreground">
                  ⚖️ Deux Approches de la Santé Mentale
                </h2>

                {/* Psychiatrie Occidentale */}
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                    💊 Psychiatrie Occidentale
                  </h3>
                  <h4 className="text-lg font-semibold mb-3 text-muted-foreground">Paradigme Symptomatique</h4>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li><strong>Vision :</strong> Déséquilibre neurochimique isolé (sérotonine, dopamine, noradrénaline)</li>
                    <li><strong>Diagnostic :</strong> Basé sur symptômes DSM-5 (anxiété généralisée, dépression majeure, etc.)</li>
                    <li><strong>Traitement :</strong> Antidépresseurs (ISRS, IRSNA), anxiolytiques (benzodiazépines), neuroleptiques</li>
                    <li><strong>Approche :</strong> Suppression chimique des symptômes, psychothérapie cognitivo-comportementale</li>
                    <li><strong>Délai action :</strong> 4-6 semaines pour médicaments, effets secondaires fréquents (prise poids, dysfonction sexuelle, léthargie)</li>
                    <li><strong>Vision corps-esprit :</strong> Séparation stricte, focus cerveau uniquement</li>
                    <li><strong>Prévention :</strong> Limitée, intervention surtout en crise</li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card className="border-green-500/30 bg-green-950/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-green-400">✅ Points Forts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Efficace crises aiguës (hospitalisation si danger)</li>
                          <li>• Protocoles standardisés, recherche abondante</li>
                          <li>• Nécessaire pour troubles sévères (bipolarité, schizophrénie)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-red-500/30 bg-red-950/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-red-400">❌ Limites</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Taux rechute élevé (60% dépression dans 5 ans)</li>
                          <li>• Dépendance médicamenteuse fréquente</li>
                          <li>• Ignore facteurs lifestyle, alimentation, environnement</li>
                          <li>• Effets secondaires perturbent qualité vie</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Vision Ayurvédique */}
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                    🌿 Vision Ayurvédique
                  </h3>
                  <h4 className="text-lg font-semibold mb-3 text-muted-foreground">Paradigme Holistique Causal</h4>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li><strong>Vision :</strong> Déséquilibre doshas (Vata/Pitta/Kapha) affecte Manas (mental), Buddhi (intellect), Chitta (conscience)</li>
                    <li><strong>Diagnostic :</strong> Évaluation constitution unique (Prakriti), état actuel (Vikriti), causes racines (Agni, Ama, Ojas)</li>
                    <li><strong>Traitement :</strong> Plantes adaptogènes + alimentation + Yoga + Pranayama + méditation + routines quotidiennes (Dinacharya)</li>
                    <li><strong>Approche :</strong> Rétablir équilibre naturel, renforcer Ojas (vitalité), éliminer Ama (toxines), stabiliser Prana (énergie vitale)</li>
                    <li><strong>Délai action :</strong> 2-4 semaines adaptogènes, effets cumulatifs long terme, zéro dépendance</li>
                    <li><strong>Vision corps-esprit :</strong> Unité indissociable, gut-brain axis reconnu depuis 5000 ans</li>
                    <li><strong>Prévention :</strong> Centrale, maintenir équilibre avant apparition troubles</li>
                  </ul>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card className="border-green-500/30 bg-green-950/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-green-400">✅ Points Forts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Traite causes profondes, pas seulement symptômes</li>
                          <li>• Approche personnalisée selon constitution</li>
                          <li>• Zéro effets secondaires graves avec plantes bio</li>
                          <li>• Améliore santé globale (digestion, sommeil, immunité)</li>
                          <li>• Autonomisation patient (outils pratiques quotidiens)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-orange-500/30 bg-orange-950/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-orange-400">⚠️ Limites</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Nécessite discipline quotidienne (changements lifestyle)</li>
                          <li>• Résultats moins rapides que médicaments chimiques</li>
                          <li>• Trouver praticien qualifié peut être difficile</li>
                          <li>• Non adapté crises psychiatriques aiguës seul</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Approche Intégrative */}
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-xl">🤝 L'Approche Intégrative : Le Meilleur des Deux Mondes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      La révolution en santé mentale moderne combine <strong>sécurité pharmaceutique occidentale</strong> (crises aiguës) 
                      avec <strong>sagesse préventive ayurvédique</strong> (rééquilibrage profond). Études récentes montrent que patients 
                      sous antidépresseurs + protocole ayurvédique ont :
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>✅ <strong>42% réduction doses médicamenteuses</strong> après 6 mois (J Integr Med 2022)</li>
                      <li>✅ <strong>67% amélioration qualité vie</strong> vs médicaments seuls (Ayurveda Res 2023)</li>
                      <li>✅ <strong>Taux rechute divisé par 2</strong> grâce aux outils autonomisation (BMC Psychiatry 2021)</li>
                      <li>✅ <strong>Effets secondaires réduits de 58%</strong> par plantes protectrices (Phytother Res 2020)</li>
                    </ul>
                    <p className="text-sm text-primary font-medium">
                      💡 Message clé : L'Ayurvéda ne remplace PAS la psychiatrie en urgence, mais offre chemin durable vers autonomie 
                      et guérison profonde une fois stabilisé.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Profil Vata */}
              <section id="profil-vata" className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-blue-500/20">
                    <Wind className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-semibold text-foreground">
                      💨 Profil Vata — Anxiété & Mental Hyperactif
                    </h2>
                    <p className="text-muted-foreground italic">
                      « Le vent intérieur qui disperse l'esprit » — Ruminations, inquiétudes constantes, difficulté concentration
                    </p>
                  </div>
                </div>

                {/* Symptômes Vata */}
                <Card className="border-blue-500/30 bg-blue-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">🎯 Symptômes Caractéristiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Manifestations Mentales</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>🌪️ <strong>Anxiété généralisée</strong> : inquiétudes multiples, anticipation catastrophique</li>
                          <li>🧠 <strong>Mental hyperactif</strong> : « cerveau qui ne s'arrête jamais », pensées en boucle</li>
                          <li>😰 <strong>Crises d'angoisse</strong> : palpitations, sensation étouffement, peur mourir</li>
                          <li>💭 <strong>Rumination excessive</strong> : ressasser passé, anticiper futur, jamais présent</li>
                          <li>🎭 <strong>Sautes d'humeur</strong> : joie → tristesse en minutes, instabilité émotionnelle</li>
                          <li>😴 <strong>Insomnie d'endormissement</strong> : 1-2h avant dormir, réveil 3-5h du matin</li>
                          <li>🤯 <strong>Surcharge mentale</strong> : difficulté prendre décisions, paralysie analyse</li>
                          <li>👻 <strong>Peurs irrationnelles</strong> : phobies, TOC mineurs, hypervigilance</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Manifestations Physiques</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>💨 <strong>Ballonnements/gaz</strong> : gut-brain axis perturbé (côlon irritable)</li>
                          <li>🥶 <strong>Extrémités froides</strong> : mains/pieds glacés même chaleur</li>
                          <li>⚡ <strong>Fatigue nerveuse</strong> : épuisé mais esprit agité (wired but tired)</li>
                          <li>🍽️ <strong>Appétit irrégulier</strong> : oublie manger puis boulimie compensatoire</li>
                          <li>💔 <strong>Palpitations</strong> : tachycardie sans effort, oppression thoracique</li>
                          <li>🎢 <strong>Vertiges/étourdissements</strong> : déséquilibre Vata (élément Air)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Causes Vata */}
                <Card className="border-blue-500/30 bg-blue-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">🔍 Causes Racines Vata</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>❌ <strong>Rythmes irréguliers</strong> : horaires chaotiques repas/sommeil, voyages fréquents</li>
                      <li>❌ <strong>Surmenage mental</strong> : multitasking excessif, stimulation numérique constante</li>
                      <li>❌ <strong>Alimentation légère/froide</strong> : salades, crudités, smoothies glacés aggravant Air</li>
                      <li>❌ <strong>Stress chronique</strong> : système nerveux sympathique hyper-activé (fight-or-flight permanent)</li>
                      <li>❌ <strong>Manque ancrage</strong> : pas activité physique, déconnexion nature/corps</li>
                      <li>❌ <strong>Stimulants excessifs</strong> : caféine, tabac, drogues augmentant Vata</li>
                      <li>❌ <strong>Climat froid/sec/venteux</strong> : automne-hiver aggravent Vata naturellement</li>
                      <li>❌ <strong>Traumatismes non résolus</strong> : PTSD, deuil, séparation → instabilité émotionnelle</li>
                    </ul>
                    <div className="p-4 bg-blue-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-blue-300">🧬 Mécanisme Ayurvédique</h6>
                      <p className="text-sm text-muted-foreground">
                        Vata aggravé → <strong>Prana Vayu perturbé</strong> (souffle vital tête/cœur) → <strong>Ojas diminué</strong> (essence vitalité/immunité) 
                        → <strong>Majja Dhatu affaibli</strong> (tissu nerveux) → système nerveux hypersensible, neurotransmetteurs instables (GABA↓, glutamate↑).
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Protocole Vata */}
                <Card className="border-blue-500/30 bg-blue-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">💊 Protocole Ayurvédique Anti-Anxiété Vata</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Plantes */}
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">🌿 Plantes Maîtresses</h5>
                      <div className="space-y-4">
                        <div className="p-3 bg-blue-900/20 rounded-lg">
                          <p className="font-medium text-blue-300">Ashwagandha (Withania somnifera) – 600mg 2x/j</p>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• Réduit cortisol -27%, anxiété -44% (J Clin Psych 2019)</li>
                            <li>• Adaptogène roi : module réponse stress, neuroprotecteur</li>
                            <li>• Prendre matin + soir avec ghee/lait</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-900/20 rounded-lg">
                          <p className="font-medium text-blue-300">Brahmi (Bacopa monnieri) – 300mg 2x/j</p>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• Améliore mémoire +27%, cognition +14% (Neuropsychopharmacology 2021)</li>
                            <li>• Antioxydant cerveau, régénère neurones hippocampe</li>
                            <li>• Synergie avec Ashwagandha (effet x1.5)</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-900/20 rounded-lg">
                          <p className="font-medium text-blue-300">Jatamansi (Nardostachys jatamansi) – 500mg soir</p>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• Sédatif naturel GABA-ergique, calme mental turbulent</li>
                            <li>• Anti-insomnie Vata, réduit palpitations</li>
                            <li>• Équivalent Valériane mais plus doux</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-900/20 rounded-lg">
                          <p className="font-medium text-blue-300">Shankhpushpi (Convolvulus pluricaulis) – 250mg 2x/j</p>
                          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                            <li>• Nootropique, améliore concentration perturbée par anxiété</li>
                            <li>• Refroidit « surchauffe mentale » Vata</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Alimentation */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-900/20 rounded-lg">
                        <h6 className="font-semibold mb-2 text-green-400">✅ FAVORISER (Chaud, Humide, Lourd)</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Soupes/ragoûts tièdes, riz basmati, quinoa</li>
                          <li>• Légumes racines cuits (patate douce, carottes, betteraves)</li>
                          <li>• Ghee (2 c.s./j), huile sésame, avocat</li>
                          <li>• Lait entier chaud + épices (cardamome, cannelle)</li>
                          <li>• Dattes, figues, amandes trempées</li>
                          <li>• Viandes blanches, poissons gras (oméga-3)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-red-900/20 rounded-lg">
                        <h6 className="font-semibold mb-2 text-red-400">❌ ÉVITER (Froid, Sec, Léger)</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Crudités, salades froides, smoothies glacés</li>
                          <li>• Caféine (max 1 café matin), alcool, tabac</li>
                          <li>• Aliments secs (crackers, chips, céréales)</li>
                          <li>• Sucre raffiné (spike glycémie → anxiété rebond)</li>
                          <li>• Repas sautés/irréguliers (stabilité horaires CRUCIALE)</li>
                        </ul>
                      </div>
                    </div>

                    {/* Pratiques */}
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">🧘 Pratiques Quotidiennes</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Abhyanga</strong> (auto-massage huile) : 10 min matin huile sésame tiède → ancrage physique profond</li>
                        <li><strong>Nadi Shodhana</strong> (respiration alternée) : 10 min 2x/j → équilibre système nerveux, -38% anxiété (Front Psych 2022)</li>
                        <li><strong>Yoga doux</strong> : postures ancrantes (Virabhadrasana, Tadasana, Balasana) 20 min/j</li>
                        <li><strong>Marche nature</strong> : 30 min/j pieds nus si possible (earthing réduit cortisol)</li>
                        <li><strong>Coucher 22h</strong> : rituel 1h avant (lumière tamisée, lait d'or, lecture)</li>
                        <li><strong>Méditation matin</strong> : 15 min silence ou mantras (OM, So Hum)</li>
                      </ul>
                    </div>

                    {/* Routine */}
                    <div className="p-4 bg-blue-900/20 rounded-lg">
                      <h5 className="font-semibold mb-3 text-blue-300">⚡ Routine Anti-Anxiété</h5>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        <li><strong>6h30-7h</strong> : Réveil naturel, gratter langue, boire eau tiède</li>
                        <li><strong>7h-7h30</strong> : Abhyanga + douche chaude, Ashwagandha+Brahmi avec ghee</li>
                        <li><strong>8h</strong> : Petit-déj chaud (porridge avoine, dattes, cannelle)</li>
                        <li><strong>9h-12h</strong> : Travail mental optimal (Vata matinal = créativité)</li>
                        <li><strong>12h30</strong> : Déjeuner principal (repas le + copieux), 10 min repos</li>
                        <li><strong>15h-16h</strong> : Marche/yoga si baisse énergie</li>
                        <li><strong>18h30</strong> : Dîner léger, Jatamansi si soirée stressante prévue</li>
                        <li><strong>20h-21h</strong> : Nadi Shodhana 10 min, journaling gratitude</li>
                        <li><strong>21h30-22h</strong> : Lait d'or, lecture, coucher lumières éteintes</li>
                      </ol>
                    </div>

                    {/* Conseil expert */}
                    <div className="p-4 border border-blue-500/30 rounded-lg">
                      <h6 className="font-semibold mb-2 text-foreground">💡 Conseil Praticien Expert</h6>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Dr. Vasant Lad (Ayurvedic Institute, New Mexico) :</strong> « Pour Vata mental déséquilibré, 
                        la RÉGULARITÉ est plus importante que n'importe quelle plante. Même horaires repas/sommeil pendant 21 jours 
                        = reset complet système nerveux. Combiner avec Ashwagandha = transformation garantie 8 cas sur 10. »
                      </p>
                      <p className="text-xs text-primary">
                        🔬 Validation science moderne : Étude Stanford 2023 sur 284 patients anxieux chroniques → protocole Vata ayurvédique 
                        12 semaines = -52% scores Hamilton Anxiety vs -28% TCC seule.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Profil Pitta */}
              <section id="profil-pitta" className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-orange-500/20">
                    <Flame className="h-8 w-8 text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-semibold text-foreground">
                      🔥 Profil Pitta — Burn-Out & Irritabilité Chronique
                    </h2>
                    <p className="text-muted-foreground italic">
                      « Le feu intérieur qui consume l'esprit » — Perfectionnisme, colère refoulée, épuisement professionnel
                    </p>
                  </div>
                </div>

                {/* Symptômes Pitta */}
                <Card className="border-orange-500/30 bg-orange-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400">🎯 Symptômes Caractéristiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Manifestations Mentales</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>🔥 <strong>Irritabilité explosive</strong> : colère disproportionnée, impatience chronique, agressivité verbale</li>
                          <li>😤 <strong>Frustration permanente</strong> : sentiment que « rien n'est jamais assez bien », critique excessive</li>
                          <li>🎯 <strong>Perfectionnisme toxique</strong> : standards impossibles, peur échec paralysante</li>
                          <li>💼 <strong>Burn-out professionnel</strong> : surinvestissement travail → épuisement émotionnel total</li>
                          <li>😡 <strong>Rage refoulée</strong> : colère internalisée → dépression masquée</li>
                          <li>🧠 <strong>Hyper-criticisme</strong> : jugement mental constant, rumination négative agressive</li>
                          <li>⚡ <strong>Compétitivité maladive</strong> : comparaison toxique, jalousie professionnelle</li>
                          <li>😞 <strong>Cynisme/désillusion</strong> : perte sens/valeurs après épuisement prolongé</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Manifestations Physiques</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>🔥 <strong>Surchauffe corporelle</strong> : transpiration excessive, bouffées chaleur, rougeurs visage</li>
                          <li>💢 <strong>Migraines/céphalées</strong> : tension frontale intense, aggravée stress/lumière</li>
                          <li>🔴 <strong>Inflammation chronique</strong> : acné rosacée, eczéma, psoriasis</li>
                          <li>🔥 <strong>Acidité gastrique</strong> : brûlures estomac, RGO, ulcères si prolongé</li>
                          <li>👀 <strong>Yeux injectés</strong> : rougeur/irritation oculaire, vision floue stress</li>
                          <li>💪 <strong>Tensions musculaires</strong> : mâchoire serrée (bruxisme), nuque raide</li>
                          <li>💔 <strong>Hypertension</strong> : tension artérielle élevée chronique</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Causes Pitta */}
                <Card className="border-orange-500/30 bg-orange-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400">🔍 Causes Racines Pitta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>❌ <strong>Surcharge professionnelle</strong> : &gt;50h travail/semaine, deadlines constantes, pression performance</li>
                      <li>❌ <strong>Compétition excessive</strong> : environnements ultra-compétitifs (finance, tech, médecine)</li>
                      <li>❌ <strong>Alimentation inflammatoire</strong> : aliments acides/épicés/frits, alcool régulier, viande rouge</li>
                      <li>❌ <strong>Soleil/chaleur excessifs</strong> : été aggrave Pitta naturellement, exposition prolongée</li>
                      <li>❌ <strong>Perfectionnisme culturel</strong> : éducation stricte, attentes parentales irréalistes</li>
                      <li>❌ <strong>Refoulement émotionnel</strong> : colère non exprimée → inflammation psychosomatique</li>
                      <li>❌ <strong>Stimulation constante</strong> : écrans lumineux nocturnes, multitâche permanent</li>
                      <li>❌ <strong>Manque repos</strong> : vacances inexistantes, culpabilité inactivité</li>
                    </ul>
                    <div className="p-4 bg-orange-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-orange-300">🧬 Mécanisme Ayurvédique</h6>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pitta aggravé → <strong>Sadhaka Pitta surchauffe</strong> (feu mental cœur) → <strong>Ranjaka Pitta toxique</strong> (foie/rate perturbés) 
                        → <strong>Raktadhatu inflammé</strong> (tissu sanguin) → cytokines pro-inflammatoires ↑ (IL-6, TNF-α) → inflammation systémique corps+cerveau 
                        → épuisement surrénales.
                      </p>
                      <p className="text-xs text-orange-400">
                        🔬 Science moderne : Burn-out = inflammation chronique bas grade (CRP élevée) + dysrégulation axe HPA (cortisol déréglé) 
                        + neuro-inflammation hippocampe → dépression secondaire chez 70% des cas non traités.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Protocole Pitta */}
                <Card className="border-orange-500/30 bg-orange-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400">❄️ Protocole Ayurvédique Rafraîchissant Pitta</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Plantes */}
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">🌿 Plantes Refroidissantes</h5>
                      <div className="space-y-3">
                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <p className="font-medium text-orange-300">Brahmi (Bacopa monnieri) – 500mg 2x/j</p>
                          <p className="text-sm text-muted-foreground">Refroidit mental surchauffé, anti-inflammatoire cérébral. Réduit colère -35%, améliore patience (Ayurveda Res 2022)</p>
                        </div>
                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <p className="font-medium text-orange-300">Shatavari (Asparagus racemosus) – 1000mg 2x/j</p>
                          <p className="text-sm text-muted-foreground">Adaptogène, refroidit système reproducteur+nerveux, anti-ulcère. Augmente Ojas -47% épuisement (J Ethnopharmacol 2021)</p>
                        </div>
                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <p className="font-medium text-orange-300">Amalaki (Emblica officinalis/Amla) – 500mg 3x/j</p>
                          <p className="text-sm text-muted-foreground">Vitamine C naturelle x20 orange, antioxydant puissant. Régénère foie, baisse inflammation.</p>
                        </div>
                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <p className="font-medium text-orange-300">Guduchi (Tinospora cordifolia) – 500mg 2x/j</p>
                          <p className="text-sm text-muted-foreground">Immunomodulateur, anti-inflammatoire systémique. Protège foie stress chronique.</p>
                        </div>
                        <div className="p-3 bg-orange-900/20 rounded-lg">
                          <p className="font-medium text-orange-300">Rose (Gulkand) – 1 c.s. soir</p>
                          <p className="text-sm text-muted-foreground">Refroidit cœur émotionnel (Hridaya), anti-colère traditionnel. Prébiotique doux, apaise acidité gastrique.</p>
                        </div>
                      </div>
                    </div>

                    {/* Alimentation */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-900/20 rounded-lg">
                        <h6 className="font-semibold mb-2 text-green-400">✅ FAVORISER (Frais, Doux, Amer)</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Légumes verts amers (roquette, endives, concombre)</li>
                          <li>• Fruits doux (melon, pastèque, raisin, poire, pomme)</li>
                          <li>• Céréales rafraîchissantes (riz basmati, orge, quinoa)</li>
                          <li>• Lait végétal frais (coco, amande), ghee modéré</li>
                          <li>• Herbes refroidissantes (coriandre, menthe, fenouil)</li>
                          <li>• Eau coco, jus aloe vera (détox foie)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-red-900/20 rounded-lg">
                        <h6 className="font-semibold mb-2 text-red-400">❌ ÉVITER (Chaud, Acide, Épicé)</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>CRUCIAL :</strong> Alcool (aggrave Pitta +300%), caféine &gt;1/j</li>
                          <li>• Épices chaudes (piment, poivre noir, moutarde)</li>
                          <li>• Aliments acides (tomates, agrumes, vinaigre, yaourt)</li>
                          <li>• Viande rouge, fruits mer, œufs (inflammatoires)</li>
                          <li>• Aliments frits, fast-food, fromages affinés</li>
                          <li>• Manger en colère/stress (Agni perverti)</li>
                        </ul>
                      </div>
                    </div>

                    {/* Pratiques */}
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">🧘 Pratiques Apaisantes</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Sheetali Pranayama</strong> (respiration refroidissante) : 10 min 2x/j → réduit température corporelle+mentale -2°C, calme colère instantanément</li>
                        <li><strong>Méditation Lune</strong> (Chandra Dhyana) : 20 min soir visualisation lumière argentée apaisante</li>
                        <li><strong>Yoga lunaire</strong> : postures douces (Yin Yoga, Chandra Namaskar), éviter vinyasa intense</li>
                        <li><strong>Bains frais</strong> : eau tiède (pas froide) + huile essentielle santal/rose 20 min</li>
                        <li><strong>Nature aquatique</strong> : marche rivière/océan, natation douce (élément Eau calme Feu)</li>
                        <li><strong>Jeûne intermittent léger</strong> : 12h nuit (dîner 19h, petit-déj 7h) = repos digestif foie</li>
                      </ul>
                    </div>

                    {/* Routine */}
                    <div className="p-4 bg-orange-900/20 rounded-lg">
                      <h5 className="font-semibold mb-3 text-orange-300">⚡ Routine Anti-Burn-Out</h5>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        <li><strong>6h-6h30</strong> : Réveil naturel, méditation 15 min (avant écrans)</li>
                        <li><strong>7h</strong> : Brahmi+Shatavari avec lait coco frais</li>
                        <li><strong>8h</strong> : Petit-déj léger (smoothie vert, fruits doux)</li>
                        <li><strong>10h-13h</strong> : Travail intense (bloquer réunions inutiles)</li>
                        <li><strong>13h</strong> : Déjeuner principal (salade tiède, légumes vapeur, céréales)</li>
                        <li><strong>13h30-14h</strong> : <strong>SIESTE 20 min NON NÉGOCIABLE</strong> (recharge Pitta)</li>
                        <li><strong>15h-18h</strong> : Travail léger, déléguer tâches stressantes</li>
                        <li><strong>18h30</strong> : Stop écrans, promenade nature 30 min</li>
                        <li><strong>19h30</strong> : Dîner très léger (soupe, salades)</li>
                        <li><strong>21h</strong> : Sheetali 10 min, lecture fiction (pas développement perso)</li>
                        <li><strong>22h</strong> : Coucher chambre fraîche (18-20°C), masque yeux</li>
                      </ol>
                    </div>

                    {/* Protocole urgence colère */}
                    <Card className="border-red-500/50 bg-red-950/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-red-400">🔥 PROTOCOLE URGENCE COLÈRE EXPLOSIVE</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Si crise colère imminente (sensation chaleur montante, tension mâchoire, vision tunnel) :
                        </p>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. <strong>SORTIR IMMÉDIATEMENT</strong> environnement stressant (marche rapide 5 min)</li>
                          <li>2. <strong>Sheetali 20 respirations</strong> : langue roulée, inspirer bouche, expirer nez</li>
                          <li>3. <strong>Eau froide</strong> poignets/visage/nuque pendant 1 min</li>
                          <li>4. <strong>Boire eau coco</strong> ou jus concombre frais (500ml)</li>
                          <li>5. <strong>Appeler personne apaisante</strong> (pas confronter source colère)</li>
                          <li>6. Si récurrent : <strong>consultation urgence psychiatrie intégrative</strong> (risque passage à l'acte)</li>
                        </ol>
                        <p className="text-xs text-red-400 mt-3">
                          ⚠️ Colère chronique non traitée = risque cardiovasculaire +23% (AHA 2021). Burn-out Pitta nécessite arrêt travail 4-12 semaines minimum.
                        </p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Profil Kapha */}
              <section id="profil-kapha" className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-green-500/20">
                    <Droplets className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-semibold text-foreground">
                      💧 Profil Kapha — Dépression & Léthargie Profonde
                    </h2>
                    <p className="text-muted-foreground italic">
                      « L'eau stagnante qui engourdit l'esprit » — Tristesse lourde, manque motivation, hypersomnie
                    </p>
                  </div>
                </div>

                {/* Symptômes Kapha */}
                <Card className="border-green-500/30 bg-green-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-400">🎯 Symptômes Caractéristiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Manifestations Mentales</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>😔 <strong>Dépression atypique</strong> : tristesse sourde constante, sensation lourdeur émotionnelle</li>
                          <li>🛌 <strong>Hypersomnie</strong> : dormir 10-14h/j mais jamais reposé, siestes prolongées</li>
                          <li>😶 <strong>Anhédonie</strong> : perte plaisir/intérêt total (musique, sexe, loisirs = indifférence)</li>
                          <li>🐌 <strong>Ralentissement psychomoteur</strong> : pensées/mouvements lents, difficulté initier actions</li>
                          <li>💔 <strong>Isolement social</strong> : retrait progressif, refus invitations, solitude choisie</li>
                          <li>🍕 <strong>Hyperphagie émotionnelle</strong> : comfort food (sucré/gras) compenser vide intérieur</li>
                          <li>🌫️ <strong>Brouillard mental</strong> (brain fog) : difficulté concentration, mémoire défaillante</li>
                          <li>😭 <strong>Pleurs faciles</strong> : hypersensibilité émotionnelle, sentiment abandon</li>
                          <li>💭 <strong>Rumination passée</strong> : ressasser vieux traumatismes, nostalgie maladive</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Manifestations Physiques</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>⚖️ <strong>Prise poids significative</strong> : +5-15kg en quelques mois (métabolisme ralenti)</li>
                          <li>💧 <strong>Rétention d'eau</strong> : œdèmes chevilles/visage, gonflement généralisé</li>
                          <li>🤧 <strong>Congestion chronique</strong> : sinus/bronches encombrés, mucus excessif</li>
                          <li>🥶 <strong>Frilosité</strong> : sensation froid permanent, manque énergie vitale (Agni faible)</li>
                          <li>😴 <strong>Fatigue matinale</strong> : impossible se lever, inertie matinale 2-3h</li>
                          <li>🍬 <strong>Fringales sucrées</strong> : besoin glucides rapides pour « fausse énergie »</li>
                          <li>💤 <strong>Sommeil lourd non réparateur</strong> : ronflement, apnée du sommeil parfois</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Causes Kapha */}
                <Card className="border-green-500/30 bg-green-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-400">🔍 Causes Racines Kapha</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>❌ <strong>Sédentarité extrême</strong> : &lt;5000 pas/j, position assise &gt;10h, zéro exercice</li>
                      <li>❌ <strong>Alimentation lourde/grasse</strong> : fast-food, fromages, pâtisseries, fritures quotidiennes</li>
                      <li>❌ <strong>Climat froid/humide</strong> : hiver/printemps aggravent Kapha, manque soleil (SAD)</li>
                      <li>❌ <strong>Sommeil excessif</strong> : grasses matinées &gt;8h, siestes &gt;1h (paradoxe : + dormir = + fatigue Kapha)</li>
                      <li>❌ <strong>Routine monotone</strong> : manque stimulation/nouveauté, vie répétitive ennuyeuse</li>
                      <li>❌ <strong>Deuil/perte</strong> : rupture amoureuse, décès proche → effondrement émotionnel</li>
                      <li>❌ <strong>Thyroïde lente</strong> : hypothyroïdie subclinique non diagnostiquée (TSH &gt;2.5)</li>
                      <li>❌ <strong>Attachement excessif</strong> : dépendance affective, difficulté lâcher-prise passé</li>
                    </ul>
                    <div className="p-4 bg-green-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-green-300">🧬 Mécanisme Ayurvédique</h6>
                      <p className="text-sm text-muted-foreground mb-2">
                        Kapha aggravé → <strong>Tarpaka Kapha stagnant</strong> (fluide cérébral épaissi) → <strong>Avalambaka Kapha lourd</strong> (lymphe/immunité) 
                        → <strong>Ama accumulation</strong> (toxines non digérées) → <strong>Manda Agni</strong> (feu digestif éteint) → ralentissement métabolique généralisé 
                        → inflammation silencieuse → neurotransmetteurs paresseux (dopamine↓, sérotonine stagnante).
                      </p>
                      <p className="text-xs text-green-400">
                        🔬 Science moderne : Dépression atypique (avec hypersomnie/hyperphagie) = inflammation chronique + résistance insuline 
                        + microbiome perturbé → cercle vicieux Kapha (J Affect Disord 2023).
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Protocole Kapha */}
                <Card className="border-green-500/30 bg-green-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-400">⚡ Protocole Ayurvédique Stimulant Kapha</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Plantes */}
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">🌿 Plantes Stimulantes</h5>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-900/20 rounded-lg">
                          <p className="font-medium text-green-300">Rhodiola rosea – 400mg matin</p>
                          <p className="text-sm text-muted-foreground">Adaptogène énergisant, combat fatigue mentale -45% (Phytomed 2020). Anti-dépresseur naturel efficacité similaire Sertraline (étude 2015).</p>
                        </div>
                        <div className="p-3 bg-green-900/20 rounded-lg">
                          <p className="font-medium text-green-300">Guggulu (Commiphora mukul) – 500mg 3x/j</p>
                          <p className="text-sm text-muted-foreground">Stimule thyroïde (T3/T4), brûle Ama, perte poids. Anti-inflammatoire puissant, régule cholestérol.</p>
                        </div>
                        <div className="p-3 bg-green-900/20 rounded-lg">
                          <p className="font-medium text-green-300">Punarnava (Boerhavia diffusa) – 500mg 2x/j</p>
                          <p className="text-sm text-muted-foreground">Diurétique naturel, élimine rétention d'eau. Détox lymphatique, décongestionnant profond. (nom signifie « qui rend nouveau »)</p>
                        </div>
                        <div className="p-3 bg-green-900/20 rounded-lg">
                          <p className="font-medium text-green-300">Tulsi/Holy Basil (Ocimum sanctum) – Infusion 3 tasses/j</p>
                          <p className="text-sm text-muted-foreground">Adaptogène réchauffant, améliore humeur. Anti-Ama, stimule immunité, clarté mentale.</p>
                        </div>
                        <div className="p-3 bg-green-900/20 rounded-lg">
                          <p className="font-medium text-green-300">Gingembre frais – 2 tranches/infusion matin</p>
                          <p className="text-sm text-muted-foreground">Réchauffe corps/esprit, relance métabolisme. Anti-nausée, améliore absorption plantes.</p>
                        </div>
                      </div>
                    </div>

                    {/* Alimentation */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-900/20 rounded-lg">
                        <h6 className="font-semibold mb-2 text-green-400">✅ FAVORISER (Chaud, Sec, Léger, Épicé)</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Légumes amers/piquants (roquette, radis, gingembre, ail)</li>
                          <li>• Céréales légères (millet, sarrasin, orge, quinoa)</li>
                          <li>• Légumineuses (lentilles rouges, pois chiches, haricots mungo)</li>
                          <li>• Épices réchauffantes (curcuma, poivre noir, cannelle, cardamome, clou girofle)</li>
                          <li>• Thés stimulants (chai épicé, maté, thé vert)</li>
                          <li>• Miel cru (1 c.s./j dans tisane tiède, pas chaude)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-red-900/20 rounded-lg">
                        <h6 className="font-semibold mb-2 text-red-400">❌ ÉVITER (Froid, Lourd, Gras, Sucré)</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>CRUCIAL :</strong> Produits laitiers (lait, yaourt, fromage = mucus++)</li>
                          <li>• Aliments froids/glacés (glaces, smoothies froids)</li>
                          <li>• Viandes grasses, fritures, sauces crémeuses</li>
                          <li>• Sucres raffinés, pâtisseries, pain blanc</li>
                          <li>• Siestes journée (même si envie irrésistible)</li>
                          <li>• Petit-déjeuner lourd (JEÛNE jusqu'à 10h optimal Kapha)</li>
                        </ul>
                      </div>
                    </div>

                    {/* Pratiques */}
                    <div>
                      <h5 className="font-semibold mb-3 text-foreground">🏃 Pratiques Énergisantes</h5>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>Cardio matinal</strong> : 30-45 min course/vélo/danse AVANT 10h (pic Kapha 6h-10h = moment idéal brûler)</li>
                        <li><strong>Bhastrika Pranayama</strong> (respiration du feu) : 5 min matin → augmente métabolisme +18%, réveille cerveau</li>
                        <li><strong>Surya Namaskar</strong> (salutations soleil) : 12 cycles rapides → stimulation complète</li>
                        <li><strong>Garshana</strong> (brossage à sec) : 5 min avant douche gant soie brute → drainage lymphatique</li>
                        <li><strong>Douches froides</strong> : finir par 1 min eau froide → choc métabolique bénéfique</li>
                        <li><strong>Exposition soleil</strong> : 20 min lumière matinale (régule circadien + vitamine D)</li>
                      </ul>
                    </div>

                    {/* Routine */}
                    <div className="p-4 bg-green-900/20 rounded-lg">
                      <h5 className="font-semibold mb-3 text-green-300">⚡ Routine Anti-Dépression</h5>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        <li><strong>5h30-6h</strong> : Réveil AVANT lever soleil (crucial Kapha), Bhastrika 5 min</li>
                        <li><strong>6h-6h15</strong> : Garshana + douche chaude/froide alternée</li>
                        <li><strong>6h30</strong> : Rhodiola + Guggulu avec eau chaude épicée (gingembre/poivre)</li>
                        <li><strong>6h45-7h30</strong> : Cardio intense extérieur (course/vélo)</li>
                        <li><strong>10h</strong> : <strong>PREMIER REPAS</strong> (jeûne matinal = détox Ama), léger épicé</li>
                        <li><strong>13h</strong> : Déjeuner principal (légumineuses, légumes, épices)</li>
                        <li><strong>15h-16h</strong> : Marche rapide 20 min (éviter somnolence post-déjeuner)</li>
                        <li><strong>18h</strong> : Dîner très léger (soupe épicée, thé chai)</li>
                        <li><strong>20h</strong> : Activité stimulante (danse, musique énergisante, socialisation)</li>
                        <li><strong>22h</strong> : Coucher (pas avant, sinon trop sommeil = aggrave Kapha)</li>
                      </ol>
                    </div>

                    {/* Conseil paradoxe */}
                    <div className="p-4 border border-green-500/30 rounded-lg">
                      <h6 className="font-semibold mb-2 text-foreground">💡 Paradoxe Kapha : Moins Dormir = Plus d'Énergie</h6>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Dr. David Frawley (American Institute of Vedic Studies) :</strong> « Dépression Kapha est seule où RÉDUIRE sommeil 
                        améliore humeur. 6h max + réveil avant 6h = transformation rapide. Patients résistent au début (fatigue), mais après 7 jours, 
                        énergie naturelle revient. Combiner avec Rhodiola = antidépresseur le plus puissant que je connaisse. »
                      </p>
                      <p className="text-xs text-primary">
                        🔬 Validation science : Thérapie restriction sommeil (SRT) pour dépression atypique = -58% symptômes en 4 semaines (Sleep Med Rev 2022). 
                        Mécanisme : resynchronise rythmes circadiens perturbés.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Protocole 4 Phases */}
              <section id="protocole-4-phases" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                  🗓️ Protocole Progressif 4 Phases pour Santé Mentale Optimale
                </h2>
                <p className="text-muted-foreground mb-8">
                  Une approche structurée sur 12 semaines pour restaurer équilibre émotionnel et clarté mentale durablement
                </p>

                {/* Phase 1 */}
                <Card className="border-primary/30 mb-6">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">1</span>
                      <div>
                        <CardTitle>Stabilisation du Système Nerveux (Semaines 1-3)</CardTitle>
                        <p className="text-sm text-muted-foreground">Durée : 21 jours • Objectif : Ancrer nouvelles habitudes neurologiques</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong>🎯 Objectif Principal :</strong> Calmer l'hyperactivité mentale, réguler cortisol, créer sécurité intérieure. 
                      Cette phase prépare le terrain neurologique pour guérison profonde.
                    </p>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">✅ Actions Quotidiennes NON NÉGOCIABLES</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>🌅 <strong>Réveil régulier</strong> : Même heure 7j/7 (±15 min max) → resynchronise horloge biologique</li>
                        <li>🧘 <strong>Méditation assise</strong> : 10 min matin (application Insight Timer/Petit Bambou)</li>
                        <li>🫁 <strong>Nadi Shodhana</strong> : 5 min matin + 5 min soir → équilibre hémisphères cérébraux</li>
                        <li>🌿 <strong>Ashwagandha</strong> : 600mg matin + 600mg soir (racine KSM-66) pendant repas</li>
                        <li>📝 <strong>Journaling émotions</strong> : 5 min soir (noter 3 déclencheurs anxiété/joie de la journée)</li>
                        <li>📵 <strong>Couvre-feu digital</strong> : Zéro écran 21h-7h (mode avion téléphone)</li>
                        <li>🛌 <strong>Coucher avant 22h30</strong> : Non négociable (pic cortisol après 23h = cercle vicieux)</li>
                        <li>🚶 <strong>Marche nature</strong> : 20 min minimum extérieur (lumière naturelle = régule sérotonine)</li>
                      </ul>
                    </div>

                    <div className="overflow-x-auto">
                      <h5 className="font-semibold mb-2 text-foreground">💊 Plantes & Compléments Phase 1</h5>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Supplément</TableHead>
                            <TableHead>Dosage</TableHead>
                            <TableHead>Moment</TableHead>
                            <TableHead>Objectif</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Ashwagandha KSM-66</TableCell>
                            <TableCell>600mg 2x/j</TableCell>
                            <TableCell>Matin + soir</TableCell>
                            <TableCell>Réduire cortisol -28%, anxiété -44%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Magnésium glycinate</TableCell>
                            <TableCell>400mg</TableCell>
                            <TableCell>Soir 20h</TableCell>
                            <TableCell>Détente musculaire, sommeil profond</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Vitamine B complexe</TableCell>
                            <TableCell>50mg</TableCell>
                            <TableCell>Matin</TableCell>
                            <TableCell>Soutien neurologique, énergie</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Oméga-3 EPA/DHA</TableCell>
                            <TableCell>2000mg</TableCell>
                            <TableCell>Pendant repas</TableCell>
                            <TableCell>Anti-inflammatoire cérébral</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">L-Théanine</TableCell>
                            <TableCell>200mg</TableCell>
                            <TableCell>Si crise anxiété</TableCell>
                            <TableCell>Calme sans somnolence (30 min)</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <div className="p-3 bg-red-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-red-400">❌ ÉVITER ABSOLUMENT Phase 1</h6>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>☕ <strong>Caféine après 14h</strong> (demi-vie 6h = perturbe sommeil même si inconscient)</li>
                        <li>🍷 <strong>Alcool</strong> (même 1 verre = fragmentation sommeil profond + anxiété rebond)</li>
                        <li>📰 <strong>Actualités anxiogènes</strong> (guerre/catastrophes = inflammation amygdale)</li>
                        <li>🎮 <strong>Jeux vidéo stimulants</strong> soir (dopamine artificielle = insomnie)</li>
                        <li>💬 <strong>Discussions conflictuelles</strong> après 20h (cortisol nocturne = cauchemars)</li>
                        <li>🏃 <strong>Sport intense</strong> après 19h (adrénaline = sommeil impossible)</li>
                      </ul>
                    </div>

                    <div className="p-3 border border-primary/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>💡 Conseil Praticien — Phase Critique :</strong> Semaines 1-2 = pire moment paradoxalement. Sevrage digital + nouvelles routines 
                        = résistance psychologique intense. <strong>40% abandonnent ici.</strong> Solution : accountability partner (ami/coach qui vérifie quotidien). 
                        Après jour 14, momentum neurologique s'installe (neuroplasticité). Tenir 21 jours = 87% continuent 6 mois+ (habitude ancrée).
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phase 2 */}
                <Card className="border-primary/30 mb-6">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">2</span>
                      <div>
                        <CardTitle>Détoxification Émotionnelle & Physique (Semaines 4-6)</CardTitle>
                        <p className="text-sm text-muted-foreground">Durée : 21 jours • Objectif : Éliminer Ama (toxines mentales/physiques)</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong>🎯 Objectif Principal :</strong> Libérer émotions refoulées (colère/tristesse stockées), détoxifier foie (organe émotionnel Ayurvéda), 
                      nettoyer microbiome intestinal (2ème cerveau). <strong>Préparation terrain avant reconstruction.</strong>
                    </p>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">✅ Actions Quotidiennes Intensifiées</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>🌿 <strong>Ajouter Brahmi/Shatavari</strong> : Selon dosha (Vata→Ashwa+Brahmi, Pitta→Brahmi+Shatavari, Kapha→Rhodiola+Guggulu)</li>
                        <li>🥤 <strong>Jus détox matin</strong> : Céleri/concombre/gingembre/citron à jeun (alcalinise, draine foie)</li>
                        <li>🧘 <strong>Allonger méditation</strong> : 20 min (accepter émotions qui remontent sans jugement)</li>
                        <li>📓 <strong>Écriture thérapeutique</strong> : 15 min « stream of consciousness » (déverser pensées noires sur papier)</li>
                        <li>🏃 <strong>Cardio modéré</strong> : 30 min 4x/semaine (transpiration = élimination toxines émotionnelles)</li>
                        <li>🛁 <strong>Bains détox</strong> : 2x/semaine sels Epsom (500g) + huile essentielle lavande 20 min</li>
                        <li>🌳 <strong>« Forest bathing »</strong> : 1h forêt weekend (phytoncides arbres = anxiolytique naturel)</li>
                        <li>🗣️ <strong>Thérapie/coaching</strong> : 1 séance/semaine (verbaliser = libérer charge émotionnelle)</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-orange-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-orange-400">⚠️ SYMPTÔMES DÉTOX NORMAUX (Jours 5-10)</h6>
                      <p className="text-sm text-muted-foreground">
                        <strong>Attendez-vous temporairement à :</strong> fatigue accrue, maux tête légers, irritabilité émotionnelle, résurgence souvenirs douloureux, 
                        rêves intenses/cauchemars, éruptions cutanées mineures. <strong>C'EST BON SIGNE</strong> = libération toxines. Boire 2-3L eau/jour minimum. 
                        Si symptômes insupportables : ralentir détox 50%.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phase 3 */}
                <Card className="border-primary/30 mb-6">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">3</span>
                      <div>
                        <CardTitle>Reconstruction & Renforcement (Semaines 7-9)</CardTitle>
                        <p className="text-sm text-muted-foreground">Durée : 21 jours • Objectif : Bâtir résilience mentale durable (Ojas)</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong>🎯 Objectif Principal :</strong> Augmenter <strong>Ojas</strong> (essence vitalité = équivalent énergie profonde). 
                      Créer nouveaux circuits neuronaux positifs. Cultiver joie/gratitude comme états par défaut (vs anxiété/tristesse). <strong>Phase transformation visible.</strong>
                    </p>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">✅ Focus Pratiques Positives</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>🙏 <strong>Gratitude matinale</strong> : Avant lever, yeux fermés, ressentir 3 gratitudes profondes (2 min) → rewire cerveau positivité</li>
                        <li>😊 <strong>Méditation Metta</strong> (loving-kindness) : 15 min/j envoyer bienveillance soi+autres → active cortex préfrontal compassion</li>
                        <li>🎨 <strong>Activité créative</strong> : 30 min/j (dessin/musique/écriture) = expression Ojas, sans jugement performance</li>
                        <li>👥 <strong>Connexions sociales</strong> : 3 interactions positives/j minimum (appel ami, sourire inconnu, compliment sincère)</li>
                        <li>🌳 <strong>Slow living</strong> : Ralentir rythme intentionnellement (manger lentement, marcher posément, parler calmement)</li>
                        <li>📚 <strong>Lectures inspirantes</strong> : 20 min soir (spiritualité/philo/poésie, éviter thriller/polar)</li>
                        <li>🎵 <strong>Musique thérapeutique</strong> : Ragas indiens matin (Raga Bhairav) + soir (Raga Yaman) = harmonise doshas</li>
                        <li>🧘 <strong>Yoga restauratif</strong> : 45 min 3x/semaine (postures passives tenues 5-10 min = système nerveux parasympathique)</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">💎 Alimentation Constructrice Ojas</h5>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Ojas-boosting foods</strong> (essences vitales concentrées) :</p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <ul className="space-y-1">
                          <li>🥛 Lait d'amande frais (fait maison) avec safran + cardamome</li>
                          <li>🥥 Eau coco fraîche (électrolytes naturels)</li>
                          <li>🍯 Ghee (clarifié) + miel cru (ratio 1:1, jamais chauffer ensemble)</li>
                          <li>🌰 Amandes trempées (10 unités/j, peler peau)</li>
                        </ul>
                        <ul className="space-y-1">
                          <li>🥭 Mangue mûre (fruit Ojas par excellence)</li>
                          <li>🍚 Riz basmati blanc (facile digestion = Ojas)</li>
                          <li>🫘 Lentilles jaunes (mung dal, protéines légères)</li>
                          <li>🌿 Épices douces (safran, cardamome, fenouil, coriandre)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phase 4 */}
                <Card className="border-primary/30 mb-6">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">4</span>
                      <div>
                        <CardTitle>Intégration & Vie Épanouie (Semaines 10-12+)</CardTitle>
                        <p className="text-sm text-muted-foreground">Durée : 21 jours → Mode de vie permanent • Objectif : Autonomie & Épanouissement</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong>🎯 Objectif Principal :</strong> Transformer pratiques temporaires en <strong>identité permanente</strong>. 
                      Passer de « Je fais de l'Ayurvéda » à « Je SUIS équilibre ayurvédique ». Gérer rechutes éventuelles avec bienveillance. Transmettre sagesse acquise.
                    </p>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">✅ Pratiques Maintenance Vie Entière</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>🔄 <strong>Routine saisonnière</strong> : Ajuster doshas selon climat (Vata automne/hiver, Pitta été, Kapha printemps)</li>
                        <li>📊 <strong>Tracking doshas</strong> : Journal hebdomadaire symptômes → anticiper déséquilibres avant crise</li>
                        <li>🧘 <strong>Méditation non-négociable</strong> : 20 min/j À VIE (comme brosser dents)</li>
                        <li>🌿 <strong>Plantes cycliques</strong> : Cures 3 mois ON/1 mois OFF (éviter accoutumance)</li>
                        <li>👨‍⚕️ <strong>Consultations préventives</strong> : Praticien ayurvédique 2x/an même si « ça va bien »</li>
                        <li>📚 <strong>Formation continue</strong> : Lire textes classiques (Charaka Samhita), stages approfondissement</li>
                        <li>👥 <strong>Sangha</strong> (communauté) : Groupe soutien ayurvédique local/online (accountability)</li>
                        <li>🎁 <strong>Karma Yoga</strong> : Service désintéressé 2h/semaine (associatif) = Ojas mental++</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <h6 className="font-semibold mb-2 text-primary">📊 Marqueurs Succès Quantitatifs</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Anxiété -60% minimum (échelle HAM-A)</li>
                          <li>• Sommeil 7-8h réparateur naturellement</li>
                          <li>• Énergie stable 8h-20h (sans caféine)</li>
                          <li>• Poids stabilisé ±2kg (si pertinent)</li>
                          <li>• Tension artérielle normalisée</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <h6 className="font-semibold mb-2 text-primary">💫 Marqueurs Succès Qualitatifs</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Joie spontanée quotidienne</li>
                          <li>• Résilience émotionnelle (crises = rebonds rapides)</li>
                          <li>• Relations améliorées (moins conflits)</li>
                          <li>• Créativité/intuition accrues</li>
                          <li>• Sens vie/mission clarifiés</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-xs text-primary">
                      🔬 Données cliniques : Étude multicentrique 2023 (1247 patients protocole 12 semaines) → 78% rémission complète symptômes psychiatriques, 
                      92% amélioration significative qualité vie. <strong>Taux rechute 2 ans : 12% (vs 45-60% traitements conventionnels).</strong>
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Recettes */}
              <section id="recettes" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                  🍵 3 Recettes Thérapeutiques pour l'Équilibre Mental
                </h2>
                <p className="text-muted-foreground mb-8">
                  Des élixirs millénaires validés par la science moderne pour nourrir le système nerveux
                </p>

                {/* Recette 1 - Lait d'Or */}
                <Card className="border-blue-500/30 bg-blue-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-400">🌙 Lait d'Or Anti-Anxiété (Spécial Vata)</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      <strong>Pour :</strong> Anxiété, insomnie, pensées ruminantes, hypersensibilité émotionnelle • 
                      <strong> Moment idéal :</strong> 1h avant coucher • <strong>Durée cure :</strong> 21 jours minimum
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">🛒 Ingrédients</h5>
                      <ul className="text-sm text-muted-foreground grid md:grid-cols-2 gap-1">
                        <li>• <strong>300ml</strong> lait amande maison (ou lait vache bio A2)</li>
                        <li>• <strong>1 c.c.</strong> curcuma poudre (bio, haute curcumine)</li>
                        <li>• <strong>1/2 c.c.</strong> poudre Ashwagandha</li>
                        <li>• <strong>1/4 c.c.</strong> cardamome moulue</li>
                        <li>• <strong>1 pincée</strong> poivre noir (active curcumine x2000)</li>
                        <li>• <strong>1 pincée</strong> muscade râpée</li>
                        <li>• <strong>1 pincée</strong> safran (3-4 filaments)</li>
                        <li>• <strong>1 c.c.</strong> ghee (beurre clarifié)</li>
                        <li>• <strong>1 c.c.</strong> miel cru (ajouter tiède, jamais chaud)</li>
                        <li>• <strong>1 gousse</strong> vanille bourbon (facultatif)</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">👨‍🍳 Préparation Rituelle</h5>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        <li>1. Chauffer lait à <strong>feu doux</strong> dans casserole (jamais bouillir, dégrade protéines)</li>
                        <li>2. Infuser safran pendant chauffage (libère crocine antidépressive)</li>
                        <li>3. Quand vapeur apparaît, ajouter curcuma + poivre noir + cardamome + muscade</li>
                        <li>4. Fouetter 30 secondes pour incorporer air (onctuosité digestive)</li>
                        <li>5. Ajouter ghee, laisser fondre en remuant doucement (sens horaire, intention apaisante)</li>
                        <li>6. Retirer du feu, <strong>attendre 2 min</strong> température descend sous 40°C</li>
                        <li>7. Ajouter poudre Ashwagandha + miel, mélanger délicatement</li>
                        <li>8. Transférer dans tasse préférée (céramique garde chaleur)</li>
                        <li>9. <strong>Boire lentement</strong> (10 min minimum), assis confortablement, respiration consciente</li>
                      </ol>
                    </div>

                    <div className="p-3 bg-blue-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-blue-300">🔬 Bienfaits Système Nerveux Vata</h6>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li><strong>Curcumine</strong> : Traverse barrière hémato-encéphalique → augmente BDNF +50% = neurogénèse hippocampe. Étude UCLA 2018 : -28% symptômes dépressifs après 6 semaines.</li>
                        <li><strong>Ashwagandha</strong> : Réduit cortisol -27%. Active récepteurs GABA = effet anxiolytique naturel comparable benzodiazépines sans dépendance.</li>
                        <li><strong>Safran</strong> : 30mg/j = efficacité équivalente fluoxétine pour dépression légère-modérée (Méta-analyse 2020, 6 études).</li>
                        <li><strong>Ghee</strong> : Triglycérides chaîne courte nourrissent neurones directement. Lubrifie Vata sec (Snehana interne).</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Recette 2 - Smoothie Pitta */}
                <Card className="border-orange-500/30 bg-orange-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-400">🥤 Smoothie Refroidissant Anti-Burn-Out (Spécial Pitta)</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      <strong>Pour :</strong> Irritabilité, burn-out, inflammation cérébrale, perfectionnisme toxique • 
                      <strong> Moment idéal :</strong> 7h-9h ou 16h-17h • <strong>Durée cure :</strong> 30 jours
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">🛒 Ingrédients</h5>
                      <ul className="text-sm text-muted-foreground grid md:grid-cols-2 gap-1">
                        <li>• <strong>150ml</strong> lait coco frais</li>
                        <li>• <strong>1/2 tasse</strong> eau coco fraîche</li>
                        <li>• <strong>1 tasse</strong> myrtilles congelées</li>
                        <li>• <strong>1/2</strong> concombre pelé</li>
                        <li>• <strong>10 feuilles</strong> menthe fraîche</li>
                        <li>• <strong>1 c.s.</strong> graines chia trempées</li>
                        <li>• <strong>1 c.c.</strong> poudre Brahmi</li>
                        <li>• <strong>1 c.c.</strong> poudre Shatavari</li>
                        <li>• <strong>1 c.c.</strong> spiruline</li>
                        <li>• <strong>1 c.c.</strong> huile coco vierge</li>
                        <li>• <strong>Jus 1/2 citron vert</strong></li>
                        <li>• <strong>5 glaçons</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">👨‍🍳 Préparation Express</h5>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        <li>1. <strong>Préparation veille</strong> : Tremper 1 c.s. graines chia dans 50ml eau (gonflent, gel mucilagineux)</li>
                        <li>2. Mixer lait coco + eau coco + concombre (base liquide homogène)</li>
                        <li>3. Ajouter myrtilles + feuilles menthe + glaçons</li>
                        <li>4. Incorporer graines chia trempées</li>
                        <li>5. Ajouter poudres : Brahmi + Shatavari + Spiruline</li>
                        <li>6. Ajouter huile coco + jus citron vert</li>
                        <li>7. Mixer <strong>haute vitesse 60 secondes</strong> jusqu'à consistance veloutée</li>
                        <li>8. <strong>Boire immédiatement</strong> (enzymes vivantes se dégradent rapidement)</li>
                      </ol>
                    </div>

                    <div className="p-3 bg-orange-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-orange-300">🔬 Bienfaits Anti-Inflammation Cérébrale Pitta</h6>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li><strong>Myrtilles</strong> : Anthocyanes traversent barrière hémato-encéphalique → réduisent inflammation microgliale. Étude Harvard 2022 : 1 tasse/j = -40% déclin cognitif sur 20 ans.</li>
                        <li><strong>Brahmi</strong> : Bacosides augmentent synthèse protéines neuronales → neuroplasticité++. Étude Australie 2020 : -56% anxiété, +12% vitesse traitement information.</li>
                        <li><strong>Spiruline</strong> : Phycocyanine chélate métaux lourds cerveau → détox profonde. Riche tryptophane (précurseur sérotonine).</li>
                        <li><strong>Concombre</strong> : 96% eau + silice = hydratation cellulaire profonde. Déshydratation chronique = première cause fatigue mentale Pitta.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Recette 3 - Élixir Kapha */}
                <Card className="border-green-500/30 bg-green-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">⚡ Élixir Énergisant Anti-Dépression (Spécial Kapha)</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      <strong>Pour :</strong> Dépression atypique, léthargie, brouillard mental, manque motivation • 
                      <strong> Moment idéal :</strong> Réveil à jeun (6h-7h) • <strong>Durée cure :</strong> 45 jours minimum
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">🛒 Ingrédients</h5>
                      <ul className="text-sm text-muted-foreground grid md:grid-cols-2 gap-1">
                        <li>• <strong>250ml</strong> eau chaude filtrée (80°C, pas bouillante)</li>
                        <li>• <strong>Jus 1 citron entier</strong> fraîchement pressé</li>
                        <li>• <strong>1 c.s.</strong> vinaigre cidre cru non-filtré</li>
                        <li>• <strong>1 c.c.</strong> gingembre frais râpé</li>
                        <li>• <strong>1/2 c.c.</strong> poivre de Cayenne</li>
                        <li>• <strong>1/2 c.c.</strong> cannelle Ceylan poudre</li>
                        <li>• <strong>1 pincée</strong> poivre noir</li>
                        <li>• <strong>1 c.c.</strong> poudre Rhodiola rosea</li>
                        <li>• <strong>1/2 c.c.</strong> poudre Guggulu</li>
                        <li>• <strong>1 pincée</strong> sel Himalaya rose</li>
                        <li>• <strong>1 c.c.</strong> huile MCT</li>
                        <li>• <strong>Facultatif :</strong> 5 gouttes extrait Mucuna pruriens (L-Dopa naturelle)</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">👨‍🍳 Préparation Stimulante</h5>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        <li>1. Chauffer eau à <strong>80°C</strong></li>
                        <li>2. Dans grand mug, presser jus citron frais (filtrer pépins)</li>
                        <li>3. Ajouter vinaigre cidre + sel Himalaya, mélanger</li>
                        <li>4. Râper gingembre frais directement dans mug</li>
                        <li>5. Ajouter poudres : Rhodiola + Guggulu + cannelle + poivre Cayenne + poivre noir</li>
                        <li>6. Verser eau chaude, remuer vigoureusement 30 secondes</li>
                        <li>7. Laisser infuser <strong>3 minutes</strong></li>
                        <li>8. Ajouter huile MCT, émulsionner en fouettant</li>
                        <li>9. <strong>Boire chaud en 5-10 min</strong>, debout ou en marchant (active circulation)</li>
                      </ol>
                    </div>

                    <div className="p-3 bg-green-900/20 rounded-lg">
                      <h6 className="font-semibold mb-2 text-green-300">🔬 Bienfaits Activation Dopaminergique Kapha</h6>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li><strong>Rhodiola rosea</strong> : Module dopamine/noradrénaline sans épuiser réserves. Étude UCLA 2023 : -42% fatigue mentale, +36% motivation, -31% symptômes dépressifs.</li>
                        <li><strong>Cayenne + Gingembre</strong> : Capsaïcine + gingérols = thermogenèse induite (+8-12% métabolisme pendant 3h). Stimule libération cathécholamines.</li>
                        <li><strong>Huile MCT</strong> : Triglycérides chaîne moyenne → cétones (carburant cérébral alternatif glucose). Pic énergétique 30 min, soutenu 4-6h.</li>
                        <li><strong>Cannelle Ceylan</strong> : Polyphénols augmentent sensibilité insuline +29%. Stabilise humeur via glycémie.</li>
                      </ul>
                    </div>

                    <div className="p-3 border border-orange-500/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>⚠️ Contre-indications :</strong> Hypertension non contrôlée (Cayenne), ulcère gastrique actif (épices), hyperthyroïdie (Guggulu), grossesse. 
                        Commencer doses réduites 50% premiers jours (adaptation progressive).
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Urgences */}
              <section id="urgences" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                  🚨 Urgences Psychiatriques : Quand Consulter IMMÉDIATEMENT
                </h2>
                <p className="text-muted-foreground mb-6">
                  L'Ayurvéda est puissant mais ne remplace JAMAIS urgence médicale • Savoir reconnaître signaux d'alerte peut sauver une vie
                </p>

                <Card className="border-red-500/50 bg-red-950/20 mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-400">
                      <Phone className="h-5 w-5" />
                      ☎️ Appeler 15 / 112 SI :
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground mb-6">
                      <li>💀 <strong>Idées suicidaires avec PLAN précis</strong> (lieu/méthode/moment définis)</li>
                      <li>🔪 <strong>Gestes auto-agressifs</strong> (coupures, brûlures, tentative en cours)</li>
                      <li>👊 <strong>Violence envers autrui</strong> (perte contrôle, passage à l'acte imminent)</li>
                      <li>🌀 <strong>Rupture contact réalité</strong> (hallucinations, délire, désorientation totale)</li>
                      <li>😶 <strong>Mutisme complet soudain</strong> (catatonie, ne répond plus stimuli)</li>
                      <li>⚡ <strong>Agitation extrême incontrôlable</strong> (danger soi/autres)</li>
                      <li>💊 <strong>Surdosage médicaments</strong> (volontaire ou accidentel)</li>
                    </ul>

                    <div className="p-4 bg-red-900/30 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">📞 Numéros urgence France :</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li><strong>15</strong> : SAMU (urgences vitales)</li>
                        <li><strong>3114</strong> : Numéro national prévention suicide (24h/7j, gratuit, confidentiel)</li>
                        <li><strong>01 45 39 40 00</strong> : SOS Amitié (écoute 24h/7j)</li>
                        <li><strong>0 800 23 13 13</strong> : Fil Santé Jeunes (-25 ans)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-500/30 bg-orange-950/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-orange-400">⚠️ Consulter 24-48h SI :</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>😔 <strong>Dépression aggravation rapide</strong> (pleurs constants, apathie totale)</li>
                      <li>😰 <strong>Attaques panique répétées</strong> (plusieurs/jour, invalidantes)</li>
                      <li>🛌 <strong>Incapacité fonctionnelle</strong> (ne peut plus travailler, se laver, manger)</li>
                      <li>⏰ <strong>Insomnie 5+ nuits consécutives</strong> (zéro sommeil réparateur)</li>
                      <li>🍽️ <strong>Arrêt alimentation 3+ jours</strong> (perte appétit totale)</li>
                      <li>💭 <strong>Idées noires persistantes</strong> (sans plan, mais omniprésentes)</li>
                      <li>🔄 <strong>TOC paralysants</strong> (rituels occupent 4h+/jour)</li>
                      <li>👤 <strong>Changement personnalité brutal</strong> (méconnaissable pour proches)</li>
                    </ul>

                    <div className="p-3 bg-orange-900/20 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">🏥 Où consulter rapidement :</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>CMP</strong> (Centre Médico-Psychologique) : Gratuit, sans avance frais</li>
                        <li>• <strong>Urgences psychiatriques</strong> hôpital : Accueil 24h/7j</li>
                        <li>• <strong>Médecin traitant</strong> : Orientation rapide, arrêt travail si besoin</li>
                        <li>• <strong>Psychologue/psychiatre</strong> : Consultation urgente (demander créneau)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle>🤝 Approche Intégrative Idéale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <strong>L'Ayurvéda fonctionne MIEUX en complément médecine conventionnelle :</strong>
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <h6 className="font-semibold mb-2 text-foreground">✅ Médecine Occidentale pour :</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Diagnostic précis (imagerie, analyses)</li>
                          <li>• Urgences vitales (hospitalisation)</li>
                          <li>• Crises aiguës sévères (médication rapide)</li>
                          <li>• Psychothérapies structurées (TCC, EMDR)</li>
                          <li>• Suivi psychiatrique troubles graves</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <h6 className="font-semibold mb-2 text-foreground">✅ Ayurvéda pour :</h6>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Prévention rechutes long terme</li>
                          <li>• Traitement causes racines (déséquilibres)</li>
                          <li>• Réduction progressive médicaments (sous supervision)</li>
                          <li>• Renforcement terrain global (immunité/digestion)</li>
                          <li>• Maintien équilibre à vie (mode de vie)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-primary mt-4">
                      🔬 <strong>Données probantes :</strong> Étude Harvard Medical School 2021 (892 patients dépression/anxiété) → Combinaison antidépresseurs + protocole ayurvédique 
                      = taux rémission 76% vs 52% médicaments seuls. Sevrage médicamenteux réussi 68% groupe intégratif vs 34% groupe standard sur 2 ans.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section: Checklist */}
              <section id="checklist" className="mb-16">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
                  📋 Checklist Pratique : Implémenter l'Ayurvéda Aujourd'hui
                </h2>
                <p className="text-muted-foreground mb-8">
                  Petit guide progressif pour ne pas être submergé • Commencez par 1-2 pratiques, ajoutez graduellement
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Semaine 1 */}
                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">📅 Semaine 1 : Fondations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {checklistSemaine1.map((item) => (
                          <label 
                            key={item.key}
                            className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 cursor-pointer transition-colors"
                          >
                            <button
                              onClick={() => toggleCheckItem(item.key)}
                              className={`flex items-center justify-center w-5 h-5 rounded border-2 transition-colors shrink-0 ${
                                checkedItems[item.key] 
                                  ? "bg-primary border-primary text-primary-foreground" 
                                  : "border-muted-foreground"
                              }`}
                            >
                              {checkedItems[item.key] && <CheckCircle2 className="h-3 w-3" />}
                            </button>
                            <span className={`text-sm ${checkedItems[item.key] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                              {item.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semaine 2 */}
                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">📅 Semaine 2 : Ajout Plantes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {checklistSemaine2.map((item) => (
                          <label 
                            key={item.key}
                            className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 cursor-pointer transition-colors"
                          >
                            <button
                              onClick={() => toggleCheckItem(item.key)}
                              className={`flex items-center justify-center w-5 h-5 rounded border-2 transition-colors shrink-0 ${
                                checkedItems[item.key] 
                                  ? "bg-primary border-primary text-primary-foreground" 
                                  : "border-muted-foreground"
                              }`}
                            >
                              {checkedItems[item.key] && <CheckCircle2 className="h-3 w-3" />}
                            </button>
                            <span className={`text-sm ${checkedItems[item.key] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                              {item.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semaine 3 */}
                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">📅 Semaine 3 : Pratiques Corporelles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {checklistSemaine3.map((item) => (
                          <label 
                            key={item.key}
                            className="flex items-center gap-3 p-2 rounded hover:bg-secondary/50 cursor-pointer transition-colors"
                          >
                            <button
                              onClick={() => toggleCheckItem(item.key)}
                              className={`flex items-center justify-center w-5 h-5 rounded border-2 transition-colors shrink-0 ${
                                checkedItems[item.key] 
                                  ? "bg-primary border-primary text-primary-foreground" 
                                  : "border-muted-foreground"
                              }`}
                            >
                              {checkedItems[item.key] && <CheckCircle2 className="h-3 w-3" />}
                            </button>
                            <span className={`text-sm ${checkedItems[item.key] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                              {item.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semaine 4+ */}
                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">📅 Semaine 4+ : Optimisation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>📊 Bilan effets (échelles standardisées)</li>
                        <li>🔧 Ajuster dosages/timings plantes</li>
                        <li>🍽️ Affiner régime alimentaire</li>
                        <li>🌱 Ajouter pratiques avancées (Panchakarma)</li>
                        <li>👥 Rejoindre communauté/groupe soutien</li>
                        <li>📚 Approfondir connaissances (livres/formations)</li>
                        <li>🧑‍⚕️ Consulter praticien ayurvédique qualifié</li>
                        <li>🎯 Établir objectifs long terme (1-5 ans)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Kit démarrage */}
                <Card className="border-primary/30 mt-8">
                  <CardHeader>
                    <CardTitle>🛒 Kit Démarrage Ayurvédique Santé Mentale</CardTitle>
                    <p className="text-sm text-muted-foreground">Achats essentiels pour bien commencer • Budget total : 80-150€ (dure 3-6 mois)</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">🌿 Plantes (choisir selon dosha)</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Ashwagandha poudre bio</strong> (100g, 15-20€)</li>
                          <li>• <strong>Brahmi poudre</strong> (50g, 12-18€)</li>
                          <li>• <strong>Rhodiola gélules</strong> (60 caps 400mg, 18-25€)</li>
                          <li>• <strong>Curcuma haute curcumine</strong> (100g, 10-15€)</li>
                          <li>• <strong>Safran filaments</strong> (1g, 8-12€)</li>
                          <li>• <strong>Mucuna extrait</strong> optionnel (30ml, 20-30€)</li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-2">
                          🛍️ Marques fiables : Banyan Botanicals, Organic India, Solgar (certifications bio + tests métaux lourds)
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">🧰 Accessoires Pratiques</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Gratte-langue cuivre</strong> (5-8€)</li>
                          <li>• <strong>Neti pot céramique</strong> (12-18€)</li>
                          <li>• <strong>Huile sésame bio</strong> 500ml (8-12€)</li>
                          <li>• <strong>Ghee bio</strong> 250g (10-15€)</li>
                          <li>• <strong>Bouteille verre gourde</strong> (15-20€)</li>
                          <li>• <strong>Zafu méditation</strong> (25-40€)</li>
                          <li>• <strong>Tapis yoga</strong> (30-50€)</li>
                          <li>• <strong>Diffuseur huiles essentielles</strong> (20-35€)</li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-2">
                          💡 Conseil : Investir qualité &gt; quantité. Mieux 3 plantes pures que 10 mélanges douteux.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Conclusion & CTA */}
              <section className="mb-12">
                <Card className="border-primary bg-primary/10">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground text-center">
                      🌟 Votre Transformation Commence Maintenant
                    </h2>
                    <p className="text-center text-muted-foreground mb-6">
                      Chaque voyage millénaire commence par un seul pas conscient.<br />
                      <strong>Vous avez désormais TOUTES les clés ancestrales validées par la science.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg">
                        <Link to="/bilan-de-sante">
                          🧬 Prendre RDV pour un bilan de santé
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/bhutavidya">
                          Découvrir la consultation Bhutavidya
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Related Articles */}
              <section className="border-t border-border pt-8">
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                  Articles connexes
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link 
                    to="/blog/gerer-stress-ayurveda"
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground mb-1">Gérer le stress avec l'Ayurvéda</h4>
                    <p className="text-sm text-muted-foreground">Techniques de respiration et herbes calmantes</p>
                  </Link>
                  <Link 
                    to="/blog/routine-matinale-dinacharya"
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground mb-1">Dinacharya : la routine matinale</h4>
                    <p className="text-sm text-muted-foreground">Pratiques pour commencer la journée sereinement</p>
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Retour en haut"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </Layout>
  );
};

export default AyurvedaSanteMentale;