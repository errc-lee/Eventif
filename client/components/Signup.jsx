import React from 'react';

// Login Component
const Signup = props => (
  <div className='container'>
    <h1>SIGN UP !</h1>
    <ul>
      <li>Email:<input type='text' id='email' required></input></li>
      <li>Username: <input type='text' id='username' size='20' required></input></li>
      <li>Password: <input type='password' id='password' size='20' required></input></li>
    </ul>
    <button>Signup</button>
  </div>
);

export default Signup;
