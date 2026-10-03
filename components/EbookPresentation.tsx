'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  FaBookOpen, 
  FaCheck, 
  FaWandMagicSparkles, 
  FaLayerGroup, 
  FaCompass, 
  FaListOl, 
  FaMobileScreen 
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';
import { BookCover } from './BookCover';

export function EbookPresentation() {
  const markerIcons = [
    FaCheck,
    FaLayerGroup,
    FaWandMagicSparkles,
    FaCompass,
    FaListOl,
    FaMobileScreen,
  ];

  return (
    <section id="presentacion" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#CFCABF]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Capa Original do Ebook */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-[380px]">
              {/* Decorative subtle frame backdrop */}
              <div 
                className="absolute -inset-3 bg-[#5E0001]/10 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none"
                aria-hidden="true"
              />
              
              {/* Capa oficial intacta */}
              <BookCover showFraming={true} className="relative z-10" />

              {/* Tag editorial discreto */}
              <div className="mt-4 text-center">
                <span className="font-display text-xs font-bold tracking-wider text-[#76584C] uppercase">
                  Edición Digital Ilustrada
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Título, Texto y Marcadores Visuales */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <FaBookOpen className="w-3.5 h-3.5 text-[#B58A45]" aria-hidden="true" />
              <span className="font-display text-xs font-black tracking-[0.2em] text-[#5E0001] uppercase">
                EL MÉTODO COMPLETO
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-5 [text-wrap:balance]">
              {siteConfig.presentation.title}
            </h2>

            <p className="text-base sm:text-lg text-[#4A3D36] leading-relaxed mb-8">
              {siteConfig.presentation.description}
            </p>

            {/* Marcadores Visuais en Cuadrícula de 2 Columnas con Font Awesome */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {siteConfig.presentation.markers.map((marker, index) => {
                const IconComponent = markerIcons[index % markerIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F5EFEB]/70 border border-[#CFCABF]/40 hover:border-[#B58A45]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1D2E19] text-[#FAF7F2] flex items-center justify-center shrink-0">
                      <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <span className="font-display text-sm font-bold text-[#1D2E19]">
                      {marker}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Cita de Aliento */}
            <div className="p-4 rounded-xl border-l-4 border-[#B58A45] bg-[#FAF7F2] text-sm text-[#76584C] italic">
              &ldquo;No hace falta transformar toda la casa, solo elegir los detalles adecuados y disfrutarlos con presencia.&rdquo;
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
