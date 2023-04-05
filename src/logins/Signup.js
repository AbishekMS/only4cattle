import React from "react";
import './login.css';
import SignNav from "./SignNav";

function Signup(){
   const handler=()=>{
    alert("Your're signed up now");
   }


  return(
    <div className="main">
      <div className="container">
        <div id="square">
         
         
          <div className="right">
            <h1>Create a new account</h1>
            <form>
              <input
               
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full name"
              />
             
              <input
                
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="submit" onClick={handler} >Submit</button>
            </form>
            
          </div>
         
          
        </div>
        <SignNav/>

      </div>
    </div>
  )
 
}
export default Signup;