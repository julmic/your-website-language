// Source unique de vérité pour les données des cures
// Toute modification de prix doit être faite ici uniquement

export interface DurationOption {
  days: number;
  pricePerDay: number;
  totalPrice: number;
}

export interface CureData {
  id: string;
  name: string;
  description: string;
  price: string;           // Format affiché (ex: "240€/jour", "220€")
  pricePerDay?: number;    // Pour les cures multi-jours
  totalPrice?: number;     // Pour les cures à prix fixe (Journée, Week-end)
  link: string;
  durations?: DurationOption[];
}

export const curesData: CureData[] = [
  {
    id: "panchakarma",
    name: "Panchakarma",
    description: "Cure de détoxification complète",
    price: "240€/jour",
    pricePerDay: 240,
    link: "/cures/panchakarma",
    durations: [
      { days: 7, pricePerDay: 240, totalPrice: 1680 },
      { days: 10, pricePerDay: 240, totalPrice: 2400 },
      { days: 14, pricePerDay: 240, totalPrice: 3360 },
    ],
  },
  {
    id: "amrita",
    name: "Amrita",
    description: "Cure de régénération profonde",
    price: "240€/jour",
    pricePerDay: 240,
    link: "/cures/amrita",
  },
  {
    id: "karchan",
    name: "Karchan",
    description: "Cure amaigrissante ayurvédique",
    price: "230€/jour",
    pricePerDay: 230,
    link: "/cures/karchan",
  },
  {
    id: "laghana-rasayana",
    name: "Laghana Rasayana",
    description: "Cure détox et rajeunissement",
    price: "230€/jour",
    pricePerDay: 230,
    link: "/cures/laghana-rasayana",
  },
  {
    id: "ojas-kayakalpa",
    name: "Ojas Kayakalpa",
    description: "Cure de vitalité et longévité",
    price: "230€/jour",
    pricePerDay: 230,
    link: "/cures/ojas-kayakalpa",
  },
  {
    id: "personnalisee",
    name: "Personnalisée",
    description: "Programme sur-mesure",
    price: "240€/jour",
    pricePerDay: 240,
    link: "/cures/personnalisee",
    durations: [
      { days: 7, pricePerDay: 240, totalPrice: 1680 },
      { days: 10, pricePerDay: 240, totalPrice: 2400 },
      { days: 14, pricePerDay: 240, totalPrice: 3360 },
    ],
  },
  {
    id: "samvahana-vata",
    name: "Samvahana Vata",
    description: "Cure apaisante pour Vata",
    price: "230€/jour",
    pricePerDay: 230,
    link: "/cures/samvahana-vata",
  },
  {
    id: "prenatale",
    name: "Prénatale",
    description: "Soins pour futures mamans",
    price: "230€/jour",
    pricePerDay: 230,
    link: "/cures/prenatale",
  },
  {
    id: "postnatale",
    name: "Postnatale",
    description: "Récupération après accouchement",
    price: "230€/jour",
    pricePerDay: 230,
    link: "/cures/postnatale",
    durations: [
      { days: 7, pricePerDay: 230, totalPrice: 1610 },
      { days: 10, pricePerDay: 230, totalPrice: 2300 },
      { days: 14, pricePerDay: 230, totalPrice: 3220 },
    ],
  },
  {
    id: "journee",
    name: "Journée",
    description: "Expérience d'une journée",
    price: "220€",
    totalPrice: 220,
    link: "/cures/journee",
  },
  {
    id: "week-end-decouverte",
    name: "Week-end Découverte",
    description: "Initiation sur 2 jours",
    price: "380€",
    totalPrice: 380,
    link: "/cures/week-end-decouverte",
  },
];

// Helper pour récupérer une cure par son ID
export const getCureById = (id: string): CureData | undefined => 
  curesData.find(c => c.id === id);

// Helper pour formater le prix d'affichage
export const formatCurePrice = (cure: CureData): string => cure.price;
