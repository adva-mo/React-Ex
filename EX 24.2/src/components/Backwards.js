import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";

function Backwards() {
  const { sendRequest, isLoading, error, data } = useHttp(
    "https://swapi.dev/api/people/1/"
  );
  // console.log(request);

  useEffect(() => {
    sendRequest();
  }, []);

  return <div>backwards</div>;
}

export default Backwards;
