import React from 'react';
import bubbles from '../assets/connectionsbubbles.png';

class Connections extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='connections'>
                <div className='con-num'> {this.props.num} </div>
                <div className='your'> Your connections </div>
                <div className='see-all'> See all </div>
                <img src={bubbles} alt='borked' />
            </div>
        );
    }
}
export default Connections;