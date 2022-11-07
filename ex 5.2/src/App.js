//? imr
//? a wrapper can be a component that returns all props.children

import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const data = [
    {
      link1: "fsdfsd",
      link2: "fsdfsd",
      title: "fvdfvfvsg",
      des: "ddewwwwws",
      img: "img1",
    },
    {
      link1: "fsdfsd",
      link2: "fsdfsd",
      title: "fvdxxxxxxs",
      des: "desssss",
      img: "img2",
    },
    {
      link1: "fגגדג",
      link2: "fsdfגדגכגsd",
      title: "fשגכגxs",
      des: "desגכשגss",
      img: "imגכג",
    },
  ];

  return (
    <div>
      <Card
        img={data[0].img}
        title={data[0].title}
        des={data[0].des}
        link1={data[0].link1}
        link2={data[0].link2}
      />
      <Card
        img={data[1].img}
        title={data[1].title}
        des={data[1].des}
        link1={data[1].link1}
        link2={data[1].link2}
      />
      <Card
        img={data[2].img}
        title={data[2].title}
        des={data[2].des}
        link1={data[2].link1}
        link2={data[2].link2}
      />
    </div>
  );
}
export default App;
