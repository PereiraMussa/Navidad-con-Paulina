'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaMagnifyingGlassPlus, 
  FaXmark 
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';
import { ImageWithFallback } from './ImageWithFallback';

export function VisualPreview() {
  const previews = siteConfig.images.previews;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPreview, setSelectedPreview] = useState<typeof previews[0] | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? previews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === previews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPreview(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="previa" className="py-16 md:py-24 bg-[#F5EFEB] border-t border-[#CFCABF]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Fuente Nunito */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-display text-xs font-black tracking-[0.2em] text-[#5E0001] uppercase mb-2 block">
            MUESTRA EDITORIAL
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            Mira lo que encontrarás dentro
          </h2>
          <p className="text-sm sm:text-base text-[#76584C]">
            Diagramación limpia, pasos explicados al detalle y paletas visuales para inspirarte de inmediato.
          </p>
        </div>

        {/* Carousel / Card Showcase */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main active slide presentation */}
          <div className="overflow-hidden rounded-2xl bg-[#FAF7F2] border border-[#CFCABF]/60 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 sm:p-8">
              
              {/* Preview image column with zoom button */}
              <div className="md:col-span-6 flex justify-center">
                <div 
                  onClick={() => setSelectedPreview(previews[currentIndex])}
                  className="relative group cursor-pointer w-full max-w-[320px] aspect-[700/900] rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 hover:ring-2 hover:ring-[#A60B08] transition-all"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPreview(previews[currentIndex]);
                    }
                  }}
                  aria-label={`Ampliar ${previews[currentIndex].title}`}
                >
                  <ImageWithFallback
                    src={previews[currentIndex].src}
                    fallbackSrc={previews[currentIndex].src.replace('.jpg', '.svg')}
                    alt={previews[currentIndex].label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-[#360001]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs">
                    <FaMagnifyingGlassPlus className="w-4 h-4" aria-hidden="true" />
                    <span className="font-display">Clic para ampliar</span>
                  </div>

                  {/* Explicit Placeholder Tag Badge */}
                  <div className="absolute top-3 left-3 bg-[#5E0001] text-[#FAF7F2] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs font-display">
                    {previews[currentIndex].label}
                  </div>
                </div>
              </div>

              {/* Text detail column */}
              <div className="md:col-span-6 flex flex-col justify-center text-left">
                <span className="font-display text-xs font-black text-[#A60B08] tracking-widest uppercase mb-1">
                  MUESTRA {currentIndex + 1} DE {previews.length}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1D2E19] mb-3">
                  {previews[currentIndex].title}
                </h3>
                <p className="text-sm text-[#4A3D36] leading-relaxed mb-6">
                  {previews[currentIndex].desc}
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedPreview(previews[currentIndex])}
                    className="font-display inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#5E0001] bg-[#5E0001]/10 hover:bg-[#5E0001]/20 rounded-lg transition-colors cursor-pointer"
                  >
                    <FaMagnifyingGlassPlus className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Ver página completa</span>
                  </button>
                </div>

                {/* Thumbnails row */}
                <div className="mt-8 pt-6 border-t border-[#CFCABF]/40 flex items-center gap-3">
                  {previews.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative w-12 h-16 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                        currentIndex === idx
                          ? 'border-[#A60B08] scale-105 shadow-xs'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`Ver muestra ${idx + 1}`}
                    >
                      <ImageWithFallback
                        src={item.src}
                        fallbackSrc={item.src.replace('.jpg', '.svg')}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Controls: Prev / Next with Font Awesome */}
          <button
            onClick={prevSlide}
            aria-label="Página previa anterior"
            className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF7F2] border border-[#CFCABF] text-[#1D2E19] hover:bg-[#5E0001] hover:text-[#FAF7F2] shadow-md flex items-center justify-center transition-colors cursor-pointer z-10 focus-visible:outline-2 focus-visible:outline-[#A60B08]"
          >
            <FaChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Página previa siguiente"
            className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF7F2] border border-[#CFCABF] text-[#1D2E19] hover:bg-[#5E0001] hover:text-[#FAF7F2] shadow-md flex items-center justify-center transition-colors cursor-pointer z-10 focus-visible:outline-2 focus-visible:outline-[#A60B08]"
          >
            <FaChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedPreview && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-preview-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-2xl w-full max-h-[90vh] bg-[#FAF7F2] rounded-2xl p-6 overflow-y-auto shadow-2xl flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPreview(null)}
                aria-label="Cerrar vista ampliada"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1D2E19] text-[#FAF7F2] hover:bg-[#A60B08] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A60B08]"
              >
                <FaXmark className="w-4 h-4" aria-hidden="true" />
              </button>

              <div className="w-full text-left mb-4">
                <span className="font-display text-xs font-black text-[#A60B08] tracking-widest uppercase">
                  {selectedPreview.label}
                </span>
                <h3 id="modal-preview-title" className="font-display text-xl font-bold text-[#1D2E19]">
                  {selectedPreview.title}
                </h3>
              </div>

              {/* Full size preview display */}
              <div className="w-full max-w-[500px] aspect-[700/900] rounded-xl overflow-hidden border border-[#CFCABF] shadow-inner mb-4">
                <ImageWithFallback
                  src={selectedPreview.src}
                  fallbackSrc={selectedPreview.src.replace('.jpg', '.svg')}
                  alt={selectedPreview.label}
                  className="w-full h-full object-contain bg-[#FAF7F2]"
                  containerClassName="w-full h-full"
                />
              </div>

              <p className="text-xs text-[#76584C] text-center">
                Pulsa ESC o el botón superior para cerrar la ampliación.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
