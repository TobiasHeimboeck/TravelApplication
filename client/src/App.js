import React from 'react';
import SecondLandingPage from './containers/SecondLandingPage.js';
import CitiesPage from './containers/CitiesPage.js';
import CityPage from './containers/CityPage.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SecondLandingPage />
        <CitiesPage />
        <CityPage />
      </div>
    );
  }
}

export default App;