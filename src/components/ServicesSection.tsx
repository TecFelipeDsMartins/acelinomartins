import React, { useState } from 'react';
import { PartyPopper, Music, Heart, MessageCircle, Copy, Check, Phone } from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/content';

interface ServicesSectionProps {
  cardImageUrl?: string;
  onOpenSimulator?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ cardImageUrl, onOpenSimulator }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F6] border-t border-[#231916]/10">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-3">
            Serviços Sob Medida
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#231916] leading-tight mb-4">
            O Seu Par Ideal para Momentos Especiais
          </h2>

          <p className="text-base text-[#231916]/80 max-w-xl mx-auto">
            Com o serviço de Personal Dancer e Dançarino Acompanhante, você tem a garantia de ser a
            estrela do salão.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.number}
                className="bg-[#F5EFEB] border border-[#231916]/10 hover:border-[#C5A038]/60 p-6 sm:p-8 rounded-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Card top bar with Diamond Number + Icon */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#231916]/10">
                    <div className="flex items-center gap-1.5 font-serif font-bold text-base text-[#1B4D3E]">
                      <span className="text-[#C5A038] text-sm">♦</span>
                      <span>{service.number}</span>
                    </div>

                    <div className="text-[#8B1E2B]">
                      {index === 0 && <PartyPopper className="w-5 h-5" />}
                      {index === 1 && <Music className="w-5 h-5" />}
                      {index === 2 && <Heart className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#231916] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#231916]/75 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Micro badge in all caps */}
                <div className="pt-4 border-t border-[#231916]/10">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#8B1E2B]">
                    {service.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Business Card presentation block */}
        <div className="max-w-4xl mx-auto bg-white border-2 border-[#C5A038]/40 rounded-sm p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Left Card Visual */}
            <div className="sm:col-span-4 bg-[#F5EFEB] border border-[#C5A038]/50 rounded-xs p-4 text-center shadow-xs">
              <div className="font-serif font-bold text-[#1B4D3E] text-base mb-1 tracking-wide">
                Acelino Martins
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#8B1E2B] mb-3">
                Personal Dancer & Acompanhante
              </div>
              <div className="text-[11px] text-[#231916]/80 space-y-1 mb-4">
                <div>✦ Dança Gaúcha & Salão</div>
                <div>✦ Eventos, Bailes & Galas</div>
                <div>✦ Atendimento Personalizado</div>
              </div>
              <div className="pt-3 border-t border-[#231916]/10 text-xs font-bold text-[#1B4D3E]">
                (51) 99778-0697
              </div>
            </div>

            {/* Right Card Information */}
            <div className="sm:col-span-8 flex flex-col justify-center">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-1">
                Cartão de Apresentação Oficial
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B4D3E] mb-2">
                Acelino Martins - Personal Dancer e Dançarino Acompanhante
              </h3>
              <p className="text-xs sm:text-sm text-[#231916]/80 leading-relaxed mb-4">
                Dança gaúcha e outros estilos. Acompanhamento para eventos, bailes e momentos
                especiais. Reserve sua data com antecedência para garantir atendimento com
                exclusividade.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FFF8F6] text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A038]" />
                  <span>Contato direto: {PERSONAL_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 bg-[#F5EFEB] hover:bg-[#EDE4DC] text-[#231916] text-xs font-medium px-3.5 py-2.5 rounded-sm border border-[#231916]/15 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-700" />
                      <span className="text-green-800 font-semibold">Telefone Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8B1E2B]" />
                      <span>Copiar Telefone</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
