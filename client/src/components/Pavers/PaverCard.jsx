// src/components/PaverCard.jsx
import React from 'react';
import './PaverCard.css';

export default function PaverCard({ image, name, finishType, size }) {
  return (
    <div className="paver-card">
      <div className="paver-card__img-wrapper">
        <img src={image} alt={name} className="paver-card__img" />
      </div>
      <div className="paver-card__body">
        <h3 className="paver-card__title">{name}</h3>
        <div className="paver-card__separator" />
        <div className="paver-card__meta">
          <span className="paver-card__finish">{finishType}</span>
          <span className="paver-card__size">{size}</span>
        </div>
      </div>
    </div>
  );
}

