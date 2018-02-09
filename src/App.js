import React from 'react';

import TopBar from './components/TopBar';
import Ad from './components/Ad';
import Invitations from './components/Invitations';
import Connections from './components/Connections';
import Promoted from './components/Promoted';
import PYMK from './components/PYMK';
import Messaging from './components/Messaging';
import Footer from './components/Footer';

class App extends React.Component {
    state = {
        connNum: 913,
    };

    incdecConnections = (connected) => {
        let newNum = this.state.connNum;
        if (connected) {
            console.log(this.state.connNum);
            this.setState({ connNum: --newNum });
            console.log(this.state.connNum);
        } else {
            this.setState({ connNum: ++newNum });
        }
    }

    render() {
        return (
            <div className="app">
                <TopBar username="Ronnie" />
                <Ad />
                <div className="app-page">
                    <Invitations />
                    <PYMK
                        incdec={this.incdecConnections}
                    />
                    <Connections num={this.state.connNum} />
                    <Promoted />
                    <Footer />
                    <Messaging />
                </div>
            </div>
        );
    }
}

export default App;
