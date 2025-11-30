import React from 'react';
import './Team.css';

const teamMembers = new Array(8).fill({
  name: 'Mark',
  description: 'example example\nexample example',
  image: "https://site-tredflooring-assets.s3.amazonaws.com/placeholder2.png" // substituir depois pelas imagens reais
});

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">
          Meet our <span>team</span>
        </h2>
        <p className="team-subtitle">
          The specialists who guide you from first chat to final install.
        </p>

        <div className="team-cards-wrapper">
          <div className="team-cards">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="card-bg" style={{ backgroundImage: `url(${member.image})` }} />
                <div className="card-overlay">
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
