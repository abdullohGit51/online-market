import React from "react";
import "./home.css";
import { useProductsQuery } from "../../services/productApi";
import Product from "../../components/Product/Product";
import BannerExample from "../../components/Corusel/Banner";
import Footer from "../../components/Footer/Footer";
function Home() {
  const { data, error, isLoading, isSuccess } = useProductsQuery();
  return (
    <div className="home" >
      <BannerExample/>
      <h1 className="h1" >Products</h1>
      <div className="home_p">
        {isLoading && <h1>Loading...</h1>}
        {isSuccess &&
          data.map((product) => (
            <div className="product_list">
              <Product key={product.id} {...product} product={product} />
            </div>
          ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
