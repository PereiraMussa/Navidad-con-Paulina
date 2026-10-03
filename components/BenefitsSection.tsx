'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  FaHourglassHalf, 
  FaCartShopping, 
  FaPalette, 
  FaFaceSmileBeam, 
  FaHouseChimney, 
  FaUsers, 
  FaWandMagicSparkles 
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function BenefitsSection() {
  const benefitConfig = [
    {
      icon: FaHourglassHalf,
      badge: 'Eficiencia',
    },
    {
      icon: FaCartShopping,
      badge: 'Ahorro Real',
    },
    {
      icon: FaPalette,
      badge: 'Estilo & Buen Gusto',
    },
    {
      icon: FaFaceSmileBeam,
      badge: 'Cero Ansiedad',
    },
    {
      icon: FaHouseChimney,
      badge: 'Tu Hogar Cálido',
    },
    {
      icon: FaUsers,
      badge: 'Vínculo Familiar',
    },
    {
      icon: FaWandMagicSparkles,
      badge: 'Recuerdos Inolvidables',
    },
  ];

  return (
    <section id="detalles" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#CFCABF]/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Fuente Nunito */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A60B08]/10 text-[#A60B08] text-xs font-bold uppercase tracking-wider mb-2.5">
            <FaWandMagicSparkles className="w-3 h-3 text-[#B58A45]" aria-hidden="true" />
            <span className="font-display">Resultados Reales</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            {siteConfig.benefits.title}
          </h2>
          <p className="text-sm sm:text-base text-[#76584C]">
            {siteConfig.benefits.subtitle}
          </p>
        </motion.div>

        {/* Cuadrícula Asimétrica con Iconos Modernos Vectoriales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.benefits.items.map((item, idx) => {
            const config = benefitConfig[idx % benefitConfig.length];
            const Icon = config.icon;
            const isFeatured = idx === 6;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl border transition-all relative group flex flex-col justify-between ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#1D2E19] via-[#172714] to-[#142111] text-[#FAF7F2] border-[#B58A45]/40 shadow-xl'
                    : 'bg-[#FAF7F2] border-[#CFCABF]/60 hover:border-[#5E0001]/40 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Contenedor del Icono Vectorial */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isFeatured 
                        ? 'bg-[#FAF7F2]/10 text-[#DFBC76] border border-[#DFBC76]/30 shadow-inner' 
                        : 'bg-[#5E0001]/10 text-[#5E0001] border border-[#5E0001]/20 group-hover:bg-[#5E0001] group-hover:text-[#FAF7F2]'
                    }`}>
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>

                    <span className={`font-display text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isFeatured 
                        ? 'bg-[#DFBC76]/20 text-[#DFBC76] border border-[#DFBC76]/30' 
                        : 'bg-[#F5EFEB] text-[#76584C] border border-[#CFCABF]/50'
                    }`}>
                      {config.badge}
                    </span>
                  </div>

                  <h3 className={`font-display text-base md:text-lg font-bold mb-2 leading-snug ${
                    isFeatured ? 'text-[#FAF7F2]' : 'text-[#1D2E19]'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${
                    isFeatured ? 'text-[#CFCABF]' : 'text-[#76584C]'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
