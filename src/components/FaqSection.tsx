import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_INFO } from '../data/plumbingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-16 sm:py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wide">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sık Sorulan Sorular
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tesisat hizmetlerimiz, çalışma saatlerimiz ve süreç hakkında sıkça sorulan soruların cevapları.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                id={`faq-item-${item.id}`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-400/80 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-850 bg-slate-900/30">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Assistance Card */}
        <div className="mt-10 p-6 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-4">
          <h4 className="text-base font-bold text-white">Başka bir sorunuz veya acil durumunuz mu var?</h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Rasim Usta ile doğrudan görüşerek aklınıza takılan her türlü tesisat konusunu sorabilirsiniz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent("Merhaba Rasim Usta, bir tesisat konusu hakkında danışmak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp'tan Sor</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
