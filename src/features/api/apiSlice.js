import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Определите BASE_URL
const BASE_URL = "https://api.itbook.store/1.0";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ isbn13 }) => `/product/${isbn13}`,
            providesTags: ["Product"]
        })
    })
});

export const { useGetProduct } = apiSlice;
