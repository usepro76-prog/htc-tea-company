import { Product, Category, Testimonial } from "../types";

export const CATEGORIES: Category[] = [
  {
    id: "classics",
    name: "Signature Classics",
    description: "Handpicked single-origin whole leaf black & green teas from iconic Himalayan estates.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "wellness",
    name: "Wellness & Herbal",
    description: "Traditional Ayurvedic botanical blends, roots, and flowers for holistic healing.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "exotics",
    name: "Exotics & Matchas",
    description: "Rare ceremonial matchas, magical elixirs, and visual floral loose-leaf masterpieces.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "imperial-darjeeling",
    name: "Imperial Darjeeling First Flush",
    category: "classics",
    price: 699,
    description: "The 'Champagne of Teas' harvested in late spring. Bright, crisp with subtle notes of muscatel grapes and spring moss.",
    longDescription: "Sourced directly from the misty peaks of the high-altitude Okauti and Castleton estates, our First Flush Darjeeling is highly prized by connoisseurs around the world. These young, tender leaves are handpicked at dawn to capture their pristine floral sweetness and exquisite clarity. Every sip brings a wave of summer field nectar and light wood smoke.",
    images: [
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.9,
    reviewsCount: 248,
    isBestSeller: true,
    benefits: [
      "Rich in protective bio-active flavonoids",
      "Gently boots metabolism and daily focus",
      "Soothes digestion with subtle sweetness",
      "Natural clean energy without coffee jitters"
    ],
    specifications: [
      { label: "Origin", value: "Darjeeling, West Bengal, India" },
      { label: "Altitude", value: "4,500 - 6,000 Feet" },
      { label: "Ingredients", value: "100% Camellia Sinensis (Black Tea Leaves)" },
      { label: "Caffeine Level", value: "Medium-High" },
      { label: "Steep Time", value: "3 - 4 minutes at 90°C" }
    ]
  },
  {
    id: "golden-turmeric-ginger",
    name: "Veda Glow Golden Turmeric Ginger",
    category: "wellness",
    price: 499,
    description: "A warming Ayurvedic infusion of organically farmed turmeric root, spicy ginger, and coarse black pepper for peak vitality.",
    longDescription: "Unlock ancient wellness secrets with this robust blend of golden turmeric root harvested from pristine organic farms in southern India, masterfully balanced with spicy ginger shards, lemongrass, and essential Indian black pepper. The black pepper is crucial: its piperine naturally enhances turmeric absorption, giving you the ultimate daily immunity shield.",
    images: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.8,
    reviewsCount: 412,
    isBestSeller: true,
    benefits: [
      "Highly effective natural anti-inflammatory elixir",
      "Promotes pristine glow, clear skin and digestive health",
      "Enhances immunity and metabolic detoxification",
      "100% Caffeine-Free - perfect for evening recovery"
    ],
    specifications: [
      { label: "Origin", value: "Wayand & Alleppey region, India" },
      { label: "Type", value: "Ayurvedic Botanical Herbal Tea" },
      { label: "Ingredients", value: "Turmeric, Ginger, Lemongrass, Black Pepper" },
      { label: "Caffeine Level", value: "Zero (Caffeine-Free)" },
      { label: "Steep Time", value: "5 minutes at 100°C" }
    ]
  },
  {
    id: "himalayan-pure-green",
    name: "Pure Himalayan Whole Leaf Green Tea",
    category: "classics",
    price: 399,
    description: "Delicate organic green tea leaves from the high Himalayas. Exceptionally smooth, sweet, and rich in natural antioxidants.",
    longDescription: "Cultivated in the clean valleys and mineral-dense soil of the high Himalayas, our pure green tea is steam-fired to prevent oxidation. This gentle process locks in the leaves' rich emerald chlorophyll and earthy sweet undertones. It features none of the bitter green tea aftertaste—only clean, crisp, alpine refreshing purity.",
    images: [
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.7,
    reviewsCount: 189,
    isNew: true,
    benefits: [
      "Extremely rich in EGCG catechins and natural antioxidants",
      "Assists in healthy weight management and wellness",
      "Cleanses toxins and hydrates the body naturally",
      "Mild caffeine content for a calm, sustainable energy boost"
    ],
    specifications: [
      { label: "Origin", value: "High-Altitude Uttarakhand Valley, India" },
      { label: "Altitude", value: "5,000 - 6,500 Feet" },
      { label: "Ingredients", value: "Organic Camellia Sinensis (Green Tea)" },
      { label: "Caffeine Level", value: "Low-Medium" },
      { label: "Steep Time", value: "2 - 3 minutes at 80°C (Avoid boiling water)" }
    ]
  },
  {
    id: "exotic-kashmiri-kahwa",
    name: "Royal Kashmiri Kahwa & Saffron",
    category: "wellness",
    price: 599,
    description: "An exotic celebratory formulation of green tea leaves, crushed green cardamoms, cinnamon bark, almonds, and Kashmiri Saffron strands.",
    longDescription: "Indulge in the regal traditions of Kashmir. Our authentic Kahwa blend starts with whole green tea leaves, carefully balanced with warm fragments of sweet cinnamon, hand-ground pods of green cardamom, fine almond slivers, and real threads of premium Kashmiri red saffron. It steeps into a beautiful golden elixir filled with robust floral warmth.",
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.9,
    reviewsCount: 320,
    isBestSeller: true,
    benefits: [
      "Instantly warms the body and alleviates seasonal congestion",
      "Saffron-infused compounds elevate mood and soothe stress",
      "Almonds and spices support robust metabolic activity",
      "A luxurious after-meal digestif filled with natural spices"
    ],
    specifications: [
      { label: "Origin", value: "Kashmir Valley Estate, India" },
      { label: "Ingredients", value: "Green Tea, Saffron, Cardamom, Cinnamon, Almond Shards" },
      { label: "Caffeine Level", value: "Low" },
      { label: "Steep Time", value: "3 - 5 minutes at 85°C" },
      { label: "Serving Suggestion", value: "Serve hot, sweetened with organic white honey" }
    ]
  },
  {
    id: "uji-matcha-ceremonial",
    name: "Ceremonial Uji Japanese Matcha",
    category: "exotics",
    price: 1199,
    description: "Stone-ground, shade-grown ceremonial-grade Japanese green tea from the historic mountains of Uji. Incredibly rich umami finish.",
    longDescription: "Exclusively imported for tea connoisseurs, our Ceremonial Grade Matcha is crafted from tencha green tea leaves shade-grown for 4 weeks in historic Uji, Kyoto. This stimulates intense L-Theanine production. Stoneground into an ultra-fine vibrant green powder, it produces an incomparable thick froth, velvety texture, and a profound botanical umami taste.",
    images: [
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.9,
    reviewsCount: 154,
    isBestSeller: true,
    benefits: [
      "Unrivaled focus: L-theanine triggers long-lasting calm alertness",
      "137 times the antioxidants of brewed common green tea",
      "Boosts resting energy expenditure and calorie burning",
      "Powerful full-body detoxifier due to pristine shade-growing"
    ],
    specifications: [
      { label: "Origin", value: "Wazuka Hills, Uji, Kyoto, Japan" },
      { label: "Cultivar", value: "Yabukita & Sayamakaori (First Harvest)" },
      { label: "Ingredients", value: "100% Stone-Ground Organic Tencha Matcha Green Tea" },
      { label: "Caffeine Level", value: "High (Sustainable release)" },
      { label: "Preparation", value: "Whisk 1.5g with 70ml hot water (75°C) in zig-zag motion" }
    ]
  },
  {
    id: "blue-butterfly-pea-tea",
    name: "Blue Butterfly Pea & Lemongrass Blend",
    category: "exotics",
    price: 449,
    description: "A striking cobalt tea crafted from Clitoria ternatea flowers and fresh lemongrass. Turns a vivid purple with a dash of lime.",
    longDescription: "Add theatre to your teacup! Crafted from organic wild-grown Butterfly Pea flowers and aromatic dried lemongrass, this caffeine-free botanical infusion features a gorgeous royal blue color. Squeeze in a twist of lemon juice and watch the natural pH change trigger a magical transition into a stunning royal violet-purple hue.",
    images: [
      "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.6,
    reviewsCount: 198,
    isNew: true,
    benefits: [
      "Abundant in anthocyanins which stimulate healthy skin and hair collagen",
      "Highly cooling digestive tonic - spectacular served iced of a summer morning",
      "A complete caffeine-free sensory experience for stress-relief",
      "Natural detoxifying fluid and circulatory helper"
    ],
    specifications: [
      { label: "Origin", value: "North Bengal hills & Kerala, India" },
      { label: "Ingredients", value: "Butterfly Pea Flower, Lemongrass Shards" },
      { label: "Caffeine Level", value: "Zero (Caffeine-Free)" },
      { label: "Steep Time", value: "4 - 5 minutes at 95°C" },
      { label: "Magical Reaction", value: "Changes blue-to-purple upon contact with citric juices" }
    ]
  },
  {
    id: "midnight-chamomile-lavender",
    name: "Midnight Chamomile Lavender Dream",
    category: "wellness",
    price: 479,
    description: "Premium pure Egyptian organic Chamomile blossoms integrated with fragrant French lavender spikes and sweet mint.",
    longDescription: "The ultimate pre-bedtime sanctuary. We blend the highest food-grade chamomile blossoms from Egypt's fertile Nile valleys, celebrated for their honeyed sweet scent, with culinary French lavender blossoms and a hint of refreshing spearmint leaves. Perfectly curated to decelerate a busy mind and guide you into a state of blissful, uninterrupted sleep.",
    images: [
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.8,
    reviewsCount: 295,
    benefits: [
      "Deeply relaxes the nervous system and eases mental tension",
      "Reduces insomnia and promotes deep restful sleep cycles",
      "Eases late-night mild digestive discomfort",
      "A gentle warm cup with sweet floral-lavender aromatherapeutic benefits"
    ],
    specifications: [
      { label: "Origin", value: "Fayoum Oasis, Egypt & Provence, France" },
      { label: "Ingredients", value: "Chamomile Flowers, Lavender Flowers, Spearmint" },
      { label: "Caffeine Level", value: "Zero (Caffeine-Free)" },
      { label: "Steep Time", value: "4 - 6 minutes at 95°C" }
    ]
  },
  {
    id: "royal-earl-grey",
    name: "Royal Assam Earl Grey Citrus",
    category: "classics",
    price: 499,
    description: "Bold handpicked Assam black tea leaves sprayed with natural essential oil of real Italian Bergamot Orange.",
    longDescription: "A sophisticated reinvention of a classic heirloom. We start with rich, malty, full-bodied golden black tea tips from Upper Assam's boutique plantations, then spray them with cold-pressed pure bergamot essential oil sourced straight from sunny orchards in Calabria, Italy. Bold, punchy, citrusy, with a gorgeous woody malty base.",
    images: [
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.7,
    reviewsCount: 167,
    benefits: [
      "Increases alert wakefulness and logical brain function",
      "Bergamot oil contains natural aromatherapy mood lifters",
      "Supports cardiovascular circulatory health",
      "Exquisite paired on cold afternoons with a splash of milk"
    ],
    specifications: [
      { label: "Origin", value: "Sibsagar, Upper Assam (India) & Calabria (Italy)" },
      { label: "Ingredients", value: "Assam Orthodox Black Tea, Pure Oil of Bergamot" },
      { label: "Caffeine Level", value: "High" },
      { label: "Steep Time", value: "3 - 5 minutes at 95°C" }
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
