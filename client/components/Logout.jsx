import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Login Component
const Logout = props => {
  // Logout user out when logout component renders:
  useEffect(() => {
    console.log('LOGOUT COMPONENT SIGNING OUT USER');
    props.sendLogout();
  }, []);

  if (props.authUser) {
    return <h1>Logging you out...</h1>;
  };

  return <Redirec to="/" />;
};

export default Logout;
