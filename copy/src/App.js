import React, { useState, useEffect } from "react";
import "./App.css";

function Box({ setColor, color }) {
  const colorsArr = ["green", "purple", "pink", "blue"];
  useEffect(() => {
    for (let val of colorsArr) {
      const timer = setTimeout(() => {
        setColor((PREV) => val);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [setColor]);
  colorsArr.unshift();

  return (
    <div
      className="box"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: `${color}`,
      }}
    ></div>
  );
}

function App() {
  const [color, setColor] = useState(["red"]);

  return <Box color={color} setColor={setColor} />;
}
export default App;
