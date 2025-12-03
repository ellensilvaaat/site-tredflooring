import React from 'react';
import './Difference.css';
import { useNavigate } from 'react-router-dom'; // 👈 importa o hook

export default function Difference() {
  const navigate = useNavigate(); // 👈 inicializa o hook

  return (
    <section className="difference-section">
      <img
        src="https://site-tredflooring-assets.s3.amazonaws.com/bg-mobile.jpg"
        alt="Background"
        className="difference-bg"
      />
      <div className="difference-overlay" />
      <div className="difference-inner">
        <h2 className="difference-title">
          The <span className="highlight">Tred</span><br />
          Difference
        </h2>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-content">
              <div className="step-heading">
                Customised <br /><span>Flooring Solutions</span>
              </div>
              <div className="step-text">
                We offer tailored timber flooring and finishes to suit every aesthetic and lifestyle.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-content">
              <div className="step-heading">
                Design & <br /><span>Installation</span>
              </div>
              <div className="step-text">
                From design consultation to flawless installation, everything is handled by our team.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-content">
              <div className="step-heading">
                Beyond Floors: <br /><span>Complete Interiors</span>
              </div>
              <div className="step-text">
                TV units, custom rugs, wall panels, pavers & more. All in one curated space.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">04</div>
            <div className="step-content">
              <div className="step-heading">
                Sustainably <br /><span>Sourced</span>
              </div>
              <div className="step-text">
                We work with responsibly sourced materials for eco-conscious flooring solutions.
              </div>
            </div>
          </div>
        </div>

        <button className="difference-cta" onClick={() => navigate('/contact')}>
          Talk to a specialist
        </button>
      </div>
    </section>
  );
}

