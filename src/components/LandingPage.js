import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Title from './Title';
import InfoSection from "./InfoSection";
import SignUp from './SignUp';

import './styles/LandingPage.css';


export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="landing-page">
      <main role="main">
        <Title />
        <InfoSection />
        <SignUp />
      </main>
    </div>
  );   
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);