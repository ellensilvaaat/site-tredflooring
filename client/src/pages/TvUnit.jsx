import React from 'react';
import TvHero from "../components/TvUnitsPage/TvunitHero.jsx";
import Footer from '../components/Home/Footer';
import TvUnitsShowcase from '../components/TvUnitsPage/TvUnitsShowcase.jsx';

export default function TvUnit() {
  return (
    <>
      <TvHero/>
      <TvUnitsShowcase />
      <Footer />
    </>
  );
}