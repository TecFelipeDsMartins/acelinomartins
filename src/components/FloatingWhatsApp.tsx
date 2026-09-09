import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-40">
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Acelino no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#1B4D3E] hover:bg-[#13382D] text-white rounded-full shadow-xl hover:shadow-2xl border-2 border-[#C5A038] transition-all transform hover:scale-105"
      >
        <MessageCircle className="w-7 h-7 text-[#C5A038]" />

        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B1E2B] rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>

        {/* Hover Tooltip on desktop */}
        <span className="hidden md:block absolute right-16 bg-[#12372C] text-white text-xs font-semibold px-3 py-1.5 rounded-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-[#C5A038]/40">
          Agendar com Acelino no WhatsApp
        </span>
      </a>
    </aside>
  );
};
