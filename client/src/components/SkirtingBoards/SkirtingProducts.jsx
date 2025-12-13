// src/components/SkirtingBoards/SkirtingProducts.jsx

import React, { useState, useEffect, useContext, memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./SkirtingProducts.css";

import { SampleCartContext } from "../../contexts/SampleCartContext";
import * as skirtingCollections from "../../data/fedwoodProducts";

const allSkirtingCollections = Object.values(skirtingCollections);

const Thumb = memo(({ src, alt, isActive, onClick }) => (
  <img
    src={src}
    alt={alt}
    className={`sk-thumb ${isActive ? "active" : ""}`}
    width={50}
    height={50}
    loading="lazy"
    onClick={onClick}
  />
));

const THUMBS_LIMIT = 5;

const ProductCard = memo(({ group, onImageClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbsExpanded, setThumbsExpanded] = useState(false);
  const selected = group[selectedIndex];
  const { addQuote } = useContext(SampleCartContext);
  const navigate = useNavigate();

  const hasMoreThumbs = group.length > THUMBS_LIMIT;
  const thumbsToShow = useMemo(() => (
    thumbsExpanded ? group : group.slice(0, THUMBS_LIMIT)
  ), [thumbsExpanded, group]);

  return (
    <div className="sk-card">
      <div
        className="sk-card-img"
        style={{ backgroundImage: `url(${selected.image})` }}
        onClick={() => onImageClick(selected.image)}
      />
      <div className="sk-card-info">
        <div className="sk-card-header">
          <h3 className="sk-collection-name">{selected.collectionName}</h3>
          <p className="sk-collection-specs">
            {(selected.specs || []).join(" / ")}
          </p>
        </div>

        <div className="sk-color-row">
          <p className="sk-color-label">
            Color: <span className="sk-color-name">{selected.colorName}</span>
          </p>
          <div className="sk-color-thumbs">
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
                className="sk-thumbs-toggle-btn"
                onClick={() => setThumbsExpanded(prev => !prev)}
              >
                {thumbsExpanded ? "▲" : "▼"}
              </button>
            )}
          </div>
        </div>

        <div className="sk-card-actions">
          <button
            className="sk-request-button"
            onClick={() => {
  addQuote({
    id: selected.id ?? `${selected.collectionName}-${selected.colorName}`,
    name: selected.collectionName,
    color: selected.colorName,
    size: selected.specs?.[0] ?? "N/A", // ← assume que o primeiro spec é o size
    image: selected.image
  });
  navigate("/request-samples");
}}
          >
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
});

export default function SkirtingProducts() {
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [visibleCount, setVisibleCount] = useState(isMobile ? 3 : 4);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleCount(isMobile ? 3 : 4);
  }, [isMobile]);

  const normalize = str => str.toLowerCase().trim();

  const filtered = allSkirtingCollections.filter(col => {
    const product = col.variants[0];
    return (
      normalize(col.collectionName).includes(normalize(searchTerm)) ||
      col.variants.some(v =>
        normalize(v.colorName || "").includes(normalize(searchTerm))
      )
    );
  });

  const displayGroups = filtered.slice(0, visibleCount);

  return (
    <section className="sk-section">
      <div className="sk-container">
        <p className="sk-intro">Browse our skirting board collections</p>

        <div className="sk-grid">
          {displayGroups.map(col => (
            <ProductCard
              key={`${col.collectionName}_${col.type}`}
              group={col.variants.map(v => ({
                ...v,
                collectionName: col.collectionName,
                type: col.type,
                specs: v.specs || col.specs || []
              }))}
              onImageClick={setModalImage}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="sk-no-results">
            <p>No skirting boards found.</p>
          </div>
        )}

        {modalImage && (
          <div className="sk-modal-overlay" onClick={() => setModalImage(null)}>
            <div
              className="sk-modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="sk-modal-close-btn"
                onClick={() => setModalImage(null)}
              >
                ×
              </button>
              <img src={modalImage} alt="Preview" className="sk-modal-image" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
