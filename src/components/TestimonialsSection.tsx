import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-[#F5EFEB] border-t border-[#231916]/10">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-3">
            Palavra de Quem Dançou
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#231916] leading-tight mb-4">
            Depoimentos & Experiências no Salão
          </h2>

          <p className="text-base text-[#231916]/80 max-w-xl mx-auto">
            O alívio e a felicidade de ter um parceiro de dança atencioso em noites inesquecíveis.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#FFF8F6] border border-[#231916]/10 hover:border-[#C5A038]/60 p-6 sm:p-8 rounded-sm flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 relative"
              >
                <div>
                  {/* Decorative Quote Mark */}
                  <div className="font-serif text-5xl sm:text-6xl text-[#C5A038] leading-none mb-2 select-none">
                    “
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#C5A038]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-[15px] text-[#231916]/85 italic leading-relaxed mb-6">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#231916]/10">
                  <div className="font-serif font-bold text-base text-[#1B4D3E]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#8B1E2B] font-semibold uppercase tracking-wider mt-0.5">
                    {item.context} — {item.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
