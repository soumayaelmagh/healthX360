import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import contactSlice from "./contactSlice";
import rasSlice from "./rasSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    contact: contactSlice,
    ras: rasSlice,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
