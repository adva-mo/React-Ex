import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState("0");
  let starter = value;
  const clickHndler = () => {
    starter++;
    setValue(`${starter}`);
    console.log("click");
  };
  return (
    <div>
      <button onClick={clickHndler}>increment</button>
      <span>{starter}</span>
    </div>
  );
}
export default Counter;
