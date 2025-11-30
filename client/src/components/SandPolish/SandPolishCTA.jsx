import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SandPolishCTA.css';

export default function SandPolishCTA() {
  const navigate = useNavigate();
  return (
    <section className="sp-cta">
      <h2>Ready to give your floors new life?</h2>
      <button onClick={() => navigate('/contact')} className="sp-cta-btn">
        Talk to a Specialist
      </button>
    </section>
  );
}
