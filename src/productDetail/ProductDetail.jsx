import React from "react";
import { useParams } from "react-router-dom";
import { useProductsQuery } from "../services/productApi";
import "./ProductDetail.css";
function ProductDetail() {
  const { data, isSuccess } = useProductsQuery();
  const { id } = useParams();
  const chosenProduct =
    isSuccess && data.find((product) => product.id === parseInt(id));
  return (
    <div>
      <h1>About product</h1>
      <div className="productDetail">
        <img width={"330px"} src={chosenProduct.image} alt="" />
        <p>{chosenProduct.title}</p>
        <p>{chosenProduct.price} som</p>
      </div>
    </div>
  );
}

export default ProductDetail;
