import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    addCount: (state, action,count) => {
      const changedProduct = state.products?.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            soni: count.payload,
          };
        }
      });
      state.products=changedProduct
    },
  },
});

export const { addProduct, addNum } = productSlice.actions;

export default productSlice.reducer;
