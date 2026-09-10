import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface HeroProps {
  heroImageUrl: string;
  onOpenSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ heroImageUrl, onOpenSimulator }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A038]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#1B4D3E]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 text-xs sm:text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] bg-[#F5EFEB] border border-[#C5A038]/40 rounded-sm">
              <span className="text-[#C5A038]">♦</span>
              <span>Tradição Gaúcha & Dança de Salão</span>
              <span className="text-[#C5A038]">♦</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] font-semibold text-[#231916] tracking-tight mb-6">
              Não fique mais de fora da pista. Dance com{' '}
              <span className="text-[#1B4D3E] italic">confiança</span>, alegria e{' '}
              <span className="text-[#8B1E2B] italic">elegância</span> em qualquer evento!
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#231916]/80 leading-relaxed max-w-2xl mb-8">
              Seja para aprender os passos da verdadeira dança gaúcha ou para ter um par à altura em
              bailes e formaturas, Acelino Martins é o seu Personal Dancer.
            </p>

            {/* Primary Action Button */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-5">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FFF8F6] px-6 py-4 rounded-sm font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all border border-[#153E32] group"
              >
                <MessageCircle className="w-5 h-5 text-[#C5A038] group-hover:scale-110 transition-transform" />
                <span>Falar com Acelino no WhatsApp agora</span>
                <ArrowRight className="w-4 h-4 text-[#C5A038] group-hover:translate-x-1 transition-transform" />
              </a>

              {onOpenSimulator && (
                <button
                  type="button"
                  onClick={onOpenSimulator}
                  className="inline-flex items-center justify-center gap-2 bg-[#F5EFEB] hover:bg-[#EDE4DC] text-[#1B4D3E] border border-[#1B4D3E]/30 px-5 py-3.5 rounded-sm font-semibold text-sm transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A038]" />
                  <span>Simulador de Evento</span>
                </button>
              )}
            </div>

            {/* Location & Region Notice */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#231916]/70 mb-10">
              <MapPin className="w-4 h-4 text-[#8B1E2B] shrink-0" />
              <span>
                {PERSONAL_INFO.region} | <strong>{PERSONAL_INFO.phone}</strong>
              </span>
            </div>

            {/* Three Stat Proof Badges */}
            <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-[#231916]/10">
              <div className="p-3 sm:p-4 bg-[#F5EFEB] border border-[#231916]/10 rounded-sm text-center">
                <div className="font-serif font-bold text-lg sm:text-2xl text-[#1B4D3E] leading-tight">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8B1E2B] mt-0.5">
                  Cavalheirismo
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#F5EFEB] border border-[#231916]/10 rounded-sm text-center">
                <div className="font-serif font-bold text-base sm:text-xl text-[#1B4D3E] leading-tight">
                  Diplomado
                </div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8B1E2B] mt-0.5">
                  Fandango Gaúcho
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-[#F5EFEB] border border-[#231916]/10 rounded-sm text-center">
                <div className="font-serif font-bold text-base sm:text-xl text-[#1B4D3E] leading-tight">
                  Personal
                </div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8B1E2B] mt-0.5">
                  Condução Segura
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Image with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer classic frame with subtle brass line */}
              <div className="relative rounded-sm overflow-hidden bg-[#F5EFEB] border-2 border-[#C5A038]/60 shadow-xl p-2 sm:p-2.5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-[#231916]/10">
                  <img
                    src={heroImageUrl}
                    alt="Acelino Martins - Personal Dancer e Dançarino Acompanhante"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient shadow for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Right Badge: Porto Alegre & RS */}
                  <div className="absolute top-3 right-3 bg-[#8B1E2B] text-[#FFF8F6] px-3 py-1 rounded-xs text-xs font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5 border border-[#C5A038]/50">
                    <span className="text-[#C5A038]">★</span>
                    <span>{PERSONAL_INFO.badgeLocation}</span>
                  </div>

                  {/* Bottom overlay with name tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-serif text-lg sm:text-xl font-bold tracking-wide block drop-shadow-md">
                      Acelino Martins
                    </span>
                    <span className="text-xs text-[#C5A038] uppercase tracking-[0.14em] font-medium block">
                      Dançarino Acompanhante & Personal
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Credential Card - Bottom Right Overlay */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 sm:-bottom-6 bg-white border border-[#C5A038]/50 rounded-sm shadow-xl p-3 sm:p-4 max-w-[280px] sm:max-w-[300px] flex items-center gap-3">
                <div className="w-11 h-11 bg-[#1B4D3E] rounded-xs flex items-center justify-center text-[#C5A038] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-serif font-bold text-[#1B4D3E] leading-snug">
                    Especialista em Condução
                  </div>
                  <div className="text-[11px] text-[#231916]/70 leading-tight">
                    Cavalheirismo, Ritmo & Confiança
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
