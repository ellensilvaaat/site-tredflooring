import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 IMPORTANTE
import './HeroSection.css';

const images = [
  "https://ik.imagekit.io/ijsd2xvnc/hero2.jpg",
  "https://ik.imagekit.io/ijsd2xvnc/hero1.jpg",
  "https://ik.imagekit.io/ijsd2xvnc/hero3.jpg"
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate(); // 👈 Inicializa o hook

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
          <button onClick={() => navigate('/products')}>
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}


