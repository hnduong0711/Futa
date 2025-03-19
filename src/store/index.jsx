import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./slices/TripSlice";

const store = configureStore({
  reducer: {
    trip: tripReducer,
  },
});

export default store;
