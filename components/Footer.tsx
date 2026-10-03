'use client';

import React, { useState } from 'react';
import { FaShieldHalved, FaLock, FaEnvelope, FaHeart } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';
import { LegalModal } from './LegalModal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  return (
    <footer className="bg-[#152412] text-[#CFCABF] py-14 px-4 sm:px-6 lg:px-8 border-t border-[#B58A45]/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Name & Tagline */}
        <h3 className="font-display text-2xl font-black text-[#FAF7F2] mb-2 tracking-tight">
          {siteConfig.footer.copyrightOwner}
        </h3>
        
        <p className="text-xs text-[#CFCABF]/80 max-w-lg mb-6 leading-relaxed">
          {siteConfig.footer.digitalProductNotice}
        </p>

        {/* Trust Badges with Vector Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#DFBC76] mb-8 py-3 px-6 rounded-full bg-white/5 border border-white/10">
          <div className="flex items-center gap-1.5 font-medium">
            <FaShieldHalved className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
            <span>Compra 100% Segura</span>
          </div>
          <span className="text-white/20" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5 font-medium">
            <FaLock className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
            <span>Encriptación SSL 256-bit</span>
          </div>
          <span className="text-white/20" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5 font-medium">
            <FaHeart className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
            <span>Atención con Cariño</span>
          </div>
        </div>

        {/* Legal Links (Functional Modals) */}
        <nav 
          aria-label="Enlaces legales y de contacto"
          className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-[#DFBC76] mb-8"
        >
          <button
            onClick={() => setModalType('terms')}
            className="hover:text-[#FAF7F2] transition-colors hover:underline underline-offset-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#DFBC76] rounded-xs"
          >
            Términos y Condiciones
          </button>
          <span className="text-[#CFCABF]/40" aria-hidden="true">·</span>
          <button
            onClick={() => setModalType('privacy')}
            className="hover:text-[#FAF7F2] transition-colors hover:underline underline-offset-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#DFBC76] rounded-xs"
          >
            Política de Privacidad
          </button>
          <span className="text-[#CFCABF]/40" aria-hidden="true">·</span>
          <button
            onClick={() => setModalType('contact')}
            className="inline-flex items-center gap-1.5 hover:text-[#FAF7F2] transition-colors hover:underline underline-offset-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#DFBC76] rounded-xs"
          >
            <FaEnvelope className="w-3 h-3 text-[#DFBC76]" aria-hidden="true" />
            <span>Contacto y Soporte</span>
          </button>
        </nav>

        {/* Dynamic Copyright */}
        <div className="pt-6 border-t border-white/10 w-full text-center text-xs text-[#CFCABF]/60">
          <p>© {currentYear} {siteConfig.footer.copyrightOwner}. Todos los derechos reservados.</p>
        </div>

      </div>

      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
}
