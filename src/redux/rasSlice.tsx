// src/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface rasState {
  sortingMethod: string;
  searchInput: string;
}

const initialState: rasState = {
  sortingMethod: "MOST_RECENT",
  searchInput: "",
};

const rasSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.searchInput = action.payload;
    },
    updateSortingMethod: (state, action) => {
      state.sortingMethod = action.payload;
    },
  },
});

export const { updateSearch, updateSortingMethod } = rasSlice.actions;
export default rasSlice.reducer;
