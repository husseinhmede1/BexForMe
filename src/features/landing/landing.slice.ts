import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Landing } from "./landing.type";

const initialState: Landing = {};

const makeLandingApiCall = createAsyncThunk(
  "landing/makeLandingApiCallStatus",
  async (request: any) => {
  }
);

const landingSlice = createSlice({
  name: "landing",
  initialState: initialState,
  reducers: {
    setLanding: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(makeLandingApiCall.pending, (state, action) => {
    });
    builder.addCase(makeLandingApiCall.fulfilled, (state, action) => {
    });
    builder.addCase(makeLandingApiCall.rejected, (state, action) => {
    });
  },
});

export const landingReducer = landingSlice.reducer;

export const landingActions = { ...landingSlice.actions };
