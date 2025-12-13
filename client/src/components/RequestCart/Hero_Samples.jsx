import React from 'react';
import './Hero_Samples.css';

export default function Hero_Samples() {
  return (
    <section className="sample-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/about-hero.png"
        alt="Cart background"
        rel="preload"
        className="sample-hero-img"
        loading="lazy"
        fetchpriority="high"
      />

      <div className="sample-overlay">
        <h1>Your Cart</h1>
      </div>
    </section>
  );
}

