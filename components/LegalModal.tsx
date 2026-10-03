'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-2xl w-full max-h-[85vh] bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 overflow-y-auto shadow-2xl border border-[#CFCABF]"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar ventana modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1D2E19] text-[#FAF7F2] hover:bg-[#A60B08] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 text-[#5E0001] mb-2">
              <Shield className="w-5 h-5" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider">Aviso Legal</span>
            </div>
            <h3 id="legal-modal-title" className="font-display text-2xl font-bold text-[#1D2E19] mb-4">
              Política de Privacidad
            </h3>
            <div className="space-y-4 text-sm text-[#4A3D36] leading-relaxed">
              <p>
                En <strong>{siteConfig.product.author}</strong> valoramos y respetamos tu privacidad. Los datos recopilados durante el proceso de compra (tales como nombre y correo electrónico) son utilizados exclusivamente para la entrega del producto digital adquirido y la comunicación relacionada con la compra.
              </p>
              <p>
                No comercializamos, cedemos ni compartimos información personal con terceros para fines publicitarios ajenos a esta publicación.
              </p>
              <p>
                Las pasarelas de pago utilizadas cumplen con los estándares internacionales de seguridad PCI-DSS y cifrado de transacciones.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 text-[#5E0001] mb-2">
              <FileText className="w-5 h-5" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider">Términos de Compra</span>
            </div>
            <h3 id="legal-modal-title" className="font-display text-2xl font-bold text-[#1D2E19] mb-4">
              Términos y Condiciones
            </h3>
            <div className="space-y-4 text-sm text-[#4A3D36] leading-relaxed">
              <p>
                <strong>{siteConfig.product.title}</strong> es una obra intelectual y formativa en formato digital (ebook). La adquisición otorga una licencia de uso personal, no transferible ni re-comercializable.
              </p>
              <p>
                {siteConfig.footer.digitalProductNotice}
              </p>
              <p>
                Queda expresamente prohibida la copia, redistribución o difusión no autorizada del contenido, diagramas o textos contenidos en la guía.
              </p>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div>
            <div className="flex items-center gap-2 text-[#5E0001] mb-2">
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider">Atención al Cliente</span>
            </div>
            <h3 id="legal-modal-title" className="font-display text-2xl font-bold text-[#1D2E19] mb-4">
              Canales de Contacto y Soporte
            </h3>
            <div className="space-y-4 text-sm text-[#4A3D36] leading-relaxed">
              <p>
                Si tienes preguntas sobre la adquisición del ebook o la descarga de tus archivos, puedes contactarnos en:
              </p>
              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#CFCABF]/60 flex items-center justify-between gap-3">
                <a 
                  href={`mailto:${siteConfig.support.emailOrWhatsapp}`}
                  className="font-bold text-base text-[#5E0001] hover:underline"
                >
                  {siteConfig.support.emailOrWhatsapp}
                </a>
                <a
                  href={`mailto:${siteConfig.support.emailOrWhatsapp}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5E0001] hover:bg-[#720203] text-[#FAF7F2] text-xs font-bold rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#DFBC76]" />
                  <span>Escribir</span>
                </a>
              </div>
              <p className="text-xs text-[#76584C]">
                Tiempo estimado de respuesta según el horario de atención: 24 a 48 horas hábiles.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#CFCABF]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#1D2E19] bg-[#EFE9DF] hover:bg-[#E2D9CB] rounded-lg transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
