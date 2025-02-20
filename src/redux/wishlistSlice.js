import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      // Avoid duplicates
      if (!state.some(recipe => recipe.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
