'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FaStar, 
  FaChevronLeft, 
  FaChevronRight, 
  FaQuoteLeft, 
  FaCircleCheck, 
  FaHeart,
  FaArrowRight
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function TestimonialsSection() {
  const testimonials = siteConfig.testimonials.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filtrado opcional o ver todos
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.badge === activeFilter);

  const total = filteredTestimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay con pausa al pasar el cursor
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, total]);

  // Manejo de teclado para accesibilidad
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Obtener los 3 items visibles en desktop centrados en currentIndex
  const getVisibleItems = () => {
    if (total === 0) return [];
    if (total === 1) {
      return [{ item: filteredTestimonials[0], position: 'current', originalIndex: 0 }];
    }
    const prev = (currentIndex - 1 + total) % total;
    const current = currentIndex % total;
    const next = (currentIndex + 1) % total;
    return [
      { item: filteredTestimonials[prev], position: 'prev', originalIndex: prev },
      { item: filteredTestimonials[current], position: 'current', originalIndex: current },
      { item: filteredTestimonials[next], position: 'next', originalIndex: next },
    ];
  };

  const visibleCards = getVisibleItems();

  return (
    <section 
      id="testimonios"
      aria-label="Testimonios y opiniones de lectoras"
      className="py-16 md:py-24 bg-[#F5EFEB] border-t border-[#CFCABF]/40 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1D2E19]/10 text-[#1D2E19] text-xs font-bold uppercase tracking-wider mb-3">
            <FaHeart className="w-3 h-3 text-[#A60B08]" aria-hidden="true" />
            <span>{siteConfig.testimonials.sectionTag}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-4 [text-wrap:balance]">
            {siteConfig.testimonials.title}
          </h2>

          <p className="text-base text-[#76584C] leading-relaxed max-w-2xl mx-auto mb-6">
            {siteConfig.testimonials.subtitle}
          </p>

          {/* Social Proof Bar Aggregate */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#CFCABF]/60 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-[#DFBC76]" aria-hidden="true" />
              ))}
              <span className="font-display font-black text-sm text-[#1D2E19] ml-1.5 tabular-nums">
                {siteConfig.testimonials.averageRating} / 5
              </span>
            </div>

            <span className="text-[#CFCABF]" aria-hidden="true">·</span>

            <span className="text-xs sm:text-sm font-semibold text-[#5E0001]">
              {siteConfig.testimonials.totalReviews}
            </span>

            <span className="text-[#CFCABF]" aria-hidden="true">·</span>

            <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-[#1D2E19]">
              <FaCircleCheck className="w-3.5 h-3.5 text-[#1D2E19]" aria-hidden="true" />
              <span>{siteConfig.testimonials.satisfactionRate} satisfacción</span>
            </div>
          </div>
        </motion.div>

        {/* Carrusel de Tarjetas Interactivo */}
        <div className="relative mb-10">
          
          {/* Tarjeta Móvil (1 a la vez con transición suave) */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait">
              {filteredTestimonials[currentIndex] && (
                <motion.div
                  key={filteredTestimonials[currentIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#CFCABF]/60 shadow-md relative flex flex-col justify-between"
                >
                  <div>
                    {/* Estrellas y Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-[#5E0001] bg-[#5E0001]/10 px-2.5 py-0.5 rounded-full">
                        {filteredTestimonials[currentIndex].badge}
                      </span>
                    </div>

                    {/* Resaltado */}
                    <h3 className="font-display text-base font-black text-[#1D2E19] leading-snug mb-3">
                      “{filteredTestimonials[currentIndex].highlight}”
                    </h3>

                    {/* Comentario */}
                    <p className="text-sm text-[#2D231E]/90 leading-relaxed mb-6 italic">
                      {filteredTestimonials[currentIndex].comment}
                    </p>
                  </div>

                  {/* Datos del Autor */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#CFCABF]/40">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5E0001] text-[#FAF7F2] font-display font-black text-xs flex items-center justify-center shadow-xs">
                        {filteredTestimonials[currentIndex].avatarInitials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-sm text-[#1D2E19]">
                            {filteredTestimonials[currentIndex].name}
                          </span>
                          <FaCircleCheck className="w-3 h-3 text-[#1D2E19]" title="Lectora verificada" />
                        </div>
                        <span className="text-xs text-[#76584C]">
                          {filteredTestimonials[currentIndex].location}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#76584C]/80 font-medium">
                      {filteredTestimonials[currentIndex].date}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Carrusel Desktop & Tablet (Tarjetas Múltiples con efecto de profundidad) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleCards.map(({ item, position, originalIndex }) => {
              const isCenter = position === 'current';
              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setCurrentIndex(originalIndex)}
                  className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                    isCenter 
                      ? 'bg-[#FAF7F2] border-[#5E0001]/40 shadow-xl scale-[1.02] ring-1 ring-[#DFBC76]/60 relative z-20' 
                      : 'bg-[#FAF7F2]/70 hover:bg-[#FAF7F2] border-[#CFCABF]/60 shadow-sm opacity-85 hover:opacity-100 hover:scale-[1.01]'
                  }`}
                >
                  <div>
                    {/* Header de la tarjeta */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-[#5E0001] bg-[#5E0001]/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        {item.badge}
                      </span>
                    </div>

                    <div className="mb-3 text-[#DFBC76]/60">
                      <FaQuoteLeft className="w-5 h-5 text-[#DFBC76]/50" aria-hidden="true" />
                    </div>

                    {/* Resaltado del testimonio */}
                    <h3 className="font-display text-base font-black text-[#1D2E19] leading-snug mb-3 [text-wrap:balance]">
                      “{item.highlight}”
                    </h3>

                    {/* Comentario detallado */}
                    <p className="text-sm text-[#2D231E]/90 leading-relaxed mb-6">
                      {item.comment}
                    </p>
                  </div>

                  {/* Footer del testimonio con autor verificado */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#CFCABF]/40 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5E0001] text-[#FAF7F2] font-display font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                        {item.avatarInitials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-sm text-[#1D2E19]">
                            {item.name}
                          </span>
                          <FaCircleCheck className="w-3 h-3 text-[#1D2E19]" title="Lectora verificada" />
                        </div>
                        <span className="text-xs text-[#76584C] block">
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#76584C]/80 font-medium shrink-0">
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Botones de Navegación del Carrusel */}
          <div className="flex items-center justify-between mt-8">
            {/* Controles Izquierda / Derecha */}
            <div className="flex items-center gap-3 mx-auto">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Ver reseña anterior"
                className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#CFCABF] text-[#1D2E19] hover:bg-[#5E0001] hover:text-[#FAF7F2] hover:border-[#5E0001] flex items-center justify-center transition-all shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#5E0001]"
              >
                <FaChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Indicadores / Dots de Paginación */}
              <div className="flex items-center gap-2 px-2">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir a la reseña ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#5E0001]'
                        : 'w-2.5 bg-[#CFCABF] hover:bg-[#76584C]'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Ver siguiente reseña"
                className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#CFCABF] text-[#1D2E19] hover:bg-[#5E0001] hover:text-[#FAF7F2] hover:border-[#5E0001] flex items-center justify-center transition-all shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#5E0001]"
              >
                <FaChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Sutil de Confianza hacia la Oferta */}
        <div className="text-center pt-2">
          <p className="text-xs sm:text-sm text-[#76584C] mb-3">
            Únete a más de 2.400 personas que ya están organizando una celebración sin estrés.
          </p>
          <a
            href={siteConfig.pricing.checkoutUrl}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A60B08] hover:text-[#5E0001] underline underline-offset-4 decoration-[#DFBC76] hover:decoration-[#5E0001] transition-all cursor-pointer group"
          >
            <span>Quiero preparar mi Navidad con la guía de Paulina</span>
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
