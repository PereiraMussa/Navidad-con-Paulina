'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { FaCircleCheck, FaBagShopping, FaXmark } from 'react-icons/fa6';
import { siteConfig } from '@/lib/config';

interface PurchaseEvent {
  id: string;
  name: string;
  location: string;
  timeAgo: string;
  productName: string;
  price: string;
  imageSrc: string;
  badge: string;
  badgeColor: string;
}

// Catálogo de compras alternadas entre a Guia Principal ($4,95) e o Combo com Kit Réveillon ($4,95 + $3,99 = $8,94)
const purchaseCatalog: PurchaseEvent[] = [
  {
    id: 'p1',
    name: 'Mariana S.',
    location: 'Madrid, España',
    timeAgo: 'Hace 35 segundos',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p2',
    name: 'Valentina R.',
    location: 'Santiago, Chile',
    timeAgo: 'Hace 1 minuto',
    productName: 'La Navidad que Todos Recordarán',
    price: 'US$4,95',
    imageSrc: '/images/mockup-real.png',
    badge: 'Guía de Navidad',
    badgeColor: 'bg-[#A60B08]/15 text-[#A60B08] border-[#A60B08]/30',
  },
  {
    id: 'p3',
    name: 'Camila M.',
    location: 'Ciudad de México',
    timeAgo: 'Hace 45 segundos',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p4',
    name: 'Sofía H.',
    location: 'Buenos Aires, Argentina',
    timeAgo: 'Hace un instante',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p5',
    name: 'Lucía P.',
    location: 'Bogotá, Colombia',
    timeAgo: 'Hace 2 minutos',
    productName: 'La Navidad que Todos Recordarán',
    price: 'US$4,95',
    imageSrc: '/images/mockup-real.png',
    badge: 'Guía de Navidad',
    badgeColor: 'bg-[#A60B08]/15 text-[#A60B08] border-[#A60B08]/30',
  },
  {
    id: 'p6',
    name: 'Elena D.',
    location: 'Barcelona, España',
    timeAgo: 'Hace 50 segundos',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p7',
    name: 'Beatriz M.',
    location: 'Montevideo, Uruguay',
    timeAgo: 'Hace 1 minuto',
    productName: 'La Navidad que Todos Recordarán',
    price: 'US$4,95',
    imageSrc: '/images/mockup-real.png',
    badge: 'Guía de Navidad',
    badgeColor: 'bg-[#A60B08]/15 text-[#A60B08] border-[#A60B08]/30',
  },
  {
    id: 'p8',
    name: 'Ana Sofía V.',
    location: 'Guadalajara, México',
    timeAgo: 'Hace 20 segundos',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p9',
    name: 'Carmen L.',
    location: 'Sevilla, España',
    timeAgo: 'Hace 3 minutos',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p10',
    name: 'Gabriela T.',
    location: 'Lima, Perú',
    timeAgo: 'Hace un instante',
    productName: 'La Navidad que Todos Recordarán',
    price: 'US$4,95',
    imageSrc: '/images/mockup-real.png',
    badge: 'Guía de Navidad',
    badgeColor: 'bg-[#A60B08]/15 text-[#A60B08] border-[#A60B08]/30',
  },
  {
    id: 'p11',
    name: 'Daniela C.',
    location: 'Medellín, Colombia',
    timeAgo: 'Hace 1 minuto',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p12',
    name: 'Paola F.',
    location: 'Monterrey, México',
    timeAgo: 'Hace 2 minutos',
    productName: 'La Navidad que Todos Recordarán',
    price: 'US$4,95',
    imageSrc: '/images/mockup-real.png',
    badge: 'Guía de Navidad',
    badgeColor: 'bg-[#A60B08]/15 text-[#A60B08] border-[#A60B08]/30',
  },
  {
    id: 'p13',
    name: 'Isabel N.',
    location: 'Valencia, España',
    timeAgo: 'Hace 40 segundos',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p14',
    name: 'Natalia Q.',
    location: 'Córdoba, Argentina',
    timeAgo: 'Hace 3 minutos',
    productName: 'La Navidad que Todos Recordarán',
    price: 'US$4,95',
    imageSrc: '/images/mockup-real.png',
    badge: 'Guía de Navidad',
    badgeColor: 'bg-[#A60B08]/15 text-[#A60B08] border-[#A60B08]/30',
  },
  {
    id: 'p15',
    name: 'Fernanda B.',
    location: 'Quito, Ecuador',
    timeAgo: 'Hace 55 segundos',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
  {
    id: 'p16',
    name: 'Andrea S.',
    location: 'San José, Costa Rica',
    timeAgo: 'Hace un instante',
    productName: 'Guía de Navidad + Kit Réveillon',
    price: 'US$8,94',
    imageSrc: '/images/kit-reveillon-inesquecivel.jpg',
    badge: 'Combo Completo',
    badgeColor: 'bg-emerald-500/15 text-emerald-800 border-emerald-500/30',
  },
];

export function PurchaseNotificationPopup() {
  const [currentPurchase, setCurrentPurchase] = useState<PurchaseEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastIndexRef = useRef<number>(-1);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    // Obtener un cliente diferente sin repetir el anterior
    const getNextClient = (): PurchaseEvent => {
      let nextIndex: number;
      do {
        nextIndex = Math.floor(Math.random() * purchaseCatalog.length);
      } while (nextIndex === lastIndexRef.current && purchaseCatalog.length > 1);

      lastIndexRef.current = nextIndex;
      return purchaseCatalog[nextIndex];
    };

    const triggerNotification = () => {
      const client = getNextClient();
      setCurrentPurchase(client);
      setIsVisible(true);

      // Permanece visible por 5.5 segundos
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        // Intervalo realista aleatorio entre 9 y 15 segundos para la próxima notificación
        const nextInterval = Math.floor(Math.random() * 6000) + 9000;
        nextTimer = setTimeout(triggerNotification, nextInterval);
      }, 5500);
    };

    // Primera aparición a los 4 segundos tras cargar
    const initialTimer = setTimeout(triggerNotification, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleNotificationClick = () => {
    window.location.href = siteConfig.pricing.checkoutUrl;
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && currentPurchase && (
        <motion.aside
          initial={{ opacity: 0, y: 25, x: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, x: -15, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleNotificationClick}
          role="status"
          aria-live="polite"
          className="fixed bottom-22 left-3 sm:bottom-6 sm:left-6 z-50 max-w-[340px] sm:max-w-sm bg-[#FAF7F2]/98 border-2 border-[#B58A45]/50 rounded-2xl shadow-2xl p-3 sm:p-3.5 cursor-pointer hover:border-[#5E0001] transition-all group backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            {/* Portada en Miniatura (alternada según el producto) */}
            <div className="relative w-12 h-16 sm:w-13 sm:h-18 rounded-lg overflow-hidden shrink-0 border border-[#CFCABF] bg-[#1D2E19]/10 shadow-xs">
              <Image
                src={currentPurchase.imageSrc}
                alt={currentPurchase.productName}
                fill
                className="object-cover"
                sizes="56px"
                priority
              />
            </div>

            {/* Información de la compra */}
            <div className="flex-1 min-w-0 pr-5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-display text-[10px] font-black uppercase tracking-wider text-[#5E0001] flex items-center gap-1">
                  <FaBagShopping className="w-2.5 h-2.5 text-[#B58A45]" aria-hidden="true" />
                  Nueva compra confirmada
                </span>
                <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded border ${currentPurchase.badgeColor}`}>
                  {currentPurchase.price}
                </span>
              </div>

              <p className="text-xs sm:text-[13px] font-bold text-[#1D2E19] leading-tight truncate">
                {currentPurchase.name} · <span className="font-normal text-[#76584C]">{currentPurchase.location}</span>
              </p>

              <p className="text-[11px] text-[#4A3D36] truncate mt-0.5 font-medium">
                Adquirió: <span className="text-[#A60B08] font-bold">{currentPurchase.productName}</span>
              </p>

              <div className="flex items-center gap-1.5 mt-1 text-[10px] text-[#76584C]">
                <FaCircleCheck className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                <span>{currentPurchase.timeAgo}</span>
                <span className="text-[#CFCABF]">·</span>
                <span className="text-emerald-700 font-semibold">Verificado</span>
              </div>
            </div>

            {/* Botón de Cierre Manual */}
            <button
              onClick={handleDismiss}
              aria-label="Cerrar notificación"
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#FAF7F2] text-[#76584C] hover:text-[#5E0001] hover:bg-[#F5EFEB] flex items-center justify-center transition-colors cursor-pointer border border-[#CFCABF]/40"
            >
              <FaXmark className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
