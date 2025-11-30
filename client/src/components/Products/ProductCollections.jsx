import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCollections.css';
import { SampleCartContext } from '../../contexts/SampleCartContext';

import collectionsProducts from '../../data/collectionsProducts';
import extraProducts from '../../data/extraProducts';

const collectionProductList = Object.values(collectionsProducts).flat();
const allProducts = [...collectionProductList, ...extraProducts];
const allProductsFiltered = allProducts.filter(
  product => !collectionProductList.includes(product)
);

const ITEMS_PER_PAGE = 12;

export default function ProductCollections() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: '',
    specs: []
  });
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const { addSample } = useContext(SampleCartContext);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, activeFilters.type, activeFilters.specs.length]);

  const filtered = allProductsFiltered.filter(col => {
    const matchesSearch = col.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeFilters.type ? col.type === activeFilters.type : true;
    const matchesSpecs = activeFilters.specs.length > 0
      ? activeFilters.specs.every(spec => col.specs.includes(spec))
      : true;
    return matchesSearch && matchesType && matchesSpecs;
  });

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const toggleFilterSpec = (spec) => {
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
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setFiltersOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="product-collections-section">
      <div className="product-collections-container">
        <p className="product-collections-intro">
          Design‑led ranges in carpet, engineered and solid timber, hybrid and laminate.<span className="mobile-hide-br"><br /></span>
          Built to last, specified with care.
        </p>

        <div className="product-collections-filter-bar">
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
            }}
          />
          <div
            className="product-filters-button"
            onClick={() => setFiltersOpen(true)}
          >
            Filters ▾
          </div>
          <button className="product-search-button">
            <img src="https://site-tredflooring-assets.s3.amazonaws.com/search-icon.png" alt="Search" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        <div className="product-collections-grid">
          {paginated.map(col => (
            <div key={col.id} className="product-collection-card">
              <div
                className={`product-collection-bg ${
                  /kulak/i.test(col.image) ? 'kulak-product' : ''
                }`}
                style={{ backgroundImage: `url(${col.image})` }}
              />
              <div className="product-collection-overlay">
                <h3>{col.name}</h3>
                <p>{col.type}</p>
                <p>{col.specs.join(' / ')}</p>
                <button
                  className="product-request-button"
                  onClick={() => {
                    addSample({
                      id: col.id,
                      name: col.name,
                      type: col.type,
                      specs: col.specs,
                      image: col.image
                    });
                    navigate('/request-samples');
                  }}
                >
                  Request samples
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="product-pagination">
          <button
            className="page-arrow"
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
                className={`page-num ${page === pageNum ? 'active' : ''}`}
                onClick={() => setPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
          <button
            className="page-arrow"
            onClick={() => setPage(p => Math.min(p + 1, pageCount))}
            disabled={page === pageCount}
          >
            ›
          </button>
        </div>
      </div>

      {filtersOpen && (
        <div className="product-filters-modal-backdrop" onClick={() => setFiltersOpen(false)}>
          <div className="product-filters-modal" onClick={e => e.stopPropagation()}>
            <button className="product-filters-close-btn" onClick={() => setFiltersOpen(false)}>×</button>
            <h3>Filters</h3>
            <div className="product-filter-group">
              <label className="product-filter-type">Type:</label>
              <select
                value={activeFilters.type}
                onChange={e =>
                  setActiveFilters(prev => ({ ...prev, type: e.target.value }))
                }
              >
                <option value="">All</option>
                <option value="Engineered timber">Engineered timber</option>
                <option value="Solid timber">Solid timber</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Laminate">Laminate</option>
                <option value="Vinyl / Tile / Stone">Vinyl / Tile / Stone</option>
              </select>
            </div>
            <div className="product-filter-group">
  <label className="product-filter-gp">Specifications:</label>
  {[
    'Indoor use',
    'Brushed Matt',
    'AC4',
    'Oak Veneer',
    'UV Lacquered'
  ].map(spec => (
    <div key={spec} className="product-filter-checkbox-row">
      <input
        type="checkbox"
        id={`spec-${spec}`}
        checked={activeFilters.specs.includes(spec)}
        onChange={() => toggleFilterSpec(spec)}
      />
      <label htmlFor={`spec-${spec}`}>{spec}</label>
    </div>
  ))}
            </div>
            <div className="product-filter-actions">
              <button
                className="product-clear-filters-btn"
                onClick={clearFilters}
              >
                Clear
              </button>
              <button
                className="product-apply-filters-btn"
                onClick={() => setFiltersOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


