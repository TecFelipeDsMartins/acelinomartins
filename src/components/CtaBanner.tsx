import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface CtaBannerProps {
  onOpenSimulator?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenSimulator }) => {
  return (
    <section className="relative py-20 sm:py-24 bg-[#12372C] text-[#FFF8F6] overflow-hidden">
      {/* Background aesthetic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1B4D3E]/80 via-[#12372C] to-[#0A1E18] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A038]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#8B1E2B] text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-[#C5A038]/40 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C5A038] animate-pulse" />
          <span>Vagas Limitadas por Fim de Semana</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Sua noite inesquecível na pista de dança começa aqui
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#FFF8F6]/85 max-w-2xl mx-auto leading-relaxed mb-10">
          Não passe mais nenhum evento olhando os outros dançarem. Garanta agora mesmo a presença de
          um cavalheiro dedicado ao seu lado.
        </p>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C5A038] hover:bg-[#D4B04C] text-[#12372C] px-8 py-4 rounded-sm font-bold text-base tracking-wide shadow-lg hover:shadow-xl transition-all group"
          >
            <MessageCircle className="w-5 h-5 text-[#12372C]" />
            <span>Consultar disponibilidade pelo WhatsApp ({PERSONAL_INFO.phone})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {onOpenSimulator && (
            <button
              type="button"
              onClick={onOpenSimulator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-[#C5A038]/50 px-6 py-4 rounded-sm font-semibold text-sm transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#C5A038]" />
              <span>Simular Meu Evento</span>
            </button>
          )}
        </div>

        {/* Subnote */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#FFF8F6]/70">
          <ShieldCheck className="w-4 h-4 text-[#C5A038]" />
          <span>Atendimento cordial, rápido e sem compromisso para Porto Alegre e Região.</span>
        </div>
      </div>
    </section>
  );
};
