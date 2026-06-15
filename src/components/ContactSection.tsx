import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck, ExternalLink, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    subject: "Retail Inquiry",
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setFormData({ subject: "Retail Inquiry", name: "", email: "", message: "" });
  };

  const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Hind+Tea+Company/@18.5178233,73.8570105,17z/data=!4m15!1m8!3m7!1s0x3bc2c06f4cb11a63:0x5aec48f968c26ca!2sHind+Tea+Company!8m2!3d18.5178233!4d73.8595854!10e9!16s%2Fg%2F1pp2w_4y8!3m5!1s0x3bc2c06f4cb11a63:0x5aec48f968c26ca!8m2!3d18.5178233!4d73.8595854!16s%2Fg%2F1pp2w_4y8?entry=ttu";

  const INDIAMART_URL = "https://www.indiamart.com/thehindteacompanymaharashtra/profile.html?srsltid=AfmBOoro7gUSiksQ93hgRYHABkqvPFG8LEaX1Gmz2vIuKwR0-yHcmEuY";

  return (
    <section id="contact-us-page" className="animate-fade-in divide-y divide-gold-200/10">
      
      {/* Editorial Header Banner */}
      <div className="bg-emerald-950 text-gold-50 py-16 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-400"> Connect with our Desk </span>
          <h1 className="text-3xl md:text-4xl font-serif font-black">Get in Touch</h1>
          <p className="text-xs text-gray-300 leading-relaxed font-light">
            Have a question about dealership registration, bulk wholesale tea pricing, custom recipes, or retail orders?
            Speak directly with the blenders at The Hind Tea Company.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 md:py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-emerald-950">Pune Wholesale Depot & Office</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Drop by our central depot in Raviwar Peth to sample raw tea leaves, appreciate our unique dust mixtures, and discuss customized dealer pricing metrics first-hand.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Business Address</h4>
                <p className="text-gray-600 leading-relaxed mt-1">
                  <strong>The Hind Tea Company</strong><br />
                  185, Raviwar Peth, Near Laxmi Road / Budhwar Peth,<br />
                  Pune, Maharashtra - 411002, India
                </p>
                <div className="mt-2.5 flex gap-3">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={10} />
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href={INDIAMART_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
                  >
                    <span>IndiaMart Profile</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Tech Phones */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Deals & Wholesales Line</h4>
                <p className="text-gray-600 mt-1">Mobile & WhatsApp Desk: +91 77559 33865</p>
                <p className="text-gray-400 mt-0.5">Customer Support: +91 77559 33865</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Electronic Mail desks</h4>
                <p className="text-gray-600 mt-1">Wholesale & Trade Accounts: wholesale@hindteacompany.com</p>
                <p className="text-gray-400 mt-0.5">Retail Gifting & General: support@hindteacompany.com</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Business Operating Hours</h4>
                <p className="text-gray-600 mt-1">Monday - Saturday: 10:00 AM - 08:30 PM (IST)</p>
                <p className="text-gray-400 mt-0.5">Sunday: Closed (Weekly Rest Day)</p>
              </div>
            </div>

          </div>

          <div className="p-4 bg-gold-50/50 rounded-lg border border-gold-200/20 text-xs flex gap-2">
            <ShieldCheck size={18} className="text-emerald-800 flex-shrink-0" />
            <p className="text-gray-600 leading-relaxed">
              *The Hind Tea Company stands committed to premium quality. All electronic and dealership filings are responded to within 12 operating business hours.
            </p>
          </div>

        </div>

        {/* Right Column: Custom Interactive Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-[#FAF8F5] border border-gold-200/20 rounded-xl p-8 shadow-sm">
            
            <h3 className="font-serif font-bold text-xl text-emerald-950 mb-1">Send an Electronic Inquiry</h3>
            <p className="text-xs text-gray-500 mb-6 font-light">Drop us a line and let's structure a premium tea business connection together.</p>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-900/5 border border-emerald-900/10 rounded-lg text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow">
                  <Send size={18} />
                </div>
                <h4 className="font-serif font-bold text-emerald-950 text-md">Inquiry Transmitted with Purity!</h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed font-light">
                  Thank you for reaching out to **The Hind Tea Company**. Your message has been safely logged in our Pune central server. One of our sales coordinators will review and link up with you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-emerald-800 hover:text-emerald-950 font-bold uppercase tracking-wider underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full text-xs border border-gray-300 rounded px-3 py-2.5 focus:outline-emerald-800 focus:border-emerald-800 bg-white"
                    />
                  </div>

                  {/* Email address */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full text-xs border border-gray-300 rounded px-3 py-2.5 focus:outline-emerald-800 focus:border-emerald-800 bg-white"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Inquiry Purpose</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    className="w-full text-xs border border-gray-300 rounded px-3 py-2.5 bg-white text-gray-800 focus:outline-emerald-800 focus:border-emerald-800"
                  >
                    <option value="Wholesale Dealership">Register as Wholesale Dealer / Retailer</option>
                    <option value="Bulk Order">Bulk Purchase (Corporate / Gifting)</option>
                    <option value="Customer Purchase">Individual Buy Inquiries</option>
                    <option value="Custom Blending">Custom Spicing / Blends Consultation</option>
                    <option value="Estate Collaboration">Assam & Darjeeling Sourcing Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you today? Please indicate preferred volumes, tea types (CTC, dust or herbal), and target destination state."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full text-xs border border-gray-300 rounded px-3 py-2.5 focus:outline-emerald-800 focus:border-emerald-800 bg-white"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full bg-emerald-900 hover:bg-emerald-800 text-gold-50 py-3 rounded text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={12} />
                  <span>Transmit Request</span>
                </button>

              </form>
            )}

          </div>

          {/* Inline Graphic Location Interactive Card */}
          <div className="relative overflow-hidden rounded-xl border border-gold-200/20 bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 text-gold-50 shadow-sm flex flex-col justify-between min-h-[160px]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <span className="text-[9px] font-mono tracking-widest uppercase text-gold-400">Centrally Located Depot</span>
              <h4 className="font-serif font-black text-lg text-white">Raviwar Peth Hub in Pune</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-light max-w-md">
                We are situated at 185, Raviwar Peth inside Pune's legendary traditional tea-trading zone. Our doors are open to institutional clients looking to inspect our dust varieties and whole-leaf blends.
              </p>
            </div>
            <div className="pt-4 relative z-10">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold uppercase text-[10px] tracking-widest px-5 py-2.5 rounded transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <span>Navigate Via Google Maps</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
