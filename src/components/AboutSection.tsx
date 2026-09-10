import React from 'react';
import { UserCheck, Award, ShieldCheck, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { ABOUT_PILLARS, PERSONAL_INFO } from '../data/content';

interface AboutSectionProps {
  portraitUrl: string;
  diplomaUrl: string;
  onOpenSimulator?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  portraitUrl,
  diplomaUrl,
  onOpenSimulator,
}) => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-[#F5EFEB] border-t border-[#231916]/10">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Dual Photos (Portrait + Diploma Certificate) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Top Photo: Portrait */}
            <div className="relative rounded-sm overflow-hidden bg-white border-2 border-[#C5A038]/50 shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={portraitUrl}
                  alt="Acelino Martins - Dançarino e Instrutor Tradicionalista"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Photo: Certificate & Graduation moment */}
            <div className="relative rounded-sm overflow-hidden bg-white border-2 border-[#C5A038]/50 shadow-md">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={diplomaUrl}
                  alt="Certificado de Formação em Danças de salão"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#1B4D3E] text-[#FFF8F6] text-center py-2 px-3 text-xs sm:text-xs font-semibold uppercase tracking-wider border-t border-[#C5A038]/40">
                Formado em Danças de salão
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Story and Credential Badges */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-3">
              Tradição & Maestria
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#231916] leading-tight mb-6">
              Quem é Acelino Martins?
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#231916]/85 leading-relaxed mb-8">
              <p>
                Especialista em condução, ritmo e cavalheirismo, Acelino dedica-se a transformar a
                experiência de quem ama a música, mas precisa do incentivo e do parceiro certo.
              </p>
              <p>
                Com paciência, técnica e respeito, ele garante que seu único trabalho seja aproveitar
                o momento. Cada compasso é focado em fazer você brilhar na pista de dança, sentindo
                segurança tanto na tradição gaúcha quanto nos clássicos ritmos de salão.
              </p>
            </div>

            {/* 3 Value propositions matching screenshot */}
            <div className="w-full space-y-3.5 mb-8">
              <div className="flex items-start gap-4 p-3.5 sm:p-4 bg-[#FFF8F6] border border-[#231916]/10 rounded-sm">
                <div className="w-10 h-10 rounded-xs bg-[#1B4D3E]/10 text-[#1B4D3E] flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#231916]">
                    Condutor Paciente e Atencioso
                  </h4>
                  <p className="text-xs sm:text-sm text-[#231916]/75 mt-0.5">
                    Ritmo adaptado ao seu tempo de aprendizado e conforto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 sm:p-4 bg-[#FFF8F6] border border-[#231916]/10 rounded-sm">
                <div className="w-10 h-10 rounded-xs bg-[#8B1E2B]/10 text-[#8B1E2B] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#231916]">
                    Certificado em Dança de Salão
                  </h4>
                  <p className="text-xs sm:text-sm text-[#231916]/75 mt-0.5">
                    Formação tradicional sólida em CTGs e academias de renome.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 sm:p-4 bg-[#FFF8F6] border border-[#231916]/10 rounded-sm">
                <div className="w-10 h-10 rounded-xs bg-[#C5A038]/15 text-[#C5A038] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#1B4D3E]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#231916]">
                    Respeito, Postura e Elegância Absoluta
                  </h4>
                  <p className="text-xs sm:text-sm text-[#231916]/75 mt-0.5">
                    Discrição refinada para você se sentir honrada e prestigiada no evento.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FFF8F6] px-6 py-3.5 rounded-sm font-semibold text-sm shadow-sm transition-colors border border-[#153E32]"
              >
                <Calendar className="w-4 h-4 text-[#C5A038]" />
                <span>Quero reservar minha data com Acelino</span>
              </a>

              {onOpenSimulator && (
                <button
                  type="button"
                  onClick={onOpenSimulator}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 bg-white border border-[#231916]/20 text-[#231916] hover:text-[#1B4D3E] rounded-sm text-sm font-medium transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A038]" />
                  <span>Consultar Ritmos</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
