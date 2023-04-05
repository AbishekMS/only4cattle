import React from "react";
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaInstagram} from 'react-icons/fa';

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram /> <AiFillTwitterCircle /> <FaFacebook/>
      </div>
      <p> &copy; 2023   Only4Cattle.in</p>
    </div>
  );
}

export default Footer;
