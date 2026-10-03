'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FaLock, FaCloudArrowDown, FaWandMagicSparkles, FaArrowRight } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function PurchaseRoadmap() {
  const steps = [
    {
      number: '01',
      icon: FaLock,
      title: 'Pago Rápido y 100% Seguro',
      description: 'Accedes a través de la pasarela cifrada de confianza con tarjeta o tu medio preferido.',
    },
    {
      number: '02',
      icon: FaCloudArrowDown,
      title: 'Descarga Digital Inmediata',
      description: 'Recibes el acceso al instante en tu correo para abrirlo de inmediato en tu celular, tablet o PC.',
    },
    {
      number: '03',
      icon: FaWandMagicSparkles,
      title: 'Tu Navidad Inolvidable',
      description: 'Sigues el cronograma a tu propio ritmo y disfrutas una celebración que tu familia aplaudirá.',
    },
  ];

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 md:py-20 bg-[#FAF7F2] border-t border-[#CFCABF]/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con Fuente Nunito */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-display text-xs font-black tracking-[0.2em] text-[#5E0001] uppercase mb-2 block">
            EL CAMINO ES MUY SENCILLO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1D2E19] leading-tight mb-3">
            Cómo empezar hoy mismo en 3 pasos
          </h2>
          <p className="text-sm text-[#76584C]">
            Sin trámites complicados. Obtén el material en minutos y comienza a inspirarte.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#F5EFEB]/70 border border-[#CFCABF]/60 flex flex-col justify-between relative group hover:border-[#5E0001]/40 hover:bg-[#FAF7F2] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-black text-[#5E0001] tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#5E0001]/10 text-[#5E0001] flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#1D2E19] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3D36] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guided CTA Button */}
        <div className="text-center">
          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#FAF7F2] bg-[#A60B08] hover:bg-[#5E0001] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A60B08]"
          >
            <span className="font-display">Quiero dar el paso 01 por {siteConfig.pricing.currentPrice}</span>
            <FaArrowRight className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
