import React from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
// const passwordLength = length({min: 10, max: 72});
// const matchesPassword = matches('password');


import './styles/SignUp.css';

export default function SignUp() {
  return (
    <div className="signup-div">
      <h2 className="sign-up-title">Try Contactualize Now</h2>
      <form className='signup-form'>
          <div>
            <label className='signup-label' htmlFor="first-name">First name</label>
            <input className='signup-field' type="text" name='first-name' id='first-name' />
          </div>
          <div>
            <label className='signup-label' htmlFor="last-name">Last name</label>
            <input className='signup-field' type="text" name='last-name' id='last-name' />
          </div>
          <div>
            <label className='signup-label' htmlFor="username">Email</label>
            <input className='signup-field' type="text" name='username' id='username' />
          </div>
          <div>
            <label className='signup-label' htmlFor="password">Password</label>
            <input className='signup-password' type="password" name='password' id='password' />
          </div>
          <button className="landingpage-signup-button" type='submit'>Sign Up</button>
          <div className="signup-button">
            <p className="lp-text">Already have an account?</p><button className="landingpage-button" type='submit'>Log In</button>
          </div>  
      </form>
    </div>
  );
}