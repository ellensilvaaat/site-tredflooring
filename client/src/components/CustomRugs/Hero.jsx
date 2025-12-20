import React from 'react';
import './Hero.css';

export default function HeroRugs() {
  return (
    <section className="about-heroRugs">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/Hero%20(1).png"
        alt="Custom Rug Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="overlay">
        <h1>Custom Rugs</h1>
      </div>
    </section>
  );
}
