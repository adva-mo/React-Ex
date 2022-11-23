import React from "react";
import useCounter from "../hooks/use-counter";

function Backwards() {
  const counter = useCounter(2, "-");
  console.log(counter);
  return <div>backwards</div>;
}

export default Backwards;
