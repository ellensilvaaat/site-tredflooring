// src/components/SkirtingBoards/SkirtingProducts.jsx

import React, {
  useState,
  useEffect,
  useContext,
  memo,
  useMemo
} from "react";
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
    loading="lazy"
    decoding="async"
    fetchpriority="low"
    width={50}
    height={50}
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

  const thumbsToShow = useMemo(() => {
    if (!thumbsExpanded) return group.slice(0, THUMBS_LIMIT);
    return group;
  }, [thumbsExpanded, group]);

  return (
    <div className="sk-card">
      {/* IMAGEM PRINCIPAL — AGORA COM LAZY LOAD */}
      <div className="sk-card-img">
        <img
          src={selected.image}
          alt={selected.colorName}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          onClick={() => onImageClick(selected.image)}
        />
      </div>

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
            {thumbsToShow.map((variant, idx) => (
              <Thumb
                key={variant.colorName}
                src={variant.image}
                alt={variant.colorName}
                isActive={idx === selectedIndex}
                onClick={() => setSelectedIndex(idx)}
              />
            ))}

            {group.length > THUMBS_LIMIT && (
              <button
                className="sk-thumbs-toggle-btn"
                onClick={() => setThumbsExpanded(v => !v)}
              >
                {thumbsExpanded ? "▲" : "▼"}
              </button>
            )}
          </div>
        </div>

        <button
          className="sk-request-button"
          onClick={() => {
            addQuote({
              id: selected.id ?? `${selected.collectionName}-${selected.colorName}`,
              name: selected.collectionName,
              color: selected.colorName,
              size: selected.specs?.[0] ?? "N/A",
              image: selected.image
            });
            navigate("/request-samples");
          }}
        >
          Get a quote
        </button>
      </div>
    </div>
  );
});

export default function SkirtingProducts() {
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [visibleCount, setVisibleCount] = useState(isMobile ? 3 : 4);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    setVisibleCount(isMobile ? 3 : 4);
  }, [isMobile]);

  const displayGroups = allSkirtingCollections.slice(0, visibleCount);

  return (
    <section className="sk-section">
      <div className="sk-container">
        <p className="sk-intro">Browse our skirting board collections</p>

        <div className="sk-grid">
          {displayGroups.map(col => (
            <ProductCard
              key={col.collectionName}
              group={col.variants.map(v => ({
                ...v,
                collectionName: col.collectionName,
                specs: v.specs || col.specs || []
              }))}
              onImageClick={setModalImage}
            />
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="sk-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="sk-modal-content">
            <button className="sk-modal-close-btn">×</button>
            <img src={modalImage} alt="Preview" className="sk-modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

