import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Phone, MapPin, Camera, Sparkles } from 'lucide-react';
import { SERVICES, NEIGHBORHOODS, BUSINESS_INFO } from '../data/plumbingData';

export const QuickRequestSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Küçükçekmece Merkez');
  const [customNeighborhood, setCustomNeighborhood] = useState('');
  const [notes, setNotes] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);

  const getConstructedMessage = () => {
    const neighborhood = customNeighborhood.trim() || selectedNeighborhood;
    let msg = `Merhaba Rasim Usta, Cankur Su Tesisat'tan hizmet almak istiyorum.\n\n`;
    msg += `📍 Konum/Semt: ${neighborhood}\n`;
    msg += `🔧 Hizmet/Arıza: ${selectedService}\n`;
    if (notes.trim()) {
      msg += `📝 Detay: ${notes.trim()}\n`;
    }
    if (hasPhoto) {
      msg += `📷 (WhatsApp üzerinden arıza fotoğrafı/videosu ileteceğim.)\n`;
    }
    msg += `\nMüsaitlik ve ön bilgilendirme rica ediyorum.`;
    return msg;
  };

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = getConstructedMessage();
    const url = `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 bg-slate-950 text-white border-y border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tek Tıkla WhatsApp İletişimi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Hızlı Fiyat & Bilgi Talebi Oluştur
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Sorununuzu seçin, Rasim Usta'ya doğrudan hazır WhatsApp mesajı iletin.
              </p>
            </div>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Doğrudan Ara: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <form onSubmit={handleOpenWhatsApp} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Arıza veya Hizmet Türü
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                  id="quick-request-service-select"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Diğer Tesisat Problemi">Diğer Tesisat Problemi</option>
                </select>
              </div>

              {/* Neighborhood / Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Bulunduğunuz Semt / Bölge
                </label>
                <select
                  value={selectedNeighborhood}
                  onChange={(e) => setSelectedNeighborhood(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                  id="quick-request-neighborhood-select"
                >
                  <option value="Küçükçekmece Merkez">Küçükçekmece Merkez</option>
                  {NEIGHBORHOODS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                  <option value="Diğer Yakın Bölge">Diğer / Çevre İlçe</option>
                </select>
              </div>

            </div>

            {/* Note input */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Sorun Açıklaması (İsteğe Bağlı)
              </label>
              <input
                type="text"
                placeholder="Örn: Lavabo altından damlatıyor, klozet su kaçırıyor..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400"
                id="quick-request-notes-input"
              />
            </div>

            {/* Photo hint checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="hasPhotoCheck"
                checked={hasPhoto}
                onChange={(e) => setHasPhoto(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-amber-400"
              />
              <label htmlFor="hasPhotoCheck" className="text-xs text-slate-300 flex items-center gap-1.5 cursor-pointer">
                <Camera className="w-3.5 h-3.5 text-slate-400" />
                <span>WhatsApp sohbetinde fotoğraf veya video da göndereceğim</span>
              </label>
            </div>

            {/* Live Message Preview */}
            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-slate-300 whitespace-pre-line leading-relaxed">
              <span className="text-emerald-400 font-bold block mb-1 font-sans">Gönderilecek WhatsApp Mesaj Önizlemesi:</span>
              {getConstructedMessage()}
            </div>

            {/* Action Submit */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-lg shadow-emerald-950/50 transition-all active:scale-98 cursor-pointer"
              id="quick-request-submit-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp ile Rasim Usta'ya Gönder</span>
            </button>

            <p className="text-center text-xs text-slate-400">
              WhatsApp butonuna tıkladığınızda mesaj telefonunuzda veya tarayıcınızda açılır. Doğrudan görüşebilirsiniz.
            </p>
          </form>

        </div>

      </div>
    </section>
  );
};
