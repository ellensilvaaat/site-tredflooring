import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback
} from 'react';
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
  mywoodCollection,
  felicity,
  alisa,
  villura,
  hadleigh,
  beltana,
  thor,
  sven,
  nobby,
  mainland,
  jaro,
  coco,
  brit,
  boden,
  beck,
  alta,
  alps
} from '../../data/extraProducts';

import { ProductCard } from './ProductCards';

// 👇 Lista de todas as coleções a agrupar
const collections = [
  deMarqueOakWidePlank2200,
  deMarqueOakWidePlank2400,
  villageOak,
  easiPlank,
  aspire,
  oakleaf,
  hardwoodCollectionHA,
  hardwoodCollectionHR,
  prestigeOakCollection,
  herringboneCollection,
  chevronCollection,
  australianTimberCollection,
  everstone,
  woodlandCollection,
  mywoodCollection,
  kulak60,
  kulak120,
  mayastone,
  felicity,
  alisa,
  villura,
  hadleigh,
  beltana,
  thor,
  sven,
  nobby,
  mainland,
  jaro,
  coco,
  brit,
  boden,
  beck,
  alta,
  alps
];

// 👇 Cria um array plano com todas as variantes
const allProducts = collections.flatMap(col =>
  col.variants.map(v => ({
    ...v,
    collectionName: col.collectionName,
    type: col.type,
    specs: col.specs || []
  }))
);

export default function ProductCollections() {
  const { addSample } = useContext(SampleCartContext);
  const navigate = useNavigate();

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

  // 👇 Atualiza isMobile quando a tela redimensiona
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 👇 Reset visibleCount ao alternar mobile/desktop
  useEffect(() => {
    setVisibleCount(isMobile ? mobileItemsPerPage : desktopItemsPerPage);
    setLoadMoreClicked(false);
  }, [isMobile]);

  // 👇 Mostra botão scroll-top depois de load more
  useEffect(() => {
    if (!loadMoreClicked) return;
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [loadMoreClicked]);

  const normalize = useCallback(str => str.toLowerCase().trim(), []);

  // 👇 Agrupa produtos por coleção, tipo e specs
  const grouped = useMemo(() => {
    const map = {};
    allProducts.forEach(product => {
      const key = `${product.collectionName}_${product.type}_${(
        product.specs || []
      ).join('|')}`;
      if (!map[key]) map[key] = [];
      map[key].push(product);
    });
    return Object.values(map);
  }, []);

  // 👇 Filtragem por search + filtros ativos
  const filtered = useMemo(() => {
    return grouped.filter(group => {
      const product = group[0];

      const matchesSearch = [
        product.collectionName,
        product.type,
        ...(product.specs || []),
        ...group.map(v => v.colorName)
      ]
        .map(normalize)
        .some(field => field.includes(normalize(searchTerm)));

      const matchesType = activeFilters.type
        ? normalize(product.type).includes(normalize(activeFilters.type))
        : true;

      const specsMatch =
        activeFilters.specs.length > 0
          ? activeFilters.specs.every(spec =>
              product.specs.includes(spec)
            )
          : true;

      return matchesSearch && matchesType && specsMatch;
    });
  }, [grouped, searchTerm, activeFilters, normalize]);

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
    setLoadMoreClicked(false);
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
          <div
            className="product-filters-button"
            onClick={() => setFiltersOpen(true)}
          >
            Filters ▾
          </div>

          <button className="product-search-button" type="button">
            <img
              src="https://ik.imagekit.io/ijsd2xvnc/search-icon.png"
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
        <div
          className="product-filters-modal-backdrop"
          onClick={() => setFiltersOpen(false)}
        >
          <div
            className="product-filters-modal"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="product-filters-close-btn"
              onClick={() => setFiltersOpen(false)}
            >
              ×
            </button>

            <h3>Filters</h3>

            <div className="product-filter-group">
              <label className="product-filter-type">Type:</label>
              <select
                value={activeFilters.type}
                onChange={e =>
                  setActiveFilters(prev => ({
                    ...prev,
                    type: e.target.value
                  }))
                }
              >
                <option value="">All</option>
                <option value="Engineered Timber">Engineered Timber</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Laminate">Laminate</option>
                <option value="Vinyl">Vinyl</option>
                <option value="Timber Tiles">Timber Tiles</option>
                <option value="Carpet">Carpet</option>
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


