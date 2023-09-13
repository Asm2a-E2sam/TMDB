import { createSlice } from "@reduxjs/toolkit";

const favoriteslice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    toggleFavorite: function (state, action) {
      const existingIndex = state.favorites.findIndex(
        (item) => item.id == action.payload.id
      );

      if (existingIndex == -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(existingIndex, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoriteslice.actions;

export default favoriteslice.reducer;
