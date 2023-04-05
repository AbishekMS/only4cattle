import React from "react";
import MultiplePizzas from "../assets/cows1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p style={{paddingTop:50}}>
        Only4Cattle.in is an online marketplace established with the aim to strengthen Livestock Economy of the country. It helps farmers, livestock enterprises, self-employed, individuals to achieve their full potential while ensuring livestock well-being.
        </p>
        <h2 style={{paddingTop:20 }}>Only4Cattle.in offers:</h2>
        <ul>
        <li><p style={{paddingTop:20}} >Livestock owners, a platform to showcase their stocks to a plethora of genuinely interested buyers. It optimizes their returns without the hassle of taking livestock to animal fairs, engaging intermittent brokers, doing discounted sales under pressure and curb wait time for sales.</p></li>
        <li><p style={{paddingTop:20}}>Buyers a platform that significantly reduces the time and energy spent on discovery of sellers, livestock verification, price negotiation, and final purchase.</p></li>
        <li><p style={{paddingTop:20}}>Its users an access to vast pool of knowledge, literature and research content on livestock to ensure wellbeing and productivity of livestock.</p></li>
       </ul>
        <p>Only4Cattle.in is an all-inclusive ecosystem that offers innovative business models to unlock the value and income generating potential from livestock. It leverages the penetration of Internet users and employees advance technology to enhance value to all the stakeholders. The ecosystem is an effort to help grow contribution of livestock in lives of individuals, entrepreneurs and nation as a whole.</p>
      </div>
    </div>
  );
}

export default About;
