import React from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Zap, Sparkles, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';
import heroPlumberImg from '../assets/images/hero_plumber_1787301888976.jpg';

interface HeroProps {
  onOpenQuickRequest?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickRequest }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Primary Conversion CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Location & Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-slate-200">
              <span className="flex items-center gap-1 font-semibold text-amber-400">
                <MapPin className="w-3.5 h-3.5" />
                Küçükçekmece / İstanbul
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Her Gün 23:30'a Kadar Açık
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Su Tesisatı Sorununuz mu Var?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Rasim Usta Hızlıca Çözüyor.
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Su kaçağı, tıkanıklık, musluk, lavabo, klozet ve tesisat sorunlarınız için hızlı, temiz ve güvenilir çözümler.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-lg shadow-lg shadow-amber-500/25 transition-all transform active:scale-95 text-center group"
                id="hero-primary-call-btn"
              >
                <Phone className="w-5 h-5 text-slate-950 fill-current group-hover:rotate-12 transition-transform" />
                <span>HEMEN ARA</span>
                <span className="text-xs font-bold bg-slate-950/20 py-0.5 px-2 rounded ml-1 tracking-normal">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-md hover:shadow-emerald-600/25 transition-all transform active:scale-95 text-center"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
                <span>WHATSAPP’TAN ULAŞ</span>
              </a>
            </div>

            {/* Direct Quick Info Note */}
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              WhatsApp üzerinden fotoğraf göndererek hızlı değerlendirme alabilirsiniz.
            </p>

            {/* Trust Badges & Verified Google Ratings */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Google Rating Card */}
                <a
                  href="#yorumlar"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors"
                  id="hero-google-rating-badge"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-black text-lg">
                    4,9
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
                      <strong className="text-white font-bold">4,9 / 5</strong> Google Puanı <span className="text-slate-400">(107 Yorum)</span>
                    </div>
                  </div>
                </a>

                {/* 3 Pillars Summary */}
                <div className="flex items-center justify-around sm:justify-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hızlı</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Temiz</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Güvenilir</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Realistic Plumber Visual & Fast Overview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-blue-600/30 rounded-2xl blur-sm"></div>

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 shadow-2xl">
                <img
                  src={heroPlumberImg}
                  alt="Cankur Su Tesisat - Rasim Usta"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Card: Master Credentials */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-5 pt-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-amber-400 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        Yetkili Tesisat Ustası
                      </div>
                      <h2 className="text-xl font-extrabold text-white">Rasim Usta</h2>
                      <p className="text-xs text-slate-300">Cankur Su Tesisat – Küçükçekmece</p>
                    </div>

                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-bold shadow-md transition-transform active:scale-95"
                      title="Rasim Usta'yı Ara"
                      id="hero-card-phone-action"
                    >
                      <Phone className="w-5 h-5 fill-current" />
                    </a>
                  </div>
                </div>

                {/* Floating Service Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg shadow-lg">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Hemen Ulaşın: 0545 802 39 60
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
