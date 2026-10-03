'use client';

import React from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';
import { BookMockup3D } from './BookMockup3D';

export function FinalCta() {
  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF7F2] via-[#2D0001] to-[#150000] text-[#FAF7F2] relative overflow-hidden">
      {/* Discreet Pine & Festive ambient glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#A60B08]/20 via-[#1D2E19]/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mockup 3D oficial en el cierre */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[340px]">
              <BookMockup3D />
            </div>
          </div>

          {/* Copy Emocional de Cierre */}
          <div className="lg:col-span-7 flex flex-col text-left order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 mb-4">
              <FaHeart className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
              <span className="font-display text-xs font-black tracking-[0.25em] text-[#CFCABF] uppercase">
                EL VERDADERO SENTIDO DE CELEBRAR
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[#FAF7F2] leading-tight mb-5 [text-wrap:balance]">
              {siteConfig.finalCta.title}
            </h2>

            <p className="text-base sm:text-lg text-[#CFCABF] leading-relaxed mb-8 max-w-xl">
              {siteConfig.finalCta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={siteConfig.pricing.checkoutUrl}
                className="inline-flex items-center justify-center gap-3 px-8 py-4.5 text-base sm:text-lg font-bold text-[#FAF7F2] bg-[#A60B08] hover:bg-[#8C0705] active:scale-[0.98] rounded-xl shadow-xl hover:shadow-2xl transition-all group border border-[#B58A45]/40 focus-visible:outline-3 focus-visible:outline-[#DFBC76] cursor-pointer"
              >
                <span className="font-display font-bold">{siteConfig.finalCta.buttonText}</span>
                <FaArrowRight className="w-4 h-4 text-[#DFBC76] group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
              </a>

              <span className="text-xs sm:text-sm text-[#CFCABF]/90 font-medium">
                Acceso digital inmediato por solo {siteConfig.pricing.currentPrice}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
