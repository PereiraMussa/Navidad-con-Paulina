'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FaCompass, 
  FaBagShopping, 
  FaWallet, 
  FaClock, 
  FaUtensils, 
  FaHeartCrack,
  FaCircleCheck
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function ProblemSection() {
  const [selectedIssue, setSelectedIssue] = useState<number>(0);

  const iconMap = [
    FaCompass,
    FaBagShopping,
    FaWallet,
    FaClock,
    FaUtensils,
    FaHeartCrack,
  ];

  const chapterSolutions = [
    'Capítulo 1: Define un orden claro de prioridades para que nunca te sientas paralizada.',
    'Capítulo 2: Te enseña a combinar solo 3 tonos nobles para que todo se vea armónico.',
    'Capítulo 3: Te muestra cómo reutilizar elementos que ya tienes sin gastar de más.',
    'Capítulo 1 y 7: Un cronograma de 4 semanas para que la víspera descanses con un té caliente.',
    'Capítulo 4: Diagrama de montaje de mesa con alturas y textiles que invitan a conversar.',
    'Capítulo 6: Pequeños rituales y tarjetas afectivas que llenan de significado la noche.',
  ];

  return (
    <section id="problema" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#CFCABF]/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Scroll Animation Suave ao descer e subir */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="font-display text-xs font-black tracking-[0.2em] text-[#A60B08] uppercase mb-2 block">
            LA REALIDAD DE MUCHOS HOGARES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            {siteConfig.problem.title}
          </h2>
          <p className="text-sm sm:text-base text-[#76584C]">
            ¿Te identificas con alguna de estas situaciones comunes? Toca cada punto para ver la solución que propone la guía.
          </p>
        </motion.div>

        {/* Grilla Interactiva con Staggered ScrollTrigger ao descer e subir */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {siteConfig.problem.situations.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            const isSelected = selectedIssue === idx;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.06, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                onClick={() => setSelectedIssue(idx)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl border transition-colors cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F5EFEB] border-[#5E0001] shadow-md ring-1 ring-[#5E0001]/30'
                    : 'bg-[#FAF7F2] border-[#CFCABF]/60 hover:border-[#5E0001]/40 hover:bg-[#F5EFEB]/40'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIssue(idx);
                  }
                }}
                aria-pressed={isSelected}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#5E0001] text-white' : 'bg-[#5E0001]/10 text-[#5E0001]'
                    }`}>
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#5E0001]/10 text-[#5E0001]' : 'text-[#76584C]'
                    }`}>
                      Situación {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-[#1D2E19] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3D36] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className={`pt-3 border-t text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isSelected ? 'border-[#5E0001]/20 text-[#5E0001]' : 'border-[#CFCABF]/30 text-[#76584C]'
                }`}>
                  <FaCircleCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{isSelected ? 'Solución visible abajo' : 'Ver solución de la guía'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solución Específica Dinámica con Scroll y Transición Suave */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIssue}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#1D2E19] text-[#FAF7F2] border border-[#B58A45]/40 shadow-md mb-12 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2]/10 text-[#DFBC76] flex items-center justify-center shrink-0">
              <FaCircleCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <span className="font-display text-[11px] font-black uppercase tracking-wider text-[#DFBC76] block mb-0.5">
                Cómo lo resuelve Paulina en el ebook:
              </span>
              <p className="text-sm font-medium text-[#FAF7F2] leading-snug">
                {chapterSolutions[selectedIssue]}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mensaje de Cierre / Reflexión con Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-[#5E0001] via-[#7A0002] to-[#360001] text-[#FAF7F2] text-center shadow-xl border border-[#B58A45]/40"
        >
          <p className="font-display text-lg sm:text-xl md:text-2xl font-black leading-relaxed text-[#FAF7F2]">
            {siteConfig.problem.closingQuote}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
