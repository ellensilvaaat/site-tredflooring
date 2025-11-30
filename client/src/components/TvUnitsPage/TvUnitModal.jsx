// src/components/TvUnitsPage/TvUnitModal.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SampleCartContext } from '../../contexts/SampleCartContext';
import './TvUnitsShowcase.css';

export default function TvUnitModal({ unit, onClose }) {
  const { addQuote } = useContext(SampleCartContext);
  const navigate = useNavigate();

  const [currentColor, setCurrentColor] = useState(unit.defaultColor);
  const [currentSize, setCurrentSize] = useState(unit.defaultSize);
  const [isZoomed, setIsZoomed] = useState(false);

  /* 🆕 IMPEDIR SCROLL DA PÁGINA */
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const currentVariant = unit.variants.find(
    v => v.color === currentColor && v.size === currentSize
  );

  const availableColors = Array.from(new Set(unit.variants.map(v => v.color)));
  const availableSizes = Array.from(new Set(
    unit.variants.filter(v => v.color === currentColor).map(v => v.size)
  ));

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setCurrentColor(newColor);

    const sizesForColor = unit.variants
      .filter(v => v.color === newColor)
      .map(v => v.size);

    if (!sizesForColor.includes(currentSize)) {
      setCurrentSize(sizesForColor[0]);
    }
  };

  const handleSizeChange = (e) => {
    setCurrentSize(e.target.value);
  };

  const handleGetQuote = () => {
    if (!currentVariant) return;

    const quoteItem = {
      id: `${unit.id}-${currentColor}-${currentSize}`,
      name: unit.name,
      color: currentColor,
      size: currentSize,
      variant: currentVariant
    };

    addQuote(quoteItem);
    onClose();
    navigate('/request-samples');
  };

  const handleImageClick = () => setIsZoomed(true);
  const handleZoomClose = () => setIsZoomed(false);

  return (
    <>
      <div className="tvunit-modal-backdrop" onClick={onClose}>
        <div className="tvunit-modal" onClick={e => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}>×</button>

          <div className="modal-image-wrapper">
            <img
              src={currentVariant.image}
              alt={unit.name}
              className="modal-main-img"
              onClick={handleImageClick}
              style={{ cursor: 'zoom-in' }}
            />
          </div>

          <div className="modal-info">
            <h2>{unit.name}</h2>
            <p>{unit.description}</p>

            <div className="modal-options">
              <div className="option-group">
                <label className="option-groupc">Color:</label>
                <select
                  className="option-groupss"
                  value={currentColor}
                  onChange={handleColorChange}
                >
                  {availableColors.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="option-group">
                <label className="option-groupc">Size:</label>
                <select
                  className="option-groupss"
                  value={currentSize}
                  onChange={handleSizeChange}
                >
                  {availableSizes.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="quote-btn" onClick={handleGetQuote}>
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {isZoomed && (
        <div className="image-zoom-overlay" onClick={handleZoomClose}>
          <div className="image-zoom-overl">
            <img
              src={currentVariant.image}
              alt={unit.name}
              className="image-zoomed"
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

