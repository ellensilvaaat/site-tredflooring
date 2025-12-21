import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesShowcase.css';

const services = [
  { id: 1, label: 'Custom Rugs', img: "https://ik.imagekit.io/ijsd2xvnc/rug-icon.png", path: '/services/custom-rugs' },
  { id: 2, label: 'TV Units', img: "https://ik.imagekit.io/ijsd2xvnc/tv-icon.png", path: '/services/tv-units' },
  { id: 3, label: 'Wall Panels', img: "https://site-tredflooring-assets.s3.amazonaws.com/services/wall-icon.jpg", path: '/services/wall-panels' },
  { id: 4, label: 'Sand & Polish', img: "https://ik.imagekit.io/ijsd2xvnc/sand-icon.jpg", path: '/services/sand-polish' },
  { id: 5, label: 'Pavers', img: "https://ik.imagekit.io/ijsd2xvnc/pavers-icon.jpg", path: '/services/pavers' },
  { id: 6, label: 'Skirting Boards', img: "https://ik.imagekit.io/ijsd2xvnc/rodapes-homestar-cf13-1000.jpg", path: '/services/skirting-boards' },
];

export default function ServicesShowcase() {
  return (
    <section className="services-section">
      <h2 className="services-title">Explore our services</h2>

      <p className="services-subtext">
        Tred goes beyond flooring. From bespoke rugs to custom TV units and architectural panels,
        we offer tailored design elements to elevate your space.
      </p>

      <div className="services-gallery">
        {services.map(item => (
          <Link key={item.id} to={item.path} className="services-card">
            
            <div className="services-img-wrapper">
              <img
                className="services-img"
                src={item.img}
                alt={item.label}
                width="200"
                height="200"
                decoding="async"
                loading="lazy"
                fetchpriority={item.id === 1 ? "high" : "low"}
              />
            </div>

            <div className="services-label">{item.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}




