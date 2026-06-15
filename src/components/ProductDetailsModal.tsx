import React, { useState } from "react";
import { X, CheckCircle, Leaf, Star, ShieldCheck, ShoppingCart } from "lucide-react";
import { Product } from "../types";
import { CATEGORIES } from "../data/products";

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: (product: Product) => void;
}

export default function ProductDetailsModal({
  product,
  isOpen,
  onClose,
  onOrderNow,
}: ProductDetailsModalProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-md transition-all animate-fade-in overflow-y-auto">
      <div className="relative bg-[#FAF8F5] border border-gold-400/20 rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto">
        
        {/* Close Button Trigger */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-emerald-950 hover:bg-gold-100 p-2 rounded-full transition-all"
          title="Close details"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          
          {/* Left Column: Product Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-gold-50/50 rounded-lg overflow-hidden border border-gold-200/20">
              <img
                src={product.images[activeImgIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              {product.isBestSeller && (
                <span className="absolute top-3 left-3 bg-gold-500 text-[#FAF8F5] text-[9.5px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  Best Seller
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-emerald-850 text-gold-200 text-[9.5px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  Fresh Batch
                </span>
              )}
            </div>

            {/* Thumbnails list */}
            <div className="flex gap-3 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative w-16 h-16 rounded border overflow-hidden transition-all duration-300 ${
                    activeImgIndex === idx
                      ? "border-emerald-800 ring-2 ring-emerald-800/10 scale-105"
                      : "border-gray-200 hover:border-gold-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            {/* Quality badge footer */}
            <div className="hidden md:flex items-center justify-around p-3 bg-emerald-900/5 rounded-lg border border-emerald-900/10 mt-2">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-emerald-950 tracking-wider">100% Organic</p>
                <p className="text-[9px] text-gray-500">Non-GMO Certified</p>
              </div>
              <div className="h-6 w-px bg-gold-200/30" />
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-emerald-950 tracking-wider">Garden Fresh</p>
                <p className="text-[9px] text-gray-500">Direct From Source</p>
              </div>
              <div className="h-6 w-px bg-gold-200/30" />
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-emerald-950 tracking-wider">Eco-Friendly</p>
                <p className="text-[9px] text-gray-500">Plastic Neutral</p>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Copy details */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Breadcrumb / Category */}
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B19351]">
                {CATEGORIES.find((cat) => cat.id === product.category)?.name || "Premium Selection"}
              </span>

              <h2 className="text-2xl md:text-3xl font-serif font-black text-emerald-950 mt-1 leading-snug">
                {product.name}
              </h2>

              {/* Reviews/Rating */}
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviewsCount} verified reviews)</span>
              </div>

              {/* Price Tag */}
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-serif font-black text-emerald-900">
                  ₹{product.price} INR
                </span>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Free Express Shipping Included
                </span>
              </div>

              {/* Short & Long descriptions */}
              <div className="mt-4 space-y-3">
                <p className="text-xs text-gray-500 leading-relaxed font-medium italic">
                  "{product.description}"
                </p>
                <div className="h-px bg-gold-200/20" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-950 mb-2 flex items-center gap-1.5">
                  <Leaf size={14} className="text-gold-500" />
                  <span>Healing Benefits</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={12} className="text-emerald-700 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-950 mb-2">
                  Technical Specifications
                </h4>
                <div className="bg-gold-50/50 rounded-lg p-3 border border-gold-200/10 text-xs">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex flex-col border-b border-gold-200/10 pb-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{spec.label}</span>
                        <span className="text-gray-700 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action wrapper */}
            <div className="mt-8 pt-4 border-t border-gold-200/20 flex flex-col gap-3">
              <button
                onClick={() => onOrderNow(product)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-gold-50 py-3.5 rounded-lg text-xs font-bold tracking-widest uppercase shadow transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/10"
              >
                <ShoppingCart size={14} />
                <span>Order on WhatsApp Now</span>
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500">
                <ShieldCheck size={12} className="text-[#B19351]" />
                <span>100% Secure Checkout | Direct Garden Sourced Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
