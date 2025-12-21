import React, {
  useState,
  useEffect,
  useContext,
  memo,
  useMemo
} from "react";
import { useNavigate } from "react-router-dom";
import "./CustomRugsProducts.css";

import { SampleCartContext } from "../../contexts/SampleCartContext";
import * as rugsCollections from "../../data/rugs";

const allCustomRugsCollections = Object.values(rugsCollections);

const THUMBS_LIMIT = 5;

/* =======================
   Thumb (miniaturas)
======================= */
const Thumb = memo(({ src, alt, isActive, onClick }) => (
  <img
    src={`${src}?tr=w-100,q-60,f-webp`}
    alt={alt}
    className={`pc-thumb ${isActive ? "active" : ""}`}
    width={50}
    height={50}
    loading="lazy"
    onClick={onClick}
  />
));

/* =======================
   Product Card
======================= */
const ProductCard = memo(({ group, onImageClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbsExpanded, setThumbsExpanded] = useState(false);

  const selected = group[selectedIndex];
  const { addSample } = useContext(SampleCartContext);
  const navigate = useNavigate();

  const hasMoreThumbs = group.length > THUMBS_LIMIT;

  const thumbsToShow = useMemo(
    () => (thumbsExpanded ? group : group.slice(0, THUMBS_LIMIT)),
    [thumbsExpanded, group]
  );

  return (
    <div className="pc-card">
      <div
        className="pc-card-img"
        style={{
          backgroundImage: `url(${selected.image}?tr=w-600,q-70,f-webp)`
        }}
        onClick={() => onImageClick(selected.image)}
      />

      <div className="pc-card-info">
        <div className="pc-card-header">
          <h3 className="pc-collection-name">{selected.collectionName}</h3>
          <p className="pc-collection-specs">
            {(selected.specs || []).join(" / ")}
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
                {thumbsExpanded ? "▲" : "▼"}
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
              navigate("/request-samples");
            }}
          >
            Request sample
          </button>
        </div>
      </div>
    </div>
  );
});

/* =======================
   Página principal
======================= */
export default function CustomRugsProducts() {
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [visibleCount, setVisibleCount] = useState(isMobile ? 3 : 4);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleCount(isMobile ? 3 : 4);
    setLoadMoreClicked(false);
  }, [isMobile]);

  useEffect(() => {
    if (!loadMoreClicked) return;
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loadMoreClicked]);

  const displayGroups = allCustomRugsCollections.slice(0, visibleCount);

  return (
    <section className="pc-section">
      <div className="pc-container">
        <p className="pc-intro">Explore our curated rug collections</p>

        <div className="pc-grid">
          {displayGroups.map(col => (
            <ProductCard
              key={col.collectionName}
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

        {visibleCount < allCustomRugsCollections.length && (
          <button
            className="pc-load-more-button"
            onClick={() => {
              setVisibleCount(prev => prev + (isMobile ? 3 : 4));
              setLoadMoreClicked(true);
            }}
          >
            Load more
          </button>
        )}
      </div>

      {modalImage && (
        <div className="pc-modal-overlay" onClick={() => setModalImage(null)}>
          <div
            className="pc-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="pc-modal-close-btn"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
            <img
              src={`${modalImage}?tr=w-1200,q-80,f-webp`}
              alt="Preview"
              className="pc-modal-image"
            />
          </div>
        </div>
      )}

      {isMobile && showScrollTop && (
        <button
          className="scroll-to-top-button"
          onClick={() => {
            const section = document.querySelector(".pc-section");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ↑ Top
        </button>
      )}
    </section>
  );
}
