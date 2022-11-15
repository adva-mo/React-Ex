import React from "react";
import { NavLink } from "react-router-dom";
function MainHeader() {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="active" to={"/welcome"}>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainHeader;
