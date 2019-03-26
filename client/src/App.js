import React from 'react';
import SecondLandingPage from './containers/SecondLandingPage.js';
import CitiesPage from './containers/CitiesPage.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SecondLandingPage />
        <CitiesPage /> 
      </div>
    );
  }
}

export default App;