import React from 'react';

// Login Component
const Login = props => (
  <div className='container'>
    <h1>LOGIN HERE !</h1>
    <ul>
      <li><input type='text' id='username' size='20' placeholder='Username' required></input></li>
      <li><input type='password' id='password' size='20' placeholder='Password' required></input></li>
    </ul>
    <button>Login</button>
  </div>
);

export default Login;
