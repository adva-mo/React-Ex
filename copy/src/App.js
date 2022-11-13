import React, { useRef, useState, useEffect } from "react";

import "./App.css";

//! ex 13.1
// function App() {
//   const [favoriteColor, setfavoriteColor] = useState("blue");
//   return (
//     <div>
//       <h1>my favourite color is {favoriteColor}</h1>
//     </div>
//   );
// }

// export default App;

// //! ex 13.3
// function App() {
//   const [color, setColor] = useState(["red"]);
//   const colorsArr = ["green", "purple", "pink", "blue"];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setColor((PREV) => colorsArr[0]);
//       // color = colorsArr[i];
//       // setColor(color);
//     }, 500);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [setColor]);

//   return <Box color={color} setColor={setColor} />;
// }

//! ex 13.4

function App() {
  return (
    <form>
      <label>focused input: </label>
      <input autoFocus={true}></input>
    </form>
  );
}

export default App;
