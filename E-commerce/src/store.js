import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice"
import productsReducer from "./features/product-slice"

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer
    }
});