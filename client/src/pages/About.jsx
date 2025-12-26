import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Acima da dobra (não lazy)
import Hero from '../components/About/Hero_temp.jsx';
import WhyChoose from '../components/About/WhyTred.jsx';

// 🔸 Lazy loading (abaixo da dobra)
const Process = lazy(() => import('../components/About/Process.jsx'));
const CallToAction = lazy(() => import('../components/Home/CallToAction'));
const Footer = lazy(() => import('../components/Home/Footer'));

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Tred Flooring Australia</title>
        <meta
          name="description"
          content="Learn more about Tred Flooring – our values, process, and commitment to quality. Discover what sets us apart in the Australian flooring and interior solutions industry."
        />
        <meta
          name="keywords"
          content="about tred, tred flooring, australian flooring company, bespoke interiors, design values, interior solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/about" />
      </Helmet>

      <main>
        {/* Above the fold */}
        <Hero />
        <WhyChoose />

        {/* Below the fold */}
        <Suspense fallback={null}>
          <Process />
          <CallToAction />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}


