import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import './assets/style/App.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/reducers/rootReducder.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import SecondLandingPage from './containers/SecondLandingPage.js';
import CitiesPage from './containers/CitiesPage.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={SecondLandingPage} />
      <Route path="/cities" component={CitiesPage} />
    </div>
  </Router>
);

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));
serviceWorker.unregister();