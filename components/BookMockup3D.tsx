'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './ImageWithFallback';
import { siteConfig } from '@/lib/config';

interface BookMockup3DProps {
  className?: string;
  priority?: boolean;
}

export function BookMockup3D({ className = '' }: BookMockup3DProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Container with interactive hover tilt and realistic natural grounding */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.025, y: -4 }}
        className="relative group w-full max-w-[440px] md:max-w-[490px] flex items-center justify-center"
      >
        {/* Soft, warm ambient light reflection on floor */}
        <div 
          className="absolute -bottom-6 w-4/5 h-12 bg-[#2D1B14]/20 rounded-full blur-xl pointer-events-none group-hover:scale-105 transition-transform duration-500"
          aria-hidden="true"
        />

        {/* Real 3D Book Mockup Asset */}
        <div className="relative z-10 w-full overflow-hidden">
          <ImageWithFallback
            src={siteConfig.images.mockup3D}
            fallbackSrc="/images/mockup-3d.png"
            alt="Mockup 3D oficial del libro digital La Navidad que Todos Recordarán por Paulina Celebra"
            className="w-full h-auto object-contain drop-shadow-2xl select-none"
            containerClassName="w-full flex items-center justify-center"
          />
        </div>
      </motion.div>
    </div>
  );
}
