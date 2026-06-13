import React, { useState } from "react";
import { X, Send, ShoppingCart, ShieldCheck } from "lucide-react";
import { Product, OrderFormData } from "../types";

interface OrderFormModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderFormModal({ product, isOpen, onClose }: OrderFormModalProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    title: "Mr.",
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    address: "",
    flatHouseNo: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const ADMIN_WHATSAPP_NUMBER = "919999999999"; // Replace with real admin number

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Form Validation back-guards
    if (
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.emailAddress ||
      !formData.address ||
      !formData.flatHouseNo ||
      !formData.pincode ||
      !formData.city ||
      !formData.state
    ) {
      setErrorMsg("Please fill out all required fields to complete your boutique order.");
      return;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      setErrorMsg("Please enter a valid 6-digit Indian Pincode.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber.replace(/[^0-9]/g, ""))) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Formulate magical custom WhatsApp message
    const categoryName =
      product.category === "classics"
        ? "Signature Classics"
        : product.category === "wellness"
        ? "Wellness & Herbal"
        : "Exotics & Matchas";

    const separator = "━━━━━━━━━━━━━━━━━━━━━━";
    const orderMsg = 
`🌱 *NEW ORDER - PRANA TEA COLLECTIVE* 🌱
${separator}

🛒 *PRODUCT OVERVIEW*
• *Tea/Elixir:* ${product.name}
• *Chamber:* ${categoryName}
• *Pre-tax Price:* ₹${product.price} INR
• *Availability:* Hand-sealed Garden Fresh

📌 *SHIPPING DETAILS*
• *Recipient:* ${formData.title} ${formData.fullName}
• *Mobile Number:* ${formData.mobileNumber}
• *Email Address:* ${formData.emailAddress}
• *Address:* ${formData.flatHouseNo}, ${formData.address}
• *Landmark:* ${formData.landmark || "N/A"}
• *Pincode:* ${formData.pincode}
• *City / Town:* ${formData.city}
• *State:* ${formData.state}
• *Region:* India 🇮🇳

${separator}
🍃 _Order initiated via online luxury boutique. Golden blends dispatching soon!_`;

    const encodedText = encodeURIComponent(orderMsg);
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodedText}`;

    // Redirect to WhatsApp window
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry"
  ];

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all animate-fade-in">
      <div className="relative bg-[#FAF8F5] border border-gold-400/20 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto outline-none">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF8F5] z-10 flex items-center justify-between px-6 py-4 border-b border-gold-200/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-950 text-gold-200 rounded-md">
              <ShoppingCart size={18} />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-emerald-950">Complete Your Order</h3>
              <p className="text-xs text-gray-500">Fast Hand-delivered WhatsApp Checkout</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-emerald-950 hover:bg-gold-100 p-1.5 rounded-full transition-all"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Order Summary banner */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-emerald-900/5 border border-emerald-900/10 p-4 rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md border border-gold-300/30"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[9px] font-semibold uppercase tracking-widest text-gold-600 bg-gold-100 px-2 py-0.5 rounded">
                Selected Tea
              </span>
              <h4 className="font-serif font-bold text-emerald-950 text-sm mt-1">{product.name}</h4>
              <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total Price</p>
              <p className="font-serif font-black text-emerald-900 text-lg">₹{product.price}</p>
              <p className="text-[9px] text-emerald-700 italic">Free Shipping applied</p>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-md">
              {errorMsg}
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-4">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-950 border-b border-gold-200/30 pb-1">
              Contact & Shipping Information
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Salutation Title */}
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-1">Title *</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white text-gray-800 focus:outline-emerald-800 focus:border-emerald-800"
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Prof.">Prof.</option>
                  <option value="Heir.">Heir.</option>
                </select>
              </div>

              {/* Full Name */}
              <div className="md:col-span-9">
                <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your first and last name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mobile Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Mobile Number (WhatsApp) *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="name@domain.com"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Flat/House */}
              <div className="md:col-span-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1">Flat / House No. / Building *</label>
                <input
                  type="text"
                  name="flatHouseNo"
                  placeholder="Apt, Suite, Floor, block etc"
                  value={formData.flatHouseNo}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>

              {/* Street Address */}
              <div className="md:col-span-8">
                <label className="block text-xs font-semibold text-gray-600 mb-1">Street Address / Colony *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Main street, locality address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Landmark */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Landmark (Optional)</label>
                <input
                  type="text"
                  name="landmark"
                  placeholder="e.g. Near Rose Hospital"
                  value={formData.landmark}
                  onChange={handleChange}
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="6-digit Indian pincode"
                  maxLength={6}
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">City / Town *</label>
                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Bangalore"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 focus:outline-emerald-800 focus:border-emerald-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* State */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">State *</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 bg-white text-gray-800 focus:outline-emerald-800 focus:border-emerald-800"
                >
                  <option value="">Select State</option>
                  {statesOfIndia.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  readOnly
                  className="w-full text-xs border border-gray-200 bg-gray-100 rounded px-3 py-2 text-gray-500 font-medium outline-none"
                />
              </div>
            </div>
          </div>

          {/* Secure disclaimer */}
          <div className="flex items-start gap-2 bg-[#E6DCC3]/20 p-3 rounded text-[11px] text-gray-700">
            <ShieldCheck size={16} className="text-emerald-800 flex-shrink-0 mt-0.5" />
            <p>
              Your privacy is safe. We do not store your shipping addresses online. Submitting will securely pipe this package directly into a standard private chat with our fulfillment admin.
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gold-200/20">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-emerald-950 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-gold-50 px-6 py-2.5 rounded text-xs font-semibold tracking-widest uppercase shadow transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/10 cursor-pointer"
            >
              <Send size={12} />
              <span>Submit & Open WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
