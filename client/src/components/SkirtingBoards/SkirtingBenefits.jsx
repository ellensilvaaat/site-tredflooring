import React from 'react';
import './SkirtingBenefits.css';

const benefits = [
  {
    icon: "https://ik.imagekit.io/ijsd2xvnc/icons8-wall-100.png",
    text: 'A refined detail that adds polish and protection to your walls.',
  },
  {
    icon: "https://img.icons8.com/wired/64/space.png",
    text: 'Available in various heights, profiles and finishes to match your style.',
  },
  {
    icon: "https://img.icons8.com/ios/50/interior-design.png",
    text: 'Simple to install and easily adaptable to any interior space.',
  },
  {
    icon: "https://img.icons8.com/dotty/80/room.png",
    text: 'Durable and easy to maintain, protecting your walls from wear and tear.',
  },
];

export default function SkirtingBenefits() {
  return (
    <section className="skirting-benefits-section">
      <h2 className="skirting-benefits-title">Why Choose Our Skirting Boards</h2>
      <div className="skirting-benefits-cards">
        {benefits.map((item, idx) => (
          <div key={idx} className="skirting-benefit-card">
            <img
              src={item.icon}
              alt="icon"
              className="skirting-benefit-icon"
              loading="lazy"
              width="48"
              height="48"
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

