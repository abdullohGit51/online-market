// src/services/shopApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["shops"],
  // src/services/shopApi.js
  endpoints: (builder) => ({
    Shops: builder.query({
      query: () => "/shop",
      providesTags: ["shops"],
    }),
    addShop: builder.mutation({
      query: (shop) => ({
        url: "/shop",
        method: "POST",
        body: shop,
      }),
      invalidatesTags: ["shops"],
    }),
    updateShop: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/shop/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["shops"],
    }),
    deleteShop: builder.mutation({
      query: (id) => ({
        url: `/shop/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["shops"],
    }),
  }),
});
// src/services/shopApi.js
export const {
  useShopsQuery,
  useAddShopMutation,
  useUpdateShopMutation,
  useDeleteShopMutation,
} = shopApi;
