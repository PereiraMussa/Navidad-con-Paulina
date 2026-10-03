'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#B58A45]/40 shadow-2xl px-4 py-2.5 flex items-center justify-between gap-3 h-14"
          role="region"
          aria-label="Acción fija de compra rápida"
        >
          <div className="flex flex-col min-w-0">
            <span className="font-display text-[11px] font-bold text-[#1D2E19] truncate">
              {siteConfig.product.title}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#76584C]">
              <span className="line-through text-[10px] text-[#76584C]/80">
                {siteConfig.pricing.previousPrice}
              </span>
              <span className="font-display font-black text-[#5E0001] tabular-nums">
                {siteConfig.pricing.currentPrice}
              </span>
              <span className="text-[10px] bg-[#A60B08]/10 text-[#A60B08] px-1 rounded font-bold font-display">
                -{siteConfig.pricing.discount}
              </span>
            </div>
          </div>

          <a
            href="#oferta"
            onClick={scrollToOffer}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#FAF7F2] bg-[#A60B08] active:bg-[#5E0001] rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
          >
            <span className="font-display">Comprar</span>
            <FaArrowRight className="w-3 h-3 text-[#DFBC76]" aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
