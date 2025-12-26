import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// Acima da dobra (carregamento imediato)
import HeroSection from '../components/Home/HeroSection';
import Collections from '../components/Home/Collections';

// Abaixo da dobra (lazy loading)
const ServicesShowcase = lazy(() => import('../components/Home/ServicesShowcase'));
const Difference = lazy(() => import('../components/Home/Difference'));
const ProjectsCarousel = lazy(() => import('../components/Home/ProjectsCarousel'));
const CallToAction = lazy(() => import('../components/Home/CallToAction'));
const Footer = lazy(() => import('../components/Home/Footer'));
const EmailCapturePopup = lazy(() => import('../components/Popup/EmailCapturePopup'));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tred Flooring | Bespoke Flooring, Rugs & TV Units</title>
        <meta
          name="description"
          content="Discover bespoke flooring, custom rugs, architectural TV units, and skirting boards by Tred. Designed in Australia to elevate your space."
        />
        <meta
          name="keywords"
          content="flooring, custom rugs, tv units, skirting boards, wall panels, sand polish, architectural design, australian interiors"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tredflooring.com/" />
      </Helmet>

      <main>
        {/* Acima da dobra (prioritário) */}
        <HeroSection />
        <Collections />

        {/* Abaixo da dobra (lazy load) */}
        <Suspense fallback={null}>
          <ServicesShowcase />
          <Difference />
          <ProjectsCarousel />
          <EmailCapturePopup />
          <CallToAction />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

