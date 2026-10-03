'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FaCheck, FaWandMagicSparkles } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function AudienceSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#CFCABF]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Fuente Nunito */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-display text-xs font-black tracking-[0.2em] text-[#A60B08] uppercase mb-2 block">
            CLARIDAD Y AFINIDAD
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            {siteConfig.audience.title}
          </h2>
          <div className="w-12 h-1 bg-[#B58A45] mx-auto rounded-full" aria-hidden="true" />
        </div>

        {/* Lista de Puntos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {siteConfig.audience.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#F5EFEB]/60 border border-[#CFCABF]/50"
            >
              <div className="w-6 h-6 rounded-full bg-[#1D2E19] text-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                <FaCheck className="w-3 h-3" aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-[15px] font-medium text-[#2D231E]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mensaje Reafirmante */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF7F2] via-[#F6F0E6] to-[#FAF7F2] border-2 border-[#B58A45]/40 text-center shadow-xs"
        >
          <div className="inline-flex items-center gap-1.5 text-[#5E0001] mb-2">
            <FaWandMagicSparkles className="w-3.5 h-3.5 text-[#B58A45]" aria-hidden="true" />
            <span className="font-display text-xs font-black uppercase tracking-wider">Cero Complicaciones</span>
          </div>
          <p className="font-display text-base sm:text-lg font-bold text-[#1D2E19] leading-relaxed max-w-2xl mx-auto">
            {siteConfig.audience.reassurance}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
