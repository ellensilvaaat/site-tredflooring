import React from 'react';
import Hero from '../components/About/Hero_temp.jsx';
import WhyChoose from '../components/About/WhyTred.jsx';
import Process from '../components/About/Process.jsx';
//import Team from '../components/About/Team.jsx';
import CallToAction from '../components/Home/CallToAction';
import Footer from '../components/Home/Footer';

export default function About() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Process />
     {/* <Team /> */}
      <CallToAction />
      <Footer />
    </>
  );
}
