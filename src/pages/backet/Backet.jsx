import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChosenPro from "../../components/chosenPro/ChosenPro";
import "./backet.css";

function Backet() {
  const products = useSelector((state) => state.product.products);

 

  return (
    <div className="basket_list">

      {products.length > 0 ?
        products.map((product) => (
          <ChosenPro key={product.id} {...product} product={product} />
        )):<h1>Basket Empty</h1>}
    </div>
  );
}

export default Backet;
