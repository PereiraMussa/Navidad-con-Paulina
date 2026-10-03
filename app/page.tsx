import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { InteractiveDiagnostic } from '@/components/InteractiveDiagnostic';
import { TransformationSection } from '@/components/TransformationSection';
import { EbookPresentation } from '@/components/EbookPresentation';
import { ContentAccordion } from '@/components/ContentAccordion';
import { BenefitsSection } from '@/components/BenefitsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AudienceSection } from '@/components/AudienceSection';
import { AuthorSection } from '@/components/AuthorSection';
import { PurchaseRoadmap } from '@/components/PurchaseRoadmap';
import { MainOffer } from '@/components/MainOffer';
import { UpsellOffer } from '@/components/UpsellOffer';
import { FaqSection } from '@/components/FaqSection';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* 1. Barra Superior y Navegación Principal con Contador de 10 Minutos */}
      <Navbar />

      {/* 2. Hero Section con Mockup 3D Real Oficial */}
      <Hero />

      {/* 3. Identificación del Problema con Soluciones por Capítulo */}
      <ProblemSection />

      {/* 4. Test Diagnóstico Interactivo de Preparación Navideña */}
      <InteractiveDiagnostic />

      {/* 5. Transformación: Antes y Después con Control Deslizante Interactivo */}
      <TransformationSection />

      {/* 6. Presentación del Ebook con Capa Real y Marcadores */}
      <EbookPresentation />

      {/* 7. Contenido del Ebook (7 Temas en Acordeón) */}
      <ContentAccordion />

      {/* 8. Beneficios Tangibles */}
      <BenefitsSection />

      {/* 9. Testimonios y Reseñas de Lectoras (Carrusel de Tarjetas) */}
      <TestimonialsSection />

      {/* 10. Para Quién Es la Guía */}
      <AudienceSection />

      {/* 10. Conoce a Paulina Celebra */}
      <AuthorSection />

      {/* 11. Ruta de Compra Clara en 3 Pasos */}
      <PurchaseRoadmap />

      {/* 12. Oferta Principal con Precios Editables y Mockup Real */}
      <MainOffer />

      {/* 13. Oferta Adicional Opcional (Kit Réveillon Inesquecível) */}
      <UpsellOffer />

      {/* 14. Preguntas Frecuentes (FAQ) */}
      <FaqSection />

      {/* 15. CTA Final Emocional con Mockup Real */}
      <FinalCta />

      {/* 16. Pie de Página */}
      <Footer />
    </div>
  );
}
