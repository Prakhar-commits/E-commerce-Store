import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice"
import productsReducer from "./features/product-slice"
import categoriesReducer from "./features/categories-slice"

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer,
    }
});