import React from 'react';

import InfoSection from "./InfoSection";
import SignUp from './SignUp';


export default function LandingPage(props) {
  return (
    <div>
      <main role="main">
        <InfoSection />
        <SignUp />
      </main>
    </div>
  );
}