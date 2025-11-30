import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Collections.css';

const collectionsData = [
  { id: 1, title: 'Hardwood Collection',   img: '/collections/hardwood-collection.jpg', slug: 'hardwood-collection' },
  { id: 2, title: 'Prestige Oak',         img: '/collections/Prestige-Oak.jpg',        slug: 'prestige-oak'       },
  { id: 3, title: 'Herringbone',           img: '/collections/Herringbone.jpg',         slug: 'herringbone'         },
  { id: 4, title: 'Chevron',               img: '/collections/Chevron.jpg',             slug: 'chevron'             },
  { id: 5, title: 'Village Oak',           img: '/collections/Village-Oak.jpg',         slug: 'village-oak'         },
  { id: 6, title: 'Australian Timber',     img: '/collections/Australian-Timber.jpg',   slug: 'australian-timber'   },
];

export default function Collections() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const navigate = useNavigate();

  const prev = () => {
    setStartIndex(i => Math.max(i - 1, 0));
  };
  const next = () => {
    setStartIndex(i => Math.min(i + 1, collectionsData.length - visibleCount));
  };

  const visibleItems = collectionsData.slice(startIndex, startIndex + visibleCount);

  const handleClick = (slug) => {
    navigate(`/collections/${slug}`);
  };

  return (
    <section className="collections-section">
      <div className="collections-header">
        <h2 className="title">Collections</h2>
        <p className="subtitle">
          Refined surfaces for every project, <span className="mobile-hide-br"><br /></span>
          from specification to installation.
        </p>
      </div>

      <div className="collections-gallery-wrapper">
        <button className="nav-arrow prev" onClick={prev} disabled={startIndex === 0}>
          ‹
        </button>

        <div className="collections-gallery">
          {visibleItems.map(item => (
            <div
              key={item.id}
              className="collection-card"
              onClick={() => handleClick(item.slug)}
            >
              <img src={item.img} alt={item.title} />
              <div className="card-title">{item.title}</div>
            </div>
          ))}
        </div>

        <button className="nav-arrow next" onClick={next} disabled={startIndex + visibleCount >= collectionsData.length}>
          ›
        </button>
      </div>
    </section>
  );
}
