import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Heart, Sparkles, Music, Brain, BookOpen, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GayatriMantra = () => {
  return (
    <Layout>
      <Helmet>
        <title>Le Gayatri Mantra - Arkadhya Centre Ayurvédique</title>
        <meta name="description" content="Découvrez le Gayatri Mantra, la mère des Vedas. Signification, pratique, bienfaits et guide complet de ce mantra sacré védique." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              <span className="text-primary">LE GAYATRI MANTRA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 font-medium">
              La Mère des Védas • Vedamata
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le plus sacré et le plus puissant de tous les mantras védiques, récité depuis des millénaires pour l'illumination spirituelle et la purification de l'esprit.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-foreground mb-8">
              Écouter le Gayatri Mantra
            </h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
              <iframe 
                src="https://www.youtube.com/embed/v2QMWlVAyD8"
                title="Gayatri Mantra 108 Times"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">
              Récitation traditionnelle du Gayatri Mantra - 108 répétitions
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la Gayatri */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Sun className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                Qu'est-ce que la Gayatri ?
              </h2>
            </div>
            
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                La <strong className="text-foreground">Gayatri</strong> est appelée <strong className="text-foreground">"Vedamata"</strong>, la mère des Védas. Elle est considérée comme l'essence même de toute la connaissance védique condensée en une seule formule sacrée.
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Étymologie</h3>
                <p className="text-muted-foreground mb-4">
                  Le nom <strong className="text-foreground">Gayatri</strong> vient de deux racines sanskrites :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">"Gaya"</strong> - ce qui est chanté, le chant qui protège</li>
                  <li><strong className="text-foreground">"Tri"</strong> - trois, référence aux trois Védas (Rig, Sama, Yajur)</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Ainsi, Gayatri signifie <em>"le chant sacré qui protège celui qui le récite"</em> et qui contient l'essence des trois Védas.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                La Gayatri est aussi le nom du mètre poétique védique composé de <strong className="text-foreground">24 syllabes</strong>, divisées en trois lignes de huit syllabes chacune. Ce mètre est considéré comme le plus sacré de tous les mètres védiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les versions du Mantra */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Music className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                Les Versions du Mantra
              </h2>
            </div>

            <div className="space-y-8">
              {/* Version courte */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
                    Version Courte (Traditionnelle)
                  </h3>
                  
                  <div className="bg-background/50 rounded-xl p-6 mb-6">
                    <p className="text-center text-2xl text-primary font-medium mb-4 leading-relaxed">
                      ॐ भूर्भुवः स्वः<br />
                      तत्सवितुर्वरेण्यं<br />
                      भर्गो देवस्य धीमहि<br />
                      धियो यो नः प्रचोदयात्
                    </p>
                    <hr className="border-primary/20 my-4" />
                    <p className="text-center text-lg text-foreground italic leading-relaxed">
                      Om Bhur Bhuvah Svaha<br />
                      Tat Savitur Varenyam<br />
                      Bhargo Devasya Dhimahi<br />
                      Dhiyo Yo Nah Prachodayat
                    </p>
                  </div>

                  <div className="text-muted-foreground space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Traduction :</h4>
                    <p className="italic border-l-4 border-primary/40 pl-4">
                      "Nous méditons sur la glorieuse splendeur du Soleil divin (Savitri). Puisse-t-il illuminer nos intellects et guider nos pensées vers la connaissance suprême."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Version longue */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
                    Version Longue (Maha Gayatri)
                  </h3>
                  
                  <div className="bg-background/50 rounded-xl p-6 mb-6">
                    <p className="text-center text-lg text-foreground leading-relaxed mb-4">
                      <strong className="text-primary">Les Sept Plans d'Existence (Sapta Lokas) :</strong>
                    </p>
                    <p className="text-center text-lg text-foreground italic leading-relaxed">
                      Om Bhuh, Om Bhuvah, Om Svaha,<br />
                      Om Mahah, Om Janah, Om Tapah, Om Satyam
                    </p>
                    <hr className="border-primary/20 my-4" />
                    <p className="text-center text-lg text-foreground italic leading-relaxed">
                      Om Tat Savitur Varenyam<br />
                      Bhargo Devasya Dhimahi<br />
                      Dhiyo Yo Nah Prachodayat
                    </p>
                    <hr className="border-primary/20 my-4" />
                    <p className="text-center text-lg text-foreground italic leading-relaxed">
                      Om Apo Jyoti Raso'mritam Brahma<br />
                      Bhur Bhuvah Svar Om
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p><strong className="text-foreground">Bhuh</strong> - Plan physique (Terre)</p>
                      <p><strong className="text-foreground">Bhuvah</strong> - Plan vital (Atmosphère)</p>
                      <p><strong className="text-foreground">Svaha</strong> - Plan mental (Ciel)</p>
                      <p><strong className="text-foreground">Mahah</strong> - Plan de l'équilibre</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p><strong className="text-foreground">Janah</strong> - Plan de la création</p>
                      <p><strong className="text-foreground">Tapah</strong> - Plan de l'austérité</p>
                      <p><strong className="text-foreground">Satyam</strong> - Plan de la Vérité Absolue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Origine et Histoire */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                Origine et Histoire
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Le Gayatri Mantra trouve son origine dans le <strong className="text-foreground">Rig Veda</strong> (Mandala III, Sukta 62, Verset 10), le plus ancien des quatre Védas, datant de plus de <strong className="text-foreground">3500 ans</strong>.
              </p>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Le Rishi Vishvamitra</h3>
                  <p className="text-muted-foreground">
                    Selon la tradition, ce mantra fut révélé au sage <strong className="text-foreground">Vishvamitra</strong> lors de sa profonde méditation. Vishvamitra, dont le nom signifie "ami de l'univers", était un roi devenu ascète qui atteint l'illumination après des millénaires de pratiques austères.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    La tradition védique enseigne que les mantras ne sont pas créés par les humains mais <strong className="text-foreground">révélés</strong> aux sages en état de conscience supérieure. Les Rishis sont donc des "voyants" (drashta) qui perçoivent ces vibrations cosmiques éternelles.
                  </p>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                Depuis des millénaires, le Gayatri Mantra est transmis de maître à disciple lors de la cérémonie sacrée de l'<strong className="text-foreground">Upanayana</strong> (initiation spirituelle), marquant le début de l'étude des Védas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signification des syllabes */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                Signification des Syllabes
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Chaque mot du Gayatri Mantra porte une signification profonde et une vibration spécifique qui agit sur différents niveaux de conscience.
            </p>

            <div className="grid gap-4">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">ॐ (Om)</h4>
                      <p className="text-muted-foreground text-sm">Le son primordial, la vibration cosmique d'où tout émane. Représente Brahman, la réalité ultime.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">भूः (Bhuh)</h4>
                      <p className="text-muted-foreground text-sm">Le monde physique, la Terre. Représente le corps physique et le plan matériel.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">भुवः (Bhuvah)</h4>
                      <p className="text-muted-foreground text-sm">Le monde intermédiaire, l'atmosphère. Représente le souffle vital (Prana) et le corps subtil.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">स्वः (Svah)</h4>
                      <p className="text-muted-foreground text-sm">Le monde céleste. Représente le mental supérieur et le plan spirituel.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">तत् (Tat)</h4>
                      <p className="text-muted-foreground text-sm">"Cela" - référence à l'Absolu indescriptible, au-delà de toute qualification.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">सवितुः (Savitur)</h4>
                      <p className="text-muted-foreground text-sm">Savitri, le Soleil divin, source de toute lumière et énergie créatrice.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">वरेण्यं (Varenyam)</h4>
                      <p className="text-muted-foreground text-sm">Digne d'adoration, le plus excellent, suprêmement désirable.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">भर्गः (Bhargo)</h4>
                      <p className="text-muted-foreground text-sm">La splendeur radieuse, la lumière qui dissipe toute obscurité.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">देवस्य (Devasya)</h4>
                      <p className="text-muted-foreground text-sm">Du Divin, de la Déité, de la Source lumineuse.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">धीमहि (Dhimahi)</h4>
                      <p className="text-muted-foreground text-sm">Nous méditons, nous contemplons avec dévotion.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">धियः (Dhiyo)</h4>
                      <p className="text-muted-foreground text-sm">Notre intellect, notre compréhension, notre conscience discriminante.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">यो नः प्रचोदयात् (Yo Nah Prachodayat)</h4>
                      <p className="text-muted-foreground text-sm">Puisse-t-il nous inspirer, nous guider, éveiller notre conscience.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Les effets du mantra */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                Les Effets du Mantra
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              La récitation régulière du Gayatri Mantra produit des effets multidimensionnels sur l'être humain, touchant tous les niveaux de l'existence.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Effets Physiologiques</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Régulation du système nerveux</li>
                    <li>• Amélioration de la respiration</li>
                    <li>• Équilibrage hormonal</li>
                    <li>• Renforcement du système immunitaire</li>
                    <li>• Harmonisation des rythmes biologiques</li>
                    <li>• Stimulation des glandes endocrines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Effets Psychologiques</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Clarté mentale accrue</li>
                    <li>• Stabilité émotionnelle</li>
                    <li>• Réduction du stress et de l'anxiété</li>
                    <li>• Amélioration de la concentration</li>
                    <li>• Développement de l'intuition</li>
                    <li>• Paix intérieure profonde</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Effets Spirituels</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Éveil de la conscience supérieure</li>
                    <li>• Purification des karmas</li>
                    <li>• Connexion au divin intérieur</li>
                    <li>• Développement de la sagesse</li>
                    <li>• Protection spirituelle</li>
                    <li>• Expansion de la conscience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guide de pratique */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                Guide de Pratique
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">La Récitation (Japa)</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      La pratique du Gayatri Mantra s'appelle <strong className="text-foreground">Japa</strong>, la récitation répétée. Elle peut se faire de trois manières :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-foreground">Vachika</strong> - Récitation à voix haute</li>
                      <li><strong className="text-foreground">Upamshu</strong> - Récitation murmurée (lèvres qui bougent)</li>
                      <li><strong className="text-foreground">Manasika</strong> - Récitation mentale silencieuse (la plus puissante)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Le Mala (Chapelet)</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Traditionnellement, on utilise un <strong className="text-foreground">Mala</strong> (chapelet) de 108 grains pour compter les récitations. Le nombre 108 est sacré :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>1 représente le Divin unique</li>
                      <li>0 représente le vide cosmique (Shunya)</li>
                      <li>8 représente l'infini (∞ couché)</li>
                      <li>108 = 12 maisons astrologiques × 9 planètes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Fréquence de Pratique</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Les nombres traditionnels de récitations :</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">108</p>
                        <p className="text-sm">Minimum sacré</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">324</p>
                        <p className="text-sm">3 × 108</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">540</p>
                        <p className="text-sm">5 × 108</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary">1080</p>
                        <p className="text-sm">10 × 108</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Moments Propices</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Les meilleurs moments pour la pratique sont les <strong className="text-foreground">Sandhyas</strong> (jonctions) de la journée :
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-orange-500/10 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">🌅 Brahma Muhurta</h4>
                        <p className="text-sm">4h - 6h du matin<br />Le moment le plus sacré</p>
                      </div>
                      <div className="bg-yellow-500/10 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">☀️ Midi</h4>
                        <p className="text-sm">12h<br />Jonction du jour</p>
                      </div>
                      <div className="bg-indigo-500/10 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">🌅 Crépuscule</h4>
                        <p className="text-sm">Au coucher du soleil<br />Transition vers la nuit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-6">
              Approfondir Votre Pratique
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              La pratique du Gayatri Mantra s'inscrit dans un chemin spirituel plus large. Découvrez nos enseignements sur la philosophie védique et nos accompagnements personnalisés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/philosophie-vedique">
                  Philosophie Védique <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Nous Contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GayatriMantra;
