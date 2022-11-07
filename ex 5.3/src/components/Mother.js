import React from "react";
import Child from "./Child";

const Mother = (props) => {
  const kids = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];
  return (
    <div className="mother">
      <h1>{props.title}</h1>
      {kids.map(kid=>{
        <Child {kid}/>
      })}
      {/* <Child {...kids[0]}></Child>
      <Child {...kids[1]}></Child>
      <Child {...kids[2]}></Child>
      <Child {...kids[3]}></Child>
      <Child {...kids[4]}></Child> */}
    </div>
  );
};

export default Mother;

//! rendering elements dinamically
//* when jsx encount array of elements, itll render it one by another
//* so to render same component with deiffernet data each time we will use map method which returns an array of elements to render
//* we retransform an array of data into array of objects