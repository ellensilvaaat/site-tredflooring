import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTASection.css';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <div className="wp-cta-wrapper">
      <button className="wp-cta-btn" onClick={() => navigate('/contact')}>
        Speak with a Specialist
      </button>
    </div>
  );
}
