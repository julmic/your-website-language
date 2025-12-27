import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Heart, Sparkles, Music, Brain, BookOpen, Clock, ArrowRight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import sriYantraImg from "@/assets/enseignements/sri-yantra.webp";
import gayatriDeviImg from "@/assets/enseignements/gayatri-devi.webp";
import gayatriMantraCorpsImg from "@/assets/enseignements/gayatri-mantra-corps.webp";
import { getGayatriMantraContent } from "@/lib/enseignements-loader";
import ReactMarkdown from "react-markdown";

const GayatriMantra = () => {
  const content = getGayatriMantraContent();

  // Fallback values
  const title = content?.title || "LE GAYATRI MANTRA";
  const subtitle = content?.subtitle || "La Mère des Védas • Vedamata";
  const metaTitle = content?.metaTitle || "Le Gayatri Mantra - Arkadhya Centre Ayurvédique";
  const metaDescription = content?.metaDescription || "Découvrez le Gayatri Mantra, la mère des Vedas.";
  const heroDescription = content?.heroDescription || "Le plus sacré et le plus puissant de tous les mantras védiques.";
  
  const youtubeVideoId = content?.youtubeVideoId || "v2QMWlVAyD8";
  const youtubeVideoTitle = content?.youtubeVideoTitle || "Gayatri Mantra 108 Times";
  const youtubeVideoCaption = content?.youtubeVideoCaption || "Récitation traditionnelle du Gayatri Mantra";
  
  const whatIsGayatriTitle = content?.whatIsGayatriTitle || "Qu'est-ce que la Gayatri ?";
  const whatIsGayatriText = content?.whatIsGayatriText || "";
  const etymologyTitle = content?.etymologyTitle || "Étymologie";
  const etymologyText = content?.etymologyText || "";
  
  const versionsTitle = content?.versionsTitle || "Les Versions du Mantra";
  const shortVersionTitle = content?.shortVersionTitle || "Version Courte (Traditionnelle)";
  const shortVersionSanskrit = content?.shortVersionSanskrit || "";
  const shortVersionTranslit = content?.shortVersionTranslit || "";
  const shortVersionTranslation = content?.shortVersionTranslation || "";
  const longVersionTitle = content?.longVersionTitle || "Version Longue (Maha Gayatri)";
  const longVersionIntro = content?.longVersionIntro || "";
  const longVersionPart1 = content?.longVersionPart1 || "";
  const longVersionPart2 = content?.longVersionPart2 || "";
  const longVersionPart3 = content?.longVersionPart3 || "";
  const saptaLokas = content?.saptaLokas || [];
  
  const subtleBodyTitle = content?.subtleBodyTitle || "Le Mantra et le Corps Subtil";
  const subtleBodyDescription = content?.subtleBodyDescription || "";
  
  const originTitle = content?.originTitle || "Origine et Histoire";
  const originText = content?.originText || "";
  const rishiTitle = content?.rishiTitle || "Le Rishi Vishvamitra";
  const rishiText = content?.rishiText || "";
  const transmissionText = content?.transmissionText || "";
  
  const symbolsTitle = content?.symbolsTitle || "Symboles Sacrés";
  const symbolsDescription = content?.symbolsDescription || "";
  const sriYantraTitle = content?.sriYantraTitle || "Le Sri Yantra";
  const sriYantraDescription = content?.sriYantraDescription || "";
  const gayatriDeviTitle = content?.gayatriDeviTitle || "Gayatri Devi";
  const gayatriDeviDescription = content?.gayatriDeviDescription || "";
  
  const syllablesTitle = content?.syllablesTitle || "Signification des Syllabes";
  const syllablesIntro = content?.syllablesIntro || "";
  const syllables = content?.syllables || [];
  
  const effectsTitle = content?.effectsTitle || "Les Effets du Mantra";
  const effectsIntro = content?.effectsIntro || "";
  const physiologicalEffects = content?.physiologicalEffects || { title: "Effets Physiologiques", items: [] };
  const psychologicalEffects = content?.psychologicalEffects || { title: "Effets Psychologiques", items: [] };
  const spiritualEffects = content?.spiritualEffects || { title: "Effets Spirituels", items: [] };
  
  const practiceTitle = content?.practiceTitle || "Guide de Pratique";
  const japaSection = content?.japaSection || { title: "", text: "", methods: [] };
  const malaSection = content?.malaSection || { title: "", text: "", meanings: [] };
  const frequencySection = content?.frequencySection || { title: "", text: "", counts: [] };
  const timingSection = content?.timingSection || { title: "", text: "", times: [] };
  
  const faq = content?.faq || [];
  
  const ctaTitle = content?.ctaTitle || "Approfondir Votre Pratique";
  const ctaText = content?.ctaText || "";
  const ctaPrimaryLink = content?.ctaPrimaryLink || "/philosophie-vedique";
  const ctaPrimaryText = content?.ctaPrimaryText || "Philosophie Védique";
  const ctaSecondaryLink = content?.ctaSecondaryLink || "/contact";
  const ctaSecondaryText = content?.ctaSecondaryText || "Nous Contacter";

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              <span className="text-primary">{title}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 font-medium">
              {subtitle}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {heroDescription}
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
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title={youtubeVideoTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">
              {youtubeVideoCaption}
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
                {whatIsGayatriTitle}
              </h2>
            </div>
            
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="text-lg leading-relaxed">{children}</p>,
                  strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                }}
              >
                {whatIsGayatriText}
              </ReactMarkdown>
              
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{etymologyTitle}</h3>
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="text-muted-foreground mb-4">{children}</p>,
                    strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc list-inside space-y-2 text-muted-foreground">{children}</ul>,
                    em: ({ children }) => <em>{children}</em>,
                  }}
                >
                  {etymologyText}
                </ReactMarkdown>
              </div>
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
                {versionsTitle}
              </h2>
            </div>

            <div className="space-y-8">
              {/* Version courte */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
                    {shortVersionTitle}
                  </h3>
                  
                  <div className="bg-background/50 rounded-xl p-6 mb-6">
                    <p className="text-center text-2xl text-primary font-medium mb-4 leading-relaxed whitespace-pre-line">
                      {shortVersionSanskrit}
                    </p>
                    <hr className="border-primary/20 my-4" />
                    <p className="text-center text-lg text-foreground italic leading-relaxed whitespace-pre-line">
                      {shortVersionTranslit}
                    </p>
                  </div>

                  <div className="text-muted-foreground space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Traduction :</h4>
                    <p className="italic border-l-4 border-primary/40 pl-4">
                      "{shortVersionTranslation}"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Version longue */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
                    {longVersionTitle}
                  </h3>
                  
                  <div className="bg-background/50 rounded-xl p-6 mb-6">
                    <p className="text-center text-lg text-foreground leading-relaxed mb-4">
                      <strong className="text-primary">{longVersionIntro}</strong>
                    </p>
                    <p className="text-center text-lg text-foreground italic leading-relaxed whitespace-pre-line">
                      {longVersionPart1}
                    </p>
                    <hr className="border-primary/20 my-4" />
                    <p className="text-center text-lg text-foreground italic leading-relaxed whitespace-pre-line">
                      {longVersionPart2}
                    </p>
                    <hr className="border-primary/20 my-4" />
                    <p className="text-center text-lg text-foreground italic leading-relaxed whitespace-pre-line">
                      {longVersionPart3}
                    </p>
                  </div>

                  {saptaLokas.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="bg-primary/5 rounded-lg p-4">
                        {saptaLokas.slice(0, 4).map((loka, idx) => (
                          <p key={idx}><strong className="text-foreground">{loka.name}</strong> - {loka.description}</p>
                        ))}
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4">
                        {saptaLokas.slice(4).map((loka, idx) => (
                          <p key={idx}><strong className="text-foreground">{loka.name}</strong> - {loka.description}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Le Mantra et le Corps Subtil */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-foreground mb-4">
              {subtleBodyTitle}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {subtleBodyDescription}
            </p>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 max-w-2xl">
                <img 
                  src={gayatriMantraCorpsImg} 
                  alt="Le Gayatri Mantra et son action sur le corps subtil" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origine et Histoire */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                {originTitle}
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="text-lg leading-relaxed">{children}</p>,
                  strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                }}
              >
                {originText}
              </ReactMarkdown>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{rishiTitle}</h3>
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="text-muted-foreground mt-4">{children}</p>,
                      strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                    }}
                  >
                    {rishiText}
                  </ReactMarkdown>
                </CardContent>
              </Card>

              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="text-lg leading-relaxed">{children}</p>,
                  strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                }}
              >
                {transmissionText}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section - Sri Yantra & Gayatri Devi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-foreground mb-4">
              {symbolsTitle}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {symbolsDescription}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Sri Yantra */}
              <div className="text-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 mb-4">
                  <img 
                    src={sriYantraImg} 
                    alt="Sri Yantra - Géométrie sacrée védique" 
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-2">{sriYantraTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {sriYantraDescription}
                </p>
              </div>

              {/* Gayatri Devi */}
              <div className="text-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 mb-4">
                  <img 
                    src={gayatriDeviImg} 
                    alt="Gayatri Devi - La déesse du mantra sacré" 
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-2">{gayatriDeviTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {gayatriDeviDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les effets du mantra - Syllabes */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground">
                {syllablesTitle}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {syllablesIntro}
            </p>

            {syllables.length > 0 && (
              <div className="grid gap-4">
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {syllables.map((syllable, idx) => (
                        <div key={idx}>
                          <h4 className="text-lg font-semibold text-primary mb-2">{syllable.sanskrit}</h4>
                          <p className="text-muted-foreground text-sm">{syllable.meaning}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
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
                {effectsTitle}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {effectsIntro}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{physiologicalEffects.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {physiologicalEffects.items?.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{psychologicalEffects.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {psychologicalEffects.items?.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{spiritualEffects.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {spiritualEffects.items?.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
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
                {practiceTitle}
              </h2>
            </div>

            <div className="space-y-6">
              {/* Japa */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{japaSection.title}</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p>{children}</p>,
                        strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                      }}
                    >
                      {japaSection.text}
                    </ReactMarkdown>
                    {japaSection.methods?.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        {japaSection.methods.map((method, idx) => (
                          <li key={idx}><strong className="text-foreground">{method.name}</strong> - {method.description}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Mala */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{malaSection.title}</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p>{children}</p>,
                        strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                      }}
                    >
                      {malaSection.text}
                    </ReactMarkdown>
                    {malaSection.meanings?.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        {malaSection.meanings.map((meaning, idx) => (
                          <li key={idx}>{meaning}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Fréquence */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{frequencySection.title}</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>{frequencySection.text}</p>
                    {frequencySection.counts?.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {frequencySection.counts.map((count, idx) => (
                          <div key={idx} className="bg-primary/10 rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-primary">{count.number}</p>
                            <p className="text-sm">{count.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Moments propices */}
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{timingSection.title}</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p>{children}</p>,
                        strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
                      }}
                    >
                      {timingSection.text}
                    </ReactMarkdown>
                    {timingSection.times?.length > 0 && (
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        {timingSection.times.map((time, idx) => (
                          <div key={idx} className={`rounded-lg p-4 ${idx === 0 ? 'bg-orange-500/10' : idx === 1 ? 'bg-yellow-500/10' : 'bg-indigo-500/10'}`}>
                            <h4 className="font-semibold text-foreground mb-2">{idx === 0 ? '🌅' : idx === 1 ? '☀️' : '🌅'} {time.name}</h4>
                            <p className="text-sm">{time.time}<br />{time.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-serif text-foreground">
                  Questions Fréquentes
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faq.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-card/50 border border-primary/20 rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-6">
              {ctaTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to={ctaPrimaryLink}>
                  {ctaPrimaryText} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to={ctaSecondaryLink}>
                  {ctaSecondaryText}
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
