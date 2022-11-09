import React, { useRef, useState } from "react";
import girl from "./ photos/girl.jpg";
import girl2 from "./ photos/girl2.jpg";
import girlblack from "./ photos/girlblack.jpg";
import girl2b from "./ photos/girl2b.jpg";
import "./App.css";

function App() {
  const [colorImgUrl, blackImgUrl] = useState(girl);
  const [colorImgUrl2, blackImgUrl2] = useState(girl2);

  const handlehoverIn = (e) => {
    if (e.target.id === "left-img") blackImgUrl((prev) => girlblack);
    else blackImgUrl2((prev) => girl2b);
  };
  const handlehoverOut = (e) => {
    if (e.target.id === "left-img") blackImgUrl((prev) => girl);
    else blackImgUrl2((prev) => girl2);
  };

  return (
    <div className="img-container flex-row">
      <img
        onMouseEnter={handlehoverIn}
        onMouseLeave={handlehoverOut}
        id="left-img"
        src={colorImgUrl}
      />
      <img
        onMouseEnter={handlehoverIn}
        onMouseLeave={handlehoverOut}
        id="right-img"
        src={colorImgUrl2}
      />
    </div>
  );
}

export default App;
