import React from "react";
import { Link } from "react-router-dom";
import {GiFarmer} from 'react-icons/gi';
import BannerImage from "../assets/cows2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
         <h1><GiFarmer className="logo"/>Only4Cattle </h1>
        <p id="main">Find your suitable liveStocks here! </p>
        <Link to="/menu">
          <button>See Availabilities </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
