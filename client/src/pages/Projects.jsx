import React from 'react';
import Hero_Project from "../components/Projects/Hero_Projects.jsx";
import Projects from '../components/Projects/Projects.jsx';
import Footer from '../components/Home/Footer';
import { Helmet } from 'react-helmet';


export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Tred Flooring</title>
        <meta name="description" content="Get inspired by Tred’s latest flooring projects. Explore real-life applications of our engineered timber floors in contemporary Australian spaces." />
        <meta name="keywords" content="Tred Flooring Projects, Timber Floor Installations, Australian Interiors, Engineered Flooring Examples, Home Design Inspiration" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://ik.imagekit.io https://*.imagekit.io; script-src 'self'; style-src 'self' 'unsafe-inline'" />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://www.tredflooring.com.au/projects" />
      </Helmet>

      <Hero_Project />
      <Projects />
      <Footer />
    </>
  );
}
