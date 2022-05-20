import React from 'react';
import copyright from './../../assets/copyright-symbol-svgrepo-com.svg';

const Footer = () => {
   return (
      <footer>
         <div className="copyright">
            <img src={copyright} alt="copyright logo" />
            <span>2022 HRNet | All Rigth Reserved</span>
         </div>
      </footer>
   );
};

export default Footer;
