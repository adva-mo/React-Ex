//! here we are building a custom hook that fetch data in all methods and transform data
//! according to the functions passed by the component which called the costum hook

import { useState } from "react";

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    // setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("REQ FAILED");
      const data = await response.json();
      console.log(data);
      setData(data);
      // setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };
  // sendRequest();
  return {
    isLoading,
    error,
    sendRequest,
    data,
  };
};
export default useHttp;
