import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { RhythmsExplorer } from './components/RhythmsExplorer';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ImageManagerModal } from './components/ImageManagerModal';
import { BookingSimulatorModal } from './components/BookingSimulatorModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DEFAULT_IMAGES, GALLERY_ITEMS } from './data/content';
import { GalleryItem } from './types';

export default function App() {
  // State for customizable images (enables associating images from HTML or URLs)
  const [heroImage, setHeroImage] = useState<string>(() => {
    return localStorage.getItem('acelino_hero_img_v2') || DEFAULT_IMAGES.hero;
  });

  const [aboutPortrait, setAboutPortrait] = useState<string>(() => {
    return localStorage.getItem('acelino_portrait_img_v2') || DEFAULT_IMAGES.aboutPortrait;
  });

  const [aboutDiploma, setAboutDiploma] = useState<string>(() => {
    return localStorage.getItem('acelino_diploma_img_v2') || DEFAULT_IMAGES.aboutDiploma;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('acelino_gallery_items_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return GALLERY_ITEMS;
      }
    }
    return GALLERY_ITEMS;
  });

  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('acelino_hero_img_v2', heroImage);
  }, [heroImage]);

  useEffect(() => {
    localStorage.setItem('acelino_portrait_img_v2', aboutPortrait);
  }, [aboutPortrait]);

  useEffect(() => {
    localStorage.setItem('acelino_diploma_img_v2', aboutDiploma);
  }, [aboutDiploma]);

  useEffect(() => {
    localStorage.setItem('acelino_gallery_items_v2', JSON.stringify(galleryItems));
  }, [galleryItems]);

  const handleUpdateGalleryItem = (id: string, newUrl: string) => {
    setGalleryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, imageUrl: newUrl } : item))
    );
  };

  const handleResetDefaults = () => {
    setHeroImage(DEFAULT_IMAGES.hero);
    setAboutPortrait(DEFAULT_IMAGES.aboutPortrait);
    setAboutDiploma(DEFAULT_IMAGES.aboutDiploma);
    setGalleryItems(GALLERY_ITEMS);
    localStorage.removeItem('acelino_hero_img_v2');
    localStorage.removeItem('acelino_portrait_img_v2');
    localStorage.removeItem('acelino_diploma_img_v2');
    localStorage.removeItem('acelino_gallery_items_v2');
  };

  return (
    <div className="min-h-screen bg-[#FFF8F6] text-[#231916] flex flex-col selection:bg-[#1B4D3E] selection:text-[#FFF8F6]">
      {/* Top Navigation */}
      <Navbar
        onOpenImageManager={() => setIsImageManagerOpen(true)}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
      />

      {/* Main Content Sections matching the screenshot */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          heroImageUrl={heroImage}
          onOpenSimulator={() => setIsSimulatorOpen(true)}
        />

        {/* Empathy / Problem Section: "Chega de ficar sentado esperando a noite passar" */}
        <ProblemSection />

        {/* Services Pillars: "Serviços Sob Medida - O Seu Par Ideal" & Business Card */}
        <ServicesSection onOpenSimulator={() => setIsSimulatorOpen(true)} />

        {/* Traditional Gaúcho & Ballroom Rhythms Explorer */}
        <RhythmsExplorer />

        {/* About Section: "Quem é Acelino Martins? Tradição & Maestria" */}
        <AboutSection
          portraitUrl={aboutPortrait}
          diplomaUrl={aboutDiploma}
          onOpenSimulator={() => setIsSimulatorOpen(true)}
        />

        {/* Gallery Section: "Galeria de Momentos e Formaturas" */}
        <GallerySection
          items={galleryItems}
          onOpenImageManager={() => setIsImageManagerOpen(true)}
        />

        {/* Testimonials: "Palavra de quem dançou" */}
        <TestimonialsSection />

        {/* FAQ: "Perguntas Frequentes" */}
        <FaqSection />

        {/* High-impact Closing CTA Banner */}
        <CtaBanner onOpenSimulator={() => setIsSimulatorOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <ImageManagerModal
        isOpen={isImageManagerOpen}
        onClose={() => setIsImageManagerOpen(false)}
        heroImage={heroImage}
        onUpdateHeroImage={setHeroImage}
        aboutPortrait={aboutPortrait}
        onUpdateAboutPortrait={setAboutPortrait}
        aboutDiploma={aboutDiploma}
        onUpdateAboutDiploma={setAboutDiploma}
        galleryItems={galleryItems}
        onUpdateGalleryItem={handleUpdateGalleryItem}
        onResetDefaults={handleResetDefaults}
      />

      <BookingSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />
    </div>
  );
}
