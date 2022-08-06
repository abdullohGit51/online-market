import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import "./product.css";
function Product({ id, price, title, image, product }) {
  const products = useSelector((state) => state.product.products);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDetail = (e) => {
    e.preventDefault();
    navigate(`productDetail/${id}`);
  };
  const choseBtn = () => {
    const product1 = {
      ...product,
      soni: count,
    };
    const chesk = products.some((item) => item.id === id);
    if (chesk) {
      alert("mahsulot qowilgan ")
    } else {
      dispatch(addProduct(product1));
    }
  };
  const minusBtn = () => {
    if (count === 1) setCount(1);
    else setCount(count - 1);
  };
  return (
    <div className="list">
      <img onClick={showDetail} width={"200px"} src={image} alt={title} />
      <p>{title}</p>
      <p>{price} som</p>
      <div className="btn">
        <button onClick={minusBtn}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="buton" onClick={choseBtn}>tanlash</button>
    </div>
  );
}

export default Product;
