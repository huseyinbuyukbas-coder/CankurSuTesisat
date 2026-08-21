import React from 'react';
import { PhoneCall, ClipboardCheck, Wrench, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Bize Ulaşın",
      desc: "Telefon veya WhatsApp üzerinden tesisat probleminizi ve bulunduğunuz konumu iletin.",
      icon: <PhoneCall className="w-6 h-6 text-amber-400" />,
    },
    {
      num: "2",
      title: "Problemi Değerlendirelim",
      desc: "Arıza hakkında bilgi alıp, gerekirse fotoğraf üzerinden inceleyerek uygun müdahaleyi planlayalım.",
      icon: <ClipboardCheck className="w-6 h-6 text-amber-400" />,
    },
    {
      num: "3",
      title: "Çözümü Uygulayalım",
      desc: "Tesisat probleminize mümkün olan en hızlı ve uygun çözümü temiz işçilikle uygulayalım.",
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wide">
            <span>Kolay & Şeffaf İletişim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            3 adımda hızlı ve güvenilir tesisat desteği.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-800 font-mono">
                    0{step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-center leading-5 text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-10 text-center">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm"
          >
            <span>Rasim Usta ile hemen iletişime geçin ({BUSINESS_INFO.phoneDisplay})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
