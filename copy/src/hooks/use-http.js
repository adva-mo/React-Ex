//! here we are building a custom hook that fetch data in all methods and transform data
//! according to the functions passed by the component which called the costum hook

import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,

        body: JSON.stringify(requestConfig.body),
      });
      if (!response.ok) throw new Error("REQ FAILED");
      const data = await response.json();
      applyData(data);
    } catch (e) {
      setIsLoading(false);
    }
    return {
      isLoading,
      error,
      sendRequest,
    };
  };
};
export default useHttp;
// -------
// import { useEffect, useState } from "react";

// const useCounter = (num) => {
//   const [counter,setCounter]=useState(num)
//   const addOne = () => num + 1;
//   const removeOne = () => num - 1;
//   const double = () => num *2
//   const divide = () => num /2;

//   return { counter, addOne, removeOne, double, divide };
// };
// export default useCounter;
