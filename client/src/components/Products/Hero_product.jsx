import React from 'react';
import './Hero_product.css';

export default function Hero_product() {
  return (
    <section className="product-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/products-hero.png"
        alt="Wood floor products"
        className="hero-bg-img"
        fetchPriority="high"
        decoding="async"
      />

      <div className="product-overlay">
        <h1>Products</h1>
      </div>
    </section>
  );
}

