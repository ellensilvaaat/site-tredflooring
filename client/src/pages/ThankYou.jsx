import React from 'react';
import { Helmet } from 'react-helmet-async';
import './../components/Pages/ThankYou.css';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Tred Flooring</title>
        <meta
          name="description"
          content="Thank you for contacting Tred Flooring! We appreciate your message and will be in touch within 2 business days."
        />
        <meta
          name="keywords"
          content="thank you, contact confirmation, tred flooring response, customer message received"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.tredflooring.com.au/thank-you" />
      </Helmet>

      <section className="thankyou-section">
        <div className="thankyou-container">
          <img
            src="https://site-tredflooring-assets.s3.amazonaws.com/logo.png"
            alt="Tred Flooring logo"
            className="thankyou-logo"
            width="120"
            height="60"
            fetchPriority="high"
          />
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to reach out.<br />
            Our team will get in touch with you within 2 business days.
          </p>
          <Link to="/" className="thankyou-home-btn">
            Return to Homepage
          </Link>
        </div>
      </section>
    </>
  );
}

