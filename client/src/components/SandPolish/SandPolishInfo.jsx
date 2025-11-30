import React from 'react';
import './SandPolishInfo.css';

export default function SandPolishInfo() {
  return (
    <section className="sp-info">
      <div className="sp-info-inner">
        <h2>Revive Your Timber Floors</h2>
        <p className="sp-info-innerp">
          Over time, wooden floors can lose their luster becoming scratched, dull, or stained. Our Sand & Polish service restores your floor’s original beauty, bringing out the grain, smoothness and shine you first fell in love with.
        </p>

        <div className="sp-benefits">
          <div className="sp-benefit-card">
            <img src="/sandpolish/icons/renew.png" alt="Renew floors" className="sp-icon" />
            <p>Restore worn or damaged floors to like‑new condition.</p>
          </div>
          <div className="sp-benefit-card">
            <img src="/sandpolish/icons/durability.png" alt="Durability" className="sp-icon" />
            <p>Long‑lasting finish that protects against scratches, stains and daily wear.</p>
          </div>
          <div className="sp-benefit-card">
            <img src="/sandpolish/icons/aesthetic.png" alt="Aesthetic" className="sp-icon" />
            <p>Enhance natural wood appearance, grain, texture, and colour come alive again.</p>
          </div>
          <div className="sp-benefit-card">
            <img src="/sandpolish/icons/value.png" alt="Cost effective" className="sp-icon" />
            <p>Cost‑effective alternative to full floor replacement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
