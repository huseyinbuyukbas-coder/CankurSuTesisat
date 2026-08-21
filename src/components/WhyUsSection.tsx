import React from 'react';
import { CheckCircle2, Clock, Sparkles, UserCheck, Target, MessageSquare, ShieldCheck } from 'lucide-react';
import { WHY_US_ITEMS, BUSINESS_INFO } from '../data/plumbingData';

export const WhyUsSection: React.FC = () => {
  const iconMap = [
    <Clock className="w-5 h-5 text-amber-400" />,
    <CheckCircle2 className="w-5 h-5 text-amber-400" />,
    <Sparkles className="w-5 h-5 text-amber-400" />,
    <UserCheck className="w-5 h-5 text-amber-400" />,
    <Target className="w-5 h-5 text-amber-400" />,
    <MessageSquare className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="neden-cankur" className="py-16 sm:py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wide">
            <span>Müşteri Memnuniyeti & İş Ahlakı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Neden Cankur Su Tesisat?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Yorumlarımızda müşterilerimizin en çok takdir ettiği temel çalışma ilkelerimiz.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 p-6 rounded-xl transition-all shadow-sm"
              id={`why-us-${item.id}`}
            >
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  {iconMap[index % iconMap.length]}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Highlight Box */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center justify-center md:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Gerçek Müşteri Deneyimi
              </span>
              <h4 className="text-lg font-bold text-white">
                Söylenen Saatte Gelme & Yapılan İşin Arkasında Durma
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl">
                Tesisat işlerinde en büyük sıkıntının ulaşılamamak ve gecikmek olduğunu biliyoruz. Rasim Usta randevu saatlerine özen gösterir, arızayı temiz şekilde çözüme kavuşturur.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm text-center transition-colors active:scale-95"
              >
                0545 802 39 60 – Ara
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
