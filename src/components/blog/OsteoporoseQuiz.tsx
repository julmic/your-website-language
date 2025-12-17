import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type Profile = 'vata' | 'pitta' | 'kapha';

interface QuizOption {
  text: string;
  profile: Profile;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Comment décririez-vous votre structure osseuse générale ?",
    options: [
      { text: "Fine, légère, os saillants", profile: "vata" },
      { text: "Moyenne, bien proportionnée", profile: "pitta" },
      { text: "Large, robuste, os épais", profile: "kapha" }
    ]
  },
  {
    question: "Avez-vous déjà eu des fractures ou fêlures ?",
    options: [
      { text: "Oui, plusieurs fois facilement", profile: "vata" },
      { text: "Une ou deux fois seulement", profile: "pitta" },
      { text: "Jamais ou très rarement", profile: "kapha" }
    ]
  },
  {
    question: "Comment sont vos articulations ?",
    options: [
      { text: "Raides, craquent souvent, sèches", profile: "vata" },
      { text: "Souples mais parfois inflammées", profile: "pitta" },
      { text: "Stables mais parfois enflées", profile: "kapha" }
    ]
  },
  {
    question: "Comment est votre posture naturelle ?",
    options: [
      { text: "Voûtée, asymétrique, instable", profile: "vata" },
      { text: "Droite mais tendue", profile: "pitta" },
      { text: "Solide mais rigide", profile: "kapha" }
    ]
  },
  {
    question: "Comment sont vos dents ?",
    options: [
      { text: "Fines, fragiles, déchaussement", profile: "vata" },
      { text: "Sensibles, inflammations gingivales", profile: "pitta" },
      { text: "Solides, larges, robustes", profile: "kapha" }
    ]
  },
  {
    question: "Comment sont vos ongles ?",
    options: [
      { text: "Cassants, secs, striés", profile: "vata" },
      { text: "Rosés, souples, normaux", profile: "pitta" },
      { text: "Épais, durs, croissance lente", profile: "kapha" }
    ]
  },
  {
    question: "Comment cicatrisez-vous après une blessure osseuse ?",
    options: [
      { text: "Lentement, avec complications", profile: "vata" },
      { text: "Normalement mais avec inflammation", profile: "pitta" },
      { text: "Lentement mais solidement", profile: "kapha" }
    ]
  },
  {
    question: "Comment se porte votre densité osseuse (si connue) ?",
    options: [
      { text: "Faible densité (ostéopénie/ostéoporose)", profile: "vata" },
      { text: "Densité normale ou légèrement diminuée", profile: "pitta" },
      { text: "Bonne densité osseuse", profile: "kapha" }
    ]
  },
  {
    question: "Avez-vous des douleurs osseuses ?",
    options: [
      { text: "Douleurs migrantes, variables", profile: "vata" },
      { text: "Douleurs brûlantes, aiguës", profile: "pitta" },
      { text: "Douleurs sourdes, continues", profile: "kapha" }
    ]
  },
  {
    question: "Comment est votre absorption du calcium ?",
    options: [
      { text: "Mauvaise, carences fréquentes", profile: "vata" },
      { text: "Correcte mais acidité intestinale", profile: "pitta" },
      { text: "Lente, accumulation ou calcifications", profile: "kapha" }
    ]
  },
  {
    question: "Votre taux de vitamine D ?",
    options: [
      { text: "Souvent en carence", profile: "vata" },
      { text: "Variable selon saison", profile: "pitta" },
      { text: "Stable ou légèrement bas", profile: "kapha" }
    ]
  },
  {
    question: "Comment est votre activité physique ?",
    options: [
      { text: "Irrégulière, impulsive", profile: "vata" },
      { text: "Intense, compétitive", profile: "pitta" },
      { text: "Modérée ou sédentaire", profile: "kapha" }
    ]
  },
  {
    question: "Votre alimentation contient-elle suffisamment de calcium ?",
    options: [
      { text: "Non, alimentation irrégulière", profile: "vata" },
      { text: "Oui mais aliments acidifiants", profile: "pitta" },
      { text: "Oui mais digestion lente", profile: "kapha" }
    ]
  },
  {
    question: "Comment gérez-vous le stress ?",
    options: [
      { text: "Anxiété, cortisol élevé", profile: "vata" },
      { text: "Irritabilité, inflammation", profile: "pitta" },
      { text: "Apathie, rétention", profile: "kapha" }
    ]
  },
  {
    question: "Pour les femmes : statut hormonal ?",
    options: [
      { text: "Ménopause précoce, irrégularités", profile: "vata" },
      { text: "SPM marqué, règles abondantes", profile: "pitta" },
      { text: "Règles régulières mais lourdes", profile: "kapha" }
    ]
  },
  {
    question: "Avez-vous des antécédents familiaux d'ostéoporose ?",
    options: [
      { text: "Oui, côté maternel surtout", profile: "vata" },
      { text: "Quelques cas familiaux", profile: "pitta" },
      { text: "Non ou très peu", profile: "kapha" }
    ]
  },
  {
    question: "Comment est votre digestion globale ?",
    options: [
      { text: "Irrégulière, ballonnements", profile: "vata" },
      { text: "Rapide, brûlures", profile: "pitta" },
      { text: "Lente, lourdeur", profile: "kapha" }
    ]
  },
  {
    question: "Consommez-vous des excitants (café, alcool, tabac) ?",
    options: [
      { text: "Oui, irrégulièrement mais excessif", profile: "vata" },
      { text: "Oui, régulièrement", profile: "pitta" },
      { text: "Peu ou jamais", profile: "kapha" }
    ]
  },
  {
    question: "Votre exposition au soleil ?",
    options: [
      { text: "Très faible, je reste à l'intérieur", profile: "vata" },
      { text: "Modérée mais peau sensible", profile: "pitta" },
      { text: "Variable, pas assez", profile: "kapha" }
    ]
  },
  {
    question: "Comment est votre poids corporel ?",
    options: [
      { text: "Sous-poids, difficulté à prendre", profile: "vata" },
      { text: "Stable, poids moyen", profile: "pitta" },
      { text: "Sur-poids, facilité à prendre", profile: "kapha" }
    ]
  }
];

const profileResults: Record<Profile, {
  title: string;
  emoji: string;
  description: string;
  recommendations: string[];
}> = {
  vata: {
    title: "Profil Osseux VATA",
    emoji: "💨",
    description: "Vos os sont naturellement fins et légers, avec une tendance à la fragilité et à l'ostéoporose. Le dosha Vata, composé d'air et d'éther, crée une structure osseuse délicate nécessitant une attention particulière pour maintenir densité et solidité.",
    recommendations: [
      "Calcium biodisponible : Privilégiez sésame, amandes trempées, légumes verts cuits, produits laitiers bio (si tolérés)",
      "Plantes ayurvédiques : Ashwagandha, Shatavari, Bala pour renforcer les tissus osseux",
      "Graisses saines : Ghee, huiles d'olive et sésame pour favoriser l'absorption",
      "Exercices doux : Yoga restauratif, marche, natation - éviter les impacts",
      "Compléments : Vitamine D3+K2, Magnésium, Calcium citrate",
      "Routine stabilisante : Horaires réguliers, sommeil 8h, réduction du stress",
      "Suivi médical : Ostéodensitométrie tous les 2 ans après 50 ans"
    ]
  },
  pitta: {
    title: "Profil Osseux PITTA",
    emoji: "🔥",
    description: "Votre structure osseuse est moyenne et bien proportionnée, mais le feu digestif Pitta peut créer de l'acidité qui fragilise les os à long terme. L'inflammation chronique et l'excès de chaleur peuvent perturber le métabolisme osseux.",
    recommendations: [
      "Alimentation alcalinisante : Légumes verts, fruits doux, éviter excès de viande rouge",
      "Plantes rafraîchissantes : Amalaki, Guduchi, Brahmi pour réduire l'inflammation",
      "Calcium végétal : Lait de coco, légumes crucifères, graines de chia",
      "Exercices modérés : Natation, vélo, yoga Hatha - éviter surentraînement",
      "Suppléments anti-inflammatoires : Curcuma, Omega-3, Vitamine D",
      "Gestion du stress : Méditation, nature, réduction de la compétitivité",
      "Contrôles réguliers : Bilan osseux et inflammatoire annuel"
    ]
  },
  kapha: {
    title: "Profil Osseux KAPHA",
    emoji: "🌊",
    description: "Vos os sont naturellement épais, lourds et solides, offrant une bonne protection. Cependant, le dosha Kapha peut créer de la congestion, une absorption lente du calcium et des calcifications inappropriées nécessitant stimulation du métabolisme.",
    recommendations: [
      "Alimentation légère : Légumes vapeur, épices réchauffantes (gingembre, poivre noir), éviter produits laitiers lourds",
      "Plantes stimulantes : Guggul, Trikatu, Shilajit pour améliorer métabolisme osseux",
      "Activité dynamique : Course, danse, HIIT - stimuler la circulation",
      "Exposition solaire : 20-30 min quotidiennes pour vitamine D naturelle",
      "Suppléments ciblés : Vitamine D3, Magnésium, Vitamine K2 pour bon usage du calcium",
      "Stimulation digestive : Tisanes épicées, jeûne intermittent léger",
      "Prévention calcifications : Bilan rénal et cardiovasculaire régulier"
    ]
  }
};

export const OsteoporoseQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(Profile | null)[]>(new Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (profile: Profile) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = profile;
    setAnswers(newAnswers);

    // Auto-advance after selection
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 500);
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion < quizQuestions.length - 1 && answers[currentQuestion]) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === quizQuestions.length - 1 && answers[currentQuestion]) {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const counts: Record<Profile, number> = { vata: 0, pitta: 0, kapha: 0 };
    answers.forEach(answer => {
      if (answer) counts[answer]++;
    });
    
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const dominantProfile = Object.keys(counts).reduce((a, b) => 
      counts[a as Profile] > counts[b as Profile] ? a : b
    ) as Profile;

    return { counts, total, dominantProfile };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResults) {
    const { counts, total, dominantProfile } = calculateResults();
    const result = profileResults[dominantProfile];

    return (
      <Card className="bg-gradient-to-br from-card to-secondary/20 border-primary/20 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8 animate-fade-in">
            <span className="text-6xl block mb-4">{result.emoji}</span>
            <h3 className="text-3xl font-bold text-foreground mb-4">{result.title}</h3>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-6">
              <span>💨 Vata: {Math.round((counts.vata / total) * 100)}%</span>
              <span>🔥 Pitta: {Math.round((counts.pitta / total) * 100)}%</span>
              <span>🌊 Kapha: {Math.round((counts.kapha / total) * 100)}%</span>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary mb-6">
            <p className="text-foreground leading-relaxed">{result.description}</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h4 className="text-lg font-semibold text-primary mb-4">
              🌿 Votre programme osseux personnalisé :
            </h4>
            <ul className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="text-primary">🌿</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              💡 Pour un bilan osseux complet, consultez un médecin ou praticien en Ayurvéda certifié
            </p>
            <Button onClick={resetQuiz} className="bg-primary hover:bg-primary/90">
              🔄 Refaire le test
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <Card className="bg-gradient-to-br from-card to-secondary/20 border-primary/20 shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
          🦴 Découvrez Votre Profil Osseux Ayurvédique
        </CardTitle>
        <p className="text-muted-foreground">
          20 questions pour identifier vos vulnérabilités et optimiser votre santé osseuse
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <Progress value={progress} className="h-2 mb-2" />
          <p className="text-center text-sm font-medium text-primary">
            Question {currentQuestion + 1} sur {quizQuestions.length}
          </p>
        </div>

        <div className="min-h-[350px]">
          <h4 className="text-xl font-semibold text-center text-foreground mb-8">
            {question.question}
          </h4>

          <div className="space-y-4 max-w-xl mx-auto">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.profile)}
                className={cn(
                  "w-full p-5 text-left rounded-xl border-2 transition-all duration-300",
                  "hover:border-primary hover:translate-x-2 hover:shadow-md",
                  answers[currentQuestion] === option.profile
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
                    : "bg-card border-border hover:bg-secondary/50"
                )}
              >
                <span className="font-medium">{option.text}</span>
                {answers[currentQuestion] === option.profile && (
                  <span className="float-right text-xl">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
            className="gap-2"
          >
            ← Précédent
          </Button>
          <Button
            onClick={goToNext}
            disabled={!answers[currentQuestion]}
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Voir résultats' : 'Suivant →'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
