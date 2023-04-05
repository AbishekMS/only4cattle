import React from "react";
import './login.css';
//import ReactDOM  from "react";
//import { Link } from "react-router-dom";
//import Signup from "./Signup";
//import Password from "./Password";
import LogBar from "./LogNav";

function Login(){
  const handler=()=>{
    alert("Your're Login now");
   }
 
  return(
    <div className="main">
      <div className="container">
        <div id="square">
          <div className="front">
            <h1>Login</h1>
            <form action="#" >
              <input
                
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="submit" onClick={handler}>Submit</button>
            </form>
          </div>
          
        </div>
        <LogBar/>
       
      </div>
    </div>
  )
 
}
export default Login;