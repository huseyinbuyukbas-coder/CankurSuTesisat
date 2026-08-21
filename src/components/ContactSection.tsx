import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

export const ContactSection: React.FC = () => {
  return (
    <section id="iletisim" className="py-16 sm:py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wide">
            <span>7 Gün Açık İletişim Hattı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ustanıza Ulaşın
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tesisat arızalarında zaman kaybetmeden telefon veya WhatsApp üzerinden Rasim Usta ile görüşün.
          </p>
        </div>

        {/* Contact Grid: Info & Actions on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business & Contact Info Cards */}
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              
              {/* Phone Detail Box */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Telefon & Acil İletişim
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    {BUSINESS_INFO.phoneDisplay}
                  </div>
                  <div className="text-xs text-slate-300">
                    Yetkili Usta: <strong className="text-amber-400 font-semibold">{BUSINESS_INFO.masterName}</strong>
                  </div>
                </div>
              </div>

              {/* Address Detail Box */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    İşletme Adresi
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-xs text-slate-400">
                    Küçükçekmece / İstanbul
                  </div>
                </div>
              </div>

              {/* Working Hours Box */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Çalışma Durumu & Saatleri
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-emerald-400">
                    Her gün 08:00 – 23:30
                  </div>
                  <div className="text-xs text-slate-400">
                    Akşam saatlerine kadar açık tesisat hizmeti
                  </div>
                </div>
              </div>

            </div>

            {/* Main Contact Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md transition-all active:scale-95 text-center"
                id="contact-call-now-btn"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>HEMEN ARA</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95 text-center"
                id="contact-whatsapp-write-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP’TAN YAZ</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all active:scale-95 text-center"
                id="contact-directions-btn"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>YOL TARİFİ AL</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Location Representation */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 h-full flex flex-col justify-between shadow-xl">
              
              {/* Map Header */}
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm text-white">Google Haritalar Konumu</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Google Haritalarda Aç</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/80">
                <iframe
                  title="Cankur Su Tesisat Harita Konumu"
                  src="https://maps.google.com/maps?q=Maslak+%C3%87e%C5%9Fme+Caddesi+Akarsu+Sk+No+84+DE+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece+%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale-20 contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Map Floating Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-white font-bold block">CANKUR SU TESİSAT</strong>
                    <span className="text-slate-300">Rasim Usta – Küçükçekmece</span>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
                  >
                    Yol Tarifi
                  </a>
                </div>
              </div>

              <div className="mt-3 px-2 text-xs text-slate-400 flex items-center justify-between">
                <span>Adres: Maslak Çeşme Cd. Akarsu Sk. No: 84 D:E Küçükçekmece</span>
                <span className="text-emerald-400 font-semibold">23:30'a Kadar Açık</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
