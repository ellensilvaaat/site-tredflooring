import React from 'react';
import './ThreeImageRow.css';

export default function ThreeImageRow() {
  return (
    <section className="project-three-images">
      <div className="three-img-flex">
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/placeholder.png" alt="Image A" />
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/placeholder.png" alt="Image B" />
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/placeholder.png" alt="Image C" />
      </div>
    </section>
  );
}
