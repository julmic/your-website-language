import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, RotateCcw, Sparkles } from "lucide-react";

interface QuizOption {
  text: string;
  vata: number;
  pitta: number;
  kapha: number;
}

interface Question {
  q: string;
  options: QuizOption[];
}

const questions: Question[] = [
  {
    q: "Quelle est votre corpulence naturelle ?",
    options: [
      { text: "Mince, os saillants, difficile de prendre du poids", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyenne, musclée, poids stable", vata: 0, pitta: 2, kapha: 0 },
      { text: "Large, structure solide, tendance à prendre du poids", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Comment décririez-vous votre peau ?",
    options: [
      { text: "Sèche, rugueuse, tendance aux gerçures", vata: 2, pitta: 0, kapha: 0 },
      { text: "Douce, chaude, sensible aux rougeurs", vata: 0, pitta: 2, kapha: 0 },
      { text: "Grasse, épaisse, pores dilatés", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Vos cheveux sont naturellement :",
    options: [
      { text: "Secs, fins, cassants, crépus", vata: 2, pitta: 0, kapha: 0 },
      { text: "Fins, soyeux, tendance à grisonner tôt", vata: 0, pitta: 2, kapha: 0 },
      { text: "Épais, gras, ondulés, brillants", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre température corporelle :",
    options: [
      { text: "Toujours froid, mains/pieds glacés", vata: 2, pitta: 0, kapha: 0 },
      { text: "Toujours chaud, transpiration facile", vata: 0, pitta: 2, kapha: 0 },
      { text: "Température modérée, confortable", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre appétit est généralement :",
    options: [
      { text: "Irrégulier, parfois oublié", vata: 2, pitta: 0, kapha: 0 },
      { text: "Fort et régulier, irritable si repas sauté", vata: 0, pitta: 2, kapha: 0 },
      { text: "Faible, je peux facilement sauter un repas", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre digestion :",
    options: [
      { text: "Irrégulière, ballonnements, gaz", vata: 2, pitta: 0, kapha: 0 },
      { text: "Rapide, forte, parfois brûlures", vata: 0, pitta: 2, kapha: 0 },
      { text: "Lente, lourde, besoin de temps", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Vos selles sont habituellement :",
    options: [
      { text: "Sèches, dures, irrégulières (constipation)", vata: 2, pitta: 0, kapha: 0 },
      { text: "Molles, fréquentes (2-3x/jour)", vata: 0, pitta: 2, kapha: 0 },
      { text: "Épaisses, lourdes, régulières", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre niveau d'activité physique :",
    options: [
      { text: "Très actif mais vite fatigué", vata: 2, pitta: 0, kapha: 0 },
      { text: "Énergique, compétitif, endurant", vata: 0, pitta: 2, kapha: 0 },
      { text: "Lent à démarrer, endurance stable", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre démarche est :",
    options: [
      { text: "Rapide, légère, irrégulière", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyenne, déterminée", vata: 0, pitta: 2, kapha: 0 },
      { text: "Lente, stable, gracieuse", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre sommeil :",
    options: [
      { text: "Léger, interrompu, insomnie", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyen, 5-7h suffisent", vata: 0, pitta: 2, kapha: 0 },
      { text: "Profond, long (8h+), difficulté à se lever", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre façon de parler :",
    options: [
      { text: "Rapide, bavard, sujets changeants", vata: 2, pitta: 0, kapha: 0 },
      { text: "Précis, argumenté, convaincant", vata: 0, pitta: 2, kapha: 0 },
      { text: "Lent, posé, doux, peu bavard", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre mémoire :",
    options: [
      { text: "Rapide à apprendre, vite oublié", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyenne, bonne compréhension", vata: 0, pitta: 2, kapha: 0 },
      { text: "Lente à apprendre, excellente rétention", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Face au stress, vous êtes :",
    options: [
      { text: "Anxieux, inquiet, panique", vata: 2, pitta: 0, kapha: 0 },
      { text: "Irritable, frustré, en colère", vata: 0, pitta: 2, kapha: 0 },
      { text: "Déprimé, léthargique, en retrait", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Vos émotions sont :",
    options: [
      { text: "Changeantes, imprévisibles", vata: 2, pitta: 0, kapha: 0 },
      { text: "Intenses, passionnées", vata: 0, pitta: 2, kapha: 0 },
      { text: "Stables, douces, profondes", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre style de vie préféré :",
    options: [
      { text: "Varié, spontané, voyage", vata: 2, pitta: 0, kapha: 0 },
      { text: "Structuré, défis, accomplissements", vata: 0, pitta: 2, kapha: 0 },
      { text: "Routinier, confortable, stable", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre façon de prendre des décisions :",
    options: [
      { text: "Rapide mais indécis, changeant d'avis", vata: 2, pitta: 0, kapha: 0 },
      { text: "Rapide, déterminé, confiant", vata: 0, pitta: 2, kapha: 0 },
      { text: "Lent, réfléchi, résistant au changement", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Vos articulations sont :",
    options: [
      { text: "Craquantes, raides, sèches", vata: 2, pitta: 0, kapha: 0 },
      { text: "Souples, moyennes", vata: 0, pitta: 2, kapha: 0 },
      { text: "Larges, stables, un peu raides", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre transpiration :",
    options: [
      { text: "Légère, sans odeur", vata: 2, pitta: 0, kapha: 0 },
      { text: "Abondante, odeur forte", vata: 0, pitta: 2, kapha: 0 },
      { text: "Modérée, légère odeur", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Vos yeux sont :",
    options: [
      { text: "Petits, secs, marron/gris", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyens, perçants, verts/noisette", vata: 0, pitta: 2, kapha: 0 },
      { text: "Grands, doux, bleus/marron foncé", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Vos dents :",
    options: [
      { text: "Irrégulières, fines, gencives sensibles", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyennes, jaunâtres, gencives saignent", vata: 0, pitta: 2, kapha: 0 },
      { text: "Fortes, blanches, bien alignées", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre voix est :",
    options: [
      { text: "Faible, enrouée, changeante", vata: 2, pitta: 0, kapha: 0 },
      { text: "Forte, claire, perçante", vata: 0, pitta: 2, kapha: 0 },
      { text: "Douce, grave, mélodieuse", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Face au froid, vous êtes :",
    options: [
      { text: "Très frileux, mal toléré", vata: 2, pitta: 0, kapha: 0 },
      { text: "Je tolère bien le froid", vata: 0, pitta: 2, kapha: 0 },
      { text: "Moyennement toléré", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Face à la chaleur, vous êtes :",
    options: [
      { text: "J'adore la chaleur", vata: 2, pitta: 0, kapha: 0 },
      { text: "Mal tolérée, irritabilité", vata: 0, pitta: 2, kapha: 0 },
      { text: "Bien tolérée", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre endurance physique :",
    options: [
      { text: "Faible, vite épuisé", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyenne, bonne énergie", vata: 0, pitta: 2, kapha: 0 },
      { text: "Excellente, mais lent à démarrer", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre résistance aux maladies :",
    options: [
      { text: "Faible, souvent malade", vata: 2, pitta: 0, kapha: 0 },
      { text: "Moyenne, récupération rapide", vata: 0, pitta: 2, kapha: 0 },
      { text: "Forte, rarement malade", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre rapport à l'argent :",
    options: [
      { text: "Dépense impulsive, difficile d'économiser", vata: 2, pitta: 0, kapha: 0 },
      { text: "Dépense calculée, investissements", vata: 0, pitta: 2, kapha: 0 },
      { text: "Économe, accumule facilement", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre créativité :",
    options: [
      { text: "Très créatif, idées multiples", vata: 2, pitta: 0, kapha: 0 },
      { text: "Créatif dans l'action, réalisation", vata: 0, pitta: 2, kapha: 0 },
      { text: "Peu créatif, mais bon exécutant", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Vos rêves sont :",
    options: [
      { text: "Nombreux, agités, peur, vol", vata: 2, pitta: 0, kapha: 0 },
      { text: "Colorés, passionnés, violence", vata: 0, pitta: 2, kapha: 0 },
      { text: "Peu nombreux, romantiques, eau", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Votre style relationnel :",
    options: [
      { text: "Enthousiaste mais instable", vata: 2, pitta: 0, kapha: 0 },
      { text: "Passionné mais possessif", vata: 0, pitta: 2, kapha: 0 },
      { text: "Fidèle, stable, dépendant", vata: 0, pitta: 0, kapha: 2 }
    ]
  },
  {
    q: "Globalement, vous vous sentez :",
    options: [
      { text: "Léger, changeant, anxieux", vata: 2, pitta: 0, kapha: 0 },
      { text: "Motivé, intense, irritable", vata: 0, pitta: 2, kapha: 0 },
      { text: "Calme, stable, parfois léthargique", vata: 0, pitta: 0, kapha: 2 }
    ]
  }
];

interface Profile {
  badge: string;
  title: string;
  description: string;
  recommendations: string[];
}

const profiles: Record<string, Profile> = {
  vata: {
    badge: "💨",
    title: "Constitution Vata dominante",
    description: "Vous êtes le <strong>vent du changement</strong> ! Créatif, enthousiaste et rapide d'esprit, mais tendance à l'anxiété et l'instabilité.",
    recommendations: [
      "🍲 Alimentation : chaud, cuit, onctueux, épices douces",
      "🧘 Routine stable et régulière",
      "💧 Hydratation régulière",
      "😴 Sommeil prioritaire (coucher avant 22h)",
      "❌ Éviter : froid, cru, stress, excès"
    ]
  },
  pitta: {
    badge: "🔥",
    title: "Constitution Pitta dominante",
    description: "Vous êtes le <strong>feu de l'action</strong> ! Déterminé, intelligent et leader naturel, mais tendance à l'irritabilité et la compétition.",
    recommendations: [
      "🥒 Alimentation : frais, doux, amer, sucré naturel",
      "🌿 Éviter épices fortes et chaleur",
      "🏊 Sports modérés (natation, yoga doux)",
      "😌 Cultiver la patience et la modération",
      "❌ Éviter : alcool, café, colère, surmenage"
    ]
  },
  kapha: {
    badge: "🌊",
    title: "Constitution Kapha dominante",
    description: "Vous êtes la <strong>terre stable</strong> ! Patient, fidèle et endurant, mais tendance à la léthargie et l'attachement.",
    recommendations: [
      "🌶️ Alimentation : léger, chaud, épicé, stimulant",
      "🏃 Exercice régulier et intense",
      "☕ Stimulants naturels (thé vert, gingembre)",
      "🌅 Lever tôt et rester actif",
      "❌ Éviter : laitages, fritures, siestes, inactivité"
    ]
  }
};

export const DoshaQuiz = () => {
  const [answers, setAnswers] = useState<(number | undefined)[]>(new Array(questions.length).fill(undefined));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{
    percentages: { vata: number; pitta: number; kapha: number };
    dominant: string;
    secondary: string | null;
  } | null>(null);

  const answeredCount = answers.filter(a => a !== undefined).length;
  const progress = (answeredCount / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    // Auto-advance after selection
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
    }
  };

  const calculateResults = () => {
    const scores = { vata: 0, pitta: 0, kapha: 0 };

    answers.forEach((answerIndex, qIndex) => {
      if (answerIndex !== undefined) {
        const option = questions[qIndex].options[answerIndex];
        scores.vata += option.vata;
        scores.pitta += option.pitta;
        scores.kapha += option.kapha;
      }
    });

    const total = scores.vata + scores.pitta + scores.kapha;
    const percentages = {
      vata: Math.round((scores.vata / total) * 100),
      pitta: Math.round((scores.pitta / total) * 100),
      kapha: Math.round((scores.kapha / total) * 100)
    };

    const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    const dominant = sorted[0][0];
    const secondary = sorted[1][1] >= 25 ? sorted[1][0] : null;

    setResults({ percentages, dominant, secondary });
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers(new Array(questions.length).fill(undefined));
    setCurrentQuestion(0);
    setShowResults(false);
    setResults(null);
  };

  if (showResults && results) {
    const profile = profiles[results.dominant];
    
    return (
      <Card className="p-8 md:p-12 bg-gradient-to-br from-background via-secondary/20 to-background border-primary/30">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{profile.badge}</div>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2">
            {profile.title}
          </h3>
          {results.secondary && (
            <p className="text-muted-foreground">
              Constitution secondaire : {results.secondary.charAt(0).toUpperCase() + results.secondary.slice(1)} ({results.percentages[results.secondary as keyof typeof results.percentages]}%)
            </p>
          )}
        </div>

        {/* Score bars */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-1">{results.percentages.vata}%</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              💨 Vata
            </div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-orange-500 mb-1">{results.percentages.pitta}%</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              🔥 Pitta
            </div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-blue-500 mb-1">{results.percentages.kapha}%</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              🌊 Kapha
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p 
            className="text-lg text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: profile.description }}
          />
        </div>

        {/* Recommendations */}
        <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
          <h4 className="font-semibold text-foreground mb-4">📋 Vos recommandations personnalisées :</h4>
          <ul className="space-y-2">
            {profile.recommendations.map((rec, index) => (
              <li key={index} className="text-muted-foreground">{rec}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            💡 Pour un bilan complet, consultez un praticien certifié en Ayurvéda
          </p>
          <Button onClick={resetQuiz} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Refaire le test
          </Button>
        </div>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  
  // Safety check - if currentQuestion is out of bounds, reset to 0
  if (!currentQ) {
    return (
      <Card className="p-6 md:p-10 bg-gradient-to-br from-background via-secondary/20 to-background border-primary/30">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Chargement du quiz...</p>
          <Button onClick={resetQuiz}>Recommencer</Button>
        </div>
      </Card>
    );
  }
  
  const isLastQuestion = currentQuestion === questions.length - 1;
  const canSubmit = answers[currentQuestion] !== undefined && isLastQuestion;
  const canNext = answers[currentQuestion] !== undefined && !isLastQuestion;

  return (
    <Card className="p-6 md:p-10 bg-gradient-to-br from-background via-secondary/20 to-background border-primary/30">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          Découvrez Votre Constitution Ayurvédique
        </h3>
        <p className="text-muted-foreground">Un voyage de 5 minutes pour comprendre votre nature profonde – 30 questions</p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <Progress value={progress} className="h-2 mb-2" />
        <p className="text-center text-sm text-muted-foreground">
          Question <span className="font-semibold text-foreground">{currentQuestion + 1}</span> sur <span className="font-semibold text-foreground">{questions.length}</span>
        </p>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Question {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        <h4 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-6">
          {currentQ.q}
        </h4>
        <div className="space-y-3 max-w-xl mx-auto">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                answers[currentQuestion] === index
                  ? "bg-primary/10 border-primary shadow-lg"
                  : "bg-card border-border hover:border-primary/50 hover:bg-secondary/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  answers[currentQuestion] === index
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}>
                  {answers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  )}
                </div>
                <span className={answers[currentQuestion] === index ? "font-medium text-foreground" : "text-muted-foreground"}>
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          disabled={currentQuestion === 0}
          className="gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>

        {isLastQuestion ? (
          <Button
            onClick={calculateResults}
            disabled={!canSubmit}
            className="flex-1 max-w-xs gap-2"
          >
            Voir mes résultats
            <Sparkles className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentQuestion(prev => prev + 1)}
            disabled={!canNext}
            className="gap-1"
          >
            Suivant
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </Card>
  );
};
