import React, { useState } from "react";
import { Link } from "react-router-dom";
import store from "../utils/store";

function Products() {
  const [storeItems, setStoreItems] = useState(store);

  return (
    <div>
      {/* {console.log(storeItems)} */}
      <h1>Products page</h1>
      <ul>
        {storeItems.map((i) => {
          return <li key={i.title}>{i.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
