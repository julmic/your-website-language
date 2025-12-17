import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wind, Flame, Droplets, RotateCcw, ArrowRight, ArrowLeft } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { label: string; dosha: "vata" | "pitta" | "kapha" | "balanced" }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Comment décririez-vous vos selles habituellement ?",
    options: [
      { label: "Molles, liquides ou fréquentes (3+ fois/jour)", dosha: "vata" },
      { label: "Normales mais avec parfois des brûlures/urgences", dosha: "pitta" },
      { label: "Compactes, lentes (moins d'1 fois/jour)", dosha: "kapha" },
      { label: "Alternance entre diarrhée et constipation", dosha: "vata" },
    ],
  },
  {
    id: 2,
    question: "Après un repas, vous ressentez généralement :",
    options: [
      { label: "Ballonnements, gaz, inconfort", dosha: "vata" },
      { label: "Sensation de brûlure ou acidité", dosha: "pitta" },
      { label: "Lourdeur, envie de dormir", dosha: "kapha" },
      { label: "Rien de particulier, digestion fluide", dosha: "balanced" },
    ],
  },
  {
    id: 3,
    question: "Votre appétit est plutôt :",
    options: [
      { label: "Irrégulier, parfois absent", dosha: "vata" },
      { label: "Fort, je ne peux pas sauter de repas", dosha: "pitta" },
      { label: "Faible, je peux facilement sauter un repas", dosha: "kapha" },
      { label: "Modéré et stable", dosha: "balanced" },
    ],
  },
  {
    id: 4,
    question: "Niveau d'énergie dans la journée :",
    options: [
      { label: "Fluctuant, pics et chutes", dosha: "vata" },
      { label: "Intense le matin, baisse l'après-midi", dosha: "pitta" },
      { label: "Lent au réveil, stable ensuite", dosha: "kapha" },
      { label: "Stable toute la journée", dosha: "balanced" },
    ],
  },
  {
    id: 5,
    question: "Votre langue le matin au réveil :",
    options: [
      { label: "Sèche, fine, parfois fissurée", dosha: "vata" },
      { label: "Rouge, avec revêtement jaunâtre", dosha: "pitta" },
      { label: "Épaisse, blanche, chargée", dosha: "kapha" },
      { label: "Rose, propre", dosha: "balanced" },
    ],
  },
  {
    id: 6,
    question: "Face au stress, votre digestion :",
    options: [
      { label: "Se bloque complètement (anxiété)", dosha: "vata" },
      { label: "Brûlures, diarrhées de stress", dosha: "pitta" },
      { label: "Ralentit, je me sens lourd", dosha: "kapha" },
      { label: "Reste stable", dosha: "balanced" },
    ],
  },
  {
    id: 7,
    question: "Vous tolérez mal :",
    options: [
      { label: "Les crudités, haricots, choux", dosha: "vata" },
      { label: "Les épices fortes, tomates, alcool", dosha: "pitta" },
      { label: "Les produits laitiers, fritures, sucreries", dosha: "kapha" },
      { label: "Rien de particulier", dosha: "balanced" },
    ],
  },
  {
    id: 8,
    question: "Votre poids corporel :",
    options: [
      { label: "Stable ou difficulté à prendre du poids", dosha: "vata" },
      { label: "Modéré, facile à gérer", dosha: "pitta" },
      { label: "Tendance à prendre facilement", dosha: "kapha" },
    ],
  },
  {
    id: 9,
    question: "Votre sommeil :",
    options: [
      { label: "Léger, interrompu, difficile d'endormissement", dosha: "vata" },
      { label: "Court mais profond (5-6h suffisent)", dosha: "pitta" },
      { label: "Long et lourd (8h+ nécessaires)", dosha: "kapha" },
      { label: "Normal, réparateur", dosha: "balanced" },
    ],
  },
  {
    id: 10,
    question: "Symptômes récurrents :",
    options: [
      { label: "Gaz, ballonnements, anxiété", dosha: "vata" },
      { label: "Brûlures, inflammation, irritabilité", dosha: "pitta" },
      { label: "Mucus, lourdeur, fatigue", dosha: "kapha" },
      { label: "Aucun de ces symptômes", dosha: "balanced" },
    ],
  },
  {
    id: 11,
    question: "Votre peau est plutôt :",
    options: [
      { label: "Sèche, rugueuse, facilement déshydratée", dosha: "vata" },
      { label: "Sensible, sujette aux rougeurs et irritations", dosha: "pitta" },
      { label: "Grasse, épaisse, pores dilatés", dosha: "kapha" },
      { label: "Normale, équilibrée", dosha: "balanced" },
    ],
  },
  {
    id: 12,
    question: "Votre soif est :",
    options: [
      { label: "Variable, j'oublie souvent de boire", dosha: "vata" },
      { label: "Intense, je bois beaucoup d'eau", dosha: "pitta" },
      { label: "Faible, je bois peu", dosha: "kapha" },
      { label: "Modérée et régulière", dosha: "balanced" },
    ],
  },
  {
    id: 13,
    question: "Votre transpiration :",
    options: [
      { label: "Légère, j'ai rarement chaud", dosha: "vata" },
      { label: "Abondante, odeur forte", dosha: "pitta" },
      { label: "Modérée, légère odeur sucrée", dosha: "kapha" },
      { label: "Normale", dosha: "balanced" },
    ],
  },
  {
    id: 14,
    question: "Vos articulations sont :",
    options: [
      { label: "Craquantes, raides, parfois douloureuses", dosha: "vata" },
      { label: "Souples mais inflammées après effort", dosha: "pitta" },
      { label: "Stables, parfois gonflées", dosha: "kapha" },
      { label: "Souples et sans douleur", dosha: "balanced" },
    ],
  },
  {
    id: 15,
    question: "Votre mental est :",
    options: [
      { label: "Agité, anxieux, difficulté à me concentrer", dosha: "vata" },
      { label: "Vif, perfectionniste, parfois irritable", dosha: "pitta" },
      { label: "Calme, stable, parfois léthargique", dosha: "kapha" },
      { label: "Équilibré", dosha: "balanced" },
    ],
  },
  {
    id: 16,
    question: "Face au froid :",
    options: [
      { label: "Je suis très frileux, j'ai toujours froid", dosha: "vata" },
      { label: "Je tolère bien le froid", dosha: "pitta" },
      { label: "Je supporte le froid mais préfère la chaleur", dosha: "kapha" },
    ],
  },
  {
    id: 17,
    question: "Vos cheveux sont :",
    options: [
      { label: "Secs, fins, cassants", dosha: "vata" },
      { label: "Fins, tendance à grisonner tôt", dosha: "pitta" },
      { label: "Épais, gras, brillants", dosha: "kapha" },
      { label: "Normaux", dosha: "balanced" },
    ],
  },
  {
    id: 18,
    question: "Votre voix est :",
    options: [
      { label: "Faible, enrouée, changeante", dosha: "vata" },
      { label: "Claire, forte, perçante", dosha: "pitta" },
      { label: "Douce, grave, monotone", dosha: "kapha" },
      { label: "Claire et stable", dosha: "balanced" },
    ],
  },
  {
    id: 19,
    question: "Votre démarche est :",
    options: [
      { label: "Rapide, irrégulière, nerveuse", dosha: "vata" },
      { label: "Énergique, déterminée", dosha: "pitta" },
      { label: "Lente, stable, posée", dosha: "kapha" },
      { label: "Normale", dosha: "balanced" },
    ],
  },
  {
    id: 20,
    question: "En général, vous vous sentez :",
    options: [
      { label: "Souvent anxieux, indécis, éparpillé", dosha: "vata" },
      { label: "Motivé, parfois impatient ou frustré", dosha: "pitta" },
      { label: "Calme, parfois trop sédentaire ou attaché", dosha: "kapha" },
      { label: "Équilibré, en harmonie", dosha: "balanced" },
    ],
  },
];

const GrahaniQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, "vata" | "pitta" | "kapha" | "balanced">>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (dosha: "vata" | "pitta" | "kapha" | "balanced") => {
    setAnswers({ ...answers, [currentQuestion]: dosha });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const calculateResults = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0, balanced: 0 };
    Object.values(answers).forEach((dosha) => {
      counts[dosha]++;
    });
    return counts;
  };

  const getDominantDosha = () => {
    const results = calculateResults();
    const { balanced, ...doshas } = results;
    const maxCount = Math.max(...Object.values(doshas));
    const dominants = Object.entries(doshas)
      .filter(([_, count]) => count === maxCount)
      .map(([dosha]) => dosha);
    
    if (dominants.length > 1) {
      return "mixte";
    }
    return dominants[0] as "vata" | "pitta" | "kapha";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const results = calculateResults();
    const dominant = getDominantDosha();
    
    const profileInfo = {
      vata: {
        title: "VATAJA GRAHANI – Le Profil Erratique",
        icon: <Wind className="h-8 w-8" />,
        color: "blue",
        description: "Votre digestion est caractérisée par l'irrégularité. Vous alternez entre constipation et diarrhée, avec des gaz fréquents et des douleurs migrantes. L'anxiété et le stress affectent fortement votre système digestif.",
        advice: [
          "Privilégiez les repas chauds, cuits et onctueux",
          "Mangez à heures régulières dans un environnement calme",
          "Évitez les crudités, les aliments froids et secs",
          "Utilisez des épices douces : gingembre, cumin, fenouil",
          "Pratiquez des routines apaisantes : yoga doux, méditation",
        ],
        plants: ["Ashwagandha", "Shatavari", "Triphala", "Gingembre"],
      },
      pitta: {
        title: "PITTAJA GRAHANI – Le Profil Inflammatoire",
        icon: <Flame className="h-8 w-8" />,
        color: "orange",
        description: "Votre digestion est marquée par l'excès de chaleur. Vous avez tendance aux diarrhées acides, brûlures gastriques et inflammations intestinales. L'irritabilité et la frustration aggravent vos symptômes.",
        advice: [
          "Privilégiez les aliments rafraîchissants et apaisants",
          "Évitez les épices fortes, l'alcool, le café",
          "Mangez à heures régulières, sans sauter de repas",
          "Intégrez des aliments amers et astringents",
          "Pratiquez des activités rafraîchissantes : natation, marche au frais",
        ],
        plants: ["Shatavari", "Amalaki", "Brahmi", "Aloe vera"],
      },
      kapha: {
        title: "KAPHAJA GRAHANI – Le Profil Lourd",
        icon: <Droplets className="h-8 w-8" />,
        color: "green",
        description: "Votre digestion est lente et alourdie. Vous souffrez de constipation chronique, de mucus excessif et d'une sensation de lourdeur après les repas. La léthargie et l'attachement émotionnel peuvent aggraver les symptômes.",
        advice: [
          "Privilégiez les aliments légers, chauds et épicés",
          "Évitez les produits laitiers, sucreries et fritures",
          "Jeûnez occasionnellement ou faites des repas légers",
          "Utilisez des épices stimulantes : poivre, gingembre, curcuma",
          "Pratiquez une activité physique quotidienne dynamique",
        ],
        plants: ["Trikatu", "Triphala", "Guggulu", "Gingembre sec"],
      },
      mixte: {
        title: "SANNIPATAJA GRAHANI – Le Profil Mixte",
        icon: <div className="flex -space-x-1"><Wind className="h-6 w-6 text-blue-400" /><Flame className="h-6 w-6 text-orange-400" /><Droplets className="h-6 w-6 text-green-400" /></div>,
        color: "purple",
        description: "Votre profil présente un déséquilibre de plusieurs doshas. Vos symptômes sont variés et complexes, nécessitant une approche personnalisée. Une consultation avec un praticien ayurvédique est recommandée.",
        advice: [
          "Consultez un praticien ayurvédique pour un bilan personnalisé",
          "Adoptez une routine régulière et équilibrée",
          "Écoutez les signaux de votre corps",
          "Évitez les extrêmes (trop chaud, trop froid, trop épicé)",
          "Privilégiez le Kitchari comme base alimentaire",
        ],
        plants: ["Triphala", "Gingembre", "Fenouil", "Cumin"],
      },
    };

    const profile = profileInfo[dominant];
    const colorClasses = {
      blue: "border-blue-500/30 bg-blue-950/20 text-blue-400",
      orange: "border-orange-500/30 bg-orange-950/20 text-orange-400",
      green: "border-green-500/30 bg-green-950/20 text-green-400",
      purple: "border-purple-500/30 bg-purple-950/20 text-purple-400",
    };

    return (
      <Card className={`${colorClasses[profile.color as keyof typeof colorClasses]} border-2`}>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            {profile.icon}
            <span>Votre Résultat : {profile.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Score breakdown */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-background/50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{results.vata}</div>
              <div className="text-sm text-muted-foreground">Vata</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{results.pitta}</div>
              <div className="text-sm text-muted-foreground">Pitta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{results.kapha}</div>
              <div className="text-sm text-muted-foreground">Kapha</div>
            </div>
          </div>

          <p className="text-muted-foreground">{profile.description}</p>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">🌿 Conseils personnalisés :</h4>
            <ul className="space-y-2">
              {profile.advice.map((advice, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary">✓</span>
                  {advice}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">🍃 Plantes recommandées :</h4>
            <div className="flex flex-wrap gap-2">
              {profile.plants.map((plant) => (
                <span key={plant} className="px-3 py-1 bg-primary/20 rounded-full text-sm text-primary">
                  {plant}
                </span>
              ))}
            </div>
          </div>

          <Button onClick={resetQuiz} variant="outline" className="w-full">
            <RotateCcw className="h-4 w-4 mr-2" />
            Refaire le test
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="border-primary/30 bg-primary/5">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} sur {questions.length}
          </span>
          <span className="text-sm text-primary font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <CardTitle className="text-lg mt-4">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.dosha)}
            className={`w-full p-4 text-left rounded-lg border transition-all ${
              answers[currentQuestion] === option.dosha
                ? "border-primary bg-primary/20 text-foreground"
                : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        ))}

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Précédent
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={answers[currentQuestion] === undefined}
          >
            {currentQuestion === questions.length - 1 ? "Voir les résultats" : "Suivant"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GrahaniQuiz;
