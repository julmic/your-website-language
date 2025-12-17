// Import blog images
import osteoporoseImg from "@/assets/blog/osteoporose-hero.webp";
import colonIrritableImg from "@/assets/blog/colon-irritable-hero.webp";
import incompatibilitesImg from "@/assets/blog/incompatibilites-alimentaires-hero.webp";
import hiverAyurvedaImg from "@/assets/blog/hiver-ayurveda-hero.webp";
import automneAyurvedaImg from "@/assets/blog/automne-ayurveda-hero.jpeg";
import santeMentaleImg from "@/assets/blog/sante-mentale-hero.png";
import sommeilAyurvedaImg from "@/assets/blog/sommeil-ayurveda-hero.png";
import doshasImg from "@/assets/blog/doshas-hero.webp";

export interface ArticleData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

// Articles triés du plus récent au plus ancien
export const articlesData: ArticleData[] = [
  {
    slug: "sommeil-ayurveda",
    title: "Insomnie & Troubles du Sommeil : Solutions Ayurvédiques",
    excerpt: "Découvrez les 3 types d'insomnie selon les doshas, 10 solutions naturelles efficaces et une routine complète pour retrouver un sommeil réparateur.",
    date: "Décembre 2024",
    category: "Sommeil",
    readTime: "18 min",
    image: sommeilAyurvedaImg,
  },
  {
    slug: "automne-ayurveda",
    title: "Automne et Ayurvéda : Le Guide Complet",
    excerpt: "Traversez la saison Vata en harmonie. Protocoles par dosha, 4 phases de septembre à décembre, recettes thérapeutiques et conseils pour préserver votre vitalité.",
    date: "Septembre 2025",
    category: "Saisonnier",
    readTime: "25 min",
    image: automneAyurvedaImg,
  },
  {
    slug: "hiver-ayurveda",
    title: "Hiver & Ayurvéda : Votre Guide de Survie Naturelle",
    excerpt: "L'art ancestral de traverser la saison Vata. Découvrez les 3 phases énergétiques de l'hiver, les routines anti-Vata et le programme de transformation 90 jours.",
    date: "Décembre 2024",
    category: "Saisonnier",
    readTime: "20 min",
    image: hiverAyurvedaImg,
  },
  {
    slug: "incompatibilites-alimentaires-ayurveda",
    title: "Les Incompatibilités Alimentaires en Ayurvéda",
    excerpt: "Virodha Ahara : Quand nos assiettes nous empoisonnent. Découvrez les 55+ combinaisons toxiques et les solutions ayurvédiques pour une digestion optimale.",
    date: "16 Octobre 2025",
    category: "Nutrition",
    readTime: "16 min",
    image: incompatibilitesImg,
  },
  {
    slug: "osteoporose-ayurveda",
    title: "Ostéoporose et Ayurvéda : Reconstruire Ses Os Naturellement",
    excerpt: "Asthi Dhatu Kshaya : La vision millénaire qui régénère vos os. Découvrez votre profil osseux ayurvédique et le protocole de régénération en 4 phases.",
    date: "17 Décembre 2024",
    category: "Santé Osseuse",
    readTime: "25 min",
    image: osteoporoseImg,
  },
  {
    slug: "colon-irritable-ayurveda",
    title: "Le Syndrome du Côlon Irritable et l'Ayurvéda",
    excerpt: "Comprendre, identifier et apaiser naturellement votre côlon irritable avec la sagesse millénaire de l'Ayurvéda. Découvrez votre profil Grahani et le protocole thérapeutique personnalisé.",
    date: "17 Décembre 2024",
    category: "Digestion",
    readTime: "20 min",
    image: colonIrritableImg,
  },
  {
    slug: "ayurveda-sante-mentale",
    title: "L'Ayurvéda pour une Santé Mentale Optimale",
    excerpt: "Comment la médecine ancestrale indienne soigne anxiété, dépression et burn-out sans médicaments chimiques. Découvrez les protocoles holistiques validés par la science moderne.",
    date: "17 Décembre 2024",
    category: "Santé Mentale",
    readTime: "25 min",
    image: santeMentaleImg,
  },
  {
    slug: "les-3-doshas",
    title: "Les 3 Doshas de l'Ayurvéda : Guide Complet",
    excerpt: "Le guide complet pour comprendre Vata, Pitta et Kapha. Découvrez votre constitution unique avec notre quiz interactif de 30 questions et apprenez à équilibrer vos doshas.",
    date: "Décembre 2024",
    category: "Guides Débutants",
    readTime: "12 min",
    image: doshasImg,
  },
  {
    slug: "bienfaits-massage-abhyanga",
    title: "Les bienfaits du massage Abhyanga",
    excerpt: "Le massage à l'huile chaude Abhyanga est l'un des soins les plus précieux de l'Ayurvéda. Découvrez ses nombreux bienfaits pour le corps et l'esprit, ainsi que les huiles utilisées selon votre dosha.",
    date: "10 Décembre 2024",
    category: "Soins",
    readTime: "4 min",
  },
  {
    slug: "alimentation-ayurvedique-hiver",
    title: "Alimentation ayurvédique en hiver",
    excerpt: "Comment adapter votre alimentation selon les principes ayurvédiques pour traverser l'hiver en pleine forme et renforcer votre immunité naturellement.",
    date: "5 Décembre 2024",
    category: "Nutrition",
    readTime: "6 min",
  },
  {
    slug: "routine-matinale-dinacharya",
    title: "Dinacharya : la routine matinale ayurvédique",
    excerpt: "La routine quotidienne (Dinacharya) est essentielle en Ayurvéda. Découvrez les pratiques matinales recommandées pour commencer chaque journée avec énergie et clarté mentale.",
    date: "1 Décembre 2024",
    category: "Mode de vie",
    readTime: "7 min",
  },
  {
    slug: "plantes-ayurvediques-essentielles",
    title: "5 plantes ayurvédiques essentielles",
    excerpt: "Ashwagandha, Tulsi, Triphala... Découvrez les plantes médicinales les plus utilisées en Ayurvéda et leurs bienfaits pour votre santé.",
    date: "25 Novembre 2024",
    category: "Plantes",
    readTime: "5 min",
  },
  {
    slug: "gerer-stress-ayurveda",
    title: "Gérer le stress avec l'Ayurvéda",
    excerpt: "L'Ayurvéda propose une approche holistique pour gérer le stress. Techniques de respiration, alimentation adaptée, herbes calmantes : découvrez les solutions naturelles.",
    date: "20 Novembre 2024",
    category: "Bien-être",
    readTime: "6 min",
  },
];

// Liste des catégories disponibles
export const articleCategories = [
  "Tous",
  "Guides Débutants",
  "Conseils",
  "Soins",
  "Nutrition",
  "Mode de vie",
  "Plantes",
  "Bien-être",
  "Santé Mentale",
  "Digestion",
  "Santé Osseuse",
  "Sommeil",
  "Saisonnier",
];

// Helper pour récupérer les N derniers articles
export const getLatestArticles = (count: number = 3): ArticleData[] => {
  return articlesData.slice(0, count);
};

// Helper pour récupérer un article par slug
export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articlesData.find((article) => article.slug === slug);
};

// Helper pour récupérer les articles par catégorie
export const getArticlesByCategory = (category: string): ArticleData[] => {
  if (category === "Tous") return articlesData;
  return articlesData.filter((article) => article.category === category);
};
