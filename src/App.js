import React from 'react';

import TopBar from './components/TopBar';
import tinyLogo from './assets/tiny_logo21.svg';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <img src={tinyLogo} alt='brorked'/>

      </div>
    );
  }
}

export default App;
