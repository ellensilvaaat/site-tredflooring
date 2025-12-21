import './CallToAction.css';
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="call-to-action">
      <div className="cta-wrapper">
        <img
          src="https://ik.imagekit.io/ijsd2xvnc/cta-background.jpg"
          alt="Room"
          className="cta-image"
          loading="lazy"
          width="1200"
          height="500"
        />
        <div className="cta-overlay">
          <h2>Ready to begin?</h2>
          <p>
            Book a measure and a no-obligation quote. A specialist guides you
            from specification to install, zero guesswork.
          </p>
          <button onClick={() => navigate('/contact')}>
            Talk to a Specialist
          </button>
        </div>
      </div>
    </section>
  );
}

