import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Backet from "./pages/backet/Backet";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Nav from "./components/nav/Nav";
import Register from "./pages/register/Register";
import ProductDetail from "./productDetail/ProductDetail";
import ProtectedRoutes from "./ProtectedRoutes";
import { getUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"));
    dispatch(getUser(userr));
    console.log(userr);
  }, [dispatch]);
  useEffect(() => {
    const userr = JSON.parse(localStorage.getItem("user"));
    dispatch(getUser(userr));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/backet" element={<Backet />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
