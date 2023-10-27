import React from 'react';
import { Link, Redirect } from 'react-router-dom';

// Login Component
const Login = ({
  authUser, updateLogin, loginForm, sendLogin,
}) => {
  // If authorised redirec to root
  if (authUser) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendLogin(loginForm.email, loginForm.password);
  };

  const guestLogin = () => {
    sendLogin('guest@email.com', 'pass123');
  };

  // Otherwise display login page
  return (
    <div className="login container flex-column">
      <h1>Login Here !</h1>
      <form className="flex-column" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Email</legend>
          <input
            type="text"
            id="login-email"
            size="20"
            required
            onChange={(e) => updateLogin('email', e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            type="password"
            id="login-pass"
            size="20"
            required
            onChange={(e) => updateLogin('password', e.target.value)}
          />
        </fieldset>
        <button
          className="login-button"
          type="submit"
        >
          Log In
        </button>
      </form>
      <p>
        No Account?
        <Link to="/login">Sign Up</Link>
      </p>
      <button
        className="login-button"
        type="button"
        onClick={guestLogin}
      >
        Login as Demo
      </button>
    </div>
  );
};

export default Login;
