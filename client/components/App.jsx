import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Import Redux Related:
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// Import React Components
import NavBar from './NavBar.jsx';
import Watchlist from './Watchlist.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Main from './Main.jsx';

const mapStateToProps = ({ users }) =>({
  loginForm: users.loginForm,
  signupForm: users.signupForm,
  authUser: users.authUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateLogin: (field, value) => {
    dispatch(actions.updateLoginActionCreator(field, value));
  },
  sendLogin: (email, password) => {
    dispatch(actions.sendLoginActionCreator(email, password));
  },
  updateSignup: (field, value) => {
    dispatch(actions.updateSignupActionCreator(field, value));
  },
  sendSignup: (username, email, password) => {
    dispatch(actions.sendSignupActionCreator(username, email, password));
  },
  sendLogout: () => {
    dispatch(actions.sendLogoutActionCreator());
  },
});

// App Component
const App = (props) => {
  console.log('APP COMPONENT');
  return (
    <div>
      <NavBar authUser={props.authUser} />

      {/* React Router Switches */}
      <Switch>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
        <Route path="/signup">
          <Signup
            updateSignup={props.updateSignup}
            signupForm={props.signupForm}
            sendSignup={props.sendSignup}
          />
        </Route>
        <Route path="/login">
          <Login
            updateLogin={props.updateLogin}
            loginForm={props.loginForm}
            sendLogin={props.sendLogin}
          />
        </Route>
        <Route path="/logout">
          <Logout
            authUser={props.authUser}
            sendLogout={props.sendLogout}
          />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
