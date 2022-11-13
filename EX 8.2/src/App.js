import React from "react";
import data from "./data.js";
import "./App.css";
import NinjaCard from "./components/NinjaCard";

function App() {
  console.log(data);
  return (
    <div>
      <h1>Ninja Turtles</h1>
      <h3>Order Pizza with The Turtles</h3>
      <div className="ninja-cards-container">
        {data.map((turtle) => (
          <NinjaCard
            name={turtle.name}
            img={turtle.name}
            pizzaToppings={turtle.pizzaToppings}
          />
        ))}
      </div>
      <div>
        <h2>our order</h2>
      </div>
    </div>
  );
}

export default App;
