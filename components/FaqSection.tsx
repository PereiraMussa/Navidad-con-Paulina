'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FaChevronDown, 
  FaBookOpen, 
  FaWandMagicSparkles, 
  FaMobileScreen, 
  FaBolt, 
  FaCreditCard, 
  FaHeadset,
  FaShieldHalved
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqItems = [
    {
      icon: FaBookOpen,
      badge: 'Formato',
      question: '¿El ebook es físico o digital?',
      answer: 'Es un producto 100% digital en formato PDF de alta resolución. Podrás leerlo cómodamente desde tu teléfono, tableta o computadora apenas finalices tu compra, sin esperar envíos por correo.',
    },
    {
      icon: FaWandMagicSparkles,
      badge: 'Dificultad',
      question: '¿Necesito experiencia previa en decoración?',
      answer: 'No, en absoluto. Las orientaciones están organizadas de forma didáctica, paso a paso y sumamente visual, con combinaciones y esquemas claros para que cualquier persona logre resultados elegantes.',
    },
    {
      icon: FaMobileScreen,
      badge: 'Dispositivos',
      question: '¿Puedo leerlo directamente desde mi teléfono celular?',
      answer: 'Sí. El material fue especialmente diagramado para ofrecer una lectura muy cómoda y fluida en pantallas móviles (smartphones), así como en iPads, tablets y computadoras.',
    },
    {
      icon: FaBolt,
      badge: 'Entrega',
      question: '¿Recibiré el material inmediatamente después de la compra?',
      answer: 'Sí. El acceso es instantáneo. En cuanto se procese el pago, recibirás de inmediato un correo electrónico con tu enlace de descarga directa para comenzar a inspirarte hoy mismo.',
    },
    {
      icon: FaCreditCard,
      badge: 'Seguridad',
      question: '¿Qué formas de pago están disponibles?',
      answer: 'Puedes abonar de forma 100% segura mediante tarjeta de crédito, débito y los métodos de pago habituales a través de una pasarela con encriptación SSL de nivel bancario.',
    },
    {
      icon: FaHeadset,
      badge: 'Atención',
      question: '¿Cómo puedo solicitar ayuda si tengo alguna duda?',
      answer: `Nuestro canal oficial de soporte está a tu disposición en cualquier momento escribiendo a: ${siteConfig.support.emailOrWhatsapp}. Te responderemos con la mayor calidez y rapidez.`,
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#CFCABF]/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Fuente Nunito */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A60B08]/10 text-[#A60B08] text-xs font-bold uppercase tracking-wider mb-2.5">
            <FaShieldHalved className="w-3 h-3 text-[#B58A45]" aria-hidden="true" />
            <span className="font-display">Dudas Resueltas</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1D2E19] leading-tight mb-3 [text-wrap:balance]">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#76584C]">
            Todo lo que necesitas saber antes de comenzar tu lectura navideña.
          </p>
        </motion.div>

        {/* Acordeón con Iconos Modernos Vectoriales */}
        <div className="space-y-3.5" role="region" aria-label="Preguntas frecuentes">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF7F2] border-[#B58A45] shadow-md ring-1 ring-[#B58A45]/30'
                    : 'bg-[#F5EFEB]/70 border-[#CFCABF]/60 hover:border-[#5E0001]/30 hover:bg-[#FAF7F2]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A60B08]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Icono Vectorial Contextual */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen 
                        ? 'bg-[#5E0001] text-[#FAF7F2] shadow-xs' 
                        : 'bg-[#5E0001]/10 text-[#5E0001]'
                    }`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <span className="font-display text-sm sm:text-base font-bold text-[#1D2E19] block leading-snug">
                        {item.question}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`font-display text-[11px] font-bold px-2 py-0.5 rounded-md hidden sm:inline-block ${
                      isOpen ? 'bg-[#1D2E19] text-[#FAF7F2]' : 'bg-[#EFE9DF] text-[#76584C]'
                    }`}>
                      {item.badge}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-[#5E0001]/10 rotate-180' : 'bg-transparent'
                    }`}>
                      <FaChevronDown
                        className="w-3.5 h-3.5 text-[#5E0001]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#CFCABF]/40 text-sm text-[#4A3D36] leading-relaxed pl-16">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
