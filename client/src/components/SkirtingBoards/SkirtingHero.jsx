import React from 'react';
import './SkirtingHero.css';

export default function SkirtingHero() {
  return (
    <section className="skirting-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/sven-brandsma-2v-kOwtpxpE-unsplash.jpg"
        alt="Skirting Boards Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="skirting-overlay">
        <h1>Skirting Boards</h1>
      </div>
    </section>
  );
}
