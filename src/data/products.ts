import { Product, Category, Testimonial, GoogleReview } from "../types";

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
    isBestSeller: true,
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
    id: "family-mixture-premium-tea-powder",
    name: "Tea Bugs Family Mixture Premium Tea Powder",
    category: "Assam-Blend",
    price: 400,
    description: "Family Mixture Premium Tea is a perfect blend of Granules, Dust & Orthodox Tea Powder of Assams high altitude gardens. Its a perferct blend of Medium Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Sourced from the premium high-altitude gardens of Assam, our Family Mixture Premium Tea Powder is a masterfully balanced premium blend of CTC Granules, CTC Dust, and exquisite whole-leaf Orthodox tea. Designed for the perfect family setting, this custom formulation delivers a pleasingly rich medium liquor, a beautiful golden color, a highly comforting aroma, and a perfect texture and body that satisfies every palette.",
    images: [
      "/images/Family_Mixture.jpeg"
    ],
    rating: 4.8,
    reviewsCount: 132,
    isNew: true,
    benefits: [
      "Premium triple blend featuring CTC granules, CTC dust, and orthodox whole-leaf particles",
      "Brews a beautifully rounded medium liquor strength, perfect for custom household preferences",
      "Deeply soothing and rejuvenating natural tea aroma",
      "Delivers superb body and texture that holds up spectacularly with or without milk"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Gardens, India" },
      { label: "Grade", value: "CTC Granules, CTC Dust & Orthodox Mixture" },
      { label: "Ingredients", value: "Pure Assam Black Tea (Granules, Dust & Leaves)" },
      { label: "Caffeine Level", value: "Medium" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "assam-special-medium-blend",
    name: "Tea Bugs Assam Special (Medium Blend Tea)",
    category: "Assam-Blend",
    price: 270,
    description: "Assam Special is a perfect blend of Granules & Dust tea Powder of Assams high altitude gardens. Its a perferct blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Crafted for authentic taste and incredible value, Tea Bugs Assam Special is a robust, well-rounded medium CTC blend of high-altitude granules and tea dust from Assam. Specially selected to deliver high quality at Rs. 270/- Per Kg, it produces an intensely satisfying character, rich amber-gold color, comforting aroma, and full thickness perfect for everyday traditional household Chai.",
    images: [
      "/images/Assam_Special.jpeg"
    ],
    rating: 4.7,
    reviewsCount: 98,
    isNew: true,
    benefits: [
      "Outstanding value premium blend offering authentic high-altitude taste at an economic offer",
      "Carefully balanced CTC granules and CTC dust ensure robust and dependable daily brewing",
      "Yields a gorgeous amber golden liquor with an aromatic and refreshing finish",
      "Perfect thickness and texture when combined with milk and sugar"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Gardens, India" },
      { label: "Grade", value: "Medium Blend Granules & Dust CTC" },
      { label: "Ingredients", value: "Pure Assam Black Tea Powder" },
      { label: "Caffeine Level", value: "Medium-High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "diamond-special-premium-tea-powder",
    name: "Tea Bugs Diamond Special Premium Tea Powder",
    category: "Assam-Blend",
    price: 460,
    description: "Diamond Special Premium Tea is a perfect blend of Granules & Dust tea Powder of Assams high altitude gardens. Its a perferct blend of Extra Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Specially selected from the absolute peak harvest of high-altitude Assam tea gardens, Tea Bugs Diamond Special Premium Tea Powder is the ultimate grade tea CTC blend. Uncompromising on strength and flavor, it bridges unmatched intensity and refinement, offering extra strong liquor, a flawless golden-amber color, an deeply rejuvenating soothing aroma, and unmatched perfect body and thickness.",
    images: [
      "/images/Diamond_Special .jpeg"
    ],
    rating: 4.9,
    reviewsCount: 142,
    isNew: true,
    isBestSeller: true,
    benefits: [
      "Ultimate high-altitude premium grade offering an extra robust, full-bodied cup of Kadak Chai",
      "Brews an incredibly rich, extra strong liquor with a beautiful sparkling golden finish",
      "Perfect thickness and deep-reaching aromatic highlights that stand out superbly",
      "Pure, high-grade granules & dust handpicked for elite strength and premium freshness"
    ],
    specifications: [
      { label: "Origin", value: "Premium High-Altitude Assam Gardens, India" },
      { label: "Grade", value: "Diamond Grade Extra Strong Granules & Dust CTC" },
      { label: "Ingredients", value: "100% Pure Assam Premium Tea Powder" },
      { label: "Caffeine Level", value: "Very High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "gold-ctc-premium-tea-powder",
    name: "Tea Bugs Gold CTC Premium Tea Powder",
    category: "Assam-Blend",
    price: 400,
    description: "Hind Gold CTC Premium is a perfect blend of Granules tea Powder of Assams high altitude gardens. Its a perferct blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Selected from high-altitude estates, Tea Bugs Gold CTC Premium Tea Powder is a pure, single-origin blend containing only the highest grade CTC tea granules. Formulated specifically to bring out an extra rich, vibrant cup of gold-colored traditional Kadak Chai, it is balanced beautifully to offer strong liquor, comforting warmth, and a comforting thick texture of creaminess.",
    images: [
      "/images/Gold CTC.jpeg"
    ],
    rating: 4.8,
    reviewsCount: 178,
    isNew: true,
    benefits: [
      "Crafted exclusively with high-grade tea granules from premium high-altitude garden blocks",
      "Yields strong, robust traditional liquor and a beautiful vibrant golden amber cup",
      "Exceptional thickness when combined with milk and sugar, making it perfect for custom household setups",
      "An intensely soothing, pure natural garden aroma that revitalizes mind and body"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Tea Gardens, India" },
      { label: "Grade", value: "Premium CTC Granules" },
      { label: "Ingredients", value: "100% Pure Assam Tea Granules" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "elaichi-special-premium-tea-powder",
    name: "Tea Bugs Elaichi Special Premium Tea Powder",
    category: "masala-elaichi",
    price: 530,
    description: "Elaichi Special Premium Tea is a perfect blend of Granules & Dust tea Powder of Assams high altitude gardens with export grade real Elaichi. Its a perferct blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Sourced from high-altitude estates, Tea Bugs Elaichi Special Premium Tea Powder combines a full-bodied CTC granules and dust blend with actual export-quality hand-crushed real elaichi (green cardamom). Together they deliver thick density, maximum strong liquor strength, a vibrant bright golden color, and a uniquely soothing signature aroma that revitalizes your daily Chai routine.",
    images: [
      "/images/Elaichi Special.jpeg"
    ],
    rating: 4.9,
    reviewsCount: 124,
    isNew: true,
    isBestSeller: true,
    benefits: [
      "Combines peak high-altitude Assam CTC granules & dust with export-grade whole cardamom",
      "Delivers the signature strong ginger-malty liquor with intense aromatic elaichi coolness",
      "Excellent thick body ideal for perfect boiling and preparing authentic milk Chai",
      "Natural cardamom active oils support metabolic immunity and pristine digestion"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Gardens, India" },
      { label: "Grade", value: "Premium CTC Granules & Dust with Green Elaichi" },
      { label: "Ingredients", value: "Assam Black Tea, Real green Cardamom (Elaichi)" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "masala-special-premium-tea-powder",
    name: "Tea Bugs Masala Special Premium Tea Powder",
    category: "masala-elaichi",
    price: 480,
    description: "Masala Special Premium Tea is a perfect blend of Granules & Dust tea Powder of Assams high altitude gardens with perfect Tea masala. Its a perferct blend of Strong Liquor, Golden Color, Soothing Aroma and Perfect Thickness.",
    longDescription: "Premium Assam high-altitude CTC granules & dust masterfully mixed with a balanced, warm selection of traditional tea spices (chai masala). Tea Bugs Masala Special delivers an extra strong liquor, a highly comforting spiced aroma (featuring ginger, cardamom, cinnamon, and black pepper), a classic thick golden texture, and deep warmth suited perfectly for sweet traditional milk brewing.",
    images: [
      "/images/ Masala_Special.jpeg"
    ],
    rating: 4.8,
    reviewsCount: 110,
    isNew: true,
    isBestSeller: true,
    benefits: [
      "Combines high-altitude Assam CTC granules & dust with a balanced master-mix of classic spices",
      "Delivers a perfect strong liquor with the ultimate aromatic warmth of high-grade cardamom, ginger, and cinnamon",
      "Creates the signature extra thick, bold texture essential for premium milk Chai creations",
      "Spices contain natural warmth and antioxidants that boost everyday digestion and energy"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Assam Gardens, India" },
      { label: "Grade", value: "Spiced CTC Granules & Dust Blend" },
      { label: "Ingredients", value: "Assam Black Tea, Traditional Chai Spices (Ginger, Cardamom, Cinnamon, Black Pepper, Cloves)" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 100°C" }
    ]
  },
  {
    id: "darjeeling-green-tea",
    name: "Tea Bugs Darjeeling Green Tea",
    category: "Greem-Herbal-Tea",
    price: 120,
    description: "Darjeeling Green Tea whole leaves. Best for Overall Health.",
    longDescription: "Harvested from the prestigious high-altitude estates of Darjeeling, Tea Bugs Darjeeling Green Tea features delicately plucked premium whole leaves. Made specifically to retain natural antioxidants and refreshing floral sweet undertones, this is a smooth, high-quality brew with zero bitterness. Best for Overall Health, daily metabolism boost, and absolute mental clarity.",
    images: [
      "/images/Darjeeling_Green.png"
    ],
    rating: 4.8,
    reviewsCount: 84,
    isNew: true,
    benefits: [
      "100% Pure Darjeeling whole leaves packed with natural catechins and antioxidants",
      "Promotes general wellness, digestion, and absolute overall health",
      "Extremely clean, smooth beverage with low caffeine content for gentle, stable energy",
      "Soothes and hydrates the body while helping maintain everyday fitness and focus"
    ],
    specifications: [
      { label: "Origin", value: "Darjeeling, West Bengal, India" },
      { label: "Grade", value: "Premium Whole Leaf Green Tea" },
      { label: "Ingredients", value: "100% Camellia Sinensis (Organic Green Tea Leaves)" },
      { label: "Caffeine Level", value: "Low" },
      { label: "Steep Time", value: "2 - 3 minutes at 80°C" }
    ]
  },
  {
    id: "shape-in-herbal-tea",
    name: "Tea Bugs Shape In",
    category: "Greem-Herbal-Tea",
    price: 270,
    description: "Shape In is a premium Herbal tea for reducing body & tummy fat faster. Its a perfect blend of Green tea & dried Rosemary leaves.",
    longDescription: "Formulated specifically for active wellness and weight support, Tea Bugs Shape In is a premium Ayurvedic herbal formulation designed for reducing body & tummy fat faster. Integrating premium Green tea with beneficial organic dried Rosemary leaves, it offers a deeply aromatic, refreshing botanical blend that gently enhances metabolism, cleanses toxins, and boosts overall vitality.",
    images: [
      "/images/Shape_In.png"
    ],
    rating: 4.8,
    reviewsCount: 92,
    isNew: true,
    benefits: [
      "Premium wellness blend crafted for reducing body & tummy fat faster",
      "Masterfully balanced synergistic pairing of premium Green tea and dried Rosemary leaves",
      "Filled with natural antioxidants that aid weight goals, healthy digestion, and cellular health",
      "Delightful, clean earthy taste with a soothing rosemary herbal aroma"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Tea Estates, India" },
      { label: "Grade", value: "Premium Wellness Herbal Tea" },
      { label: "Ingredients", value: "Green Tea, Dried Rosemary Leaves" },
      { label: "Caffeine Level", value: "Low" },
      { label: "Steep Time", value: "3 - 5 minutes at 85°C" }
    ]
  },
  {
    id: "herbal-desi-kahwa",
    name: "Tea Bugs Herbal Desi Kahwa",
    category: "Greem-Herbal-Tea",
    price: 270,
    description: "Herbal Desi Kahwa is a premium Herbal tea for proper digestion, improve metabolism & immunity power. Its a perfect blend of Green tea & 10 Indian Herbs.",
    longDescription: "Tea Bugs Herbal Desi Kahwa is a premium, tradition-inspired wellness herbal tea crafted to promote proper digestion, improve metabolism, and build robust immunity power. Combining high-quality green tea with a synergistic blend of 10 therapeutic Indian herbs and spices, it offers a warm, comforting, and highly aromatic brew that brings the authentic taste of Himalayan Kahwa right into your home.",
    images: [
      "/images/Herbal_Desi_Kahwa.png"
    ],
    rating: 4.9,
    reviewsCount: 104,
    isNew: true,
    benefits: [
      "Specially formulated for proper digestion, improving metabolism, and boosting natural immunity power",
      "Features a master complex of premium Green tea perfectly blended with 10 traditional Indian herbs",
      "Provides relief from seasonal sniffles and throat discomfort with comforting natural warmth",
      "Delivers a gorgeous pale-gold herbal infusion with a robust, deeply soothing aromatic spice profile"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Estates, India" },
      { label: "Grade", value: "Premium Spiced Herbal Green Tea" },
      { label: "Ingredients", value: "Green Tea, 10 Active Indian Herbs (Ginger, Tulsi, Cardamom, Black Pepper, Cinnamon, Clove, Nutmeg, etc.)" },
      { label: "Caffeine Level", value: "Low" },
      { label: "Steep Time", value: "3 - 5 minutes at 90°C" }
    ]
  },
  {
    id: "tea-bugs-coffee-natural-flavor",
    name: "Tea Bugs Instant Coffee Natural Flavor",
    category: "instant-coffee",
    price: 100,
    description: "100% Pure Arabica Instant Coffee Natural Flavor - 50 gms.",
    longDescription: "Sourced from high-altitude estates, Tea Bugs Instant Coffee Natural Flavor is a 100% Pure Arabica coffee powder crafted in 50g packs. It dissolves instantly to deliver a rich aroma, delicious full-bodied strength, and beautiful natural flavor profile with no artificial additives or preservatives.",
    images: [
      "/images/Coffee_Natural_Flavor.png"
    ],
    rating: 4.8,
    reviewsCount: 76,
    isNew: true,
    benefits: [
      "100% Pure Arabica beans offering clean, smooth, zero-bitterness premium coffee",
      "Absolutely pure natural flavor with no chicory, zero sugar, and no additives",
      "Locks in rich aromatic compounds for a fresh-brewed flavor instantly",
      "Dissolves perfectly in seconds in hot water or warm milk"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Estates, India" },
      { label: "Grade", value: "100% Pure Arabica" },
      { label: "Ingredients", value: "Pure Arabica Coffee Powder" },
      { label: "Weight", value: "50 gms" },
      { label: "Caffeine Level", value: "High" }
    ]
  },
  {
    id: "tea-bugs-coffee-hazelnut-flavor",
    name: "Tea Bugs Instant Coffee Hazelnut Flavor",
    category: "instant-coffee",
    price: 120,
    description: "100% Pure Arabica Instant Coffee Hazelnut Flavor - 50 gms.",
    longDescription: "Infused with the warm, buttery notes of toasted hazelnuts, Tea Bugs Instant Coffee Hazelnut Flavor combines premium 100% Pure Arabica coffee beans with real natural hazelnut extracts. Perfectly roasted and finely blended, it brews a comforting, rich cup filled with a satisfying nutty aroma and a smooth, elegant sweetness without any artificial preservatives.",
    images: [
      "/images/Coffee_Hazelnut_Flavor.png"
    ],
    rating: 4.9,
    reviewsCount: 88,
    isNew: true,
    benefits: [
      "100% Pure Arabica coffee beans beautifully infused with comforting toasted hazelnut flavor",
      "Contains no added sugars, no chicory, and zero artificial preservatives",
      "Delivers a highly aromatic, warm, and inviting nutty finish with every single sip",
      "Dissolves perfectly and instantly in hot milk or water for a luxury café experience at home"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Estates, India" },
      { label: "Grade", value: "100% Pure Arabica Flavored" },
      { label: "Ingredients", value: "Pure Arabica Coffee Powder, Natural Hazelnut Flavouring" },
      { label: "Weight", value: "50 gms" },
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

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "gr1",
    name: "Ramesh Joshi",
    text: "Authentic and original quality tea powder has been served by them for years in Raviwar Peth. Highly recommended.",
    rating: 5,
    location: "Pune, MH",
    isLocalGuide: true
  },
  {
    id: "gr2",
    name: "Priya Kulkarni",
    text: "Best choice for wholesale and retail tea buyers in Pune. Very polite owners and perfect pricing.",
    rating: 5,
    location: "Pune, MH",
    isLocalGuide: false
  },
  {
    id: "gr3",
    name: "Amit Deshpande",
    text: "Their special tea dust blend provides high strength and a strong natural aroma. Perfect Maharashtrian style kadak chai!",
    rating: 5,
    location: "Pune, MH",
    isLocalGuide: true
  },
  {
    id: "gr4",
    name: "Sunita Ranade",
    text: "Extremely hygienic, authentic leaves with zero artificial color. The color of the tea is purely golden and beautiful.",
    rating: 5,
    location: "Maharashtra",
    isLocalGuide: true
  },
  {
    id: "gr5",
    name: "Vinayak Shinde",
    text: "If you are starting a tea franchise or local cafe, purchase in bulk from Hind Tea Company for the most premium taste.",
    rating: 5,
    location: "Pune, MH",
    isLocalGuide: false
  },
  {
    id: "gr6",
    name: "Dr. Anshu Gupta",
    text: "Best organic cardamom and masala tea blends in Pune, the flavor feels entirely natural and refreshing.",
    rating: 5,
    location: "Mumbai, MH",
    isLocalGuide: true
  },
  {
    id: "gr7",
    name: "Nikhil More",
    text: "Family-owned legacy depot with outstanding quality and reasonable prices. Our favorite place since childhood.",
    rating: 5,
    location: "Pune, MH",
    isLocalGuide: false
  },
  {
    id: "gr8",
    name: "Sneha Patil",
    text: "Very clean storage and quick service on WhatsApp. Sourced directly with direct pricing structures.",
    rating: 5,
    location: "Pune, MH",
    isLocalGuide: true
  },
  {
    id: "gr9",
    name: "Suresh Kumar",
    text: "A genuine wholesale tea leaves vendor in Pune. The aroma and strength of the Assam CTC granules are outstanding.",
    rating: 5,
    location: "Maharashtra",
    isLocalGuide: true
  },
  {
    id: "gr10",
    name: "Vikram Aditi",
    text: "Purest herbal infusions and strong CTC dust. Outstanding customer support and genuine billing, highly trusted.",
    rating: 5,
    location: "Pune, MH",
    isLocalGuide: false
  }
];

