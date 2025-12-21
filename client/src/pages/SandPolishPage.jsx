import React from 'react';
import Hero_sp from '../components/SandPolish/SPHero';
import SandPolishInfo from '../components/SandPolish/SandPolishInfo';
import SandPolishProcess from '../components/SandPolish/SandPolishProcess';
import SandPolishCTA from '../components/SandPolish/SandPolishCTA';
import Footer from '../components/Home/Footer';
import { Helmet } from 'react-helmet';


export default function SandPolishPage() {
  return (
    <>
      <Helmet>
        <title>Sand & Polish Services | Tred Flooring</title>
        <meta name="description" content="Restore the natural beauty of your timber floors with Tred’s expert sanding and polishing services. High-quality finishes for a timeless look." />
        <meta name="keywords" content="Timber Floor Sanding, Floor Polishing Melbourne, Timber Floor Restoration, Sand Polish Services, Hardwood Floor Refinish" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://ik.imagekit.io https://*.imagekit.io; script-src 'self'; style-src 'self' 'unsafe-inline'" />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://www.tredflooring.com.au/services/sand-polish" />
      </Helmet>

      <Hero_sp />
      <SandPolishInfo />
      <SandPolishProcess />
      <SandPolishCTA />
      <Footer />
    </>
  );
}

