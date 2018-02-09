import React from 'react';

class Person extends React.Component {
    state = {
        numConnections: Math.floor(Math.random() * 1000),
        connected: false,
    }

    render() {
        return (
            <div className="person">
                <div className="person-pic">
                    <img src={this.props.pic} alt='broke' />
                </div>
                <div className='person-name'>{this.props.name}</div>
                <div className='job'>{this.props.job}</div>
                <button onClick={() => {
                    this.props.incdec(this.state.connected);
                    this.setState({ connected: !this.state.connected });
                }}>Connect</button>
            </div>
        );
    }
}
export default Person;
