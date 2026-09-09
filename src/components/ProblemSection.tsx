import React from 'react';
import { Armchair, HeartHandshake, Users, CheckCircle2, Music2 } from 'lucide-react';
import { PAIN_POINTS } from '../data/content';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F6] border-t border-[#231916]/10 relative">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-3">
            Experiência no Salão
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#231916] leading-tight mb-6">
            Chega de ficar sentado esperando a noite passar
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#231916]/80 leading-relaxed max-w-2xl mx-auto">
            <p>
              Você já sentiu a frustração de ouvir sua música favorita tocar em um baile e não ter
              com quem dançar? Ou de ficar admirando os casais no salão enquanto se sente inseguro(a)
              com os próprios passos?
            </p>
            <p>
              Muitas pessoas deixam de ir a eventos ou voltam para casa frustradas simplesmente por
              não terem o par ideal. A dança foi feita para ser vivida, sentida e aproveitada ao
              máximo, e não apenas assistida da mesa.
            </p>
          </div>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between p-6 sm:p-8 bg-[#F5EFEB] border border-[#231916]/10 rounded-sm hover:border-[#C5A038]/60 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-sm bg-[#FFF8F6] border border-[#231916]/10 flex items-center justify-center text-[#8B1E2B] mb-6 group-hover:bg-[#1B4D3E] group-hover:text-[#C5A038] group-hover:border-[#1B4D3E] transition-all">
                    {idx === 0 && <Armchair className="w-6 h-6" />}
                    {idx === 1 && <HeartHandshake className="w-6 h-6" />}
                    {idx === 2 && <Users className="w-6 h-6" />}
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#231916] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#231916]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom check highlight */}
                <div className="pt-4 border-t border-[#231916]/10 flex items-center gap-2 text-xs font-semibold text-[#1B4D3E]">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0" />
                  <span>{item.check}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
