import React, { useState } from "react";
// import { useContext } from "react";

import "./App.css";
import colorsContext from "./utils/context";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [isDay, setisDay] = useState(true);
  return (
    <colorsContext.Provider value={{ isDay, setisDay }}>
      <TopMenu />
      {isDay ? <Home /> : <About />}
    </colorsContext.Provider>
  );
}

export default App;
