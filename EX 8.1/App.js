//? imr
//? a wrapper can be a component that returns all props.children

import React from "react";
import "./App.css";
import styled from "styled-components";

//! inlinestyle

// function Box1() {
//   return (
//     <div
//       style={{
//         width: 200,
//         height: 200,
//         backgroundColor: "green",
//       }}
//     >
//       <Box2 />
//     </div>
//   );
// }
// function Box2() {
//   return (
//     <div
//       style={{
//         width: 180,
//         height: 180,
//         backgroundColor: "blue",
//       }}
//     >
//       <Box3 />
//     </div>
//   );
// }
// function Box3() {
//   return (
//     <div
//       style={{
//         width: 160,
//         height: 160,
//         backgroundColor: "pink",
//       }}
//     >
//       <Box4 />
//       <Box4 />
//     </div>
//   );
// }
// function Box4() {
//   return (
//     <div
//       style={{
//         width: 140,
//         height: 50,
//         backgroundColor: "purple",
//         marginTop: "1rem",
//       }}
//     ></div>
//   );
// }

// function App() {
//   return <Box1 />;
// }

// //! classes

function Box1() {
  return (
    <div className="box1">
      <Box2 />
    </div>
  );
}
function Box2() {
  return (
    <div className="box2">
      <Box3 />
    </div>
  );
}
function Box3() {
  return (
    <div className="box3">
      <Box4 />
      <Box4 />
    </div>
  );
}
// function Box4() {
//   return <div className="box4"></div>;
// }

// //! styled components ---//

const Box4 = styled.div`
  background-color: green;
  width: 100px;
  height: 50px;
`;

// function Box1() {
//   return <Box2 />;
// }
// function Box2() {
//   return <Box3 />;
// }
// function Box3() {
//   return (
//     <div>
//       <Box4 />
//       <Box4 />
//     </div>
//   );
// }
// function Box4() {
//   return <div></div>;
// }

function App() {
  return (
    <div>
      <Box1 />
    </div>
  );
}
export default App;
