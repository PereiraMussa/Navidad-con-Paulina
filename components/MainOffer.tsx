'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  FaCircleCheck, 
  FaLock, 
  FaArrowRight, 
  FaCloudArrowDown, 
  FaMobileScreen, 
  FaWandMagicSparkles 
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';
import { BookMockup3D } from './BookMockup3D';

export function MainOffer() {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE2] to-[#FAF7F2] border-t border-[#CFCABF]/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="font-display text-xs font-black tracking-[0.2em] text-[#A60B08] uppercase mb-2 block">
            ACCESO INMEDIATO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            {siteConfig.offer.title}
          </h2>
          <p className="text-sm sm:text-base text-[#76584C]">
            Todo lo necesario para organizar una celebración llena de calidez y encanto en un solo lugar.
          </p>
        </motion.div>

        {/* Tarjeta Principal de la Oferta con Scroll Reveal Suave */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#FAF7F2] border-2 border-[#B58A45]/50 shadow-2xl overflow-hidden"
        >
          {/* Barra superior de la tarjeta con descuento */}
          <div className="bg-[#5E0001] py-3 px-6 text-[#FAF7F2] flex items-center justify-between flex-wrap gap-2 text-xs md:text-sm font-semibold border-b border-[#B58A45]/40">
            <div className="flex items-center gap-2">
              <FaWandMagicSparkles className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
              <span className="font-display font-bold">OFERTA ESPECIAL DE NAVIDAD</span>
            </div>
            <div className="font-display bg-[#A60B08] px-3 py-0.5 rounded-full text-xs font-black text-white uppercase tracking-wider">
              {siteConfig.pricing.discount} DE DESCUENTO
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Mockup 3D Oficial Real */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-[320px]">
                <BookMockup3D />
              </div>
              <span className="text-[11px] font-semibold text-[#76584C] mt-2 text-center block">
                Formato digital adaptable a móvil, tablet y PC
              </span>
            </div>

            {/* Columna Derecha: Detalles del Producto, Precios y CTA */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#1D2E19] mb-1">
                {siteConfig.product.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#76584C] font-medium mb-6">
                {siteConfig.product.subtitle} · Por {siteConfig.product.author}
              </p>

              {/* Lista Resumida de Beneficios */}
              <ul className="space-y-2.5 mb-8" aria-label="Lo que incluye tu guía">
                {siteConfig.offer.highlights.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D231E]"
                  >
                    <FaCircleCheck className="w-3.5 h-3.5 text-[#1D2E19] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Caja de Precios con $15 Riscado e 75% Desconto */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5EFEB] border-2 border-[#B58A45]/40 mb-6 flex items-center justify-between flex-wrap gap-4 shadow-xs">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-[#76584C] font-semibold">
                      Precio regular anterior:
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#A60B08] text-[#FAF7F2] font-display text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-2xs">
                      -{siteConfig.pricing.discount} DESCUENTO
                    </span>
                  </div>
                  <span className="text-xl sm:text-2xl text-[#76584C] line-through decoration-[#A60B08] decoration-2 font-bold tabular-nums">
                    {siteConfig.pricing.previousPrice}
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-display text-xs text-[#5E0001] font-black block uppercase tracking-wider">
                    Precio exclusivo hoy:
                  </span>
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#5E0001] tabular-nums">
                    {siteConfig.pricing.currentPrice}
                  </span>
                </div>
              </div>

              {/* Botón Principal de Compra */}
              <a
                href={siteConfig.pricing.checkoutUrl}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 text-base sm:text-lg font-bold text-[#FAF7F2] bg-[#A60B08] hover:bg-[#5E0001] active:scale-[0.98] rounded-xl shadow-lg hover:shadow-xl transition-all group focus-visible:outline-3 focus-visible:outline-[#A60B08] cursor-pointer"
              >
                <span className="font-display font-bold">{siteConfig.offer.cta}</span>
                <FaArrowRight className="w-4 h-4 text-[#DFBC76] group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
              </a>

              {/* Microtexto debajo del botón con Font Awesome */}
              <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-[#76584C]">
                <FaLock className="w-3 h-3 text-[#1D2E19]" aria-hidden="true" />
                <span>{siteConfig.offer.microtext}</span>
              </div>

              {/* Distintivos de Seguridad y Entrega Digital */}
              <div className="mt-6 pt-5 border-t border-[#CFCABF]/40 grid grid-cols-2 gap-3 text-center text-xs text-[#76584C]">
                <div className="flex items-center justify-center gap-1.5">
                  <FaCloudArrowDown className="w-3.5 h-3.5 text-[#1D2E19]" aria-hidden="true" />
                  <span>Descarga Inmediata</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <FaMobileScreen className="w-3.5 h-3.5 text-[#1D2E19]" aria-hidden="true" />
                  <span>Apto para todo dispositivo</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
