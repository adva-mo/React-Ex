//! we can use `useRefs` to established connection between html elemnt
//? we can use it instead of listening to events that way our code is leaner and
//? its less work. on listening, normally on change, requierd listening on every key-stroke
//? refs are alternativ way to get into input values
//? we can set the input fields only! by asiggning =""
//?when using refs, our elements will be uncontroled, because the ifinite state, the value which is reflected in it, is not controlled by react, we dont feed the element with a new value we just use this value for other things.

import React, { useRef } from "react";

function Button() {
  const button = useRef("");

  return <button ref={button} />;
}
