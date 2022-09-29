import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const newRealeaseSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchingVideos.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchingVideos.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(fetchingVideos.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export const fetchingVideos = createAsyncThunk(
  "video/fetchingVideos",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/api/videos");
      return response.data.videos;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const STATUSES = Object.freeze({
  LOADING: "Loading",
  ERROR: "Error",
  IDLE: "Idle",
});

export default newRealeaseSlice.reducer;
