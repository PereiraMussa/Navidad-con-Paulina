'use client';

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';
import { FaArrowUp, FaBagShopping } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function ScrollTriggerProvider({ children }: { children: React.ReactNode }) {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [showScrollTriggerBadge, setShowScrollTriggerBadge] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Configurar ScrollTrigger bidirecional (ao descer e subir)
    const sections = document.querySelectorAll<HTMLElement>('section[id], section');

    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play reverse play reverse', // Reage ao descer E subir a página
        onEnter: () => section.classList.add('scroll-triggered-in'),
        onLeaveBack: () => section.classList.remove('scroll-triggered-in'),
      });
      triggers.push(st);
    });

    // Monitorar direção do scroll e porcentagem
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        setScrollPercent(Math.round((currentScrollY / totalHeight) * 100));
      }

      if (currentScrollY > 300) {
        setShowScrollTriggerBadge(true);
      } else {
        setShowScrollTriggerBadge(false);
      }

      if (currentScrollY > lastScrollY + 4) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY - 4) {
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      triggers.forEach((st) => st.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('oferta');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {children}

      {/* Floating ScrollTrigger Direction & Quick Actions Badge (Ao descer e subir) */}
      <AnimatePresence>
        {showScrollTriggerBadge && (
          <motion.aside
            aria-label="Controle de navegação rápida"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2"
          >
            {/* Botão de Retorno ao Topo com Indicador de ScrollTrigger */}
            <div className="flex items-center gap-2">
              {scrollDirection === 'up' && (
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={scrollToTop}
                  aria-label="Subir ao topo da página"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1D2E19]/90 backdrop-blur-md text-[#FAF7F2] text-xs font-semibold shadow-lg hover:bg-[#1D2E19] border border-[#B58A45]/30 cursor-pointer transition-colors"
                >
                  <FaArrowUp className="w-3 h-3 text-[#DFBC76]" aria-hidden="true" />
                  <span>Subir ao topo</span>
                </motion.button>
              )}

              {/* Botão de Compra Flutuante no Desktop quando estiver descendo ou subindo */}
              <a
                href="#oferta"
                onClick={scrollToOffer}
                aria-label="Comprar Guía de Navidad"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#A60B08] hover:bg-[#5E0001] text-[#FAF7F2] text-xs font-bold shadow-xl border border-[#DFBC76]/40 cursor-pointer active:scale-95 transition-all"
              >
                <FaBagShopping className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
                <span>Comprar Guía · {siteConfig.pricing.currentPrice}</span>
              </a>

              {/* Indicador de progresso circular ScrollTrigger */}
              <button
                onClick={scrollToTop}
                aria-label={`Volver arriba (${scrollPercent}%)`}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#CFCABF] text-[#1D2E19] shadow-lg flex items-center justify-center hover:bg-[#FAF7F2] hover:border-[#5E0001] transition-all cursor-pointer relative group"
              >
                <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-[#CFCABF]/40"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#A60B08] transition-all duration-150"
                    strokeDasharray={`${scrollPercent}, 100`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <FaArrowUp 
                  className={`w-3.5 h-3.5 absolute text-[#5E0001] group-hover:-translate-y-0.5 transition-transform ${
                    scrollDirection === 'down' ? 'opacity-70' : 'opacity-100 scale-110 text-[#A60B08]'
                  }`} 
                  aria-hidden="true" 
                />
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
