import React, { useState } from "react";
import carMarket from "../carMarket";
import "./App.css";
import Nav from "./nav/Nav.js";

function App() {
  const [hero, setHero] = useState(null);

  const getAllButtonsLable = (data) => {
    let res = Object.keys(data);
    return res;
  };

  const logoClickHndler = () => {
    setHero((prev) => null);
  };

  return (
    <>
      <div className="nav">
        <h2 id="logo" onClick={logoClickHndler}>
          Car market
        </h2>
        <Nav title={getAllButtonsLable(carMarket)} setHero={setHero} />
      </div>
      <div className="content-main-box">
        <h1>{hero ? hero : "welcome to our market!"}</h1>
      </div>
    </>
  );
}

export default App;
