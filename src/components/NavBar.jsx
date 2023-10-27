import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const NavBar = ({ authUser, username, useremail }) => {
  const [sessionMenu, setSessionMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    }
  }, []);

  const handleResize = () => (window.innerWidth < 600
    ? setIsMobile(true)
    : setIsMobile(false));

  const handleSessionMenu = () => setSessionMenu(!sessionMenu);
  const mobileStyle = { display: `${isMobile && !sessionMenu ? 'none' : 'unset'}` };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div className="navbar">
        {/* {NAVBAR BRAND} */}
        <div className="nav-item navbar-logo">
          <Link to="/">
            Eventif
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* {NAVBAR LEFT} */}
          <div className="navbar-nav">
            {/* <button className="nav-item" type="button">
            <Link to="/" className="nav-link">Home</Link>
          </button> */}
            {authUser
              ? (
                <button className="nav-item" type="button">
                  <Link to="/watchlist" className="nav-link">Watchlist</Link>
                </button>
              )
              : null}
          </div>

          {/* {NAVBAR RIGHT} */}

          <div className="navbar-nav">
            {isMobile && (
            <div className="navbar-profile-icon" onClick={handleSessionMenu}>
              <CgProfile size={20} />
            </div>
            )}
            <div className="navbar-session" style={mobileStyle}>
              {authUser
                ? (
                  <>
                    <button className="nav-item" type="button">
                      <span className="nav-link">
                        {`Logged in as ${username}`}
                      </span>
                    </button>
                    <button className="nav-item" type="button">
                      <Link to="/logout" className="nav-link">Logout</Link>
                    </button>
                  </>
                )
                : (
                  <>
                    <button className="nav-item" type="button">
                      <Link to="/login" className="nav-link">Login</Link>
                    </button>
                    <button className="nav-item" type="button">
                      <Link to="/signup" className="nav-link">Signup</Link>
                    </button>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
