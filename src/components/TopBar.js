import React from 'react';

import NavButtons from './NavButtons.js';
import Search from './Search.js';

class TopBar extends React.Component {
    state = {

    }

    render() {

        return (
            <div className='top-container'>
            <div className='top-bar'>
                <Search />
                <div className='top-middle'>
                    <div className='navigation'>
                        <NavButtons />
                        <div className='user-dropdown'>
                            <div className='profile-pic'></div>
                            <div className='user-title'>
                                <span>Me</span>
                                <span className='arrow'>&#x25BC;</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='work'>
                    <div className='work-dropdown'>
                        <svg viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z"></path>
                            </g>
                        </svg>
                        <div className='work-title'>
                            <span>Work</span>
                            <span className='arrow'>&#x25BC;</span>
                        </div>
                    </div>
                    <div className='upgrade'> Free Upgrade to Premium </div>
                </div>
            </div>
            </div>
        );
    }
}

export default TopBar;