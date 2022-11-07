//? imr
//? a wrapper can be a component that returns all props.children

import React from "react";
import "./App.css";
import Mother from "./components/Mother";

function App() {
  const data = { title: "A Tale Of 5 Ballons" };
  return (
    <div className="mother">
      <Mother title={data.title}></Mother>
    </div>
  );
}
export default App;
