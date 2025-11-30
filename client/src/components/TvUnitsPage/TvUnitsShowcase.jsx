// src/components/TvUnitsPage/TvUnitsShowcase.jsx
import React, { useState, useContext } from 'react';
import tvUnits from '../../data/tvUnitsData';
import './TvUnitsShowcase.css';
import TvUnitModal from './TvUnitModal';
import { SampleCartContext } from '../../contexts/SampleCartContext';
import { useNavigate } from 'react-router-dom';

export default function TvUnitsShowcase() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const { addSample } = useContext(SampleCartContext);
  const navigate = useNavigate();

  const handleSelectForQuote = (quoteItem) => {
    addSample(quoteItem);
    setSelectedUnit(null);
    navigate('/cart'); // ou a rota correta pra sua página de pedido/quote
  };

  return (
    <div className="tvunits-showcase">
      <div className="tvunits-texts">
        <h1 className="tvunits-textsh1">Curated In <span className="highlight">Australia</span></h1>
        <p className="tvunits-textsp">TRED creates refined pieces that elevate everyday living through balanced materials and thoughtful proportions. Each entertainment unit is Australian-designed with architectural simplicity and timeless detail.</p>
      </div>
      <div className="tvunits-grid">
        {tvUnits.map(unit => {
          const defaultVariant =
            unit.variants.find(
              v =>
                v.size === unit.defaultSize &&
                v.color === unit.defaultColor
            ) || unit.variants[0];

          return (
            <div
              key={unit.id}
              className="tvunit-card"
              onClick={() => setSelectedUnit(unit)}
            >
              <img
                src={defaultVariant.image}
                alt={unit.name}
                className="tvunit-card-img"
              />
              <div className="tvunit-card-name">{unit.name}</div>
            </div>
          );
        })}
        
      </div>
      {selectedUnit && (
        <TvUnitModal
          unit={selectedUnit}
          onClose={() => setSelectedUnit(null)}
          onGetQuote={handleSelectForQuote}
        />
      )}
      <button className="return-home-btn" onClick={() => navigate('/')}>
        ← Return to Home
      </button>
    </div>
  );
}
