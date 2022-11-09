import React from "react";

function Button(props) {
  const clickHndler = (e) => {
    props.func((prev) => e.target.textContent);
  };
  return <button onClick={clickHndler}>{props.color}</button>;
}

export default Button;
