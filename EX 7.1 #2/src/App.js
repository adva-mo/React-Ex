import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  let [colorInLable, setColorInLable] = useState("click on a color!");

  const colors = ["blue", "red", "yellow"];

  return (
    <div>
      {colors.map((color) => {
        return <Button color={color} func={setColorInLable} />;
      })}
      <label>{colorInLable}</label>
    </div>
  );
}

export default App;
