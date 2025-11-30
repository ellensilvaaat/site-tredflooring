import React from 'react';
import './ImageGallery.css';

export default function ImageGallery() {
  return (
    <section className="project-gallery">
      <div className="gallery-grid">
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/placeholder.png"" alt="Gallery image 1" />
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/placeholder.png"" alt="Gallery image 2" />
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/placeholder.png"" alt="Gallery image 3" />
      </div>
    </section>
  );
}
