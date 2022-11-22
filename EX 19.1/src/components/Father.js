import React, { useContext } from "react";
import { useEffect } from "react";
import Son from "./Son";
import authContext from "./stroe-context";

function Father() {
  const ctx = useContext(authContext);
  //   console.log(ctx);
  const arrayOFgifts = ["bicycle", "PJ masks", "Batman mask"];

  useEffect(() => {
    ctx.setGifts(arrayOFgifts);
  }, []);
  return (
    <div>
      <Son />
    </div>
  );
}

export default Father;
