//! ex 13.3
// import React, { useEffect, useState } from "react";

// export default function Box({ setColor, color }) {
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

//   return (
//     <div
//       className="box"
//       style={{
//         width: "200px",
//         height: "200px",
//         backgroundColor: `${color}`,
//       }}
//     ></div>
//   );
// }
