// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import { shopApi } from "./shopApi";
import { userApi } from "./userApi";
import ProductReducer from "../redux/productSlice";
import UserReducer from "../redux/userSlice";
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    product: ProductReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),


});
