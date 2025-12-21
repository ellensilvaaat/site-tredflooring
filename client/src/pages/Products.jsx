import React from 'react';
import Hero_product from '../components/Products/Hero_product.jsx';
import ProductCollections from '../components/Products/ProductCollections.jsx';
import Footer from '../components/Home/Footer';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products | Tred Flooring</title>
        <meta name="description" content="Explore Tred’s premium flooring collections designed for timeless aesthetics and performance. Discover the perfect fit for your home or project." />
        <meta name="keywords" content="Flooring Products, Tred Flooring, Engineered Timber, Flooring Collections, Modern Flooring, Australian Design" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://ik.imagekit.io https://*.imagekit.io; script-src 'self'; style-src 'self' 'unsafe-inline'" />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://www.tredflooring.com.au/products" />
      </Helmet>

      <Hero_product />
      <ProductCollections />
      <Footer />
    </>
  );
}

