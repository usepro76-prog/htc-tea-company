import React, { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ShopSection from "./components/ShopSection";
import ContactSection from "./components/ContactSection";
import ProductDetailsModal from "./components/ProductDetailsModal";
import OrderFormModal from "./components/OrderFormModal";
import Footer from "./components/Footer";
import { Product } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "shop" | "contact">("home");
  const [preselectedCategory, setPreselectedCategory] = useState<string | null>(null);

  // Modal active slots
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const [selectedOrderProduct, setSelectedOrderProduct] = useState<Product | null>(null);

  const ADMIN_WHATSAPP_NUMBER = "919999999999";

  const handleGlobalContactWhatsapp = () => {
    const generalMsg = encodeURIComponent(
      "🌱 *Hello Prana Tea Collective! I am visiting your online boutique and would love some direct recommendations on premium teas & Ayurvedic blends.*"
    );
    window.open(`https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${generalMsg}`, "_blank");
  };

  const handleOrderInitiate = (product: Product) => {
    // Close the detail view overlay first if it's open, so modals don't stack awkwardly
    setSelectedDetailProduct(null);
    setSelectedOrderProduct(product);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-gray-800 antialiased font-sans">
      {/* 1. Loop Announcement promo marquee */}
      <AnnouncementBar />

      {/* 2. Premium Sticky menu */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        openContactWhatsapp={handleGlobalContactWhatsapp}
      />

      {/* 3. Dynamic Page Body Container */}
      <main className="flex-grow">
        {currentPage === "home" && (
          <HomeSection
            setCurrentPage={setCurrentPage}
            setPreselectedCategory={setPreselectedCategory}
            onViewProductDetails={setSelectedDetailProduct}
            onOrderNow={handleOrderInitiate}
            onContactWhatsapp={handleGlobalContactWhatsapp}
          />
        )}

        {currentPage === "shop" && (
          <ShopSection
            onViewProductDetails={setSelectedDetailProduct}
            onOrderNow={handleOrderInitiate}
            preselectedCategory={preselectedCategory}
            setPreselectedCategory={setPreselectedCategory}
          />
        )}

        {currentPage === "about" && (
          <AboutSection
            onShopNow={() => {
              setPreselectedCategory(null);
              setCurrentPage("shop");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

        {currentPage === "contact" && <ContactSection />}
      </main>

      {/* 4. Brand Sitemap Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        openContactWhatsapp={handleGlobalContactWhatsapp}
      />

      {/* SYSTEM OVERLAYS */}
      
      {/* A. Product Detailed Presentation Modal */}
      {selectedDetailProduct && (
        <ProductDetailsModal
          product={selectedDetailProduct}
          isOpen={!!selectedDetailProduct}
          onClose={() => setSelectedDetailProduct(null)}
          onOrderNow={handleOrderInitiate}
        />
      )}

      {/* B. Indian Checkout Shipping details Modal Form */}
      {selectedOrderProduct && (
        <OrderFormModal
          product={selectedOrderProduct}
          isOpen={!!selectedOrderProduct}
          onClose={() => setSelectedOrderProduct(null)}
        />
      )}
    </div>
  );
}
