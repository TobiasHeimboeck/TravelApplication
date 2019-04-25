import React from 'react';
import SecondLandingPage from './containers/SecondLandingPage.js';
import CitiesPage from './containers/CitiesPage.js';
import CityPage from './containers/CityPage.js';
import AccountPage from './containers/AccountPage.js';
import LoginPage from './containers/LoginPage.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SecondLandingPage />
        <CitiesPage />
        <CityPage />
        <AccountPage />
        <LoginPage />
      </div>
    );
  }
}

export default App;