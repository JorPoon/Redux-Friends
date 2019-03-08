import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import User from './components/User';
import './App.css';

const App = () =>  {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/user">Sign In</Link>
          </nav>
        <h1>Welcome to Friends</h1>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/user" component={User} />
        </div>
      </Router>
    );
}

export default App;
