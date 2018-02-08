import React from 'react';

import TopBar from './components/TopBar';
import Ad from './components/Ad';
import Invitations from './components/Invitations'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar username='Ronnie'/>
        <Ad />
        <Invitations />
        <Connections />
        <Promoted />
        <PYMK />
        <Messaging />

      </div>
    );
  }
}

export default App;
