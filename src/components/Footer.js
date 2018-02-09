import React from 'react';
import tinylogo from '../assets/smalllogo.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='break'></div>
      <div className='footer-row1'>
        <div>About</div><div>Help Center</div><div>Privacy &amp; Terms</div>
      </div>
      <div className='footer-row2'>
        <div>Advertising</div><div>Business Services</div>
      </div>
      <div className='footer-row3'>
        <div>Get the LinkedIn app</div><div>More</div>
      </div>
      <div className='footer-row4'>
        <img src={tinylogo} alt='broke' />
         <div> LinkedIn Corporation © 2018 </div>
    </div>

    </div>
  );
}
export default Footer;