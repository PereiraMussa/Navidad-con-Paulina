'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FaCircleXmark, 
  FaCircleCheck, 
  FaWandMagicSparkles, 
  FaSliders,
  FaFire,
  FaMugHot
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  return (
    <section id="transformacion" className="py-16 md:py-24 bg-[#F5EFEB] border-t border-[#CFCABF]/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial con Scroll-Triggered Animation ao descer e subir */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <FaWandMagicSparkles className="w-3.5 h-3.5 text-[#B58A45]" aria-hidden="true" />
            <span className="font-display text-xs font-black tracking-[0.2em] text-[#5E0001] uppercase">
              EL CAMBIO VISUAL Y EMOCIONAL
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            {siteConfig.transformation.title}
          </h2>
          <p className="text-sm sm:text-base text-[#76584C]">
            {siteConfig.transformation.subtitle} Desliza el control para comparar.
          </p>

          {/* Toggle between Slider Mode and Side-by-Side Mode */}
          <div className="mt-5 inline-flex p-1 rounded-xl bg-[#FAF7F2] border border-[#CFCABF]/60 shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`font-display px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[#1D2E19] text-[#FAF7F2] shadow-xs'
                  : 'text-[#76584C] hover:text-[#1D2E19]'
              }`}
            >
              Control Deslizante Interactivo
            </button>
            <button
              type="button"
              onClick={() => setViewMode('side-by-side')}
              className={`font-display px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === 'side-by-side'
                  ? 'bg-[#1D2E19] text-[#FAF7F2] shadow-xs'
                  : 'text-[#76584C] hover:text-[#1D2E19]'
              }`}
            >
              Vista Detallada Lado a Lado
            </button>
          </div>
        </motion.div>

        {/* MODO 1: Interactive Slider Comparison con Scroll Reveal */}
        {viewMode === 'slider' && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#B58A45]/40 shadow-xl bg-[#FAF7F2]">
              
              {/* Range Slider Track */}
              <div className="p-4 bg-[#152412] text-[#FAF7F2] flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-[#FFA29F]">
                  <FaFire className="w-3.5 h-3.5 text-[#FFA29F]" aria-hidden="true" />
                  <span>Sin Plan (Estrés Habitual)</span>
                </span>
                
                <span className="font-display text-xs text-[#DFBC76] uppercase tracking-wider hidden sm:inline-block">
                  ◀ Arrastra hacia los lados ▶
                </span>

                <span className="flex items-center gap-1.5 text-[#DFBC76]">
                  <FaMugHot className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
                  <span>Con la Guía de Paulina</span>
                </span>
              </div>

              {/* Visual Split Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#CFCABF]/60">
                {/* Panel Antes */}
                <div className={`p-6 sm:p-8 transition-opacity duration-300 ${
                  sliderPosition < 30 ? 'bg-[#5E0001]/10' : ''
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xs font-black uppercase tracking-wider text-[#A60B08]">
                      El Caos Habitual
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#5E0001]/15 text-[#5E0001] flex items-center justify-center font-bold text-xs">
                      ✕
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#360001] mb-5">
                    Improvisar sin una guía
                  </h3>
                  <ul className="space-y-3.5">
                    {siteConfig.transformation.before.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        className="flex items-center gap-3 text-sm text-[#4A3D36]"
                      >
                        <FaCircleXmark className="w-4 h-4 text-[#A60B08] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Panel Después */}
                <div className={`p-6 sm:p-8 transition-opacity duration-300 ${
                  sliderPosition > 70 ? 'bg-[#1D2E19]/10' : ''
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-xs font-black uppercase tracking-wider text-[#1D2E19] flex items-center gap-1.5">
                      <FaWandMagicSparkles className="w-3 h-3 text-[#B58A45]" aria-hidden="true" />
                      La Celebración Soñada
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#1D2E19] text-[#FAF7F2] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1D2E19] mb-5">
                    Con el método de Paulina
                  </h3>
                  <ul className="space-y-3.5">
                    {siteConfig.transformation.after.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        className="flex items-center gap-3 text-sm text-[#1D2E19] font-medium"
                      >
                        <FaCircleCheck className="w-4 h-4 text-[#1D2E19] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive Range Input Bar */}
              <div className="p-4 bg-[#FAF7F2] border-t border-[#CFCABF]/40 flex flex-col sm:flex-row items-center gap-3">
                <FaSliders className="w-4 h-4 text-[#76584C] shrink-0 hidden sm:block" aria-hidden="true" />
                <span className="text-xs text-[#76584C] font-medium shrink-0">
                  Deslizar enfoque:
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  aria-label="Ajustar enfoque de comparación antes y después"
                  className="w-full accent-[#5E0001] cursor-pointer"
                />
                <span className="font-display text-xs font-bold text-[#1D2E19] shrink-0 tabular-nums">
                  {sliderPosition > 50 ? 'Enfocado en la Solución' : 'Enfocado en el Problema'}
                </span>
              </div>

            </div>
          </motion.div>
        )}

        {/* MODO 2: Side by Side Cards con Scroll Animation */}
        {viewMode === 'side-by-side' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-[#FAF7F2] border-2 border-dashed border-[#A60B08]/40 shadow-xs"
            >
              <span className="font-display text-xs font-black uppercase tracking-wider text-[#A60B08] block mb-2">
                Sin la guía
              </span>
              <h3 className="font-display text-xl font-bold text-[#360001] mb-6">
                El desgaste de improvisar
              </h3>
              <ul className="space-y-4">
                {siteConfig.transformation.before.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#4A3D36]">
                    <FaCircleXmark className="w-4 h-4 text-[#A60B08] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-[#FAF7F2] border-2 border-[#1D2E19]/40 shadow-md"
            >
              <span className="font-display text-xs font-black uppercase tracking-wider text-[#1D2E19] block mb-2">
                Con la guía
              </span>
              <h3 className="font-display text-xl font-bold text-[#1D2E19] mb-6">
                La experiencia organizada
              </h3>
              <ul className="space-y-4">
                {siteConfig.transformation.after.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#1D2E19] font-medium">
                    <FaCircleCheck className="w-4 h-4 text-[#1D2E19] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        {/* Cita de Cierre de la Transformación con Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#B58A45]/40 shadow-xs">
            <p className="font-display text-base sm:text-lg md:text-xl font-bold text-[#5E0001] leading-relaxed">
              {siteConfig.transformation.closingText}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
