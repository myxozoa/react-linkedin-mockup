import React from 'react';
import Bubbles from './Bubbles';

class Connections extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='connections'>
                <div className='con-num'> {this.props.num} </div>
                <div className='your'> Your connections </div>
                <div className='see-all'> See all </div>
                <Bubbles />
                <div className='conn-break'></div>
                <div className='contacts'>Add personal contacts</div>
                <form>
                    <input autoComplete='on' type='email' placeholder='Email' />
                    <button> Continue </button>
                </form>
                <div className='conn-options'> <div>More options</div> </div>
                <div className='conn-info'>
                    <div>
                    <span className='conn-info-text'>We'll import your address book to suggest conections.</span>
                    <span className='conn-info-link'> Learn more </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Connections;