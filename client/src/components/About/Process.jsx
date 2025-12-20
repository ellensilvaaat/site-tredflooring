import React from 'react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Design',
      strong: 'Consultation',
      description: 'In-showroom or virtual, focused on your space and lifestyle.'
    },
    {
      number: '02',
      title: 'Measure',
      strong: '& Samples',
      description: 'On-site measuring, samples available on request.'
    },
    {
      number: '03',
      title: 'Tailored',
      strong: 'Quote',
      description: 'Clear, itemised pricing in 2–5 days.'
    },
    {
      number: '04',
      title: 'Project',
      strong: 'Scheduling',
      description: 'Set your start date and align the timeline together.'
    },
    {
      number: '05',
      title: 'Pro',
      strong: 'Installation',
      description: 'Old flooring removed, clean site, on-time delivery.'
    },
    {
      number: '06',
      title: 'After-care',
      strong: '& Warranty',
      description: 'Maintenance guidance + 20–25-year warranties (varies by product).'
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">
          Our <span>Process</span>
        </h2>

        <div className="process-grid">
          <div className="process-steps">
            {steps.slice(0, 3).map((step, idx) => (
              <div key={idx} className="process-step process-left">
                <h3>{step.number}</h3>
                <h4>{step.title}<strong>{step.strong}</strong></h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="process-image">
            <img src="https://ik.imagekit.io/ijsd2xvnc/process-img.png" alt="Process illustration" />
          </div>

          <div className="process-steps">
            {steps.slice(3).map((step, idx) => (
              <div key={idx} className="process-step process-right">
                <h3>{step.number}</h3>
                <h4>{step.title}<strong>{step.strong}</strong></h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
