import React from 'react';
import InfoSection from "./InfoSection";
import SignUp from './SignUp';

import './styles/LandingPage.css';


export default function LandingPage(props) {
  return (
    <div className="landing-page">
      <main role="main">
        <InfoSection />
        <SignUp />
      </main>
    </div>
  );
}