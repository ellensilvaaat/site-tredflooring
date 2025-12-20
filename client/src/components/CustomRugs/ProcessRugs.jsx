import React from 'react';
import './ProcessRugs.css';

const steps = [
  {
    id: 1,
    title: 'Colour & Style',
    description:
      'Order up to three complimentary samples to explore colours, textures, and styles in your own space. Viewing the samples under your natural lighting and next to your furniture helps ensure the perfect match for your interior.',
    img: "https://ik.imagekit.io/ijsd2xvnc/marek-levak-KWdLnnkD4hc-unsplash.jpg",
  },
  {
    id: 2,
    title: 'Define Your Dimensions',
    description:
      'Consider the layout of your room and how you’d like your furniture positioned to determine the ideal rug size. Our spacing guide helps you visualise balanced proportions, ensuring your custom rug feels intentional and perfectly integrated.',
    img: "https://ik.imagekit.io/ijsd2xvnc/Frame%2026.png",
  },
  {
    id: 3,
    title: 'Select Your Finishes',
    description:
      'Choose between overlocking for a timeless stitched edge or fabric binding for a sleek, minimal finish. Depending on your rug’s material and pile height, each option delivers a beautifully refined border tailored to your design vision.',
    img: "https://ik.imagekit.io/ijsd2xvnc/Frame%2027.png",
  },
];

export default function ProcessRugs() {
  return (
    <section className="wp-process">
      <h2 className="wp-process-title">Our Custom Rug Process</h2>

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
