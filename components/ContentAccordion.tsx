'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaChevronDown, FaWandMagicSparkles } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function ContentAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="contenido" className="py-16 md:py-24 bg-[#F5EFEB] border-t border-[#CFCABF]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Fuente Nunito */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-display text-xs font-black tracking-[0.2em] text-[#5E0001] uppercase mb-2 block">
            ESTRUCTURA DEL CONTENIDO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            Los 7 Pilares de tu Celebración
          </h2>
          <p className="text-sm sm:text-base text-[#76584C]">
            Una secuencia diseñada para guiarte paso a paso, desde la primera idea hasta la sobremesa familiar.
          </p>
        </div>

        {/* Acordeón Interactivo */}
        <div className="space-y-3.5" role="region" aria-label="Capítulos de la guía">
          {siteConfig.chapters.map((chapter, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF7F2] border-[#B58A45] shadow-md ring-1 ring-[#B58A45]/30'
                    : 'bg-[#FAF7F2]/80 border-[#CFCABF]/60 hover:border-[#A60B08]/40 hover:bg-[#FAF7F2]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`chapter-content-${index}`}
                  id={`chapter-header-${index}`}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A60B08]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Número Editorial con Nunito */}
                    <span className="font-display text-lg sm:text-xl font-black text-[#5E0001] tabular-nums shrink-0">
                      {chapter.number}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#1D2E19] truncate sm:whitespace-normal">
                        {chapter.title}
                      </h3>
                      <span className="text-xs text-[#76584C] font-medium hidden sm:inline-block">
                        Enfoque: {chapter.focus}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`font-display text-xs font-bold px-2.5 py-1 rounded-md hidden md:inline-block ${
                      isOpen ? 'bg-[#1D2E19] text-[#FAF7F2]' : 'bg-[#EFE9DF] text-[#76584C]'
                    }`}>
                      {isOpen ? 'Abierto' : 'Ver detalle'}
                    </span>
                    <FaChevronDown
                      className={`w-3.5 h-3.5 text-[#5E0001] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {/* Contenido Expandible */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`chapter-content-${index}`}
                      role="region"
                      aria-labelledby={`chapter-header-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#CFCABF]/30 text-sm text-[#4A3D36] leading-relaxed">
                        <p className="mb-3">{chapter.summary}</p>
                        <div className="flex items-center gap-2 text-xs text-[#5E0001] font-semibold">
                          <FaWandMagicSparkles className="w-3 h-3 text-[#B58A45]" aria-hidden="true" />
                          <span>Orientaciones visuales y pasos prácticos incluidos en este tema.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Indicador de continuidad */}
        <div className="mt-8 text-center text-xs text-[#76584C]">
          <span>Estructurado para una lectura ágil de aplicación directa sin tecnicismos complejos.</span>
        </div>

      </div>
    </section>
  );
}
