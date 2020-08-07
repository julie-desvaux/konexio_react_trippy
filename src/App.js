import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeContainer from './containers/HomeContainer';
import HotelsContainer from './containers/HotelsContainer';
import HotelContainer from './containers/HotelContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import Nav from './components/navigation/index';

import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Nav />
        <Switch>
          <Route path="/hotels/:id">
            <HotelContainer />
          </Route>
          <Route path="/hotels">
            <HotelsContainer />
          </Route>            
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/signup">
            <SignupContainer />
          </Route>
          <Route path="/">
            <HomeContainer />
          </Route>
          <Route>
            <NotFoundContainer />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;