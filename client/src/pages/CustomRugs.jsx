import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Acima da dobra (síncrono)
import HeroRugs from '../components/CustomRugs/Hero';

// 🔸 Abaixo da dobra (lazy)
const CustomRugsIntro = lazy(() => import('../components/CustomRugs/CustomRugsIntro'));
const ProcessRugs = lazy(() => import('../components/CustomRugs/ProcessRugs'));
const CustomRugsProducts = lazy(() => import('../components/CustomRugs/CustomRugsProducts'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function RugsPage() {
  return (
    <>
      <Helmet>
        <title>Custom Rugs | Tred Flooring</title>
        <meta
          name="description"
          content="Explore Tred Flooring’s custom rugs — tailored design, premium quality, and finishes that elevate your interior spaces."
        />
        <meta
          name="keywords"
          content="custom rugs, bespoke rugs, australian design, interior rugs, floor rugs"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/custom-rugs" />
      </Helmet>

      <main>
        {/* Above the fold */}
        <HeroRugs />

        {/* Below the fold */}
        <Suspense fallback={null}>
          <CustomRugsIntro />
          <ProcessRugs />
          <CustomRugsProducts />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
