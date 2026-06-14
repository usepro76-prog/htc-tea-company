import { Product, Category, Testimonial } from "../types";

export const CATEGORIES: Category[] = [
  {
    id: "Assam-Blend",
    name: "Assam Blend Tea Powder",
    description: "Premium Assam high-altitude granules and dust tea powder for strong, thick chai.",
    image: "/images/Premium Assam Blend Tea Powder collection.png",
  },
  {
    id: "Greem-Herbal-Tea",
    name: "Green & Herbal Tea",
    description: "Fresh organic green tea leaves blended with restorative Ayurvedic herbs for holistic wellness.",
    image: "/images/Green_Tea_Herbal_Tea.png",
  },
  {
    id: "masala-elaichi",
    name: "Premium masala and elaichi Tea Bugs",
    description: "Robust Assam tea powder blended with export grade elaichi and aromatic spices.",
    image: "/images/Premium_masala_and_elaichi_tea_bags.png",
  },
  {
    id: "instant-coffee",
    name: "Instant Coffee",
    description: "100% Pure Arabica Instant Coffee Natural Flavor - 50 gms",
    image: "/images/Instant_Coffee_collections.png",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "elaichi-special-premium-tea",
    name: "Elaichi Special Premium Tea",
    category: "masala-elaichi",
    price: 389,
    description: "Elaichi Special Premium Tea is a perfect blend of Granules & Dust tea Powder of Assams high altitude gardens with export grade real Elaichi. Its a perferct blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Curated for the ultimate tea enthusiast, our Elaichi Special Premium Tea marries the strong, robust character of premium Granules & Dust tea powder from high-altitude Assam tea gardens with export-grade aromatic cardamom (Elaichi). It offers an exceptional balance of strong liquor, striking golden hue, and a highly soothing wellness aroma to elevate your daily tea ritual. Perfectly thick and satisfying.",
    images: [
      "/images/Premium_masala_and_elaichi_tea_bags.png"
    ],
    rating: 4.9,
    reviewsCount: 145,
    isBestSeller: true,
    benefits: [
      "Infused with real export-grade green cardamom for authentic cooling digestive support",
      "High-altitude Assam granules & dust ensure a dark, bold, full-bodied liquor",
      "Rich aroma acts as a natural calmative and stress-reliever",
      "Specially crafted for perfect thickness when brewed with milk and sugar"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Gardens, India" },
      { label: "Ingredients", value: "Assam Granules & Dust Tea, Export-grade Green Cardamom" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "masala-special-premium-tea",
    name: "Masala Special Premium Tea",
    category: "masala-elaichi",
    price: 399,
    description: "Masala Special Premium Tea is a perfect blend of Granules & Dust tea Powder of Assams high altitude gardens with perfect Tea masala. Its a perferct blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Experience the warm embrace of traditional Indian spices. Our Masala Special Premium Tea combines robust granules and dust tea powder sourced from Assam's high-altitude estates with a finely measured blend of classic spices. Together, they steep into a tea with strong liquor, a brilliant golden color, an incredibly soothing spiced aroma, and the perfect rich thickness for traditional Chai.",
    images: [
      "/images/Premium_masala_and_elaichi_tea_bags.png"
    ],
    rating: 4.9,
    reviewsCount: 172,
    isNew: true,
    benefits: [
      "A powerful blend of warming spices (Ginger, Cardamom, Black Pepper, Cloves)",
      "Enhances immunity and acts as a comforting seasonal throat soother",
      "Delivers deep golden colors and intense, satisfying malty profiles",
      "Smoothly balanced for making authentic, spiced kadak milk tea"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Gardens, India" },
      { label: "Ingredients", value: "Assam CTC Granules & Dust, Premium Spices (Ginger, Cardamom, Cinnamon, Clove, Black Pepper)" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "premium-assam-blend",
    name: "Premium Assam Blend Tea Powder",
    category: "Assam-Blend",
    price: 349,
    description: "Premium Assam Blend Tea Powder is a perfect blend of Granules & Dust tea Powder of Assam's high altitude gardens. It's a perfect blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Sourced from the finest high-altitude gardens of Assam, our Premium Assam Blend Tea Powder is a masterfully crafted combination of premium granules and dust tea leaves. Designed specifically to brew the perfect cup of traditional Kadak Chai, it delivers an incredible, robust liquor with deep amber tones, a beautiful golden color, a soothing aroma, and the perfect rich thickness.",
    images: [
      "/images/Premium Assam Blend Tea Powder collection.png",
      "/images/Premium_Assam_Blend_Tea_Powder_1.jpg",
      "/images/Premium_Assam_Blend_Tea_Powder_2.jpg",
      "/images/Premium_Assam_Blend_Tea_Powder_3.jpg",
      "/images/Premium_Assam_Blend_Tea_Powder_4.jpg",
      "/images/Premium_Assam_Blend_Tea_Powder_5.jpg"
    ],
    rating: 4.9,
    reviewsCount: 312,
    isBestSeller: true,
    benefits: [
      "Optimal blend of granules & dust from high-altitude estates for extra strong flavor",
      "Delivers the iconic deep golden amber color and robust, full-bodied liquor",
      "Soothes and energizes with every sip, offering a refreshing premium aroma",
      "Specifically crafted for the perfect thickness when brewed with milk and sugar"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Tea Estates, India" },
      { label: "Grade", value: "Premium Granules & Dust CTC Blend" },
      { label: "Ingredients", value: "100% Pure Assam Tea Powder" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "hind-special-premium-tea",
    name: "Hind Special Premium Tea",
    category: "Assam-Blend",
    price: 400,
    description: "Hind Special Premium Tea is a perfect blend of Granules & Dust tea Powder of Assams high altitude gardens. Its a perferct blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Sourced from the premium gardens of Assam, Hind Special Premium Tea is an exceptional, custom-crafted blend of high-altitude Granules & Dust tea powder. Specially formulated to meet the highest expectations of traditional Chai lovers, it delivers a stunning golden color, extra strong liquor, a deeply soothing natural aroma, and the perfect rich thickness for an unforgettable daily brew.",
    images: [
      "/images/Hind_Special_Premium_Tea.jpeg"
    ],
    rating: 4.8,
    reviewsCount: 165,
    isNew: true,
    benefits: [
      "Optimal blend of granules & dust from high-altitude estates for an extra strong, crisp flavor",
      "Delivers the iconic deep golden amber color and robust, full-bodied liquor",
      "Filled with a soothing natural tea aroma that acts as a great daily revitalizer",
      "Specifically crafted for the perfect thickness when brewed with milk and sugar"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Tea Estates, India" },
      { label: "Grade", value: "Special Granules & Dust CTC Blend" },
      { label: "Ingredients", value: "100% Pure Assam Tea Powder" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  
  {
    id: "instant-coffee-pure-arabica",
    name: "100% Pure Arabica Instant Coffee",
    category: "instant-coffee",
    price: 299,
    description: "100% Pure Arabica Instant Coffee Natural Flavor - 50 gms. Experience a smooth, full-bodied coffee filled with premium aroma.",
    longDescription: "Sourced from the finest high-altitude bean estates, our 100% Pure Arabica Instant Coffee is premium custom-curated for coffee enthusiasts who demand instant perfection. The beans are slow-roasted and dried in tiny batches to capture natural chocolatey, malty notes and a perfectly smooth, velvety crema profile. Crafted with zero chicory, zero sugar, and no artificial materials.",
    images: [
      "/images/Instant_Coffee_collections.png"
    ],
    rating: 4.9,
    reviewsCount: 124,
    isNew: true,
    benefits: [
      "Crafted from premium 100% Arabica beans for a smoother, richer profile without bitterness",
      "Absolutely 0% chicory, zero sugar, and zero artificial preservatives",
      "Gently dried to preserve organic micro-crema and pristine aromatics",
      "Saves time and dissolves smoothly in both hot milk or water instantly"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Estates, India" },
      { label: "Ingredients", value: "100% Premium Arabica Coffee" },
      { label: "Weight", value: "50g Glass Jar" },
      { label: "Caffeine Level", value: "High" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aurobindo Ghosh",
    role: "Sensory Sommelier & Writer",
    text: "The Imperial First Flush is extraordinary. The delicate floral sweetness and complete lack of bitterness rival the very best premium tea houses in Europe. An absolute jewel of Indian garden-direct agriculture.",
    rating: 5,
    location: "New Delhi"
  },
  {
    id: "t2",
    name: "Meera Nair",
    role: "Wellness Consultant & Yoga Practitioner",
    text: "I start every morning with the Golden Turmeric Ginger Cleanse. The inclusion of real black pepper shards proves their deep understanding of Authentic Ayurveda. My joints feel lighter, and my skin has gained a lovely clean glow.",
    rating: 5,
    location: "Bengaluru"
  },
  {
    id: "t3",
    name: "Dr. Rachel Thomas",
    role: "Lifestyle Medicine Advisor",
    text: "I recommend Prana Teas to all my clients seeking to replace sugary sodas or excessive coffee with clean botanical focus states. The Ceremonial Japanese Matcha provides sustained L-theanine focus all afternoon without any post-coffee crash.",
    rating: 5,
    location: "Mumbai"
  }
];
