import React from 'react';
import './Hero_Projects.css';

export default function Hero_projects() {
  return (
    <section className="projects-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/projects-hero.png"
        alt="Projects Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="projects-overlay">
        <h1>Projects</h1>
      </div>
    </section>
  );
}

