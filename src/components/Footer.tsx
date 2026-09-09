import React from 'react';
import { MessageCircle, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12372C] text-[#FFF8F6] border-t border-[#C5A038]/30 pt-16 pb-12">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xs bg-[#C5A038] flex items-center justify-center text-[#12372C]">
                <span className="font-serif font-bold text-xl leading-none">A</span>
              </div>
              <div>
                <span className="font-serif font-bold tracking-wider text-lg sm:text-xl uppercase block leading-tight text-white">
                  Acelino Martins
                </span>
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[#C5A038] uppercase block">
                  Personal Dancer & Dançarino Acompanhante
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FFF8F6]/75 max-w-md leading-relaxed mb-6">
              Acompanhamento de alto nível para bailes tradicionalistas em CTGs, formaturas,
              casamentos e eventos sociais no Rio Grande do Sul. Condução segura, respeito absoluto
              e elegância no salão.
            </p>

            <div className="flex flex-col gap-2 text-xs text-[#FFF8F6]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A038] shrink-0" />
                <span>Porto Alegre, Região Metropolitana e Vale dos Sinos - RS</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A038] shrink-0" />
                <span>Discrição, pontualidade e ética profissional</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C5A038] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF8F6]/75">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços Sob Medida
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Acelino Martins
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria de Formaturas
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C5A038] mb-4">
              Atendimento & Contato
            </h4>
            <p className="text-xs text-[#FFF8F6]/75 mb-4 leading-relaxed">
              Consulte datas disponíveis com antecedência para garantir exclusividade na sua
              celebração.
            </p>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5A038] hover:bg-[#D4B04C] text-[#12372C] px-4 py-2.5 rounded-xs font-semibold text-xs transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8F6]/60">
          <div>
            © {new Date().getFullYear()} Acelino Martins - Personal Dancer. Todos os direitos
            reservados.
          </div>
          <div>Tradição Gaúcha, Condução & Cavalheirismo</div>
        </div>
      </div>
    </footer>
  );
};
