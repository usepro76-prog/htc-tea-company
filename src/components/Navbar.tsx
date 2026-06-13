import React, { useState } from "react";
import { Menu, X, ShoppingBag, PhoneCall } from "lucide-react";

interface NavbarProps {
  currentPage: "home" | "about" | "shop" | "contact";
  setCurrentPage: (page: "home" | "about" | "shop" | "contact") => void;
  openContactWhatsapp: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, openContactWhatsapp }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop Boutique" },
    { id: "about", label: "Our Story" },
    { id: "contact", label: "Contact Us" },
  ] as const;

  const handleNavClick = (pageId: "home" | "about" | "shop" | "contact") => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header id="main-header" className="sticky top-[38px] z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-gold-200/20 py-1 md:py-1.5 px-4 md:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Identity */}
        <button
          id="logo-button"
          onClick={() => handleNavClick("home")}
          className="flex flex-col items-start text-left cursor-pointer group leading-none gap-0"
        >
          <span className="font-serif text-sm md:text-base font-bold tracking-wider text-emerald-950 uppercase group-hover:text-gold-500 transition-colors">
            The Hind Tea Company
          </span>
          <span className="text-[8px] tracking-[0.2em] font-sans text-gold-600 uppercase font-semibold leading-none mt-0.5">
            SINCE 1946
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-[10px] md:text-xs uppercase font-medium tracking-wider cursor-pointer transition-all duration-300 pb-0.5 relative group ${
                  isActive ? "text-emerald-800 font-semibold" : "text-gray-600 hover:text-emerald-950"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-gold-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Action Button - Direct WhatsApp Inquiry */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="whatsapp-header-cta"
            onClick={openContactWhatsapp}
            className="flex items-center gap-1.5 bg-emerald-900 hover:bg-emerald-800 text-gold-50 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-md hover:shadow-emerald-900/15"
          >
            <PhoneCall size={11} className="text-gold-400" />
            <span>Consult Tea Sommelier</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="whatsapp-mobile-cta"
            onClick={openContactWhatsapp}
            className="p-1 text-emerald-900 hover:text-emerald-700 transition-colors"
            title="Contact WhatsApp"
          >
            <PhoneCall size={15} />
          </button>
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-emerald-950 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="absolute top-full left-0 w-full bg-[#FAF8F5] border-b border-gold-200/30 py-6 px-8 flex flex-col gap-6 md:hidden shadow-lg transition-all"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-widest font-medium py-2.5 border-b border-gold-100/30 ${
                    isActive ? "text-emerald-800 pl-2 font-semibold border-l-2 border-gold-500" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <button
            id="mobile-drawer-whatsapp-btn"
            onClick={() => {
              openContactWhatsapp();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 bg-emerald-900 text-gold-50 py-3 rounded-md text-xs font-semibold tracking-widest uppercase transition-all"
          >
            <PhoneCall size={14} className="text-gold-400" />
            <span>Consult Tea Sommelier</span>
          </button>
        </div>
      )}
    </header>
  );
}
