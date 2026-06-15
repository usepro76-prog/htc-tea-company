import React, { useState, useEffect } from "react";
import { Star, ShieldCheck, Heart, Filter, Grid, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Product, Category } from "../types";
import { PRODUCTS, CATEGORIES } from "../data/products";

interface ShopSectionProps {
  onViewProductDetails: (product: Product) => void;
  onOrderNow: (product: Product) => void;
  preselectedCategory: string | null;
  setPreselectedCategory: (cat: string | null) => void;
}

export default function ShopSection({
  onViewProductDetails,
  onOrderNow,
  preselectedCategory,
  setPreselectedCategory,
}: ShopSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [sortOption, setSortOption] = useState<string>("featured");

  // Sync category state from page changes (e.g. clicking category on Home page forces preselected category change here)
  useEffect(() => {
    if (preselectedCategory) {
      setSelectedFilter(preselectedCategory);
    }
  }, [preselectedCategory]);

  const handleFilterClick = (filterId: string) => {
    setSelectedFilter(filterId);
    setPreselectedCategory(filterId === "all" ? null : filterId);
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedFilter === "all") return true;
    return product.category === selectedFilter;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-high") {
      return a.price - b.price;
    }
    if (sortOption === "price-high-low") {
      return b.price - a.price;
    }
    if (sortOption === "rating") {
      return b.rating - a.rating;
    }
    // "featured" defaults: bestsellers and new batches first
    return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
  });

  return (
    <section id="shop-boutique-page" className="animate-fade-in py-8 px-6 md:px-12 max-w-7xl mx-auto space-y-10">
      
      {/* Editorial Page Header */}
      <div className="text-center space-y-3 py-6 max-w-2xl mx-auto">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-500"> Pure Garden Sourced Blends </span>
        <h1 className="text-3xl md:text-4xl font-serif font-black text-emerald-950">
          The Hind Tea Signature Boutique
        </h1>
        <p className="text-xs text-gray-500 leading-relaxed font-light">
          Browse our premium wholesale and retail collections of high-altitude Assam CTC blends, restorative herbal wellness teas, and 100% Pure Arabica flavored instant coffees. Sourced with absolute integrity for tea connoisseurs.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-gold-200/20 pb-6">
        
        {/* Left Side: Traditional category buttons */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => handleFilterClick("all")}
            className={`text-xs uppercase font-semibold tracking-widest px-4 py-2.5 rounded transition-all duration-300 pointer-events-auto cursor-pointer ${
              selectedFilter === "all"
                ? "bg-emerald-900 text-gold-50 shadow-md"
                : "bg-gold-50 text-emerald-950 border border-gold-200/20 hover:bg-gold-100"
            }`}
          >
            All Harvests
          </button>
          
          {CATEGORIES.map((cat) => {
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`text-xs uppercase font-semibold tracking-widest px-4 py-2.5 rounded transition-all duration-300 pointer-events-auto cursor-pointer ${
                  isSelected
                    ? "bg-emerald-900 text-gold-50 shadow-md"
                    : "bg-gold-50 text-emerald-950 border border-gold-200/20 hover:bg-gold-100"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Right Side: Sorting controls */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold uppercase">
            <ArrowUpDown size={14} className="text-gold-500" />
            <span>Sort By:</span>
          </div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="text-xs border border-gray-300 rounded px-3 py-2 bg-[#FAF8F5] text-emerald-950 font-medium focus:outline-none focus:border-emerald-800"
          >
            <option value="featured">Best Sellers / Premium First</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Connoisseur Rating</option>
          </select>
        </div>

      </div>

      {/* Product Results Count Warning */}
      <div className="text-xs text-gray-400 font-medium flex items-center justify-between">
        <p>Displaying <span className="text-emerald-900 font-bold">{sortedProducts.length}</span> luxury blends</p>
        <p className="hidden sm:block">🌍 Direct garden sourced | Fresh vacuum dispatch</p>
      </div>

      {/* Main Responsive Boutique Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            id={`product-card-${product.id}`}
            className="group relative bg-[#FAF8F5] border border-gold-200/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            
            {/* Top Image Box */}
            <div className="relative aspect-square overflow-hidden bg-gold-50/50">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Sourcing tags badges */}
              <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
                {product.isBestSeller && (
                  <span className="bg-gold-500 text-[#FAF8F5] text-[8.5px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm">
                    Best Seller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-emerald-950 text-gold-200 text-[8.5px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm">
                    Fresh Harvest
                  </span>
                )}
              </div>
            </div>

            {/* Product description contents */}
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
                  className="font-serif font-extrabold text-emerald-950 text-sm md:text-base mt-0.5 line-clamp-1 group-hover:text-gold-500 transition-colors cursor-pointer"
                  title="Click to view details"
                >
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-gray-600">({product.reviewsCount})</span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed font-light mt-2 line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Price & Action CTA */}
              <div className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between border-t border-gold-200/10 pt-3">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Unit canister</span>
                  <span className="font-serif font-black text-emerald-900 text-sm md:text-base">
                    ₹{product.price}
                  </span>
                </div>

                {/* Button actions split */}
                <div className="grid grid-cols-2 gap-2 pt-1.5">
                  <button
                    onClick={() => onViewProductDetails(product)}
                    className="border border-gold-400/50 hover:border-gold-500 text-emerald-950 hover:bg-gold-50 text-[10px] font-bold uppercase tracking-wider py-2 rounded transition-all cursor-pointer text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOrderNow(product)}
                    className="bg-emerald-900 hover:bg-emerald-800 text-gold-50 text-[10px] font-bold uppercase tracking-widest py-2 rounded transition-all cursor-pointer text-center"
                  >
                    Order Now
                  </button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Sustainable Quality Checklist */}
      <div className="bg-emerald-900/5 border border-emerald-900/10 rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex gap-4">
          <div className="p-3 bg-emerald-900 text-gold-200 rounded-lg h-11 w-11 flex-shrink-0 flex items-center justify-center text-sm font-bold">
            ✓
          </div>
          <div>
            <h4 className="font-serif font-bold text-emerald-950 text-sm">100% Pure & Hygienic</h4>
            <p className="text-xs text-gray-500 mt-1">Checked meticulously for synthetic additives, non-food colorings, or fillers. We retain highest regulatory trust.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-3 bg-emerald-900 text-gold-200 rounded-lg h-11 w-11 flex-shrink-0 flex items-center justify-center text-sm font-bold">
            ✓
          </div>
          <div>
            <h4 className="font-serif font-bold text-emerald-950 text-sm">Calculated CTC Thickness</h4>
            <p className="text-xs text-gray-500 mt-1">Balanced proportions of Assam granules & dust particles to brew strong kadak chai with gorgeous golden amber color.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="p-3 bg-emerald-900 text-gold-200 rounded-lg h-11 w-11 flex-shrink-0 flex items-center justify-center text-sm font-bold">
            ✓
          </div>
          <div>
            <h4 className="font-serif font-bold text-emerald-950 text-sm">Pune Wholesale Depot</h4>
            <p className="text-xs text-gray-500 mt-1">We operate directly out of Raviwar Peth, Pune, enabling optimized dealer prices and swift shipping across Maharashtra.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
