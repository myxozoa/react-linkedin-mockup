import React from 'react';

import jobs from '../assets/jobs.svg';
import messenging from '../assets/messenging.svg';
import network from '../assets/network.svg';
import notifications from '../assets/notifications.svg';
import home from '../assets/home.svg'
import logo from '../assets/logo.svg';
import down_arrow from '../assets/down_arrow.svg';
import ghost_person from '../assets/ghost_person.svg';
import gear from '../assets/gear.svg';

class TopBar extends React.Component {
    state = {

    }

    render() {

        return (
            <div className='top-bar'>
                <div className='search'>
                    <div className='logo'>
                        <img src={logo} alt='brorked'/>
                        <input type='text' placeholder='&#x2315;  Search coming soon' />
                    </div>
                </div>
                <div className='top-middle'>
                    <div className='navigation'>
                        <img src={home} alt='brorked'/>
                        <img src={network} alt='brorked'/>
                        <img src={jobs} alt='brorked'/>
                        <img src={messenging} alt='brorked'/>
                        <img src={notifications} alt='brorked'/>
                    </div>
                    <img src={down_arrow} alt='brorked' />
                    <img src={ghost_person} alt='brorked' />
                    <img src={gear} alt='brorked' />
                    <img src={down_arrow} alt='brorked' />

                </div>
            </div>
        );
    }
}

export default TopBar;