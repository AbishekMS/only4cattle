import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';

function SignNav() {
  return (
    <div className="actions">
    
    <Link to="login">
    <button id="frontSide" type="button">Login</button>
    </Link>
 
  </div>
  )
}

export default SignNav;   