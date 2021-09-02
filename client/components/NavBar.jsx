import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ authUser, username, useremail }) => {
  console.log('NAVBAR RENDERED');

  // If authenticated:
  if (authUser) {
    return (
      <nav className="nav-bar">
        {/* <h1> THIS IS THE NAVBAR </h1> */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/watchlist" className="nav-link"> Watchlist</Link>
        <Link to="/logout" className="nav-link">Logout</Link>
        <span>{`${username} - ${useremail}`}</span>
      </nav>
    );
  }

  // If not authenticated:
  return (
    <nav className="nav-bar">
      {/* <h1> THIS IS THE NAVBAR </h1> */}
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/signup" className="nav-link">Signup</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
};

export default NavBar;
