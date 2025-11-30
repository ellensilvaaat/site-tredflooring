import './ServicesShowcase.css';

const services = [
  { id: 1, label: 'Custom Rugs', img: "https://site-tredflooring-assets.s3.amazonaws.com/services/rug-icon.png"' },
  { id: 2, label: 'TV Units', img: "https://site-tredflooring-assets.s3.amazonaws.com/services/tv-icon.png"' },
  { id: 3, label: 'Wall Panels', img: "https://site-tredflooring-assets.s3.amazonaws.com/services/wall-icon.jpg"' },
  { id: 4, label: 'Sand & Polish', img: "https://site-tredflooring-assets.s3.amazonaws.com/services/sand-icon.jpg"' },
  { id: 5, label: 'Pavers', img: "https://site-tredflooring-assets.s3.amazonaws.com/services/pavers-icon.jpg"' },
];

export default function ServicesShowcase() {
  return (
    <section className="services-section">
      <h2 className="services-title">Explore our services</h2>
      <p className="services-subtext">
        Tred goes beyond flooring. From bespoke rugs to custom TV units and architectural panels,
        we offer tailored design elements to elevate your space.
      </p>

      <div className="services-gallery">
        {services.map(item => (
          <div key={item.id} className="services-card">
            <img className="services-img" src={item.img} alt={item.label} />
            <div className="services-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

