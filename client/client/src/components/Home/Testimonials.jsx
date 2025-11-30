import React, { useRef } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const scrollRef = useRef(null);

  return (
    <section className="testimonials-section">
      {/* Texto à esquerda */}
      <div className="testimonials-text">
        <h2>What Our <span className="mobile-hide-br"><br /></span>Clients Are<span className="mobile-hide-br"><br /></span> Saying</h2>
      </div>

      {/* Cards de avaliação */}
      <div ref={scrollRef} className="testimonials-gallery">
        <div className="testimonial-card">
          <h4>Michael Culbert</h4>
          <blockquote>
            I am having a full kitchen and bathroom renovation done by Richard and his team.
            So far my experience has been absolutely extraordinary. The price was competitive
            and the service exceptional. Richard and his team go the extra mile with everything
            they do. If only more businesses gave this level of service!
          </blockquote>
          <div className="stars">★★★★★</div>
        </div>

        <div className="testimonial-card">
          <h4>Emma Williams</h4>
          <blockquote>
            The Inhaus team were incredible from start to finish! Communication was clear,
            and the results exceeded expectations. Couldn’t recommend them more.
          </blockquote>
          <div className="stars">★★★★★</div>
        </div>

        <div className="testimonial-card">
          <h4>Luke Anderson</h4>
          <blockquote>
            Super professional, transparent, and detail-oriented. The whole process was smooth
            and enjoyable — I’m thrilled with my renovation.
          </blockquote>
          <div className="stars">★★★★★</div>
        </div>

        <div className="testimonial-card">
          <h4>Sarah Moore</h4>
          <blockquote>
            A great experience! Beautiful design, perfect execution, and outstanding
            communication throughout the project.
          </blockquote>
          <div className="stars">★★★★★</div>
        </div>
      </div>
    </section>
  );
}

