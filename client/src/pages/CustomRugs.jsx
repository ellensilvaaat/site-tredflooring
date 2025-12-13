import React from 'react';
import HeroRugs from '../components/CustomRugs/Hero';
import CustomRugsIntro from '../components/CustomRugs/CustomRugsIntro';
import ProcessRugs from '../components/CustomRugs/ProcessRugs';
import CustomRugsProducts from '../components/CustomRugs/CustomRugsProducts';
import Footer from '../components/Home/Footer';

export default function RugsPage() {
  return (
      <>
      <HeroRugs />
      <CustomRugsIntro />
      <ProcessRugs />
      <CustomRugsProducts />
      <Footer />
      </>
    );
}