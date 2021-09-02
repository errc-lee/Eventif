import React from 'react';

// Login Component
const Login = props => (
  <div className="login-container">
    <h1>LOGIN HERE !</h1>
    <ul>

      {/* LOGIN EMAIL INPUT */}
      <li>
        <input
          type="text"
          id="login-email"
          size="20"
          placeholder="Email"
          required
          onChange={(e) => props.updateLogin('email', e.target.value)}
          // value={props.loginForm.email}
        />
      </li>

      {/* LOGIN PASSWORD INPUT */}
      <li>
        <input
          type="password"
          id="login-pass"
          size="20"
          placeholder="Password"
          required
          onChange={(e) => props.updateLogin('password', e.target.value)}
          // value={props.loginForm.password}
        />
      </li>
    </ul>

    {/* LOGIN BUTTON */}
    <button
      className="login-button"
      type="button"
      onClick={() => props.sendLogin(props.loginForm.email, props.loginForm.password)}
    >
      Log In
    </button>
  </div>
);

export default Login;
