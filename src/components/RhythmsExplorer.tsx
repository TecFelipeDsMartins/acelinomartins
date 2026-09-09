import React, { useState } from 'react';
import { Music, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { RHYTHMS } from '../data/content';

export const RhythmsExplorer: React.FC = () => {
  const [selectedRhythm, setSelectedRhythm] = useState(RHYTHMS[0]);

  return (
    <section className="py-16 sm:py-20 bg-[#FFF8F6] border-t border-[#231916]/10">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#8B1E2B] mb-3">
            Repertório de Salão
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#231916] mb-4">
            Ritmos Tradicionais & de Salão
          </h2>
          <p className="text-sm sm:text-base text-[#231916]/80 max-w-xl mx-auto">
            Descubra a riqueza musical e a condução precisa de cada estilo presente nos bailes do
            Rio Grande do Sul.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {RHYTHMS.map((rhythm) => {
            const isSelected = selectedRhythm.id === rhythm.id;
            return (
              <button
                key={rhythm.id}
                type="button"
                onClick={() => setSelectedRhythm(rhythm)}
                className={`px-4 sm:px-5 py-2.5 rounded-sm text-xs sm:text-sm font-semibold tracking-wide transition-all border ${
                  isSelected
                    ? 'bg-[#1B4D3E] text-[#FFF8F6] border-[#1B4D3E] shadow-sm'
                    : 'bg-[#F5EFEB] text-[#231916] border-[#231916]/15 hover:border-[#1B4D3E]/40 hover:bg-[#EDE4DC]'
                }`}
              >
                {rhythm.name}
              </button>
            );
          })}
        </div>

        {/* Selected Rhythm Card */}
        <div className="max-w-3xl mx-auto bg-[#F5EFEB] border border-[#C5A038]/40 rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#231916]/10">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B1E2B]">
                {selectedRhythm.origin}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1B4D3E]">
                {selectedRhythm.name}
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-sm border border-[#231916]/10 text-xs font-semibold text-[#231916]">
              <Clock className="w-3.5 h-3.5 text-[#C5A038]" />
              <span>Compasso: {selectedRhythm.tempo}</span>
            </div>
          </div>

          <p className="text-base text-[#231916] font-medium leading-relaxed mb-4">
            {selectedRhythm.character}
          </p>

          <div className="p-4 bg-[#FFF8F6] border border-[#231916]/10 rounded-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" />
            <p className="text-sm text-[#231916]/80 leading-relaxed">
              <strong className="text-[#1B4D3E]">Dica de Condução: </strong>
              {selectedRhythm.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
