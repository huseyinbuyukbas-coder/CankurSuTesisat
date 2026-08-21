import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, Quote, ThumbsUp, ShieldCheck } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/plumbingData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'speed' | 'cleanliness'>('all');

  return (
    <section id="yorumlar" className="py-16 sm:py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wide">
            <span>Doğrulanmış Müşteri Deneyimleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Google Haritalar üzerinden işletmemizi değerlendiren müşterilerimizin gerçek geri bildirimleri.
          </p>
        </div>

        {/* Big Overall Google Rating Scoreboard */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-12 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            
            {/* Score box */}
            <div className="flex items-center gap-4">
              <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono">
                {BUSINESS_INFO.googleRating}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-white font-bold">{BUSINESS_INFO.googleReviewCount} Google Yorumu</strong> üzerinden
                </div>
              </div>
            </div>

            {/* Google Maps link button */}
            <a
              href={BUSINESS_INFO.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
              id="view-all-google-reviews-btn"
            >
              <span>Daha Fazla Google Yorumu Gör</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>

          </div>
        </div>

        {/* Verbatim Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition-all"
              id={`review-card-${review.id}`}
            >
              <div>
                {/* Header: Stars & Platform */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    {review.date}
                  </span>
                </div>

                {/* Highlight Tag */}
                <div className="text-xs font-bold text-amber-400/90 mb-2.5">
                  "{review.highlight}"
                </div>

                {/* Comment Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-200">{review.author}</span>
                <span className="text-slate-500">Müşteri Yorumu</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note (Mandatory) */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 inline-block bg-slate-900/60 px-4 py-2 rounded-lg border border-slate-800">
            * Google kullanıcı yorumları – doğrulanmamıştır.
          </p>
        </div>

      </div>
    </section>
  );
};
