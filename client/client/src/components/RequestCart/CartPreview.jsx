import React from 'react';
import './SampleRequestPage.css'; // usa o CSS compartilhado ou parte dele

export default function CartPreview({ cart, onRemove }) {
  return (
    <div className="sample-cart">
      <h2>Your Sample Cart</h2>
      {cart.length === 0 && <p>No samples selected.</p>}
      {cart.map(item => (
        <div className="sample-item" key={item.id}>
          <span>{item.name}</span>
          <button
            className="remove-btn"
            onClick={() => onRemove(item.id)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
