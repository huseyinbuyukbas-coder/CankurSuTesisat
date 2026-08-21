import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pb-24 md:pb-12 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500/30 flex items-center justify-center text-white font-black text-lg">
                <span className="text-amber-400">C</span>S
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block">
                  CANKUR SU TESİSAT
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Rasim Usta – Küçükçekmece
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Su tesisatı, su kaçağı, tıkanıklık ve tesisat sorunlarında hızlı ve güvenilir çözümler.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 w-fit">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>4,9 / 5 Google Değerlendirmesi (107 Yorum)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Hızlı Menü
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Ana Sayfa</a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-amber-400 transition-colors">Hizmetler</a>
              </li>
              <li>
                <a href="#neden-cankur" className="hover:text-amber-400 transition-colors">Neden Cankur?</a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-amber-400 transition-colors">Yorumlar</a>
              </li>
              <li>
                <a href="#sss" className="hover:text-amber-400 transition-colors">Sık Sorulan Sorular</a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-amber-400 transition-colors">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Başlıca Hizmetler
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Su Kaçağı Tespiti & Tamiri</li>
              <li>Lavabo & Mutfak Tıkanıklık Açma</li>
              <li>Klozet İç Takım & Kaçak Onarımı</li>
              <li>Musluk & Batarya Değişimi</li>
              <li>Su Borusu & Patlak Tesisat Tamiri</li>
              <li>Kombi Su Bağlantıları & Petek Temizliği</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              İletişim & Adres
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <a 
                href={BUSINESS_INFO.phoneTel} 
                className="flex items-center gap-2 text-white font-bold hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Her gün 08:00 – 23:30</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp İletişim Hattı</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Cankur Su Tesisat. Tüm hakları saklıdır.</p>
          <p className="text-slate-400">
            Küçükçekmece Tesisatçı – Su Kaçağı ve Tıkanıklık Hizmetleri
          </p>
        </div>

      </div>
    </footer>
  );
};
