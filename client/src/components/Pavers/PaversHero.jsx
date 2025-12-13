import React from 'react';
import './PaversHero.css';

export default function Hero_pv() {
  return (
    <section className="pv-hero">
      <img
        src="https://site-tredflooring-assets.s3.amazonaws.com/pavers/hero.jpg"
        alt="Pavers Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="pv-overlay">
        <h1>Pavers</h1>
      </div>
    </section>
  );
}
