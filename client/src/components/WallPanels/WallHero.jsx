import React from 'react';
import './WallHero.css';

export default function Hero_wall() {
  return (
    <section className="wall-hero">
      <img
        src="https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/examples/process-step4.jpg"
        alt="Wall Panels Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="wall-overlay">
        <h1>Wall Panels</h1>
      </div>
    </section>
  );
}
