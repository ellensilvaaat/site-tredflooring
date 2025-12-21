import React from 'react';
import './SPHero.css';

export default function Hero_sp() {
  return (
    <section className="sp-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/Hero%20(3).png"
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
