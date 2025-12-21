import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaversPage.css';
import PaverCard from './PaverCard';

const pavers = [
  {
    id: 1,
    name: 'Warm White',
    finishType: 'Matt',
    size: '700×800 mm',
    image: "https://ik.imagekit.io/ijsd2xvnc/warmmatt.png",
  },
  {
    id: 2,
    name: 'Warm White',
    finishType: 'Grip',
    size: '700×800 mm',
    image: "https://ik.imagekit.io/ijsd2xvnc/warmgrip.png",
  },
  {
    id: 3,
    name: 'Almond Beige',
    finishType: 'Matt',
    size: '700×800 mm',
    image: "https://ik.imagekit.io/ijsd2xvnc/almondmatt.png",
  },
  {
    id: 4,
    name: 'Almond Beige',
    finishType: 'Grip',
    size: '700×800 mm',
    image: "https://ik.imagekit.io/ijsd2xvnc/almondgrip.png",
  },
  {
    id: 5,
    name: 'Cotton',
    finishType: 'Matt',
    size: '1100×1290 mm',
    image: "https://ik.imagekit.io/ijsd2xvnc/cotton.png",
  },
  {
    id: 6,
    name: 'Cashmere',
    finishType: 'Matt',
    size: '1100×1290 mm',
    image: "https://ik.imagekit.io/ijsd2xvnc/cashmere.png",
  },
  {
    id: 7,
    name: 'Alpaca',
    finishType: 'Matt',
    size: '1100×1290 mm',
    image: "https://ik.imagekit.io/ijsd2xvnc/alpaca.png",
  },
];

export default function PaversPage() {
  const navigate = useNavigate();

  return (
    <div className="pavers-page">
      <header className="pavers-hero">
        <p>
          Explore our selection of high-quality pavers, ideal for walls, patios, gardens and floors.
        </p>
      </header>

      <section className="pavers-list">
        {pavers.map((paver) => (
          <PaverCard
            key={paver.id}
            image={paver.image}
            name={paver.name}
            finishType={paver.finishType}
            size={paver.size}
          />
        ))}
      </section>

      <div className="pavers-cta">
        <button className="pavers-cta-btn" onClick={() => navigate('/contact')}>
          Talk to a Specialist
        </button>
      </div>
    </div>
  );
}
