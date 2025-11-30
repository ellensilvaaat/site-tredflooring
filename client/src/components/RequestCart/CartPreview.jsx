import React from 'react';
import './SampleRequestPage.css';

export default function CartPreview({
  sampleCart = [],
  quoteCart = [],
  onRemoveSample,
  onRemoveQuote
}) {
  return (
    <div className="sample-cart">
      {/* Sample Cart */}
      <h2>Your Sample Cart</h2>
      {sampleCart.length === 0 ? (
        <p>No samples selected.</p>
      ) : (
        sampleCart.map(item => (
          <div className="sample-item" key={item.id}>
            <span>{item.name}</span>
            <button className="remove-btn" onClick={() => onRemoveSample(item.id)}>×</button>
          </div>
        ))
      )}

      {/* Quote Cart */}
      <h2 style={{ marginTop: '2rem' }}>Your Quote Cart</h2>
      {quoteCart.length === 0 ? (
        <p>No quotes selected.</p>
      ) : (
        quoteCart.map(item => (
          <div className="sample-item" key={item.id}>
            <span>{item.name} — {item.color} / {item.size}</span>
            <button className="remove-btn" onClick={() => onRemoveQuote(item.id)}>×</button>
          </div>
        ))
      )}
    </div>
  );
}

