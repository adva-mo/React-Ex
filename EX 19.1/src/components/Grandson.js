import React, { useContext } from "react";
import authContext from "./stroe-context";

function Grandson() {
  const ctx = useContext(authContext);
  console.log(ctx);
  return (
    <ul>
      <h1>gifts:</h1>
      {ctx.gifts.map((g, i) => {
        return <li key={i}>{g}</li>;
      })}
    </ul>
  );
}

export default Grandson;
