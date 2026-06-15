import React from "react";
import { Star, ArrowRight, ShieldCheck, Leaf, Sparkles, MessageCircleCode, Flame, HelpCircle } from "lucide-react";
import { Product, Category, Testimonial, GoogleReview } from "../types";
import { PRODUCTS, CATEGORIES, TESTIMONIALS, GOOGLE_REVIEWS } from "../data/products";
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
          <div className="space-y-1 text-center sm:text-left w-full">
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">Our Flagship Lots</span>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-emerald-950">Connoisseur Best-Sellers</h2>
            <p className="text-xs text-gray-400 font-light">Direct garden sourced luxury. Fresh vacuum dispatch.</p>
          </div>
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
                    {product.category === "Assam-Blend" 
                      ? "Assam Blend" 
                      : product.category === "Greem-Herbal-Tea" 
                      ? "Green & Herbal" 
                      : product.category === "masala-elaichi" 
                      ? "Masala & Elaichi" 
                      : product.category === "instant-coffee" 
                      ? "Instant Coffee" 
                      : "Premium Selection"}
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

        {/* View All Button at the bottom of the section */}
        <div className="flex justify-center pt-6">
          <button
            onClick={() => {
              setPreselectedCategory(null);
              setCurrentPage("shop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group/btn bg-[#051A13] hover:bg-emerald-900 text-gold-100 flex items-center gap-2.5 text-xs uppercase font-extrabold tracking-widest px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-102 cursor-pointer shadow-md hover:shadow-gold-500/10"
          >
            <span>View All</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* SECTION 4: Why Choose Us (Premium standards) */}
      <div className="bg-gold-100/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">A legacy of trust in pune</span>
            <h2 className="text-3xl font-serif font-black text-emerald-950">Why Connoisseurs Choose Hind Tea</h2>
            <p className="text-xs text-gray-500 font-light">
              Rooted in the historical core of Raviwar Peth, Pune, we represent pure tea craftsmanship. Discover how we elevate every single cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">Legacy of Trust</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Known across Maharashtra for our high-integrity, customer-centric services. Building relationships since generations under stellar trust.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Leaf size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">Direct Garden Blends</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Meticulously sourced from Assam & Darjeeling's high-altitude estates. Whole whole-leaf lots processed within days.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">Perfect Thickness</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Expertly balanced proportions of CTC granules and dust particles to brew tea with robust liquor, classic golden color, and rich mouthfeel.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gold-200/20 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Flame size={20} />
              </div>
              <h3 className="font-serif font-bold text-emerald-950 text-sm">100% Pure & Hygienic</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Free from synthetic fillers, excessive stems, or fake coloring. Carefully stored and packed in food-grade, dust-proof conditions.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* SECTION 5.5: Google Customer Reviews Sliding Marquee */}
      <div className="bg-[#FAF8F5] py-16 border-t border-b border-gold-200/20 overflow-hidden">
        <div className="space-y-10">
          
          <div className="text-center space-y-3 max-w-xl mx-auto px-6">
            <span className="text-[10px] font-bold text-[#B19351] uppercase tracking-[0.25em] flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B19351] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B19351]"></span>
              </span>
              Verified Google Maps Feed
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-serif font-black text-emerald-950">4.8</span>
              <div className="flex text-amber-500 gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-light">(250+ Real Reviews)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-emerald-950">Loved Across Pune & Maharashtra</h2>
            <p className="text-xs text-gray-500 font-light">
              Real reviews sourced directly from the Hind Tea Company Google Maps listing. Simply hover over any review card to pause sliding and read it.
            </p>
          </div>

          <div className="space-y-6 w-full max-w-full overflow-hidden">
            
            {/* Row 1: Reviews gr1 to gr5 */}
            <div className="relative overflow-hidden w-full flex select-none">
              <div 
                className="animate-marquee-container flex gap-6" 
                style={{ 
                  animationDuration: '45s'
                }}
              >
                {GOOGLE_REVIEWS.slice(0, 5).map((review, idx) => (
                  <div key={`row1-${review.id}-${idx}`} className="w-[320px] flex-shrink-0 bg-white border border-gold-200/10 rounded-xl p-5 shadow-xs hover:border-gold-500/45 transition-colors relative flex flex-col justify-between">
                    <div>
                      {/* Star rating & google badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-amber-500 gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={11} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-full flex items-center justify-center select-none shadow-3xs font-mono">G</span>
                      </div>
                      <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                    </div>
                    {/* Review Author - No Relative Time display */}
                    <div className="border-t border-gold-200/5 pt-3 flex items-center justify-between text-[11px] mt-auto">
                      <div>
                        <h4 className="font-bold text-emerald-950 flex items-center gap-1.5">
                          {review.name}
                          {review.isLocalGuide && (
                            <span className="text-[7.5px] bg-amber-100 text-amber-800 px-1 rounded-xs font-black tracking-wider uppercase" title="Google Local Guide">LG</span>
                          )}
                        </h4>
                        <span className="text-[9.5px] text-emerald-800 font-medium flex items-center gap-1">
                          <span className="h-1.5 w-1.5 bg-emerald-700 rounded-full inline-block"></span>
                          Verified Maps Profile
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 font-mono">
                        {review.location}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate Row 1 for Seamless loop */}
                {GOOGLE_REVIEWS.slice(0, 5).map((review, idx) => (
                  <div key={`row1-dup-${review.id}-${idx}`} className="w-[320px] flex-shrink-0 bg-white border border-gold-200/10 rounded-xl p-5 shadow-xs hover:border-gold-500/45 transition-colors relative flex flex-col justify-between">
                    <div>
                      {/* Star rating & google badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-amber-500 gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={11} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-full flex items-center justify-center select-none shadow-3xs font-mono">G</span>
                      </div>
                      <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                    </div>
                    {/* Review Author - No Relative Time display */}
                    <div className="border-t border-gold-200/5 pt-3 flex items-center justify-between text-[11px] mt-auto">
                      <div>
                        <h4 className="font-bold text-emerald-950 flex items-center gap-1.5">
                          {review.name}
                          {review.isLocalGuide && (
                            <span className="text-[7.5px] bg-amber-100 text-amber-800 px-1 rounded-xs font-black tracking-wider uppercase">LG</span>
                          )}
                        </h4>
                        <span className="text-[9.5px] text-emerald-800 font-medium flex items-center gap-1">
                          <span className="h-1.5 w-1.5 bg-emerald-700 rounded-full inline-block"></span>
                          Verified Maps Profile
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 font-mono">
                        {review.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Reviews gr6 to gr10 */}
            <div className="relative overflow-hidden w-full flex select-none">
              <div 
                className="animate-marquee-container flex gap-6" 
                style={{ 
                  animationDuration: '50s'
                }}
              >
                {GOOGLE_REVIEWS.slice(5, 10).map((review, idx) => (
                  <div key={`row2-${review.id}-${idx}`} className="w-[320px] flex-shrink-0 bg-white border border-gold-200/10 rounded-xl p-5 shadow-xs hover:border-gold-500/45 transition-colors relative flex flex-col justify-between">
                    <div>
                      {/* Star rating & google badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-amber-500 gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={11} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-full flex items-center justify-center select-none shadow-3xs font-mono">G</span>
                      </div>
                      <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                    </div>
                    {/* Review Author - No Relative Time display */}
                    <div className="border-t border-gold-200/5 pt-3 flex items-center justify-between text-[11px] mt-auto">
                      <div>
                        <h4 className="font-bold text-emerald-950 flex items-center gap-1.5">
                          {review.name}
                          {review.isLocalGuide && (
                            <span className="text-[7.5px] bg-amber-100 text-amber-800 px-1 rounded-xs font-black tracking-wider uppercase" title="Google Local Guide">LG</span>
                          )}
                        </h4>
                        <span className="text-[9.5px] text-emerald-800 font-medium flex items-center gap-1">
                          <span className="h-1.5 w-1.5 bg-emerald-700 rounded-full inline-block"></span>
                          Verified Maps Profile
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 font-mono">
                        {review.location}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate Row 2 for Seamless loop */}
                {GOOGLE_REVIEWS.slice(5, 10).map((review, idx) => (
                  <div key={`row2-dup-${review.id}-${idx}`} className="w-[320px] flex-shrink-0 bg-white border border-gold-200/10 rounded-xl p-5 shadow-xs hover:border-gold-500/45 transition-colors relative flex flex-col justify-between">
                    <div>
                      {/* Star rating & google badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-amber-500 gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={11} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-full flex items-center justify-center select-none shadow-3xs font-mono">G</span>
                      </div>
                      <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                    </div>
                    {/* Review Author - No Relative Time display */}
                    <div className="border-t border-gold-200/5 pt-3 flex items-center justify-between text-[11px] mt-auto">
                      <div>
                        <h4 className="font-bold text-emerald-950 flex items-center gap-1.5">
                          {review.name}
                          {review.isLocalGuide && (
                            <span className="text-[7.5px] bg-amber-100 text-amber-800 px-1 rounded-xs font-black tracking-wider uppercase">LG</span>
                          )}
                        </h4>
                        <span className="text-[9.5px] text-emerald-800 font-medium flex items-center gap-1">
                          <span className="h-1.5 w-1.5 bg-emerald-700 rounded-full inline-block"></span>
                          Verified Maps Profile
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-150 font-mono">
                        {review.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
