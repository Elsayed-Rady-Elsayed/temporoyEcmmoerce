import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categoriesSlice/getCategories",
  async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    return data;
  }
);
export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: [],
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
