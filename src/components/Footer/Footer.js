import React from "react";
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer-box'>
      <p>&copy; {new Date().getFullYear()} All Rights Reserved. Created by C. P. Yeung.</p>
    </div>
  )
}

export default Footer;