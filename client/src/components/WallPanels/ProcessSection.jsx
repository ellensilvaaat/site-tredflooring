import React from 'react';
import './ProcessSection.css';

const steps = [
  {
    id: 1,
    title: 'Choose your finish',
    description:
      'Select the texture and look that matches your space, slatted, grooved, smooth or textured panels.',
    img: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/examples/process-step1.jpg",
  },
  {
    id: 2,
    title: 'Measure & plan',
    description:
      'Accurate measurements and layout planning guarantee a seamless and proper installation.',
    img: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/examples/process-step2.jpg",
  },
  {
    id: 3,
    title: 'Install panels',
    description:
      'Fix and align the wall panels precisely for flawless surfaces and hidden joins.',
    img: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/examples/process-step3.jpg",
  },
  {
    id: 4,
    title: 'Final touches',
    description:
      'Finish with trims, lighting or decorative elements to complete the look.',
    img: "https://site-tredflooring-assets.s3.amazonaws.com/wallpanels/examples/process-step4.jpg",
  },
];

export default function ProcessSection() {
  return (
    <section className="wp-process">
      <h2 className="wp-process-title">Our Installation Process</h2>

      <div className="wp-process-steps">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`wp-process-step ${idx % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="wp-process-image">
              <img src={step.img} alt={step.title} />
            </div>
            <div className="wp-process-text">
              <h3>
                <span className="step-numberr">0{step.id}</span> {step.title}
              </h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
