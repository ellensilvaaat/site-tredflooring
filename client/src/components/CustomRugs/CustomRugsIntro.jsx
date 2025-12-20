import React from 'react';
import './CustomRugsIntro.css';

const CustomRugsIntro = () => {
  return (
    <section className="custom-rugs-intro">
      <div className="intro-imageee">
        <img
          src="https://ik.imagekit.io/ijsd2xvnc/Frame%2025.png"
          alt="Custom Rug Example"
        />
      </div>

      <div className="intro-text">
        <h2>Transform Your Space with a custom rug from Tred Flooring</h2>
        <p>
          Choose from our premium range of broadloom carpets, explore your favorite colors, sizes, and patterns, and bring your dream rug to life with a design that's fully tailored to you. Built with exceptional craftsmanship, your rug is made to elevate any room and last for years to come.
        </p>
        <button className="explore-btn">Explore Collection</button>
      </div>
    </section>
  );
};

export default CustomRugsIntro;

