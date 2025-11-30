import React from 'react';
import Hero_pv from "../components/Pavers/PaversHero.jsx";
import Footer from '../components/Home/Footer';
import PaversPage from '../components/Pavers/PaversPage.jsx';

export default function PaverPage() {
  return (
    <>
      <Hero_pv/>
      <PaversPage />
      <Footer />
    </>
  );
}