//! to build a costum hook component we will name it use...
//! this is a geranty to react that you will use the costum hooks only as a valid hooks.
//* the hook can return anything: array,strings etc...
//* we can use state full logic in the hooks we can use other react hooks in and
//* this allows us to share our logic across components

//* we can make the custom hooks dinamics

import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) setCounter((prev) => prev + 1);
      else setCounter((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]);
  return { counter, addOne, removeOne, double, divide };
};
export default useCounter;
