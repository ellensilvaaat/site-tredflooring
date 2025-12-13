import React from 'react';
import './SPHero.css';

export default function Hero_sp() {
  return (
    <section className="sp-hero">
      <img
        src="https://site-tredflooring-assets.s3.amazonaws.com/sandpolish/steps/step4.jpg"
        alt="Sand and Polish Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="sp-overlay">
        <h1>Sand & Polish</h1>
      </div>
    </section>
  );
}
