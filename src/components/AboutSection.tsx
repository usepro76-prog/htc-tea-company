import React from "react";
import { Leaf, Award, Globe, Heart, ShieldCheck } from "lucide-react";

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
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#C5A059]"> Our Heritage Story </span>
          <h1 className="text-4xl md:text-5xl font-serif font-black leading-tight">
            Crafting the Pinnacle of <br />Botanical Purity
          </h1>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light font-sans max-w-2xl mx-auto">
            Prana Tea Collective was born from a singular pure vision: to liberate the incredible flavours and wellness potentials of premium estate leaves, delivering them straight to your teacup without the storage-lags of typical supply chains.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={onShopNow}
              className="bg-gold-500 hover:bg-gold-600 text-emerald-950 px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
            >
              Explore the Harvest
            </button>
          </div>
        </div>
      </div>

      {/* Narrative Section 1: The Sourcing Revolution */}
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">01 / The Squeezed Sourcing Gap</span>
          <h2 className="text-3xl font-serif font-bold text-emerald-950 leading-tight">
            Freshness Measured in Days, <br />Not Months.
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Did you know traditional e-commerce teas sit in bulk shipping warehouses, global cargo hulls, and wholesale middle-man hubs for up to 9-12 months before they hit retail shelves? During this excruciating delay, delicate essential oils dry up, compromising taste and medical value.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            At Prana Tea Collective, we completely eliminate brokers. We harvest our leaves in collaboration with historic gardens in Darjeeling and Assam, process and vacuum-pack them at source within 48-72 hours, and dispatch directly to you in pristine, premium nitrogen-purged gold canisters. Freshness you can instantly taste on the first steep.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-300/30">
          <img
            src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=900"
            alt="Darjeeling tea hills"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent" />
        </div>
      </div>

      {/* Narrative Section 2: Authentic Ayurvedic Fusion */}
      <div className="bg-gold-100/30">
        <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-300/30">
            <img
              src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=900"
              alt="Herbal ingredients turmeric dry roots"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent" />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">02 / Ayurvedic Longevity wisdom</span>
            <h2 className="text-3xl font-serif font-bold text-emerald-950 leading-tight">
              An Authentic Ayurvedic Heritage In Every Blend
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              We do not treat wellness as a marketing buzzword. Every herbal formulation—from our Ginger Turmeric Cleanse to our Saffron Kahwa—is overseen by certified senior Ayurvedic practitioners. We utilize real botanicals, roots, and spices sourced from traditional farms in Kerala, Wayanad, and Kashmir.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              By preserving whole ingredients and balancing essential oils, we deliver teas that actively support cellular repair, ease inflammatory pathways, soothe digestive tracts, and quieten overactive modern minds.
            </p>
          </div>
        </div>
      </div>

      {/* Values & Standards Grid Section */}
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-bold text-[#B19351] uppercase tracking-widest">Conscious Luxury</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950">
            Four Pillars of Uncompromising Integrity
          </h2>
          <p className="text-xs text-gray-500">
            Luxury means accountability. Every gram of tea we package stands behind strict environmental and social directives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Leaf size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">100% Organic Leaves</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We never utilize synthetic sprays, pesticides, or fake soluble flavorings on our tea bushes. Pure garden rain crops.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Award size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">Ethical Compensation</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We reinvest 1% of entire company revenue directly back into educational programs and safety healthcare clinics for tea gardens workforces.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Globe size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">Plastic Neutral</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our packaging is either reusable metal canister packs or biodegradable tea pyramids made from non-toxic PLA corn starch derivatives.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-lg border border-gold-200/20 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-emerald-900/5 text-emerald-800 rounded-full flex items-center justify-center">
              <Heart size={18} />
            </div>
            <h4 className="font-serif font-bold text-[#0B251C] text-sm">Middlemen Removed</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              By delivering straight to consumers online, we eliminate multi-tier auction brokers and redirect maximum value straight to agricultural farmers.
            </p>
          </div>

        </div>

        {/* Quality Seal banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 bg-emerald-900/5 border border-emerald-900/10 rounded-xl text-center sm:text-left">
          <ShieldCheck size={40} className="text-[#C5A059]" />
          <div>
            <h4 className="font-serif font-bold text-emerald-950 text-sm">The Prana Sourcing Seal Certification</h4>
            <p className="text-xs text-gray-500 max-w-xl">
              Each tea bag is stamped with a precise batch trace code showing the garden picker's location and harvest calendar date. Scent, flavor, and absolute wellness guaranteed.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
