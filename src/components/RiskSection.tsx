import React from 'react';
import { AlertTriangle, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';
import leakRepairImg from '../assets/images/leak_repair_1787301921746.jpg';

export const RiskSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Erken Müdahale Önemlidir</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Su Kaçağını veya Tıkanıklığı Ertelemeyin
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Küçük görünen bir sızıntı zamanla daha büyük hasarlara neden olabilir. Sorunun kaynağını mümkün olduğunca erken tespit ettirmek hem zaman hem de maliyet açısından avantaj sağlayabilir.
              </p>

              {/* Realistic Risk Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Alt kata su sızması ve komşu uyuşmazlıklarının önüne geçin</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Duvar kabarması ve sıva dökülmelerini büyümeden önleyin</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Gider tıkanıklığının geri basmasını engelleyin</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Gereksiz kırma dökme masrafını minimize edin</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base shadow-md transition-all active:scale-95 text-center"
                  id="risk-section-call-btn"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Ustaya Ulaş – 0545 802 39 60</span>
                </a>

                <a
                  href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent("Merhaba Rasim Usta, dairemde ilerlemesinden endişelendiğim bir tesisat sızıntısı/problemi var. Danışmak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold text-sm transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp’tan Yaz</span>
                </a>
              </div>

            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-lg">
                <img
                  src={leakRepairImg}
                  alt="Su Kaçağı Onarımı ve Tesisat Tamiri"
                  className="w-full h-64 sm:h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-sm p-3 text-xs text-slate-300 flex items-center justify-between">
                  <span>Temiz & Pratik Tesisat Müdahalesi</span>
                  <span className="text-amber-400 font-bold">Rasim Usta</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
