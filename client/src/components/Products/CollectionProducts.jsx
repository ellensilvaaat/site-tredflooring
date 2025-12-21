import React, { useContext, useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CollectionProducts.css';
import { SampleCartContext } from '../../contexts/SampleCartContext';
import collectionsProducts from '../../data/collectionsProducts';

const ITEMS_PER_PAGE = 8;

export default function CollectionProducts() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addSample } = useContext(SampleCartContext);

  const products = collectionsProducts[slug] || [];

  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE);

  const paginated = products.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    setPage(1); // reset na troca de coleção
  }, [slug]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    const handleScroll = () => {
      const top = sectionRef.current?.getBoundingClientRect().top;
      setShowScrollTop(top && top < -200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="product-collections-section" ref={sectionRef}>
      <div className="product-collections-container">
        <h2 className="product-collections-title">
          {slug.replace(/-/g, ' ')}
        </h2>

        <button className="return-home-btnn" onClick={() => navigate('/')}>
          ← Return to Home
        </button>

        <div className="product-collections-grid">
          {paginated.map(col => (
            <div key={col.id} className="product-collection-card">
              <img
                src={`${col.image}?tr=w-600,q=70`}
                alt={col.name}
                loading="lazy"
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

      {isMobile && showScrollTop && (
        <button
          className="scroll-to-top-button"
          onClick={() => {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          ↑ Top
        </button>
      )}
    </section>
  );
}
