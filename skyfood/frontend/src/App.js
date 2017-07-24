import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import { LoginPage, HomePage } from './pages'
import { PrivateRoute } from './components'

import './App.css';

injectTapEventPlugin();
const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;