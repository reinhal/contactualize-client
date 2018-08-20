import React from 'react';


export default function SignUp() {
  return (
    <div>
      <section role="region">
        <h3>Try Contactualize Now</h3>
        <form class='signup-form'>
            <div>
              <label for="first-name">First name</label>
              <input value='enter a first name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' value='enter a last name' />
            </div>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' value='enter an email' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>
    </div>
  );
}