import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "ishvara", title: "Qui est Ishvara ?" },
  { id: "noms-formes", title: "Noms et Formes" },
  { id: "bhakti", title: "La Voie de la Dévotion" },
  { id: "surrender", title: "L'Art de l'Abandon" },
  { id: "meditation", title: "Méditation et Mantras" },
  { id: "rituels", title: "Rituels Quotidiens" },
  { id: "realisation", title: "La Réalisation Spirituelle" },
  { id: "conclusion", title: "Conclusion" },
];

const VoieHisvara = () => {
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
            La Voie d'<span className="text-primary">Ishvara</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Des Védas à la transmission moderne : un fil sacré qui relie la sagesse ancestrale aux voix d'aujourd'hui.
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
            <h2 className="text-2xl font-serif text-foreground mb-6">Introduction</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                La voie Ishvara est une doctrine spirituelle qui trouve ses origines dans les enseignements 
                des anciens sages de l'Inde. Elle vise à atteindre l'éveil spirituel et la réalisation de soi 
                à travers la méditation, la prière et la pratique du yoga.
              </p>
              <p>
                Cette voie met l'accent sur la connexion entre l'individu et l'univers, et cherche à établir 
                une harmonie entre le corps, l'esprit et l'âme. Les adeptes cherchent à transcender les limites 
                de l'ego et à développer une perception plus profonde de la réalité.
              </p>
            </div>
          </section>

          {/* Chapter 1 */}
          <section id="ishvara">
            <h2 className="text-2xl font-serif text-foreground mb-6">Chapitre 1 : Qui est Ishvara ?</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Ishvara</strong> est un concept central dans la philosophie hindoue, 
                souvent traduit par "Seigneur" ou "Maître suprême". Dans les textes védiques, Ishvara est décrit comme 
                la conscience divine universelle, à la fois immanente et transcendante.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Définitions Clés</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Ishvara</strong> - Le Seigneur suprême, principe organisateur de l'univers</li>
                <li><strong className="text-foreground">Brahman</strong> - La réalité ultime et absolue, sans forme ni attributs (Nirguna)</li>
                <li><strong className="text-foreground">Atman</strong> - L'âme individuelle, manifestation de Brahman</li>
              </ul>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "Par Moi, dans Ma forme non manifestée, tout cet univers est pénétré. 
                    Tous les êtres sont en Moi, mais Je ne suis pas en eux."
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">- Bhagavad Gita 9.4</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Chapter 2 */}
          <section id="noms-formes">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Noms et Formes d'Ishvara</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Ishvara se manifeste sous diverses formes, chacune représentant un aspect différent de la divinité.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">La Trimurti</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Brahma</h4>
                    <p className="text-sm text-muted-foreground">Le Créateur</p>
                    <p className="text-xs mt-2 italic">Om Brahmanye Namah</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Vishnu</h4>
                    <p className="text-sm text-muted-foreground">Le Préservateur</p>
                    <p className="text-xs mt-2 italic">Om Namo Narayanaya</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Shiva</h4>
                    <p className="text-sm text-muted-foreground">Le Transformateur</p>
                    <p className="text-xs mt-2 italic">Om Namah Shivaya</p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Les Déesses</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Parvati</strong> - L'énergie divine féminine, épouse de Shiva</li>
                <li><strong className="text-foreground">Lakshmi</strong> - Déesse de la prospérité et de l'abondance</li>
                <li><strong className="text-foreground">Saraswati</strong> - Déesse de la connaissance et des arts</li>
                <li><strong className="text-foreground">Durga/Kali</strong> - Aspect protecteur et transformateur du féminin divin</li>
              </ul>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="bhakti">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Voie de la Dévotion (Bhakti Yoga)</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Le <strong className="text-foreground">Bhakti Yoga</strong> est la voie de l'amour et de la dévotion. 
                C'est l'une des voies les plus accessibles, particulièrement recommandée pour le Kali Yuga.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Les Neuf Formes de Bhakti</h3>
              <ol className="space-y-2 mt-4">
                <li><strong className="text-foreground">Shravana</strong> - Écouter les gloires du Seigneur</li>
                <li><strong className="text-foreground">Kirtana</strong> - Chanter Ses louanges</li>
                <li><strong className="text-foreground">Smarana</strong> - Se souvenir constamment de Lui</li>
                <li><strong className="text-foreground">Pada-sevana</strong> - Servir Ses pieds de lotus</li>
                <li><strong className="text-foreground">Archana</strong> - L'adorer rituellement</li>
                <li><strong className="text-foreground">Vandana</strong> - Le prier et L'honorer</li>
                <li><strong className="text-foreground">Dasya</strong> - Être Son serviteur</li>
                <li><strong className="text-foreground">Sakhya</strong> - Être Son ami</li>
                <li><strong className="text-foreground">Atma-nivedana</strong> - S'offrir totalement à Lui</li>
              </ol>
            </div>
          </section>

          {/* Chapter 4 */}
          <section id="surrender">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Art de l'Abandon (Sharanagati)</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Sharanagati</strong> (l'abandon total) est le sommet de la voie Bhakti. 
                C'est le moment où l'ego se dissout complètement dans la volonté divine.
              </p>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "Abandonne tous les dharmas et réfugie-toi en Moi seul. 
                    Je te libérerai de tous les péchés. Ne crains pas."
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">- Bhagavad Gita 18.66</p>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Pratiques pour Cultiver l'Abandon</h3>
              <ul className="space-y-2 mt-4">
                <li>Accepter la volonté divine dans toutes les circonstances</li>
                <li>Offrir les fruits de ses actions au Seigneur</li>
                <li>Développer la foi et la confiance absolue</li>
                <li>Lâcher prise sur le contrôle et les attachements</li>
              </ul>
            </div>
          </section>

          {/* Chapter 5 */}
          <section id="meditation">
            <h2 className="text-2xl font-serif text-foreground mb-6">Méditation et Mantras</h2>
            <div className="prose prose-lg text-muted-foreground">
              <h3 className="text-xl font-semibold text-foreground">Techniques de Méditation</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Méditation sur la respiration</strong> - Pranayama et conscience du souffle</li>
                <li><strong className="text-foreground">Méditation sur les mantras</strong> - Japa, répétition du nom divin</li>
                <li><strong className="text-foreground">Méditation sur les formes divines</strong> - Visualisation des déités</li>
                <li><strong className="text-foreground">Méditation sur les écritures</strong> - Contemplation des textes sacrés</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Mantras Sacrés</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">OM</p>
                    <p className="text-sm text-muted-foreground">Le son primordial, vibration de l'univers</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Gayatri Mantra</p>
                    <p className="text-sm text-muted-foreground">Om Bhur Bhuva Svaha...</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Maha Mrityunjaya Mantra</p>
                    <p className="text-sm text-muted-foreground">Om Tryambakam Yajamahe...</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 6 */}
          <section id="rituels">
            <h2 className="text-2xl font-serif text-foreground mb-6">Rituels Quotidiens</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Les rituels quotidiens (<strong className="text-foreground">Nitya Karma</strong>) sont essentiels 
                pour maintenir la connexion avec le divin.
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Puja</strong> - Adoration rituelle de la divinité</li>
                <li><strong className="text-foreground">Aarti</strong> - Offrande de lumière</li>
                <li><strong className="text-foreground">Japa</strong> - Répétition du mantra (108 fois)</li>
                <li><strong className="text-foreground">Prasad</strong> - Offrande et partage de nourriture sanctifiée</li>
                <li><strong className="text-foreground">Sandhya Vandana</strong> - Prières aux trois jonctions du jour</li>
              </ul>
            </div>
          </section>

          {/* Chapter 7 */}
          <section id="realisation">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Réalisation Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Moksha</strong> (la libération) est le but ultime de la voie Ishvara. 
                C'est la réalisation de l'unité entre l'âme individuelle (Atman) et l'Âme universelle (Brahman).
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Signes de Réalisation</h3>
              <ul className="space-y-2 mt-4">
                <li>Paix intérieure permanente (Shanti)</li>
                <li>Amour inconditionnel pour tous les êtres (Prema)</li>
                <li>Absence de peur et d'attachement (Vairagya)</li>
                <li>Vision de l'unité dans la diversité (Advaita)</li>
                <li>Contentement parfait (Santosha)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Obstacles à Surmonter</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Avidya</strong> - L'ignorance spirituelle</li>
                <li><strong className="text-foreground">Asmita</strong> - L'ego et l'identification au corps</li>
                <li><strong className="text-foreground">Raga</strong> - L'attachement aux plaisirs</li>
                <li><strong className="text-foreground">Dvesha</strong> - L'aversion et la haine</li>
                <li><strong className="text-foreground">Abhinivesha</strong> - La peur de la mort</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">Conclusion</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                La voie d'Ishvara est un chemin de transformation intérieure qui nous conduit 
                de l'ignorance à la lumière, de la mort à l'immortalité, de l'illusion à la vérité.
              </p>
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground text-center">
                    "Asato ma sad gamaya<br/>
                    Tamaso ma jyotir gamaya<br/>
                    Mrityor ma amritam gamaya"
                  </p>
                  <p className="text-sm text-center mt-4 text-muted-foreground">
                    "De l'irréel, conduis-moi au réel<br/>
                    De l'obscurité, conduis-moi à la lumière<br/>
                    De la mort, conduis-moi à l'immortalité"
                  </p>
                  <p className="text-sm text-center mt-2 text-muted-foreground">- Brihadaranyaka Upanishad</p>
                </CardContent>
              </Card>
              <p>
                La transmission de ces enseignements des Vedas à travers les âges est un Dharma sacré 
                qui continue d'éclairer l'humanité dans sa quête de vérité et de réalisation.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie/mort-ayurveda">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Article précédent
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie-vedique">
                Retour à la Philosophie
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VoieHisvara;
