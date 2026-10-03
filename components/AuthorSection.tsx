'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FaHeart, FaWandMagicSparkles, FaCircleCheck } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';
import { ImageWithFallback } from './ImageWithFallback';

export function AuthorSection() {
  return (
    <section id="autora" className="py-16 md:py-24 bg-[#F5EFEB] border-t border-[#CFCABF]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Retrato de Paulina Celebra */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] ring-1 ring-[#CFCABF]/80 group"
            >
              <ImageWithFallback
                src={siteConfig.images.authorPhoto}
                fallbackSrc="/images/paulina-celebra.jpg"
                alt="Retrato fotográfico oficial de Paulina Celebra, autora de La Navidad que Todos Recordarán"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                containerClassName="w-full h-full"
              />

              {/* Sello editorial auténtico */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 rounded-b-xl text-left">
                <span className="text-white font-display text-lg font-black block leading-tight">
                  Paulina Celebra
                </span>
                <span className="text-[#DFBC76] text-xs font-semibold tracking-wide">
                  Anfitriona &amp; Creadora de la Guía
                </span>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: Biografía e Intención de la Autora */}
          <div className="md:col-span-7 flex flex-col text-left">
            
            <div className="inline-flex items-center gap-2 mb-2">
              <FaHeart className="w-3.5 h-3.5 text-[#A60B08]" aria-hidden="true" />
              <span className="font-display text-xs font-black tracking-[0.2em] text-[#5E0001] uppercase">
                DETRÁS DE LA GUÍA
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-5 [text-wrap:balance]">
              {siteConfig.author.title}
            </h2>

            <div className="space-y-4 text-base text-[#4A3D36] leading-relaxed mb-6">
              <p>
                {siteConfig.author.bioParagraph1}
              </p>
              <p>
                {siteConfig.author.bioParagraph2}
              </p>
            </div>

            {/* Puntos de Confianza Directos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1D2E19]">
                <FaCircleCheck className="w-3.5 h-3.5 text-[#B58A45] shrink-0" aria-hidden="true" />
                <span>Ideas probadas en hogares reales</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1D2E19]">
                <FaCircleCheck className="w-3.5 h-3.5 text-[#B58A45] shrink-0" aria-hidden="true" />
                <span>Sin gastos excesivos ni adornos que sobran</span>
              </div>
            </div>

            {/* Cita personal con firma elegante */}
            <div className="pt-4 border-t border-[#CFCABF]/50 flex items-center justify-between">
              <div>
                <span className="block font-accent text-3xl text-[#5E0001]">
                  Paulina Celebra
                </span>
                <span className="text-xs text-[#76584C] font-medium">
                  Creando memorias alrededor de la mesa
                </span>
              </div>
              <FaWandMagicSparkles className="w-5 h-5 text-[#B58A45] opacity-80" aria-hidden="true" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
