import './FeaturedProjects.css';

export default function FeaturedProjects() {
  const projects = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    img: "https://site-tredflooring-assets.s3.amazonaws.com/bg.png"',
    title: `Project ${i + 1}`,
  }));

  return (
    <section className="featured-projects">
      <div className="projects-gallery">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.img} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>

      <div className="projects-text">
        <div className="title-wrapper">
          <div className="line top-left"></div>
          <h2>
            <strong>Featured</strong><br />
            <span>projects</span>
          </h2>
          <div className="line bottom-right"></div>
        </div>
        <p>
          From brief to final polish, see <br />
          what the right floor delivers.
        </p>
      </div>
    </section>
  );
}
