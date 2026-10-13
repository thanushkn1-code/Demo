import React, { useState } from 'react';
import { GymConfig } from '../types';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  gym: GymConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ gym }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsAppUrl = `https://wa.me/${gym.rawPhone}?text=Hi,%20I%20want%20to%20know%20about%20gym%20membership`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 bg-neutral-900 border border-neutral-700/80 rounded-sm text-xs font-bold text-white shadow-2xl transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Chat with us on WhatsApp</span>
        <div className="w-2 h-2 bg-neutral-900 border-r border-b border-neutral-700/80 transform rotate-45 -mr-4" />
      </div>

      {/* Floating CTA Button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp about gym membership"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-108 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none group-hover:opacity-0" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow" />
      </a>
    </div>
  );
};
