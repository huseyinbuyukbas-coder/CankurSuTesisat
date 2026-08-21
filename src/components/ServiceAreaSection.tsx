import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Info } from 'lucide-react';
import { BUSINESS_INFO, NEIGHBORHOODS } from '../data/plumbingData';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>Lokasyon & Kapsam</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            İstanbul’da Tesisat Hizmeti
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Ana hizmet bölgemiz <strong className="text-white font-bold">Küçükçekmece</strong> ve yakın çevresidir.
          </p>
        </div>

        {/* Central Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800 text-center sm:text-left">
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">İşletme Adresi</div>
              <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                {BUSINESS_INFO.address}
              </div>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Haritada Gör & Yol Tarifi</span>
            </a>
          </div>

          {/* Neighborhood Badges */}
          <div className="py-6">
            <div className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
              Küçükçekmece Mahalleleri & Çevre Bölgeler:
            </div>
            <div className="flex flex-wrap gap-2">
              {NEIGHBORHOODS.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>

          {/* Mandatory Accurate Scope Statement */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-300 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Küçükçekmece ve çevresindeki tesisat ihtiyaçlarınız için bizimle iletişime geçerek hizmet bölgesi hakkında bilgi alabilirsiniz.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Bölgeniz İçin Arayın: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent("Merhaba Rasim Usta, bulunduğum konuma tesisat hizmeti veriyor musunuz? Konumum: ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Konumunuzu WhatsApp'tan İletin</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
