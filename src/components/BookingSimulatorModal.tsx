import React, { useState } from 'react';
import { X, Calendar, MapPin, Sparkles, MessageCircle, Music2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface BookingSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingSimulatorModal: React.FC<BookingSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [eventType, setEventType] = useState('Baile de CTG / Tradicionalista');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('Porto Alegre');
  const [clientName, setClientName] = useState('');
  const [rhythms, setRhythms] = useState<string[]>(['Vanera', 'Xote', 'Valsa']);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const toggleRhythm = (rhythm: string) => {
    if (rhythms.includes(rhythm)) {
      setRhythms(rhythms.filter((r) => r !== rhythm));
    } else {
      setRhythms([...rhythms, rhythm]);
    }
  };

  const handleGenerateWhatsApp = () => {
    const text = `Olá Acelino Martins! Gostaria de consultar disponibilidade para acompanhamento:\n\n` +
      `• *Nome:* ${clientName || 'Cliente'}\n` +
      `• *Tipo de Evento:* ${eventType}\n` +
      `• *Data:* ${date || 'A combinar'}\n` +
      `• *Cidade:* ${city}\n` +
      `• *Ritmos de Preferência:* ${rhythms.join(', ') || 'Dança Gaúcha geral'}\n` +
      (notes ? `• *Observações:* ${notes}\n` : '') +
      `\nPoderia me informar sobre disponibilidade e detalhes?`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFF8F6] border-2 border-[#C5A038]/60 rounded-sm shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#231916]/10">
          <div>
            <div className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B1E2B] mb-1">
              Atendimento Personalizado
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1B4D3E]">
              Simulador de Evento & Consulta
            </h3>
            <p className="text-xs text-[#231916]/75 mt-1">
              Personalize os detalhes da sua noite e receba um atendimento sob medida pelo WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#231916]/60 hover:text-[#231916] hover:bg-[#F5EFEB]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#231916] mb-1">
              Seu Nome ou Como Gostaria de Ser Chamada(o)
            </label>
            <input
              type="text"
              placeholder="Ex: Dona Maria Helena"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white border border-[#231916]/20 rounded-xs focus:outline-hidden focus:border-[#1B4D3E]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#231916] mb-1">
                Tipo de Evento
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#231916]/20 rounded-xs"
              >
                <option value="Baile de CTG / Tradicionalista">Baile de CTG / Tradicionalista</option>
                <option value="Formatura Solene ou Gala">Formatura Solene ou Gala</option>
                <option value="Casamento / Bodas">Casamento / Bodas</option>
                <option value="Aniversário de 15 Anos">Aniversário de 15 Anos</option>
                <option value="Noite Dançante / Dança de Salão">Noite Dançante / Dança de Salão</option>
                <option value="Outro Evento">Outro Evento Especial</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#231916] mb-1">
                Cidade do Evento
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#231916]/20 rounded-xs"
              >
                <option value="Porto Alegre">Porto Alegre</option>
                <option value="Canoas">Canoas</option>
                <option value="Novo Hamburgo">Novo Hamburgo</option>
                <option value="São Leopoldo">São Leopoldo</option>
                <option value="Gravataí / Cachoeirinha">Gravataí / Cachoeirinha</option>
                <option value="Viamão">Viamão</option>
                <option value="Outra localidade (RS)">Outra localidade (RS)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#231916] mb-1">
              Data Prevista (Opcional)
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white border border-[#231916]/20 rounded-xs"
            />
          </div>

          {/* Preferred Rhythms Checklist */}
          <div>
            <label className="block text-xs font-semibold text-[#231916] mb-2">
              Ritmos Que Gostaria de Dançar:
            </label>
            <div className="flex flex-wrap gap-2">
              {['Vanera', 'Xote Gaúcho', 'Valsa', 'Milonga', 'Bolero', 'Fandango', 'Chamamé'].map(
                (rhythm) => {
                  const active = rhythms.includes(rhythm);
                  return (
                    <button
                      key={rhythm}
                      type="button"
                      onClick={() => toggleRhythm(rhythm)}
                      className={`px-3 py-1.5 rounded-xs text-xs font-medium transition-colors border ${
                        active
                          ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]'
                          : 'bg-[#F5EFEB] text-[#231916] border-[#231916]/15 hover:border-[#1B4D3E]/40'
                      }`}
                    >
                      {active && '✓ '}
                      {rhythm}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#231916] mb-1">
              Mensagem ou Observação Especial (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Preciso de condução com calma pois não danço há algum tempo..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white border border-[#231916]/20 rounded-xs focus:outline-hidden focus:border-[#1B4D3E]"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-[#231916]/10">
          <button
            type="button"
            onClick={handleGenerateWhatsApp}
            className="w-full py-3.5 bg-[#1B4D3E] hover:bg-[#13382D] text-white font-semibold text-sm rounded-xs shadow-md flex items-center justify-center gap-2.5 transition-colors border border-[#153E32]"
          >
            <MessageCircle className="w-5 h-5 text-[#C5A038]" />
            <span>Enviar Consulta Pronta para Acelino no WhatsApp</span>
          </button>
          <p className="text-[11px] text-center text-[#231916]/60 mt-2">
            Mensagem formatada sem compromisso financeiro inicial.
          </p>
        </div>
      </div>
    </div>
  );
};
