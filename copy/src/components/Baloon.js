import React from "react";
import "./Baloon.css";

const Baloon = (props) => {
  return (
    <div
      className="baloon"
      style={{
        backgroundColor: `${props.color}`,
      }}
    ></div>
  );
};

export default Baloon;
