import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Carregamento síncrono (acima da dobra)
import TvHero from '../components/TvUnitsPage/TvunitHero.jsx';

// 🔸 Lazy loading (abaixo da dobra)
const TvUnitsShowcase = lazy(() => import('../components/TvUnitsPage/TvUnitsShowcase.jsx'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function TvUnit() {
  return (
    <>
      <Helmet>
        <title>TV Units | Tred Flooring</title>
        <meta
          name="description"
          content="Discover architectural TV units crafted for elegance and functionality. Explore custom solutions by Tred Flooring for your interior design vision."
        />
        <meta
          name="keywords"
          content="TV units, architectural furniture, custom media units, bespoke tv panels, interior design solutions, Tred Flooring"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/tv-units" />
      </Helmet>

      <main>
        <TvHero />
        <Suspense fallback={null}>
          <TvUnitsShowcase />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
