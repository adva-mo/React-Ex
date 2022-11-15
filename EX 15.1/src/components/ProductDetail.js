import React from "react";
import { useParams } from "react-router-dom";

//? object with key valu pairs, the keys are the dinamic segmants we definded

function ProductDetail() {
  const params = useParams();

  return (
    <div>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
    </div>
  );
}

export default ProductDetail;
