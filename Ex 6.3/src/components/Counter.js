import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState("0");
  let [color, setColor] = useState("black");

  const clickHndler = (e) => {
    if (counter > -10 && counter < 10) {
      if (e.target.id === "plus") {
        counter++;
        setCounter(counter);
      } else {
        counter--;
        setCounter(counter);
      }
      if (counter === 0) setColor("black");
      else if (counter < 0) setColor("red");
      else setColor("green");
    } else {
      alert("out of range");
    }
  };

  return (
    <div className="main-box">
      <button id="plus" onClick={clickHndler}>
        +
      </button>
      <p style={{ color: color }}>{counter}</p>
      <button id="minus" onClick={clickHndler}>
        -
      </button>
    </div>
  );
}
export default Counter;
