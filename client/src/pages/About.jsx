import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/About/Hero_temp.jsx';
import WhyChoose from '../components/About/WhyTred.jsx';
import Process from '../components/About/Process.jsx';
// import Team from '../components/About/Team.jsx';
import CallToAction from '../components/Home/CallToAction';
import Footer from '../components/Home/Footer';

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
          content="about tred, tred flooring, who we are, flooring company australia, interior solutions, design values, bespoke interiors, australian business"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tredflooring.com/about" />
      </Helmet>

      <Hero />
      <WhyChoose />
      <Process />
      {/* <Team /> */}
      <CallToAction />
      <Footer />
    </>
  );
}
