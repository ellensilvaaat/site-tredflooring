import { useEffect, useState } from 'react';
import './HeroSection.css';

const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Floors that feel like home</h1>
          <p>One team to specify, supply and install.</p>
          <button onClick={() => window.location.href = '/products'}>
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}


