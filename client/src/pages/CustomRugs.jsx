import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroRugs from '../components/CustomRugs/Hero';
import CustomRugsIntro from '../components/CustomRugs/CustomRugsIntro';
import ProcessRugs from '../components/CustomRugs/ProcessRugs';
import CustomRugsProducts from '../components/CustomRugs/CustomRugsProducts';
import Footer from '../components/Home/Footer';

export default function RugsPage() {
  return (
    <>
      <Helmet>
        <title>Custom Rugs | Bespoke Rugs by Tred Flooring</title>
        <meta
          name="description"
          content="Design your own bespoke rug with Tred Flooring. Choose colors, sizes, patterns, and materials to perfectly match your interior style."
        />
        <meta
          name="keywords"
          content="custom rugs, bespoke rugs, designer rugs, made to order rugs, tred flooring, custom carpet, rug design, flooring australia"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tredflooring.com/services/custom-rugs" />
      </Helmet>

      <HeroRugs />
      <CustomRugsIntro />
      <ProcessRugs />
      <CustomRugsProducts />
      <Footer />
    </>
  );
}
