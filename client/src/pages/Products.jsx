import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import '../components/Products/ProductCollectionsClean.css';


// 🔹 Acima da dobra
import Hero_product from '../components/Products/Hero_product.jsx';

// 🔸 Lazy loading abaixo da dobra
const ProductCollections = lazy(() => import('../components/Products/ProductCollections.jsx'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | Tred Flooring</title>
        <meta
          name="description"
          content="Explore Tred’s premium flooring collections designed for timeless aesthetics and performance. Discover the perfect fit for your home or project."
        />
        <meta
          name="keywords"
          content="Flooring Products, Tred Flooring, Engineered Timber, Flooring Collections, Modern Flooring, Australian Design"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/products" />
      </Helmet>

      <main>
        {/* Acima da dobra */}
        <Hero_product />

        {/* Abaixo da dobra */}
        <Suspense fallback={null}>
          <ProductCollections />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}


