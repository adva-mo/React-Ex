//? imr
//? a wrapper can be a component that returns all props.children

import React from "react";
import "./App.css";
import Mother from "./components/Mother";

function App() {
  return (
    <div>
      <Mother title="A Tale Of 5 Ballons"></Mother>
    </div>
  );
}
export default App;
