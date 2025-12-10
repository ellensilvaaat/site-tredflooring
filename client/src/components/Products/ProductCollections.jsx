import React, { useState, useEffect, useContext, memo, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCollectionsClean.css';

import { SampleCartContext } from '../../contexts/SampleCartContext';

import {
  deMarqueOakWidePlank2200,
  deMarqueOakWidePlank2400,
  villageOak,
  easiPlank,
  aspire,
  oakleaf,
  kulak60,
  kulak120,
  mayastone,
  hardwoodCollectionHA,
  hardwoodCollectionHR,
  prestigeOakCollection,
  herringboneCollection,
  chevronCollection,
  australianTimberCollection,
  everstone,
  woodlandCollection,
  mywoodCollection
} from '../../data/extraProducts';

const allProducts = [
  ...deMarqueOakWidePlank2200.variants.map(v => ({
    ...v,
    collectionName: deMarqueOakWidePlank2200.collectionName,
    type: deMarqueOakWidePlank2200.type,
    specs: deMarqueOakWidePlank2200.specs
  })),
  ...deMarqueOakWidePlank2400.variants.map(v => ({
    ...v,
    collectionName: deMarqueOakWidePlank2400.collectionName,
    type: deMarqueOakWidePlank2400.type,
    specs: deMarqueOakWidePlank2400.specs
  })),
  ...villageOak.variants.map(v => ({
    ...v,
    collectionName: villageOak.collectionName,
    type: villageOak.type,
    specs: villageOak.specs
  })),
  ...easiPlank.variants.map(v => ({
    ...v,
    collectionName: easiPlank.collectionName,
    type: easiPlank.type,
    specs: easiPlank.specs
  })),
  ...aspire.variants.map(v => ({
    ...v,
    collectionName: aspire.collectionName,
    type: aspire.type,
    specs: aspire.specs
  })),
  ...oakleaf.variants.map(v => ({
    ...v,
    collectionName: oakleaf.collectionName,
    type: oakleaf.type,
    specs: oakleaf.specs
  })),
  ...hardwoodCollectionHA.variants.map(v => ({
    ...v,
    collectionName: hardwoodCollectionHA.collectionName,
    type: hardwoodCollectionHA.type,
    specs: hardwoodCollectionHA.specs
  })),
  ...hardwoodCollectionHR.variants.map(v => ({
    ...v,
    collectionName: hardwoodCollectionHR.collectionName,
    type: hardwoodCollectionHR.type,
    specs: hardwoodCollectionHR.specs
  })),
  ...prestigeOakCollection.variants.map(v => ({
    ...v,
    collectionName: prestigeOakCollection.collectionName,
    type: prestigeOakCollection.type,
    specs: prestigeOakCollection.specs
  })),
  ...herringboneCollection.variants.map(v => ({
    ...v,
    collectionName: herringboneCollection.collectionName,
    type: herringboneCollection.type,
    specs: herringboneCollection.specs
  })),
  ...chevronCollection.variants.map(v => ({
    ...v,
    collectionName: chevronCollection.collectionName,
    type: chevronCollection.type,
    specs: chevronCollection.specs
  })),
  ...australianTimberCollection.variants.map(v => ({
    ...v,
    collectionName: australianTimberCollection.collectionName,
    type: australianTimberCollection.type,
    specs: australianTimberCollection.specs
  })),
  ...everstone.variants.map(v => ({
    ...v,
    collectionName: everstone.collectionName,
    type: everstone.type,
    specs: everstone.specs
  })),
  ...woodlandCollection.variants.map(v => ({
    ...v,
    collectionName: woodlandCollection.collectionName,
    type: woodlandCollection.type,
    specs: woodlandCollection.specs
  })),
  ...mywoodCollection.variants.map(v => ({
    ...v,
    collectionName: mywoodCollection.collectionName,
    type: mywoodCollection.type,
    specs: mywoodCollection.specs
  })),
  // últimos coleções
  ...kulak60.variants.map(v => ({
    ...v,
    collectionName: kulak60.collectionName,
    type: kulak60.type,
    specs: kulak60.specs
  })),
  ...kulak120.variants.map(v => ({
    ...v,
    collectionName: kulak120.collectionName,
    type: kulak120.type,
    specs: kulak120.specs
  })),
  ...mayastone.variants.map(v => ({
    ...v,
    collectionName: mayastone.collectionName,
    type: mayastone.type,
    specs: mayastone.specs
  }))
];

const Thumb = React.memo(({ src, alt, isActive, onClick }) => (
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

const ProductCard = memo(({ group, onImageClick }) => {
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

export default function ProductCollections() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({ type: '', specs: [] });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const desktopItemsPerPage = 8;
  const mobileItemsPerPage = 3;

  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(
    isMobile ? mobileItemsPerPage : desktopItemsPerPage
  );

  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const navigate = useNavigate();
  const { addSample } = useContext(SampleCartContext);

  // 👇 Atualiza isMobile, mas não reseta visibleCount se "load more" já foi clicado
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 👇 Só reseta visibleCount se "load more" ainda não foi clicado
  useEffect(() => {
    setPage(1);
    if (!loadMoreClicked) {
      setVisibleCount(isMobile ? mobileItemsPerPage : desktopItemsPerPage);
    }
  }, [searchTerm, activeFilters.type, activeFilters.specs.length, isMobile]);

  // 👇 Botão "ir pro topo" visível apenas após scroll e se já clicou no Load More
  useEffect(() => {
    if (!loadMoreClicked) return;
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [loadMoreClicked]);

  const normalize = (str = '') => str.toLowerCase().trim();

  const grouped = allProducts.reduce((acc, product) => {
    const key = `${product.collectionName}_${product.type}_${(
      product.specs || []
    ).join('|')}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
  }, {});
  const allGroups = Object.values(grouped);

  const filtered = allGroups.filter(group => {
    const product = group[0];

    const matchesSearch =
      normalize(product.collectionName).includes(normalize(searchTerm)) ||
      group.some(v =>
        normalize(v.colorName || '').includes(normalize(searchTerm))
      );

    const matchesType = activeFilters.type
      ? normalize(product.type || '').includes(normalize(activeFilters.type))
      : true;

    const specs = product.specs || [];

    const matchesSpecs =
      activeFilters.specs.length > 0
        ? activeFilters.specs.every(spec => specs.includes(spec))
        : true;

    return matchesSearch && matchesType && matchesSpecs;
  });

  const pageCount = Math.max(
    1,
    Math.ceil(filtered.length / desktopItemsPerPage)
  );

  const paginated = filtered.slice(
    (page - 1) * desktopItemsPerPage,
    page * desktopItemsPerPage
  );

  const displayGroups = isMobile
    ? filtered.slice(0, visibleCount)
    : paginated;

  const toggleFilterSpec = spec => {
    setActiveFilters(prev => {
      const exists = prev.specs.includes(spec);
      return {
        ...prev,
        specs: exists
          ? prev.specs.filter(s => s !== spec)
          : [...prev.specs, spec]
      };
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveFilters({ type: '', specs: [] });
    setFiltersOpen(false);
    setLoadMoreClicked(false); // reset se limpar
  };



  return (
    <section className="pc-section">
      <div className="pc-container">
        <p className="pc-intro">
          Design‑led ranges in carpet, engineered and solid timber, hybrid and
          laminate.
          <br />
          Built to last, specified with care.
        </p>

        <div className="pc-filter-bar">
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pc-filter-barr"
          />
          <div className="product-filters-button" onClick={() => setFiltersOpen(true)}>
  Filters ▾
</div>

<button className="product-search-button" type="button">
  <img
    src="https://site-tredflooring-assets.s3.amazonaws.com/search-icon.png"
    alt="Search"
    style={{ width: '20px', height: '20px' }}
  />
</button>
        </div>

        <div className="pc-grid">
          {displayGroups.map(group => {
            const groupKey = `${group[0].collectionName}_${group[0].type}_${(
              group[0].specs || []
            ).join('|')}`;
            return (
              <ProductCard
                key={groupKey}
                group={group}
                onImageClick={setModalImage}
              />
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="pc-no-results">
            <p>No products found matching your search/filters.</p>
          </div>
        )}

        {!isMobile && filtered.length > 0 && (
          <div className="pc-pagination">
            <button
              className="pc-page-arrow"
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              ‹
            </button>
            {Array.from({ length: pageCount }).map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  className={`pc-page-num ${page === pageNum ? 'active' : ''}`}
                  onClick={() => setPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              className="pc-page-arrow"
              onClick={() => setPage(p => Math.min(p + 1, pageCount))}
              disabled={page === pageCount}
            >
              ›
            </button>
          </div>
        )}

        {isMobile && visibleCount < filtered.length && (
        <button
          className="pc-load-more-button"
          onClick={() => {
            setVisibleCount(prev => prev + mobileItemsPerPage);
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
              src={modalImage}
              alt="Preview"
              className="pc-modal-image"
            />
          </div>
        </div>
      )}

      {filtersOpen && (
  <div className="product-filters-modal-backdrop" onClick={() => setFiltersOpen(false)}>
    <div className="product-filters-modal" onClick={e => e.stopPropagation()}>
      
      <button className="product-filters-close-btn" onClick={() => setFiltersOpen(false)}>
        ×
      </button>

      <h3>Filters</h3>

      <div className="product-filter-group">
        <label className="product-filter-type">Type:</label>
        <select
          value={activeFilters.type}
          onChange={e => setActiveFilters(prev => ({
            ...prev,
            type: e.target.value
          }))}
        >
          <option value="">All</option>
          <option value="Engineered Timber">Engineered Timber</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Laminate">Laminate</option>
          <option value="Vinyl">Vinyl</option>
          <option value="Timber Tiles">Timber Tiles</option>
        </select>
      </div>

      <div className="product-filter-group">
        <label className="product-filter-gp">Specifications:</label>

        {[
          'AC4',
          'Oak Veneer',
          'UV Lacquered'
        ].map(spec => (
          <div key={spec} className="product-filter-checkbox-row">
            <input
             type="checkbox"
             id={`spec-${spec}`}
             value={spec}
             checked={activeFilters.specs.includes(spec)}
             onChange={() => toggleFilterSpec(spec)}
            />
            <label htmlFor={`spec-${spec}`}>{spec}</label>
          </div>
        ))}
      </div>

      <div className="product-filter-actions">
        <button className="product-clear-filters-btn" onClick={clearFilters}>
          Clear
        </button>
        <button className="product-apply-filters-btn" onClick={() => setFiltersOpen(false)}>
          Apply
        </button>
      </div>

    </div>
  </div>
)}
{isMobile && showScrollTop && (
        <button
          className="scroll-to-top-button"
          onClick={() => {
            const section = document.querySelector('.pc-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          ↑ Top
        </button>
      )}

    </section>
  );
}

