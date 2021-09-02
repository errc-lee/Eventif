import React from 'react';

// Login Component
const Signup = props => (
  <div className="signup-container">
    <h1>SIGN UP !</h1>
    <ul>
      <li>
        Email:
        <input
          type="email"
          id="signup-email"
          required
          onChange={(e) => props.updateSignup('email', e.target.value)}
        />
      </li>
      <li>
        Display Name:
        <input
          type="text"
          id="signup-username"
          required
          onChange={(e) => props.updateSignup('username', e.target.value)}
        />
      </li>
      <li>
        Password:
        <input
          type="password"
          id="signup-pass"
          size="20"
          required
          onChange={(e) => props.updateSignup('password', e.target.value)}
        />
      </li>
    </ul>
    <button
      className="signup-button"
      type="button"
      onClick={() =>
        props.sendSignup(props.signupForm.email, props.signupForm.username, props.signupForm.password)
      }
    >
      Signup
    </button>
  </div>
);

export default Signup;
