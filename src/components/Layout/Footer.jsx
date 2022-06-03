import React from 'react';
import copyright from './../../assets/images/copyright-symbol-svgrepo-com.svg';

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <img src={copyright} alt="copyright logo" width="17" height="17" />
        <span>2022 HRNet | All Rigth Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
