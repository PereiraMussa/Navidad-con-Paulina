'use client';

import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  containerClassName?: string;
}

export function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  ...rest
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  // Compute a smart SVG fallback if not explicitly provided
  const derivedFallback = fallbackSrc || (
    src.endsWith('.png') ? src.replace('.png', '.svg') :
    src.endsWith('.jpg') ? src.replace('.jpg', '.svg') :
    src.endsWith('.jpeg') ? src.replace('.jpeg', '.svg') :
    src
  );

  const handleError = () => {
    if (currentSrc !== derivedFallback) {
      setCurrentSrc(derivedFallback);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center rounded-xl bg-[#5E0001]/10 border border-[#B58A45]/30 text-[#76584C] ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[#A60B08]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        referrerPolicy="no-referrer"
        loading="lazy"
        className={className}
        {...rest}
      />
    </div>
  );
}
