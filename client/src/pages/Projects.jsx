import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// 🔹 Acima da dobra
import Hero_Project from "../components/Projects/Hero_Projects.jsx";

// 🔸 Abaixo da dobra (lazy load)
const Projects = lazy(() => import('../components/Projects/Projects.jsx'));
const Footer = lazy(() => import('../components/Home/Footer.jsx'));

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Tred Flooring</title>
        <meta
          name="description"
          content="Get inspired by Tred’s latest flooring projects. Explore real-life applications of our engineered timber floors in contemporary Australian spaces."
        />
        <meta
          name="keywords"
          content="Tred Flooring Projects, Timber Floor Installations, Australian Interiors, Engineered Flooring Examples, Home Design Inspiration"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/projects" />
      </Helmet>

      <main>
        <Hero_Project />

        <Suspense fallback={null}>
          <Projects />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

