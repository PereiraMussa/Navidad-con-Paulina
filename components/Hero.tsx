'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  FaWandMagicSparkles, 
  FaHeart, 
  FaCompass, 
  FaCircleCheck, 
  FaChevronDown, 
  FaArrowRight,
  FaShieldHalved,
  FaBolt,
  FaFireFlameCurved
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';
import { BookMockup3D } from './BookMockup3D';

export function Hero() {
  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('diagnostico');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const prob = document.getElementById('problema');
      if (prob) prob.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefitIcons = [FaWandMagicSparkles, FaCompass, FaHeart, FaCircleCheck];

  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F7F2E8] to-[#FAF7F2]">
      {/* Background illumination */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A60B08]/10 via-[#B58A45]/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Copy persuasivo con scroll y staggered entrance */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Etiqueta de Urgencia Sutil & Sello Editorial Sobre el Título */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5 mb-3.5"
            >
              {/* Etiqueta de Urgencia Sutil */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A60B08]/10 border border-[#A60B08]/30 text-[#A60B08] text-xs font-bold shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A60B08] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A60B08]"></span>
                </span>
                <FaFireFlameCurved className="w-3 h-3 text-[#A60B08]" aria-hidden="true" />
                <span className="font-display">Cupos limitados de lanzamiento</span>
              </div>

              <span className="text-[#CFCABF] hidden sm:inline" aria-hidden="true">·</span>

              {/* Sello Editorial */}
              <div className="inline-flex items-center gap-2">
                <span className="font-display text-xs md:text-sm font-black tracking-[0.2em] text-[#5E0001] uppercase py-0.5 border-b-2 border-[#B58A45]">
                  {siteConfig.product.editionBadge}
                </span>
                <span className="text-[#B58A45]" aria-hidden="true">·</span>
                <span className="text-xs font-semibold text-[#76584C]">
                  Por {siteConfig.product.author}
                </span>
              </div>
            </motion.div>

            {/* Título Principal con Fuente Nunito */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#1D2E19] leading-[1.14] mb-4 [text-wrap:balance]"
            >
              {siteConfig.hero.headline}
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#4A3D36] font-normal leading-relaxed mb-6 max-w-2xl"
            >
              {siteConfig.hero.subheadline}
            </motion.p>

            {/* Beneficios Rápidos con Iconos Font Awesome y Stagger */}
            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              aria-label="Beneficios principales"
            >
              {siteConfig.hero.quickBenefits.map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.06 }}
                    className="flex items-center gap-2.5 text-sm md:text-[15px] text-[#2D231E]"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#1D2E19]/10 text-[#1D2E19] flex items-center justify-center shrink-0">
                      <Icon className="w-3 h-3" aria-hidden="true" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* CTA Principal y Garantía de Acceso con Pulso Suave Constante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-3 w-full sm:w-auto"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                {/* Botón con animación de pulso suave y constante mediante Framer Motion */}
                <motion.a
                  href="#oferta"
                  onClick={scrollToOffer}
                  animate={{
                    scale: [1, 1.025, 1],
                    boxShadow: [
                      '0 10px 25px -5px rgba(166, 11, 8, 0.3), 0 8px 10px -6px rgba(166, 11, 8, 0.2)',
                      '0 20px 35px -5px rgba(166, 11, 8, 0.48), 0 10px 18px -4px rgba(166, 11, 8, 0.35)',
                      '0 10px 25px -5px rgba(166, 11, 8, 0.3), 0 8px 10px -6px rgba(166, 11, 8, 0.2)',
                    ],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ 
                    scale: 1.04,
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base md:text-lg font-bold text-[#FAF7F2] bg-[#A60B08] hover:bg-[#5E0001] rounded-xl transition-colors group focus-visible:outline-3 focus-visible:outline-[#A60B08] cursor-pointer"
                >
                  <span className="font-display font-bold">{siteConfig.hero.ctaButton}</span>
                  <FaArrowRight className="w-4 h-4 text-[#DFBC76] group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
                </motion.a>

                <div className="flex flex-col justify-center px-4 py-2.5 rounded-xl bg-[#FAF7F2] border-2 border-[#B58A45]/40 text-center sm:text-left shadow-xs">
                  <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                    <span className="text-[11px] text-[#76584C] font-bold">Precio anterior:</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#A60B08] text-[#FAF7F2] font-display text-[10px] font-black uppercase tracking-wider shadow-2xs">
                      -{siteConfig.pricing.discount} DTO
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                    <span className="line-through decoration-[#A60B08] decoration-2 text-base text-[#76584C] font-bold tabular-nums">
                      {siteConfig.pricing.previousPrice}
                    </span>
                    <span className="font-display font-black text-[#5E0001] text-xl tabular-nums">
                      {siteConfig.pricing.currentPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Microtexto debajo del botón con Font Awesome */}
              <div className="flex items-center gap-4 text-xs text-[#76584C] pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <FaBolt className="w-3 h-3 text-[#B58A45]" aria-hidden="true" />
                  Acceso digital inmediato
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <FaShieldHalved className="w-3 h-3 text-[#1D2E19]" aria-hidden="true" />
                  Lectura en celular y tablet
                </span>
              </div>
            </motion.div>

          </div>

          {/* Columna Derecha: Mockup 3D Oficial Real con Scroll Entrance Suave */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <BookMockup3D priority />
          </motion.div>

        </div>

        {/* Seta animada indicando más contenido abajo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-14 flex justify-center"
        >
          <button
            onClick={scrollToNext}
            aria-label="Desplazarse hacia la siguiente sección"
            className="flex flex-col items-center gap-1 text-xs font-semibold tracking-wider uppercase text-[#76584C] hover:text-[#5E0001] transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A60B08] rounded-md p-2"
          >
            <span className="font-display">Descubre la guía</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaChevronDown className="w-3.5 h-3.5 text-[#A60B08] group-hover:text-[#5E0001]" aria-hidden="true" />
            </motion.div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
