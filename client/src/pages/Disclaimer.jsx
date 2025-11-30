import React from 'react';
import './../components/Pages/PolicyPage.css';

export default function Terms() {
  return (
    <div className="policy-page">
      <section className="aboutt-hero">
        <h1>Product & Website Disclaimer</h1>
      </section>

      <div className="policy-container">
        <p>Last updated: 22/11/2025</p>
        <p>
          The information, photos, samples, colours and materials displayed on the Tred Flooring website are for general guidance only.
        </p>

        <h3>1. Colour and texture variation</h3>
        <p><strong>Actual flooring products may vary in:</strong></p>
        <ul>
          <li>Colour</li>
          <li>Grain</li>
          <li>Texture</li>
          <li>Gloss level</li>
          <li>Pattern and shading</li>
        </ul><br/>
        <p><strong>Variations can occur due to:</strong></p>
        <ul>
          <li>Manufacturing</li>
          <li>Lighting conditions</li>
          <li>Screen displays</li>
          <li>Batch differences</li>
        </ul><br/>
        <p>We strongly recommend visiting the showroom to confirm selections before purchase.</p>

        <h3>2. Measurements and installation</h3>
        <p>
          All measurements provided on the website or by the customer are subject to on-site verification. Installation requirements <strong>may vary depending on:</strong>
        </p>
        <ul>
          <li>Subfloor conditions</li>
          <li>Moisture levels</li>
          <li>Material type</li>
          <li>House age</li>
        </ul><br/>
        <p>Tred is not responsible for errors caused by inaccurate customer measurements.</p>

        <h3>3. Product availability</h3>
        <p>
          All products, colours and collections are subject to availability. Ranges may be discontinued or replaced without notice.
        </p>

        <h3>4. Project images</h3>
        <p><strong>Project photos:</strong></p>
        <ul>
          <li>May include styling or custom furniture</li>
          <li>Are shown for illustrative purposes</li>
          <li>May not represent exact final outcomes</li>
        </ul>

        <h3>5. Website limitations</h3>
        <p><strong>While we aim to provide accurate information:</strong></p>
        <ul>
          <li>Content may contain errors</li>
          <li>Prices, availability and descriptions may change</li>
          <li>The website may experience outages</li>
        </ul><br/>
        <p>Tred is not liable for any damages resulting from reliance on website content.</p>
      </div>
    </div>
  );
}


