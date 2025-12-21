import React from 'react';
import SkirtingHero from "../components/SkirtingBoards/SkirtingHero.jsx";
import SkirtingBenefits from '../components/SkirtingBoards/SkirtingBenefits.jsx';
import SkirtingProducts from '../components/SkirtingBoards/SkirtingProducts.jsx';
import Footer from '../components/Home/Footer';
import { Helmet } from 'react-helmet';

export default function SkirtingPage() {
  return (
    <>
      <Helmet>
        <title>Skirting Boards | Tred Flooring</title>
        <meta name="description" content="Discover elegant skirting boards by Tred, designed to complement any space. Choose from various profiles, sizes and finishes for a refined finish." />
        <meta name="keywords" content="Skirting Boards, Timber Skirting, Interior Finishing, Skirting Profiles, Decorative Skirting" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://ik.imagekit.io https://*.imagekit.io; script-src 'self'; style-src 'self' 'unsafe-inline'" />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/skirting-boards" />
      </Helmet>

      <SkirtingHero />
      <SkirtingBenefits />
      <SkirtingProducts />
      <Footer />
    </>
  );
}
