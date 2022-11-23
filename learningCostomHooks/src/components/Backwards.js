import React from "react";
import useCounter from "../hooks/use-counter";

function Backwards() {
  const counter = useCounter(false);
  return <div>Backwards{counter}</div>;
}

export default Backwards;
