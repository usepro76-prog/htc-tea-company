import React from "react";
import { Mail, Phone, MapPin, MessageSquare, Instagram, ShieldCheck } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: "home" | "about" | "shop" | "contact") => void;
  openContactWhatsapp: () => void;
}

export default function Footer({ setCurrentPage, openContactWhatsapp }: FooterProps) {
  const handleNavClick = (pageId: "home" | "about" | "shop" | "contact") => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-emerald-950 text-gold-200/90 border-t border-emerald-900/40">
      
      {/* Top Brand Banner */}
      <div className="border-b border-emerald-900/30 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl font-bold tracking-widest text-[#FAF8F5] uppercase">
              THE HIND TEA COMPANY
            </h4>
            <p className="text-xs font-sans text-gold-400 font-semibold tracking-[0.2em] uppercase mt-0.5">
              Pure Tea Craftsmanship — Sourced Direct from India's Estates
            </p>
          </div>
          <button
            onClick={openContactWhatsapp}
            className="flex items-center gap-2 border border-gold-400 hover:border-gold-300 text-gold-300 hover:text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          >
            <MessageSquare size={13} />
            <span>Direct WhatsApp Line</span>
          </button>
        </div>
      </div>

      {/* Main Footer Sitemap Grid */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Col 1: About the Brand Brief */}
        <div className="space-y-4">
          <h5 className="text-[#FAF8F5] font-serif font-bold text-sm uppercase tracking-wider">The Hind Tea Philosophy</h5>
          <p className="text-xs text-gray-300 leading-relaxed font-light">
            Based in Raviwar Peth, Pune, we are premium wholesale traders, suppliers, and retailers of elite-standard tea powders, restorative health infusions, and pure Arabica instant coffees. Free from artificial coloring, we serve exceptional tea solutions.
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-gold-500" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400">
              100% Pure & Hygienic | Certified
            </span>
          </div>
        </div>

        {/* Col 2: Shop & Collections Shortcuts */}
        <div className="space-y-4">
          <h5 className="text-[#FAF8F5] font-serif font-bold text-sm uppercase tracking-wider">Our Collections</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => handleNavClick("shop")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                ✦ Assam Blend Tea Powder
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("shop")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                ✦ Green & Herbal Wellness
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("shop")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                ✦ Premium Masala & Elaichi
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("shop")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                ✦ Flavored Instant Coffee
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation Sitemap */}
        <div className="space-y-4">
          <h5 className="text-[#FAF8F5] font-serif font-bold text-sm uppercase tracking-wider">Boutique Information</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                Home Page
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                Our Legacy Story
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("shop")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                Shop Full Collection
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-gray-300 hover:text-gold-300 transition-colors cursor-pointer text-left"
              >
                Contact & Sourcing HQ
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Shortcuts */}
        <div className="space-y-4">
          <h5 className="text-[#FAF8F5] font-serif font-bold text-sm uppercase tracking-wider">Pune Headquarters</h5>
          <ul className="space-y-3 text-xs text-gray-300">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
              <span>185, Raviwar Peth, Near Laxmi Road / Budhwar Peth, Pune, Maharashtra - 411002, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-gold-500 flex-shrink-0" />
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-gold-500 flex-shrink-0" />
              <span>support@hindteacompany.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copy-fine-print section */}
      <div className="bg-emerald-995 text-gray-400 text-[10px] text-center py-6 px-6 border-t border-emerald-900/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} The Hind Tea Company. Sourced directly, served with integrity.</p>
          <div className="flex gap-4">
            <span className="hover:text-gold-400 transition-colors">Premium Tea Craftsmanship</span>
            <span>|</span>
            <span className="hover:text-gold-400 transition-colors">Direct Garden Sourcing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
