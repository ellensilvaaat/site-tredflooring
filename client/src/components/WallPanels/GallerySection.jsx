import React from 'react';
import './GallerySection.css';

const galleryImages = [
  { id: 1, image: "https://ik.imagekit.io/ijsd2xvnc/Frame%2033.png"},
  { id: 2, image: "https://ik.imagekit.io/ijsd2xvnc/Frame%2035.png"},
  { id: 3, image: "https://ik.imagekit.io/ijsd2xvnc/Frame%2034.png" },
  { id: 4, image: "https://ik.imagekit.io/ijsd2xvnc/Frame%2031.png" },
  { id: 5, image: "https://ik.imagekit.io/ijsd2xvnc/Frame%2032.png" },
  { id: 6, image: "https://ik.imagekit.io/ijsd2xvnc/Frame%2036.png" },
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
