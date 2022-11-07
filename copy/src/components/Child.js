import React from "react";
import Baloon from "./Baloon";
import "./Child.css";

const Child = (props) => {
  return (
    <div className="child">
      <h3>{props.name}</h3>
      <Baloon className="baloon" color={props.color}></Baloon>
    </div>
  );
};
export default Child;
