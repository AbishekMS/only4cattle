import React from "react";


function MenuItem({ image, name, price,location }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p style={{paddingTop:20,paddingBottom:20}}>Rs.{price} </p>
      <p>{location}</p>
    </div>
  );
}

export default MenuItem;
