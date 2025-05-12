// src/slices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  isOpened: boolean;
}

const initialState: CounterState = {
  isOpened: false,
};

const navSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    togglenav: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { togglenav } = navSlice.actions;
export default navSlice.reducer;
