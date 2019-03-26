import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import './assets/style/App.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SecondLandingPage from './containers/SecondLandingPage.js';
import CitiesPage from './containers/CitiesPage.js';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={SecondLandingPage} />
      <Route path="/cities" component={CitiesPage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();