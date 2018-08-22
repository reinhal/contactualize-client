import React from 'react';

import InfoSection from "./InfoSection";
import SignUp from './SignUp';

export default function LandingPage(props) {
  return (
    <div>
      <main role="main">
        <h3>{props.message}</h3>
        <InfoSection />
        <SignUp />
      </main>
    </div>
  );
}