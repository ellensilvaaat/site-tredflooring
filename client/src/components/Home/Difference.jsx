import React from 'react';
import './Difference.css';
import { useNavigate } from 'react-router-dom';

export default function Difference() {
  const navigate = useNavigate();

  return (
    <section
      className="difference-section"
      style={{
        backgroundImage: `url("https://ik.imagekit.io/ijsd2xvnc/Hero%20(2).png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="difference-overlay" />
      <div className="difference-inner">
        <h2 className="difference-title">
          The <span className="highlight">Tred</span><br />
          Difference
        </h2>

        <div className="steps">
          {[
            {
              number: '01',
              heading: <>Customised <br /><span>Flooring Solutions</span></>,
              text: 'We offer tailored timber flooring and finishes to suit every aesthetic and lifestyle.',
            },
            {
              number: '02',
              heading: <>Design & <br /><span>Installation</span></>,
              text: 'From design consultation to flawless installation, everything is handled by our team.',
            },
            {
              number: '03',
              heading: <>Beyond Floors: <br /><span>Complete Interiors</span></>,
              text: 'TV units, custom rugs, wall panels, pavers & more. All in one curated space.',
            },
            {
              number: '04',
              heading: <>Sustainably <br /><span>Sourced</span></>,
              text: 'We work with responsibly sourced materials for eco-conscious flooring solutions.',
            },
          ].map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-heading">{step.heading}</div>
                <div className="step-text">{step.text}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="difference-cta" onClick={() => navigate('/contact')}>
          Talk to a specialist
        </button>
      </div>
    </section>
  );
}




