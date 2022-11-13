import React, { useEffect, useState } from "react";

export default function Box({ setColor, color }) {
  const colorsArr = ["green", "purple", "pink", "blue"];
  useEffect(() => {
    for (let val of colorsArr) {
      const timer = setTimeout(() => {
        setColor((PREV) => val);
        // color = colorsArr[i];
        // setColor(color);
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
