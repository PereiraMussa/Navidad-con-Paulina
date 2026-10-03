'use client';

import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { siteConfig } from '@/lib/config';

interface BookCoverProps {
  className?: string;
  showFraming?: boolean;
}

export function BookCover({ className = '', showFraming = true }: BookCoverProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className={`relative w-full max-w-[390px] rounded-xl overflow-hidden ${
        showFraming ? 'shadow-2xl ring-1 ring-black/5' : ''
      }`}>
        <ImageWithFallback
          src={siteConfig.images.cover}
          fallbackSrc="/images/mockup-3d.png"
          alt="Capa oficial do ebook La Navidad que Todos Recordarán - Paulina Celebra"
          className="w-full h-auto object-contain"
          containerClassName="w-full flex items-center justify-center"
        />
      </div>
    </div>
  );
}
