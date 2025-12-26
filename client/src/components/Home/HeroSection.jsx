import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const images = [
  "https://ik.imagekit.io/ijsd2xvnc/hero2.jpg",
  "https://ik.imagekit.io/ijsd2xvnc/hero1.jpg",
  "https://ik.imagekit.io/ijsd2xvnc/hero3.jpg"
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <img
        src={`${images[currentImage]}?tr=w-1600,f-auto,q-85`}
        srcSet={`
          ${images[currentImage]}?tr=w-768,f-auto,q-80 768w,
          ${images[currentImage]}?tr=w-1200,f-auto,q-80 1200w,
          ${images[currentImage]}?tr=w-1600,f-auto,q-75 1600w
        `}
        sizes="(max-width: 768px) 100vw, 100vw"
        alt="Hero background"
        className="hero-img"
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Floors that feel like home</h1>
          <p>One team to specify, supply and install.</p>
          <button onClick={() => navigate('/products')}>
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}


