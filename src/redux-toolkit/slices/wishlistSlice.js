import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetWishList = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.wishlistItems.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetWishList.fulfilled, (state, action) => {
      state.wishlistItems = action.payload;
      return state;
    });
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
