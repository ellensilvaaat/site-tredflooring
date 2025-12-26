// src/components/Products/ProductCards.jsx

import React, {
  useState,
  useContext,
  memo,
  useMemo,
  useEffect,
  useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import { SampleCartContext } from '../../contexts/SampleCartContext';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


/* ==============================
   THUMB LAZY + IMAGEKIT OPTIMIZED
================================ */

const Thumb = memo(({ src, alt, isActive, onClick, forceLoad }) => {
  const imgRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (forceLoad) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '150px' }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [forceLoad]);

  return (
    <img
      ref={imgRef}
      src={
        shouldLoad
          ? `${src}?tr=w-80,h-80,q-60`
          : undefined
      }
      alt={alt}
      className={`pc-thumb ${isActive ? 'active' : ''}`}
      width={80}
      height={80}
      loading="lazy"
      onClick={onClick}
    />
  );
});

const THUMBS_LIMIT = 5;

/* ==============================
   PRODUCT CARD
================================ */

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
      {/* IMAGEM PRINCIPAL */}
      <div
        className="pc-card-img"
        style={{
          backgroundImage: `url(${selected.image}?tr=w-600,q-70)`
        }}
        onClick={() => onImageClick(selected.image)}
      />

      <div className="pc-card-info">
        <div className="pc-card-header">
          <h3 className="pc-collection-name">
            {selected.collectionName}
          </h3>
          <p className="pc-collection-specs">
            {(selected.specs || []).join(' / ')}
          </p>
        </div>

        {/* CORES */}
        <div className="pc-color-row">
          <p className="pc-color-label">
            Color:{' '}
            <span className="pc-color-name">
              {selected.colorName}
            </span>
          </p>

          <div className="pc-color-thumbs">
            {thumbsToShow.map((variant, idx) => (
              <Thumb
                key={variant.colorName}
                src={variant.image}
                alt={variant.colorName}
                isActive={idx === selectedIndex}
                onClick={() => setSelectedIndex(idx)}
                forceLoad={idx === selectedIndex || thumbsExpanded}
              />
            ))}

            {hasMoreThumbs && (
              <button
            className="pc-thumbs-toggle-btn"
            onClick={() => setThumbsExpanded(prev => !prev)}
              >
            {thumbsExpanded ? <FaChevronUp /> : <FaChevronDown />}
             </button>
            )}
          </div>
        </div>

        {/* ACTION */}
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


