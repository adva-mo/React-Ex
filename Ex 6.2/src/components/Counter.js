import React, { useState } from "react";

function Counter() {
  const [display, setDisplay] = useState("block");

  const clickHndler = () => {
    display === "block" ? setDisplay("none") : setDisplay("block");
    console.log(display);
  };

  return (
    <div className="main-box">
      <button onClick={clickHndler}>show/hide</button>
      <div className="yellow-box" style={{ display: `${display}` }}></div>
    </div>
  );
}
export default Counter;
