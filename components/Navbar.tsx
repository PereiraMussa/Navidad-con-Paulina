'use client';

import React, { useSyncExternalStore } from 'react';
import { 
  FaBagShopping, 
  FaArrowRight, 
  FaClock, 
  FaFire 
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

const TEN_MINUTES_IN_SECONDS = 10 * 60; // 600 segundos
const STORAGE_KEY = 'paulina_countdown_timer_10m';

let cachedTargetTimestamp: number | null = null;

function getTargetTimestamp(): number {
  if (typeof window === 'undefined') {
    return Date.now() + TEN_MINUTES_IN_SECONDS * 1000;
  }
  if (cachedTargetTimestamp !== null) {
    return cachedTargetTimestamp;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed)) {
        cachedTargetTimestamp = parsed;
        return cachedTargetTimestamp;
      }
    }
    cachedTargetTimestamp = now + TEN_MINUTES_IN_SECONDS * 1000;
    localStorage.setItem(STORAGE_KEY, cachedTargetTimestamp.toString());
    return cachedTargetTimestamp;
  } catch {
    cachedTargetTimestamp = Date.now() + TEN_MINUTES_IN_SECONDS * 1000;
    return cachedTargetTimestamp;
  }
}

function getSnapshotRemainingSeconds(): number {
  if (typeof window === 'undefined') {
    return TEN_MINUTES_IN_SECONDS;
  }
  const target = getTargetTimestamp();
  const now = Date.now();
  // Al llegar a 0 se detiene permanentemente en 00:00 y no se reinicia
  const remaining = Math.max(0, Math.floor((target - now) / 1000));
  return remaining;
}

function subscribeToTimer(onStoreChange: () => void) {
  const timer = setInterval(onStoreChange, 1000);
  return () => clearInterval(timer);
}

export function Navbar() {
  const timeLeft = useSyncExternalStore(
    subscribeToTimer,
    getSnapshotRemainingSeconds,
    () => TEN_MINUTES_IN_SECONDS
  );

  const isExpired = timeLeft <= 0;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const displayTimer = `${formattedMinutes}:${formattedSeconds}`;

  const scrollToOffer = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Barra de Navegación 100% FIJA al Top */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-[#FAF7F2]/95 border-b border-[#CFCABF]/40 shadow-sm transition-all">
        
        {/* 1. Barra Superior con Timer que para en 00:00 y pulsa */}
        <aside 
          aria-label="Anuncio especial con cuenta regresiva"
          onClick={() => scrollToOffer()}
          className="w-full bg-[#5E0001] text-[#FAF7F2] py-2 px-3 sm:px-4 text-center text-xs md:text-sm font-medium tracking-wide flex items-center justify-center gap-2 sm:gap-3 border-b border-[#B58A45]/30 cursor-pointer hover:bg-[#720203] transition-colors"
        >
          <div className="flex items-center gap-1.5 text-[#DFBC76]">
            <FaFire className="w-3.5 h-3.5 text-[#DFBC76] animate-pulse" aria-hidden="true" />
            <span className="font-display font-black text-[11px] sm:text-xs uppercase tracking-wider hidden xs:inline">
              OFERTA DE LANZAMIENTO
            </span>
          </div>

          <span className="text-[#FAF7F2]/90 text-[11px] sm:text-xs">
            {isExpired ? '¡Últimos cupos disponibles con descuento!' : 'El 67% de descuento termina en:'}
          </span>

          {/* Caja destacada del Timer: al terminar en 00:00 comienza a pulsar */}
          <div 
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono font-black text-xs sm:text-sm shadow-xs border transition-all ${
              isExpired 
                ? 'bg-[#FAF7F2] text-[#A60B08] border-[#FAF7F2] animate-pulse ring-2 ring-[#DFBC76]' 
                : 'bg-[#FAF7F2] text-[#5E0001] border-[#DFBC76]'
            }`}
          >
            <FaClock 
              className={`w-3 h-3 text-[#A60B08] ${isExpired ? 'animate-bounce' : 'animate-spin'}`} 
              style={!isExpired ? { animationDuration: '6s' } : undefined} 
              aria-hidden="true" 
            />
            <span className="tabular-nums tracking-widest">{displayTimer}</span>
          </div>

          <span className={`hidden md:inline font-bold text-xs underline underline-offset-2 ${
            isExpired ? 'text-[#FAF7F2] animate-pulse' : 'text-[#DFBC76]'
          }`}>
            {isExpired ? '¡Asegurar precio especial ahora!' : '¡Asegurar antes que expire!'}
          </span>
        </aside>

        {/* 2. Top Bar Principal con Marca y Botón de Compra */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Zona 1: Brand Wordmark */}
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-black tracking-tight text-[#1D2E19] hover:text-[#5E0001] transition-colors focus-visible:outline-2 focus-visible:outline-[#A60B08] rounded-sm shrink-0"
          >
            {siteConfig.product.author}
          </a>

          {/* Zona 2: Botón de Compra Fijo en el Menú */}
          <div className="flex items-center gap-3">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#FAF7F2] bg-[#A60B08] hover:bg-[#5E0001] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A60B08] cursor-pointer group"
            >
              <FaBagShopping className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
              <span>Comprar Guía · {siteConfig.pricing.currentPrice}</span>
              <FaArrowRight className="w-3 h-3 text-[#DFBC76] group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </a>
          </div>

        </div>
      </header>

      {/* Espaciador del menú fijo para evitar que tape el contenido de la página */}
      <div className="h-[96px] sm:h-[102px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}
