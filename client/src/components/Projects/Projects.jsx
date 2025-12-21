import React, { useState } from 'react';
import './Projects.css';

const allProjects = [
  {
    id: 1,
    title: 'Wollstonecraft',
    category: 'Stairs',
    images: [
      "https://site-tredflooring-assets.s3.ap-southeast-2.amazonaws.com/imgwo.jpeg"
    ],
    description: 'Elegant wooden staircase featuring warm-toned planks that highlight natural grain and refined craftsmanship.'
  },
  {
    id: 2,
    title: 'Surry Hills',
    category: 'Bedroom',
    images: [
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/surryhills/living.jpg",
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/surryhills/bedroom.jpg",
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/surryhills/bedroom2.jpg"
    ],
    description: 'Soft-toned timber flooring brings warmth and continuity to compact bedroom and living spaces.'
  },
   {
    id: 3,
    title: 'Pyrmont',
    category: 'Kitchen',
    images: [
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/pyrmont/kitchen.jpg",
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/pyrmont/hall.jpg",
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/pyrmont/kitchen1.jpg"
    ],
    description: 'Refined timber floors elevate both kitchen and hallway with a sleek, contemporary finish.'
  },
  {
    id: 4,
    title: 'Annandale',
    category: 'Bedroom',
    images: [
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/annandale/bedroom.jpg",
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/annandale/kitchen.jpg",
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/annandale/living.jpg",
      "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/annandale/stairs.jpg"
    ],
    description: 'Warm-toned bedroom flooring that enhances comfort and style.'
  },
  {
  id: 5,
  title: 'Cremorne',
  category: 'Living',
  images: [
    "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/cremorne/kitchen.jpg",
    "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/cremorne/living.jpg"
  ],
  description: 'Elegant living room flooring combining warmth and timeless texture.'
},
{
  id: 6,
  title: 'Liberty Grove',
  category: 'Living',
  images: [
    "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/libertygrove/living.jpg",
    "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/libertygrove/living1.jpg",
    "https://site-tredflooring-assets.s3.amazonaws.com/projectspage/libertygrove/kitchen.jpg"
  ],
  description: 'Warm timber floors extend seamlessly across open-plan living and kitchen areas.'
},
{
  id: 7,
  title: 'Bondi Beach',
  category: 'Living',
  images: [
    "https://ik.imagekit.io/ijsd2xvnc/c3e94cd3-564d-491c-92d8-add202f9b35d.jpg"
  ],
  description: 'Warm timber flooring bringing natural texture and continuity to the living space.'
},
{
  id: 8,
  title: 'Rosebery',
  category: 'Living',
  images: [
    "https://ik.imagekit.io/ijsd2xvnc/d1a9c42d-e269-4271-8773-461ca801727d.jpg"
  ],
  description: 'Soft-toned flooring creating a calm and modern atmosphere.'
},
{
  id: 9,
  title: 'Randwick',
  category: 'Bedroom',
  images: [
    "https://ik.imagekit.io/ijsd2xvnc/ff3676a4-6b98-4f28-b655-2777320b0333.jpg"
  ],
  description: 'Classic timber floors adding warmth and character to a timeless interior.'
}
];

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [activeCat, setActiveCat] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeCat === 'All'
    ? allProjects
    : allProjects.filter(p =>
        p.category === activeCat ||
        p.images.some(img => img.toLowerCase().includes(activeCat.toLowerCase()))
      );

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const categories = ['All', 'Kitchen', 'Living', 'Bedroom', 'Stairs'];

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
          <ProjectCard key={proj.id} proj={proj} activeFilter={activeCat} />
        ))}
      </div>

      <div className="proj-pagination">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>‹</button>
        {Array.from({ length: pageCount }).map((_, idx) => {
          const pnum = idx + 1;
          return (
            <button
              key={pnum}
              className={page === pnum ? 'active' : ''}
              onClick={() => setPage(pnum)}
            >
              {pnum}
            </button>
          );
        })}
        <button onClick={() => setPage(p => Math.min(p + 1, pageCount))} disabled={page === pageCount}>›</button>
      </div>
    </section>
  );
}

function ProjectCard({ proj, activeFilter }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.isArray(proj.images) ? [...proj.images] : [];
  if (activeFilter !== 'All') {
    const idx = images.findIndex(img =>
      img.toLowerCase().includes(activeFilter.toLowerCase())
    );
    if (idx > 0) {
      const [match] = images.splice(idx, 1);
      images.unshift(match);
    }
  }

  const total = images.length;

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex(i => (i - 1 + total) % total);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex(i => (i + 1) % total);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="proj-card">
      <div className="proj-carousel">
        {currentImage ? (
          <div
            className="proj-carousel-img"
            style={{ backgroundImage: `url(${currentImage})` }}
          />
        ) : (
          <div className="proj-carousel-placeholder">No image available</div>
        )}
        {total > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prev}>‹</button>
            <button className="carousel-btn next" onClick={next}>›</button>
          </>
        )}
      </div>
      <div className="proj-content">
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
      </div>
    </div>
  );
}

