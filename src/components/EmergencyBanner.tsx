import React from 'react';
import { AlertCircle, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-5 sm:py-6 px-4 shadow-inner relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left text block */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-slate-950/10 border border-slate-950/15 items-center justify-center text-slate-950">
            <AlertCircle className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-950 animate-pulse sm:hidden"></span>
              <h2 className="text-lg sm:text-xl font-black tracking-tight text-slate-950">
                Su kaçağı veya tesisat arızası beklemiyor.
              </h2>
            </div>
            <p className="text-sm font-medium text-slate-900/90 mt-0.5 max-w-xl">
              Lavabo, klozet, musluk, gider veya su tesisatı probleminizde Rasim Usta ile iletişime geçin.
            </p>
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold text-base shadow-md transition-all active:scale-95 group"
            id="emergency-call-btn"
          >
            <Phone className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
            <span>0545 802 39 60 – Hemen Ara</span>
          </a>

          <a
            href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent("Merhaba Rasim Usta, acil bir su tesisatı problemim var. Yardımcı olabilir misiniz?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-950 font-bold text-sm transition-colors"
            id="emergency-whatsapp-btn"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
