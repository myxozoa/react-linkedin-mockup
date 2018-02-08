import React from 'react';

import TopBar from './components/TopBar';
import Ad from './components/Ad';
import Invitations from './components/Invitations';
import Connections from './components/Connections';
import Promoted from './components/Promoted';
import PYMK from './components/PYMK';
import Messaging from './components/Messaging';


class App extends React.Component {
  state = {
    connNum: 913,
  }

  increaseConnections() {
    let newNum = this.state.connNum;
    this.setState({connNum: newNum++});
  }
  decreaseConnections() {
    let newNum = this.state.connNum;
    this.setState({connNum: newNum--});
  }

  render() {
    return (
      <div className="App">
        <TopBar username='Ronnie'/>
        <Ad />
        <Invitations />
        <div className='app-page'>
          <Connections num={this.state.connNum} inc={this.increaseConnections} dec={this.decreaseConnections}/>
          <Promoted />
          <PYMK />
        </div>
        <Messaging connNum={this.state.connNum}/>

      </div>
    );
  }
}

export default App;
