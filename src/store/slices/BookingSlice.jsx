import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk để đặt vé
export const bookTicket = createAsyncThunk(
  'booking/bookTicket',
  async (bookingData, { getState }) => {
    const { user } = getState();
    if (!user.isAuthenticated) {
      throw new Error('User not authenticated');
    }
    const response = await axios.post('/api/bookings', {
      ...bookingData,
      userId: user.userId,
      token: user.token,
    });
    return response.data;
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    form: {
      origin: '', 
      destination: '', 
      departureDate: null, 
      returnDate: null, 
      isRoundTrip: false, 
    },
    bookingDetails: {
      
      seatNumbers: [], 
      seatCount: 0, 
      pickupPoint: '', 
      totalPrice: 0, 
      scheduleId: null, 
      bookingId: null, 
      status: null, 
    },
    loading: false, 
    error: null, 
    status: null, 
  },
  reducers: {
    updateForm(state, action) {
      state.form = { ...state.form, ...action.payload };
    },
    updateBookingDetails(state, action) {
      state.bookingDetails = { ...state.bookingDetails, ...action.payload };
    },
    toggleRoundTrip(state) {
      state.form.isRoundTrip = !state.form.isRoundTrip;
      if (!state.form.isRoundTrip) {
        state.form.returnDate = null;
      }
    },
    resetForm(state) {
      state.form = {
        origin: '',
        destination: '',
        departureDate: null,
        returnDate: null,
        isRoundTrip: false,
      };
      state.bookingDetails = {
        seatNumbers: [],
        seatCount: 0,
        pickupPoint: '',
        totalPrice: 0,
        scheduleId: null,
        bookingId: null,
        status: null,
      };
      state.loading = false;
      state.error = null;
      state.status = null;
    },
    selectSchedule(state, action) {
      const schedule = action.payload;
      state.bookingDetails.scheduleId = schedule.id;
      state.bookingDetails.totalPrice = schedule.price * state.bookingDetails.seatCount;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = null;
      })
      .addCase(bookTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingDetails = {
          ...state.bookingDetails,
          ...action.payload, // Cập nhật từ API (bookingId, status, v.v.)
        };
        state.status = 'success';
      })
      .addCase(bookTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export const { updateForm, updateBookingDetails, toggleRoundTrip, resetForm, selectSchedule } =
  bookingSlice.actions;
export default bookingSlice.reducer;