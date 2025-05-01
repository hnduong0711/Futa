import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    const response = await axios.post("/api/login", {
      username,
      password,
    });
    return response.data;
  }
);

const UserSlice = createSlice({
  name: "User",
  initialState: {
    token: null,
    userId: null,
    username: '',
    loading: false,
    error: null,
  },
  reducers: {
    logout(state){
        state.token = null;
        state.userId = null;
        state.username = '';
        state.loading = false;
        state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.username = action.payload.username;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default UserSlice.reducer;