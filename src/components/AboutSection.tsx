import React from "react";
import { Leaf, Award, ShieldCheck, Trophy, Sparkles, Heart } from "lucide-react";

interface AboutSectionProps {
  onShopNow: () => void;
}

export default function AboutSection({ onShopNow }: AboutSectionProps) {
  return (
    <section id="about-us-page" className="animate-fade-in divide-y divide-gold-200/10">
      
      {/* Editorial Hero Statement Banner */}
      <div className="bg-emerald-950 text-gold-50 py-20 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A059]"> Our Legacy & Vision </span>
          <h1 className="text-4xl md:text-5xl font-serif font-black leading-tight">
            The Hind Tea Company <br />Pioneers of Pure Tea Craftsmanship
          </h1>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light font-sans max-w-2xl mx-auto">
            Established in Pune, Maharashtra, The Hind Tea Company has earned a stellar reputation as a premier wholesale trader, supplier, and retailer of elite-standard tea powders. We bridge the distance between India's grandest estates and your teacup, promising unparalleled freshness, strength, and trust.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={onShopNow}
              className="bg-gold-500 hover:bg-gold-600 text-emerald-950 px-7 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
            >
              Explore the Harvest
            </button>
          </div>
        </div>
      </div>

      {/* Narrative Section 1: The Sourcing Revolution */}
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white">
        <div className="space-y-6">
          <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">01 / Pure Sourcing & Heritage</span>
          <h2 className="text-3xl font-serif font-bold text-emerald-950 leading-tight">
            Directly Sourced from High-Altitude Gardens
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            The secret behind a truly stellar cup of chai is the altitude and soils of its origin. Our master blenders procure our raw tea lots directly from the most pristine, premium tea gardens in Assam and Darjeeling. 
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            By completely avoiding long storage delays and standard corporate repackaging pipelines, we lock in the delicate essential oils that define authentic chai. Each batch features a calculated harmony of high-altitude CTC tea granules and dust tea, optimized for perfect brewing thickness, strong liquor, golden color, and soothing aroma.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-300/30">
          <img
            src="/images/about_page_img_1.png"
            alt="High attitude tea hills of Assam & Darjeeling"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent" />
        </div>
      </div>

      {/* Narrative Section 2: Authentic Spiced & Wellness Blends */}
      <div className="bg-gold-100/30">
        <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-300/30">
            <img
              src="/images/about_page_img_2.png"
              alt="Natural organic spices cardamom, turmeric and herbs"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">02 / Pure Herbs & Spiced Mastery</span>
            <h2 className="text-3xl font-serif font-bold text-emerald-950 leading-tight">
              Honoring Traditional Spiced Recipes & Wellness
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              For tea connoisseurs who demand more from their morning ritual, we produce masterfully balanced spiced blends using export-grade real cardamom, ginger, cinnamon, and pepper.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              We also focus deeply on premium wellness solutions. Our breakthrough **Shape In** fuses green tea with Rosemary leaves to target biological metabolism, while our **Herbal Desi Kahwa** features a synergistic formulation of Green Tea blended with 10 potent Indian herbs to actively promote proper digestion and build natural immunity.
            </p>
          </div>
        </div>
      </div>

      {/* Values & Standards Grid Section */}
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 space-y-12 bg-white">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-bold text-[#B19351] uppercase tracking-widest">Conscious Quality</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950">
            Four Pillars of Uncompromising Integrity
          </h2>
          <p className="text-xs text-gray-500">
            At The Hind Tea Company, building trust means being transparent about how we operate, grade, and package.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Leaf size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">100% Purity Verified</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We maintain rigid quality-checking checks to verify no artificial food coloring, chemical preservatives, or stalks are blended in.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Trophy size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">Pune's Trusted Brand</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Serving hundreds of prominent retailers, cafes, and families from our landmark Raviwar Peth wholesale depot in Maharashtra.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Award size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">Wholesale Pricing</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              By trading directly, we provide top-grade garden teas at unmatched price-structures for wholesale dealers and retail buyers.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">Hygienic Packaging</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every blend is sealed in modern, dust-free food-grade packaging that safely retains the organic freshness and intense tea flavor.
            </p>
          </div>

        </div>

        {/* Quality Seal banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-emerald-900/5 border border-emerald-900/10 rounded-xl text-center sm:text-left">
          <ShieldCheck size={40} className="text-[#C5A059] flex-shrink-0" />
          <div>
            <h4 className="font-serif font-bold text-emerald-950 text-sm">The Hind Tea Quality Seal</h4>
            <p className="text-xs text-gray-500 max-w-xl">
              Our signature quality criteria guarantees that every gram of CTC, Dust, Cardamom Special, and wellness Herbal tea meets severe health standards regarding moisture containment, leaf purity, and pristine natural aroma.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
