'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { FaWandMagicSparkles, FaCircleCheck, FaChampagneGlasses } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function UpsellOffer() {
  const additional = siteConfig.additionalOffer;

  if (!additional.isAvailable) return null;

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2] border-t border-[#B58A45]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B58A45]/15 border border-[#B58A45]/40 text-[#5E0001] mb-2.5">
            <FaChampagneGlasses className="w-3.5 h-3.5 text-[#B58A45]" aria-hidden="true" />
            <span className="font-display text-xs font-black tracking-widest uppercase">
              COMPLEMENTO EXCLUSIVO DE FIN DE AÑO
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D2E19]">
            {additional.title}
          </h3>
          <p className="text-sm sm:text-base text-[#76584C] mt-2 max-w-2xl mx-auto font-medium">
            Una adición armoniosa para despedir la Nochevieja y recibir el Año Nuevo con serenidad, distinción y sin prisas.
          </p>
        </div>

        {/* Tarjeta de Oferta Adicional */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FAF7F2] border-2 border-[#B58A45]/40 shadow-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-10 relative overflow-hidden"
        >
          {/* Sutil resplandor de fondo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B58A45]/15 via-transparent to-transparent blur-2xl pointer-events-none" />

          {/* Foto del Kit Réveillon Inesquecível */}
          <div className="w-full lg:w-5/12 flex justify-center shrink-0">
            <div className="relative w-full max-w-[340px] aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#CFCABF]/60 bg-[#1D2E19]/5 group">
              <Image
                src={additional.image}
                alt="Kit Réveillon Inesquecível por Paulina Celebra"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 340px"
                priority
              />
              <span className="absolute top-3 left-3 bg-[#5E0001] text-[#FAF7F2] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                Año Nuevo 2026
              </span>
            </div>
          </div>

          {/* Información del Producto Adicional y Beneficios */}
          <div className="w-full lg:w-7/12 flex flex-col text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3 border-b border-[#CFCABF]/40 pb-4">
              <div>
                <span className="text-xs font-bold text-[#B58A45] uppercase tracking-wider font-display">
                  Por Paulina Celebra
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#1D2E19]">
                  {additional.name}
                </h4>
              </div>
              <div className="flex sm:flex-col items-baseline sm:items-end gap-1.5 sm:gap-0">
                <span className="text-[11px] text-[#76584C] font-semibold">Solo por:</span>
                <span className="font-display text-2xl sm:text-3xl font-black text-[#5E0001] tabular-nums whitespace-nowrap">
                  + US${additional.price}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A3D36] mb-5 leading-relaxed">
              {additional.description}
            </p>

            {/* Los 3 Beneficios Solicitados por el Usuario */}
            <div className="space-y-3 mb-6">
              {additional.benefitsList?.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5EFEB] border border-[#CFCABF]/50 shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1D2E19]/10 text-[#1D2E19] flex items-center justify-center shrink-0 mt-0.5">
                    <FaCircleCheck className="w-3.5 h-3.5 text-[#1D2E19]" aria-hidden="true" />
                  </div>
                  <div>
                    <h5 className="font-display text-xs sm:text-sm font-bold text-[#1D2E19] leading-snug">
                      {benefit.title}
                    </h5>
                    <p className="text-xs text-[#76584C] leading-relaxed mt-0.5">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#76584C] font-medium">
              <FaWandMagicSparkles className="w-3.5 h-3.5 text-[#B58A45]" aria-hidden="true" />
              <span>Disponible como opción complementaria en el checkout.</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
