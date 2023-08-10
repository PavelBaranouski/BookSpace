import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/search/mongodb`);
            return res.data.books; // Возвращаем только список книг из ответа
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
    },
});

export default productsSlice.reducer;
