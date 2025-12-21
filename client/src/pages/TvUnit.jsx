import React from 'react';
import { Helmet } from 'react-helmet';
import TvHero from "../components/TvUnitsPage/TvunitHero.jsx";
import Footer from '../components/Home/Footer';
import TvUnitsShowcase from '../components/TvUnitsPage/TvUnitsShowcase.jsx';

export default function TvUnit() {
  return (
    <>
      <Helmet>
        <title>TV Units | Tred Flooring</title>
        <meta
          name="description"
          content="Explore our bespoke TV units designed to blend form and function with timeless simplicity. Perfect for modern interiors."
        />
        <meta name="keywords" content="TV Units, Custom Furniture, Tred Flooring, Entertainment Units, Interior Design" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TV Units | Tred Flooring" />
        <meta property="og:description" content="Explore our bespoke TV units designed to blend form and function with timeless simplicity." />
        <meta property="og:url" content="https://www.tredflooring.com.au/services/tv-units" />
        <meta property="og:type" content="website" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://ik.imagekit.io https://site-tredflooring-assets.s3.amazonaws.com; script-src 'self'; style-src 'self' 'unsafe-inline'" />
        <meta name="referrer" content="no-referrer" />
      </Helmet>

      <TvHero />
      <TvUnitsShowcase />
      <Footer />
    </>
  );
}
