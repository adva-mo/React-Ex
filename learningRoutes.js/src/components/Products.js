import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">book</Link>
        </li>
        <li>
          <Link to="/products/p2">car</Link>
        </li>
        <li>
          <Link to="/products/p3">online course</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
