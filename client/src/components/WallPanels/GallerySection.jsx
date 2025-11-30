import React from 'react';
import './GallerySection.css';

const galleryImages = [
  { id: 1, image: '/wallpanels/gallery/img1.jpg' },
  { id: 2, image: '/wallpanels/gallery/img2.jpg' },
  { id: 3, image: '/wallpanels/gallery/img3.jpg' },
  { id: 4, image: '/wallpanels/gallery/img4.jpg' },
  { id: 5, image: '/wallpanels/gallery/img5.jpg' },
  { id: 6, image: '/wallpanels/gallery/img6.jpg' },
];

export default function GallerySection() {
  return (
    <section className="gallery-carousel">
      <h2 className="gallery-carousel__title">Project Inspirations</h2>
      <div className="gallery_underline"></div>
      <div className="gallery-carousel__container">
        {galleryImages.map((item) => (
          <div className="gallery-card" key={item.id}>
            <div
              className="gallery-card__image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
