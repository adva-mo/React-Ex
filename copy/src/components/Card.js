import React from "react";

export default function Card(props) {
  return (
    <div>
      {console.log(props)}
      <h2>Name: {props.name}</h2>
      <p>Birthday: {props.birthday}</p>
      <p>
        Favourite meats:{" "}
        {props.fMeats.map((food) => {
          return food + " ";
        })}
      </p>
      <p>
        Favourite fish food:{" "}
        {props.fFish.map((food) => {
          return food + " ";
        })}
      </p>
    </div>
  );
}
