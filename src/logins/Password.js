import React from "react";
import './login.css';
//import ReactDOM  from "react";
import PassNav from "./PassNav";



function  Password(){


  const handler=()=>{
    alert("Password was reseted");
   }

  
  return(
    <div className="main">
      <div className="container">
        <div id="square">
         
          <div className="left">
            <h1>Add your email to reset password</h1>
            <form action="#" >
              <input
                
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <button type="submit" onClick={handler}>Submit</button>
            </form>
          </div>
        </div>
        <PassNav/>
      </div>
    </div>
  )
 
}
export default Password;