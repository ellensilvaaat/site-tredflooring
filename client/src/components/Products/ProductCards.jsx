// src/components/Products/ProductCards.jsx

import React, { useState, useContext, memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SampleCartContext } from '../../contexts/SampleCartContext';

const Thumb = memo(({ src, alt, isActive, onClick }) => (
  <img
    src={src}
    alt={alt}
    className={`pc-thumb ${isActive ? 'active' : ''}`}
    width={80}
    height={80}
    loading="lazy"
    onClick={onClick}
  />
));

const THUMBS_LIMIT = 5;

export const ProductCard = memo(({ group, onImageClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbsExpanded, setThumbsExpanded] = useState(false);
  const selected = group[selectedIndex];
  const { addSample } = useContext(SampleCartContext);
  const navigate = useNavigate();

  const hasMoreThumbs = group.length > THUMBS_LIMIT;
  const thumbsToShow = useMemo(() => {
    return thumbsExpanded ? group : group.slice(0, THUMBS_LIMIT);
  }, [thumbsExpanded, group]);

  return (
    <div className="pc-card">
      <div
        className="pc-card-img"
        style={{ backgroundImage: `url(${selected.image})` }}
        onClick={() => onImageClick(selected.image)}
      />
      <div className="pc-card-info">
        <div className="pc-card-header">
          <h3 className="pc-collection-name">{selected.collectionName}</h3>
          <p className="pc-collection-specs">
            {(selected.specs || []).join(' / ')}
          </p>
        </div>

        <div className="pc-color-row">
          <p className="pc-color-label">
            Color: <span className="pc-color-name">{selected.colorName}</span>
          </p>
          <div className="pc-color-thumbs">
            {thumbsToShow.map((variant, vIdx) => (
              <Thumb
                key={variant.colorName}
                src={variant.image}
                alt={variant.colorName}
                isActive={vIdx === selectedIndex}
                onClick={() => setSelectedIndex(vIdx)}
              />
            ))}

            {hasMoreThumbs && (
              <button
                className="pc-thumbs-toggle-btn"
                onClick={() => setThumbsExpanded(prev => !prev)}
              >
                {thumbsExpanded ? '▲' : '▼'}
              </button>
            )}
          </div>
        </div>

        <div className="pc-card-actions">
          <button
            className="pc-request-button"
            onClick={() => {
              addSample({
                id:
                  selected.id ??
                  `${selected.collectionName}-${selected.colorName}`,
                name: `${selected.collectionName} — ${selected.colorName}`,
                type: selected.type,
                specs: selected.specs,
                image: selected.image
              });
              navigate('/request-samples');
            }}
          >
            Request sample
          </button>
        </div>
      </div>
    </div>
  );
});

