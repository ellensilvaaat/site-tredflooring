import React from 'react';
import './InfoSection.css';

export default function InfoSection() {
  return (
    <section className="project-intro">
      <div className="intro-text">
        <h2>About This Project</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet massa ac
          nisl vestibulum, sit amet imperdiet purus facilisis. Sed sit amet arcu sit amet orci
          vulputate posuere.
        </p>
      </div>
      <div className="intro-image">
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/placeholder.png" alt="Project intro placeholder" />
      </div>
    </section>
  );
}
