import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck } from "lucide-react";

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

  return (
    <section id="contact-us-page" className="animate-fade-in divide-y divide-gold-200/10">
      
      {/* Editorial Header Banner */}
      <div className="bg-emerald-950 text-gold-50 py-16 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-400"> Get in Touch </span>
          <h1 className="text-3xl md:text-4xl font-serif font-black">We'd Love to Hear From You</h1>
          <p className="text-xs text-gray-300 leading-relaxed font-light">
            Have a question about steeping guides, bulk wedding gifting, or our ethical sourcing gardens?
            Speak to our curators. We are always ready to serve.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 md:py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-xl font-serif font-bold text-emerald-950">Luxury Boutique HQ</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              If you happen to be traveling through West Bengal, please schedule a curated walkthrough at our garden, where you can watch raw tea leaves picked and rolled in real time.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Garden Address</h4>
                <p className="text-gray-600 leading-relaxed mt-1">
                  Chamong Garden Estate, Higher Kurseong Range, Darjeeling,<br />
                  West Bengal, PIN 734203, India
                </p>
              </div>
            </div>

            {/* Direct Tech Phones */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Consultation Lines</h4>
                <p className="text-gray-600 mt-1">WhatsApp & Voice: +91 99999 99999</p>
                <p className="text-gray-400 mt-0.5">Toll Free: 1800-419-5561 (India only)</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Corporate & Curatorial Mail</h4>
                <p className="text-gray-600 mt-1">Gifting / Wholesale: curators@pranateacollective.com</p>
                <p className="text-gray-400 mt-0.5">Customer Care: support@pranateacollective.com</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-emerald-900/5 text-emerald-800 rounded-md h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock size={18} />
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-emerald-950 uppercase tracking-wider">Opening Hours</h4>
                <p className="text-gray-600 mt-1">Monday - Saturday: 09:00 AM - 07:00 PM (IST)</p>
                <p className="text-gray-400 mt-0.5">Sunday: Offline (Earth restoration rest day)</p>
              </div>
            </div>

          </div>

          <div className="p-4 bg-gold-50/50 rounded-lg border border-gold-200/20 text-xs flex gap-2">
            <ShieldCheck size={18} className="text-emerald-800 flex-shrink-0" />
            <p className="text-gray-600 leading-relaxed">
              *Note: We never sell or share your contact data. All corporate inquiries are tracked within 12 operating hours by our chief tea sommelier team.
            </p>
          </div>

        </div>

        {/* Right Column: Custom Interactive Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#FAF8F5] border border-gold-200/20 rounded-xl p-8 shadow-sm">
          
          <h3 className="font-serif font-bold text-xl text-emerald-950 mb-1">Send an Electronic Inquiry</h3>
          <p className="text-xs text-gray-500 mb-6">Drop us a line and let's craft a bespoke tea connection together.</p>

          {isSubmitted ? (
            <div className="p-8 bg-emerald-900/5 border border-emerald-900/10 rounded-lg text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 bg-emerald-900 text-gold-200 rounded-full flex items-center justify-center mx-auto shadow">
                <Send size={18} />
              </div>
              <h4 className="font-serif font-bold text-emerald-950 text-md">Inquiry Received with Purity!</h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your contact. Your message has been secured. Our curators will review and reach out to you via email shortly.
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
                  <option value="Retail Inquiry">Retail Gifting & Purchases</option>
                  <option value="Wedding / Corporate">Bespoke Wedding & Corporate Gifting</option>
                  <option value="Steeping Guide">Brewing or Steeping Questions</option>
                  <option value="Estate Sourcing">Assam & Darjeeling Estate Sourcing Partner</option>
                  <option value="Press / PR">Press or Media Collaborations</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Your Message *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="How can we assist you today? Please list any tea variants or wholesale volumes you have in mind."
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

      </div>

    </section>
  );
}
