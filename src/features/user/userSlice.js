import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: {},
        cart: [],
        isLoading: false,
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
            let newCart = [...state.cart];
            const foundIndex = newCart.findIndex(item => item.isbn13 === payload.isbn13);
            if (foundIndex !== -1) {
                newCart[foundIndex].quantity = payload.quantity ? payload.quantity : newCart[foundIndex].quantity + 1;
            } else {
                newCart.push({ ...payload, quantity: 1 });
            }
            state.cart = newCart;
        },
        removeItemFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item.isbn13 !== payload);
        },

    },
});

export default userSlice.reducer;

export const { addItemToCart, removeItemFromCart } = userSlice.actions;
