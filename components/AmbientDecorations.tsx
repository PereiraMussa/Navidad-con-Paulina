'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export function AmbientDecorations() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Only enable on desktop pointer devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    let lastTime = 0;
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      // Throttle particle creation to once every 120ms for ultra lightness
      if (now - lastTime < 120) return;
      lastTime = now;

      const newParticle: Particle = {
        id: ++particleId,
        x: e.clientX,
        y: e.clientY + window.scrollY,
        size: Math.random() * 3 + 2,
        opacity: 0.35,
      };

      setParticles((prev) => [...prev.slice(-12), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Clean up particles
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter((p) => p.opacity > 0)
      );
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (particles.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden" 
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[#DFBC76] blur-[0.5px] transition-opacity duration-150"
          style={{
            left: `${p.x}px`,
            top: `${p.y - (typeof window !== 'undefined' ? window.scrollY : 0)}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
