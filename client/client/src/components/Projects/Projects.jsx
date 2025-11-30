import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom'; // ou outro Link conforme seu router

// dados dummy de exemplo
const allProjects = Array.from({ length: 15 }).map((_, i) => {
  const categories = ['Kitchen', 'Living', 'Bedroom', 'Stairs', 'Wet areas'];
  return {
    id: i + 1,
    title: `Project ${i + 1}`,
    category: categories[i % categories.length],
    image: '/project-placeholder.png',
    description: 'Short description here.'
  };
});

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [activeCat, setActiveCat] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeCat === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCat);

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const categories = ['All', 'Kitchen', 'Living', 'Bedroom', 'Stairs', 'Wet areas'];

  return (
    <section className="proj-section">
      <div className="proj-filter-bar">
        <div className="proj-text">
  <p>Results you can feel: clear timelines, clean installs, lasting comfort.</p>
  <span>Explore our latest projects.</span>
</div>
        <div className="proj-filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`proj-filter-btn ${activeCat === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCat(cat);
                setPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="proj-grid">
        {paginated.map(proj => (
          <div key={proj.id} className="proj-card">
            <div
              className="proj-bg"
              style={{ backgroundImage: `url(${proj.image})` }}
            />
            <div className="proj-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <Link to={`/projects/${proj.id}`} className="proj-btn">See more</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="proj-pagination">
        <button
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
              className={pageNum === page ? 'active' : ''}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={() => setPage(p => Math.min(p + 1, pageCount))}
          disabled={page === pageCount}
        >
          ›
        </button>
      </div>
    </section>
  );
}

