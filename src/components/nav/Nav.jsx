import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.css";
function Nav() {
  const products = useSelector((state) => state.product.products);
  const logedIn = useSelector((state) => state.user.loggedIn);
  console.log(products);

  return (
    <nav>
      <div className="nav_Left">
        <Link className="link" to={"/"}>
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="nav_centr">
        <Link className="link" to={"backet"}>
          Backet ({products.length})
        </Link>

        <Link className="link" to={"login"}>
          Login
        </Link>
        <button className="ogOutBtn">log out</button>
      </div>
    </nav>
  );
}

export default Nav;
