import React, { useContext } from "react";
// import { useState } from "react";
import colorsContext from "../utils/context";

function TopMenu() {
  console.log(colorsContext);
  const ctx = useContext(colorsContext);
  console.log(ctx);

  return (
    <ul style={{ display: "flex" }} className={ctx.isDay ? "" : "ul-dark"}>
      <li>home</li>
      <li>about</li>
      <button
        onClick={() => {
          console.log("changing state");
          ctx.setisDay((prev) => !prev);
        }}
        className={ctx.isDay ? "" : "btn-dark"}
      >
        {ctx.isDay ? "make night" : "make day"}
      </button>
    </ul>
  );
}

export default TopMenu;
