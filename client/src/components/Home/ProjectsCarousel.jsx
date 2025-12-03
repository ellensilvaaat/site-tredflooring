import React from 'react'
import './ProjectsCarousel.css'

const projects = [
  {
    id: 1,
    title: 'Pyrmont',
    image: "https://site-tredflooring-assets.s3.amazonaws.com/projects/proj6.jpg",
    //scope: 'Surry Hills – open-plan design, new kitchen, timber finishes.',
  },
  {
    id: 2,
    title: 'Cremorne',
    image: "https://site-tredflooring-assets.s3.amazonaws.com/projects/proj2.jpg",
    //scope:'Palm Beach – luxury villa transform, indoor/outdoor flow, pool extension and smart home systems.',
  },
  {
    id: 3,
    title: 'Surry Hills',
    image: "https://site-tredflooring-assets.s3.amazonaws.com/projects/proj3.jpg",
    //scope: 'Luxury Hybrid Sandy Beach delivers a matte EIR finish with crystal non-slip texture, creating a durable, stylish surface ideal for modern living',
  },
  {
    id: 4,
    title: 'Annandale',
    image: "https://site-tredflooring-assets.s3.amazonaws.com/projects/proj4.jpg",
    //scope:'Newtown – heritage compliance, bathroom rebuild, facade restoration.',
  },
  {
    id: 5,
    title: 'Liberty Grove',
    image: "https://site-tredflooring-assets.s3.amazonaws.com/projects/proj5.jpg",
    //scope:'Sydney CBD – full fit-out, acoustic upgrades, lighting automation.',
  },
  {
    id: 6,
    title: 'Cremorne',
    image: "https://site-tredflooring-assets.s3.amazonaws.com/projects/proj1.jpg",
    //scope:'Northcote Avenue, Caringbah South – kitchen + bathroom updates, joinery, approvals, scheduling.',
  },
]

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
                <p className="project-card__description">{project.scope}</p>
              </div>
            </div>

            {/* Título abaixo da imagem (só aparece em mobile/tablet via CSS) */}
            <h3 className="project-card__title--mobile">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

