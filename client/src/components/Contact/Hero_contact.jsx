import React from 'react';
import './Hero_contact.css';

export default function Hero_contact() {
  return (
    <section className="booking-hero">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/contact-hero.png"
        alt="Contact Us Hero"
        className="hero-bg-img"
        loading="lazy"
      />

      <div className="booking-overlay">
        <h1>Contact Us</h1>
      </div>
    </section>
  );
}
