import React from 'react';
import './../components/Pages/ThankYou.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Tred Flooring</title>
        <meta name="description" content="Thank you for contacting Tred Flooring. We will get back to you within 2 business days." />
        <meta name="robots" content="noindex, nofollow" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://site-tredflooring-assets.s3.amazonaws.com; style-src 'self' 'unsafe-inline';" />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://www.tredflooring.com.au/thank-you" />
      </Helmet>

      <section className="thankyou-section">
        <div className="thankyou-container">
          <img
            src="https://site-tredflooring-assets.s3.amazonaws.com/logo.png"
            alt="Tred Flooring logo"
            className="thankyou-logo"
            loading="lazy"
            width="120"
            height="60"
          />
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to reach out.<br />
            Our team will get in touch with you within 2 business days.
          </p>
          <Link to="/" className="thankyou-home-btn">Return to Homepage</Link>
        </div>
      </section>
    </>
  );
}
