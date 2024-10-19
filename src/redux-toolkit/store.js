// store.js
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productReducer";
import { categoriesReducer } from "./slices/categoriesReducer";
import { cartReducer } from "./slices/Cart-slice";
import { wishlistReducer } from "./slices/wishlistSlice";
import { authReducer } from "./slices/authSlice";

// Use default import

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});
