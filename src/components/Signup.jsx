import React from 'react';
import { Redirect, Link } from 'react-router-dom';

// Login Component
const Signup = ({
  authUser, updateSignup, signupForm, sendSignup,
}) => {
  // If authorised redirect to root
  if (authUser) {
    return <Redirect to="/" />;
  }

  const handleSubmit = () => sendSignup(signupForm.email, signupForm.username, signupForm.password);

  // Otherwise display signup page
  return (
    <div className="signup container flex-column">
      <h1>Create an Account :</h1>
      <form className="flex-column" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Email</legend>
          <input
            type="email"
            id="signup-email"
            required
            onChange={(e) => updateSignup('email', e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Display Name</legend>
          <input
            type="text"
            id="signup-username"
            required
            onChange={(e) => updateSignup('username', e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            type="password"
            id="signup-pass"
            size="20"
            required
            onChange={(e) => updateSignup('password', e.target.value)}
          />
        </fieldset>
        <button
          className="signup-button"
          type="submit"
        >
          Signup
        </button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;
