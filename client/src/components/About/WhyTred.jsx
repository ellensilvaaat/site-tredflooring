import React from 'react';
import './WhyTred.css';

export default function WhyTred() {
  const items = [
    {
      icon: '/icon1.png',
      title: (<><span>Design-led<br />guidance</span></>),
      description: 'Personalised consultations for every space.'
    },
    {
      icon: '/icon2.png',
      title: (<><span>End-to-end<br />delivery</span></>),
      description: 'From quote to installation, we handle it.'
    },
    {
      icon: '/icon3.png',
      title: (<><span>Certified,<br />durable ranges</span></>),
      description: 'Water- and scratch-resistant options.'
    },
    {
      icon: '/icon4.png',
      title: (<><span>Clear<br />timelines</span></>),
      description: 'Installation scheduled within 1–2 weeks (project-dependent).'
    }
  ];

  return (
    <section className="why-tred-section">
      <div className="why-tred-container">
        <div className="why-tred-titles">
          <h2>Why homeowners and designers choose <span className="highlight">Tred</span></h2>
          <p>
            We make beautiful floors easy, combining design guidance with dependable, end-to-end project management.
          </p>
        </div>

        <div className="why-tred-grid">
          {items.map((item, index) => (
            <div className="why-tred-card" key={index}>
              <div className="why-tred-icon-wrapper">
                <div className="why-tred-icon-circle">
                  <img src={item.icon} alt={`Icon ${index + 1}`} />
                </div>
              </div>
              <div className="why-tred-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="why-tred-cta">Book your consultation</button>
      </div>
    </section>
  );
}

