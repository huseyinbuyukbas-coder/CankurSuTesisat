import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 px-4 shadow-2xl"
      id="mobile-sticky-action-bar"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        
        {/* WhatsApp Button (Left) */}
        <a
          href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          id="sticky-whatsapp-btn"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button (Right, Extra Prominent) */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 active:from-amber-600 active:to-amber-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95 animate-pulse-subtle"
          id="sticky-call-btn"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span>HEMEN ARA</span>
        </a>

      </div>
    </div>
  );
};
