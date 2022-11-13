import React from "react";
import "./NinjaCard.css";

function NinjaCard({ name, img, pizzaToppings }) {
  return (
    <div className="ninja-card">
      <h4>{name}</h4>
      {console.log(pizzaToppings)}
      <img src={`${img}`} />
      <div>
        <h5>Toppings:</h5>
        {/* add dinamically the toppings */}
      </div>
    </div>
  );
}

export default NinjaCard;
