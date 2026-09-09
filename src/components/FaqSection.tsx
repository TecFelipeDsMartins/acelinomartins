import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F6] border-t border-[#231916]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-3">
            Tire Suas Dúvidas
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#231916] leading-tight mb-4">
            Perguntas Frequentes (FAQ)
          </h2>

          <p className="text-base text-[#231916]/80 max-w-lg mx-auto">
            Tudo o que você precisa saber sobre como funciona a contratação e o acompanhamento de dança.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F5EFEB] border border-[#231916]/10 rounded-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif font-semibold text-base sm:text-lg text-[#231916] hover:text-[#1B4D3E] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-xs bg-[#FFF8F6] flex items-center justify-center text-[#1B4D3E] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1B4D3E] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#231916]/80 leading-relaxed border-t border-[#231916]/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
