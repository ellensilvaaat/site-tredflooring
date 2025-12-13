import React from 'react';
import SkirtingHero from "../components/SkirtingBoards/SkirtingHero.jsx";
import SkirtingBenefits from '../components/SkirtingBoards/SkirtingBenefits.jsx';
import SkirtingProducts from '../components/SkirtingBoards/SkirtingProducts.jsx';
import Footer from '../components/Home/Footer';

export default function SkirtingPage() {
  return (
    <>
      <SkirtingHero />
      <SkirtingBenefits />
      <SkirtingProducts />
      <Footer />
    </>
  );
}