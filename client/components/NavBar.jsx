import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  console.log('NAVBAR RENDERED');
  return(
    <nav>
      <h1> THIS IS THE NAVBAR </h1>
      <Link to="/">Home</Link>
      <Link to="/watchlist"> Watchlist</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default NavBar;
