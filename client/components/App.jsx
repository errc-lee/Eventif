import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Import React Components
import NavBar from './NavBar.jsx';
import Watchlist from './Watchlist.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Main from './Main.jsx';

// App Component
const App = () => {
  console.log('APP COMPONENT')
  return(
    <div>
      <NavBar />

      {/* React Router Switches */}
      <Switch>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>

    </div>
  )
};

export default App;