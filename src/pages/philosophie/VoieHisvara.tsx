import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";

const chapters = [
  { id: "introduction", title: "Introduction" },
  { id: "ishvara", title: "Qui est Ishvara ?" },
  { id: "noms-formes", title: "Noms et Formes" },
  { id: "science", title: "Ishvara et Science" },
  { id: "bhakti", title: "La Voie de la Dévotion" },
  { id: "surrender", title: "L'Art de l'Abandon" },
  { id: "meditation", title: "Méditation et Mantras" },
  { id: "rituels", title: "Rituels Quotidiens" },
  { id: "integration", title: "Intégration Quotidienne" },
  { id: "realisation", title: "La Réalisation Spirituelle" },
  { id: "obstacles", title: "Les Obstacles" },
  { id: "pratiques", title: "Pratiques Avancées" },
  { id: "conclusion", title: "Conclusion" },
];

const VoieIshvara = () => {
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
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                La voie Ishvara est une doctrine spirituelle qui trouve ses origines dans les enseignements 
                des anciens sages de l'Inde. Elle vise à atteindre l'éveil spirituel et la réalisation de soi 
                à travers la méditation, la prière et la pratique du yoga.
              </p>
              <p>
                La voie Ishvara met l'accent sur la connexion entre l'individu et l'univers, et cherche à établir 
                une harmonie entre le corps, l'esprit et l'âme. Les adeptes de cette voie cherchent à transcender les limites 
                de l'ego et à développer une perception plus profonde de la réalité.
              </p>
              <p>
                Ils croient en la présence d'une force supérieure, l'Ishvara, qui guide leur chemin et leur confère sagesse et guidance. 
                La voie Ishvara offre ainsi un chemin vers la paix intérieure et l'illumination spirituelle.
              </p>
            </div>
          </section>

          {/* Chapter 1 - Qui est Ishvara ? */}
          <section id="ishvara">
            <h2 className="text-2xl font-serif text-foreground mb-6">Chapitre 1 : Qui est Ishvara ?</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">Définitions clés</h3>
              <p>
                <strong className="text-foreground">Ishvara</strong> est un concept central dans la philosophie hindoue, 
                souvent traduit par "Seigneur" ou "Maître suprême". Dans les textes védiques, Ishvara est décrit comme 
                la conscience divine universelle, à la fois immanente et transcendante. Il est le principe organisateur de l'univers, 
                maintenant l'ordre cosmique (Dharma) et guidant les êtres vers la libération (Moksha).
              </p>
              <p>
                Dans l'Advaita Vedanta, une école de philosophie hindoue, Ishvara est souvent assimilé à <strong className="text-foreground">Brahman</strong>, 
                la réalité ultime et absolue. Brahman est sans forme, sans attributs (Nirguna), et est la source de tout ce qui existe. 
                Cependant, pour les dévots, Ishvara est souvent perçu avec des attributs (Saguna), sous la forme de dieux et de déesses, 
                permettant une relation personnelle et dévotionnelle.
              </p>
              <p>
                L'<strong className="text-foreground">Atman</strong>, ou l'âme individuelle, est considéré comme une manifestation de Brahman. 
                La réalisation spirituelle implique la compréhension que l'Atman et Brahman sont un et le même, 
                une vérité exprimée par la phrase "Tat Tvam Asi" ("Tu es Cela") dans les Chandogya Upanishads.
              </p>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "Par Moi, dans Ma forme non manifestée, tout cet univers est pénétré. 
                    Tous les êtres sont en Moi, mais Je ne suis pas en eux."
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">- Bhagavad Gita 9.4</p>
                </CardContent>
              </Card>
              
              <p>
                <strong className="text-foreground">Brahma Sutras (1.1.4)</strong> : "Ishvara est le Seigneur qui gouverne le monde avec justice, comme un roi bienveillant."
              </p>
              <p>
                <strong className="text-foreground">Katha Upanishad (2.2.15)</strong> : "Par Sa lumière, tout brille."
              </p>
            </div>
          </section>

          {/* Chapter 2 - Les Noms et Formes d'Ishvara */}
          <section id="noms-formes">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Noms et Formes d'Ishvara</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Ishvara se manifeste sous diverses formes, chacune représentant un aspect différent de la divinité. 
                Ces formes permettent aux dévots de se connecter à Ishvara de manière personnelle et intime.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">La Trimurti : Brahma, Vishnu, Shiva</h3>
              <p>
                La Trimurti représente les trois aspects fondamentaux de la divinité : la création, la préservation et la destruction.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Brahma</h4>
                    <p className="text-sm text-muted-foreground">Le Créateur de l'univers. Représenté avec quatre têtes, symbolisant les quatre Vedas et les quatre directions.</p>
                    <p className="text-xs mt-2 italic">Mantra : "Om Brahmanye Namah"</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Vishnu</h4>
                    <p className="text-sm text-muted-foreground">Le Préservateur de l'univers. Il maintient l'ordre cosmique (Dharma) et intervient pour rétablir l'équilibre.</p>
                    <p className="text-xs mt-2 italic">Mantra : "Om Namo Narayanaya"</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Shiva</h4>
                    <p className="text-sm text-muted-foreground">Le Destructeur et Transformateur. Il représente la destruction nécessaire pour la renaissance.</p>
                    <p className="text-xs mt-2 italic">Mantra : "Om Namah Shivaya"</p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Déesses : Manifestations de la Shakti</h3>
              <p>
                La Shakti est l'énergie divine féminine, la force active d'Ishvara. Sans Shakti, Ishvara est inactif, comme un feu sans chaleur.
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Parvati</strong> - Épouse de Shiva, représente l'amour et la dévotion</li>
                <li><strong className="text-foreground">Durga</strong> - La guerrière qui combat le mal, représente la victoire sur l'ignorance (Avidya)</li>
                <li><strong className="text-foreground">Lakshmi</strong> - Déesse de la prospérité, tant matérielle que spirituelle</li>
                <li><strong className="text-foreground">Saraswati</strong> - Déesse de la sagesse et des arts, représente la connaissance (Vidya)</li>
                <li><strong className="text-foreground">Kali</strong> - Déesse qui détruit les illusions, représente la transformation radicale</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Avatars : Ishvara Incarné</h3>
              <p>
                Les avatars sont des incarnations d'Ishvara qui descendent sur Terre pour rétablir le Dharma et guider l'humanité.
              </p>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Rama</strong> - Le roi idéal, connu pour son respect du Dharma. Son histoire est racontée dans le Ramayana.</li>
                <li><strong className="text-foreground">Krishna</strong> - Le guide spirituel, connu pour ses enseignements dans la Bhagavad Gita. Il incarne l'amour divin et la joie.</li>
                <li><strong className="text-foreground">Buddha</strong> - Reconnu comme un avatar de Vishnu dans certaines traditions. Il enseigne la compassion et la méditation.</li>
                <li><strong className="text-foreground">Kalki</strong> - L'avatar futur qui viendra à la fin du Kali Yuga pour rétablir le Dharma.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 3 - Ishvara et la Science Moderne */}
          <section id="science">
            <h2 className="text-2xl font-serif text-foreground mb-6">Ishvara et la Science Moderne</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les concepts védiques trouvent des échos dans la science moderne, notamment en physique quantique et en neurosciences.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">Parallèles avec la Physique Quantique</h3>
              <p>
                <strong className="text-foreground">Champ Unifié</strong> : En physique quantique, le concept de champ unifié suggère que toutes les forces 
                et particules de l'univers sont des manifestations d'un seul champ fondamental. Cela ressemble à la vision védique 
                d'Ishvara comme principe unique à l'origine de toute la diversité de l'univers.
              </p>
              <Card className="my-4 bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <p className="italic text-foreground text-sm">
                    "La matière est dérivée de la conscience."
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">- Max Planck, père de la physique quantique</p>
                </CardContent>
              </Card>
              <p>
                <strong className="text-foreground">Interconnexion</strong> : La physique quantique montre que les particules sont interconnectées 
                à un niveau fondamental (intrication quantique). Cela reflète la vision védique de l'unité de toute la création.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Comparaisons avec les Neurosciences</h3>
              <p>
                <strong className="text-foreground">Conscience</strong> : Les neurosciences explorent la nature de la conscience, 
                un sujet central dans les textes védiques. La conscience est souvent considérée comme un mystère en neurosciences, 
                tout comme elle est vue comme un aspect fondamental de la réalité dans les Vedas.
              </p>
              <p>
                <strong className="text-foreground">Méditation et Cerveau</strong> : Les études sur la méditation montrent que cette pratique 
                peut modifier la structure et la fonction du cerveau, améliorant la santé mentale et le bien-être.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Limites de la Science</h3>
              <p>
                La science se concentre sur le "comment" de la réalité, tandis que les Vedas révèlent le "qui" et le "pourquoi". 
                Ishvara n'est pas un objet d'étude, mais l'observateur lui-même. La réalisation d'Ishvara doit être vécue et expérimentée directement.
              </p>
            </div>
          </section>

          {/* Chapter 4 - La Voie de la Dévotion */}
          <section id="bhakti">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Voie de la Dévotion (Bhakti Yoga)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                La <strong className="text-foreground">Bhakti</strong>, ou dévotion, est l'un des chemins principaux vers la réalisation spirituelle. 
                Elle est souvent décrite comme la voie de l'amour et de la dévotion envers Ishvara. Contrairement à d'autres chemins spirituels 
                qui peuvent être complexes et exigeants, la Bhakti est accessible à tous.
              </p>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "Mais pour ceux qui M'adorent, offrant tout leur amour et leur dévotion, 
                    Je porte leurs fardeaux et Je les libère de tous leurs maux."
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">- Bhagavad Gita 12.6-7</p>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Les Neuf Formes de Bhakti (Navavidha Bhakti)</h3>
              <ol className="space-y-3 mt-4">
                <li><strong className="text-foreground">Shravana (Écoute)</strong> - Écouter les récits des dieux, des déesses, et des saints. Lire ou écouter des récits spirituels chaque jour.</li>
                <li><strong className="text-foreground">Kirtana (Chant)</strong> - Chanter les louanges d'Ishvara, sous forme de bhajans ou de mantras.</li>
                <li><strong className="text-foreground">Smarana (Souvenir)</strong> - Se souvenir constamment d'Ishvara et de Ses qualités tout au long de la journée.</li>
                <li><strong className="text-foreground">Pada-sevana (Service aux pieds)</strong> - Servir les pieds du Seigneur, symboliquement en servant les saints et les dévots.</li>
                <li><strong className="text-foreground">Archana (Adoration)</strong> - Offrir des fleurs, de l'encens, et d'autres offrandes à Ishvara pendant le culte (puja).</li>
                <li><strong className="text-foreground">Vandana (Prosternation)</strong> - Se prosterner devant Ishvara ou Ses représentations, en signe de respect et de dévotion.</li>
                <li><strong className="text-foreground">Dasya (Serviteur)</strong> - Servir Ishvara comme un serviteur fidèle, considérer toutes ses actions comme un service.</li>
                <li><strong className="text-foreground">Sakhya (Amitié)</strong> - Voir Ishvara comme un ami intime et partager une relation d'amitié avec Lui.</li>
                <li><strong className="text-foreground">Atma-nivedana (Offrande de soi)</strong> - Offrir complètement son être à Ishvara, sans réserve.</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Exemples de Saints et de Dévots</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Chaitanya Mahaprabhu</h4>
                    <p className="text-sm text-muted-foreground">
                      Un saint du 15ème siècle connu pour son amour intense pour Krishna. Il a popularisé le chant du "Hare Krishna" mantra 
                      et a enseigné que l'amour pour Dieu est la voie la plus élevée vers la libération.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Meerabai</h4>
                    <p className="text-sm text-muted-foreground">
                      Une princesse et poétesse du 16ème siècle profondément dévouée à Krishna. 
                      Elle a renoncé à son statut royal pour se consacrer à la dévotion, et ses chants sont encore populaires aujourd'hui.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Tulsidas</h4>
                    <p className="text-sm text-muted-foreground">
                      Un poète et saint du 16ème siècle connu pour le Ramcharitmanas, une version en langue vernaculaire du Ramayana. 
                      Il a enseigné la puissance de la dévotion et de la répétition du nom divin (Nama Japa).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Chapter 5 - L'Art de l'Abandon */}
          <section id="surrender">
            <h2 className="text-2xl font-serif text-foreground mb-6">L'Art de l'Abandon (Sharanagati)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Sharanagati</strong>, ou l'abandon à Ishvara, est un concept central dans la Bhakti Yoga. 
                Il implique une soumission complète et une confiance totale en Ishvara. Contrairement à la soumission passive, 
                Sharanagati est un acte de foi et de confiance active.
              </p>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "Abandonne toutes les variétés de dharma et simplement abandonne-toi à Moi. 
                    Je te libèrerai de toutes les conséquences de tes actions ; ne t'inquiète pas."
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">- Bhagavad Gita 18.66</p>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Éléments clés de Sharanagati</h3>
              <ol className="space-y-2 mt-4">
                <li><strong className="text-foreground">Reconnaissance de la Souveraineté d'Ishvara</strong> - Comprendre qu'Ishvara est le maître suprême de tout.</li>
                <li><strong className="text-foreground">Confiance Totale</strong> - Avoir une foi inébranlable en la sagesse et la compassion d'Ishvara.</li>
                <li><strong className="text-foreground">Abandon des Attachements</strong> - Lâcher prise sur les résultats des actions et sur les désirs personnels.</li>
                <li><strong className="text-foreground">Service Désintéressé</strong> - Agir sans attente de récompense, en offrant toutes ses actions à Ishvara.</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Exemples Historiques</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Prahlada</h4>
                    <p className="text-sm text-muted-foreground">
                      Un jeune garçon dévot de Vishnu malgré les persécutions de son père démoniaque Hiranyakashipu. 
                      Sa dévotion inébranlable a conduit Vishnu à intervenir sous la forme de Narasimha pour le protéger.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Dhruva</h4>
                    <p className="text-sm text-muted-foreground">
                      Un jeune prince rejeté par son père qui s'est retiré dans la forêt pour méditer sur Vishnu. 
                      Après une longue pénitence, Vishnu lui a accordé une place éternelle dans le ciel sous forme de l'étoile polaire.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Pratiques pour Cultiver l'Abandon</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Méditation sur l'Abandon</strong> - Visualisez-vous en train de remettre tous vos soucis à Ishvara.</li>
                <li><strong className="text-foreground">Pratique du Lâcher-Prise</strong> - Offrez chaque action à Ishvara avant de l'entreprendre.</li>
                <li><strong className="text-foreground">Réflexion sur les Écritures</strong> - Lisez et méditez sur des passages de la Bhagavad Gita (chapitres 12 et 18).</li>
              </ul>
            </div>
          </section>

          {/* Chapter 6 - Méditation et Mantras */}
          <section id="meditation">
            <h2 className="text-2xl font-serif text-foreground mb-6">Méditation et Mantras</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                La méditation est une pratique centrale dans de nombreuses traditions spirituelles. 
                Elle permet de calmer l'esprit, de cultiver la concentration, et de se connecter à Ishvara.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Techniques de Méditation</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Méditation sur la Respiration (Pranayama)</h4>
                    <p className="text-sm text-muted-foreground">
                      Asseyez-vous confortablement, fermez les yeux, et concentrez-vous sur votre respiration. 
                      Observez l'air qui entre et sort de vos narines. Chaque fois que votre esprit s'égare, 
                      ramenez doucement votre attention sur votre respiration.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Méditation sur les Mantras</h4>
                    <p className="text-sm text-muted-foreground">
                      Choisissez un mantra qui résonne avec vous, comme "Om Namah Shivaya" ou "Hare Krishna". 
                      Répétez-le mentalement ou à voix basse, en vous concentrant sur son son et sa signification.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Méditation sur les Formes Divines</h4>
                    <p className="text-sm text-muted-foreground">
                      Visualisez la forme d'Ishvara que vous préférez. Imaginez chaque détail de Sa forme, 
                      de Ses vêtements, et de Son environnement. Concentrez-vous sur cette image et ressentez Sa présence.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Méditation sur les Écritures</h4>
                    <p className="text-sm text-muted-foreground">
                      Choisissez un verset d'un texte sacré, comme la Bhagavad Gita ou les Upanishads. 
                      Lisez-le attentivement, puis asseyez-vous en méditation et réfléchissez à sa signification.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mantras Sacrés et Leur Signification</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Om Namah Shivaya</p>
                    <p className="text-sm text-muted-foreground">"Je m'incline devant Shiva, la conscience suprême." Mantra de purification et de réalisation spirituelle.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Om Namo Narayanaya</p>
                    <p className="text-sm text-muted-foreground">"Je m'incline devant Narayana, la source de tout." Mantra dédié à Vishnu pour invoquer sa présence.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Om Sri Ram Jaya Ram Jaya Jaya Ram</p>
                    <p className="text-sm text-muted-foreground">"Victoire à Sri Ram, gloire à Ram." Mantra dédié à Rama pour cultiver la dévotion et la paix intérieure.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Hare Krishna Mahamantra</p>
                    <p className="text-sm text-muted-foreground">Invocation à Krishna et Rama, considéré comme un moyen puissant de cultiver la dévotion et d'atteindre la réalisation spirituelle.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">Om</p>
                    <p className="text-sm text-muted-foreground">Le son primordial, représentant la réalité ultime. Utilisé pour se connecter à la conscience universelle.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Pratiques Quotidiennes</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Méditation du Matin</strong> - 10 à 20 minutes chaque matin pour bien commencer la journée.</li>
                <li><strong className="text-foreground">Répétition de Mantras (Japa)</strong> - Répétez un mantra 108 fois avec un mala chaque matin et soir.</li>
                <li><strong className="text-foreground">Méditation du Soir</strong> - Réfléchissez sur les événements de la journée et connectez-vous à Ishvara avant de dormir.</li>
                <li><strong className="text-foreground">Méditation en Marche</strong> - Répétez un mantra mentalement pendant que vous marchez.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 7 - Rituels Quotidiens */}
          <section id="rituels">
            <h2 className="text-2xl font-serif text-foreground mb-6">Rituels Quotidiens</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Les rituels jouent un rôle crucial dans la pratique spirituelle. Ils fournissent une structure et une discipline 
                qui aident à cultiver la dévotion et la connexion avec Ishvara.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Exemples de Rituels Quotidiens</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Puja (Culte)</h4>
                    <p className="text-sm text-muted-foreground">
                      Chaque matin, allumez une lampe (diya) devant une image ou une statue d'Ishvara. 
                      Offrez des fleurs, de l'encens, et de la nourriture. Récitez des prières ou des mantras.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Aarti</h4>
                    <p className="text-sm text-muted-foreground">
                      Chaque soir, allumez une lampe et faites-la circuler devant une image d'Ishvara 
                      tout en chantant un aarti comme "Om Jai Jagdish Hare".
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Japa (Répétition de Mantras)</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilisez un mala pour répéter un mantra 108 fois chaque jour pour cultiver la concentration et la dévotion.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Naivedya (Offrandes de Nourriture)</h4>
                    <p className="text-sm text-muted-foreground">
                      Avant chaque repas, offrez une portion de votre nourriture à Ishvara en la plaçant 
                      devant une image ou une statue. Récitez une brève prière avant de manger.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Snana (Bain Rituel)</h4>
                    <p className="text-sm text-muted-foreground">
                      Avant de prendre votre douche, offrez une prière à Ishvara pour purifier votre corps et votre esprit.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Créer ses Propres Rituels</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Rituel du Matin</strong> - Courte prière ou méditation pour définir une intention pour la journée.</li>
                <li><strong className="text-foreground">Rituel du Soir</strong> - Réflexion sur les événements et prière de gratitude envers Ishvara.</li>
                <li><strong className="text-foreground">Rituel de la Nature</strong> - Promenade dans la nature pour se connecter à Ishvara à travers la création.</li>
                <li><strong className="text-foreground">Rituel de Service</strong> - Consacrez une journée par mois à servir les nécessiteux ou à visiter des personnes en soin palliatif.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 8 - Intégration dans la Vie Quotidienne */}
          <section id="integration">
            <h2 className="text-2xl font-serif text-foreground mb-6">Intégration dans la Vie Quotidienne</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">Dans la Vie Professionnelle</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Offrir son Travail à Ishvara</strong> - Considérez votre travail comme une offrande à Ishvara. Voyez chaque tâche comme une opportunité de servir le divin.</li>
                <li><strong className="text-foreground">Cultiver la Présence</strong> - Soyez pleinement présent dans chaque tâche, en voyant chaque action comme une offrande.</li>
                <li><strong className="text-foreground">Bienveillance et Compassion</strong> - Traitez vos collègues avec bienveillance, en voyant Ishvara en eux.</li>
                <li><strong className="text-foreground">Pauses Spirituelles</strong> - Prenez de courtes pauses pour méditer ou répéter un mantra.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dans la Vie Personnelle</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Pratiquer la Gratitude</strong> - Avant de dormir, écrivez trois choses pour lesquelles vous êtes reconnaissant à Ishvara.</li>
                <li><strong className="text-foreground">Relations Harmonieuses</strong> - Traitez vos proches avec amour et respect, en voyant Ishvara en eux.</li>
                <li><strong className="text-foreground">Pratiquer le Détachement</strong> - Apprenez à lâcher prise sur les résultats et à faire confiance à Ishvara.</li>
                <li><strong className="text-foreground">Créer un Espace Sacré</strong> - Aménagez un petit autel dans votre maison avec des images d'Ishvara, des bougies, et des encens.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Gérer les Défis et les Crises</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Voir les Défis comme des Opportunités</strong> - Demandez-vous : "Qu'est-ce que cette situation m'enseigne ?"</li>
                <li><strong className="text-foreground">Pratiquer l'Abandon</strong> - Dans les moments de crise, abandonnez vos soucis à Ishvara.</li>
                <li><strong className="text-foreground">Méditer sur l'Impermanence</strong> - Rappelez-vous que tout est temporaire et que les défis passeront.</li>
                <li><strong className="text-foreground">Chercher la Guidance</strong> - Lisez un passage de la Bhagavad Gita pendant les périodes difficiles.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 9 - La Réalisation Spirituelle */}
          <section id="realisation">
            <h2 className="text-2xl font-serif text-foreground mb-6">La Réalisation Spirituelle (Moksha)</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                La réalisation spirituelle, ou <strong className="text-foreground">moksha</strong>, est l'objectif ultime de la vie spirituelle 
                dans la tradition hindoue. Elle représente la libération de l'âme individuelle (atman) du cycle des naissances et des morts (samsara), 
                et l'union avec la réalité ultime, ou Brahman.
              </p>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="italic text-foreground">
                    "Tat tvam asi" (Tu es Cela)
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">
                    Cette déclaration indique que l'âme individuelle est en réalité identique à la réalité ultime, Brahman.
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">- Chandogya Upanishad</p>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Moksha vs Kaivalya</h3>
              <p>
                <strong className="text-foreground">Moksha</strong> (Advaita Vedanta) : Réalisation de l'unité de l'âme individuelle (atman) avec Brahman. 
                Il n'y a pas de dualité ; l'âme réalise qu'elle n'est pas différente de la réalité ultime.
              </p>
              <p>
                <strong className="text-foreground">Kaivalya</strong> (Yoga et Samkhya) : État d'isolation où l'âme individuelle (purusha) 
                se libère de l'influence de la matière (prakriti) et réalise sa nature distincte et pure.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Signes de la Réalisation Spirituelle</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Paix Intérieure et Détachement</strong> - Rester imperturbable face aux gains et aux pertes.</li>
                <li><strong className="text-foreground">Amour et Compassion Universels</strong> - Voir Ishvara dans chaque être vivant.</li>
                <li><strong className="text-foreground">Sagesse et Discernement</strong> - Distinguer la réalité de l'illusion.</li>
                <li><strong className="text-foreground">Joie et Félicité Intérieures</strong> - Joie qui ne dépend pas des circonstances extérieures.</li>
                <li><strong className="text-foreground">Absence de Peur</strong> - Comprendre la nature éternelle de l'âme.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 10 - Les Obstacles */}
          <section id="obstacles">
            <h2 className="text-2xl font-serif text-foreground mb-6">Les Obstacles sur le Chemin Spirituel</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">L'Ego (Ahamkara)</h4>
                    <p className="text-sm text-muted-foreground">
                      Le sens du "je" et du "mien" qui nous fait nous identifier à notre corps, à notre esprit, et à nos possessions. 
                      Il nous maintient dans l'illusion de la séparation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Les Désirs (Kama)</h4>
                    <p className="text-sm text-muted-foreground">
                      Les désirs matériels et sensuels nous attachent au monde matériel et nous empêchent 
                      de réaliser notre véritable nature spirituelle.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Les Attachements (Moha)</h4>
                    <p className="text-sm text-muted-foreground">
                      Les attachements aux personnes, aux possessions, et aux résultats de nos actions 
                      nous maintiennent dans le cycle de la naissance et de la mort.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">L'Ignorance (Avidya)</h4>
                    <p className="text-sm text-muted-foreground">
                      L'ignorance de notre véritable nature spirituelle est la racine de tous les autres obstacles. 
                      Elle nous fait croire que nous sommes séparés de Brahman.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">La Peur (Bhaya)</h4>
                    <p className="text-sm text-muted-foreground">
                      La peur de la mort, de la souffrance, ou de l'inconnu nous maintient dans un état d'anxiété 
                      et nous empêche de réaliser notre véritable nature.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Stratégies pour Surmonter les Obstacles</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Cultiver la Connaissance (Jnana)</strong> - Étude des textes sacrés et réflexion sur leur signification.</li>
                <li><strong className="text-foreground">Pratiquer le Détachement (Vairagya)</strong> - Observer ses désirs sans s'y identifier.</li>
                <li><strong className="text-foreground">Développer la Dévotion (Bhakti)</strong> - Purifier l'esprit par la dévotion envers Ishvara.</li>
                <li><strong className="text-foreground">Pratiquer la Méditation (Dhyana)</strong> - Calmer l'esprit et surmonter l'ego, les désirs, et la peur.</li>
                <li><strong className="text-foreground">Servir les Autres (Seva)</strong> - Cultiver l'humilité et réduire l'influence de l'ego.</li>
              </ul>
            </div>
          </section>

          {/* Chapter 11 - Pratiques Avancées */}
          <section id="pratiques">
            <h2 className="text-2xl font-serif text-foreground mb-6">Pratiques pour Atteindre la Réalisation Spirituelle</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">Techniques Avancées de Méditation</h3>
              <div className="space-y-4 mt-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Méditation sur l'Atman</h4>
                    <p className="text-sm text-muted-foreground">
                      Concentrez-vous sur la question : "Qui suis-je ?" Essayez de percevoir votre véritable nature au-delà du corps et de l'esprit.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Méditation sur les Chakras</h4>
                    <p className="text-sm text-muted-foreground">
                      Concentrez-vous sur chaque chakra, du muladhara au sahasrara. Visualisez chaque chakra comme une roue de lumière 
                      et sentez l'énergie monter à travers votre colonne vertébrale.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Mantra Yoga Avancé</h4>
                    <p className="text-sm text-muted-foreground">
                      Répétez des mantras sacrés comme "Om" ou "Om Namah Shivaya" pendant de longues périodes 
                      pour purifier les impuretés karmiques et réaliser l'unité avec la réalité ultime.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">Bhakti Yoga Avancé</h4>
                    <p className="text-sm text-muted-foreground">
                      Chantez des noms divins (nama sankirtana), participez à des cérémonies de culte (puja), 
                      et servez Ishvara avec amour et dévotion pour cultiver un amour pur et désintéressé.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">L'importance du Service Désintéressé (Seva)</h3>
              <p>
                Le seva et la compassion aident à purifier le cœur et à cultiver un sentiment d'unité avec tous les êtres. 
                Ils sont considérés comme des moyens puissants pour atteindre la réalisation spirituelle.
              </p>
              <ul className="space-y-2 mt-4">
                <li>Offrir son temps, ses compétences, et ses ressources pour aider les autres sans attendre de récompense.</li>
                <li>Cultiver un sentiment de compassion envers tous les êtres, en voyant Ishvara en eux.</li>
                <li>Donner sans attendre de reconnaissance ou de récompense.</li>
                <li>Participer à des activités qui bénéficient à la communauté.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Le Rôle du Guru et de la Grâce Divine</h3>
              <p>
                Le <strong className="text-foreground">guru</strong> (maître spirituel) et la grâce divine jouent un rôle crucial 
                dans la réalisation spirituelle. Le guru enseigne les vérités spirituelles, initie le disciple aux pratiques spirituelles, 
                et fournit une guidance personnelle.
              </p>
              <p>
                La <strong className="text-foreground">grâce divine (Kripa)</strong> est la bénédiction d'Ishvara qui aide le chercheur spirituel 
                à surmonter les obstacles. Elle peut se manifester sous forme d'intuition, de synchronicités, 
                ou d'expériences mystiques qui guident le chercheur sur le chemin spirituel.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-serif text-foreground mb-6">Conclusion</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Dans ce document, nous avons exploré les enseignements des Vedas et leur pertinence dans la vie moderne. 
                Nous avons abordé la compréhension d'Ishvara, les pratiques spirituelles, la réalisation spirituelle, 
                et la transmission des enseignements des Vedas.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Intégration des Enseignements dans la Vie Quotidienne</h3>
              <ul className="space-y-2 mt-4">
                <li><strong className="text-foreground">Méditation et Mantras</strong> - Pratiquez la méditation régulièrement et utilisez des mantras pour cultiver la paix intérieure.</li>
                <li><strong className="text-foreground">Rituels Quotidiens</strong> - Intégrez des rituels spirituels dans votre routine quotidienne.</li>
                <li><strong className="text-foreground">Principes Védiques</strong> - Appliquez la non-violence (ahimsa), la vérité (satya), et la compassion (karuna) dans vos interactions quotidiennes.</li>
                <li><strong className="text-foreground">Éducation et Transmission</strong> - Partagez les enseignements des Vedas avec vos enfants et votre communauté.</li>
                <li><strong className="text-foreground">Communautés Spirituelles</strong> - Rejoignez ou créez une communauté spirituelle pour partager vos expériences.</li>
              </ul>
              
              <Card className="my-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <p className="italic text-foreground text-lg mb-4">
                    "Asato ma sad gamaya<br/>
                    Tamaso ma jyotir gamaya<br/>
                    Mrityor ma amritam gamaya"
                  </p>
                  <p className="text-foreground mt-4">
                    "De l'irréel, conduis-moi au réel<br/>
                    De l'obscurité, conduis-moi à la lumière<br/>
                    De la mort, conduis-moi à l'immortalité"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- Brihadaranyaka Upanishad</p>
                </CardContent>
              </Card>
              
              <p>
                La transmission des enseignements des Vedas est essentielle pour préserver notre héritage spirituel, 
                cultiver une société plus harmonieuse, renforcer notre connexion spirituelle, et adapter ces enseignements aux temps modernes. 
                En intégrant les principes des Vedas dans notre vie quotidienne et en partageant ces enseignements avec les autres, 
                nous pouvons contribuer à créer un monde plus paisible, plus juste, et plus spirituel.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/philosophie/mort-ayurveda" onClick={() => window.scrollTo(0, 0)}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Article précédent
              </Link>
            </Button>
            <Button asChild>
              <Link to="/philosophie-vedique" onClick={() => window.scrollTo(0, 0)}>
                Retour à la Philosophie
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VoieIshvara;