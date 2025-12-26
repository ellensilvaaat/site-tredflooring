import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Acima da dobra
import SkirtingHero from "../components/SkirtingBoards/SkirtingHero.jsx";

// 🔸 Abaixo da dobra
const SkirtingBenefits = lazy(() => import('../components/SkirtingBoards/SkirtingBenefits.jsx'));
const SkirtingProducts = lazy(() => import('../components/SkirtingBoards/SkirtingProducts.jsx'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function SkirtingPage() {
  return (
    <>
      <Helmet>
        <title>Skirting Boards | Tred Flooring</title>
        <meta
          name="description"
          content="Browse Tred’s premium skirting boards for a flawless flooring finish. Designed to match modern and traditional Australian interiors."
        />
        <meta
          name="keywords"
          content="Skirting Boards, Floor Finishes, Wall Trim, Flooring Accessories, Tred Flooring Skirting, Interior Design Details"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/skirting-boards" />
      </Helmet>

      <main>
        <SkirtingHero />
        <Suspense fallback={null}>
          <SkirtingBenefits />
          <SkirtingProducts />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
