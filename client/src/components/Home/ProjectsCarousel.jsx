import React from 'react';
import './ProjectsCarousel.css';

const projects = [
  { id: 1, title: 'Pyrmont', image: "https://ik.imagekit.io/ijsd2xvnc/proj6.jpg" },
  { id: 2, title: 'Cremorne', image: "https://ik.imagekit.io/ijsd2xvnc/proj2.jpg" },
  { id: 3, title: 'Surry Hills', image: "https://ik.imagekit.io/ijsd2xvnc/proj3.jpg" },
  { id: 4, title: 'Annandale', image: "https://ik.imagekit.io/ijsd2xvnc/proj4.jpg" },
  { id: 5, title: 'Liberty Grove', image: "https://ik.imagekit.io/ijsd2xvnc/proj5.jpg" },
  { id: 6, title: 'Cremorne', image: "https://ik.imagekit.io/ijsd2xvnc/proj1.jpg" },
];

export default function ProjectsCarousel() {
  return (
    <section className="project-carousel">
      <h2 className="project-carousel__title">Recent Projects</h2>
      <div className="projects_underline"></div>

      <div className="project-carousel__container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-card__image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-card__overlay">
                <h3 className="project-card__title">{project.title}</h3>
              </div>
            </div>
            <h3 className="project-card__title--mobile">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}


