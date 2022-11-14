import React, { useState, useEffect } from "react";
import "./App.css";

function Box() {
  const [color, setColor] = useState(0);
  const [Circle, setCircle] = useState(0);
  const colorsArr = ["red", "green", "purple", "pink", "blue"];

  useEffect(() => {
    const timer = setInterval(() => {
      setColor((prev) => {
        if (prev === 4) {
          clearInterval(timer);
          setCircle("50%");
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 500);
  }, [setColor]);

  return (
    <div
      className="box"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: `${colorsArr[color]}`,
        borderRadius: `${Circle}`,
      }}
    ></div>
  );
}

function App() {
  return <Box />;
}
export default App;
