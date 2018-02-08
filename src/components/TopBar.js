import React from 'react';

import logo from '../assets/logo.svg';
import NavButtons from './NavButtons.js';

class TopBar extends React.Component {
    state = {

    }

    render() {

        return (
            <div className='top-container'>
            <div className='top-bar'>
                <div className='search'>
                    <div className='logo'>
                        <img src={logo} alt='brorked'/>
                        <input type='text' placeholder='Search coming soon' />
                    </div>
                </div>
                <div className='top-middle'>
                    <div className='navigation'>
                    <NavButtons />
                    </div>

                    <div className='user-dropdown'>
                        <div className='profile-pic'></div>
                        <div className='user-name'>
                            {this.props.username} <span><svg viewBox="0 0 24 24" width="21" height="21" preserveAspectRatio="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M8.8,10.66L14,5.12A0.07,0.07,0,0,0,13.93,5H2.07A0.07,0.07,0,0,0,2,5.12L7.2,10.66A1.1,1.1,0,0,0,8.8,10.66Z"></path>
                                                            </g>
                                                        </svg></span>
                        </div>
                    </div>











                </div>
                <div className='work'>
                    <div className='work-dropdown'>
                        <div><svg viewBox="0 0 24 24" width="21" height="21" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z"></path>
                                </g>
                            </svg></div>
                        <div> Free Upgrade to Premium </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default TopBar;