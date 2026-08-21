import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

interface HeaderProps {
  onOpenQuickRequest?: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickRequest }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hizmetler', href: '#hizmetler' },
    { name: 'Neden Cankur?', href: '#neden-cankur' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'Sık Sorulan Sorular', href: '#sss' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-md">
      {/* Top micro info bar */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Açık: 23:30'a Kadar Hizmet
            </span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Küçükçekmece / İstanbul
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="hidden md:inline text-slate-400">Yetkili Usta: <strong className="text-white font-semibold">Rasim Usta</strong></span>
            <a 
              href={BUSINESS_INFO.phoneTel} 
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors flex items-center gap-1"
              id="topbar-phone-link"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group" id="header-brand-logo">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500/30 flex items-center justify-center text-white shadow-inner font-black text-xl tracking-wider">
              <span className="text-amber-400">C</span>S
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                CANKUR SU TESİSAT
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-1">
                <span>Rasim Usta</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400/90 font-semibold">Küçükçekmece</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors tracking-wide py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md hover:shadow-amber-500/20 transition-all active:scale-95"
              id="header-phone-btn"
            >
              <Phone className="w-4 h-4 text-slate-950 fill-current" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="p-2.5 bg-amber-500 text-slate-950 rounded-lg font-bold flex items-center justify-center"
              aria-label="Telefonla Ara"
              id="mobile-quick-call-btn"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Menüyü Aç/Kapat"
              id="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn" id="mobile-menu-drawer">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400">
            <span>Yetkili: Rasim Usta</span>
            <span className="text-emerald-400 font-medium">Akşam 23:30'a kadar açık</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400 font-medium text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-emerald-600 text-white font-bold text-sm text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm text-center"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Hemen Ara</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
