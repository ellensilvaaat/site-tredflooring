import React from 'react';
import Hero_wall from "../components/WallPanels/WallHero.jsx";
import BenefitsSection from '../components/WallPanels/BenefitsSection';
import ProcessSection from '../components/WallPanels/ProcessSection';
import GallerySection from '../components/WallPanels/GallerySection';
import CTASection from '../components/WallPanels/CTASection';
import Footer from '../components/Home/Footer';

export default function WallPanelsPage() {
  return (
    <>
      <Hero_wall />
      <BenefitsSection />
      <ProcessSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </>
  );
}
