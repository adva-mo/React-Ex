import React, { useState } from "react";
// import { useContext } from "react";

import "./App.css";
import Grandfather from "./components/Grandfather";
import authContext from "./components/stroe-context";

function App(props) {
  // const ctx = useContext(authContext);
  const [gifts, setGifts] = useState([]);
  return (
    <authContext.Provider value={{ setGifts: setGifts, gifts: gifts }}>
      <Grandfather />
    </authContext.Provider>
  );
}

export default App;
