import React from "react";

export default function AnnouncementBar() {
  const announcements = [
    { text: "Home Delivery Across India", icon: "🚚" },
    { text: "Maharashtra: 3-5 days", icon: "📍" },
    { text: "Outside Maharashtra: 7 days", icon: "📦" },
  ];

  // Repeat announcements to guarantee smooth continuous loop with no blank gaps on wide displays
  const repeatedAnnouncements = Array(6).fill(announcements).flat();

  return (
    <div id="announcement-bar" className="sticky top-0 z-50 bg-emerald-950 text-gold-200 text-xs font-medium tracking-wide py-2.5 border-b border-emerald-900/30 overflow-hidden select-none">
      <div className="flex w-full items-center">
        <div className="animate-marquee-container flex items-center gap-16 whitespace-nowrap">
          {repeatedAnnouncements.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span className="uppercase tracking-wider">{item.text}</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400/50 mx-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
