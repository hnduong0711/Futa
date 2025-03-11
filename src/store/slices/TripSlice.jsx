import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripType: "oneWay", // oneWay hoặc roundTrip
  departureTrip: null, // Thông tin chuyến đi
  returnTrip: null, // Thông tin chuyến về (nếu là khứ hồi)
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload;
      if (state.tripType === "oneWay") {
        state.returnTrip = null; // Xóa chuyến về nếu chọn 1 chiều
      }
    },
    selectDepartureTrip: (state, action) => {
      state.departureTrip = action.payload;
    },
    selectReturnTrip: (state, action) => {
      state.returnTrip = action.payload;
    },
    resetTrip: () => initialState,
  },
});

export const { setTripType, selectDepartureTrip, selectReturnTrip, resetTrip } =
  tripSlice.actions;
export default tripSlice.reducer;
