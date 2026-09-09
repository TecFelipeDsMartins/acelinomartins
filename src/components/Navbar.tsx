import React, { useState } from 'react';
import { MessageCircle, Menu, X, Phone, Image as ImageIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface NavbarProps {
  onOpenImageManager?: () => void;
  onOpenSimulator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenImageManager, onOpenSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F6]/95 backdrop-blur-md border-b border-[#231916]/10 transition-all">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#inicio" className="group flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-sm bg-[#1B4D3E] flex items-center justify-center text-[#C5A038] shadow-xs group-hover:bg-[#13382D] transition-colors">
              <span className="font-serif font-bold text-lg leading-none">A</span>
            </div>
            <div>
              <div className="font-serif font-bold tracking-wide text-[#1B4D3E] text-base sm:text-lg uppercase leading-tight group-hover:text-[#8B1E2B] transition-colors">
                Acelino Martins
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-[#8B1E2B] uppercase">
                Personal Dancer
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-[#231916]">
            <a href="#inicio" className="hover:text-[#1B4D3E] transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-[#1B4D3E] transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-[#1B4D3E] transition-colors">
              Sobre
            </a>
            <a href="#galeria" className="hover:text-[#1B4D3E] transition-colors">
              Galeria
            </a>
            <a href="#depoimentos" className="hover:text-[#1B4D3E] transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-[#1B4D3E] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            {onOpenImageManager && (
              <button
                type="button"
                onClick={onOpenImageManager}
                title="Configurar imagens personalizadas"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#1B4D3E] hover:text-[#8B1E2B] border border-[#1B4D3E]/20 hover:border-[#8B1E2B]/40 rounded-sm bg-white transition-colors"
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#C5A038]" />
                <span>Imagens HTML</span>
              </button>
            )}

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FFF8F6] px-4 py-2.5 rounded-sm font-medium text-sm tracking-wide shadow-xs hover:shadow-md transition-all border border-[#153E32]"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A038]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 bg-[#1B4D3E] text-white rounded-sm text-xs"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#231916] hover:text-[#1B4D3E] focus:outline-hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#231916]/10 bg-[#FFF8F6] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#231916]">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1B4D3E]"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1B4D3E]"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1B4D3E]"
            >
              Sobre Acelino
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1B4D3E]"
            >
              Galeria de Formaturas
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1B4D3E]"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1B4D3E]"
            >
              Perguntas Frequentes (FAQ)
            </a>
          </nav>

          <div className="pt-3 border-t border-[#231916]/10 flex flex-col gap-2">
            {onOpenSimulator && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulator();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#1B4D3E] bg-[#F5EFEB] border border-[#1B4D3E]/20 rounded-sm text-center"
              >
                Simular Meu Evento
              </button>
            )}

            {onOpenImageManager && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenImageManager();
                }}
                className="w-full py-2 text-xs font-medium text-[#1B4D3E] border border-dashed border-[#1B4D3E]/30 rounded-sm flex items-center justify-center gap-2"
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#C5A038]" />
                Associar Imagens (HTML / URLs)
              </button>
            )}

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#1B4D3E] text-white py-3 rounded-sm font-semibold text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A038]" />
              <span>Chamar no WhatsApp ({PERSONAL_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
