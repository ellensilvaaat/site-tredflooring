import React from 'react';
import './WallHero.css';

export default function Hero_wall() {
  return (
    <section className="wall-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/Frame%2037.png"
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
