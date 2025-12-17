import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";

// Import blog images
import osteoporoseImg from "@/assets/blog/osteoporose-hero.webp";
import colonIrritableImg from "@/assets/blog/colon-irritable-hero.webp";

const articles = [
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
  },
  {
    slug: "introduction-ayurveda",
    title: "Introduction à l'Ayurvéda : Les 3 Doshas",
    excerpt: "Découvrez les fondamentaux de l'Ayurvéda et comprenez votre constitution unique à travers les trois doshas : Vata, Pitta et Kapha. Cette connaissance ancestrale vous permettra de mieux comprendre votre corps et vos besoins.",
    date: "15 Décembre 2024",
    category: "Conseils",
    readTime: "5 min",
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

const categories = ["Tous", "Conseils", "Soins", "Nutrition", "Mode de vie", "Plantes", "Bien-être", "Santé Mentale", "Digestion", "Santé Osseuse"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Blog & Actualités
            </h1>
            <p className="text-lg text-muted-foreground">
              Explorez nos articles pour approfondir vos connaissances en Ayurvéda et découvrir des conseils bien-être au quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  category === "Tous"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card 
                key={article.slug} 
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  {article.image ? (
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl opacity-30">🌿</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 bg-background/80 backdrop-blur-sm rounded">
                      <Tag className="h-3 w-3" />
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <h2 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Lire l'article
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
