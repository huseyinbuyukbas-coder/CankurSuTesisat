import React from 'react';
import { ShieldCheck, Phone, MessageCircle, Sparkles, CheckCircle2, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';
import plumbingToolsImg from '../assets/images/plumbing_tools_1787301902656.jpg';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Equipment & Working Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl bg-slate-800">
              <img
                src={plumbingToolsImg}
                alt="Profesyonel Tesisat ve Kaçak Tespit Ekipmanları"
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5">
                <div className="space-y-1">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Özenli & Düzenli Ekipman</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    Tesisat arızalarında uygun aletlerle kırmadan, temiz ve sağlam onarım.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Peace-of-Mind Message */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-semibold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Güvenilir Tesisat Hizmeti</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              İşinizi teslim ederken içiniz rahat olsun.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Cankur Su Tesisat olarak tesisat problemlerinde hızlı, temiz ve çözüm odaklı hizmet anlayışını ön planda tutuyoruz.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Gereksiz Masraf ve Kırma Çıkarmama</h4>
                  <p className="text-xs text-slate-400">Arızanın tam kaynağı belirlenir, lüzumsuz işlem yapılmaz.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Çalışma Alanını Temiz Bırakma</h4>
                  <p className="text-xs text-slate-400">İşlem sonrası ortaya çıkan parçalar ve çalışma alanı toparlanır.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Doğrudan Usta İle Muhatap Olma</h4>
                  <p className="text-xs text-slate-400">Aracı veya çağrı merkezi olmadan doğrudan Rasim Usta ile görüşürsünüz.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Rasim Usta'yı Ara</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent("Merhaba Rasim Usta, evimdeki tesisat arızası için destek almak istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp’tan Ulaş</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
