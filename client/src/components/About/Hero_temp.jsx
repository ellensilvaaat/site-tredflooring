import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="about-hero">
      <img
        src="https://site-tredflooring-assets.s3.amazonaws.com/about-hero.png"
        alt="About Us Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="overlay">
        <h1>About Us</h1>
      </div>
    </section>
  );
}
