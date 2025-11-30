import React from 'react';
import './SandPolishProcess.css';

const steps = [
  {
    id: 1,
    title: 'Initial assessment',
    description:
      'We inspect floor condition, checking for damage, moisture, and suitability for sanding/polishing.',
    img: '/sandpolish/steps/step1.jpg',
  },
  {
    id: 2,
    title: 'Preparation & cleaning',
    description:
      'Furniture and debris are removed and floor is cleaned thoroughly to ensure dust‑free sanding.',
    img: '/sandpolish/steps/step2.jpg',
  },
  {
    id: 3,
    title: 'Sanding',
    description:
      'We sand down old finish, scratches or stains using professional sanding equipment, revealing fresh wood surface.',
    img: '/sandpolish/steps/step3.jpg',
  },
  {
    id: 4,
    title: 'Polish & sealing',
    description:
      'We apply premium sealant/coating for protection and shine, ensuring durability and easy maintenance.',
    img: '/sandpolish/steps/step4.jpg',
  },
  {
    id: 5,
    title: 'Final inspection & cleanup',
    description:
      'We inspect the finished floor, clean up all dust and ensure your space is ready to use.',
    img: '/sandpolish/steps/step5.jpg',
  },
];

export default function SandPolishProcess() {
  return (
    <section className="sp-process">
      <h2 className="sp-process-title">How It Works</h2>
      <div className="sp-steps">
        {steps.map((step, idx) => (
          <div key={step.id} className="sp-step">
            <div className="sp-step-image">
              <img src={step.img} alt={step.title} />
            </div>
            <div className="sp-step-text">
              <h3>
                <span className="sp-step-number">0{step.id}</span> {step.title}
              </h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
