import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Acima da dobra
import Hero_sp from '../components/SandPolish/SPHero';

// 🔸 Abaixo da dobra
const SandPolishInfo = lazy(() => import('../components/SandPolish/SandPolishInfo'));
const SandPolishProcess = lazy(() => import('../components/SandPolish/SandPolishProcess'));
const SandPolishCTA = lazy(() => import('../components/SandPolish/SandPolishCTA'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function SandPolishPage() {
  return (
    <>
      <Helmet>
        <title>Sand & Polish | Tred Flooring</title>
        <meta
          name="description"
          content="Explore Tred’s sand and polish services for wood flooring. Enhance the durability and shine of your floors with professional finishes."
        />
        <meta
          name="keywords"
          content="Sand and Polish, Timber Floor Finishing, Floor Sanding, Floor Polishing, Tred Flooring Services, Wood Floor Care"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/sand-polish" />
      </Helmet>

      <main>
        <Hero_sp />

        <Suspense fallback={null}>
          <SandPolishInfo />
          <SandPolishProcess />
          <SandPolishCTA />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
