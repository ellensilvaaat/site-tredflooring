import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="about-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/about-hero.png"
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
