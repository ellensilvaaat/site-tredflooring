import React from 'react';
import './Hero.css';

export default function HeroRugs() {
  return (
    <section className="about-heroRugs">
      <img
        src="https://site-tredflooring-assets.s3.ap-southeast-2.amazonaws.com/julien-lanoy-rSGdLWXpKzk-unsplash_11zon.webp"
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
