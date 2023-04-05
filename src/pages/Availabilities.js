import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Availabilities.css";

function Availabilities() {
  return (
    <div className="Availabilities">
      <h1 className="menuTitle">Cattle for Sales</h1>
      <div className="menuList">
        {MenuList.map((e, key) => {
          return (
            <MenuItem
              key={key}
              image={e.image}
              name={e.name}
              price={e.price}
              location={e.location}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Availabilities;
