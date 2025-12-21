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

  // Impedir scroll ao fundo
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

    addQuote({
      id: `${unit.id}-${currentColor}-${currentSize}`,
      name: unit.name,
      color: currentColor,
      size: currentSize,
      variant: currentVariant
    });
    onClose();
    navigate('/request-samples');
  };

  const handleImageClick = () => setIsZoomed(true);
  const handleZoomClose = () => setIsZoomed(false);

  // Helper pra CDN ImageKit — reduz pra ~600px e webp
  const imageUrl = (src, w = 800) => `${src}?tr=w-${w},q-75,fo-auto,f-webp`;

  return (
    <>
      <div className="tvunit-modal-backdrop" onClick={onClose}>
        <div className="tvunit-modal" onClick={e => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}>×</button>

          <div className="modal-image-wrapper">
            <img
              src={imageUrl(currentVariant.image, 900)}
              alt={unit.name}
              className="modal-main-img"
              loading="lazy"
              decoding="async"
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
          <div className="image-zoom-overl" onClick={e => e.stopPropagation()}>
            <img
              src={imageUrl(currentVariant.image, 1600)}
              alt={unit.name}
              className="image-zoomed"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  );
}



