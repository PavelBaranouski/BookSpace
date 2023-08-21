import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { buildUrl } from "../../utils/common";
import { BASE_URL } from "../../utils/constants";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ isbn13 }) => `/books/${isbn13}`,
            providesTags: ["books"],
        }),
        getProducts: builder.query({
            query: (params) => ({ url: `/search/${params?.title ?? ''}` }),
            providesTags: ["books"],
        }),
    }),
});

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;
