import React, { useState } from 'react';
import { X, Image as ImageIcon, Check, RefreshCw, Upload, Code2, Link, Copy } from 'lucide-react';
import { GalleryItem } from '../types';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  heroImage: string;
  onUpdateHeroImage: (url: string) => void;
  aboutPortrait: string;
  onUpdateAboutPortrait: (url: string) => void;
  aboutDiploma: string;
  onUpdateAboutDiploma: (url: string) => void;
  galleryItems: GalleryItem[];
  onUpdateGalleryItem: (id: string, newUrl: string) => void;
  onResetDefaults: () => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  heroImage,
  onUpdateHeroImage,
  aboutPortrait,
  onUpdateAboutPortrait,
  aboutDiploma,
  onUpdateAboutDiploma,
  galleryItems,
  onUpdateGalleryItem,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'url' | 'html' | 'upload'>('url');
  const [htmlSnippet, setHtmlSnippet] = useState('');
  const [htmlTarget, setHtmlTarget] = useState<'hero' | 'aboutPortrait' | 'aboutDiploma' | string>(
    'hero'
  );
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  if (!isOpen) return null;

  // Extract src from pasted HTML tag (e.g. <img src="..." />)
  const handleParseHtml = () => {
    if (!htmlSnippet) return;
    const match = htmlSnippet.match(/src=["']([^"']+)["']/i);
    const extractedUrl = match ? match[1] : htmlSnippet.trim();

    if (extractedUrl) {
      if (htmlTarget === 'hero') onUpdateHeroImage(extractedUrl);
      else if (htmlTarget === 'aboutPortrait') onUpdateAboutPortrait(extractedUrl);
      else if (htmlTarget === 'aboutDiploma') onUpdateAboutDiploma(extractedUrl);
      else {
        onUpdateGalleryItem(htmlTarget, extractedUrl);
      }
      setHtmlSnippet('');
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: 'hero' | 'aboutPortrait' | 'aboutDiploma' | string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          if (target === 'hero') onUpdateHeroImage(result);
          else if (target === 'aboutPortrait') onUpdateAboutPortrait(result);
          else if (target === 'aboutDiploma') onUpdateAboutDiploma(result);
          else onUpdateGalleryItem(target, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FFF8F6] border-2 border-[#C5A038]/60 rounded-sm shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#231916]/10">
          <div>
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-[#8B1E2B]" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B4D3E]">
                Associar & Personalizar Imagens a partir do HTML
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#231916]/70 mt-1">
              Substitua qualquer fotografia colando URLs diretas, tags HTML &lt;img&gt; ou enviando
              fotos locais do dispositivo.
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

        {/* Tab buttons */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#231916]/10 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors ${
              activeTab === 'url'
                ? 'bg-[#1B4D3E] text-white'
                : 'text-[#231916]/70 hover:text-[#1B4D3E] bg-[#F5EFEB]'
            }`}
          >
            Links Diretos (URLs)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('html')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
              activeTab === 'html'
                ? 'bg-[#1B4D3E] text-white'
                : 'text-[#231916]/70 hover:text-[#1B4D3E] bg-[#F5EFEB]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Associar via HTML Tag
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
              activeTab === 'upload'
                ? 'bg-[#1B4D3E] text-white'
                : 'text-[#231916]/70 hover:text-[#1B4D3E] bg-[#F5EFEB]'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            Upload do Dispositivo
          </button>
        </div>

        {/* TAB 1: Quick URL Inputs */}
        {activeTab === 'url' && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8B1E2B] mb-1">
                Foto Principal do Destaque (Hero)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={heroImage}
                  onChange={(e) => onUpdateHeroImage(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-[#231916]/20 rounded-xs bg-white focus:outline-hidden focus:border-[#1B4D3E]"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8B1E2B] mb-1">
                  Foto do Retrato (Sobre Acelino)
                </label>
                <input
                  type="text"
                  value={aboutPortrait}
                  onChange={(e) => onUpdateAboutPortrait(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#231916]/20 rounded-xs bg-white focus:outline-hidden focus:border-[#1B4D3E]"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8B1E2B] mb-1">
                  Foto do Certificado de Fandango
                </label>
                <input
                  type="text"
                  value={aboutDiploma}
                  onChange={(e) => onUpdateAboutDiploma(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#231916]/20 rounded-xs bg-white focus:outline-hidden focus:border-[#1B4D3E]"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#231916]/10">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4D3E] mb-3">
                Fotos da Galeria de Formaturas & Salão (4 Itens)
              </label>
              <div className="space-y-3">
                {galleryItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <span className="w-40 text-xs font-medium text-[#231916] truncate">
                      {item.title}
                    </span>
                    <input
                      type="text"
                      value={item.imageUrl}
                      onChange={(e) => onUpdateGalleryItem(item.id, e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs border border-[#231916]/20 rounded-xs bg-white focus:outline-hidden focus:border-[#1B4D3E]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Associar a partir do HTML */}
        {activeTab === 'html' && (
          <div className="space-y-4">
            <div className="p-4 bg-[#F5EFEB] border border-[#231916]/10 rounded-sm">
              <div className="text-xs font-bold text-[#1B4D3E] mb-1">
                Colar código HTML &lt;img src="..." /&gt; ou URL de imagem:
              </div>
              <p className="text-xs text-[#231916]/70 mb-3">
                Você pode colar qualquer trecho HTML contendo a tag de imagem. O sistema extrairá o
                atributo <code className="bg-white px-1 py-0.5 rounded-xs">src</code>{' '}
                automaticamente.
              </p>

              <div className="mb-3">
                <label className="block text-xs font-semibold text-[#231916] mb-1">
                  Qual imagem você deseja substituir com este HTML?
                </label>
                <select
                  value={htmlTarget}
                  onChange={(e) => setHtmlTarget(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#231916]/20 rounded-xs"
                >
                  <option value="hero">Foto Principal (Hero)</option>
                  <option value="aboutPortrait">Retrato (Sobre Acelino)</option>
                  <option value="aboutDiploma">Certificado Fandango</option>
                  {galleryItems.map((g) => (
                    <option key={g.id} value={g.id}>
                      Galeria: {g.title}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                rows={3}
                value={htmlSnippet}
                onChange={(e) => setHtmlSnippet(e.target.value)}
                placeholder='Exemplo: <img src="https://meusite.com.br/acelino.jpg" alt="Acelino Martins" />'
                className="w-full p-3 font-mono text-xs border border-[#231916]/20 rounded-xs bg-white focus:outline-hidden focus:border-[#1B4D3E] mb-3"
              />

              <button
                type="button"
                onClick={handleParseHtml}
                className="w-full py-2.5 bg-[#1B4D3E] hover:bg-[#13382D] text-white text-xs font-semibold rounded-xs shadow-xs transition-colors"
              >
                Associar Imagem do HTML
              </button>
            </div>

            {/* Ready-to-copy HTML snippets for convenience */}
            <div className="pt-3">
              <div className="text-xs font-bold text-[#8B1E2B] mb-2 uppercase tracking-wider">
                Exemplos de Códigos HTML das Imagens do App:
              </div>
              <div className="space-y-2">
                <div className="p-2.5 bg-white border border-[#231916]/10 rounded-xs flex items-center justify-between text-[11px] font-mono">
                  <span className="truncate max-w-lg text-[#231916]/80">
                    &lt;img src=&quot;{heroImage}&quot; alt=&quot;Acelino Martins&quot; /&gt;
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        `<img src="${heroImage}" alt="Acelino Martins" />`,
                        'hero-code'
                      )
                    }
                    className="p-1 text-[#1B4D3E] hover:text-[#8B1E2B]"
                    title="Copiar HTML"
                  >
                    {copiedSnippet === 'hero-code' ? (
                      <Check className="w-3.5 h-3.5 text-green-700" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: File Upload */}
        {activeTab === 'upload' && (
          <div className="space-y-4">
            <p className="text-xs text-[#231916]/75">
              Selecione arquivos de imagem locais (.jpg, .png, .webp) para carregar no navegador:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[#231916]/10 rounded-sm">
                <div className="text-xs font-bold text-[#1B4D3E] mb-2">Foto Principal (Hero)</div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'hero')}
                  className="text-xs text-[#231916]"
                />
              </div>

              <div className="p-4 bg-white border border-[#231916]/10 rounded-sm">
                <div className="text-xs font-bold text-[#1B4D3E] mb-2">Retrato Sobre Acelino</div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'aboutPortrait')}
                  className="text-xs text-[#231916]"
                />
              </div>

              <div className="p-4 bg-white border border-[#231916]/10 rounded-sm">
                <div className="text-xs font-bold text-[#1B4D3E] mb-2">Certificado de Dança</div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'aboutDiploma')}
                  className="text-xs text-[#231916]"
                />
              </div>

              <div className="p-4 bg-white border border-[#231916]/10 rounded-sm">
                <div className="text-xs font-bold text-[#1B4D3E] mb-2">Foto Galeria 1</div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, galleryItems[0]?.id || 'ctg-bailes')}
                  className="text-xs text-[#231916]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Modal Actions Footer */}
        <div className="mt-8 pt-4 border-t border-[#231916]/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetDefaults}
            className="inline-flex items-center gap-1.5 text-xs text-[#8B1E2B] hover:text-[#231916] font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Restaurar Imagens Originais
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-[#1B4D3E] text-white text-xs font-semibold rounded-xs hover:bg-[#13382D] transition-colors"
          >
            Concluir & Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};
