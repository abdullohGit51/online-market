// src/services/taskApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  // src/services/taskApi.js
endpoints: (builder) => ({
    Products: builder.query({
      query: () => "/products"
      
    }),
    addProduct: builder.mutation({
      query: (task) => ({
        url: "/products",
        method: "POST",
        body: task
      })
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: rest
      })
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE"
      })
    })
  })
});
// src/services/taskApi.js
export const {
    useProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
  } = productApi;
