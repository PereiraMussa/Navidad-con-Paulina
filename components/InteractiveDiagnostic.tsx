'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaCircleCheck, FaTriangleExclamation, FaArrowRight, FaWandMagicSparkles } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    points: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: '1. ¿Cómo te sientes respecto a la decoración de este año?',
    options: [
      { label: 'Tengo muchas ideas pero no sé cómo combinarlas', points: 2 },
      { label: 'Compro adornos y luego siento que la casa se ve recargada', points: 2 },
      { label: 'Busco algo elegante y cálido sin gastar una fortuna', points: 1 },
    ],
  },
  {
    id: 2,
    question: '2. ¿Cómo sueles manejar las compras y preparativos?',
    options: [
      { label: 'Dejo compras para los últimos días entre estrés y tráfico', points: 2 },
      { label: 'Gasto más de lo planeado por falta de una lista clara', points: 2 },
      { label: 'Quisiera un cronograma fácil de seguir semana a semana', points: 1 },
    ],
  },
  {
    id: 3,
    question: '3. Al llegar la Nochebuena, ¿cuál suele ser tu experiencia?',
    options: [
      { label: 'Llego exhausta a la cena después de correr todo el día', points: 2 },
      { label: 'Siento que faltó armonía o calidez en la mesa familiar', points: 2 },
      { label: 'Deseo sentarme a disfrutar con mi familia con total tranquilidad', points: 1 },
    ],
  },
];

export function InteractiveDiagnostic() {
  const [answers, setAnswers] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0 });

  const handleSelect = (questionId: number, optionIdx: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="diagnostico" className="py-14 md:py-20 bg-gradient-to-b from-[#F5EFEB] to-[#FAF7F2] border-t border-[#CFCABF]/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con Scroll Animation Suave */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5E0001]/10 text-[#5E0001] text-xs font-bold uppercase tracking-wider mb-2">
            <FaWandMagicSparkles className="w-3 h-3 text-[#B58A45]" aria-hidden="true" />
            <span className="font-display">Test Rápido Interactivo</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1D2E19] leading-tight mb-2 [text-wrap:balance]">
            ¿Cómo está tu preparación para esta Navidad?
          </h2>
          <p className="text-sm text-[#76584C]">
            Selecciona tu situación en cada punto para descubrir cómo transformar tu experiencia.
          </p>
        </motion.div>

        {/* Diagnostic Questions Card con Scroll Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#FAF7F2] border-2 border-[#B58A45]/30 p-6 sm:p-8 shadow-lg"
        >
          <div className="space-y-6">
            {questions.map((q, qIdx) => (
              <motion.div 
                key={q.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: qIdx * 0.08 }}
                className="pb-5 border-b border-[#CFCABF]/40 last:border-0 last:pb-0"
              >
                <h3 className="font-display text-sm sm:text-base font-bold text-[#1D2E19] mb-3">
                  {q.question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {q.options.map((opt, idx) => {
                    const isSelected = answers[q.id] === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelect(q.id, idx)}
                        className={`text-left p-3 rounded-xl border text-xs sm:text-[13px] font-medium transition-all cursor-pointer flex items-start gap-2 ${
                          isSelected
                            ? 'bg-[#1D2E19] text-[#FAF7F2] border-[#1D2E19] shadow-sm'
                            : 'bg-white text-[#4A3D36] border-[#CFCABF]/60 hover:border-[#5E0001]/50 hover:bg-[#F5EFEB]/50'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-[10px] ${
                          isSelected ? 'border-white bg-[#B58A45] text-white font-bold' : 'border-[#CFCABF]'
                        }`}>
                          {isSelected ? '✓' : ''}
                        </span>
                        <span className="leading-snug">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Result Banner */}
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#5E0001] via-[#7A0002] to-[#360001] text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-md"
          >
            <div className="text-left">
              <span className="font-display text-xs font-black text-[#DFBC76] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <FaTriangleExclamation className="w-3.5 h-3.5 text-[#DFBC76]" aria-hidden="true" />
                Diagnóstico de tu Celebración
              </span>
              <h4 className="font-display text-lg sm:text-xl font-black leading-tight">
                Tienes el deseo de una Navidad hermosa, solo te falta el método.
              </h4>
              <p className="text-xs sm:text-sm text-[#CFCABF] mt-1">
                La guía de Paulina elimina el estrés de cada uno de estos 3 puntos con pasos claros y probados.
              </p>
            </div>

            <a
              href={siteConfig.pricing.checkoutUrl}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#DFBC76] hover:bg-[#EED59B] text-[#360001] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span className="font-display">Resolver con la guía</span>
              <FaArrowRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
