import React from 'react';
import './BenefitsSection.css';

const benefits = [
  {
    icon: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/icons/wood.png",
    text: 'Elegant and natural finishes that elevate your interiors.',
  },
  {
    icon: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/icons/sketch.png",
    text: 'Flexible design, slatted, grooved, smooth or textured styles.',
  },
  {
    icon: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/icons/deadline.png",
    text: 'Fast installation with concealed joins and minimal disruption.',
  },
  {
    icon: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/icons/security.png",
    text: 'Durable, low-maintenance surfaces built to last.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Why Choose Our Wall Panels</h2>
      <div className="benefits-cards">
        {benefits.map((item, idx) => (
          <div key={idx} className="benefit-card">
            <img src={item.icon} alt="icon" className="benefit-icon" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
