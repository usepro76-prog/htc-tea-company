import React from "react";
import { Star, ArrowRight, ShieldCheck, Leaf, Sparkles, MessageCircleCode, Flame, HelpCircle } from "lucide-react";
import { Product, Category, Testimonial } from "../types";
import { PRODUCTS, CATEGORIES, TESTIMONIALS } from "../data/products";
// @ts-ignore
import mobileHero from "../assets/images/tea_bugs_mobile_hero_1.png";
// @ts-ignore
import desktopHero from "../assets/images/tea_bugs_desktop_hero_1.png";

interface HomeSectionProps {
  setCurrentPage: (page: "home" | "about" | "shop" | "contact") => void;
  setPreselectedCategory: (catId: string | null) => void;
  onViewProductDetails: (product: Product) => void;
  onOrderNow: (product: Product) => void;
  onContactWhatsapp: () => void;
}

export default function HomeSection({
  setCurrentPage,
  setPreselectedCategory,
  onViewProductDetails,
  onOrderNow,
  onContactWhatsapp,
}: HomeSectionProps) {
  
  // Highlight best-seller products on Home Page
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  const handleCategoryClick = (catId: string) => {
    setPreselectedCategory(catId);
    setCurrentPage("shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="homepage" className="animate-fade-in divide-y divide-gold-200/10">
      
      {/* SECTION 1: Premium Responsive Hero Banner */}
      <div 
        onClick={() => {
          setPreselectedCategory(null);
          setCurrentPage("shop");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="relative w-full bg-[#051A13] overflow-hidden cursor-pointer hover:opacity-95 transition-opacity duration-300"
        title="Click to Shop Our Premium Tea Collection"
      >
        {/* Responsive Background Picture */}
        <picture className="w-full h-auto block select-none">
          {/* Mobile view (< 768px): vertical layout */}
          <source
            media="(max-width: 767px)"
            srcSet={mobileHero}
          />
          {/* Desktop view (>= 768px): landscape layout */}
          <source
            media="(min-width: 768px)"
            srcSet={desktopHero}
          />
          {/* Fallback */}
          <img
            src={desktopHero}
            alt="TEA BUGS Premium Tea Banner - Click to Shop"
            className="w-full h-auto block object-contain animate-fade-in-slow"
            referrerPolicy="no-referrer"
          />
        </picture>

        {/* Subtle bottom brand line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0 z-20" />
      </div>

      {/* SECTION 2: Shop by Category */}
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 space-y-12 bg-[#FAF8F5]">
        
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Bespoke Curation</span>
          <h2 className="text-3xl font-serif font-black text-emerald-950">Shop By Category</h2>
          <p className="text-xs text-gray-500 font-light leading-relaxed">
            Each segment showcases carefully selected lots, catering to traditional connoisseurs or wellness-seekers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative h-96 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gold-200/20"
            >
              {/* Image with zoom effect */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-750"
                referrerPolicy="no-referrer"
              />
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/45 to-transparent transition-opacity duration-500" />
              
              {/* Category card copy */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-gold-100 flex flex-col justify-end">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059] mb-1">
                  Collection
                </span>
                <h3 className="font-serif font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2 mt-1.5 leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-gold-400 font-bold uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Enter Collection</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* SECTION 3: Shop by Product (Best Seller grid showcase) */}
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-12 space-y-12 bg-white">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold-200/20 pb-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Our Flagship Lots</span>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-emerald-950">Connoisseur Best-Sellers</h2>
            <p className="text-xs text-gray-400 font-light">Direct garden sourced luxury. Fresh vacuum dispatch.</p>
          </div>
          <button
            onClick={() => {
              setPreselectedCategory(null);
              setCurrentPage("shop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-emerald-900 hover:text-[#B19351] transition-colors cursor-pointer"
          >
            <span>View Full Boutique Collection</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              id={`home-product-${product.id}`}
              className="group relative bg-[#FAF8F5] border border-gold-200/20 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-gold-50/50">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 left-2.5 bg-gold-500 text-white text-[8.5px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded shadow-sm">
                  Best Seller
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#B19351]">
                    {product.category === "classics" ? "Single-Origin Classic" : product.category === "wellness" ? "Wellness Blend" : "Ceremonial Matchas"}
                  </span>
                  
                  <h3
                    onClick={() => onViewProductDetails(product)}
                    className="font-serif font-bold text-emerald-950 text-sm md:text-base mt-0.5 line-clamp-1 group-hover:text-gold-500 transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  
                  <p className="text-xs text-gray-500 leading-relaxed font-light mt-1.5 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-baseline justify-between border-t border-gold-200/10 pt-3">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Unit canister</span>
                    <span className="font-serif font-black text-emerald-950 text-sm">
                      ₹{product.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onViewProductDetails(product)}
                      className="border border-gold-400/50 hover:border-gold-500 text-emerald-950 hover:bg-gold-50 text-[10px] font-bold uppercase tracking-wider py-1.5 rounded transition-all cursor-pointer text-center"
                    >
                      Inspect
                    </button>
                    <button
                      onClick={() => onOrderNow(product)}
                      className="bg-emerald-900 hover:bg-emerald-800 text-gold-50 text-[10px] font-bold uppercase tracking-widest py-1.5 rounded transition-all cursor-pointer text-center"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* SECTION 4: Why Choose Us (Premium standards) */}
      <div className="bg-gold-100/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Uncompromising Standards</span>
            <h2 className="text-3xl font-serif font-black text-emerald-950">Why Connoisseurs Choose Us</h2>
            <p className="text-xs text-gray-500 font-light">
              We reject global wholesale supply patterns. Discover a brand built on transparency and absolute botanical integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">Direct Garden Trade</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                We remove middle brokers completely, giving back up to 25% larger margins to picking farmers at source estates.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Leaf size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">100% Organic Purity</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                No spray pesticides, artificial color concentrates, or chemical flavorings. Organically clean rainfall-grown harvests.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">Vacuum Canopy Sealed</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Nitrogen-purged at harvest site within hours to lock down delicate floral oils and curative properties perfectly.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Flame size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">Micro-batch Roasting</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Fired and blended in limited 20kg batches by master sommeliers, ensuring pristine uniformity.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION 5: Customer Testimonials */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Client Testimonials</span>
            <h2 className="text-3xl font-serif font-black text-emerald-950">Pure Elixir Accolades</h2>
            <p className="text-xs text-gray-500 font-light">
              See what verified sommeliers, wellness practitioners, and everyday tea lovers write about Prana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#FAF8F5] border border-gold-200/20 rounded-xl p-6 relative flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Visual quote indicator */}
                  <span className="font-serif text-5xl text-gold-300/30 absolute top-2 left-4 select-none">“</span>
                  
                  {/* Verified rating stars */}
                  <div className="flex text-amber-500 gap-1 relative z-10 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-light relative z-10 italic mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="border-t border-gold-200/10 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-emerald-950 text-xs">{t.name}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{t.role}</p>
                  </div>
                  <span className="text-[9px] uppercase font-bold text-[#B19351] bg-gold-100/50 px-2.5 py-0.5 rounded">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 6: Contact / WhatsApp CTA */}
      <div className="bg-emerald-950 py-16 md:py-20 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl mx-auto space-y-6 z-10">
          <span className="text-[10px] font-bold text-gold-300 uppercase tracking-widest">Bespoke Consultations</span>
          <h2 className="text-2xl md:text-3.5xl font-serif font-black text-white leading-tight">
            Not Sure Which Harvest to Choose? <br />
            Consult Our Sommelier Free
          </h2>
          <p className="text-xs md:text-sm text-gray-300 font-light font-sans max-w-lg mx-auto leading-relaxed">
            Every palate has unique vibrational codes. Connect with our certified Ayurvedic team on WhatsApp to get a customized steeping curation based on your digestion and sensory desires.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={onContactWhatsapp}
              className="bg-[#25D366] hover:bg-[#1EBE57] text-[#FAF8F5] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow shadow-emerald-950/20 flex items-center gap-2 transform hover:scale-103 cursor-pointer"
            >
              <MessageCircleCode size={15} />
              <span>Connect On WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
