import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import Title from './Title';
import InfoSection from "./InfoSection";
import LoginForm from './LoginForm';

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
        <LoginForm />
        <p className="lp-text">Need an account? <Link className="account-link" to='/register'>Register</Link></p>
      </main>
    </div>
  );   
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);