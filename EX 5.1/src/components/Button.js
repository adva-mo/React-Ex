import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button>{props.value}</button>
    </div>
  );
}

export default Button;

//? slc- short cut to a new component
