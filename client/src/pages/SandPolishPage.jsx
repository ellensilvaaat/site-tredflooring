import React from 'react';
import Hero_sp from '../components/SandPolish/SPHero';
import SandPolishInfo from '../components/SandPolish/SandPolishInfo';
import SandPolishProcess from '../components/SandPolish/SandPolishProcess';
import SandPolishCTA from '../components/SandPolish/SandPolishCTA';
import Footer from '../components/Home/Footer';

export default function SandPolishPage() {
  return (
    <>
      <Hero_sp />
      <SandPolishInfo />
      <SandPolishProcess />
      <SandPolishCTA />
      <Footer />
    </>
  );
}
