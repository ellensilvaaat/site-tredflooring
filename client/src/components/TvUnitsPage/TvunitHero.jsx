import React from 'react';
import './TvunitHero.css';

export default function TvHero() {
  return (
    <section className="tv-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/5m.jpg"
        alt="TV Units Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="tv-overlay">
        <h1>Tv Units</h1>
      </div>
    </section>
  );
}

