import React from "react";
import useCounter from "../hooks/use-counter";

function ForwardCounter() {
  const counter = useCounter();
  return <div>{counter}</div>;
}

export default ForwardCounter;
