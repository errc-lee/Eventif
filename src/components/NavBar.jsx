import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ authUser, username, useremail }) => (
  <nav>
    <div className="navbar">
      {/* {NAVBAR BRAND} */}
      <div className="nav-item navbar-logo">
        <Link to="/">
          Eventif
        </Link>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* {NAVBAR LEFT} */}
        <div className="navbar-nav mr-auto">
          <button className="nav-item" type="button">
            <Link to="/" className="nav-link">Home</Link>
          </button>
          {authUser
            ? (
              <button className="nav-item" type="button">
                <Link to="/watchlist" className="nav-link">Watchlist</Link>
              </button>
            )
            : null}
        </div>

        {/* {NAVBAR RIGHT} */}

        {authUser
          ? (
            <div className="navbar-nav navbar-session ml-auto">
              <button className="nav-item" type="button">
                <span className="nav-link">
                  Logged in as
                  {' '}
                  {username}
                </span>
              </button>
              <button className="nav-item" type="button">
                <Link to="/logout" className="nav-link">Logout</Link>
              </button>
            </div>
          )
          : (
            <div className="navbar-nav navbar-session ml-auto">
              <button className="nav-item" type="button">
                <Link to="/login" className="nav-link">Login</Link>
              </button>
              <button className="nav-item" type="button">
                <Link to="/signup" className="nav-link">Signup</Link>
              </button>
            </div>
          )}
      </div>
    </div>
  </nav>
);

export default NavBar;
