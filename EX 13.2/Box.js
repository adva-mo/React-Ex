import React, { useEffect } from "react";
import "./App.css";

export default function Box({ width, height, color, setisBoxShows }) {
  useEffect(() => {
    setTimeout(() => {
      setisBoxShows(false);
    }, 4000);
  });
  return (
    <div
      className="box"
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${color}`,
      }}
    ></div>
  );
}
