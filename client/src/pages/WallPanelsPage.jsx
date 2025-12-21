import React from 'react';
import { Helmet } from 'react-helmet';
import Hero_wall from "../components/WallPanels/WallHero.jsx";
import BenefitsSection from '../components/WallPanels/BenefitsSection';
import ProcessSection from '../components/WallPanels/ProcessSection';
import GallerySection from '../components/WallPanels/GallerySection';
import CTASection from '../components/WallPanels/CTASection';
import Footer from '../components/Home/Footer';

export default function WallPanelsPage() {
  return (
    <>
      <Helmet>
        <title>Wall Panels | Tred Flooring</title>
        <meta
          name="description"
          content="Explore custom wall panels by Tred Flooring — architectural design solutions crafted to elevate any interior. Functional, aesthetic, and tailored for excellence."
        />
        <meta
          name="keywords"
          content="Wall Panels, Architectural Wall Panels, Interior Design Panels, Decorative Wall Panels, Tred Flooring"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Wall Panels | Tred Flooring" />
        <meta
          property="og:description"
          content="Explore custom wall panels by Tred Flooring — architectural design solutions crafted to elevate any interior."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tredflooring.com.au/services/wall-panels" />

        {/* Security & Referrer */}
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' https://ik.imagekit.io https://site-tredflooring-assets.s3.amazonaws.com; script-src 'self'; style-src 'self' 'unsafe-inline'"
        />
        <meta name="referrer" content="no-referrer" />

        <link rel="canonical" href="https://www.tredflooring.com.au/services/wall-panels" />
      </Helmet>

      <Hero_wall />
      <BenefitsSection />
      <ProcessSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </>
  );
}

