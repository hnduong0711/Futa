import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Lấy danh sách lịch trình
export const fetchSchedule = createAsyncThunk(
  "Schedule/fetchSchedule",
  async () => {
    const response = await axios.get("/api/schedules");
    return response.data;
  }
);

// Lấy danh sách lịch trình theo yêu cầu tìm kiếm
export const searchSchedules = createAsyncThunk(
  "Schedule/searchSchedules",
  async ({ origin, destination, departureDate, returnDate, isRoundTrip }) => {
    console.log("Fetching schedules with params:", {
      origin,
      destination,
      departureDate,
      returnDate,
      isRoundTrip,
    });

    const response = await axios.get("/api/schedules", {
      params: {
        origin,
        destination,
        departureDate,
        returnDate: isRoundTrip ? returnDate : undefined, // Chỉ gửi returnDate nếu khứ hồi
        isRoundTrip,
      },
    });
    return response.data;
  }
);

const ScheduleSlice = createSlice({
  name: "Schedule",
  initialState: {
    allSchedules: [],
    schedules: [], // danh sách tìm kiếm
    loading: false,
    error: null,
  },
  reducers: {
    clearSchedules(state) {
      state.schedules = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.allSchedules = action.payload;
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchSchedules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchSchedules.fulfilled, (state, action) => {
        state.loading = false;
        state.schedules = action.payload;
      })
      .addCase(searchSchedules.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ScheduleSlice.reducer;
