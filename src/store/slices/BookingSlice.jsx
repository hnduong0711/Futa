import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Hàm đặt vé
export const bookTicket = createAsyncThunk(
  "Booking/bookTicket",
  async (bookingData, { getState }) => {
    const user = getState();
    const response = await axios.post("/api/bookings", {
      ...bookingData,
      userId: user.userId,
      token: user.token,
    });
    return response.data;
  }
);

const BookingSlice = createSlice({
  name: "Booking",
  initialState: {
    form: {
      origin: "",
      destination: "",
      departureDate: null,
      returnDate: null,
      seatNumbers: [],
      seatCount: 0,
      pickupPoint: "",
      dropoffPoint: "",
      totalPrice: 0,
      isRoundTrip: false,
      scheduleId: null,
    },
    bookingDetails: null,
    loading: false,
    error: null,
    status: null,
  },
  reducers: {
    updateForm(state, action) {
      const payload = action.payload;
      if (payload.isRoundTrip !== undefined && payload.isRoundTrip !== null) {
        state.form.isRoundTrip = !!payload.isRoundTrip; // Chuyển thành boolean
      }
      state.form = { ...state.form, ...payload };
    },
    toggleRoundTrip(state) {
      console.log("Before toggle:", state.form.isRoundTrip);
      state.form.isRoundTrip = !state.form.isRoundTrip;
      console.log("After toggle:", state.form.isRoundTrip);
      if (!state.form.isRoundTrip) {
        state.form.returnDate = null;
      }
    },
    resetForm(state) {
      state.form = {
        origin: "",
        destination: "",
        departureDate: null,
        returnDate: null,
        seatNumbers: [],
        seatCount: 0,
        pickupPoint: "",
        dropoffPoint: "",
        totalPrice: 0,
        isRoundTrip: false,
        scheduleId: null,
      };
      state.bookingDetails = null;
      state.loading = false;
      state.error = null;
      state.status = null;
    },
    selectSchedule(state, action) {
      const schedule = action.payload;
      state.form.scheduleId = schedule.id;
      state.form.totalPrice = schedule.price * state.form.seatCount;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingDetails = action.payload;
        state.status = "success";
      })
      .addCase(bookTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default BookingSlice.reducer;
export const { toggleRoundTrip, resetForm, selectSchedule, updateForm } =
  BookingSlice.actions;
