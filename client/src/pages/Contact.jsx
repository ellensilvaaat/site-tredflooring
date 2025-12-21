import React from 'react';
import { Helmet } from 'react-helmet-async';
import Booking from '../components/Contact/Booking';
import Hero_contact from '../components/Contact/Hero_contact';
import Footer from '../components/Home/Footer';

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
          content="contact Tred, book consultation, flooring appointments, custom flooring advice, Tred Flooring contact, schedule visit"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tredflooring.com/contact" />
      </Helmet>

      <Hero_contact />
      <Booking />
      <Footer />
    </>
  );
}
