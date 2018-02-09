import React from 'react';

class Messaging extends React.Component {
    state = {

    }

    render() {
        return (
            <div className='messaging'>
                <div className='online'></div>
                <div className='msg-name'> Messaging </div>
                <div className='write'>
                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M11,8.75l2-2V13a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H9.25l-2,2H4v7h7V8.75ZM6,8.59L5,11l2.41-1L12.9,4.52,11.48,3.1Zm8.85-6.73-0.71-.71a0.5,0.5,0,0,0-.71,0L12.25,2.34l1.41,1.41,1.19-1.19A0.5,0.5,0,0,0,14.85,1.85Z"></path>
                    </g>
                </svg>
                </div>
                <div className='gear'>
                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M8,6a2,2,0,1,0,2,2A2,2,0,0,0,8,6ZM8,9.13A1.13,1.13,0,1,1,9.13,8,1.13,1.13,0,0,1,8,9.13Zm5.36-1.49L15,6.12,13.12,2.88,11,3.54l-0.15,0a0.5,0.5,0,0,1-.49-0.39L9.88,1H6.12L5.64,3.17a0.5,0.5,0,0,1-.49.39L5,3.54,2.88,2.88,1,6.12,2.64,7.63a0.5,0.5,0,0,1,0,.74L1,9.88l1.88,3.25L5,12.46l0.15,0a0.5,0.5,0,0,1,.49.39L6.12,15H9.88l0.49-2.17a0.5,0.5,0,0,1,.49-0.39l0.15,0,2.12,0.66L15,9.88,13.36,8.37A0.5,0.5,0,0,1,13.36,7.63Zm-1.1,1.93,0.68,0.63-0.58,1-0.88-.28a2.12,2.12,0,0,0-2.71,1.56l-0.2.9H7.42l-0.2-.9a2.12,2.12,0,0,0-2.71-1.56l-0.88.28-0.58-1,0.68-.63a2.13,2.13,0,0,0,0-3.12L3.06,5.81l0.57-1L4.52,5.09A2.12,2.12,0,0,0,7.22,3.53l0.2-.9H8.58l0.2,0.9a2.12,2.12,0,0,0,2.71,1.56l0.88-.28,0.57,1-0.68.63A2.13,2.13,0,0,0,12.26,9.56Z"></path>
                    </g>
                </svg>
                </div>
            </div>
        );
    }
}
export default Messaging;