import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetCartProducts = createAsyncThunk(
  "cart/fetchCartProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetCartProducts.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      return state;
    });
  },
});

export const { addToCart, deleteFromCart, clearCart } = CartSlice.actions;

export const cartReducer = CartSlice.reducer;
