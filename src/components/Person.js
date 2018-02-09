import React from 'react';

class Person extends React.Component {
    state = {
        numConnections: Math.floor(Math.random() * 1000),
        connected: false,
    };

    render() {
        return (
            <div className="person">
                <div
                    className="delete-person"
                    onClick={() => {
                        this.props.remove(this.props.id);
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        x="0"
                        y="0"
                        preserveAspectRatio="none"
                        focusable="false"
                    >
                        <g>
                            <path d="M13,4.32L9.31,8,13,11.69,11.69,13,8,9.31,4.31,13,3,11.69,6.69,8,3,4.31,4.31,3,8,6.69,11.68,3Z" />
                        </g>
                    </svg>
                </div>
                <div className="person-pic">
                    <img src={this.props.pic} alt="broke" />
                </div>
                <div className="person-name">{this.props.name}</div>
                <div className="job">{this.props.job}</div>
                <button
                    onClick={() => {
                        this.props.incdec(this.state.connected);
                        this.setState({ connected: !this.state.connected });
                    }}>
                    {this.state.connected ? 'Unconnect' : 'Connect'}
                </button>
            </div>
        );
    }
}
export default Person;
