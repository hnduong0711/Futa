import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./slices/TripSlice";
import adminTripReducer from "./slices/admin/AdminTripSlice";
import bookingReducer from "./slices/BookingSlice";
import scheduleReducer from "./slices/ScheduleSlice";

const store = configureStore({
  reducer: {
    // user reducers
    trip: tripReducer,
    booking: bookingReducer,
    schedule: scheduleReducer,

    // admin reducers
    adminTrip: adminTripReducer,
  },
});

export default store;
