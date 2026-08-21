import React, { useState } from 'react';
import { 
  Search, 
  Wrench, 
  Droplets, 
  ShieldAlert, 
  SlidersHorizontal, 
  Zap, 
  Flame, 
  Activity, 
  UtensilsCrossed, 
  Bath, 
  MessageCircle, 
  Phone, 
  ChevronRight,
  Info
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO, ServiceItem } from '../data/plumbingData';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-amber-500" };
    switch (iconName) {
      case 'SearchCheck':
        return <Search {...iconProps} />;
      case 'Wrench':
        return <Wrench {...iconProps} />;
      case 'Droplets':
        return <Droplets {...iconProps} />;
      case 'ShieldAlert':
        return <ShieldAlert {...iconProps} />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      case 'Flame':
        return <Flame {...iconProps} />;
      case 'Activity':
        return <Activity {...iconProps} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed {...iconProps} />;
      case 'Bath':
        return <Bath {...iconProps} />;
      default:
        return <Wrench {...iconProps} />;
    }
  };

  return (
    <section id="hizmetler" className="py-16 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <span>Ustalık Hizmetleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Profesyonel Tesisat Hizmetleri
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Ev, iş yeri ve apartmanlarda karşılaşılan tesisat problemlerine hızlı ve pratik çözümler.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-black/30"
            >
              <div>
                {/* Header of card: Icon & Urgency Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.urgencyTag ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      {service.urgencyTag}
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      Hizmet #{index + 1}
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Additional Detail Text */}
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 mb-6 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                  <span>{service.details}</span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Call */}
              <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2">
                <a
                  href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-xs transition-colors"
                  id={`whatsapp-service-${service.id}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp’tan Sor</span>
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center p-2.5 rounded-lg bg-slate-700 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-bold transition-colors"
                  title="Rasim Usta'yı Ara"
                  id={`call-service-${service.id}`}
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Fast Info Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/60 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Aradığınız tesisat problemini yukarıda göremediniz mi?
            </h4>
            <p className="text-sm text-slate-300">
              Rasim Usta ile doğrudan iletişime geçerek dairenizdeki özel arıza durumu hakkında bilgi alabilirsiniz.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95"
            id="services-custom-call-btn"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>0545 802 39 60</span>
          </a>
        </div>

      </div>
    </section>
  );
};
