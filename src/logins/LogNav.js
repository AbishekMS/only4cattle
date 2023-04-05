import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';

function LogBar() {
  return (
   
    <div className="actions">
    <Link to='password'>
      <button id="leftSide" type="button" >Forgot Password</button>
      </Link>
    <Link to='signup'>
      <button id="rightSide" type="button">Sign up</button></Link>
   
      </div>
  )
}

export default LogBar;   