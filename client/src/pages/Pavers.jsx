import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Acima da dobra
import Hero_pv from "../components/Pavers/PaversHero.jsx";

// 🔸 Lazy loading abaixo da dobra
const PaversPage = lazy(() => import('../components/Pavers/PaversPage.jsx'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function PaverPage() {
  return (
    <>
      <Helmet>
        <title>Pavers | Tred Flooring</title>
        <meta
          name="description"
          content="Discover durable and stylish pavers ideal for outdoor spaces. Designed for performance, aesthetics, and longevity by Tred Flooring."
        />
        <meta
          name="keywords"
          content="Pavers, Outdoor Flooring, Tred Flooring, Landscaping, Durable Pavers, Modern Pavers, Australia Design"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/pavers" />
      </Helmet>

      <main>
        {/* Acima da dobra */}
        <Hero_pv />

        {/* Abaixo da dobra */}
        <Suspense fallback={null}>
          <PaversPage />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

