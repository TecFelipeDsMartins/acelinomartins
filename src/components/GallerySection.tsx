import React, { useState } from 'react';
import { Maximize2, X, MapPin, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
  onOpenImageManager?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items, onOpenImageManager }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F6] border-t border-[#231916]/10">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-3">
            Memória & Experiência
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#231916] leading-tight mb-4">
            Galeria de Momentos e Formaturas
          </h2>

          <p className="text-sm sm:text-base text-[#231916]/80 max-w-2xl mx-auto leading-relaxed">
            Registros autênticos de bailes, graduações em dança fandangueira e confraternizações nos
            principais palcos tradicionalistas e salões do Rio Grande do Sul.
          </p>

          {onOpenImageManager && (
            <div className="mt-4">
              <button
                type="button"
                onClick={onOpenImageManager}
                className="inline-flex items-center gap-1.5 text-xs text-[#1B4D3E] hover:text-[#8B1E2B] underline decoration-[#C5A038] font-medium"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                Associar ou personalizar fotos desta galeria via HTML / URL
              </button>
            </div>
          )}
        </div>

        {/* 4 Cards Grid - exactly 2x2 on desktop / tablet as in screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#231916] border-2 border-[#C5A038]/40 shadow-md hover:border-[#C5A038] transition-all duration-300"
              >
                {/* Photo Aspect Ratio Container */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>

                {/* Dark Vignette Overlay for Title Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                {/* Bottom Content overlay matching the screenshot */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex items-end justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-[#C5A038] mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFF8F6] drop-shadow-sm leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#151F1B] border border-[#C5A038]/50 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo preview */}
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.altText}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Caption */}
            <div className="p-6 bg-[#151F1B] text-white border-t border-[#C5A038]/30">
              <div className="text-xs uppercase tracking-[0.18em] text-[#C5A038] font-bold mb-1">
                {activeItem.category}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">{activeItem.title}</h3>
              {activeItem.description && (
                <p className="text-sm text-gray-300 mb-2">{activeItem.description}</p>
              )}
              {activeItem.location && (
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
                  <span>{activeItem.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
