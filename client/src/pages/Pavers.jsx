import React from 'react';
import Hero_pv from "../components/Pavers/PaversHero.jsx";
import Footer from '../components/Home/Footer';
import PaversPage from '../components/Pavers/PaversPage.jsx';
import { Helmet } from 'react-helmet-async';

export default function PaverPage() {
  return (
    <>
      <Helmet>
        <title>Pavers | Tred Flooring</title>
        <meta name="description" content="Discover durable and stylish pavers ideal for outdoor spaces. Designed for performance, aesthetics, and longevity by Tred Flooring." />
        <meta name="keywords" content="Pavers, Outdoor Flooring, Tred Flooring, Landscaping, Durable Pavers, Modern Pavers, Australia Design" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://ik.imagekit.io https://*.imagekit.io; script-src 'self'; style-src 'self' 'unsafe-inline'" />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/pavers" />
      </Helmet>

      <Hero_pv />
      <PaversPage />
      <Footer />
    </>
  );
}
