import React from 'react';

import './styles/InfoSection.css';

export default function InfoSection() {
  return (
    <div>
      <section className="info-section-container">
        <h2 className="info-section-title">Keep in touch with family, friends and contacts.</h2>
        <p className="info-section-text">Contactualize helps keep you in touch with your personal network.  Create your list of your people. Add important notes for each person. Record the social interactions you have with each person. Rememeber and follow up on what is happening in their lives.</p>
      </section>
        <img className="dashboard-image" src="https://i.ibb.co/JxLbWp9/Screen-Shot-2018-12-01-at-3-38-04-PM.png" alt="Contactualize Dashboard" border="0" />
    </div>
  );
}