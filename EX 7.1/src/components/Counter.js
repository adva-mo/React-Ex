import React, { useState } from "react";
import data from "./data.js";
import Name from "./Name";
import Card from "./Card";

console.log(data);

const getObjectsNames = () => {
  return data.map((obj) => {
    return obj.name;
  });
};
// console.log(getObjectsNames());

const getYear = (date) => {
  let year = date.split("-");
  return year[2];
};

const getBornBefore = () => {
  return data.filter((obj) => {
    let year = getYear(obj.birthday);
    console.log(year);
    return year < 1990;
  });
};

function Counter() {
  return (
    <div>
      <h2>objects names:</h2>
      {getObjectsNames().map((name) => {
        return <Name name={name} />;
      })}
      {getBornBefore().map((obj) => {
        return (
          <Card
            name={obj.name}
            birthday={obj.birthday}
            fMeats={obj.favoriteFoods.meats}
            fFish={obj.favoriteFoods.fish}
          />
        );
      })}
    </div>
  );
}
export default Counter;
