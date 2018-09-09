import React from 'react';

import './styles/SignUp.css';

export default function SignUp() {
  return (
    <div>
      <h2>Try Contactualize Now</h2>
      <form className='signup-form'>
          <div>
            <label htmlFor="first-name">First name</label>
            <input className='signup-field' defaultValue='enter a first name' type="text" name='first-name' id='first-name' />
          </div>
          <div>
            <label htmlFor="last-name">Last name</label>
            <input className='signup-field' type="text" name='last-name' id='last-name' defaultValue='enter a last name' />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input className='signup-field' type="text" name='username' id='username' defaultValue='enter an email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input className='signup-field' type="password" name='password' id='password' />
          </div>
          <button className="sign-up-button" type='submit'>Sign Up</button>
          <p>Already have an account?</p>
          <button className="login-button" type='submit'>Log In</button>
      </form>
    </div>
  );
}