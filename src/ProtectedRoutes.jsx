import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const user = useSelector((state) => state.user.user);

  return user ? <Outlet /> : <Navigate to="login" />;
}

export default ProtectedRoutes;
