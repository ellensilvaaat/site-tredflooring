import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Above the fold
import Hero_contact from '../components/Contact/Hero_contact';
import Booking from '../components/Contact/Booking';

// 🔸 Below the fold
const Footer = lazy(() => import('../components/Home/Footer'));

export default function BookingPage() {
  return (
    <>
      <Helmet>
        <title>Contact & Booking | Tred Flooring</title>
        <meta
          name="description"
          content="Book a consultation or contact Tred Flooring to explore tailored flooring solutions. Schedule a visit or ask questions about our products and services."
        />
        <meta
          name="keywords"
          content="contact Tred Flooring, book consultation, flooring appointments, custom flooring advice, Australian flooring company"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/contact" />
      </Helmet>

      <main>
        {/* Above the fold */}
        <Hero_contact />
        <Booking />

        {/* Below the fold */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

