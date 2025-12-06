import React from 'react';
import './Hero_Samples.css';

export default function Hero_Samples() {
  return (
    <section className="sample-hero">
      <img
        src="https://site-tredflooring-assets.s3.amazonaws.com/cart-hero.jpg"
        alt="Cart background"
        className="sample-hero-img"
        fetchpriority="high"
      />
      <div className="sample-overlay">
        <h1>Your Cart</h1>
      </div>
    </section>
  );
}
