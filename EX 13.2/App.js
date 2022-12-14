import React, { useState, useEffect } from "react";
// import "./utils/u/tils.css";
import "./App.css";
import Box from "./Box";

//! ex 13.2
function App() {
  const [isBoxShows, setisBoxShows] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisBoxShows(true);
    }, 1000);
    return () => {
      console.log("return function");
    };
  }, []);

  const box1 = { width: "200px", height: "200px", color: "red" };
  return <>{isBoxShows && <Box {...box1} setisBoxShows={setisBoxShows} />}</>;
}

export default App;
