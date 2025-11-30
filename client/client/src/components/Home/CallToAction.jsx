import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-wrapper">
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/cta-background.jpg"" alt="Room" className="cta-image" />
        <div className="cta-overlay">
          <h2>Ready to begin?</h2>
          <p>
            Book a measure and a no-obligation quote. A specialist guides you
            from specification to install, zero guesswork.
          </p>
          <button onClick={() => window.location.href = '/contact'}>Talk to a Specialist</button>
        </div>
      </div>
    </section>
  );
}

