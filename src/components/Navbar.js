import React, { useState } from "react";
import logo from "../assets/cattlelogo.png";
import  {Link}  from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [links, setLinks] = useState(false);

  const handler = () => {
    setLinks(!links);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={links ? "open" : "close"}>
        <img src={logo} alt="logos" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu">Sales</Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>  
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Sales </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/login">Log In</Link>
       
        <button onClick={handler}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
