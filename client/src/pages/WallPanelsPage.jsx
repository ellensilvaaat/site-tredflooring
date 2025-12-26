import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Carregamento imediato (acima da dobra)
import Hero_wall from '../components/WallPanels/WallHero.jsx';
import BenefitsSection from '../components/WallPanels/BenefitsSection';

// 🔸 Lazy loading (abaixo da dobra)
const ProcessSection = lazy(() => import('../components/WallPanels/ProcessSection'));
const GallerySection = lazy(() => import('../components/WallPanels/GallerySection'));
const CTASection = lazy(() => import('../components/WallPanels/CTASection'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function WallPanelsPage() {
  return (
    <>
      <Helmet>
        <title>Wall Panels | Tred Flooring</title>
        <meta
          name="description"
          content="Discover modern architectural wall panels that elevate your space with style and sophistication. Custom-designed by Tred Flooring."
        />
        <meta
          name="keywords"
          content="wall panels, architectural panels, custom wall cladding, modern interiors, Tred Flooring"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/wall-panels" />
      </Helmet>

      <main>
        <Hero_wall />
        <BenefitsSection />

        <Suspense fallback={null}>
          <ProcessSection />
          <GallerySection />
          <CTASection />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

