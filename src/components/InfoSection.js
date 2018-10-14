import React from 'react';

import './styles/InfoSection.css';

export default function InfoSection() {
  return (
    <div className="info-section-container">
      <section>
        <h2>Keep in touch with family, friends and contacts.</h2>
        <p>[<em>placeholder for screenshot of Contactualize dashboard</em>]</p>
        <p className="info-section-text">Contactualize helps keep you in touch with your personal network.  Create your list of your people. Add important notes for each person. Record the interactions you have with each person and remember what is happening in their lives.</p>
      </section>
      <section>
        <h2>Remember what has happened between the two of you.</h2>
        <p>[<em>placeholder for screenshot of creating a new contact</em>]</p>
        <p className="info-section-text" >The key to staying in touch and following up with who you know.  Contactualize provides you with a simple interface to create for each contact that includes basic contact information, important notes and a record of each interaction that has occurred.</p>
      </section>
      {/* <section>
        <h2>Schedule Interactions.</h2>
        <p>[<em>placeholder for screenshot of interactions</em>]</p>
        <p>Remember to send that email, make that call or schedule that visit.  Interactions tracks your history and allows your to customize the frequency and the type of interaction by scheduling reminders.</p>
      </section> */}
    </div>
  );
}