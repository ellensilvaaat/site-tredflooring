import React from 'react';
import './../components/Pages/ThankYou.css';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <section className="thankyou-section">
      <div className="thankyou-container">
        <img src="/logo.png" alt="Tred Flooring logo" className="thankyou-logo" />
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to reach out.<br />
          Our team will get in touch with you within 2 business days.
        </p>
        <Link to="/" className="thankyou-home-btn">Return to Homepage</Link>
      </div>
    </section>
  );
}