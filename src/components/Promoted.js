import React from 'react';
import promo from '../assets/promotedsites.png';

function Promoted() {
    return (
        <div className='promoted'>
            <div className='promo-title'>
                <div> Promoted </div>
                <div> &#x22ef; </div>
            </div>
            <img src={promo} alt='borked' />
        </div>
    );
}
export default Promoted;